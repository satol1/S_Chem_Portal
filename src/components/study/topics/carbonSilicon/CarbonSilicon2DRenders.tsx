import React from 'react';
import { SvgDiagramWrapper, type SvgSpecItem } from '../../../scientific/svg/SvgDiagramWrapper';
import {
  MolecularDiagramBody,
  type DiagramAngleSpec,
  type DiagramAtomSpec,
  type DiagramBondSpec,
  type DiagramLengthSpec,
  type DiagramLineSpec,
  type DiagramNoteSpec,
} from '../../../scientific/svg/MolecularDiagram2D';
import { SvgAtom } from '../../../scientific/svg/SvgAtom';
import { SvgBond } from '../../../scientific/svg/SvgBond';
import { getThemePalette } from '../../../../utils/molecule2DTheme';

export interface CarbonSilicon2DProps {
  type: 'diamond' | 'graphite' | 'fullerene' | 'silicon';
  className?: string;
  isModal?: boolean;
}

/** Цвета схем — токены централизованной тёмной палитры (академический стиль) */
const P = getThemePalette('dark');
const COL = {
  c: P.atomC.fill,
  si: P.atomSi.fill,
  muted: P.textMuted,
  accent: P.highlight,
  secondary: P.bondSecondary,
};

interface CarbonDiagramSpec {
  title: string;
  specTitle: string;
  specItems: SvgSpecItem[];
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  angles?: DiagramAngleSpec[];
  lines?: DiagramLineSpec[];
  notes?: DiagramNoteSpec[];
}

