import React from 'react';
import { TheoryCallout } from '../../TheoryCallout';
import { ChemFormula } from '../../../scientific/ChemFormula';

/** Гипс и алебастр — размещается в разделе «Соли» (section-salts) */
export const FunFactGypsum: React.FC = () => (
  <div className="my-6">
    <TheoryCallout title="Гипс и алебастр — одно вещество, разные свойства">
      Природный гипс <ChemFormula formula="CaSO4*2H2O" className="font-semibold text-slate-900" /> при нагревании до 150–180 °C теряет ¾ кристаллизационной воды и превращается в алебастр (жжёный гипс) — <ChemFormula formula="2CaSO4·H2O" className="font-semibold text-slate-900" />. При смешивании с водой алебастр вновь присоединяет воду, кристаллизуется и затвердевает — на этом основано применение гипса в строительстве, медицине (гипсовые повязки) и скульптуре.
    </TheoryCallout>
  </div>
);

/** Стекло и HF — размещается в разделе «Кислоты» (section-acids) */
export const FunFactGlassHF: React.FC = () => (
  <div className="my-6">
    <TheoryCallout title="Почему стекло не растворяется в кислотах, но травится плавиковой кислотой">
      Оконное стекло состоит в основном из <ChemFormula formula="SiO2" className="font-semibold text-slate-900" />, который является кислотным оксидом, но в компактной форме не реагирует с большинством кислот. Исключение — плавиковая кислота HF: <ChemFormula formula="SiO2 + 4HF -> SiF4^ + 2H2O" className="font-semibold text-slate-900" />. Именно поэтому HF хранят не в стеклянной, а в пластиковой посуде.
    </TheoryCallout>
  </div>
);

/** Самовоспламенение фосфора — размещается в разделе «Оксиды» (section-oxides) */
export const FunFactPhosphorus: React.FC = () => (
  <div className="my-6">
    <TheoryCallout title="Самовоспламенение белого фосфора на воздухе">
      Белый фосфор <ChemFormula formula="P4" className="font-semibold text-slate-900" /> — одно из немногих простых веществ, самовоспламеняющихся на воздухе при комнатной температуре. Продукт окисления — кислотный оксид <ChemFormula formula="P4O10" className="font-semibold text-slate-900" /> (фосфорный ангидрид), который энергично реагирует с водой, образуя ортофосфорную кислоту <ChemFormula formula="H3PO4" className="font-semibold text-slate-900" />. Это яркий пример генетического ряда неметалла: P → P₄O₁₀ → H₃PO₄ → соль.
    </TheoryCallout>
  </div>
);
