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

export interface Halogens2DProps {
  type: 'x2-molecules' | 'hcl' | 'hclo4' | 'hclo';
  className?: string;
  isModal?: boolean;
}

/** Цвета схем — токены централизованной тёмной палитры (академический стиль) */
const P = getThemePalette('dark');
const COL = {
  f: P.atomF.fill,
  cl: P.atomCl.fill,
  br: P.atomBr.fill,
  i: P.atomI.fill,
  o: P.atomO.fill,
  h: P.atomH.fill,
  muted: P.textMuted,
  accent: P.highlight,
  angle: P.lengthArrow,
};

interface HalogenDiagramSpec {
  title: string;
  subtitle: string;
  specTitle: string;
  specItems: SvgSpecItem[];
  compactTransform: string;
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  angles?: DiagramAngleSpec[];
  notes?: DiagramNoteSpec[];
}

/** Схемы темы, описанные данными для генератора MolecularDiagram2D (dark) */
const HALOGEN_DIAGRAMS: Record<Halogens2DProps['type'], HalogenDiagramSpec> = {
  'x2-molecules': {
    title: 'Молекулы галогенов X₂ — рост длины и ослабление связи F₂ → I₂',
    subtitle: 'Связь X–X: длина растёт, энергия падает (аномалия F₂)',
    specTitle: 'Параметры связей X–X:',
    specItems: [
      { label: 'd(F–F)', value: '1.412 Å • E = 158 кДж/моль', color: COL.f },
      { label: 'd(Cl–Cl)', value: '1.988 Å • E = 243 кДж/моль', color: COL.cl },
      { label: 'd(Br–Br)', value: '2.284 Å • E = 193 кДж/моль', color: COL.br },
      { label: 'd(I–I)', value: '2.666 Å • E = 151 кДж/моль', color: COL.i },
      { label: 'Аномалия F₂', value: 'Связь слабее Cl₂ из-за отталкивания н.э. пар компактных атомов', color: COL.accent },
      { label: 'Следствие', value: 'F₂ — самый реакционноспособный галоген', color: COL.accent },
    ],
    compactTransform: 'translate(150, 95)',
    atoms: [
      { id: 'f1', label: 'F', x: -114, y: -48, color: COL.f, fontSize: 11 },
      { id: 'f2', label: 'F', x: -76, y: -48, color: COL.f, fontSize: 11 },
      { id: 'cl1', label: 'Cl', x: 68, y: -48, color: COL.cl, fontSize: 11 },
      { id: 'cl2', label: 'Cl', x: 122, y: -48, color: COL.cl, fontSize: 11 },
      { id: 'br1', label: 'Br', x: -76, y: 52, color: COL.br, fontSize: 11 },
      { id: 'br2', label: 'Br', x: -14, y: 52, color: COL.br, fontSize: 11 },
      { id: 'i1', label: 'I', x: 74, y: 52, color: COL.i, fontSize: 11 },
      { id: 'i2', label: 'I', x: 146, y: 52, color: COL.i, fontSize: 11 },
    ],
    bonds: [
      { from: 'f1', to: 'f2' },
      { from: 'cl1', to: 'cl2' },
      { from: 'br1', to: 'br2' },
      { from: 'i1', to: 'i2' },
    ],
    notes: [
      { x: -95, y: -22, text: '1.412 Å • 158 кДж/моль', color: COL.f, anchor: 'middle', fontSize: 7.5 },
      { x: 95, y: -22, text: '1.988 Å • 243 кДж/моль', color: COL.cl, anchor: 'middle', fontSize: 7.5 },
      { x: -45, y: 78, text: '2.284 Å • 193 кДж/моль', color: COL.br, anchor: 'middle', fontSize: 7.5 },
      { x: 110, y: 78, text: '2.666 Å • 151 кДж/моль', color: COL.i, anchor: 'middle', fontSize: 7.5 },
      { x: -95, y: -68, text: 'F₂', color: COL.accent, anchor: 'middle', fontSize: 10 },
      { x: 95, y: -68, text: 'Cl₂', color: COL.muted, anchor: 'middle', fontSize: 10 },
      { x: -45, y: 32, text: 'Br₂', color: COL.muted, anchor: 'middle', fontSize: 10 },
      { x: 110, y: 32, text: 'I₂', color: COL.muted, anchor: 'middle', fontSize: 10 },
    ],
  },

  hcl: {
    title: 'Хлороводород (HCl) — полярная молекула с дипольным моментом',
    subtitle: 'Хлороводород HCl: d = 127.5 пм, μ = 1.08 D',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Линейная (двухатомная)', color: COL.accent },
      { label: 'Длина связи H–Cl', value: '1.275 Å (127.5 пм)', color: COL.cl },
      { label: 'Энергия связи', value: '431 кДж/моль', color: COL.cl },
      { label: 'Дипольный момент', value: 'μ = 1.08 D (полярная)', color: COL.accent },
      { label: 'Тип связи', value: 'Ковалентная полярная', color: COL.muted },
      { label: 't кипения', value: '−85 °C (без водородных связей)', color: COL.muted },
    ],
    compactTransform: 'translate(150, 100)',
    atoms: [
      { id: 'H', label: 'H', x: -45, y: 0, color: COL.h, fontSize: 13 },
      { id: 'Cl', label: 'Cl', x: 45, y: 0, color: COL.cl, fontSize: 13 },
    ],
    bonds: [{ from: 'H', to: 'Cl' }],
    lengths: [{ from: 'H', to: 'Cl', label: '127.5 пм', side: 1, distance: 16, color: COL.angle }],
    notes: [
      { x: -45, y: -22, text: 'δ+', color: COL.h, anchor: 'middle', fontSize: 10 },
      { x: 45, y: -22, text: 'δ−', color: COL.cl, anchor: 'middle', fontSize: 10 },
    ],
  },

  hclo4: {
    title: 'Хлорная кислота (HClO₄) — тетраэдр Cl(+7)',
    subtitle: 'Хлорная кислота HClO₄: Cl(+7), 3 связи Cl=O + Cl–OH',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Искажённый тетраэдр', color: COL.accent },
      { label: 'Степень окисления Cl', value: '+7 (высшая)', color: COL.accent },
      { label: 'Связи Cl=O', value: '3 × 1.41 Å (кратные)', color: COL.cl },
      { label: 'Связь Cl–OH', value: '≈1.64 Å (одинарная)', color: COL.o },
      { label: 'Сила кислоты', value: 'Одна из сильнейших неорганических', color: COL.muted },
      { label: 'Соли', value: 'Перхлораты MClO₄ (устойчивы)', color: COL.muted },
    ],
    compactTransform: 'translate(150, 105)',
    atoms: [
      { id: 'Cl', label: 'Cl', x: 0, y: 0, color: COL.cl, fontSize: 13 },
      { id: 'o1', label: 'O', x: 0, y: -55, color: COL.o, fontSize: 11 },
      { id: 'o2', label: 'O', x: 70, y: 12, color: COL.o, fontSize: 11 },
      { id: 'o3', label: 'O', x: -70, y: 12, color: COL.o, fontSize: 11 },
      { id: 'o4', label: 'O', x: 0, y: 58, color: COL.o, fontSize: 11 },
      { id: 'h1', label: 'H', x: 28, y: 82, color: COL.h, fontSize: 10 },
    ],
    bonds: [
      { from: 'Cl', to: 'o1', type: 'double', offset: 3 },
      { from: 'Cl', to: 'o2', type: 'double', offset: 3 },
      { from: 'Cl', to: 'o3', type: 'double', offset: 3 },
      { from: 'Cl', to: 'o4' },
      { from: 'o4', to: 'h1' },
    ],
  },

  hclo: {
    title: 'Хлорноватистая кислота (HClO) — строение H–O–Cl',
    subtitle: 'Хлорноватистая кислота HClO: Cl(+1), угол ≈ 111°',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Уголковая (O в центре)', color: COL.accent },
      { label: 'Степень окисления Cl', value: '+1', color: COL.accent },
      { label: 'Валентный угол H–O–Cl', value: '≈ 111°', color: COL.o },
      { label: 'Длина связи O–Cl', value: '1.69 Å', color: COL.cl },
      { label: 'Длина связи O–H', value: '0.97 Å', color: COL.h },
      { label: 'Устойчивость', value: 'Только в разбавленном растворе', color: COL.muted },
      { label: 'Свойство', value: 'Сильный окислитель, бактерицид', color: COL.muted },
    ],
    compactTransform: 'translate(150, 105)',
    atoms: [
      { id: 'O', label: 'O', x: 0, y: -8, color: COL.o, fontSize: 13 },
      { id: 'Cl', label: 'Cl', x: 78, y: 18, color: COL.cl, fontSize: 12 },
      { id: 'H', label: 'H', x: -34, y: 34, color: COL.h, fontSize: 11 },
    ],
    bonds: [
      { from: 'O', to: 'Cl' },
      { from: 'O', to: 'H' },
    ],
    lengths: [
      { from: 'O', to: 'Cl', label: '169 пм', side: 1, distance: 14, color: COL.angle },
      { from: 'O', to: 'H', label: '97 пм', side: -1, distance: 14, color: COL.angle },
    ],
    angles: [{ vertex: 'O', a: 'H', b: 'Cl', label: '≈ 111°', color: COL.accent }],
  },
};

/**
 * Векторные 2D-схемы молекул галогенов и их соединений.
 * Построены на централизованном генераторе MolecularDiagram2D (тёмная тема);
 * каркас модалок (фон, сетка, панель спецификаций) — SvgDiagramWrapper.
 */
export const Halogens2DRender: React.FC<Halogens2DProps> = ({
  type,
  className = '',
  isModal = false,
}) => {
  const spec = HALOGEN_DIAGRAMS[type];

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
        lengths={spec.lengths}
        angles={spec.angles}
        notes={spec.notes}
      />
    </SvgDiagramWrapper>
  );
};
