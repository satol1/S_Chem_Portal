import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ConceptFlow } from '../../../interactive/ConceptFlow';

// ═══════════════════════════════════════
// Интерактивная концепт-карта темы ОХ-06 (React Flow): окисление и
// восстановление как сопряжённые процессы (секция 6.1). Централизованный
// ConceptFlow: автораскладка «хаб + спутники», клик по узлу раскрывает детали.
// ═══════════════════════════════════════

export const RedoxConceptFlow: React.FC = () => (
  <ConceptFlow
    title="ОВР: окисление и восстановление — сопряжённые процессы"
    height={420}
    canvasMaxWidth={980}
    nodes={[
      { id: 'redox', label: 'ОВР', sub: 'перенос электронов', hub: true, color: 'amber' },
      { id: 'oxidation', label: 'окисление', sub: 'отдача e⁻', color: 'red', x: -215, y: -85 },
      { id: 'reduction', label: 'восстановление', sub: 'присоединение e⁻', color: 'teal', x: 215, y: -85 },
      { id: 'reducer', label: 'восстановитель', sub: 'отдаёт e⁻', color: 'orange', x: -245, y: 75 },
      { id: 'oxidizer', label: 'окислитель', sub: 'принимает e⁻', color: 'purple', x: 245, y: 75 },
      { id: 'balance', label: 'электронный баланс', sub: 'отдано = принято', color: 'blue', x: 0, y: 155 },
    ]}
    edges={[
      { from: 'redox', to: 'oxidation', label: 'степень окисления повышается' },
      { from: 'redox', to: 'reduction', label: 'степень окисления понижается' },
      { from: 'oxidation', to: 'reducer', label: 'восстановитель окисляется' },
      { from: 'reduction', to: 'oxidizer', label: 'окислитель восстанавливается' },
      { from: 'reducer', to: 'balance' },
      { from: 'oxidizer', to: 'balance' },
      { from: 'oxidation', to: 'reduction', dashed: true, ring: true },
    ]}
    reference={{
      items: [
        { label: 'Сопряжённость', value: 'окисление и восстановление протекают одновременно: электроны не могут существовать свободными — их отдача одним веществом означает принятие другим', accent: true },
        { label: 'Мнемоника', value: '«отдать — окисление»: восстановитель Отдаёт электроны и Окисляется' },
        { label: 'Пример', value: 'Zn + CuSO₄ → ZnSO₄ + Cu: цинк окисляется, медь восстанавливается' },
      ],
    }}
    details={{
      redox: (
        <>
          <strong className="text-slate-900">Окислительно-восстановительные реакции </strong> — реакции, протекающие
          с изменением степеней окисления элементов. Их движущая сила — перенос электронов от восстановителя
          к окислителю. Пример: <ChemFormula formula="Zn + CuSO4 -> ZnSO4 + Cu" className="font-semibold text-slate-900" />.
        </>
      ),
      oxidation: (
        <>
          <strong className="text-slate-900">Окисление </strong> — процесс отдачи электронов атомом, ионом или
          молекулой; степень окисления элемента при этом повышается:{' '}
          <ChemFormula formula="Fe(0) - 2e- -> Fe(+2)" className="font-semibold text-slate-900" />.
        </>
      ),
      reduction: (
        <>
          <strong className="text-slate-900">Восстановление </strong> — процесс присоединения электронов; степень
          окисления элемента при этом понижается:{' '}
          <ChemFormula formula="S(0) + 2e- -> S(-2)" className="font-semibold text-slate-900" />.
        </>
      ),
      reducer: (
        <>
          <strong className="text-slate-900">Восстановитель </strong> — частица, отдающая электроны в ходе реакции;
          сам восстановитель при этом окисляется. Типичные восстановители: активные металлы, водород, углерод,
          соединения элементов в низших степенях окисления.
        </>
      ),
      oxidizer: (
        <>
          <strong className="text-slate-900">Окислитель </strong> — частица, принимающая электроны; сам окислитель
          при этом восстанавливается. Типичные окислители: кислород, галогены, перманганаты, дихроматы,
          концентрированные азотная и серная кислоты.
        </>
      ),
      balance: (
        <>
          <strong className="text-slate-900">Электронный баланс: </strong> число электронов, отданных восстановителем,
          всегда равно числу электронов, принятых окислителем. На этом законе основан метод расстановки
          коэффициентов в уравнениях ОВР.
        </>
      ),
    }}
    caption={
      <>
        Окислитель принимает электроны и восстанавливается, восстановитель отдаёт электроны и окисляется;
        оба процесса протекают одновременно, а число отданных и принятых электронов равно.
      </>
    }
  />
);
