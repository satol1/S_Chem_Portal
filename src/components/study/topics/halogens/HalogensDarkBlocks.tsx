import React from 'react';
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
 * Placed in Section 6 (Oxygen-containing chlorine compounds)
 */
export const HalogensDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Хлорная известь и гипохлориты — отбеливание и дезинфекция"
      subtitle="Прикладной химизм • Белильные материалы"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Пропускание хлора через известковое молоко даёт хлорную известь («хлорку») — смесь хлорида и гипохлорита кальция, многолетнее средство отбеливания целлюлозы и дезинфекции:
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2 text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Получение и механизм действия:</div>
        <div className="text-amber-300 font-semibold space-y-2">
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">1) Хлорирование гашёной извести:</span>
            <ChemFormula formula="2Cl2 + 2Ca(OH)2 -> CaCl2 + Ca(ClO)2 + 2H2O" className="text-amber-300 font-bold" />
          </div>
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">2) Выделение активной хлорноватистой кислоты под действием CO₂ воздуха:</span>
            <ChemFormula formula="Ca(ClO)2 + CO2 + H2O -> CaCO3v + 2HClO" className="text-amber-300 font-bold" />
          </div>
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">3) Фотолиз HClO — источник бактерицидного атомарного кислорода:</span>
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
 * Placed in Section 8 (Industrial Chemistry)
 */
export const HalogensDarkBlock3: React.FC = () => {
  return (
    <DarkBlockCard
      title="Промышленный электролиз — единственный способ получения фтора"
      subtitle="Промышленный химизм • Электролиз KF·2HF"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Фтор — сильнейший окислитель, поэтому получить его химическим путём из фторидов невозможно: только электролиз. Впервые фтор выделил Анри Муассан (1886 г., Нобелевская премия 1906 г.); современный процесс — электролиз расплава кислого фторида калия:
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2 text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Схема электролиза расплава KF·2HF (~90–100 °C, стальной аппарат, никелевые электроды):</div>
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

      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Аппаратуру изготавливают из стали и никеля — на их поверхности образуется защитная плёнка фторидов (<TermTooltip term="пассивация" definition="Образование плотной защитной плёнки фторида NiF₂/FeF₂, предохраняющей металл от дальнейшего разрушения фтором." />), а фтор хранят и перевозят в стальных баллонах.
      </p>
    </DarkBlockCard>
  );
};
