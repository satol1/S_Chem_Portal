// Аудит рендеринга химических формул тем (S_Chem_Portal).
// Прогоняет ВСЕ строки formula=/math=/caption=, массивы formulae: [...] и локальные
// константы formula:/shortFormula:/bond: из src/components/study/topics/** и
// src/data/studyBlocksData.ts через реальный парсер ChemFormula + KaTeX и выводит:
//   1) ошибки парсера/KaTeX (красный katex-error в UI), включая политические проверки
//      (20-RENDERING §1.2): mhchem \ce{} не установлен; кириллические условия над
//      стрелкой допустимы только через проп math; неподдерживаемые стрелки
//      (<==>, <--, одиночный <-) запрещены;
//   2) подозрительные верхние индексы ^{цифра...} и сырые символы внутри \mathrm —
//      список для ручной проверки «индексы внизу, заряды/степени окисления вверху».
// Запуск: node scripts/audit-formulas.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Transpile the real parser (ChemFormula.tsx) so the audit runs the exact production code
const chemSrc = fs.readFileSync(path.join(ROOT, 'src/components/scientific/ChemFormula.tsx'), 'utf8');
const transpiled = ts.transpileModule(chemSrc, {
  compilerOptions: {
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
  fileName: 'ChemFormula.tsx',
});
const js = transpiled.outputText.replace(/import\s+['"]katex\/dist\/katex\.min\.css['"];?/g, '');
fs.mkdirSync(path.join(ROOT, 'scratch'), { recursive: true });
const transpiledPath = path.join(ROOT, 'scratch/ChemFormula.transpiled.mjs');
fs.writeFileSync(transpiledPath, js);

const { convertFormulaToKaTeX } = await import(pathToFileURL(transpiledPath).href);
const { default: katex } = await import('katex');

const TARGETS = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) TARGETS.push(p);
  }
}
walk(path.join(ROOT, 'src/components/study/topics'));
TARGETS.push(path.join(ROOT, 'src/data/studyBlocksData.ts'));

const STR_RE = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g;

function extractStrings(block) {
  const out = [];
  let m;
  STR_RE.lastIndex = 0;
  while ((m = STR_RE.exec(block))) out.push(m[1] ?? m[2]);
  return out;
}

const collected = []; // { file, line, kind, raw }

