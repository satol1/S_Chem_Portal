import React from 'react';
import { type Molecule2DTheme, getAtomColors, getThemePalette } from '../../../utils/molecule2DTheme';

export interface SvgAtomProps {
  /** Символ элемента (C, H, O, N, S, P, Si и т.д.) */
  element: string;
  /** X-координата центра атома */
  cx: number;
  /** Y-координата центра атома */
  cy: number;
  /** Радиус круга атома */
  r?: number;
  /** Тема оформления */
  theme?: Molecule2DTheme;
  /** Толщина обводки */
  strokeWidth?: number;
  /** Размер шрифта символа элемента */
  fontSize?: number;
  /** Пользовательский fill (перекрывает палитру) */
  customFill?: string;
  /** Пользовательский stroke (перекрывает палитру) */
  customStroke?: string;
  /** Пользовательский цвет текста (перекрывает палитру) */
  customTextColor?: string;
  /** Показать символ элемента? (по умолчанию true) */
  showLabel?: boolean;
  /** Суффикс к символу (напр. "⁻", "⁺", номер) */
  labelSuffix?: string;
  /** Дополнительный CSS-класс для группы */
  className?: string;
  /** Обработчик клика */
  onClick?: () => void;
  /** Непрозрачность */
  opacity?: number;
}

/**
 * Переиспользуемый SVG-компонент для атома.
 * Рисует круг с символом элемента, цвета берёт из палитры темы
 * или из пользовательских пропсов.
 */
export const SvgAtom: React.FC<SvgAtomProps> = ({
  element,
  cx,
  cy,
  r = 14,
  theme = 'dark',
  strokeWidth = 2,
  fontSize,
  customFill,
  customStroke,
  customTextColor,
  showLabel = true,
  labelSuffix = '',
  className = '',
  onClick,
  opacity = 1,
}) => {
  const colors = getAtomColors(element, theme);
  const fill = customFill || colors.fill;
  const stroke = customStroke || colors.stroke;
  const textColor = customTextColor || colors.text;
  const computedFontSize = fontSize || Math.max(8, r * 0.75);
  const displayLabel = element + labelSuffix;

  return (
    <g
      className={`svg-atom ${className}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      onClick={onClick}
      opacity={opacity}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {showLabel && (
        <text
          x={cx}
          y={cy}
          dy="0.35em"
          textAnchor="middle"
          fill={textColor}
          fontSize={computedFontSize}
          fontWeight="bold"
          fontFamily="sans-serif"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {displayLabel}
        </text>
      )}
    </g>
  );
};

/**
 * Буквенный атом без круга — классический учебный стиль структурных формул
 * (как в учебниках: буквы O, P, OH соединённые линиями связей).
 */
export interface SvgTextAtomProps {
  /** Текст метки (напр. "O", "P", "OH", "HO", "N⁺") */
  label: string;
  /** X-координата центра */
  cx: number;
  /** Y-координата центра */
  cy: number;
  /** Тема */
  theme?: Molecule2DTheme;
  /** Размер шрифта */
  fontSize?: number;
  /** Жирность шрифта */
  fontWeight?: string;
  /** Пользовательский цвет (перекрывает палитру) */
  customColor?: string;
  /** Непрозрачность */
  opacity?: number;
  /** Дополнительный CSS-класс */
  className?: string;
  /** Halo-маска цветом фона: линии связей не наползают на буквы (default true) */
  halo?: boolean;
  /** Цвет halo (по умолчанию — фон палитры) */
  haloColor?: string;
}

export const SvgTextAtom: React.FC<SvgTextAtomProps> = ({
  label,
  cx,
  cy,
  theme = 'dark',
  fontSize = 15,
  fontWeight = 'bold',
  customColor,
  opacity = 1,
  className = '',
  halo = true,
  haloColor,
}) => {
  const palette = getThemePalette(theme);
  const color = customColor || palette.textPrimary;

  return (
    <text
      x={cx}
      y={cy}
      dy="0.35em"
      textAnchor="middle"
      fill={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily="sans-serif"
      opacity={opacity}
      stroke={halo ? (haloColor || palette.background) : undefined}
      strokeWidth={halo ? Math.max(3, fontSize * 0.28) : undefined}
      strokeLinejoin="round"
      paintOrder="stroke"
      className={`svg-text-atom ${className}`}
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      {label}
    </text>
  );
};

/**
 * Группа-обёртка для OH/HO с прямоугольным фоном (часто используется в кислотных схемах).
 */
export interface SvgFunctionalGroupProps {
  /** Текст группы (напр. "OH", "HO", "NH₂") */
  label: string;
  /** X-координата центра */
  cx: number;
  /** Y-координата центра */
  cy: number;
  /** Тема */
  theme?: Molecule2DTheme;
  /** Ширина бейджа */
  width?: number;
  /** Высота бейджа */
  height?: number;
  /** Цвет текста (перекрывает палитру) */
  customColor?: string;
  /** Цвет рамки (перекрывает палитру) */
  customBorder?: string;
  /** Цвет фона (перекрывает палитру) */
  customBg?: string;
  /** Скруглённые углы */
  rx?: number;
}

export const SvgFunctionalGroup: React.FC<SvgFunctionalGroupProps> = ({
  label,
  cx,
  cy,
  theme = 'dark',
  width = 48,
  height = 24,
  customColor,
  customBorder,
  customBg,
  rx = 6,
}) => {
  const palette = getThemePalette(theme);
  const color = customColor || palette.ohGroup;
  const border = customBorder || palette.ohGroup;
  const bg = customBg || (theme === 'dark' ? '#0c4a6e' : '#fef2f2');

  return (
    <g className="svg-functional-group">
      <rect
        x={cx - width / 2}
        y={cy - height / 2}
        width={width}
        height={height}
        rx={rx}
        fill={bg}
        stroke={border}
        strokeWidth={1.5}
      />
      <text
        x={cx}
        y={cy}
        dy="0.35em"
        textAnchor="middle"
        fill={color}
        fontSize={12}
        fontWeight="bold"
        fontFamily="sans-serif"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {label}
      </text>
    </g>
  );
};
