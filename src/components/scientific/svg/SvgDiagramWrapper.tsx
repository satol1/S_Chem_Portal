import React, { useLayoutEffect, useRef, useState } from 'react';
import { type Molecule2DTheme, getThemePalette, uniqueSvgId } from '../../../utils/molecule2DTheme';

// ═══════════════════════════════════════
// SvgDiagramWrapper — Централизованная обёртка для научных схем
// ═══════════════════════════════════════

export interface SvgSpecItem {
  label: string;
  value: string;
  color?: string;
}

export interface SvgDiagramWrapperProps {
  /** Тема оформления */
  theme?: Molecule2DTheme;
  /** viewBox SVG */
  viewBox?: string;
  /** Заголовок схемы (отображается в SVG) */
  title?: string;
  /** Список элементов спецификации (правая панель в модалке) */
  specItems?: SvgSpecItem[];
  /** Заголовок панели спецификации */
  specTitle?: string;
  /** Это полноэкранный/модальный режим? */
  isModal?: boolean;
  /** Масштаб схемы в модалке (диаграмма крупнее, без ручных подгонок в темах) */
  modalScale?: number;
  /** Показать фоновую сетку? */
  showGrid?: boolean;
  /** CSS-класс для контейнера */
  className?: string;
  /** Внутренний контент SVG (атомы, связи, бейджи) */
  children: React.ReactNode;
  /** Кастомный viewBox для центральной области диаграммы (по умолчанию зависит от isModal) */
  diagramTransform?: string;
}

/**
 * Централизованный компонент-обёртка для научных SVG-схем.
 *
 * Обеспечивает единый стиль для всех тем:
 * - Фон + сетка из палитры темы
 * - Заголовок схемы и правая панель спецификаций (в модалке)
 * - Компактный режим: viewBox автоподбирается под габариты схемы,
 *   превью заполняет плитку и читается без микротекста (детали — в модалке)
 *
 * Новые темы используют этот wrapper вместо хардкода grid pattern,
 * rect background и spec panel — достаточно передать детей и метаданные.
 */
/** Ширина панели спецификаций в модалке */
const SPEC_PANEL_W = 300;
/** Максимум символов в строке панели (автоперенос длинных значений) */
const SPEC_MAX_CHARS = 40;

/** Перенос значения спеки по словам: бюджет первой строки и последующих */
function wrapSpecValue(value: string, firstBudget: number, restBudget: number): string[] {
  const lines: string[] = [];
  let cur = '';
  let budget = firstBudget;
  for (const word of value.split(' ')) {
    if (cur && (cur + ' ' + word).length > budget) {
      lines.push(cur);
      cur = word;
      budget = restBudget;
    } else {
      cur = cur ? `${cur} ${word}` : word;
    }
  }
  if (cur) lines.push(cur);
  return lines.length > 0 ? lines : [''];
}