/** Схемы алмаза, графита и кремния, описанные данными для генератора MolecularDiagram2D (dark) */
const CARBON_DIAGRAMS: Record<Exclude<CarbonSilicon2DProps['type'], 'fullerene'>, CarbonDiagramSpec> = {
  diamond: {
    title: 'Алмаз — тетраэдрическая атомная кристаллическая решётка (sp³)',
    specTitle: 'Кристаллографические данные:',
    specItems: [
      { label: 'Тип решётки', value: 'Атомная 3D-сеть', color: COL.accent },
      { label: 'Гибридизация C', value: 'sp³-тетраэдр', color: COL.accent },
      { label: 'Валентный угол', value: '109°28′', color: COL.accent },
      { label: 'Длина связи C–C', value: '1.54 Å (0.154 нм)', color: COL.c },
      { label: 'Тип связи', value: 'Прочные σ-связи', color: COL.c },
      { label: 'Твёрдость по Моосу', value: '10 (эталон)', color: COL.muted },
      { label: 'Проводимость', value: 'Диэлектрик', color: COL.muted },
      { label: 'Показатель преломления', value: '2.42', color: COL.muted },
    ],
    atoms: [
      { id: 'c', label: 'C', x: 0, y: 0, color: COL.c, fontSize: 16, fontWeight: 'extrabold' },
      { id: 'a', label: 'C', x: -65, y: 65, color: COL.c, fontSize: 13 },
      { id: 'b', label: 'C', x: 75, y: 55, color: COL.c, fontSize: 13 },
      { id: 't', label: 'C', x: 0, y: -80, color: COL.c, fontSize: 13 },
      { id: 'k', label: 'C', x: -30, y: -25, color: COL.muted, fontSize: 11, opacity: 0.7 },
    ],
    bonds: [
      { from: 'c', to: 'a', color: COL.accent },
      { from: 'c', to: 'b', color: COL.accent },
      { from: 'c', to: 't', color: COL.accent },
      { from: 'c', to: 'k', type: 'dashed' },
    ],
    lines: [
      { x1: -65, y1: 65, x2: -95, y2: 95, dash: '3 3', color: COL.muted, opacity: 0.5 },
      { x1: 75, y1: 55, x2: 110, y2: 80, dash: '3 3', color: COL.muted, opacity: 0.5 },
      { x1: 0, y1: -80, x2: 0, y2: -110, dash: '3 3', color: COL.muted, opacity: 0.5 },
    ],
    lengths: [{ from: 'c', to: 't', label: '1.54 Å', side: 1, distance: 14 }],
    angles: [{ vertex: 'c', a: 'a', b: 'b', label: '109°28′', color: COL.accent }],
  },

  graphite: {
    title: 'Графит — слоистая гексагональная кристаллическая решётка (sp²)',
    specTitle: 'Кристаллографические данные:',
    specItems: [
      { label: 'Тип решётки', value: 'Слоистая гексагональная', color: COL.accent },
      { label: 'Гибридизация C', value: 'sp²-слой (графен)', color: COL.accent },
      { label: 'Связи C–C в слое', value: '1.42 Å (0.142 нм)', color: COL.c },
      { label: 'Межслойный зазор', value: '3.35 Å (0.335 нм)', color: COL.accent },
      { label: 'Межслойные связи', value: 'Ван-дер-Ваальсовы', color: COL.accent },
      { label: 'Электроны', value: 'Делокализованная π-система', color: COL.c },
      { label: 'Проводимость', value: 'Электропроводник', color: COL.muted },
      { label: 'Свойства', value: 'Чешуйчатость, мягкость', color: COL.muted },
    ],
    atoms: [
      { id: 't1', label: 'C', x: -100, y: -67, color: COL.c, fontSize: 11 },
      { id: 't2', label: 'C', x: -45, y: -83, color: COL.c, fontSize: 11 },
      { id: 't3', label: 'C', x: 45, y: -83, color: COL.c, fontSize: 11 },
      { id: 't4', label: 'C', x: 100, y: -67, color: COL.c, fontSize: 11 },
      { id: 't5', label: 'C', x: 45, y: -51, color: COL.c, fontSize: 11 },
      { id: 't6', label: 'C', x: -45, y: -51, color: COL.c, fontSize: 11 },
      { id: 'b1', label: 'C', x: -100, y: 23, color: COL.muted, fontSize: 11 },
      { id: 'b2', label: 'C', x: -45, y: 7, color: COL.muted, fontSize: 11 },
      { id: 'b3', label: 'C', x: 45, y: 7, color: COL.muted, fontSize: 11 },
      { id: 'b4', label: 'C', x: 100, y: 23, color: COL.muted, fontSize: 11 },
      { id: 'b5', label: 'C', x: 45, y: 39, color: COL.muted, fontSize: 11 },
      { id: 'b6', label: 'C', x: -45, y: 39, color: COL.muted, fontSize: 11 },
    ],
    bonds: [
      { from: 't1', to: 't2', color: COL.c },
      { from: 't2', to: 't3', color: COL.c },
      { from: 't3', to: 't4', color: COL.c },
      { from: 't4', to: 't5', color: COL.c },
      { from: 't5', to: 't6', color: COL.c },
      { from: 't6', to: 't1', color: COL.c },
      { from: 'b1', to: 'b2', color: COL.secondary },
      { from: 'b2', to: 'b3', color: COL.secondary },
      { from: 'b3', to: 'b4', color: COL.secondary },
      { from: 'b4', to: 'b5', color: COL.secondary },
      { from: 'b5', to: 'b6', color: COL.secondary },
      { from: 'b6', to: 'b1', color: COL.secondary },
    ],
    lines: [
      { x1: -100, y1: -67, x2: -100, y2: 23, dash: '3 3', color: COL.accent, opacity: 0.6 },
      { x1: 45, y1: -51, x2: 45, y2: 39, dash: '3 3', color: COL.accent, opacity: 0.6 },
      { x1: 100, y1: -67, x2: 100, y2: 23, dash: '3 3', color: COL.accent, opacity: 0.6 },
    ],
    lengths: [{ from: 't4', to: 'b4', label: '3.35 Å', side: 1, distance: 12 }],
    notes: [
      { x: 0, y: -100, text: 'Графеновый слой (плоские гексагональные сетки)', role: 'muted', anchor: 'middle' },
      { x: 0, y: -12, text: 'Слабые связи Ван-дер-Ваальса', role: 'muted', anchor: 'middle' },
    ],
  },

  silicon: {
    title: 'Кристаллический кремний — кубическая решётка типа алмаза (sp³)',
    specTitle: 'Кристаллографические данные Si:',
    specItems: [
      { label: 'Тип решётки', value: 'Кубическая типа алмаза', color: COL.si },
      { label: 'Гибридизация Si', value: 'sp³-тетраэдр', color: COL.si },
      { label: 'Длина связи Si–Si', value: '2.35 Å (0.235 нм)', color: COL.si },
      { label: 'Запрещённая зона', value: 'Eg = 1.12 эВ', color: COL.accent },
      { label: 'Электропроводность', value: 'Полупроводник', color: COL.accent },
      { label: 'Твёрдость по Моосу', value: '7 (хрупкий)', color: COL.muted },
      { label: 'Внешний вид', value: 'Тёмно-серые кристаллы', color: COL.muted },
      { label: 'Применение', value: 'Электроника, процессоры', color: COL.muted },
    ],
    atoms: [
      { id: 's', label: 'Si', x: 0, y: 0, color: COL.si, fontSize: 16, fontWeight: 'extrabold' },
      { id: 'a', label: 'Si', x: -40, y: 40, color: COL.si, fontSize: 12 },
      { id: 'b', label: 'Si', x: 50, y: 35, color: COL.si, fontSize: 12 },
      { id: 't', label: 'Si', x: 0, y: -50, color: COL.si, fontSize: 12 },
      { id: 'k', label: 'Si', x: -22, y: -18, color: COL.muted, fontSize: 10, opacity: 0.7 },
    ],
    bonds: [
      { from: 's', to: 'a', color: COL.si },
      { from: 's', to: 'b', color: COL.si },
      { from: 's', to: 't', color: COL.si },
      { from: 's', to: 'k', type: 'dashed' },
    ],
    lines: [
      { x1: -60, y1: -60, x2: 60, y2: -60, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: 60, y1: -60, x2: 60, y2: 60, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: 60, y1: 60, x2: -60, y2: 60, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: -60, y1: 60, x2: -60, y2: -60, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: -60, y1: -60, x2: -30, y2: -85, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: -30, y1: -85, x2: 90, y2: -85, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: 90, y1: -85, x2: 60, y2: -60, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: 90, y1: -85, x2: 90, y2: 35, dash: '3 3', color: COL.muted, opacity: 0.45 },
      { x1: 90, y1: 35, x2: 60, y2: 60, dash: '3 3', color: COL.muted, opacity: 0.45 },
    ],
    lengths: [{ from: 's', to: 'b', label: '2.35 Å', side: 1, distance: 14 }],
  },
};

