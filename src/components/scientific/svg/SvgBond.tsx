import React from 'react';
import { type Molecule2DTheme, getThemePalette } from '../../../utils/molecule2DTheme';

export type BondType = 'single' | 'double' | 'triple' | 'dashed' | 'wedge' | 'hashed-wedge' | 'resonance';

export interface SvgBondProps {
  /** X-координата начала */
  x1: number;
  /** Y-координата начала */
  y1: number;
  /** X-координата конца */
  x2: number;
  /** Y-координата конца */
  y2: number;
  /** Тип связи */
  type?: BondType;
  /** Тема оформления */
  theme?: Molecule2DTheme;
  /** Толщина линии */
  strokeWidth?: number;
  /** Расстояние между линиями двойной/тройной связи */
  offset?: number;
  /** Пользовательский цвет (перекрывает палитру) */
  customColor?: string;
  /** Непрозрачность */
  opacity?: number;
  /** CSS-класс */
  className?: string;
  /** Обработчик клика */
  onClick?: () => void;
  /** Укоротить начало связи вдоль направления (px) — зазор под подпись атома */
  trimStart?: number;
  /** Укоротить конец связи вдоль направления (px) — зазор под подпись атома */
  trimEnd?: number;
}

/**
 * Переиспользуемый SVG-компонент для химической связи.
 * Поддерживает одинарные, двойные, тройные, пунктирные, клиновидные
 * и резонансные (полупунктирные) связи.
 */
export const SvgBond: React.FC<SvgBondProps> = ({
  x1: rawX1,
  y1: rawY1,
  x2: rawX2,
  y2: rawY2,
  type = 'single',
  theme = 'dark',
  strokeWidth: customStrokeWidth,
  offset = 3.2,
  customColor,
  opacity = 1,
  className = '',
  onClick,
  trimStart = 0,
  trimEnd = 0,
}) => {
  const palette = getThemePalette(theme);
  const color = customColor || palette.bondPrimary;

  // Вычисляем перпендикуляр к линии связи
  const rawDx = rawX2 - rawX1;
  const rawDy = rawY2 - rawY1;
  const rawLen = Math.sqrt(rawDx * rawDx + rawDy * rawDy) || 1;
  const ux = rawDx / rawLen;
  const uy = rawDy / rawLen;

  // Академический зазор: связь не должна наползать на подписи атомов
  const x1 = rawX1 + ux * trimStart;
  const y1 = rawY1 + uy * trimStart;
  const x2 = rawX2 - ux * trimEnd;
  const y2 = rawY2 - uy * trimEnd;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  const groupProps = {
    className: `svg-bond ${className}`,
    style: { cursor: onClick ? 'pointer' : 'default' } as React.CSSProperties,
    onClick,
    opacity,
  };

  switch (type) {
    case 'single': {
      const sw = customStrokeWidth || (theme === 'light' ? 1.8 : 2.2);
      return (
        <g {...groupProps}>
          <line x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
        </g>
      );
    }

    case 'double': {
      const sw = customStrokeWidth || (theme === 'light' ? 1.5 : 2);
      return (
        <g {...groupProps}>
          <line
            x1={x1 + nx * offset} y1={y1 + ny * offset}
            x2={x2 + nx * offset} y2={y2 + ny * offset}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
          <line
            x1={x1 - nx * offset} y1={y1 - ny * offset}
            x2={x2 - nx * offset} y2={y2 - ny * offset}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
        </g>
      );
    }

    case 'triple': {
      const sw = customStrokeWidth || 1.6;
      const triOffset = offset * 1.6;
      return (
        <g {...groupProps}>
          <line x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
          <line
            x1={x1 + nx * triOffset} y1={y1 + ny * triOffset}
            x2={x2 + nx * triOffset} y2={y2 + ny * triOffset}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
          <line
            x1={x1 - nx * triOffset} y1={y1 - ny * triOffset}
            x2={x2 - nx * triOffset} y2={y2 - ny * triOffset}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
        </g>
      );
    }

    case 'dashed': {
      const sw = customStrokeWidth || 1.6;
      return (
        <g {...groupProps}>
          <line x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={customColor || palette.bondSecondary}
            strokeWidth={sw} strokeDasharray="4 3" strokeLinecap="round"
          />
        </g>
      );
    }

    case 'wedge': {
      // Клиновидная связь (solid wedge — перспектива «к зрителю»):
      // академические пропорции — узкий клин (~6 px у широкого конца)
      const tipWidth = customStrokeWidth || 6;
      const px1 = x2 + nx * (tipWidth / 2);
      const py1 = y2 + ny * (tipWidth / 2);
      const px2 = x2 - nx * (tipWidth / 2);
      const py2_v = y2 - ny * (tipWidth / 2);
      return (
        <g {...groupProps}>
          <polygon
            points={`${x1},${y1} ${px1},${py1} ${px2},${py2_v}`}
            fill={color}
          />
        </g>
      );
    }

    case 'hashed-wedge': {
      // Штрихованная клиновидная связь (перспектива «от зрителя»):
      // серия перпендикулярных штрихов, расширяющихся к концу связи
      const segments = 6;
      const maxHalfWidth = (customStrokeWidth || 5) / 2;
      const lines = [];
      for (let i = 0; i < segments; i++) {
        const t = (i + 1) / segments;
        const px = x1 + dx * t;
        const py = y1 + dy * t;
        const hw = maxHalfWidth * t;
        lines.push(
          <line
            key={i}
            x1={px - nx * hw} y1={py - ny * hw}
            x2={px + nx * hw} y2={py + ny * hw}
            stroke={color} strokeWidth={1.3} strokeLinecap="round"
          />
        );
      }
      return <g {...groupProps}>{lines}</g>;
    }

    case 'resonance': {
      // Полусплошная - полупунктирная (резонансная структура)
      const sw = customStrokeWidth || 1.8;
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      return (
        <g {...groupProps}>
          <line x1={x1} y1={y1} x2={midX} y2={midY}
            stroke={color} strokeWidth={sw} strokeLinecap="round"
          />
          <line x1={midX} y1={midY} x2={x2} y2={y2}
            stroke={color} strokeWidth={sw}
            strokeDasharray="5 3" strokeLinecap="round"
          />
        </g>
      );
    }

    default:
      return null;
  }
};
