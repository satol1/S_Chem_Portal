import React from 'react';
import { SvgDiagramWrapper, type SvgSpecItem } from '../../../scientific/svg/SvgDiagramWrapper';
import {
  MolecularDiagramBody,
  type DiagramAngleSpec,
  type DiagramAtomSpec,
  type DiagramBondSpec,
  type DiagramLengthSpec,
  type DiagramNoteSpec,
} from '../../../scientific/svg/MolecularDiagram2D';
import { getThemePalette } from '../../../../utils/molecule2DTheme';

export interface ChromiumManganese2DProps {
  type: 'cro4' | 'cr2o7' | 'cro2cl2' | 'mno4' | 'mn2o7';
  className?: string;
  isModal?: boolean;
}

/** Цвета схем — токены централизованной тёмной палитры + приглушённые локальные цвета Cr/Mn */
const P = getThemePalette('dark');
const COL = {
  cr: '#8fa6c9', // приглушённый стальной синий — хром
  mn: '#a893c9', // приглушённый фиолетовый — марганец
  o: P.atomO.fill,
  cl: P.atomCl.fill,
  muted: P.textMuted,
  accent: P.highlight,
  angle: P.lengthArrow,
};

interface CrMnDiagramSpec {
  title: string;
  specTitle: string;
  specItems: SvgSpecItem[];
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  angles?: DiagramAngleSpec[];
  notes?: DiagramNoteSpec[];
  modalScale?: number;
}

