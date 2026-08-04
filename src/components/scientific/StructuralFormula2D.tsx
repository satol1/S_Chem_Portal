import React, { useEffect, useRef, useState } from 'react';
import { renderSMILESToSVG } from '../../utils/molecule2DRenderer';
import { type Molecule2DTheme, getThemePalette } from '../../utils/molecule2DTheme';
import { ChemFormula } from './ChemFormula';

export interface StructuralFormula2DProps {
  /** SMILES-строка молекулы (напр. "O=P(O)(O)O" для H3PO4) */
  smiles: string;
  /** Тема: 'light' — классическая учебная схема на светлом фоне, 'dark' — для тёмного фона */
  theme?: Molecule2DTheme;
  /** Ширина SVG-холста */
  width?: number;
  /** Высота SVG-холста */
  height?: number;
  /** Подпись под схемой (формула, напр. "H3PO4") — рендерится через ChemFormula */
  caption?: string;
  /** Дополнительный CSS-класс контейнера */
  className?: string;
  /** Толщина связей */
  bondThickness?: number;
}

/**
 * Переиспользуемый компонент классической структурной формулы (2D).
 *
 * Единая точка входа для научных схем формул во всех темах портала:
 * достаточно передать SMILES — раскладку и отрисовку выполняет smiles-drawer.
 * При theme="light" получается классический учебный стиль на белом фоне.
 */
export const StructuralFormula2D: React.FC<StructuralFormula2DProps> = ({
  smiles,
  theme = 'light',
  width = 420,
  height = 240,
  caption,
  className = '',
  bondThickness = 1.6,
}) => {
  const palette = getThemePalette(theme);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!svgRef.current || !smiles) return;
    setError(null);
    renderSMILESToSVG(smiles, svgRef.current, {
      theme,
      width,
      height,
      bondThickness,
    }).catch((err) => {
      console.warn('StructuralFormula2D: ошибка рендеринга SMILES', smiles, err);
      setError('Не удалось построить структурную формулу');
    });
  }, [smiles, theme, width, height, bondThickness]);

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border ${className}`}
      style={{ backgroundColor: palette.background, borderColor: palette.panelBorder }}
    >
      {error ? (
        <div className="px-4 py-8 text-center text-sm" style={{ color: palette.textMuted }}>
          {error}
        </div>
      ) : (
        <svg ref={svgRef} className="max-w-full h-auto" role="img" aria-label={caption || smiles} />
      )}
      {caption && !error && (
        <div className="pb-2 text-sm font-semibold" style={{ color: palette.textPrimary }}>
          <ChemFormula formula={caption} />
        </div>
      )}
    </div>
  );
};