for (const file of TARGETS) {
  const src = fs.readFileSync(file, 'utf8');
  const lineOf = (idx) => src.slice(0, idx).split('\n').length;

  // JS-literal unescape (\\ -> \, \' -> ', \n -> newline, ...)
  const unescape = (s) => s.replace(/\\(['"\\nrt])/g, (_, c) => ({ n: '\n', r: '\r', t: '\t' }[c] ?? c));

  // local data constants feeding dynamic props: formula: '...', shortFormula: '...', bond: '...', caption: '...'
  const reKeys = /(formula|shortFormula|bond|caption)\s*:\s*("((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')/g;
  let mk;
  while ((mk = reKeys.exec(src))) {
    collected.push({ file, line: lineOf(mk.index), kind: mk[1] === 'caption' ? 'caption' : 'const', raw: unescape(mk[3] ?? mk[4]) });
  }

  // formula="..." and math="..." (JSX attribute strings: no escape processing)
  for (const kind of ['formula', 'math', 'caption']) {
    const re = new RegExp(`${kind}="([^"]*)"`, 'g');
    let m;
    while ((m = re.exec(src))) {
      collected.push({ file, line: lineOf(m.index), kind, raw: m[1] });
    }
    // formula={`...`} / math={`...`} template literals
    const reT = new RegExp(`${kind}=\\{?\`([^\`]*)\``, 'g');
    while ((m = reT.exec(src))) {
      collected.push({ file, line: lineOf(m.index), kind, raw: unescape(m[1]) });
    }
  }

  // formulae: [ ... ] arrays
  const reArr = /formulae:\s*\[([\s\S]*?)\]/g;
  let m;
  while ((m = reArr.exec(src))) {
    for (const s of extractStrings(m[1])) {
      collected.push({ file, line: lineOf(m.index), kind: 'formulae', raw: unescape(s) });
    }
  }
}

// dedupe
const seen = new Set();
const unique = collected.filter((c) => {
  const k = `${c.kind}|${c.raw}`;
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const errors = [];
const suspicious = [];
let okCount = 0;

for (const c of unique) {
  // Policy checks (20-RENDERING §1.2) — ловятся до рендера
  if (/\\ce\{/.test(c.raw)) {
    errors.push({ ...c, issue: 'policy: mhchem \\ce{...} не установлен — используйте парсер ChemFormula (formula) или готовый LaTeX (math)' });
    continue;
  }
  if (c.kind !== 'math' && c.kind !== 'caption') {
    if (
      /-\(\s*[^)]*[а-яё][^)]*\)->/i.test(c.raw) ||
      /<=\(\s*[^)]*[а-яё][^)]*\)=>/i.test(c.raw) ||
      /<-\(\s*[^)]*[а-яё][^)]*\)->/i.test(c.raw)
    ) {
      errors.push({ ...c, issue: 'policy: кириллические условия над стрелкой — только через проп math с \\xrightarrow{\\text{...}} (правило 3)' });
      continue;
    }
    // неподдерживаемые стрелки: вырезаем поддерживаемые формы, остаток проверяем
    const stripped = c.raw
      .replace(/<=(?:\([^)]*\)|[^=>]+)=>/g, '')
      .replace(/<-(?:\([^)]*\)|[^->]+)->/g, '')
      .replace(/<=>|<->|⇄/g, '')
      .replace(/-(?:\([^)]*\)|t\s*,\s*(?:cat|кат|к)\.?|cat|кат|к|t)->/gi, '');
    if (/<--+>|<==+>|<-/.test(stripped)) {
      errors.push({ ...c, issue: 'policy: неподдерживаемая стрелка — используйте ->, <=>, <=(условие)=>, <-(условие)->, -(условие)->' });
      continue;
    }
  }

  let latex;
  if (c.kind === 'math') latex = c.raw;
  else {
    try {
      latex = convertFormulaToKaTeX(c.raw);
    } catch (e) {
      errors.push({ ...c, issue: `parser throw: ${e.message}` });
      continue;
    }
  }
  try {
    katex.renderToString(latex, { throwOnError: true, output: 'html' });
  } catch (e) {
    errors.push({ ...c, issue: `katex: ${String(e.message).split('\n')[0]}`, latex });
    continue;
  }
  // superscript that STARTS with a digit: possible subscript eaten into charge
  if (/\^\{\\?-?\d/.test(latex)) {
    suspicious.push({ ...c, latex });
  } else if (
    !/\\mathrm|\\xrightarrow|\\xrightleftharpoons|\\rightleftharpoons/.test(c.raw) &&
    /\\mathrm\{[^}]*(?:\(|\+|\^)[^}]*\}/.test(latex)
  ) {
    suspicious.push({ ...c, latex, note: 'raw symbol inside \\mathrm' });
  } else {
    okCount++;
  }
}

const rel = (f) => path.relative(ROOT, f).replace(/\\/g, '/');

console.log(`== TOTAL unique strings: ${unique.length}, clean: ${okCount} ==\n`);

console.log(`== KATEX/PARSER ERRORS (${errors.length}) ==`);
for (const e of errors) {
  console.log(`- ${rel(e.file)}:${e.line} [${e.kind}] ${JSON.stringify(e.raw)}\n    ${e.issue}\n    latex: ${e.latex ?? ''}`);
}

console.log(`\n== SUSPICIOUS ^{digit...} (manual review) (${suspicious.length}) ==`);
for (const s of suspicious) {
  console.log(`- ${rel(s.file)}:${s.line} [${s.kind}] ${JSON.stringify(s.raw)}\n    latex: ${s.latex}`);
}
