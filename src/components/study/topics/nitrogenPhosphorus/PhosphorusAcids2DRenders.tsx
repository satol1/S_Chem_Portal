import React, { useState } from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import {
  MolecularDiagram2D,
  type DiagramAtomSpec,
  type DiagramBondSpec,
  type DiagramLengthSpec,
  type DiagramNoteSpec,
} from '../../../scientific/svg/MolecularDiagram2D';
import { getThemePalette } from '../../../../utils/molecule2DTheme';

export type PhosphorusAcidType =
  | 'h3po4'       // Ортофосфорная (+5, трехосновная)
  | 'h4p2o7'      // Пирофосфорная (+5, четырехосновная)
  | 'hpo3_cyclic' // Триметафосфорная (HPO3)3 (+5, одноосновная)
  | 'h3po3'       // Фосфористая (+3, двухосновная)
  | 'h3po2'       // Фосфорноватистая (+1, одноосновная)
  | 'h4p2o6'      // Фосфорноватая (+4, четырехосновная)
  | 'hno3';       // Азотная (+5, одноосновная)

export interface SaltItem {
  formula: string;
  name: string;
  note?: string;
}

export interface BondLengthItem {
  bond: string;
  length: string;
}

export interface AcidMetadata {
  id: PhosphorusAcidType;
  name: string;
  systemicName: string;
  formula: string;
  shortFormula: string;
  structuralFormula: string;
  oxidationState: string;
  basicity: string;
  basicityCount: number;
  description: string;
  bondLengthsList?: BondLengthItem[];
  salts: SaltItem[];
}

/**
 * Научно-верифицированные метаданные кислот.
 * Длины связей сверены с кристаллографическими данными
 * (Acta Chem. Scand. 11 (1957) 1505: H3PO4 — P=O 152 пм, P-OH 157 пм;
 *  H3PO3 — P=O 150 пм, P-OH 155 пм, P-H 139 пм).
 */
