import React from 'react';
import { Layers } from 'lucide-react';
import { SvgDiagramWrapper, type SvgSpecItem } from '../../../scientific/svg/SvgDiagramWrapper';
import {
  MolecularDiagram2D,
  MolecularDiagramBody,
  type DiagramAngleSpec,
  type DiagramAtomSpec,
  type DiagramBondSpec,
  type DiagramLengthSpec,
  type DiagramNoteSpec,
} from '../../../scientific/svg/MolecularDiagram2D';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { getThemePalette } from '../../../../utils/molecule2DTheme';

export interface Redox2DProps {
  type: 'h2o2' | 'mno4' | 'cr2o7';
  className?: string;
  isModal?: boolean;
}

/** Цвета схем — токены централизованной тёмной палитры (академический стиль).
 * Mn передан фиолетовым токеном (окраска перманганата), Cr — оранжевым
 * (окраска дихромата): элементных токенов Mn/Cr в палитре нет. */
const P = getThemePalette('dark');
const COL = {
  o: P.atomO.fill,
  h: P.atomH.fill,
  mn: P.atomI.fill,
  cr: P.atomP.fill,
  accent: P.highlight,
  angle: P.lengthArrow,
};

interface RedoxDiagramSpec {
  title: string;
  specTitle: string;
  specItems: SvgSpecItem[];
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  angles?: DiagramAngleSpec[];
  notes?: DiagramNoteSpec[];
}

/** Схемы темы, описанные данными для генератора MolecularDiagram2D (dark).
 * Количественные параметры верифицированы 2026-08-07 ([F72]–[F74] черновика). */
const REDOX_DIAGRAMS: Record<Redox2DProps['type'], RedoxDiagramSpec> = {
  h2o2: {
    title: 'Пероксид водорода (H₂O₂) — пероксидная связь O–O и кислород −1',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Неплоская молекула (двугранный угол ≈ 111.5°, газ)', color: COL.accent },
      { label: 'Степень окисления O', value: '−1 (промежуточная)', color: COL.accent },
      { label: 'Связь O–O', value: '147.5 пм (пероксидная)', color: COL.o },
      { label: 'Связь O–H', value: '95 пм', color: COL.h },
      { label: 'Угол H–O–O', value: '94.8° (газовая фаза)', color: COL.o },
      { label: 'Свойство', value: 'Окислительно-восстановительная двойственность', color: P.textMuted },
    ],
    atoms: [
      { id: 'H1', label: 'H', x: -34, y: 34, color: COL.h, fontSize: 11 },
      { id: 'O1', label: 'O', x: 0, y: 0, color: COL.o, fontSize: 13 },
      { id: 'O2', label: 'O', x: 56, y: 0, color: COL.o, fontSize: 13 },
      { id: 'H2', label: 'H', x: 90, y: 34, color: COL.h, fontSize: 11 },
    ],
    bonds: [
      { from: 'H1', to: 'O1' },
      { from: 'O1', to: 'O2' },
      { from: 'O2', to: 'H2' },
    ],
    lengths: [
      { from: 'O1', to: 'O2', label: '147.5 пм', side: -1, distance: 16, color: COL.angle },
      { from: 'O2', to: 'H2', label: '95 пм', side: 1, distance: 14, color: COL.angle },
    ],
    angles: [{ vertex: 'O1', a: 'H1', b: 'O2', label: '≈ 94.8°', color: COL.accent }],
    notes: [
      { x: 0, y: -24, text: 'O(−1)', color: COL.o, anchor: 'middle', fontSize: 10 },
      { x: 56, y: -24, text: 'O(−1)', color: COL.o, anchor: 'middle', fontSize: 10 },
    ],
  },

  mno4: {
    title: 'Перманганат-ион (MnO₄⁻) — тетраэдр марганца в высшей степени окисления',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Тетраэдр (марганец в центре)', color: COL.accent },
      { label: 'Степень окисления Mn', value: '+7 (высшая)', color: COL.accent },
      { label: 'Связь Mn–O', value: '≈ 162–163 пм', color: COL.mn },
      { label: 'Валентный угол', value: '∠ O–Mn–O ≈ 109.5°', color: COL.o },
      { label: 'Заряд иона', value: '−1', color: P.textMuted },
      { label: 'Свойство', value: 'Сильный окислитель; продукт восстановления зависит от среды', color: P.textMuted },
    ],
    atoms: [
      { id: 'Mn', label: 'Mn', x: 0, y: 0, color: COL.mn, fontSize: 13 },
      { id: 'o1', label: 'O', x: 0, y: -58, color: COL.o, fontSize: 11 },
      { id: 'o2', label: 'O', x: 72, y: 14, color: COL.o, fontSize: 11 },
      { id: 'o3', label: 'O', x: -72, y: 14, color: COL.o, fontSize: 11 },
      { id: 'o4', label: 'O', x: 0, y: 62, color: COL.o, fontSize: 11 },
    ],
    bonds: [
      { from: 'Mn', to: 'o1', type: 'double', offset: 3 },
      { from: 'Mn', to: 'o2', type: 'double', offset: 3 },
      { from: 'Mn', to: 'o3' },
      { from: 'Mn', to: 'o4' },
    ],
    notes: [
      { x: 96, y: -40, text: '−1', color: COL.accent, anchor: 'middle', fontSize: 12 },
      { x: 0, y: -24, text: 'Mn(+7)', color: COL.mn, anchor: 'middle', fontSize: 10 },
    ],
  },

  cr2o7: {
    title: 'Дихромат-ион (Cr₂O₇²⁻) — два тетраэдра CrO₄ с общей вершиной',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Два тетраэдра CrO₄, соединённые мостиком Cr–O–Cr', color: COL.accent },
      { label: 'Степень окисления Cr', value: '+6 (высшая)', color: COL.accent },
      { label: 'Мостиковый угол', value: '∠ Cr–O–Cr ≈ 126°', color: COL.o },
      { label: 'Связи Cr–O', value: 'концевые короче мостиковой', color: COL.cr },
      { label: 'Заряд иона', value: '−2', color: P.textMuted },
      { label: 'Свойство', value: 'Оранжевый; в кислой среде восстанавливается до зелёного Cr³⁺', color: P.textMuted },
    ],
    atoms: [
      { id: 'ob', label: 'O', x: 0, y: 6, color: COL.o, fontSize: 12 },
      { id: 'Cr1', label: 'Cr', x: -78, y: 0, color: COL.cr, fontSize: 12 },
      { id: 'Cr2', label: 'Cr', x: 78, y: 0, color: COL.cr, fontSize: 12 },
      { id: 'o1', label: 'O', x: -140, y: -34, color: COL.o, fontSize: 11 },
      { id: 'o2', label: 'O', x: -140, y: 38, color: COL.o, fontSize: 11 },
      { id: 'o3', label: 'O', x: -84, y: -62, color: COL.o, fontSize: 11 },
      { id: 'o4', label: 'O', x: 140, y: -34, color: COL.o, fontSize: 11 },
      { id: 'o5', label: 'O', x: 140, y: 38, color: COL.o, fontSize: 11 },
      { id: 'o6', label: 'O', x: 84, y: -62, color: COL.o, fontSize: 11 },
    ],
    bonds: [
      { from: 'Cr1', to: 'ob' },
      { from: 'Cr2', to: 'ob' },
      { from: 'Cr1', to: 'o1', type: 'double', offset: 3 },
      { from: 'Cr1', to: 'o2' },
      { from: 'Cr1', to: 'o3' },
      { from: 'Cr2', to: 'o4', type: 'double', offset: 3 },
      { from: 'Cr2', to: 'o5' },
      { from: 'Cr2', to: 'o6' },
    ],
    angles: [{ vertex: 'ob', a: 'Cr1', b: 'Cr2', label: '≈ 126°', color: COL.accent }],
    notes: [
      { x: 0, y: -58, text: '2−', color: COL.accent, anchor: 'middle', fontSize: 12 },
    ],
  },
};

