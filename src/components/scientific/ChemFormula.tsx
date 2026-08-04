import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface Props {
  math?: string;
  formula?: string;
  className?: string;
  displayMode?: boolean;
}

/**
 * Normalizes unicode chemical subscripts, superscripts, and symbols into standard ASCII.
 */
export function normalizeChemicalString(str: string): string {
  if (!str) return '';

  const subMap: Record<string, string> = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
  };

  const superMap: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-'
  };

  let res = str;
  for (const [uni, ascii] of Object.entries(subMap)) {
    res = res.replaceAll(uni, ascii);
  }
  for (const [uni, ascii] of Object.entries(superMap)) {
    res = res.replaceAll(uni, ascii);
  }

  // Replace electron 'ē' or 'e⁻' with '\bar{e}'
  res = res.replace(/ē|e⁻/g, '\\bar{e}');

  return res;
}

/**
 * Formats a single chemical element/species with coefficient and oxidation state for KaTeX.
 */
export function formatSpeciesLatex(elem: string, oxState: string): string {
  if (!elem) return '';

  const cleanElem = normalizeChemicalString(elem);

  const matchCoef = cleanElem.match(/^(\d+)(.+)$/);
  let coef = '';
  let body = cleanElem;
  if (matchCoef) {
    coef = matchCoef[1] + '\\,';
    body = matchCoef[2];
  }

  const formattedBody = body.replace(/(\d+)/g, '_{$1}');
  const chemLatex = `\\mathrm{${formattedBody}}`;

  let cleanOx = oxState.trim();
  if (cleanOx && !cleanOx.startsWith('+') && !cleanOx.startsWith('-') && cleanOx !== '0') {
    cleanOx = '+' + cleanOx;
  }
  const oxLatex = cleanOx ? `^{${cleanOx}}` : '';

  return `${coef}${chemLatex}${oxLatex}`;
}

/**
 * Formats electronic balance half-reaction into KaTeX LaTeX.
 */
export function formatHalfReaction(
  element: string,
  initialOxState: string,
  electronChangeText: string,
  finalElement: string,
  finalOxState: string
): string {
  const left = formatSpeciesLatex(element, initialOxState);
  const right = formatSpeciesLatex(finalElement, finalOxState);

  let eText = electronChangeText
    .replace(/ē|e⁻/g, '\\bar{e}')
    .replace(/\s+/g, ' ')
    .trim();

  return `${left} ${eText} = ${right}`;
}

/**
 * Formats reaction arrow condition string (temperature, catalysts, reagents) for KaTeX LaTeX.
 */
export function formatConditionLatex(cond: string): string {
  if (!cond) return '';
  let res = cond.trim();

  // Normalize Unicode chemical subscripts
  res = normalizeChemicalString(res);

  // Replace temperature expressions e.g. t=450°C, t=800-900°C, t=450°
  res = res.replace(/t\s*=\s*(\d+)(?:[–-](\d+))?\s*°?C?/gi, (_, t1, t2) => {
    return t2 ? `t=${t1}\\text{--}${t2}^{\\circ}\\text{C}` : `t=${t1}^{\\circ}\\text{C}`;
  });
  res = res.replace(/(\d+)(?:[–-](\d+))?\s*°C/gi, (_, t1, t2) => {
    return t2 ? `${t1}\\text{--}${t2}^{\\circ}\\text{C}` : `${t1}^{\\circ}\\text{C}`;
  });
  res = res.replace(/\bt\b(?!^{\\circ})/g, 't^{\\circ}');

  // Replace light / hv
  res = res.replace(/\bhv\b|\bhν\b/gi, 'h\\nu');

  // Replace common chemical formulas and catalysts in conditions
  res = res.replace(/\bV2O5\b/g, '\\mathrm{V_2O_5}');
  res = res.replace(/\bMnO2\b/g, '\\mathrm{MnO_2}');
  res = res.replace(/\bAl2O3\b/g, '\\mathrm{Al_2O_3}');
  res = res.replace(/\bTiO2\b/g, '\\mathrm{TiO_2}');
  res = res.replace(/\bH2SO4\b/g, '\\mathrm{H_2SO_4}');
  res = res.replace(/\bFe2O3\b/g, '\\mathrm{Fe_2O_3}');
  res = res.replace(/\bFeBr3\b/g, '\\mathrm{FeBr_3}');
  res = res.replace(/\bAlBr3\b/g, '\\mathrm{AlBr_3}');
  res = res.replace(/\bPt\/Rh\b/gi, '\\text{Pt/Rh}');
  res = res.replace(/\bPt\b/g, '\\text{Pt}');
  res = res.replace(/\bFe\b/g, '\\text{Fe}');
  res = res.replace(/\b(cat|кат|к)\.?\b/gi, '\\text{кат.}');

  // Clean up commas and spaces for KaTeX
  res = res.replace(/\s*,\s*/g, ',\\,');
  res = res.replace(/\s+/g, '\\,');

  return res;
}