// ═══════════════════════════════════════
// Фуллерен C₆₀ — узлы-круги и рёбра каркаса (примитивы SvgAtom/SvgBond)
// ═══════════════════════════════════════

interface FullereneNode {
  id: string;
  x: number;
  y: number;
  ring: 'pent' | 'hex';
}

/** Проекция вдоль оси C₅: центральный пентагон, кольцо из 5 гексагонов
 * (смежные гексагоны делят радиальные рёбра, пентагоны между собой не смежны — IPR),
 * 15-вершинный контур экваториального пояса. Пересечений связей нет. */
const FULLERENE_NODES: FullereneNode[] = [
  // Центральный пентагон
  { id: 'p1', x: 0, y: -22, ring: 'pent' },
  { id: 'p2', x: -20.9, y: -6.8, ring: 'pent' },
  { id: 'p3', x: -12.9, y: 17.8, ring: 'pent' },
  { id: 'p4', x: 12.9, y: 17.8, ring: 'pent' },
  { id: 'p5', x: 20.9, y: -6.8, ring: 'pent' },
  // Вершины, общие для двух смежных гексагонов
  { id: 's1', x: 0, y: -52, ring: 'hex' },
  { id: 's2', x: -49.5, y: -16.1, ring: 'hex' },
  { id: 's3', x: -30.6, y: 42.1, ring: 'hex' },
  { id: 's4', x: 30.6, y: 42.1, ring: 'hex' },
  { id: 's5', x: 49.5, y: -16.1, ring: 'hex' },
  // Внешние вершины гексагонов (пояс)
  { id: 'o1', x: -20.2, y: -58.6, ring: 'hex' },
  { id: 'o2', x: -49.5, y: -37.3, ring: 'hex' },
  { id: 'o3', x: -62, y: 1.1, ring: 'hex' },
  { id: 'o4', x: -50.8, y: 35.6, ring: 'hex' },
  { id: 'o5', x: -18.1, y: 59.3, ring: 'hex' },
  { id: 'o6', x: 18.1, y: 59.3, ring: 'hex' },
  { id: 'o7', x: 50.8, y: 35.6, ring: 'hex' },
  { id: 'o8', x: 62, y: 1.1, ring: 'hex' },
  { id: 'o9', x: 49.5, y: -37.3, ring: 'hex' },
  { id: 'o10', x: 20.2, y: -58.6, ring: 'hex' },
];

const FULLERENE_EDGES: Array<[string, string, 'pent' | 'hex']> = [
  // Центральный пентагон
  ['p1', 'p2', 'pent'],
  ['p2', 'p3', 'pent'],
  ['p3', 'p4', 'pent'],
  ['p4', 'p5', 'pent'],
  ['p5', 'p1', 'pent'],
  // Рёбра пентагон–гексагон (спицы)
  ['p1', 's1', 'hex'],
  ['p2', 's2', 'hex'],
  ['p3', 's3', 'hex'],
  ['p4', 's4', 'hex'],
  ['p5', 's5', 'hex'],
  // Кольцо гексагонов: внешние цепочки (o–o — рёбра гексагон–гексагон)
  ['s1', 'o1', 'hex'],
  ['o1', 'o2', 'hex'],
  ['o2', 's2', 'hex'],
  ['s2', 'o3', 'hex'],
  ['o3', 'o4', 'hex'],
  ['o4', 's3', 'hex'],
  ['s3', 'o5', 'hex'],
  ['o5', 'o6', 'hex'],
  ['o6', 's4', 'hex'],
  ['s4', 'o7', 'hex'],
  ['o7', 'o8', 'hex'],
  ['o8', 's5', 'hex'],
  ['s5', 'o9', 'hex'],
  ['o9', 'o10', 'hex'],
  ['o10', 's1', 'hex'],
];

