import React, { useMemo } from 'react';
import { ChemFormula } from './ChemFormula';

interface ChemTextProps {
  text?: string;
  className?: string;
}

/**
 * Helper to determine if a string segment is a chemical formula or equation.
 */
function isChemicalToken(token: string): boolean {
  if (!token) return false;

  // Strip punctuation for matching
  const clean = token.replace(/[.,:;()!?]/g, '');
  if (!clean) return false;

  // Pure Russian word (length >= 2) is text
  if (/^[а-яА-ЯёЁ]{2,}$/.test(clean)) return false;

  // Chemical arrows
  if (/^(->|➔|→|--t-->|⇄|=)$/.test(clean)) return true;

  // Single capital chemical symbol or formula with numbers: e.g. P, N2, HNO3, P2O5, Fe, KOH, Cl2, H2O
  if (/^[A-Z][a-z]?\d*([A-Z][a-z]?\d*)*$/.test(clean) && /[A-Z]/.test(clean)) return true;

  // Complex formulas with brackets: Fe(OH)2, [Ag(NH3)2]OH, K2[Zn(OH)4], (NH4)2CO3, Ba3(PO4)2
  if (/^[A-Z0-9()[\]{}+-]+$/i.test(clean) && /[A-Z]/.test(clean) && /\d|\[|\(|\]|\)/.test(clean)) return true;

  // Oxidation state expressions: e.g. Fe(+2), N(+4), P(+5), N(-3)
  if (/^[A-Z][a-z]?\([+-]?\d+\)$/.test(clean)) return true;

  return false;
}

/**
 * Renders text containing inline chemical formulas, LaTeX math ($...$), and equations,
 * ensuring normal Russian text is rendered clearly while chemical/math species use KaTeX.
 */
export const ChemText: React.FC<ChemTextProps> = ({ text = '', className = '' }) => {
  const elements = useMemo(() => {
    if (!text) return [];

    // First split by inline LaTeX math $...$
    const parts = text.split(/(\$[^$]+\$)/g);
    const result: { type: 'text' | 'formula' | 'math'; content: string }[] = [];

    parts.forEach((part) => {
      if (!part) return;

      // Inline LaTeX math e.g. "$1\sigma + 2\pi$"
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
        const mathContent = part.slice(1, -1);
        result.push({ type: 'math', content: mathContent });
      } else {
        // Split text into tokens preserving spaces for chemical formula detection
        const tokens = part.split(/(\s+)/);
        let textBuffer = '';

        tokens.forEach((token) => {
          const trimmed = token.trim();
          if (trimmed && isChemicalToken(trimmed)) {
            if (textBuffer) {
              result.push({ type: 'text', content: textBuffer });
              textBuffer = '';
            }
            result.push({ type: 'formula', content: token });
          } else {
            textBuffer += token;
          }
        });

        if (textBuffer) {
          result.push({ type: 'text', content: textBuffer });
        }
      }
    });

    return result;
  }, [text]);

  return (
    <span className={className}>
      {elements.map((el, index) => {
        if (el.type === 'math') {
          return <ChemFormula key={index} math={el.content} className="mx-0.5" />;
        }
        if (el.type === 'formula') {
          return <ChemFormula key={index} formula={el.content} className="mx-0.5" />;
        }
        return <span key={index}>{el.content}</span>;
      })}
    </span>
  );
};
