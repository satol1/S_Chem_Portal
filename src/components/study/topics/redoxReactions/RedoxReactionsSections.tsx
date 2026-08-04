import React from 'react';
import { FlaskConical, BookOpen } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

export const RedoxReactionsSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 1 */}
      <section id="section-redox-concepts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.1. Общие понятия</h2>
              <p className="text-xs sm:text-sm text-slate-500">Окисление, восстановление, окислитель и восстановитель</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Окислительно-восстановительные реакции (ОВР) — реакции, идущие с изменением степеней окисления элементов. Окисление — процесс отдачи электронов, при нём степень окисления элемента повышается. Восстановление — процесс присоединения электронов, при нём степень окисления элемента понижается. Окисление и восстановление всегда протекают одновременно.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Окислитель — частица, принимающая электроны и восстанавливающаяся; восстановитель — частица, отдающая электроны и окисляющаяся. Элементы в высшей степени окисления — только окислители, в низшей — только восстановители, в промежуточной — проявляют двойственность.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Fe(0) - 2e- -> Fe(+2)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="S(+6) + 2e- -> S(+4)" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Окисление</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Восстановление</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Окислитель</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Восстановитель</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Двойственность</span>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-oxidizers-reducers" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.2. Окислители и восстановители</h2>
              <p className="text-xs sm:text-sm text-slate-500">Важнейшие окислители и восстановители, роль среды раствора</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Важнейшие окислители: кислород, галогены, перманганат калия <ChemFormula formula="KMnO4" className="font-semibold text-slate-900" />, дихромат калия <ChemFormula formula="K2Cr2O7" className="font-semibold text-slate-900" />, азотная кислота, концентрированная серная кислота. Важнейшие восстановители: активные металлы, водород, углерод, угарный газ <ChemFormula formula="CO" className="font-semibold text-slate-900" />, сероводород и сульфиды, галогениды, соли железа(II). Двойственную природу имеют пероксид водорода <ChemFormula formula="H2O2" className="font-semibold text-slate-900" />, оксид серы(IV) и соли с промежуточными степенями окисления.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Продукт восстановления окислителя зависит от среды раствора: у перманганат-иона это <ChemFormula formula="Mn(2+)" className="font-semibold text-slate-900" /> в кислой среде, <ChemFormula formula="MnO2" className="font-semibold text-slate-900" /> в нейтральной и <ChemFormula formula="MnO4(2-)" className="font-semibold text-slate-900" /> в щелочной.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="MnO4(-) + 8H(+) + 5e- -> Mn(2+) + 4H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="MnO4(-) + 2H2O + 3e- -> MnO2v + 4OH(-)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="MnO4(-) + 1e- -> MnO4(2-)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Cr2O7(2-) + 14H(+) + 6e- -> 2Cr(3+) + 7H2O" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Перманганат калия</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Дихромат калия</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Среда раствора</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Двойственная природа</span>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-redox-equations" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.3. Составление уравнений ОВР</h2>
              <p className="text-xs sm:text-sm text-slate-500">Метод электронного баланса и метод полуреакций</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Метод электронного баланса: 1) определить степени окисления и найти элементы, её изменившие; 2) записать полуреакции окисления и восстановления; 3) найти наименьшее общее кратное чисел отданных и принятых электронов; 4) расставить коэффициенты и проверить баланс атомов. Число отданных восстановителем электронов всегда равно числу принятых окислителем.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          В ионно-электронном методе (методе полуреакций) баланс составляется для реальных частиц в растворе с участием ионов <ChemFormula formula="H+" className="font-semibold text-slate-900" />, <ChemFormula formula="OH-" className="font-semibold text-slate-900" /> и воды <ChemFormula formula="H2O" className="font-semibold text-slate-900" />.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="P(0) - 5e- -> P(+5)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="N(+5) + 1e- -> N(+4)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 sm:col-span-2"><ChemFormula formula="5KNO2 + 2KMnO4 + 3H2SO4 -> 5KNO3 + 2MnSO4 + K2SO4 + 3H2O" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электронный баланс</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Метод полуреакций</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Коэффициенты</span>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="section-electrolysis" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.4. Электролиз</h2>
              <p className="text-xs sm:text-sm text-slate-500">ОВР на электродах в расплавах и водных растворах</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Электролиз — окислительно-восстановительные процессы на электродах при пропускании постоянного тока через расплав или раствор электролита. Катод (отрицательный электрод) — место восстановления катионов; анод (положительный электрод) — место окисления анионов.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          В расплавах разряжаются ионы самой соли. В водных растворах на катоде действует ряд активности металлов: катионы активных металлов (натрий, калий, кальций) не восстанавливаются — вместо них восстанавливается вода с выделением водорода. На инертном аноде разряжаются бескислородные анионы или вода. Электролизом получают алюминий, хлор и щёлочи; гальваника использует электролиз для нанесения покрытий.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="2\mathrm{NaCl}\,(\text{расплав}) \xrightarrow{\text{электролиз}} 2\mathrm{Na} + \mathrm{Cl_2}\uparrow" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="2\mathrm{H_2O} \xrightarrow{\text{электролиз}} 2\mathrm{H_2}\uparrow + \mathrm{O_2}\uparrow" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="2\mathrm{H_2O} + 2\bar{e} \rightarrow \mathrm{H_2}\uparrow + 2\mathrm{OH}^{-}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2Cl(-) - 2e- -> Cl2^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Катод</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Анод</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ряд активности</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гальваника</span>
        </div>
      </section>

      {/* Status block */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-06" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
