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
 * Converts standard chemical formulas or reactions into KaTeX LaTeX math string.
 */
export function convertFormulaToKaTeX(raw: string): string {
  if (!raw) return '';

  // If already contains ready KaTeX formatting with \mathrm, \ce, \xrightarrow, \rightleftharpoons
  if (raw.includes('\\mathrm') || raw.includes('\\ce{') || raw.includes('\\xrightarrow') || raw.includes('\\rightleftharpoons')) {
    return raw;
  }

  let text = normalizeChemicalString(raw);

  // Pre-process parenthesized Russian condition notes e.g. (конц), (разб), (очень разб), (гипофосфит калия)
  const notePlaceholders: string[] = [];
  text = text.replace(/\((конц|разб|очень\s*разб|очень\s*разбавленный|раствор|газ|твердый|[а-яА-ЯёЁ]+(?:\s+[а-яА-ЯёЁ]+)*)\)/gi, (_, noteContent) => {
    const cleanNote = noteContent.trim().replace(/\s+/g, '\\,');
    const idx = notePlaceholders.length;
    notePlaceholders.push(`\\text{\\,\\scriptsize{(${cleanNote})}}`);
    return `__NOTE_PLACEHOLDER_${idx}__`;
  });

  // Convert reaction arrows with conditions
  text = text
    .replace(/--t-->|-t->/g, ' \\xrightarrow{t^{\\circ}} ')
    .replace(/-(Pt\/Rh)->/g, ' \\xrightarrow{Pt/Rh} ')
    .replace(/<->|⇄/g, ' \\rightleftharpoons ')
    .replace(/->|➔|→/g, ' \\rightarrow ');

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

    // Standard reaction operators
    if (token === '+' || token === '=' || token === '\\rightarrow' || token === '\\rightleftharpoons' || token.startsWith('\\xrightarrow')) {
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

    // Extract leading coefficient (e.g., "3Cu", "2NH3", "4HNO3")
    const coefMatch = word.match(/^(\d+)(.+)$/);
    let coef = '';
    if (coefMatch) {
      coef = coefMatch[1] + '\\,';
      word = coefMatch[2];
    }

    // Extract charge / oxidation state (e.g. NH4+, OH-, Cu2+, PO4(3-), PO43-, Fe+3, P0, N+5)
    let charge = '';

    // Match charges in brackets e.g. PO4(3-), N(+5), P(0)
    const bracketChargeMatch = word.match(/^(.+?)\(([+-]?\d+[+-]?)\)$/);
    if (bracketChargeMatch) {
      word = bracketChargeMatch[1];
      charge = `^{${bracketChargeMatch[2]}}`;
    } else {
      // Match trailing ion charges e.g. NH4+, OH-, Cu2+, Fe3+, N+5, P0, N+4
      const ionMatch = word.match(/^([A-Za-z0-9()\[\]]+?)([+-]\d+|\d+[+-]|\+|\-)$/);
      if (ionMatch && ionMatch[1]) {
        word = ionMatch[1];
        let ch = ionMatch[2];
        if (ch === '+') ch = '+';
        else if (ch === '-') ch = '-';
        charge = `^{${ch}}`;
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

    // Handle orbital electron configurations e.g. 1s^2, 2s2, 2p^3, ns^2, np^2, 3d10
    const orbitalMatch = word.match(/^([1-7n]?[spdf][xyz]?)\^?(\d+)$/i);
    if (orbitalMatch) {
      return `\\mathrm{${orbitalMatch[1]}}^{${orbitalMatch[2]}}${phase}${trailingNote}`;
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
