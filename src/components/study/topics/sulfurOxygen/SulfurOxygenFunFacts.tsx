import React from 'react';
import { TheoryCallout } from '../../TheoryCallout';
import { ChemFormula } from '../../../scientific/ChemFormula';

export const SulfurOxygenFunFacts: React.FC = () => {
  return (
    <div className="space-y-4 my-6">
      <TheoryCallout title="Вулканизация каучука серными мостиками">
        Открытие реакций вулканизации каучука серой произвело революцию в промышленности. При нагревании с серой гибкие линейные макромолекулы полиизопрена сшиваются поперечными дисульфидными мостиками (<code className="font-mono text-amber-900 font-bold">-S-S-</code>), превращая мягкий липкий каучук в прочную и эластичную резину.
      </TheoryCallout>

      <TheoryCallout title="Парамагнетизм жидкого кислорода">
        При охлаждении до -183 °C кислород конденсируется в жидкость светло-голубого цвета. Из-за наличия двух неспаренных электронов на разрыхляющих π*-орбиталях молекула <ChemFormula formula="O2" className="font-semibold text-slate-900" /> парамагнитна: струйка жидкого кислорода притягивается к полюсам сильного магнита и удерживается в магнитном поле.
      </TheoryCallout>
    </div>
  );
};
