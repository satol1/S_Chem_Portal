import React from 'react';
import { Factory, ShieldAlert } from 'lucide-react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';

export const ChromiumManganeseDarkBlock1: React.FC = () => (
  <DarkBlockCard
    title="Металлургия хрома: от хромита до чистого металла"
    subtitle="Промышленный химизм • Четырёхстадийная цепочка"
    icon={Factory}
  >
    <div className="space-y-3">
      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          1. Окислительное сплавление хромита с содой (обжиг в печах)
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula math="4FeCr_2O_4 + 8Na_2CO_3 + 7O_2 \xrightarrow{\text{сплавление}} 8Na_2CrO_4 + 2Fe_2O_3 + 8CO_2\uparrow" />
        </div>
        <p className="text-slate-400 text-xs">
          Хром переходит в растворимый жёлтый хромат натрия, железо — в нерастворимый Fe₂O₃.
        </p>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          2. Перевод хромата в дихромат подкислением
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="2Na2CrO4 + H2SO4 -> Na2Cr2O7 + Na2SO4 + H2O" />
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          3. Восстановление дихромата углеродом до Cr₂O₃
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="Na2Cr2O7 + 2C -t-> Cr2O3 + Na2CO3 + CO^" />
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          4. Алюмотермия — восстановление оксида алюминием
        </span>
        <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="Cr2O3 + 2Al -t-> 2Cr + Al2O3" />
        </div>
        <p className="text-slate-400 text-xs">
          Алюмотермия даёт металлический хром без науглероживания — важно для производства спецсталей.
        </p>
      </div>
    </div>
  </DarkBlockCard>
);

export const ChromiumManganeseDarkBlock2: React.FC = () => (
  <DarkBlockCard
    title="Получение марганца и ферромарганца"
    subtitle="Промышленный химизм • Раскисление и легирование стали"
    icon={Factory}
  >
    <div className="space-y-3">
      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          1. Алюмотермия пиролюзита — чистый марганец
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="3MnO2 + 4Al -t-> 3Mn + 2Al2O3" />
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          2. Восстановление углеродом в электропечах — ферромарганец
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="MnO2 + 2C -t-> Mn + 2CO^" />
        </div>
        <p className="text-slate-400 text-xs">
          В присутствии железного лома получают ферромарганец (60–95 % Mn) — главный легирующий
          и раскисляющий компонент при выплавке стали.
        </p>
      </div>
    </div>
  </DarkBlockCard>
);

export const ChromiumManganeseDarkBlock3: React.FC = () => (
  <DarkBlockCard
    title="Промышленный синтез перманганата калия"
    subtitle="Промышленный химизм • Двухстадийный синтез KMnO₄"
    icon={Factory}
  >
    <div className="space-y-3">
      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          1. Окислительное сплавление пиролюзита с KOH — зелёный манганат
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula math="2MnO_2 + 4KOH + O_2 \xrightarrow{\text{сплавление}} 2K_2MnO_4 + 2H_2O" />
        </div>
        <p className="text-slate-400 text-xs">
          Вместо кислорода может использоваться окислитель KClO₃:
        </p>
        <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula math="3MnO_2 + 6KOH + KClO_3 \xrightarrow{\text{сплавление}} 3K_2MnO_4 + KCl + 3H_2O" />
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          2. Окисление манганата до перманганата (Cl₂ или электролиз)
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="2K2MnO4 + Cl2 -> 2KMnO4 + 2KCl" />
        </div>
        <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula math="2K_2MnO_4 + 2H_2O \xrightarrow{\text{электролиз}} 2KMnO_4 + 2KOH + H_2\uparrow" />
        </div>
      </div>
    </div>
  </DarkBlockCard>
);

/**
 * Малый тёмный блок (30-DESIGN §6): исключение/акцент из уже имеющегося текста темы —
 * пассивация хрома в концентрированных кислотах. Размещается в сетке md:grid-cols-2
 * рядом со светлой карточкой-партнёром в разделе 2.
 */
export const ChromiumManganeseDarkBlock4: React.FC = () => (
  <DarkBlockCard
    title="Пассивация хрома в концентрированных кислотах"
    subtitle="Исключение • Комнатная температура"
    icon={ShieldAlert}
  >
    <div className="space-y-3">
      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          1. При 20 °C реакция останавливается
        </span>
        <p className="text-slate-300 text-xs leading-relaxed">
          Концентрированные <ChemFormula formula="H2SO4" className="text-amber-300 font-semibold" /> и{' '}
          <ChemFormula formula="HNO3" className="text-amber-300 font-semibold" /> покрывают хром
          плотной оксидной плёнкой <ChemFormula formula="Cr2O3" className="text-amber-300 font-semibold" /> —
          металл пассивируется, как железо и алюминий.
        </p>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
        <span className="font-bold text-amber-400 block text-xs sm:text-sm">
          2. При нагревании — окисление без выделения водорода
        </span>
        <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
          <ChemFormula formula="2Cr + 6H2SO4(конц) -t-> Cr2(SO4)3 + 3SO2^ + 6H2O" />
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
          Марганец, в отличие от хрома, не пассивируется: с концентрированной азотной кислотой
          бурно реагирует даже без нагревания.
        </p>
      </div>
    </div>
  </DarkBlockCard>
);
