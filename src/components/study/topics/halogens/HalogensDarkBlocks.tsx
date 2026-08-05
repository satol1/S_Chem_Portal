import React from 'react';
import { Factory } from 'lucide-react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';

/**
 * Dark Block 1: Chlor-Alkali Electrolysis of NaCl solution
 * Placed in Section 8 (Industrial Chemistry)
 */
export const HalogensDarkBlock1: React.FC = () => {
  return (
    <DarkBlockCard
      title="Хлорщелочной электролиз раствора NaCl (мембранный метод)"
      subtitle="Промышленный химизм • Крупнотоннажное производство Cl₂ и NaOH"
      icon={Factory}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Электролиз водного раствора хлорида натрия — главный промышленный способ получения хлора, гидроксида натрия и водорода. Современный стандарт — электролизёр с ионообменной мембраной, разделяющей катодное и анодное пространства:
      </p>

      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия I: Подготовка и очистка рассола
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Насыщенный раствор <ChemFormula formula="NaCl" className="text-amber-300 font-medium" /> очищают от примесей ионов <ChemFormula formula="Ca(2+)" className="text-slate-300" />, <ChemFormula formula="Mg(2+)" className="text-slate-300" /> и <ChemFormula formula="SO4(2-)" className="text-slate-300" /> осаждением — они разрушают мембрану и отравляют электроды.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия II: Электролиз в мембранном электролизёре
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            На аноде окисляются хлорид-ионы, на катоде восстанавливается вода (ионы <ChemFormula formula="Na(+)" className="text-slate-300" /> переходят через мембрану в католит):
          </p>
          <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm space-y-1">
            <div><ChemFormula math="\text{Анод (+):}\; 2Cl^{-} - 2\bar{e} \rightarrow Cl_2\uparrow" className="text-teal-300 font-bold" /></div>
            <div><ChemFormula math="\text{Катод (-):}\; 2H_2O + 2\bar{e} \rightarrow H_2\uparrow + 2OH^{-}" className="text-teal-300 font-bold" /></div>
          </div>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula math="2NaCl + 2H_2O \xrightarrow{\text{электролиз}} 2NaOH + H_2\uparrow + Cl_2\uparrow" className="text-amber-300 font-bold" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия III: Переработка продуктов
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Хлор направляют на хлорирование органики (ПВХ, растворители) и синтез <ChemFormula formula="HCl" className="text-amber-300 font-medium" />: <ChemFormula math="H_2 + Cl_2 \rightarrow 2HCl" className="text-amber-300 font-bold" />. Щёлочь <ChemFormula formula="NaOH" className="text-amber-300 font-medium" /> выпаривают до товарной концентрации. Электролиз расплава даёт металлический натрий: <ChemFormula math="2NaCl \xrightarrow{\text{электролиз расплава}} 2Na + Cl_2\uparrow" className="text-teal-300 font-bold" />.
          </p>
        </div>
      </div>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 2: Bleaching Powder / Chlorinated Lime
 * БОЛЬШОЙ тёмный блок (30-DESIGN §6): полная ширина, внутренняя сетка карточек-стадий.
 * Размещается в секции 6 (кислородсодержащие соединения хлора).
 */
export const HalogensDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Хлорная известь и гипохлориты — отбеливание и дезинфекция"
      subtitle="Прикладной химизм • Белильные материалы"
      icon={Factory}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Пропускание хлора через известковое молоко даёт хлорную известь («хлорку») — смесь хлорида и гипохлорита кальция, многолетнее средство отбеливания целлюлозы и дезинфекции. Бактерицидное действие всех белильных материалов основано на одном и том же принципе — выделении хлорноватистой кислоты:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">Стадия 1. Хлорирование гашёной извести</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Хлор диспропорционирует в известковом молоке — образуется смесь хлорида и гипохлорита кальция:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="2Cl2 + 2Ca(OH)2 -> CaCl2 + Ca(ClO)2 + 2H2O" className="text-amber-300 font-bold" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">Стадия 2. Активация углекислым газом воздуха</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Под действием <ChemFormula formula="CO2" className="text-slate-300" /> воздуха гипохлорит выделяет активную хлорноватистую кислоту:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="Ca(ClO)2 + CO2 + H2O -> CaCO3v + 2HClO" className="text-amber-300 font-bold" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">Стадия 3. Фотолиз — источник окислителя</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            <ChemFormula formula="HClO" className="text-slate-300" /> разлагается на свету с выделением атомарного кислорода — сильного окислителя, обеспечивающего отбеливание и обеззараживание:
          </p>
          <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="2HClO -(hv)-> 2HCl + O2^" className="text-teal-300 font-bold" />
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Аналогичный принцип лежит в основе действия «Белизны» — водного раствора гипохлорита натрия <ChemFormula formula="NaClO" className="text-amber-300 font-medium" />, получаемого хлорированием холодного раствора <TermTooltip term="едкого натра" definition="Гидроксид натрия NaOH — сильная щёлочь; продукт хлорщелочного электролиза." />: <ChemFormula formula="Cl2 + 2NaOH(хол) -> NaCl + NaClO + H2O" className="text-teal-300 font-bold" />.
      </p>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 3: Industrial Fluorine Production (Moissan electrolysis)
 * МАЛЫЙ тёмный блок (30-DESIGN §6): компактный, размещается в сетке
 * grid-cols-2 рядом со светлой карточкой-партнёром (историческая справка
 * и пассивация аппаратуры — в HalogensSections, секция 8).
 */
export const HalogensDarkBlock3: React.FC = () => {
  return (
    <DarkBlockCard
      title="Электролиз — единственный способ получения фтора"
      subtitle="Промышленный химизм • KF·2HF"
      icon={Factory}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Фтор — сильнейший окислитель, поэтому получить его химическим путём из фторидов невозможно. Современный процесс — электролиз расплава кислого фторида калия <ChemFormula formula="KF*2HF" className="text-amber-300 font-medium" /> (~90–100 °C, никелевые электроды):
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2 text-xs sm:text-sm">
        <div className="text-amber-300 font-semibold space-y-2">
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">Анод — выделение фтора:</span>
            <ChemFormula math="\text{Анод (+):}\; 2F^{-} - 2\bar{e} \rightarrow F_2\uparrow" className="text-amber-300 font-bold" />
          </div>
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">Катод — выделение водорода:</span>
            <ChemFormula math="\text{Катод (-):}\; 2H^{+} + 2\bar{e} \rightarrow H_2\uparrow" className="text-amber-300 font-bold" />
          </div>
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">Суммарный процесс:</span>
            <ChemFormula math="2HF \xrightarrow{\text{электролиз}} H_2\uparrow + F_2\uparrow" className="text-teal-300 font-bold" />
          </div>
        </div>
      </div>
    </DarkBlockCard>
  );
};