/**
 * Converts standard chemical formulas or reactions into KaTeX LaTeX math string.
 */
export function convertFormulaToKaTeX(raw: string): string {
  if (!raw) return '';

  // If already contains ready KaTeX formatting with \mathrm, \ce, \xrightarrow, \rightleftharpoons
  if (raw.includes('\\mathrm') || raw.includes('\\ce{') || raw.includes('\\xrightarrow') || raw.includes('\\xrightleftharpoons') || raw.includes('\\rightleftharpoons')) {
    return raw;
  }

  let text = normalizeChemicalString(raw);

  // Pre-process parenthesized condition notes, concentrations or percentage labels e.g. (конц), (разб), (98.3%), (олеум), (98%)
  const notePlaceholders: string[] = [];
  text = text.replace(/\(([^)]*(?:[а-яА-ЯёЁ%]|конц|разб|олеум|газ|тверд|раствор|водн)[^)]*)\)/gi, (_, noteContent) => {
    const cleanNote = noteContent.trim().replace(/%/g, '\\%').replace(/\s+/g, '\\,');
    const idx = notePlaceholders.length;
    notePlaceholders.push(`\\text{\\,\\scriptsize{(${cleanNote})}}`);
    return `__NOTE_PLACEHOLDER_${idx}__`;
  });

  // Convert reversible reaction arrows with conditions: <=(cond)=> or <-(cond)->
  text = text.replace(/<=(?:\(([^)]+)\)|([^=>]+))=>/g, (_, c1, c2) => {
    const c = (c1 || c2 || '').trim();
    return ` \\xrightleftharpoons{${formatConditionLatex(c)}} `;
  });
  text = text.replace(/<-(?:\(([^)]+)\)|([^-]+))->/g, (_, c1, c2) => {
    const c = (c1 || c2 || '').trim();
    return ` \\xrightleftharpoons{${formatConditionLatex(c)}} `;
  });

  // Convert direct reaction arrows with conditions: -(cond)-> or -cond->
  text = text.replace(/-(?:\(([^)]+)\)|t\s*,\s*(?:cat|кат|к)\.?|t,cat|t,кат|t,к|cat|кат|к|t)->/gi, (match, c1) => {
    let cond = '';
    if (c1) {
      cond = c1.trim();
    } else {
      cond = match.slice(1, -2).trim();
    }
    return ` \\xrightarrow{${formatConditionLatex(cond)}} `;
  });

  // Standard reversible arrows without conditions: <=> or <-> or ⇄
  text = text.replace(/<=>|<->|⇄/gi, ' \\rightleftharpoons ');

  // Standard direct arrows without conditions: -> or ➔ or →
  text = text.replace(/->|➔|→/gi, ' \\rightarrow ');

  // Protect all \xrightarrow{...} and \xrightleftharpoons{...} blocks from being split by whitespace
  const arrowPlaceholders: string[] = [];
  text = text.replace(/\\x(?:right|left)?(?:arrow|leftharpoons)\{[\s\S]*?\}(?=\s|$)/g, (match) => {
    const idx = arrowPlaceholders.length;
    arrowPlaceholders.push(match);
    return ` __ARROW_PLACEHOLDER_${idx}__ `;
  });

  const tokens = text.split(/\s+/);

  const convertedTokens = tokens.map((token) => {
    if (!token) return '';

    // If token is a standalone note placeholder
    if (token.startsWith('__NOTE_PLACEHOLDER_')) {
      const idxMatch = token.match(/__NOTE_PLACEHOLDER_(\d+)__/);
      if (idxMatch) {
        const idx = parseInt(idxMatch[1], 10);
        return notePlaceholders[idx] || '';
      }
    }

    // If token is a protected arrow placeholder
    if (token.startsWith('__ARROW_PLACEHOLDER_')) {
      const idxMatch = token.match(/__ARROW_PLACEHOLDER_(\d+)__/);
      if (idxMatch) {
        const idx = parseInt(idxMatch[1], 10);
        return arrowPlaceholders[idx] || '';
      }
    }

    // Standard reaction operators
    if (token === '+' || token === '-' || token === '=' || token === '/' || token === '\\rightarrow' || token === '\\rightleftharpoons' || token.startsWith('\\x')) {
      return token;
    }

    // Electron balance expressions e.g. -5e-, +1e-, ē, 5e-
    if (/^[+-]?\d*\\bar\{e\}$/.test(token) || /^[+-]?\d*e[-⁻]?$/i.test(token)) {
      return token.replace(/e[-⁻]?/i, '\\bar{e}');
    }

    // Plain Russian words inside formula e.g. "или", "гидрат", "осадок"
    if (/^[А-Яа-яЁё]+$/.test(token)) {
      return `\\text{${token}}`;
    }

    let word = token;

    // Check if token ends with note placeholder e.g. "HNO3__NOTE_PLACEHOLDER_0__"
    let trailingNote = '';
    const inlineNoteMatch = word.match(/^(.+?)(__NOTE_PLACEHOLDER_\d+__)$/);
    if (inlineNoteMatch) {
      word = inlineNoteMatch[1];
      const idxMatch = inlineNoteMatch[2].match(/__NOTE_PLACEHOLDER_(\d+)__/);
      if (idxMatch) {
        const idx = parseInt(idxMatch[1], 10);
        trailingNote = notePlaceholders[idx] || '';
      }
    }

    // Gas indicator (^) or (↑)
    let phase = '';
    if (word.endsWith('^') || word.endsWith('↑')) {
      phase = '\\uparrow';
      word = word.slice(0, -1);
    } else if (word.endsWith('v') || word.endsWith('↓')) {
      phase = '\\downarrow';
      word = word.slice(0, -1);
    }

    // Handle orbital electron configurations e.g. 1s^2, 2s2, 2p^3, ns^2, np^2, 3d10.
    // Checked before coefficient extraction so the principal quantum number is kept,
    // and lowercase-only so element symbols (P4, S8, F2) are not misread as orbitals.
    const orbitalMatch = word.match(/^([1-7n]?[spdf][xyz]?)\^?(\d+)$/);
    if (orbitalMatch) {
      return `\\mathrm{${orbitalMatch[1]}}^{${orbitalMatch[2]}}${phase}${trailingNote}`;
    }

    // Extract leading coefficient (e.g., "3Cu", "2NH3", "4HNO3")
    const coefMatch = word.match(/^(\d+)(.+)$/);
    let coef = '';
    if (coefMatch) {
      coef = coefMatch[1] + '\\,';
      word = coefMatch[2];
    }

    // Extract charge / oxidation state (e.g. NH4+, OH-, Cu2+, PO4(3-), PO43-, Fe+3, P0, N+5)
    let charge = '';

    // Match charges in brackets e.g. PO4(3-), N(+5), P(0), MnO4(-), H(+)
    const bracketChargeMatch = word.match(/^(.+?)\(([+-]\d*|\d+[+-]?)\)$/);
    if (bracketChargeMatch) {
      word = bracketChargeMatch[1];
      charge = `^{${bracketChargeMatch[2]}}`;
    } else {
      // Sign-first charge/oxidation state is unambiguous e.g. N+5, Fe+3, P-3
      const signFirstMatch = word.match(/^([A-Za-z0-9()[\]]+?)([+-]\d+)$/);
      // Trailing digit+sign is a charge only for a monoatomic ion e.g. Cu2+, Fe3+;
      // for polyatomic species the digit stays a subscript and the sign is a ±1 charge e.g. NH4+, NO3-
      const digitSignMatch = word.match(/^([A-Za-z0-9()[\]]+?)(\d+[+-])$/);
      const bareSignMatch = word.match(/^([A-Za-z0-9()[\]]+?)([+-])$/);
      if (signFirstMatch && signFirstMatch[1]) {
        word = signFirstMatch[1];
        charge = `^{${signFirstMatch[2]}}`;
      } else if (digitSignMatch && digitSignMatch[1] && /^[A-Z][a-z]?$/.test(digitSignMatch[1])) {
        word = digitSignMatch[1];
        charge = `^{${digitSignMatch[2]}}`;
      } else if (bareSignMatch && bareSignMatch[1]) {
        word = bareSignMatch[1];
        charge = `^{${bareSignMatch[2]}}`;
      }
    }

    // Handle double salts & hydrates with * or · e.g. Na2O*CaO*6SiO2 or CuSO4*5H2O
    if (word.includes('*') || word.includes('·')) {
      const parts = word.split(/[*·]/);
      const formattedParts = parts.map(p => {
        const cMatch = p.match(/^(\d+)(.+)$/);
        if (cMatch) {
          return `${cMatch[1]}\\mathrm{${cMatch[2].replace(/(\d+)/g, '_{$1}')}}`;
        }
        return `\\mathrm{${p.replace(/(\d+)/g, '_{$1}')}}`;
      });
      return `${coef}${formattedParts.join(' \\cdot ')}${charge}${phase}${trailingNote}`;
    }

    // Handle structural formulas with bonds e.g. C-C, C=C, C=O, C#N, C#O, O=C=O, Si-O, Si-Si, Si-O-Si, :C≡O:, :N≡N:
    if (/^:?[A-Za-z0-9()]+(?:[=–—#-]|\\equiv|≡)[A-Za-z0-9()=#≡–—-]+:?$/.test(word)) {
      let cleanWord = word;
      let prefixDots = false;
      let suffixDots = false;
      if (cleanWord.startsWith(':')) {
        prefixDots = true;
        cleanWord = cleanWord.slice(1);
      }
      if (cleanWord.endsWith(':')) {
        suffixDots = true;
        cleanWord = cleanWord.slice(0, -1);
      }

      cleanWord = cleanWord.replace(/#/g, '≡');

      const bondTokens = cleanWord.split(/([=≡-])/);
      const formattedBondParts = bondTokens.map(part => {
        if (part === '=') return '=';
        if (part === '≡') return '\\equiv ';
        if (part === '-') return '-';
        return `\\mathrm{${part.replace(/(\d+)/g, '_{$1}')}}`;
      });

      let res = formattedBondParts.join('');
      if (prefixDots) res = `:\\!${res}`;
      if (suffixDots) res = `${res}\\!:`;
      return `${coef}${res}${charge}${phase}${trailingNote}`;
    }

    // Handle general superscripts with ^
    if (word.includes('^')) {
      const parts = word.split('^');
      const baseFormatted = parts[0].replace(/(\d+)/g, '_{$1}');
      const expFormatted = parts[1];
      return `${coef}\\mathrm{${baseFormatted}}^{${expFormatted}}${charge}${phase}${trailingNote}`;
    }

    // Format numbers inside chemical formula as subscripts e.g. "NH4" -> "\mathrm{NH}_{4}"
    const formattedBody = word.replace(/(\d+)/g, '_{$1}');

    return `${coef}\\mathrm{${formattedBody}}${charge}${phase}${trailingNote}`;
  });

  return convertedTokens.join(' ');
}

export const ChemFormula: React.FC<Props> = ({ math, formula, className = '', displayMode = false }) => {
  const html = useMemo(() => {
    const rawInput = math || formula || '';
    if (!rawInput.trim()) return '';

    try {
      const latex = math || convertFormulaToKaTeX(formula || '');
      return katex.renderToString(latex, {
        displayMode,
        throwOnError: false,
        output: 'html',
      });
    } catch {
      // Fallback html formatting
      const fallback = (formula || math || '')
        .replace(/(\d+)/g, '<sub>$1</sub>')
        .replace(/⁺(\d+)/g, '<sup>+$1</sup>')
        .replace(/⁻(\d+)/g, '<sup>-$1</sup>')
        .replace(/➔|->/g, '&rarr;');
      return `<span>${fallback}</span>`;
    }
  }, [math, formula, displayMode]);

  const hasTextColor = className.includes('text-');
  const defaultTextColor = hasTextColor ? '' : 'text-inherit';

  return (
    <span
      className={`inline-block ${defaultTextColor} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