/** Схемы темы, описанные данными для генератора MolecularDiagram2D (dark) */
const CR_MN_DIAGRAMS: Record<ChromiumManganese2DProps['type'], CrMnDiagramSpec> = {
  cro4: {
    title: 'Хромат-ион (CrO₄²⁻) — тетраэдрическое окружение Cr(+6)',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Правильный тетраэдр', color: COL.accent },
      { label: 'Степень окисления Cr', value: '+6', color: COL.accent },
      { label: 'Гибридизация Cr', value: 'sp³', color: COL.cr },
      { label: 'Длина связи Cr–O', value: '≈1.65 Å (165 пм)', color: COL.cr },
      { label: 'Валентный угол', value: '≈109.5°', color: COL.o },
      { label: 'Окраска иона', value: 'Жёлтая', color: COL.muted },
      { label: 'Устойчивость', value: 'Щелочная и нейтральная среда', color: COL.muted },
    ],
    atoms: [
      { id: 'Cr', label: 'Cr', x: 0, y: 0, color: COL.cr, fontSize: 15, fontWeight: 'extrabold' },
      { id: 'Ou', label: 'O', x: 0, y: -62, color: COL.o, fontSize: 13 },
      { id: 'Od', label: 'O', x: 0, y: 62, color: COL.o, fontSize: 13 },
      { id: 'Ol', label: 'O', x: -68, y: 0, color: COL.o, fontSize: 13 },
      { id: 'Or', label: 'O', x: 68, y: 0, color: COL.o, fontSize: 13 },
      { id: 'm1', label: '−', x: -84, y: -18, color: COL.muted, fontSize: 10 },
      { id: 'm2', label: '−', x: 84, y: -18, color: COL.muted, fontSize: 10 },
    ],
    bonds: [
      { from: 'Cr', to: 'Ou', type: 'double' },
      { from: 'Cr', to: 'Od', type: 'double' },
      { from: 'Cr', to: 'Ol' },
      { from: 'Cr', to: 'Or' },
    ],
    lengths: [{ from: 'Cr', to: 'Ou', label: '1.65 Å', side: 1, distance: 13, color: COL.accent }],
    angles: [{ vertex: 'Cr', a: 'Ol', b: 'Ou', label: '109.5°', color: COL.angle }],
    notes: [{ x: 0, y: 96, text: 'Жёлтый ион — устойчив в щелочной среде', color: COL.muted, anchor: 'middle' }],
  },

  cr2o7: {
    title: 'Дихромат-ион (Cr₂O₇²⁻) — два тетраэдра CrO₄ с общей вершиной',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: '2 тетраэдра с общим O', color: COL.accent },
      { label: 'Мостиковый угол', value: 'Cr–O–Cr ≈ 126°', color: COL.accent },
      { label: 'Связь Cr=O (терм.)', value: '≈1.60 Å', color: COL.cr },
      { label: 'Связь Cr–O–Cr', value: '≈1.79 Å', color: COL.o },
      { label: 'Окраска иона', value: 'Оранжевая', color: COL.muted },
      { label: 'Окислитель', value: 'E°(Cr₂O₇²⁻/Cr³⁺) = +1.33 В', color: COL.muted },
    ],
    atoms: [
      { id: 'Cr1', label: 'Cr', x: -78, y: 0, color: COL.cr, fontSize: 14, fontWeight: 'extrabold' },
      { id: 'Cr2', label: 'Cr', x: 78, y: 0, color: COL.cr, fontSize: 14, fontWeight: 'extrabold' },
      { id: 'Ob', label: 'O', x: 0, y: 0, color: COL.o, fontSize: 12 },
      { id: 'O1u', label: 'O', x: -78, y: -62, color: COL.o, fontSize: 12 },
      { id: 'O1d', label: 'O', x: -78, y: 62, color: COL.o, fontSize: 12 },
      { id: 'O1l', label: 'O', x: -150, y: 0, color: COL.o, fontSize: 12 },
      { id: 'O2u', label: 'O', x: 78, y: -62, color: COL.o, fontSize: 12 },
      { id: 'O2d', label: 'O', x: 78, y: 62, color: COL.o, fontSize: 12 },
      { id: 'O2r', label: 'O', x: 150, y: 0, color: COL.o, fontSize: 12 },
      { id: 'm1', label: '−', x: -166, y: -18, color: COL.muted, fontSize: 10 },
      { id: 'm2', label: '−', x: 166, y: -18, color: COL.muted, fontSize: 10 },
    ],
    bonds: [
      { from: 'Cr1', to: 'Ob' },
      { from: 'Cr2', to: 'Ob' },
      { from: 'Cr1', to: 'O1u', type: 'double' },
      { from: 'Cr1', to: 'O1d', type: 'double' },
      { from: 'Cr1', to: 'O1l' },
      { from: 'Cr2', to: 'O2u', type: 'double' },
      { from: 'Cr2', to: 'O2d', type: 'double' },
      { from: 'Cr2', to: 'O2r' },
    ],
    lengths: [
      { from: 'Cr1', to: 'O1u', label: '1.60 Å', side: 1, distance: 12, color: COL.accent },
      { from: 'Cr1', to: 'Ob', label: '1.79 Å', side: -1, distance: 12, color: COL.accent },
    ],
    angles: [{ vertex: 'Ob', a: 'Cr1', b: 'Cr2', label: '≈126°', radius: 22, color: COL.angle }],
    notes: [{ x: 0, y: 96, text: 'Оранжевый ион — устойчив в кислой среде', color: COL.muted, anchor: 'middle' }],
    modalScale: 1.15,
  },

  cro2cl2: {
    title: 'Хлорид хромоила (CrO₂Cl₂) — тетраэдр хрома(+6)',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Тетраэдр (sp³)', color: COL.accent },
      { label: 'Связь Cr=O', value: '≈1.57 Å', color: COL.cr },
      { label: 'Связь Cr–Cl', value: '≈2.12 Å', color: COL.cl },
      { label: 'Агрегатное состояние', value: 'Тёмно-красная жидкость', color: COL.muted },
      { label: 'Применение', value: 'Проба на хлорид-ионы', color: COL.muted },
    ],
    atoms: [
      { id: 'Cr', label: 'Cr', x: 0, y: 0, color: COL.cr, fontSize: 15, fontWeight: 'extrabold' },
      { id: 'Ou', label: 'O', x: 0, y: -62, color: COL.o, fontSize: 13 },
      { id: 'Od', label: 'O', x: 0, y: 62, color: COL.o, fontSize: 13 },
      { id: 'Cl1', label: 'Cl', x: -74, y: 0, color: COL.cl, fontSize: 13 },
      { id: 'Cl2', label: 'Cl', x: 74, y: 0, color: COL.cl, fontSize: 13 },
    ],
    bonds: [
      { from: 'Cr', to: 'Ou', type: 'double' },
      { from: 'Cr', to: 'Od', type: 'double' },
      { from: 'Cr', to: 'Cl1' },
      { from: 'Cr', to: 'Cl2' },
    ],
    lengths: [
      { from: 'Cr', to: 'Ou', label: '1.57 Å', side: 1, distance: 13, color: COL.accent },
      { from: 'Cr', to: 'Cl2', label: '2.12 Å', side: -1, distance: 13, color: COL.accent },
    ],
    angles: [{ vertex: 'Cr', a: 'Ou', b: 'Cl2', label: '≈109°', color: COL.angle }],
    notes: [
      { x: 0, y: 96, text: 'Красные дымящиеся пары — проба на Cl⁻', color: COL.muted, anchor: 'middle' },
      { x: 0, y: 112, text: 'Длины связей — учебные значения', color: COL.muted, anchor: 'middle', fontSize: 8 },
    ],
  },

  mno4: {
    title: 'Перманганат-ион (MnO₄⁻) — тетраэдрическое окружение Mn(+7)',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Правильный тетраэдр', color: COL.accent },
      { label: 'Степень окисления Mn', value: '+7', color: COL.accent },
      { label: 'Длина связи Mn–O', value: '≈1.63 Å (163 пм)', color: COL.mn },
      { label: 'Валентный угол', value: '≈109.5°', color: COL.o },
      { label: 'Окраска иона', value: 'Фиолетовая', color: COL.muted },
      { label: 'Окислитель', value: 'E°(MnO₄⁻/Mn²⁺) = +1.51 В', color: COL.muted },
    ],
    atoms: [
      { id: 'Mn', label: 'Mn', x: 0, y: 0, color: COL.mn, fontSize: 14, fontWeight: 'extrabold' },
      { id: 'Ou', label: 'O', x: 0, y: -62, color: COL.o, fontSize: 13 },
      { id: 'Od', label: 'O', x: 0, y: 62, color: COL.o, fontSize: 13 },
      { id: 'Or', label: 'O', x: 68, y: 0, color: COL.o, fontSize: 13 },
      { id: 'Ol', label: 'O', x: -68, y: 0, color: COL.o, fontSize: 13 },
      { id: 'm1', label: '−', x: -84, y: -18, color: COL.muted, fontSize: 10 },
    ],
    bonds: [
      { from: 'Mn', to: 'Ou', type: 'double' },
      { from: 'Mn', to: 'Od', type: 'double' },
      { from: 'Mn', to: 'Or', type: 'double' },
      { from: 'Mn', to: 'Ol' },
    ],
    lengths: [{ from: 'Mn', to: 'Ou', label: '1.63 Å', side: 1, distance: 13, color: COL.accent }],
    angles: [{ vertex: 'Mn', a: 'Ol', b: 'Ou', label: '109.5°', color: COL.angle }],
    notes: [{ x: 0, y: 96, text: 'Фиолетовый ион — «марганцовка»', color: COL.muted, anchor: 'middle' }],
  },

  mn2o7: {
    title: 'Оксид марганца(VII) (Mn₂O₇) — два тетраэдра MnO₄ с общей вершиной',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: '2 тетраэдра с общим O', color: COL.accent },
      { label: 'Мостиковый угол', value: 'Mn–O–Mn ≈ 120.7°', color: COL.accent },
      { label: 'Связь Mn=O', value: '≈1.585 Å', color: COL.mn },
      { label: 'Связь Mn–O–Mn', value: '≈1.77 Å', color: COL.o },
      { label: 'Агрегатное состояние', value: 'Тёмно-зелёная жидкость', color: COL.muted },
      { label: 'Опасность', value: 'Взрывоопасен, окислитель', color: COL.muted },
    ],
    atoms: [
      { id: 'Mn1', label: 'Mn', x: -78, y: 0, color: COL.mn, fontSize: 13, fontWeight: 'extrabold' },
      { id: 'Mn2', label: 'Mn', x: 78, y: 0, color: COL.mn, fontSize: 13, fontWeight: 'extrabold' },
      { id: 'Ob', label: 'O', x: 0, y: 0, color: COL.o, fontSize: 12 },
      { id: 'O1u', label: 'O', x: -78, y: -62, color: COL.o, fontSize: 12 },
      { id: 'O1d', label: 'O', x: -78, y: 62, color: COL.o, fontSize: 12 },
      { id: 'O1l', label: 'O', x: -150, y: 0, color: COL.o, fontSize: 12 },
      { id: 'O2u', label: 'O', x: 78, y: -62, color: COL.o, fontSize: 12 },
      { id: 'O2d', label: 'O', x: 78, y: 62, color: COL.o, fontSize: 12 },
      { id: 'O2r', label: 'O', x: 150, y: 0, color: COL.o, fontSize: 12 },
    ],
    bonds: [
      { from: 'Mn1', to: 'Ob' },
      { from: 'Mn2', to: 'Ob' },
      { from: 'Mn1', to: 'O1u', type: 'double' },
      { from: 'Mn1', to: 'O1d', type: 'double' },
      { from: 'Mn1', to: 'O1l', type: 'double' },
      { from: 'Mn2', to: 'O2u', type: 'double' },
      { from: 'Mn2', to: 'O2d', type: 'double' },
      { from: 'Mn2', to: 'O2r', type: 'double' },
    ],
    lengths: [
      { from: 'Mn1', to: 'O1u', label: '1.585 Å', side: 1, distance: 12, color: COL.accent },
      { from: 'Mn1', to: 'Ob', label: '1.77 Å', side: -1, distance: 12, color: COL.accent },
    ],
    angles: [{ vertex: 'Ob', a: 'Mn1', b: 'Mn2', label: '≈120.7°', radius: 22, color: COL.angle }],
    notes: [{ x: 0, y: 96, text: 'Маслянистая жидкость, взрывается при нагревании', color: COL.muted, anchor: 'middle' }],
    modalScale: 1.15,
  },
};

export const ChromiumManganese2DRender: React.FC<ChromiumManganese2DProps> = ({
  type,
  className = '',
  isModal = false,
}) => {
  const spec = CR_MN_DIAGRAMS[type];
  return (
    <SvgDiagramWrapper
      theme="dark"
      isModal={isModal}
      className={`text-slate-100 ${className}`}
      title={spec.title}
      specTitle={spec.specTitle}
      specItems={spec.specItems}
      diagramTransform={isModal ? 'translate(210, 215)' : undefined}
      modalScale={spec.modalScale}
    >
      <MolecularDiagramBody
        theme="dark"
        compact={!isModal}
        atoms={spec.atoms}
        bonds={spec.bonds}
        lengths={spec.lengths}
        angles={spec.angles}
        notes={spec.notes}
      />
    </SvgDiagramWrapper>
  );
};
