import React from 'react';
import { uniqueSvgId } from '../../../utils/molecule2DTheme';

/**
 * SvgCurlyArrow — централизованный компонент фигурной (Bézier) стрелки
 * для tree-диаграмм. Используется вместо прямых ломаных линий для
 * элегантного соединения корневого блока с ветвями.
 *
 * Эталон — секция 1.8 «Простые и сложные вещества» (GeneralBasicsSections).
 */

export interface CurlyArrowSpec {
  /** Y-координата старта (центр корневого блока по вертикали, 0–1 от высоты SVG) */
  startY: number;
  /** Y-координата конца (центр ветви, 0–1 от высоты SVG) */
  endY: number;
}

export interface SvgCurlyArrowProps {
  /** Ширина SVG (px) — левая граница для start, правая для end */
  width?: number;
  /** Высота SVG (px) */
  height?: number;
  /** Массив спецификаций стрелок: { startY, endY } в долях 0–1 */
  arrows: CurlyArrowSpec[];
  /** Цвет линий (Tailwind-класс или CSS-цвет), по умолчанию slate-400 */
  color?: string;
  /** Толщина линий, по умолчанию 1.75 */
  strokeWidth?: number;
  /** Уникальный префикс для marker-id (избежать коллизий на странице) */
  markerPrefix?: string;
  /** CSS-класс для SVG-контейнера */
  className?: string;
}

const SvgCurlyArrow: React.FC<SvgCurlyArrowProps> = ({
  width = 100,
  height = 260,
  arrows,
  color = 'text-slate-400',
  strokeWidth = 1.75,
  markerPrefix = 'curly',
  className,
}) => {
  const markerId = uniqueSvgId(`${markerPrefix}-arrow`);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`shrink-0 ${className ?? ''}`}
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id={markerId}
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path
            d="M 0 0 L 8 4 L 0 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </marker>
      </defs>
      {arrows.map((arrow, i) => {
        const x1 = 0;
        const y1 = arrow.startY * height;
        const x2 = width;
        const y2 = arrow.endY * height;

        // Контрольные точки Bézier: плавный S-образный изгиб
        const cp1x = width * 0.4;
        const cp1y = y1;
        const cp2x = width * 0.6;
        const cp2y = y2;

        return (
          <path
            key={i}
            d={`M ${x1} ${y1} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x2} ${y2}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={color}
            markerEnd={`url(#${markerId})`}
          />
        );
      })}
    </svg>
  );
};

export default SvgCurlyArrow;
