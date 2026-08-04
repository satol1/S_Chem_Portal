/**
 * Централизованная система тем для 2D-рендеринга молекулярных структур.
 * Поддерживает тёмную (dark) и светлую (light) палитры.
 * 
 * Используется как единый источник правды для всех цветов
 * в SVG-примитивах (SvgAtom, SvgBond, SvgBadge, SvgDiagramWrapper)
 * и в компоненте MoleculeViewer2D.
 */

export type Molecule2DTheme = 'dark' | 'light';

/**
 * Полная палитра цветов для 2D-диаграмм молекул.
 */
export interface ThemePalette {
  // === Фон и сетка ===
  /** Основной фон SVG / контейнера */
  background: string;
  /** Альтернативный фон (информационная панель, модальное окно) */
  backgroundAlt: string;
  /** Цвет линий фоновой сетки */
  gridColor: string;
  /** Непрозрачность сетки (0..1) */
  gridOpacity: number;

  // === Текст ===
  /** Основной текст (заголовки, символы элементов) */
  textPrimary: string;
  /** Вторичный текст (описания, подписи) */
  textSecondary: string;
  /** Приглушённый текст (подсказки, мета-данные) */
  textMuted: string;

  // === Связи ===
  /** Основной цвет связей */
  bondPrimary: string;
  /** Вторичный цвет связей (пунктирные, тыльные) */
  bondSecondary: string;
  /** Цвет двойных связей / подчёркнутых связей */
  bondDouble: string;

  // === Панели и бейджи ===
  /** Фон информационной панели */
  panelBg: string;
  /** Рамка информационной панели */
  panelBorder: string;
  /** Фон бейджа (длина связи, угол) */
  badgeBg: string;
  /** Рамка бейджа */
  badgeBorder: string;
  /** Текст бейджа */
  badgeText: string;
  /** Цвет дуги угла */
  angleArc: string;
  /** Цвет стрелки / подписи длины связи */
  lengthArrow: string;

  // === Элементы (CPK-подобные цвета, адаптированные к теме) ===
  atomC: { fill: string; stroke: string; text: string };
  atomH: { fill: string; stroke: string; text: string };
  atomO: { fill: string; stroke: string; text: string };
  atomN: { fill: string; stroke: string; text: string };
  atomS: { fill: string; stroke: string; text: string };
  atomP: { fill: string; stroke: string; text: string };
  atomSi: { fill: string; stroke: string; text: string };
  atomF: { fill: string; stroke: string; text: string };
  atomCl: { fill: string; stroke: string; text: string };
  atomBr: { fill: string; stroke: string; text: string };
  atomI: { fill: string; stroke: string; text: string };

  // === Акценты ===
  /** Основной акцент (highlight, фокус) */
  highlight: string;
  /** Альтернативный акцент */
  highlightAlt: string;
  /** Цвет для OH-групп (диссоциирующие) */
  ohGroup: string;
  /** Цвет для P-H / недиссоциирующих связей */
  phBond: string;

  // === CSS-классы контейнера ===
  /** Tailwind-классы для внешнего контейнера */
  containerClass: string;
  /** Tailwind-классы для панели инструментов */
  toolbarClass: string;
  /** Tailwind-классы для кнопок */
  buttonClass: string;
  /** Tailwind-классы для активных кнопок */
  buttonActiveClass: string;
}

// ═══════════════════════════════════════
// ТЁМНАЯ ТЕМА (по умолчанию — текущий стиль проекта)
// Приглушённые десатурированные тона: гармоничные сочетания на slate-950,
// без неоновых акцентов (стиль научных публикаций).
// ═══════════════════════════════════════
export const DARK_PALETTE: ThemePalette = {
  // Фон
  background: '#020617',
  backgroundAlt: '#0f172a',
  gridColor: '#1e293b',
  gridOpacity: 0.4,

  // Текст
  textPrimary: '#f8fafc',
  textSecondary: '#e2e8f0',
  textMuted: '#94a3b8',

  // Связи
  bondPrimary: '#94A3B8',
  bondSecondary: '#475569',
  bondDouble: '#c9a961',

  // Панели
  panelBg: '#0f172a',
  panelBorder: '#334155',
  badgeBg: '#0f172a',
  badgeBorder: '#a8874d',
  badgeText: '#d9bd85',
  angleArc: '#cbd5e1',
  lengthArrow: '#cf8f8a',

  // Элементы — мягкая пастельная CPK-адаптация (низкая насыщенность)
  atomC: { fill: '#8ea6bc', stroke: '#64809a', text: '#101826' },
  atomH: { fill: '#d7dfe8', stroke: '#9fb0c0', text: '#101826' },
  atomO: { fill: '#d69a96', stroke: '#b07773', text: '#101826' },
  atomN: { fill: '#92b0d2', stroke: '#6c8cab', text: '#101826' },
  atomS: { fill: '#d6bd85', stroke: '#ab9460', text: '#101826' },
  atomP: { fill: '#d8ab7c', stroke: '#ad8359', text: '#101826' },
  atomSi: { fill: '#8fbdb9', stroke: '#689793', text: '#101826' },
  atomF: { fill: '#96c2a4', stroke: '#6f9c7e', text: '#101826' },
  atomCl: { fill: '#a9c69b', stroke: '#82a074', text: '#101826' },
  atomBr: { fill: '#c99e91', stroke: '#a37a6d', text: '#101826' },
  atomI: { fill: '#b3a6d1', stroke: '#8d7fae', text: '#101826' },

  // Акценты
  highlight: '#d9bd85',
  highlightAlt: '#c9a961',
  ohGroup: '#92b0d2',
  phBond: '#d8ab7c',

  // CSS
  containerClass: 'bg-slate-950 border-slate-800 text-slate-100',
  toolbarClass: 'bg-slate-900/90 border-slate-800 backdrop-blur-md',
  buttonClass: 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50',
  buttonActiveClass: 'bg-indigo-600 text-white shadow-sm',
};