/**
 * Векторные 2D-схемы частиц — участников окислительно-восстановительных
 * реакций. Построены на централизованном генераторе MolecularDiagram2D
 * (тёмная тема); каркас модалок (фон, сетка, панель спецификаций) —
 * SvgDiagramWrapper. Компактное превью в тексте статьи укрупняется и
 * очищается от микро-аннотаций централизованно (compact-режим
 * MolecularDiagramBody + автоподбор viewBox).
 */
export const RedoxReactions2DRender: React.FC<Redox2DProps> = ({
  type,
  className = '',
  isModal = false,
}) => {
  const spec = REDOX_DIAGRAMS[type];

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
        notes={spec.notes}
      />
    </SvgDiagramWrapper>
  );
};

// ═══════════════════════════════════════
// Светлая академическая панель кислородсодержащих кислот хлора
// (6.3: степени окисления хлора +1/+5/+7 в ряду кислот)
// ═══════════════════════════════════════

/** Светлая палитра — токены элементных цветов */
const L = getThemePalette('light');

interface OxyacidCardMeta {
  formula: string;
  name: string;
  oxState: string;
  chips: string[];
  note?: string;
}

/** Метаданные карточек панели кислот хлора */
const CHLORINE_OXYACIDS: OxyacidCardMeta[] = [
  {
    formula: 'HClO',
    name: 'хлорноватистая кислота',
    oxState: 'с.о. Cl +1',
    chips: ['строение H–O–Cl', 'неустойчива', 'сильный окислитель', 'отбеливатель, бактерицид'],
  },
  {
    formula: 'HClO3',
    name: 'хлорноватая кислота',
    oxState: 'с.о. Cl +5',
    chips: ['строение HO–Cl(=O)₂', 'существует только в растворах', 'сильная кислота'],
  },
  {
    formula: 'HClO4',
    name: 'хлорная кислота',
    oxState: 'с.о. Cl +7',
    chips: ['строение HO–Cl(=O)₃', 'устойчива', 'одна из сильнейших неорганических кислот'],
  },
];

