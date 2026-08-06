import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ConceptFlow } from '../../../interactive/ConceptFlow';

// ═══════════════════════════════════════
// Интерактивная концепт-карта темы ОХ-05 (React Flow): химическое
// равновесие и его смещение (секция 5.6). Централизованный ConceptFlow:
// автораскладка «хаб + спутники», клик по узлу раскрывает детали.
// ═══════════════════════════════════════

export const ChemicalEquilibriumConceptFlow: React.FC = () => (
  <ConceptFlow
    title="Химическое равновесие и его смещение: интерактивная карта"
    height={400}
    canvasMaxWidth={980}
    nodes={[
      { id: 'equilibrium', label: 'химическое равновесие', sub: 'v(прям.) = v(обр.)', hub: true, color: 'amber' },
      { id: 'reversible', label: 'обратимая реакция', sub: '⇄', color: 'blue', x: 0, y: -135 },
      { id: 'k', label: 'константа равновесия', sub: 'K', color: 'purple', x: 217, y: -67 },
      { id: 'lechatelier', label: 'принцип Ле Шателье', sub: 'смещение', color: 'green', x: 217, y: 67 },
      { id: 'temp', label: 'температура', sub: 't', color: 'red', x: 120, y: 195 },
      { id: 'pressure', label: 'давление', sub: 'p', color: 'ochre', x: -20, y: 215 },
      { id: 'conc', label: 'концентрация', sub: 'c', color: 'teal', x: -160, y: 180 },
    ]}
    edges={[
      { from: 'equilibrium', to: 'reversible', label: 'v(прям.) = v(обр.)' },
      { from: 'equilibrium', to: 'k', label: 'K = const (T)' },
      { from: 'equilibrium', to: 'lechatelier' },
      { from: 'lechatelier', to: 'temp', label: 'нагрев' },
      { from: 'lechatelier', to: 'pressure', label: 'сжатие' },
      { from: 'lechatelier', to: 'conc', label: 'добавление реагента' },
      { from: 'reversible', to: 'conc', dashed: true, ring: true },
      { from: 'k', to: 'temp', dashed: true, ring: true },
    ]}
    reference={{
      items: [
        { label: 'Катализатор и равновесие', value: 'катализатор НЕ смещает равновесие — он лишь ускоряет его достижение', accent: true },
        { label: 'Синтез аммиака (промышленность)', value: 'N₂ + 3H₂ ⇄ 2NH₃ + 92.2 кДж; 400–500 °C, 25–35 МПа, катализатор Fe' },
        { label: 'NO₂ / N₂O₄', value: 'охлаждение бурого NO₂ смещает равновесие к бесцветному N₂O₄' },
      ],
    }}
    details={{
      equilibrium: (
        <>
          <strong className="text-slate-900">Химическое равновесие </strong> — состояние обратимой системы, при
          котором скорости прямой и обратной реакций равны, а концентрации веществ остаются постоянными.
          Пример: <ChemFormula formula="N2 + 3H2 <=(Fe, t, p)=> 2NH3" className="font-semibold text-slate-900" />.
        </>
      ),
      reversible: (
        <>
          <strong className="text-slate-900">Обратимая реакция </strong> идёт одновременно в прямом и обратном
          направлениях. Наглядный пример — димеризация оксида азота(IV):{' '}
          <ChemFormula formula="2NO2 <=> N2O4" className="font-semibold text-slate-900" /> (бурый газ ⇄ бесцветный димер).
        </>
      ),
      k: (
        <>
          <strong className="text-slate-900">Константа равновесия </strong> — отношение равновесных концентраций
          продуктов к концентрациям реагентов в степенях их коэффициентов. Для{' '}
          <ChemFormula formula="2SO2 + O2 <=> 2SO3" className="font-semibold text-slate-900" />:{' '}
          <ChemFormula math="K = \dfrac{[\mathrm{SO_3}]^2}{[\mathrm{SO_2}]^2 \cdot [\mathrm{O_2}]}" className="font-semibold text-slate-900" />.
          K зависит только от температуры.
        </>
      ),
      lechatelier: (
        <>
          <strong className="text-slate-900">Принцип Ле Шателье: </strong> если на равновесную систему оказать
          внешнее воздействие, равновесие смещается в том направлении, которое ослабляет это воздействие.
        </>
      ),
      temp: (
        <>
          <strong className="text-slate-900">Температура: </strong> нагревание смещает равновесие в сторону
          эндотермической реакции. Для <ChemFormula formula="N2 + 3H2 <=> 2NH3" className="font-semibold text-slate-900" /> (+Q
          в прямом направлении) нагрев смещает равновесие в сторону реагентов, охлаждение — в сторону аммиака.
        </>
      ),
      pressure: (
        <>
          <strong className="text-slate-900">Давление: </strong> рост давления смещает равновесие в сторону меньшего
          количества моль газа. В синтезе аммиака из 4 моль газа образуется 2 моль, поэтому повышение давления
          смещает равновесие в сторону продуктов.
        </>
      ),
      conc: (
        <>
          <strong className="text-slate-900">Концентрация: </strong> добавление реагента (или удаление продукта)
          смещает равновесие в сторону образования продуктов — на этом основаны промышленные способы повышения выхода.
        </>
      ),
    }}
    caption={
      <>
        Положение химического равновесия задаётся константой K (зависит только от температуры), а смещается по
        принципу Ле Шателье: температурой, давлением и концентрациями; катализатор на положение равновесия не влияет.
      </>
    }
  />
);