// ═══════════════════════════════════════
// СВЕТЛАЯ ТЕМА (учебник-стиль, научные схемы)
// Академическая палитра в духе публикаций IUPAC/ACS: десатурированные
// элементные цвета, чернильный каркас, приглушённые семантические акценты.
// ═══════════════════════════════════════
export const LIGHT_PALETTE: ThemePalette = {
  // Фон
  background: '#ffffff',
  backgroundAlt: '#f8fafc',
  gridColor: '#e2e8f0',
  gridOpacity: 0.3,

  // Текст
  textPrimary: '#1e293b',
  textSecondary: '#334155',
  textMuted: '#64748b',

  // Связи
  bondPrimary: '#1e293b',
  bondSecondary: '#64748b',
  bondDouble: '#1e293b',

  // Панели
  panelBg: '#f1f5f9',
  panelBorder: '#cbd5e1',
  badgeBg: '#ffffff',
  badgeBorder: '#94a3b8',
  badgeText: '#334155',
  angleArc: '#64748b',
  lengthArrow: '#a8504a',

  // Элементы — приглушённые академические цвета на светлом фоне
  atomC: { fill: '#3f4a5a', stroke: '#263241', text: '#ffffff' },
  atomH: { fill: '#8494a7', stroke: '#5c6b7e', text: '#ffffff' },
  atomO: { fill: '#b3544e', stroke: '#8f3f3a', text: '#ffffff' },
  atomN: { fill: '#4e79a7', stroke: '#3a5f87', text: '#ffffff' },
  atomS: { fill: '#a8862f', stroke: '#86691f', text: '#ffffff' },
  atomP: { fill: '#bf7c3a', stroke: '#99602a', text: '#ffffff' },
  atomSi: { fill: '#5f8f8b', stroke: '#47716d', text: '#ffffff' },
  atomF: { fill: '#5f9e7a', stroke: '#47805f', text: '#ffffff' },
  atomCl: { fill: '#679a63', stroke: '#4f7c4b', text: '#ffffff' },
  atomBr: { fill: '#9c6058', stroke: '#7c4a43', text: '#ffffff' },
  atomI: { fill: '#7e6ba8', stroke: '#62528a', text: '#ffffff' },

  // Акценты
  highlight: '#b98a3a',
  highlightAlt: '#a37b2e',
  ohGroup: '#4e79a7',
  phBond: '#a3702f',

  // CSS
  containerClass: 'bg-white border-slate-200 text-slate-900',
  toolbarClass: 'bg-slate-50/95 border-slate-200 backdrop-blur-md',
  buttonClass: 'text-slate-500 hover:text-slate-800 hover:bg-slate-100',
  buttonActiveClass: 'bg-slate-900 text-white shadow-sm',
};

/**
 * Получить палитру по имени темы.
 */
export function getThemePalette(theme: Molecule2DTheme): ThemePalette {
  return theme === 'light' ? LIGHT_PALETTE : DARK_PALETTE;
}

/**
 * Получить цвета атома по символу элемента и теме.
 */
export function getAtomColors(
  element: string,
  theme: Molecule2DTheme
): { fill: string; stroke: string; text: string } {
  const palette = getThemePalette(theme);
  const sym = element.toUpperCase();

  const map: Record<string, { fill: string; stroke: string; text: string }> = {
    C: palette.atomC,
    H: palette.atomH,
    O: palette.atomO,
    N: palette.atomN,
    S: palette.atomS,
    P: palette.atomP,
    SI: palette.atomSi,
    F: palette.atomF,
    CL: palette.atomCl,
    BR: palette.atomBr,
    I: palette.atomI,
  };

  return map[sym] || { fill: palette.textMuted, stroke: palette.bondSecondary, text: palette.textPrimary };
}

/** Семантическая роль цвета элемента схемы (для дата-драйвен диаграмм) */
export type DiagramRole = 'ink' | 'oh' | 'ph' | 'muted' | 'annotation';

/** Цвет роли из палитры темы — единый источник правды для связей и подписей */
export function getDiagramRoleColor(role: DiagramRole, palette: ThemePalette): string {
  switch (role) {
    case 'oh': return palette.ohGroup;
    case 'ph': return palette.phBond;
    case 'muted': return palette.textMuted;
    case 'annotation': return palette.lengthArrow;
    default: return palette.bondPrimary;
  }
}

/**
 * Уникальный ID для SVG pattern/gradient, чтобы избежать конфликтов при нескольких диаграммах на странице.
 */
let _svgIdCounter = 0;
export function uniqueSvgId(prefix: string = 'mol2d'): string {
  return `${prefix}-${++_svgIdCounter}`;
}
