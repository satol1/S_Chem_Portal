import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ConceptFlow } from '../../../interactive/ConceptFlow';

// ═══════════════════════════════════════
// Интерактивные концептуальные схемы темы ОХ-01 (React Flow).
// Централизованный ConceptFlow: автораскладка «хаб + спутники»,
// клик по узлу раскрывает формулу перехода и пример расчёта.
// ═══════════════════════════════════════

/** Моль — узел количественных расчётов (секция 1.9) */
export const MoleHubConceptFlow: React.FC = () => (
  <ConceptFlow
    title="Моль — узел количественных расчётов"
    height={250}
    nodes={[
      { id: 'mole', label: 'моль', sub: 'n', hub: true, color: 'amber' },
      { id: 'mass', label: 'Масса', sub: 'm', color: 'blue' },
      { id: 'particles', label: 'Частицы', sub: 'N', color: 'purple' },
      { id: 'volume', label: 'Объём газа', sub: 'V', color: 'green' },
      { id: 'molar', label: 'Молярная масса', sub: 'M', color: 'ochre' },
    ]}
    edges={[
      { from: 'mole', to: 'mass', label: 'n = m / M' },
      { from: 'mole', to: 'particles', label: 'n = N / Nₐ' },
      { from: 'mole', to: 'volume', label: 'n = V / Vm' },
      { from: 'mole', to: 'molar', label: 'M = Mr, г/моль' },
      { from: 'mass', to: 'particles', dashed: true, ring: true },
      { from: 'particles', to: 'volume', dashed: true, ring: true },
      { from: 'volume', to: 'molar', dashed: true, ring: true },
      { from: 'molar', to: 'mass', dashed: true, ring: true },
    ]}
    reference={{
      items: [
        { label: 'Число Авогадро', value: 'Nₐ = 6.02·10²³ моль⁻¹ (точно 6.02214076·10²³, СИ 2019)', accent: true },
        { label: 'Молярный объём', value: 'Vm = 22.4 л/моль (газы, н. у.: 0 °C, 101.325 кПа)' },
        { label: 'Молярная масса', value: 'M численно равна Mr, г/моль; M(H₂O) = 18 г/моль' },
      ],
    }}
    details={{
      mole: (
        <>
          <strong className="text-slate-900">Моль </strong> — количество вещества, содержащее{' '}
          <ChemFormula math="6.02\cdot10^{23}" className="font-semibold text-slate-900" /> структурных единиц
          (атомов, молекул, ионов); все расчётные дороги сходятся к нему:{' '}
          <ChemFormula math="n = \dfrac{m}{M} = \dfrac{N}{N_A} = \dfrac{V}{V_m}" className="font-semibold text-slate-900" />.
        </>
      ),
      mass: (
        <>
          <strong className="text-slate-900">Масса → количество вещества: </strong>
          <ChemFormula math="n = \dfrac{m}{M}" className="font-semibold text-slate-900" />. Пример: порция воды
          массой 36 г — это <ChemFormula math="n = \dfrac{36\,\text{г}}{18\,\text{г/моль}} = 2\,\text{моль}" className="font-semibold text-slate-900" />.
        </>
      ),
      particles: (
        <>
          <strong className="text-slate-900">Частицы → количество вещества: </strong>
          <ChemFormula math="n = \dfrac{N}{N_A}" className="font-semibold text-slate-900" />. Пример: 2 моль воды
          содержат <ChemFormula math="N = 2 \cdot 6.02\cdot10^{23} = 1.204\cdot10^{24}" className="font-semibold text-slate-900" /> молекул.
        </>
      ),
      volume: (
        <>
          <strong className="text-slate-900">Объём газа (н. у.) → количество вещества: </strong>
          <ChemFormula math="n = \dfrac{V}{V_m}" className="font-semibold text-slate-900" />. Пример: 44.8 л газа
          при н. у. — это <ChemFormula math="n = \dfrac{44.8\,\text{л}}{22.4\,\text{л/моль}} = 2\,\text{моль}" className="font-semibold text-slate-900" />.
        </>
      ),
      molar: (
        <>
          <strong className="text-slate-900">Молярная масса </strong> численно равна относительной молекулярной
          массе: <ChemFormula math="M_r(\mathrm{H_2O}) = 18 \Rightarrow M = 18\,\text{г/моль}" className="font-semibold text-slate-900" />.
        </>
      ),
    }}
    caption={
      <>
        Количество вещества <ChemFormula math="n" className="font-semibold" /> связывает массу, число частиц и
        объём газа при н. у.: <ChemFormula math="n = \dfrac{m}{M} = \dfrac{N}{N_A} = \dfrac{V}{V_m}" className="font-semibold" /> —
        три «дороги» к количеству вещества и обратно.
      </>
    }
  />
);
