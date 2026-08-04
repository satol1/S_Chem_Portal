import React from 'react';
import { type Molecule2DTheme, getThemePalette } from '../../../utils/molecule2DTheme';

// ═══════════════════════════════════════
// SvgBadge — Информационный бейдж
// ═══════════════════════════════════════

export interface SvgBadgeProps {
  /** Текст бейджа (напр. "152 pm", "109°28'") */
  label: string;
  /** X-координата центра бейджа */
  cx: number;
  /** Y-координата центра бейджа */
  cy: number;
  /** Тема оформления */
  theme?: Molecule2DTheme;
  /** Ширина (авто-вычисляется если не задана) */
  width?: number;
  /** Высота */
  height?: number;
  /** Скруглённые углы */
  rx?: number;
  /** Размер шрифта */
  fontSize?: number;
  /** Жирность шрифта */
  fontWeight?: string;
  /** Цвет текста (перекрывает палитру) */
  customColor?: string;
  /** Цвет рамки (перекрывает палитру) */
  customBorder?: string;
  /** Цвет фона (перекрывает палитру) */
  customBg?: string;
  /** Непрозрачность фона */
  bgOpacity?: number;
}

/**
 * Информационный бейдж для отображения длин связей, углов и других данных.
 * Рисует закруглённый прямоугольник с текстом.
 */
export const SvgBadge: React.FC<SvgBadgeProps> = ({
  label,
  cx,
  cy,
  theme = 'dark',
  width,
  height = 18,
  rx = 4,
  fontSize = 9,
  fontWeight = 'bold',
  customColor,
  customBorder,
  customBg,
  bgOpacity = 0.95,
}) => {
  const palette = getThemePalette(theme);
  const color = customColor || palette.badgeText;
  const border = customBorder || palette.badgeBorder;
  const bg = customBg || palette.badgeBg;
  const computedWidth = width || Math.max(label.length * 7 + 16, 50);

  return (
    <g className="svg-badge">
      <rect
        x={cx - computedWidth / 2}
        y={cy - height / 2}
        width={computedWidth}
        height={height}
        rx={rx}
        fill={bg}
        stroke={border}
        strokeWidth={1.2}
        opacity={bgOpacity}
      />
      <text
        x={cx}
        y={cy}
        dy="0.35em"
        textAnchor="middle"
        fill={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily="sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {label}
      </text>
    </g>
  );
};

// ═══════════════════════════════════════
// SvgAngleArc — Дуга угла с подписью
// ═══════════════════════════════════════

export interface SvgAngleArcProps {
  /** Координаты вершины угла */
  cx: number;
  cy: number;
  /** Начальный угол в градусах (от горизонтали) */
  startAngle: number;
  /** Конечный угол в градусах */
  endAngle: number;
  /** Радиус дуги */
  radius?: number;
  /** Текст подписи (напр. "109°28'") */
  label: string;
  /** Тема */
  theme?: Molecule2DTheme;
  /** Пользовательский цвет дуги */
  customColor?: string;
  /** Толщина дуги */
  strokeWidth?: number;
  /** Пунктир */
  strokeDasharray?: string;
  /** Размер шрифта */
  fontSize?: number;
  /** Расстояние подписи от дуги */
  labelOffset?: number;
}

/**
 * SVG-дуга угла с текстовой подписью.
 * Используется для обозначения валентных и торсионных углов.
 */
export const SvgAngleArc: React.FC<SvgAngleArcProps> = ({
  cx,
  cy,
  startAngle,
  endAngle,
  radius = 28,
  label,
  theme = 'dark',
  customColor,
  strokeWidth = 1.5,
  strokeDasharray = '3 2',
  fontSize = 10,
  labelOffset = 14,
}) => {
  const palette = getThemePalette(theme);
  const color = customColor || palette.angleArc;

  // Convert degrees to radians
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;

  const x1 = cx + radius * Math.cos(startRad);
  const y1 = cy - radius * Math.sin(startRad);
  const x2 = cx + radius * Math.cos(endRad);
  const y2 = cy - radius * Math.sin(endRad);

  // Large arc flag
  const angleDiff = Math.abs(endAngle - startAngle);
  const largeArc = angleDiff > 180 ? 1 : 0;
  const sweep = endAngle > startAngle ? 0 : 1;

  // Label position (midpoint of arc)
  const midAngle = ((startAngle + endAngle) / 2) * Math.PI / 180;
  const labelX = cx + (radius + labelOffset) * Math.cos(midAngle);
  const labelY = cy - (radius + labelOffset) * Math.sin(midAngle);

  return (
    <g className="svg-angle-arc">
      <path
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} ${sweep} ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
      />
      <text
        x={labelX}
        y={labelY}
        textAnchor="middle"
        dy="0.35em"
        fill={color}
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily="sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {label}
      </text>
    </g>
  );
};