const PHOSPHORUS_ACIDS_DATA: Record<PhosphorusAcidType, AcidMetadata> = {
  h3po4: {
    id: 'h3po4',
    name: 'Ортофосфорная кислота',
    systemicName: 'Тетраоксофосфорная(V) кислота',
    formula: 'H3PO4',
    shortFormula: 'H3PO4',
    structuralFormula: 'O=P(OH)3',
    oxidationState: '+5',
    basicity: 'Трехосновная',
    basicityCount: 3,
    description: 'Классическая кислота средней силы. Тетраэдрическое окружение фосфора. Все 3 атома водорода связаны через кислород (P-OH) и способны диссоциировать в растворе.',
    bondLengthsList: [
      { bond: 'P=O', length: '152 пм' },
      { bond: 'P-OH', length: '157 пм' },
    ],
    salts: [
      { formula: 'NaH2PO4', name: 'дигидрофосфат натрия', note: 'кислая соль' },
      { formula: 'Na2HPO4', name: 'гидрофосфат натрия', note: 'кислая соль' },
      { formula: 'Na3PO4', name: 'ортофосфат натрия', note: 'средняя соль' },
    ],
  },
  h4p2o7: {
    id: 'h4p2o7',
    name: 'Пирофосфорная (Дифосфорная) кислота',
    systemicName: 'Гептаоксодифосфорная(V) кислота',
    formula: 'H4P2O7',
    shortFormula: 'H4P2O7',
    structuralFormula: 'HO-P(=O)(OH)-O-P(=O)(OH)-OH',
    oxidationState: '+5',
    basicity: 'Четырехосновная',
    basicityCount: 4,
    description: 'Продукт межмолекулярной дегидратации двух молекул H3PO4 при нагревании. Содержит мостиковый атом кислорода P-O-P (~163 пм, угол ~130°).',
    bondLengthsList: [
      { bond: 'P=O', length: '~150 пм' },
      { bond: 'P-O-P', length: '~163 пм' },
    ],
    salts: [
      { formula: 'Na4P2O7', name: 'пирофосфат натрия', note: 'средняя соль' },
      { formula: 'Na2H2P2O7', name: 'дигидропирофосфат натрия', note: 'кислая соль' },
    ],
  },
  hpo3_cyclic: {
    id: 'hpo3_cyclic',
    name: 'Триметафосфорная кислота',
    systemicName: 'Цикло-трифосфорная(V) кислота',
    formula: '(HPO3)3',
    shortFormula: '(HPO3)3',
    structuralFormula: 'Cyclo-(P(=O)(OH)-O)3',
    oxidationState: '+5',
    basicity: 'Одноосновная (на 1 атом P)',
    basicityCount: 3,
    description: 'Циклический тример метафосфорной кислоты. Состоит из 6-членного альтернантного кольца P-O-P-O-P-O (P-O ~160 пм) с группой =O и -OH у каждого P.',
    bondLengthsList: [
      { bond: 'P-O (цикл)', length: '~160 пм' },
      { bond: 'P=O', length: '~145 пм' },
    ],
    salts: [
      { formula: 'Na3(PO3)3', name: 'триметафосфат натрия', note: 'средняя соль' },
    ],
  },
  h3po3: {
    id: 'h3po3',
    name: 'Фосфористая кислота',
    systemicName: 'Фосфоновая кислота',
    formula: 'H3PO3 (H2[PHO3])',
    shortFormula: 'H3PO3',
    structuralFormula: 'O=P(H)(OH)2',
    oxidationState: '+3',
    basicity: 'Двухосновная',
    basicityCount: 2,
    description: 'Содержит одну прямую связь P-H, водород которой НЕ диссоциирует! В воде диссоциируют только 2 водорода групп -OH. Сильный восстановитель.',
    bondLengthsList: [
      { bond: 'P=O', length: '150 пм' },
      { bond: 'P-OH', length: '155 пм' },
      { bond: 'P-H', length: '139 пм' },
    ],
    salts: [
      { formula: 'Na2HPO3', name: 'фосфит натрия', note: 'средняя соль!' },
      { formula: 'NaH2PO3', name: 'гидрофосфит натрия', note: 'кислая соль' },
    ],
  },
  h3po2: {
    id: 'h3po2',
    name: 'Фосфорноватистая кислота',
    systemicName: 'Фосфиновая (гипофосфористая) кислота',
    formula: 'H3PO2 (H[PH2O2])',
    shortFormula: 'H3PO2',
    structuralFormula: 'O=P(H)2(OH)',
    oxidationState: '+1',
    basicity: 'Одноосновная',
    basicityCount: 1,
    description: 'Содержит 2 прямые связи P-H, которые не диссоциируют. Диссоциирует единственная -OH группа. Мощнейший восстановитель.',
    bondLengthsList: [
      { bond: 'P=O', length: '~150 пм' },
      { bond: 'P-H', length: '~140 пм' },
    ],
    salts: [
      { formula: 'NaH2PO2', name: 'гипофосфит натрия', note: 'средняя соль!' },
    ],
  },
  h4p2o6: {
    id: 'h4p2o6',
    name: 'Фосфорноватая кислота',
    systemicName: 'Гипофосфорная кислота',
    formula: 'H4P2O6',
    shortFormula: 'H4P2O6',
    structuralFormula: 'HO-P(=O)(OH)-P(=O)(OH)-OH',
    oxidationState: '+4',
    basicity: 'Четырехосновная',
    basicityCount: 4,
    description: 'Симметричный димер с прямой ковалентной связью P-P (~219 пм) между атомами фосфора. Все 4 гидроксогруппы способны диссоциировать.',
    bondLengthsList: [
      { bond: 'P-P', length: '~219 пм' },
      { bond: 'P=O', length: '~149 пм' },
    ],
    salts: [
      { formula: 'Na4P2O6', name: 'гипофосфат натрия', note: 'средняя соль' },
    ],
  },
  hno3: {
    id: 'hno3',
    name: 'Азотная кислота',
    systemicName: 'Нитратная кислота',
    formula: 'HNO3',
    shortFormula: 'HNO3',
    structuralFormula: 'HO-N(=O)=O',
    oxidationState: '+5',
    basicity: 'Одноосновная',
    basicityCount: 1,
    description: 'Сильная кислота азота. Плоская молекула: атом N в sp²-гибридизации (N-OH 141 пм, N=O ~120-121 пм). Максимальная валентность азота равна 4.',
    bondLengthsList: [
      { bond: 'N-OH', length: '141 пм' },
      { bond: 'N=O', length: '~120 пм' },
    ],
    salts: [
      { formula: 'KNO3', name: 'нитрат калия (селитра)' },
      { formula: 'Cu(NO3)2', name: 'нитрат меди(II)' },
    ],
  },
};

// ═══════════════════════════════════════
// Академические 2D-схемы (светлый учебный стиль)
// ═══════════════════════════════════════