const FULLERENE_SPEC = {
  title: 'Фуллерен C₆₀ — сферический молекулярный кластер (усечённый икосаэдр)',
  specTitle: 'Молекулярные данные C₆₀:',
  specItems: [
    { label: 'Тип решётки', value: 'Молекулярная', color: COL.accent },
    { label: 'Форма', value: 'Усечённый икосаэдр', color: COL.accent },
    { label: 'Пентагоны', value: '12 пятиугольников', color: COL.accent },
    { label: 'Гексагоны', value: '20 шестиугольников', color: COL.accent },
    { label: 'Атомы и связи', value: '60 C, 90 связей (60×5:6 + 30×6:6)', color: COL.accent },
    { label: 'Диаметр молекулы', value: '≈ 7.1 Å (0.71 нм)', color: COL.c },
    { label: 'Связь C–C (6:6)', value: '1.40 Å (гексагон–гексагон)', color: COL.c },
    { label: 'Связь C–C (5:6)', value: '1.46 Å (пентагон–гексагон)', color: COL.c },
    { label: 'Гибридизация C', value: 'Искривлённая sp²', color: COL.c },
    { label: 'Растворимость', value: 'В неполярных орг. р-рах', color: COL.muted },
    { label: 'Вид вещества', value: 'Тёмные кристаллы', color: COL.muted },
  ],
};

const FullereneBody: React.FC = () => {
  const byId = new Map(FULLERENE_NODES.map((n) => [n.id, n]));
  return (
    <>
      {FULLERENE_EDGES.map(([from, to, ring], idx) => {
        const a = byId.get(from);
        const b = byId.get(to);
        if (!a || !b) return null;
        return (
          <SvgBond
            key={`edge-${idx}`}
            x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            theme="dark"
            customColor={ring === 'pent' ? COL.accent : COL.c}
            strokeWidth={ring === 'pent' ? 2 : 1.5}
          />
        );
      })}
      {FULLERENE_NODES.map((n) => (
        <SvgAtom
          key={n.id}
          element="C"
          cx={n.x}
          cy={n.y}
          r={n.ring === 'pent' ? 5 : 4}
          theme="dark"
          showLabel={false}
          strokeWidth={1}
          customFill={n.ring === 'pent' ? COL.accent : COL.c}
        />
      ))}
    </>
  );
};

/**
 * Векторные 2D-схемы кристаллических решёток углерода и кремния.
 * Построены на централизованном генераторе MolecularDiagram2D (тёмная тема)
 * и примитивах SvgAtom/SvgBond; каркас модалок (фон, сетка, панель
 * спецификаций, автоподбор viewBox компактного превью) — SvgDiagramWrapper.
 */
export const CarbonSilicon2DRender: React.FC<CarbonSilicon2DProps> = ({
  type,
  className = '',
  isModal = false,
}) => {
  if (type === 'fullerene') {
    return (
      <SvgDiagramWrapper
        theme="dark"
        isModal={isModal}
        className={`text-slate-100 ${className}`}
        title={FULLERENE_SPEC.title}
        specTitle={FULLERENE_SPEC.specTitle}
        specItems={FULLERENE_SPEC.specItems}
        diagramTransform={isModal ? 'translate(210, 215)' : undefined}
      >
        <FullereneBody />
      </SvgDiagramWrapper>
    );
  }

  const spec = CARBON_DIAGRAMS[type];
  return (
    <SvgDiagramWrapper
      theme="dark"
      isModal={isModal}
      className={`text-slate-100 ${className}`}
      title={spec.title}
      specTitle={spec.specTitle}
      specItems={spec.specItems}
      diagramTransform={isModal ? 'translate(210, 215)' : undefined}
    >
      <MolecularDiagramBody
        theme="dark"
        compact={!isModal}
        atoms={spec.atoms}
        bonds={spec.bonds}
        lengths={spec.lengths}
        angles={spec.angles}
        lines={spec.lines}
        notes={spec.notes}
      />
    </SvgDiagramWrapper>
  );
};