export const SvgDiagramWrapper: React.FC<SvgDiagramWrapperProps> = ({
  theme = 'dark',
  viewBox,
  title,
  specItems,
  specTitle,
  isModal = false,
  modalScale = 1.45,
  showGrid = true,
  className = '',
  children,
  diagramTransform,
}) => {
  const palette = getThemePalette(theme);
  const gridId = uniqueSvgId('grid');

  // Компактный режим: viewBox подгоняется под реальные габариты схемы,
  // чтобы превью заполняло плитку и подписи атомов оставались читаемыми
  const contentRef = useRef<SVGGElement | null>(null);
  const [fitViewBox, setFitViewBox] = useState<string | null>(null);
  useLayoutEffect(() => {
    if (isModal) {
      setFitViewBox(null);
      return;
    }
    const g = contentRef.current;
    if (!g) return;
    const b = g.getBBox();
    if (b.width < 1 || b.height < 1) return;
    const pad = 8;
    const next = `${b.x - pad} ${b.y - pad} ${b.width + 2 * pad} ${b.height + 2 * pad}`;
    setFitViewBox((prev) => (prev === next ? prev : next));
  }, [isModal, children]);

  const defaultViewBox = isModal ? '0 0 760 430' : '0 0 300 200';
  const usedViewBox = isModal
    ? viewBox || defaultViewBox
    : fitViewBox || viewBox || defaultViewBox;

  // В модалке схема укрупняется централизованно; в компактном режиме
  // центрирование выполняет автоподбор viewBox — transform не нужен
  const transform = isModal
    ? `${diagramTransform || 'translate(210, 215)'} scale(${modalScale})`
    : undefined;

  // Раскладка строк панели спецификаций (автоперенос длинных значений)
  const specRows = (specItems || []).map((item) => {
    const label = `${item.label}:`;
    const first = Math.max(SPEC_MAX_CHARS - 3 - label.length, 10);
    return { item, label, lines: wrapSpecValue(item.value, first, SPEC_MAX_CHARS - 6) };
  });
  const specYs: number[] = [];
  let accY = 68;
  for (const row of specRows) {
    specYs.push(accY);
    accY += 26 + (row.lines.length - 1) * 15;
  }
  const specHeight = Math.max(350, accY + 24);

  return (
    <svg viewBox={usedViewBox} className={`w-full h-full ${className}`}>
      {/* Background */}
      <rect width="100%" height="100%" fill={palette.background} rx="12" />

      {/* Grid Pattern */}
      {showGrid && (
        <>
          <defs>
            <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke={palette.gridColor} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`} opacity={palette.gridOpacity} />
        </>
      )}

      {/* Modal Header Title */}
      {isModal && title && (
        <text
          x="380"
          y="28"
          textAnchor="middle"
          fill={palette.textPrimary}
          fontSize="15"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          {title}
        </text>
      )}

      {/* Central Diagram Area */}
      <g ref={contentRef} transform={transform}>{children}</g>

      {/* Modal Right Side Specification Panel */}
      {isModal && specRows.length > 0 && (
        <g transform="translate(448, 48)">
          <rect width={SPEC_PANEL_W} height={specHeight} fill={palette.backgroundAlt} rx="10" stroke={palette.panelBorder} strokeWidth="1" />

          <text x="20" y="30" fill={palette.highlight} fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            {specTitle || 'Параметры:'}
          </text>
          <line x1="20" y1="40" x2={SPEC_PANEL_W - 20} y2="40" stroke={palette.gridColor} strokeWidth="1" />

          {specRows.map((row, idx) => {
            const itemColor = row.item.color || palette.textSecondary;
            const valueColor = row.item.color || palette.highlight;
            const y = specYs[idx];
            return (
              <g key={idx}>
                <text x="20" y={y} fill={palette.textSecondary} fontSize="12" fontFamily="sans-serif">
                  •{' '}
                  <tspan fontWeight="bold" fill={itemColor}>
                    {row.label}
                  </tspan>{' '}
                  <tspan fill={valueColor} fontWeight="bold">
                    {row.lines[0]}
                  </tspan>
                </text>
                {row.lines.slice(1).map((ln, i) => (
                  <text
                    key={i}
                    x="30"
                    y={y + 15 * (i + 1)}
                    fill={valueColor}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    {ln}
                  </text>
                ))}
              </g>
            );
          })}
        </g>
      )}

    </svg>
  );
};

// ═══════════════════════════════════════
// SvgCaption — Нижний подвал с легендой
// ═══════════════════════════════════════

export interface SvgCaptionItem {
  color: string;
  label: string;
}

export interface SvgCaptionProps {
  /** Элементы легенды */
  items: SvgCaptionItem[];
  /** Дополнительный текст справа (напр. "С.О.: +5") */
  metaText?: string;
  /** Тема */
  theme?: Molecule2DTheme;
  /** viewBox — должен совпадать с родительским SVG */
  viewBox?: string;
}

/**
 * Отдельный SVG-компонент для нижней панели легенды.
 * Используется вне SvgDiagramWrapper когда нужна только легенда.
 */
export const SvgCaption: React.FC<SvgCaptionProps> = ({
  items,
  metaText,
  theme = 'dark',
  viewBox,
}) => {
  const palette = getThemePalette(theme);
  const defaultViewBox = '0 0 300 30';
  const usedViewBox = viewBox || defaultViewBox;

  return (
    <svg viewBox={usedViewBox} className="w-full">
      <rect width="100%" height="100%" fill={palette.backgroundAlt} />
      <g transform="translate(10, 18)">
        {items.map((item, idx) => {
          const x = idx * 140;
          return (
            <g key={idx} transform={`translate(${x}, 0)`}>
              <circle cx="5" cy="-4" r="4" fill={item.color} opacity="0.8" />
              <text x="14" y="0" fill={palette.textMuted} fontSize="9" fontFamily="sans-serif">
                {item.label}
              </text>
            </g>
          );
        })}
      </g>
      {metaText && (
        <text x="280" y="18" textAnchor="end" fill={palette.textMuted} fontSize="10" fontWeight="semibold" fontFamily="monospace">
          {metaText}
        </text>
      )}
    </svg>
  );
};