/** Семантические цвета легенды — из централизованной светлой палитры */
const LIGHT = getThemePalette('light');
/** OH-группы (диссоциирующие) */
const OH = LIGHT.ohGroup;
/** P-H связи (не диссоциирующие) */
const PH = LIGHT.phBond;

interface AcidDiagramSpec {
  centerY: number;
  atoms: DiagramAtomSpec[];
  bonds: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  notes?: DiagramNoteSpec[];
}

interface AcidDiagramProps {
  type: PhosphorusAcidType;
}

/**
 * Кураторские научные схемы кислот в классическом учебном стиле.
 * Описаны ДАННЫМИ для централизованного билдера MolecularDiagram2D:
 * связи автоматически обрезаются у границ подписей, размерные линии
 * длин связей раскладываются вне каркаса, палитра — академическая.
 */
const ACID_DIAGRAMS: Record<PhosphorusAcidType, AcidDiagramSpec> = {
  // Ортофосфорная H3PO4 — тетраэдр: =O в плоскости, OH клином вперёд, OH штрихами назад
  h3po4: {
    centerY: 128,
    atoms: [
      { id: 'P', label: 'P', x: 0, y: 0, role: 'ink', fontSize: 17, fontWeight: 'extrabold' },
      { id: 'O', label: 'O', x: 0, y: -64, role: 'ink', fontSize: 15 },
      { id: 'HO', label: 'HO', x: -76, y: 38, role: 'oh', fontSize: 14 },
      { id: 'OHw', label: 'OH', x: -30, y: 82, role: 'oh', fontSize: 14 },
      { id: 'OHr', label: 'OH', x: 82, y: 28, role: 'oh', fontSize: 14 },
    ],
    bonds: [
      { from: 'P', to: 'O', type: 'double', role: 'ink', offset: 3 },
      { from: 'P', to: 'HO', type: 'hashed-wedge', role: 'oh' },
      { from: 'P', to: 'OHw', type: 'wedge', role: 'oh' },
      { from: 'P', to: 'OHr', role: 'oh' },
    ],
    lengths: [
      { from: 'P', to: 'O', label: '152 pm', side: 1, distance: 16 },
      { from: 'P', to: 'HO', label: '157 pm', side: 1, distance: 14 },
    ],
  },

  // Пирофосфорная H4P2O7 — мостик P-O-P
  h4p2o7: {
    centerY: 122,
    atoms: [
      { id: 'Ob', label: 'O', x: 0, y: 0, role: 'ink', fontSize: 14 },
      { id: 'Pl', label: 'P', x: -75, y: 0, role: 'ink', fontSize: 16, fontWeight: 'extrabold' },
      { id: 'Pr', label: 'P', x: 75, y: 0, role: 'ink', fontSize: 16, fontWeight: 'extrabold' },
      { id: 'Ol', label: 'O', x: -75, y: -58, role: 'ink', fontSize: 14 },
      { id: 'Or', label: 'O', x: 75, y: -58, role: 'ink', fontSize: 14 },
      { id: 'HOl', label: 'HO', x: -131, y: 0, role: 'oh', fontSize: 13 },
      { id: 'OHl', label: 'OH', x: -75, y: 54, role: 'oh', fontSize: 13 },
      { id: 'OHr', label: 'OH', x: 131, y: 0, role: 'oh', fontSize: 13 },
      { id: 'OHb', label: 'OH', x: 75, y: 54, role: 'oh', fontSize: 13 },
    ],
    bonds: [
      { from: 'Pl', to: 'Ob', role: 'ink' },
      { from: 'Pr', to: 'Ob', role: 'ink' },
      { from: 'Pl', to: 'Ol', type: 'double', role: 'ink', offset: 3 },
      { from: 'Pr', to: 'Or', type: 'double', role: 'ink', offset: 3 },
      { from: 'Pl', to: 'HOl', role: 'oh' },
      { from: 'Pl', to: 'OHl', role: 'oh' },
      { from: 'Pr', to: 'OHr', role: 'oh' },
      { from: 'Pr', to: 'OHb', role: 'oh' },
    ],
    notes: [{ x: 0, y: 95, text: 'P–O–P: ~163 pm, ∠ ≈ 130°', role: 'muted' }],
  },

  // Триметафосфорная (HPO3)3 — 6-членный цикл P-O-P-O-P-O
  hpo3_cyclic: {
    centerY: 122,
    atoms: [
      { id: 'p1', label: 'P', x: 0, y: -60, role: 'ink', fontSize: 15, fontWeight: 'extrabold' },
      { id: 'o1', label: 'O', x: 50, y: -30, role: 'ink', fontSize: 13 },
      { id: 'p2', label: 'P', x: 50, y: 30, role: 'ink', fontSize: 15, fontWeight: 'extrabold' },
      { id: 'o2', label: 'O', x: 0, y: 60, role: 'ink', fontSize: 13 },
      { id: 'p3', label: 'P', x: -50, y: 30, role: 'ink', fontSize: 15, fontWeight: 'extrabold' },
      { id: 'o3', label: 'O', x: -50, y: -30, role: 'ink', fontSize: 13 },
      { id: 'o1d', label: 'O', x: -38, y: -98, role: 'ink', fontSize: 12 },
      { id: 'oh1', label: 'OH', x: 38, y: -88, role: 'oh', fontSize: 12 },
      { id: 'o2d', label: 'O', x: 88, y: 68, role: 'ink', fontSize: 12 },
      { id: 'oh2', label: 'OH', x: 94, y: 10, role: 'oh', fontSize: 12 },
      { id: 'o3d', label: 'O', x: -88, y: 68, role: 'ink', fontSize: 12 },
      { id: 'oh3', label: 'HO', x: -94, y: 10, role: 'oh', fontSize: 12 },
    ],
    bonds: [
      { from: 'p1', to: 'o1', role: 'ink' },
      { from: 'o1', to: 'p2', role: 'ink' },
      { from: 'p2', to: 'o2', role: 'ink' },
      { from: 'o2', to: 'p3', role: 'ink' },
      { from: 'p3', to: 'o3', role: 'ink' },
      { from: 'o3', to: 'p1', role: 'ink' },
      { from: 'p1', to: 'o1d', type: 'double', role: 'ink', offset: 2.5 },
      { from: 'p1', to: 'oh1', role: 'oh' },
      { from: 'p2', to: 'o2d', type: 'double', role: 'ink', offset: 2.5 },
      { from: 'p2', to: 'oh2', role: 'oh' },
      { from: 'p3', to: 'o3d', type: 'double', role: 'ink', offset: 2.5 },
      { from: 'p3', to: 'oh3', role: 'oh' },
    ],
    notes: [{ x: 0, y: 4, text: '(HPO₃)₃', role: 'muted' }],
  },

  // Фосфористая H3PO3 — одна связь P-H
  h3po3: {
    centerY: 128,
    atoms: [
      { id: 'P', label: 'P', x: 0, y: 0, role: 'ink', fontSize: 17, fontWeight: 'extrabold' },
      { id: 'O', label: 'O', x: 0, y: -64, role: 'ink', fontSize: 15 },
      { id: 'H', label: 'H', x: -72, y: 8, role: 'ph', fontSize: 15 },
      { id: 'HOw', label: 'HO', x: -44, y: 76, role: 'oh', fontSize: 14 },
      { id: 'OHr', label: 'OH', x: 80, y: 32, role: 'oh', fontSize: 14 },
    ],
    bonds: [
      { from: 'P', to: 'O', type: 'double', role: 'ink', offset: 3 },
      { from: 'P', to: 'H', role: 'ph' },
      { from: 'P', to: 'HOw', type: 'wedge', role: 'oh' },
      { from: 'P', to: 'OHr', role: 'oh' },
    ],
    lengths: [
      { from: 'P', to: 'O', label: '150 pm', side: 1, distance: 16 },
      { from: 'P', to: 'OHr', label: '155 pm', side: 1, distance: 14 },
      { from: 'P', to: 'H', label: '139 pm (P–H)', side: -1, distance: 14, role: 'ph' },
    ],
  },

  // Фосфорноватистая H3PO2 — две связи P-H
  h3po2: {
    centerY: 128,
    atoms: [
      { id: 'P', label: 'P', x: 0, y: 0, role: 'ink', fontSize: 17, fontWeight: 'extrabold' },
      { id: 'O', label: 'O', x: 0, y: -64, role: 'ink', fontSize: 15 },
      { id: 'H1', label: 'H', x: -72, y: -20, role: 'ph', fontSize: 15 },
      { id: 'H2', label: 'H', x: -38, y: 78, role: 'ph', fontSize: 15 },
      { id: 'OHr', label: 'OH', x: 82, y: 26, role: 'oh', fontSize: 14 },
    ],
    bonds: [
      { from: 'P', to: 'O', type: 'double', role: 'ink', offset: 3 },
      { from: 'P', to: 'H1', type: 'hashed-wedge', role: 'ph' },
      { from: 'P', to: 'H2', type: 'wedge', role: 'ph' },
      { from: 'P', to: 'OHr', role: 'oh' },
    ],
    notes: [{ x: -100, y: 100, text: '2 связи P–H (не диссоциируют!)', role: 'ph', anchor: 'start' }],
  },

  // Фосфорноватая H4P2O6 — прямая связь P-P (~219 пм)
  h4p2o6: {
    centerY: 122,
    atoms: [
      { id: 'Pl', label: 'P', x: -55, y: 0, role: 'ink', fontSize: 16, fontWeight: 'extrabold' },
      { id: 'Pr', label: 'P', x: 55, y: 0, role: 'ink', fontSize: 16, fontWeight: 'extrabold' },
      { id: 'Ol', label: 'O', x: -55, y: -58, role: 'ink', fontSize: 14 },
      { id: 'Or', label: 'O', x: 55, y: -58, role: 'ink', fontSize: 14 },
      { id: 'HOl', label: 'HO', x: -111, y: 0, role: 'oh', fontSize: 13 },
      { id: 'OHl', label: 'OH', x: -55, y: 54, role: 'oh', fontSize: 13 },
      { id: 'OHr', label: 'OH', x: 111, y: 0, role: 'oh', fontSize: 13 },
      { id: 'OHb', label: 'OH', x: 55, y: 54, role: 'oh', fontSize: 13 },
    ],
    bonds: [
      { from: 'Pl', to: 'Pr', role: 'ink' },
      { from: 'Pl', to: 'Ol', type: 'double', role: 'ink', offset: 3 },
      { from: 'Pr', to: 'Or', type: 'double', role: 'ink', offset: 3 },
      { from: 'Pl', to: 'HOl', role: 'oh' },
      { from: 'Pl', to: 'OHl', role: 'oh' },
      { from: 'Pr', to: 'OHr', role: 'oh' },
      { from: 'Pr', to: 'OHb', role: 'oh' },
    ],
    lengths: [{ from: 'Pl', to: 'Pr', label: '~219 pm', side: -1, distance: 14 }],
  },

  // Азотная кислота HNO3 — плоская sp²-структура с зарядами
  hno3: {
    centerY: 128,
    atoms: [
      { id: 'N', label: 'N', x: 0, y: 0, role: 'ink', fontSize: 17, fontWeight: 'extrabold' },
      { id: 'plus', label: '+', x: 13, y: -11, role: 'ink', fontSize: 12 },
      { id: 'O1', label: 'O', x: 60, y: -44, role: 'ink', fontSize: 15 },
      { id: 'O2', label: 'O', x: 60, y: 46, role: 'ink', fontSize: 15 },
      { id: 'minus', label: '−', x: 71, y: 36, role: 'ink', fontSize: 12 },
      { id: 'HO', label: 'HO', x: -68, y: 0, role: 'oh', fontSize: 14 },
    ],
    bonds: [
      { from: 'N', to: 'O1', type: 'double', role: 'ink', offset: 3 },
      { from: 'N', to: 'O2', type: 'resonance', role: 'ink' },
      { from: 'N', to: 'HO', role: 'oh' },
    ],
    lengths: [{ from: 'N', to: 'HO', label: '141 pm', side: 1, distance: 13 }],
    notes: [{ x: 0, y: 95, text: 'Плоская молекула: N — sp², ∠O–N–O ≈ 130°', role: 'muted' }],
  },
};

