import React from 'react';

// ═══════════════════════════════════════
// SvgElectronArrow — централизованный примитив стрелки переноса электронов
// для механизмов (гомолиз/гетеролиз, ОВР-стрелки). Рендерит <g> для
// встраивания в тематические SVG-схемы (src/components/scientific/svg/).
//
// half  — фишхук-стрелка (одна половинная головка): перенос ОДНОГО электрона;
// full  — фигурная стрелка с полной головкой: перенос ЭЛЕКТРОННОЙ ПАРЫ.
// dots  — точки электронов у хвоста стрелки (1 или 2).
// ═══════════════════════════════════════

export interface SvgElectronArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Перпендикулярный прогиб дуги (px); знак задаёт сторону изгиба */
  bend?: number;
  /** half — фишхук (1 e⁻), full — пара e⁻ (default full) */
  half?: boolean;
  /** Число точек электронов у хвоста (default 0) */
  dots?: 0 | 1 | 2;
  /** CSS-цвет линии и головки */
  color?: string;
  strokeWidth?: number;
}

export const SvgElectronArrow: React.FC<SvgElectronArrowProps> = ({
  x1,
  y1,
  x2,
  y2,
  bend = 8,
  half = false,
  dots = 0,
  color = '#64748b',
  strokeWidth = 1.5,
}) => {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * bend;
  const cy = my + bend * ny;

  // Касательная в конце квадратичной кривой: P2 - C
  const tx = x2 - cx;
  const ty = y2 - cy;
  const tLen = Math.hypot(tx, ty) || 1;
  const ux = tx / tLen;
  const uy = ty / tLen;
  const barb = 6;
  const angle = half ? 0.5 : 0.45;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  // Одна или две «зазубрины» головки относительно касательной
  const b1x = x2 - barb * (ux * cos - uy * sin);
  const b1y = y2 - barb * (ux * sin + uy * cos);
  const b2x = x2 - barb * (ux * cos + uy * sin);
  const b2y = y2 - barb * (ux * -sin + uy * cos);

  return (
    <g>
      {dots > 0 && (
        <g fill={color}>
          <circle cx={x1 - (dots === 2 ? 2.5 : 0)} cy={y1} r={1.8} />
          {dots === 2 && <circle cx={x1 + 2.5} cy={y1} r={1.8} />}
        </g>
      )}
      <path
        d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d={`M ${b1x} ${b1y} L ${x2} ${y2}`} fill="none" stroke={color} strokeWidth={strokeWidth} />
      {!half && <path d={`M ${b2x} ${b2y} L ${x2} ${y2}`} fill="none" stroke={color} strokeWidth={strokeWidth} />}
    </g>
  );
};

export default SvgElectronArrow;
