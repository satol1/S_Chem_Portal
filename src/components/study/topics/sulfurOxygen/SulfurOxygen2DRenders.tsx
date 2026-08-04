import React from 'react';
import { SvgDiagramWrapper, type SvgSpecItem } from '../../../scientific/svg/SvgDiagramWrapper';
import {
  MolecularDiagramBody,
  type DiagramAngleSpec,
  type DiagramAtomSpec,
  type DiagramBondSpec,
  type DiagramLineSpec,
  type DiagramNoteSpec,
} from '../../../scientific/svg/MolecularDiagram2D';
import { getThemePalette } from '../../../../utils/molecule2DTheme';

export interface SulfurOxygen2DProps {
  type: 'rhombic-sulfur' | 'ozone' | 'h2so4' | 'so2';
  className?: string;
  isModal?: boolean;
}

/** Цвета схем — токены централизованной тёмной палитры (академический стиль) */
const P = getThemePalette('dark');
const COL = {
  s: P.atomS.fill,
  o: P.atomO.fill,
  h: P.atomH.fill,
  muted: P.textMuted,
  accent: P.highlight,
  angle: P.lengthArrow,
};

interface SODiagramSpec {
  title: string;
  subtitle: string;
  specTitle: string;
  specItems: SvgSpecItem[];
  compactTransform: string;
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  angles?: DiagramAngleSpec[];
  lines?: DiagramLineSpec[];
  notes?: DiagramNoteSpec[];
}