const AcidDiagram: React.FC<AcidDiagramProps> = ({ type }) => {
  const spec = ACID_DIAGRAMS[type];
  return (
    <MolecularDiagram2D
      theme="light"
      centerX={210}
      centerY={spec.centerY}
      atoms={spec.atoms}
      bonds={spec.bonds}
      lengths={spec.lengths}
      notes={spec.notes}
    />
  );
};

interface PhosphorusAcids2DRendersProps {
  initialAcid?: PhosphorusAcidType;
  showSelector?: boolean;
}

export const PhosphorusAcids2DRenders: React.FC<PhosphorusAcids2DRendersProps> = ({
  initialAcid = 'h3po4',
  showSelector = true,
}) => {
  const [selectedAcid, setSelectedAcid] = useState<PhosphorusAcidType>(initialAcid);
  const data = PHOSPHORUS_ACIDS_DATA[selectedAcid];
  // Легенда собирается из данных схемы: нет P-H связей в молекуле — нет пункта в легенде
  const diagram = ACID_DIAGRAMS[selectedAcid];
  const hasPh =
    diagram.atoms.some((a) => a.role === 'ph') || diagram.bonds.some((b) => b.role === 'ph');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden font-body">
      {/* Grid Selector for All Acids (No Scrollbar, All Rendered with KaTeX / ChemFormula) */}
      {showSelector && (
        <div className="p-3 bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
            {(Object.keys(PHOSPHORUS_ACIDS_DATA) as PhosphorusAcidType[]).map((acidKey) => {
              const item = PHOSPHORUS_ACIDS_DATA[acidKey];
              const isActive = selectedAcid === acidKey;
              return (
                <button
                  key={acidKey}
                  onClick={() => setSelectedAcid(acidKey)}
                  className={`px-2 py-2 rounded-xl text-xs font-semibold text-center transition flex flex-col items-center justify-center gap-1 ${
                    isActive
                      ? 'bg-slate-900 text-amber-400 shadow-sm border border-slate-800 font-bold'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span className={`truncate w-full leading-tight font-medium ${isActive ? 'text-amber-400' : 'text-slate-800'}`}>{item.name.split(' ')[0]}</span>
                  <span className="text-[12px]">
                    <ChemFormula
                      formula={item.shortFormula}
                      className={isActive ? 'text-amber-400 font-bold' : 'text-slate-900 font-semibold'}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Canvas and Academic Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-white">

        {/* Left Column: Classic Scientific Diagram (light academic style) */}
        <div className="lg:col-span-7 p-6 flex flex-col items-center justify-center min-h-[320px] relative select-none bg-white">
          <div className="w-full max-w-[440px] h-[260px] flex items-center justify-center">
            <AcidDiagram type={selectedAcid} />
          </div>

          <div className="w-full mt-2 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded inline-block" style={{ backgroundColor: OH }} /> OH-группа (диссоциирует)
              </span>
              {hasPh && (
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded inline-block" style={{ backgroundColor: PH }} /> P-H (не диссоциирует)
                </span>
              )}
            </div>
            <span className="font-mono text-slate-600 font-semibold">С.О.: {data.oxidationState}</span>
          </div>
        </div>

        {/* Right Column: Academic Data Panel */}
        <div className="lg:col-span-5 p-5 bg-white space-y-4 text-xs sm:text-sm text-slate-700 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="border-b border-slate-100 pb-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg">{data.name}</h4>
                <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  {data.oxidationState}
                </span>
              </div>
              <p className="text-xs text-slate-500 italic font-mono">{data.systemicName}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-slate-500 text-[11px] mb-0.5">Формула:</div>
                <div className="font-bold text-slate-900 text-sm">
                  <ChemFormula formula={data.formula} className="text-slate-900 font-bold" />
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-slate-500 text-[11px]">Основность:</div>
                <div className="font-bold text-indigo-900 flex items-center gap-1">
                  <span>{data.basicity}</span>
                </div>
              </div>
            </div>

            {data.bondLengthsList && data.bondLengthsList.length > 0 && (
              <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-slate-800 text-xs space-y-1">
                <div className="font-bold text-amber-900">Длины связей (экспериментальные данные):</div>
                <div className="flex flex-wrap gap-2 text-amber-950 font-semibold">
                  {data.bondLengthsList.map((b, idx) => (
                    <span key={idx} className="bg-amber-100/90 px-2 py-0.5 rounded border border-amber-200 font-mono text-xs flex items-center gap-1">
                      <ChemFormula formula={b.bond} className="font-bold" />: <span>{b.length}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {data.description}
            </p>
          </div>

          {/* Structured & Perfectly Spaced Salts Reference List */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="text-slate-500 font-sans text-[11px] font-medium border-b border-slate-200 pb-1">
              Примеры образуемых солей:
            </div>

            <div className="space-y-1.5 pt-0.5">
              {data.salts.map((salt, idx) => (
                <div key={idx} className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="px-2 py-0.5 rounded bg-white border border-slate-300 font-mono text-indigo-900 font-bold">
                    <ChemFormula formula={salt.formula} className="text-indigo-900 font-bold" />
                  </span>
                  <span className="text-slate-700 font-sans font-medium">— {salt.name}</span>
                  {salt.note && (
                    <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[10px] font-bold border border-amber-200">
                      {salt.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
