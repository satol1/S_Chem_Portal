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

export interface Halogens2DProps {
  type: 'hcl' | 'hclo4' | 'hclo';
  className?: string;
  isModal?: boolean;
}

/** Цвета схем — токены централизованной тёмной палитры (академический стиль) */
const P = getThemePalette('dark');
const COL = {
  cl: P.atomCl.fill,
  o: P.atomO.fill,
  h: P.atomH.fill,
  accent: P.highlight,
  angle: P.lengthArrow,
};

interface HalogenDiagramSpec {
  title: string;
  specTitle: string;
  specItems: SvgSpecItem[];
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  angles?: DiagramAngleSpec[];
  notes?: DiagramNoteSpec[];
}

/** Схемы темы, описанные данными для генератора MolecularDiagram2D (dark) */
const HALOGEN_DIAGRAMS: Record<Halogens2DProps['type'], HalogenDiagramSpec> = {
  hcl: {
    title: 'Хлороводород (HCl) — полярная молекула с дипольным моментом',
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Линейная (двухатомная)', color: COL.accent },
      { label: 'Длина связи H–Cl', value: '1.275 Å (127.5 пм)', color: COL.cl },
      { label: 'Энергия связи', value: '431 кДж/моль', color: COL.cl },
      { label: 'Дипольный момент', value: 'μ = 1.08 D (полярная)', color: COL.accent },
      { label: 'Тип связи', value: 'Ковалентная полярная', color: P.textMuted },
      { label: 't кипения', value: '−85 °C (без водородных связей)', color: P.textMuted },
    ],
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
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Искажённый тетраэдр', color: COL.accent },
      { label: 'Степень окисления Cl', value: '+7 (высшая)', color: COL.accent },
      { label: 'Связи Cl=O', value: '3 × 1.41 Å (кратные)', color: COL.cl },
      { label: 'Связь Cl–OH', value: '≈1.64 Å (одинарная)', color: COL.o },
      { label: 'Сила кислоты', value: 'Одна из сильнейших неорганических', color: P.textMuted },
      { label: 'Соли', value: 'Перхлораты MClO₄ (устойчивы)', color: P.textMuted },
    ],
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
    specTitle: 'Молекулярные параметры:',
    specItems: [
      { label: 'Геометрия', value: 'Уголковая (O в центре)', color: COL.accent },
      { label: 'Степень окисления Cl', value: '+1', color: COL.accent },
      { label: 'Валентный угол H–O–Cl', value: '≈ 111°', color: COL.o },
      { label: 'Длина связи O–Cl', value: '1.69 Å', color: COL.cl },
      { label: 'Длина связи O–H', value: '0.97 Å', color: COL.h },
      { label: 'Устойчивость', value: 'Только в разбавленном растворе', color: P.textMuted },
      { label: 'Свойство', value: 'Сильный окислитель, бактерицид', color: P.textMuted },
    ],
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
 * Компактное превью в тексте статьи укрупняется и очищается от микро-аннотаций
 * централизованно (compact-режим MolecularDiagramBody + автоподбор viewBox).
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
// Светлая академическая панель простых веществ X₂
// (несколько структурных формул в одном блоке — белый фон,
// формат как у фосфорных кислот в теме «Азот и фосфор»)
// ═══════════════════════════════════════

/** Светлая палитра — токены элементных цветов */
const L = getThemePalette('light');

interface X2MoleculeItem {
  id: 'f2' | 'cl2' | 'br2' | 'i2';
  formula: string;
  element: string;
  color: string;
  /** Полуразмах атомов на схеме — пропорционален реальной длине связи X–X */
  halfSpan: number;
  bondLength: string;
  bondEnergy: string;
  anomaly?: boolean;
}

/** Экспериментальные параметры связей X–X (верифицированы для темы ХЭ-05) */
const X2_MOLECULES: X2MoleculeItem[] = [
  { id: 'f2', formula: 'F2', element: 'F', color: L.atomF.fill, halfSpan: 21, bondLength: '1.412 Å', bondEnergy: '158 кДж/моль', anomaly: true },
  { id: 'cl2', formula: 'Cl2', element: 'Cl', color: L.atomCl.fill, halfSpan: 30, bondLength: '1.988 Å', bondEnergy: '243 кДж/моль' },
  { id: 'br2', formula: 'Br2', element: 'Br', color: L.atomBr.fill, halfSpan: 34, bondLength: '2.284 Å', bondEnergy: '193 кДж/моль' },
  { id: 'i2', formula: 'I2', element: 'I', color: L.atomI.fill, halfSpan: 40, bondLength: '2.666 Å', bondEnergy: '151 кДж/моль' },
];

/**
 * Светлая панель «простые вещества X₂»: четыре структурные формулы на белом фоне
 * с читаемыми подписями и параметрами связей. Применяется вместо тёмной
 * компактной плитки, когда в одном блоке раздела несколько структурных формул.
 */