/** Схемы темы, описанные данными для генератора MolecularDiagram2D (dark) */
const SO_DIAGRAMS: Record<SulfurOxygen2DProps['type'], SODiagramSpec> = {
  'rhombic-sulfur': {
    title: 'Ромбическая сера (α-S₈) — 3D-корончатая конформация (симметрия D₄d)',
    subtitle: 'Ромбическая сера S₈: Корончатый цикл (sp³, 107.9°, τ=98.0°)',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Молекула', value: 'Восьмичленный цикл S₈', color: COL.accent },
      { label: 'Конформация', value: 'Корончатая (симметрия D₄d)', color: COL.accent },
      { label: 'Сингония', value: 'Орторомбическая (α-S, Fddd)', color: COL.accent },
      { label: 'Гибридизация S', value: 'sp³ (2 связи + 2 н.э. пары)', color: COL.s },
      { label: 'Валентный угол θ(S-S-S)', value: '107.9° ≈ 108.0°', color: COL.accent },
      { label: 'Торсионный угол τ(S-S-S-S)', value: '98.0°', color: COL.o },
      { label: 'Длина связи d(S-S)', value: '2.055 Å (205.5 пм)', color: COL.s },
      { label: 'Межплоскостное расст.', value: '0.99 Å', color: COL.o },
      { label: 'Плотность α-S', value: '2.07 г/см³', color: COL.muted },
      { label: 'Растворимость', value: 'В сероуглероде CS₂', color: COL.muted },
    ],
    compactTransform: 'translate(150, 95)',
    atoms: [
      // Тыльный план (приглушённые)
      { id: 'b1', label: 'S', x: -62, y: -48, color: COL.s, fontSize: 10, opacity: 0.75 },
      { id: 'b2', label: 'S', x: 0, y: -12, color: COL.s, fontSize: 10, opacity: 0.75 },
      { id: 'b3', label: 'S', x: 62, y: -48, color: COL.s, fontSize: 10, opacity: 0.75 },
      // Боковые
      { id: 'l', label: 'S', x: -105, y: 20, color: COL.s, fontSize: 12 },
      { id: 'r', label: 'S', x: 105, y: 20, color: COL.s, fontSize: 12 },
      // Передний верхний план
      { id: 't1', label: 'S', x: -72, y: -8, color: COL.s, fontSize: 12 },
      { id: 't2', label: 'S', x: 72, y: -8, color: COL.s, fontSize: 12 },
      // Передний нижний
      { id: 'c', label: 'S', x: 0, y: 60, color: COL.s, fontSize: 13 },
    ],
    bonds: [
      { from: 'b1', to: 'b2', type: 'dashed', opacity: 0.55 },
      { from: 'b2', to: 'b3', type: 'dashed', opacity: 0.55 },
      { from: 'l', to: 'b1', opacity: 0.7 },
      { from: 'b3', to: 'r', opacity: 0.7 },
      { from: 'l', to: 't1' },
      { from: 't1', to: 'c' },
      { from: 'c', to: 't2' },
      { from: 't2', to: 'r' },
    ],
    angles: [{ vertex: 'c', a: 't1', b: 't2', label: 'θ ≈ 107.9°', color: COL.accent }],
    lines: [
      { x1: -125, y1: -70, x2: 125, y2: -70, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: -125, y1: 42, x2: 125, y2: 42, dash: '3 3', color: COL.muted, opacity: 0.45 },
    ],
    notes: [
      { x: -122, y: -76, text: 'Верхняя плоскость (4S)', role: 'muted', anchor: 'start', fontSize: 8 },
      { x: -122, y: 52, text: 'Нижняя плоскость (4S)', role: 'muted', anchor: 'start', fontSize: 8 },
      { x: -140, y: -58, text: 'τ = 98.0° (S–S–S–S)', color: COL.o, anchor: 'start' },
      { x: 140, y: -58, text: 'd(S–S) = 2.055 Å', color: COL.s, anchor: 'end' },
    ],
  },

  ozone: {
    title: 'Молекула озона (O₃) — Изогнутая структура с делокализованной π-связью',
    subtitle: 'Озон O₃: Уголковая молекула (sp², 116.8°, π₃⁴)',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Уголковая (C₂v)', color: COL.accent },
      { label: 'Гибридизация ц. O', value: 'sp²-гибридизация', color: COL.accent },
      { label: 'Валентный угол', value: '116.8°', color: COL.s },
      { label: 'Длина связи O-O', value: '1.278 Å', color: COL.s },
      { label: 'Электронная связь', value: 'Делокал. π₃⁴', color: COL.o },
      { label: 'Резонанс', value: '[O=O⁺-O⁻] ↔ [O⁻-O⁺=O]', color: COL.o },
      { label: 'Окислит. потенциал', value: 'E° = +2.07 В', color: COL.muted },
      { label: 'Тест', value: 'KI + крахмал (синеет)', color: COL.muted },
    ],
    compactTransform: 'translate(150, 110)',
    atoms: [
      { id: 'oc', label: 'O', x: 0, y: -30, color: COL.o, fontSize: 13 },
      { id: 'ol', label: 'O', x: -80, y: 40, color: COL.o, fontSize: 12 },
      { id: 'or', label: 'O', x: 80, y: 40, color: COL.o, fontSize: 12 },
      { id: 'plus', label: '+', x: 14, y: -50, color: COL.o, fontSize: 10 },
      { id: 'minus', label: '−', x: 102, y: 28, color: COL.o, fontSize: 10 },
    ],
    bonds: [
      { from: 'oc', to: 'ol', type: 'double' },
      { from: 'oc', to: 'or', type: 'dashed' },
    ],
    angles: [{ vertex: 'oc', a: 'ol', b: 'or', label: '116.8°', color: COL.angle }],
  },

  h2so4: {
    title: 'Серная кислота (H₂SO₄) — Тетраэдрическое окружение S(+6)',
    subtitle: 'Серная кислота H₂SO₄: Тетраэдр S(+6) (sp³, 1.42/1.57 Å)',
    specTitle: 'Кристаллографические данные:',
    specItems: [
      { label: 'Геометрия', value: 'Искаженный тетраэдр', color: COL.accent },
      { label: 'Ск. окисления S', value: '+6', color: COL.accent },
      { label: 'Гибридизация S', value: 'sp³-тетраэдр', color: COL.s },
      { label: 'Длина связи S=O', value: '1.42 Å (dπ-pπ)', color: COL.s },
      { label: 'Длина связи S-OH', value: '1.57 Å', color: COL.o },
      { label: 'Угол O=S=O', value: '119°', color: COL.o },
      { label: 'Угол HO-S-OH', value: '101°', color: COL.muted },
      { label: 'Энтальпия гидрат.', value: '-880 кДж/моль', color: COL.muted },
    ],
    compactTransform: 'translate(150, 105)',
    atoms: [
      { id: 'S', label: 'S', x: 0, y: 0, color: COL.s, fontSize: 13 },
      { id: 'o1', label: 'O', x: 0, y: -55, color: COL.o, fontSize: 11 },
      { id: 'o2', label: 'O', x: 0, y: 55, color: COL.o, fontSize: 11 },
      { id: 'o3', label: 'O', x: -70, y: 0, color: COL.o, fontSize: 11 },
      { id: 'o4', label: 'O', x: 70, y: 0, color: COL.o, fontSize: 11 },
      { id: 'h1', label: 'H', x: -100, y: 25, color: COL.h, fontSize: 10 },
      { id: 'h2', label: 'H', x: 100, y: -25, color: COL.h, fontSize: 10 },
    ],
    bonds: [
      { from: 'S', to: 'o1', type: 'double', offset: 3 },
      { from: 'S', to: 'o2', type: 'double', offset: 3 },
      { from: 'S', to: 'o3' },
      { from: 'S', to: 'o4' },
      { from: 'o3', to: 'h1' },
      { from: 'o4', to: 'h2' },
    ],
  },

  so2: {
    title: 'Диоксид серы (SO₂) — Уголковая молекула (sp²-гибридизация)',
    subtitle: 'Диоксид серы SO₂: Уголковая молекула (sp², 119.5°, 1.43 Å)',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Уголковая (C₂v)', color: COL.accent },
      { label: 'Гибридизация S', value: 'sp²-гибридизация', color: COL.accent },
      { label: 'Валентный угол O-S-O', value: '119.5°', color: COL.s },
      { label: 'Длина связи S=O', value: '1.43 Å (143 пм)', color: COL.s },
      { label: 'Ск. окисления S', value: '+4', color: COL.o },
      { label: 'Запах', value: 'Резкий удушливый', color: COL.o },
      { label: 'Применение', value: 'Пищ. консервант E220', color: COL.muted },
    ],
    compactTransform: 'translate(150, 110)',
    atoms: [
      { id: 'S', label: 'S', x: 0, y: -30, color: COL.s, fontSize: 13 },
      { id: 'o1', label: 'O', x: -75, y: 35, color: COL.o, fontSize: 12 },
      { id: 'o2', label: 'O', x: 75, y: 35, color: COL.o, fontSize: 12 },
    ],
    bonds: [
      { from: 'S', to: 'o1', type: 'double', offset: 3.5 },
      { from: 'S', to: 'o2', type: 'double', offset: 3.5 },
    ],
    angles: [{ vertex: 'S', a: 'o1', b: 'o2', label: '119.5°', color: COL.s }],
  },
};

/**
 * Векторные 2D-схемы пространственного строения соединений серы и кислорода.
 * Построены на централизованном генераторе MolecularDiagram2D (тёмная тема);
 * каркас модалок (фон, сетка, панель спецификаций) — SvgDiagramWrapper.
 */
export const SulfurOxygen2DRender: React.FC<SulfurOxygen2DProps> = ({
  type,
  className = '',
  isModal = false,
}) => {
  const spec = SO_DIAGRAMS[type];

  return (
    <SvgDiagramWrapper
      theme="dark"
      isModal={isModal}
      className={`text-slate-100 ${className}`}
      title={spec.title}
      subtitle={spec.subtitle}
      specTitle={spec.specTitle}
      specItems={spec.specItems}
      diagramTransform={isModal ? 'translate(210, 215)' : spec.compactTransform}
    >
      <MolecularDiagramBody
        theme="dark"
        atoms={spec.atoms}
        bonds={spec.bonds}
        angles={spec.angles}
        lines={spec.lines}
        notes={spec.notes}
      />
    </SvgDiagramWrapper>
  );
};
