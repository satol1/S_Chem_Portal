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

export const InorganicClassesSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 4.1 */}
      <section id="section-oxides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.1. Оксиды: классификация, свойства и способы получения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Бинарные соединения элементов с кислородом</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Оксиды — бинарные соединения элементов с кислородом. По химическим свойствам различают основные (<ChemFormula formula="Na2O" className="font-semibold text-slate-900" />, <ChemFormula formula="CaO" className="font-semibold text-slate-900" />), кислотные (<ChemFormula formula="CO2" className="font-semibold text-slate-900" />, <ChemFormula formula="SO3" className="font-semibold text-slate-900" />), амфотерные (<ChemFormula formula="ZnO" className="font-semibold text-slate-900" />, <ChemFormula formula="Al2O3" className="font-semibold text-slate-900" />) и несолеобразующие (<ChemFormula formula="NO" className="font-semibold text-slate-900" />, <ChemFormula formula="N2O" className="font-semibold text-slate-900" />, <ChemFormula formula="CO" className="font-semibold text-slate-900" />, <ChemFormula formula="SiO" className="font-semibold text-slate-900" />) оксиды.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Основные оксиды реагируют с кислотами, а с водой — только оксиды щелочных и щёлочноземельных металлов; кислотные оксиды реагируют со щелочами и водой; амфотерные оксиды взаимодействуют и с кислотами, и со щелочами.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Основные способы получения оксидов — окисление простых веществ кислородом и разложение гидроксидов, карбонатов и нитратов при нагревании.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CaO + 2HCl -> CaCl2 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="SO3 + 2NaOH -> Na2SO4 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CaCO3 -t-> CaO + CO2^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Основные оксиды</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Кислотные оксиды</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Амфотерные оксиды</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Несолеобразующие оксиды</span>
        </div>
      </section>

      {/* SECTION 4.2 */}
      <section id="section-bases" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.2. Основания: классификация, свойства и способы получения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Соединения металлов с гидроксогруппами</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Основания — соединения металлов с гидроксогруппами. По кислотности различают однокислотные (<ChemFormula formula="NaOH" className="font-semibold text-slate-900" />) и двухкислотные (<ChemFormula formula="Ca(OH)2" className="font-semibold text-slate-900" />) основания; по растворимости — щёлочи (растворимые) и нерастворимые основания.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Щёлочи вступают в реакции нейтрализации с кислотами, реагируют с кислотными оксидами и растворами солей; нерастворимые основания при нагревании разлагаются на оксид и воду.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Щёлочи получают при взаимодействии активных металлов с водой, нерастворимые основания — действием щелочей на растворы солей соответствующих металлов.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaOH + HCl -> NaCl + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Cu(OH)2 -t-> CuO + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2Na + 2H2O -> 2NaOH + H2^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Щёлочи</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Нерастворимые основания</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Реакция нейтрализации</span>
        </div>
      </section>

      {/* SECTION 4.3 */}
      <section id="section-acids" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.3. Кислоты: классификация, свойства и способы получения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Основность, общие свойства и получение кислот</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По основности кислоты делят на одноосновные (<ChemFormula formula="HCl" className="font-semibold text-slate-900" />), двухосновные (<ChemFormula formula="H2SO4" className="font-semibold text-slate-900" />) и трёхосновные (<ChemFormula formula="H3PO4" className="font-semibold text-slate-900" />); по составу — на кислородсодержащие и бескислородные.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Общие свойства кислот: взаимодействие с металлами, стоящими в ряду активности до водорода (кроме кислот-окислителей), с основными оксидами, основаниями и солями, если образуется осадок, газ или слабая кислота.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кислоты получают растворением кислотных оксидов в воде и обменными реакциями солей.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Zn + 2HCl -> ZnCl2 + H2^" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CuO + H2SO4 -> CuSO4 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="SO3 + H2O -> H2SO4" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Основность кислоты</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ряд активности металлов</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Кислоты-окислители</span>
        </div>
      </section>

      {/* SECTION 4.4 */}
      <section id="section-amphoteric" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.4. Амфотерные гидроксиды: классификация, свойства и способы получения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Свойства и оснований, и кислот</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Амфотерные гидроксиды (<ChemFormula formula="Zn(OH)2" className="font-semibold text-slate-900" />, <ChemFormula formula="Al(OH)3" className="font-semibold text-slate-900" />, <ChemFormula formula="Cr(OH)3" className="font-semibold text-slate-900" />) проявляют свойства и оснований, и кислот: они растворяются в кислотах с образованием солей и растворяются в щелочах.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          При растворении в растворах щелочей образуются комплексные соли (например, <ChemFormula formula="Na2[Zn(OH)4]" className="font-semibold text-slate-900" />), а при сплавлении со щёлочью — средние соли (<ChemFormula formula="NaAlO2" className="font-semibold text-slate-900" />, <ChemFormula formula="Na2ZnO2" className="font-semibold text-slate-900" />).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Получают амфотерные гидроксиды действием небольшого количества щёлочи на соль соответствующего металла.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Al(OH)3 + 3HCl -> AlCl3 + 3H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Al(OH)3 + NaOH -> Na[Al(OH)4]" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="ZnSO4 + 2NaOH -> Zn(OH)2v + Na2SO4" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Амфотерность</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Комплексные соли</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Алюминаты и цинкаты</span>
        </div>
      </section>

      {/* SECTION 4.5 */}
      <section id="section-salts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.5. Соли: классификация, свойства и способы получения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Средние, кислые, основные, двойные и комплексные соли</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По составу различают средние (<ChemFormula formula="NaCl" className="font-semibold text-slate-900" />), кислые (<ChemFormula formula="NaHCO3" className="font-semibold text-slate-900" /> — содержат атомы водорода), основные (<ChemFormula formula="(CuOH)2CO3" className="font-semibold text-slate-900" /> — содержат гидроксогруппы), двойные (<ChemFormula formula="KAl(SO4)2" className="font-semibold text-slate-900" />) и комплексные соли.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Соли реагируют с металлами (более активный металл вытесняет менее активный из раствора соли), с кислотами, щелочами и другими солями, если образуется осадок, газ или слабый электролит; многие соли разлагаются при нагревании.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Способы получения солей — реакция нейтрализации, взаимодействие оксидов, металлов с кислотами.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Fe + CuSO4 -> FeSO4 + Cu" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Na2CO3 + 2HCl -> 2NaCl + H2O + CO2^" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaHCO3 + NaOH -> Na2CO3 + H2O" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Средние соли</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Кислые соли</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Основные соли</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Комплексные соли</span>
        </div>
      </section>

      {/* SECTION 4.6 */}
      <section id="section-genetic-link" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.6. Генетическая связь</h2>
              <p className="text-xs sm:text-sm text-slate-500">Генетические ряды и цепочки превращений между классами</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Генетические ряды показывают взаимные превращения между классами веществ. Ряд металла: металл → основный оксид → основание → соль; ряд неметалла: неметалл → кислотный оксид → кислота → соль.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Через амфотерные соединения ряды металла и неметалла связываются в единую систему, а реакции между классами позволяют осуществлять взаимные переходы — это основа для построения цепочек превращений.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Ca -> CaO -> Ca(OH)2 -> CaCl2" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="S -> SO2 -> H2SO3 -> Na2SO3" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Генетический ряд</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Цепочка превращений</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Взаимосвязь классов</span>
        </div>
      </section>

      {/* Scaffold status */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-04" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