export const HalogensX2LightPanel: React.FC = () => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
      {X2_MOLECULES.map((m) => (
        <div key={m.id} className="p-4 bg-white flex flex-col items-center gap-2">
          <div className="w-full h-16 sm:h-20 flex items-center justify-center select-none">
            <MolecularDiagram2D
              theme="light"
              atoms={[
                { id: 'l', label: m.element, x: -m.halfSpan, y: 0, color: m.color, fontSize: 15, fontWeight: 'extrabold' },
                { id: 'r', label: m.element, x: m.halfSpan, y: 0, color: m.color, fontSize: 15, fontWeight: 'extrabold' },
              ]}
              bonds={[{ from: 'l', to: 'r' }]}
            />
          </div>
          <div className="text-sm">
            <ChemFormula formula={m.formula} className="font-bold text-slate-900" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 font-mono text-[11px] font-semibold text-slate-700">
              d = {m.bondLength}
            </span>
            <span
              className={`px-2 py-0.5 rounded border font-mono text-[11px] font-semibold ${
                m.anomaly
                  ? 'bg-rose-50 border-rose-200 text-rose-900'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              E = {m.bondEnergy}
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className="px-5 py-3 bg-amber-50/80 border-t border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
      <strong>Аномалия F₂:</strong> связь F–F короче, чем Cl–Cl, но слабее (158 против 243 кДж/моль) —
      из-за отталкивания неподелённых электронных пар компактных атомов фтора.
      В ряду F₂ → Cl₂ → Br₂ → I₂ длина связи растёт, энергия падает.
    </div>
  </div>
);

// ═══════════════════════════════════════
// Светлая академическая панель кислородсодержащих кислот хлора
// (20-RENDERING §2.4: несколько структурных формул в одном разделе —
// светлая плашка с вводным абзацем и сеткой светлых схем)
// ═══════════════════════════════════════

type OxyacidPanelType = 'hclo' | 'hclo4';

interface OxyacidPanelMeta {
  formula: string;
  name: string;
  oxState: string;
  chips: string[];
}

/** Метаданные карточек панели; геометрия берётся из HALOGEN_DIAGRAMS */
const OXYACIDS_LIGHT_META: Record<OxyacidPanelType, OxyacidPanelMeta> = {
  hclo: {
    formula: 'HClO',
    name: 'хлорноватистая кислота',
    oxState: 'с.о. Cl +1',
    chips: ['угловая (O в центре)', '∠ H–O–Cl ≈ 111°', 'd(O–Cl) = 169 пм', 'только в разбавленном растворе'],
  },
  hclo4: {
    formula: 'HClO4',
    name: 'хлорная кислота',
    oxState: 'с.о. Cl +7',
    chips: ['искажённый тетраэдр Cl(+7)', '3 связи Cl=O и связь Cl–OH', 'd(Cl=O) ≈ 1.41 Å', 'устойчива'],
  },
};

const OXYACID_LIGHT_TYPES: OxyacidPanelType[] = ['hclo', 'hclo4'];

/** Светлые заливки атомов по подписи (вместо тёмных токенов HALOGEN_DIAGRAMS) */
const OXYACID_LIGHT_FILL: Record<string, string> = {
  H: L.atomH.fill,
  O: L.atomO.fill,
  Cl: L.atomCl.fill,
};

/**
 * Светлая панель структурных формул кислородсодержащих кислот хлора.
 * Использует существующие данные темы (типы схем hclo и hclo4);
 * структуры HClO₂ и HClO₃ в данных отсутствуют и не добавляются.
 */
export const HalogensOxyacidsLightPanel: React.FC = () => (
  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
    <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
      <Layers className="w-4 h-4 text-slate-700 shrink-0" />
      <span>Структурные формулы кислородсодержащих кислот хлора</span>
    </div>

    <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm">
      В молекулах кислородсодержащих кислот хлор связан с атомами кислорода, а водород входит в гидроксильную группу O–H. Хлорноватистая кислота <ChemFormula formula="HClO" className="font-semibold text-slate-900" /> имеет угловое строение с атомом кислорода в центре молекулы, а хлорная кислота <ChemFormula formula="HClO4" className="font-semibold text-slate-900" /> — искажённый тетраэдр с хлором в высшей степени окисления +7: три кратные связи Cl=O и одна одинарная связь Cl–OH.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {OXYACID_LIGHT_TYPES.map((t) => {
        const spec = HALOGEN_DIAGRAMS[t];
        const meta = OXYACIDS_LIGHT_META[t];
        const atoms = spec.atoms.map((a) => ({ ...a, color: OXYACID_LIGHT_FILL[a.label] ?? a.color }));
        const lengths = spec.lengths?.map((l) => ({ ...l, color: L.lengthArrow }));
        const angles = spec.angles?.map((ang) => ({ ...ang, color: L.highlight }));
        return (
          <div key={t} className="p-4 rounded-xl bg-white border border-slate-200 space-y-3 flex flex-col">
            <div className="h-36 sm:h-44 flex items-center justify-center select-none">
              <MolecularDiagram2D
                theme="light"
                atoms={atoms}
                bonds={spec.bonds}
                lengths={lengths}
                angles={angles}
              />
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
              <div>
                <ChemFormula formula={meta.formula} className="font-bold text-slate-900" />
                <div className="text-[11px] text-slate-500">{meta.name}</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-100 border border-amber-200 font-mono text-[11px] font-bold text-amber-900 whitespace-nowrap">
                {meta.oxState}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {meta.chips.map((chip) => (
                <span
                  key={chip}
                  className="px-2 py-0.5 rounded border border-slate-200 bg-slate-50 font-mono text-[11px] font-semibold text-slate-700"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>

    <p className="text-xs text-slate-500 italic leading-relaxed">
      Структуры <ChemFormula formula="HClO2" className="font-semibold text-slate-600" /> и <ChemFormula formula="HClO3" className="font-semibold text-slate-600" /> не приводятся: обе кислоты существуют только в растворах и в свободном виде не выделены.
    </p>
  </div>
);