// ═══════════════════════════════════════
// SvgLengthAnnotation — Стрелки длины связи
// ═══════════════════════════════════════

export interface SvgLengthAnnotationProps {
  /** X-координата начала */
  x1: number;
  /** Y-координата начала */
  y1: number;
  /** X-координата конца */
  x2: number;
  /** Y-координата конца */
  y2: number;
  /** Текст подписи (напр. "152 pm", "1.54 Å") */
  label: string;
  /** Тема */
  theme?: Molecule2DTheme;
  /** Пользовательский цвет */
  customColor?: string;
  /** Размер стрелок */
  arrowSize?: number;
  /** Размер шрифта */
  fontSize?: number;
  /** Смещение подписи (перпендикулярно) */
  labelOffset?: number;
}

/**
 * Аннотация длины связи в стиле научных публикаций:
 * тонкая размерная линия с открытыми V-стрелками на концах
 * и подписью РЯДОМ с линией (никогда не поверх связи или самой линии).
 */
export const SvgLengthAnnotation: React.FC<SvgLengthAnnotationProps> = ({
  x1,
  y1,
  x2,
  y2,
  label,
  theme = 'dark',
  customColor,
  arrowSize = 4.5,
  fontSize = 10,
  labelOffset = 11,
}) => {
  const palette = getThemePalette(theme);
  const color = customColor || palette.lengthArrow;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  // Перпендикуляр для смещения подписи
  const nx = -uy;
  const ny = ux;

  // Открытые V-стрелки (две короткие линии на каждом конце, наружу)
  const aw = arrowSize;
  const spread = 0.42; // полуугловое раскрытие стрелки (рад ≈ 24°)
  const cosA = Math.cos(spread);
  const sinA = Math.sin(spread);
  // Стрелка в точке (x1,y1): остриё в точке, «крылья» назад по направлению +ux
  const w1ax = x1 + aw * (ux * cosA - nx * sinA);
  const w1ay = y1 + aw * (uy * cosA - ny * sinA);
  const w1bx = x1 + aw * (ux * cosA + nx * sinA);
  const w1by = y1 + aw * (uy * cosA + ny * sinA);
  // Стрелка в точке (x2,y2): «крылья» назад по -ux
  const w2ax = x2 - aw * (ux * cosA - nx * sinA);
  const w2ay = y2 - aw * (uy * cosA - ny * sinA);
  const w2bx = x2 - aw * (ux * cosA + nx * sinA);
  const w2by = y2 - aw * (uy * cosA + ny * sinA);

  // Подпись — сбоку от размерной линии, с halo цвета фона
  const midX = (x1 + x2) / 2 + nx * labelOffset;
  const midY = (y1 + y2) / 2 + ny * labelOffset;

  return (
    <g className="svg-length-annotation">
      {/* Размерная линия */}
      <line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth={0.9}
      />
      {/* Открытая стрелка начала */}
      <path
        d={`M ${w1ax} ${w1ay} L ${x1} ${y1} L ${w1bx} ${w1by}`}
        fill="none" stroke={color} strokeWidth={0.9} strokeLinecap="round"
      />
      {/* Открытая стрелка конца */}
      <path
        d={`M ${w2ax} ${w2ay} L ${x2} ${y2} L ${w2bx} ${w2by}`}
        fill="none" stroke={color} strokeWidth={0.9} strokeLinecap="round"
      />
      {/* Подпись с halo */}
      <text
        x={midX}
        y={midY}
        textAnchor="middle"
        dy="0.35em"
        fill={color}
        stroke={palette.background}
        strokeWidth={3}
        strokeLinejoin="round"
        paintOrder="stroke"
        fontSize={fontSize}
        fontWeight={600}
        fontFamily="sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {label}
      </text>
    </g>
  );
};