/**
 * Светлая панель структурных формул кислородсодержащих кислот хлора:
 * рост степени окисления хлора сопровождается ростом устойчивости и силы
 * кислот при падении окислительной способности. Школьные структурные
 * формулы без количественных параметров.
 */
export const RedoxChlorineOxyacidsLightPanel: React.FC = () => (
  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
    <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
      <Layers className="w-4 h-4 text-slate-700 shrink-0" />
      <span>Кислородсодержащие кислоты хлора: степени окисления и свойства</span>
    </div>

    <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm">
      Хлор образует ряд кислородсодержащих кислот со степенями окисления от +1 до +7. С ростом степени окисления хлора устойчивость и сила кислот возрастают, а окислительная способность падает: хлорноватистая кислота <ChemFormula formula="HClO" className="font-semibold text-slate-900" /> — сильный окислитель, а хлорная кислота <ChemFormula formula="HClO4" className="font-semibold text-slate-900" /> в разбавленных растворах окислителем практически не является.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {CHLORINE_OXYACIDS.map((acid) => (
        <div key={acid.formula} className="p-4 rounded-xl bg-white border border-slate-200 space-y-3 flex flex-col">
          <div className="h-28 flex items-center justify-center select-none">
            <MolecularDiagram2D
              theme="light"
              atoms={
                acid.formula === 'HClO'
                  ? [
                      { id: 'H', label: 'H', x: -36, y: 26, color: L.atomH.fill, fontSize: 11 },
                      { id: 'O', label: 'O', x: 0, y: -6, color: L.atomO.fill, fontSize: 12 },
                      { id: 'Cl', label: 'Cl', x: 62, y: 14, color: L.atomCl.fill, fontSize: 12 },
                    ]
                  : acid.formula === 'HClO3'
                    ? [
                        { id: 'Cl', label: 'Cl', x: 0, y: 0, color: L.atomCl.fill, fontSize: 12 },
                        { id: 'o1', label: 'O', x: -58, y: -22, color: L.atomO.fill, fontSize: 11 },
                        { id: 'o2', label: 'O', x: 58, y: -22, color: L.atomO.fill, fontSize: 11 },
                        { id: 'o3', label: 'O', x: 0, y: 48, color: L.atomO.fill, fontSize: 11 },
                        { id: 'h1', label: 'H', x: 24, y: 72, color: L.atomH.fill, fontSize: 10 },
                      ]
                    : [
                        { id: 'Cl', label: 'Cl', x: 0, y: 0, color: L.atomCl.fill, fontSize: 12 },
                        { id: 'o1', label: 'O', x: 0, y: -50, color: L.atomO.fill, fontSize: 11 },
                        { id: 'o2', label: 'O', x: 62, y: 10, color: L.atomO.fill, fontSize: 11 },
                        { id: 'o3', label: 'O', x: -62, y: 10, color: L.atomO.fill, fontSize: 11 },
                        { id: 'o4', label: 'O', x: 0, y: 50, color: L.atomO.fill, fontSize: 11 },
                        { id: 'h1', label: 'H', x: 26, y: 72, color: L.atomH.fill, fontSize: 10 },
                      ]
              }
              bonds={
                acid.formula === 'HClO'
                  ? [
                      { from: 'H', to: 'O' },
                      { from: 'O', to: 'Cl' },
                    ]
                  : acid.formula === 'HClO3'
                    ? [
                        { from: 'Cl', to: 'o1', type: 'double', offset: 3 },
                        { from: 'Cl', to: 'o2', type: 'double', offset: 3 },
                        { from: 'Cl', to: 'o3' },
                        { from: 'o3', to: 'h1' },
                      ]
                    : [
                        { from: 'Cl', to: 'o1', type: 'double', offset: 3 },
                        { from: 'Cl', to: 'o2', type: 'double', offset: 3 },
                        { from: 'Cl', to: 'o3', type: 'double', offset: 3 },
                        { from: 'Cl', to: 'o4' },
                        { from: 'o4', to: 'h1' },
                      ]
              }
            />
          </div>
          <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
            <div>
              <ChemFormula formula={acid.formula} className="font-bold text-slate-900" />
              <div className="text-[11px] text-slate-500">{acid.name}</div>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-200 font-mono text-[11px] font-bold text-amber-900 whitespace-nowrap">
              {acid.oxState}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {acid.chips.map((chip) => (
              <span
                key={chip}
                className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 font-mono text-[11px] font-semibold text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <p className="text-xs text-slate-500 italic leading-relaxed">
      Тенденция в ряду <ChemFormula formula="HClO" className="font-semibold text-slate-600" /> → <ChemFormula formula="HClO3" className="font-semibold text-slate-600" /> → <ChemFormula formula="HClO4" className="font-semibold text-slate-600" />: устойчивость и сила кислот растут, окислительная способность падает. Хлорноватая кислота существует только в растворах.
    </p>
  </div>
);
