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

export const ChemicalBondSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 3.1 */}
      <section id="section-valence-oxidation" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3.1. Валентность и степень окисления</h2>
              <p className="text-xs sm:text-sm text-slate-500">Число связей атома и условный заряд атома в соединении</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Валентность — число ковалентных связей, которые образует атом в соединении. В отличие от степени окисления, валентность не имеет знака и определяется числом неспаренных электронов, неподелённых электронных пар и вакантных орбиталей атома.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Степень окисления — условный заряд атома в соединении, рассчитанный в предположении, что все связи ионные. Основные правила: в простых веществах степень окисления равна 0; у кислорода обычно равна −2 (кроме пероксидов и фторида кислорода <ChemFormula formula="OF2" className="font-semibold text-slate-900" />); у водорода равна +1 (кроме гидридов металлов); сумма степеней окисления всех атомов в молекуле равна 0.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Валентность — число ковалентных связей, образуемых атомом в соединении.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Степень окисления — условный заряд атома при условии ионной связи.</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Валентность</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Степень окисления</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Пероксиды</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гидриды</span>
        </div>
      </section>

      {/* SECTION 3.2 */}
      <section id="section-covalent" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3.2. Ковалентная связь. Пространственное строение молекул</h2>
              <p className="text-xs sm:text-sm text-slate-500">Общие электронные пары, обменный и донорно-акцепторный механизмы, гибридизация</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Ковалентная связь образуется за счёт общей электронной пары. Неполярная связь возникает между одинаковыми атомами (<ChemFormula formula="H2" className="font-semibold text-slate-900" />, <ChemFormula formula="Cl2" className="font-semibold text-slate-900" />), полярная — между атомами разных неметаллов (<ChemFormula formula="HCl" className="font-semibold text-slate-900" />, <ChemFormula formula="H2O" className="font-semibold text-slate-900" />).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Различают два механизма образования ковалентной связи: обменный (каждый атом даёт по одному неспаренному электрону) и донорно-акцепторный, при котором один атом (донор) предоставляет неподелённую электронную пару, а второй (акцептор) — вакантную орбиталь. Так образуются связи в ионах <ChemFormula formula="NH4+" className="font-semibold text-slate-900" /> и <ChemFormula formula="H3O+" className="font-semibold text-slate-900" />. По геометрии перекрывания выделяют сигма-связь (перекрывание по оси, соединяющей ядра атомов) и пи-связь (перекрывание по обе стороны от оси).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Пространственное строение молекул определяется типом гибридизации: sp3-гибридизация даёт тетраэдрическое окружение (метан, угол 109°28′), sp2 — плоское треугольное, sp — линейное. Из-за неподелённых электронных пар реальные валентные углы отличаются от идеальных: у воды угол 104,5°, у аммиака — около 107°.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NH3 + H+ -> NH4+" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="H2O + H+ -> H3O+" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Донорно-акцепторный механизм</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гибридизация</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Сигма- и пи-связи</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Теория отталкивания электронных пар</span>
        </div>
      </section>

      {/* SECTION 3.3 */}
      <section id="section-ionic-metallic" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3.3. Ионная и металлическая связь</h2>
              <p className="text-xs sm:text-sm text-slate-500">Электростатическое притяжение ионов и обобществлённые электроны металлов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Ионная связь — электростатическое притяжение разноимённо заряженных ионов. Она типична для соединений металлов с неметаллами (<ChemFormula formula="NaCl" className="font-semibold text-slate-900" />, <ChemFormula formula="CaO" className="font-semibold text-slate-900" />) и, в отличие от ковалентной связи, не имеет направленности и насыщаемости.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Металлическая связь — взаимодействие катионов металла с обобществлёнными электронами, так называемым «электронным газом». Именно она обусловливает характерные свойства металлов: электро- и теплопроводность, ковкость, пластичность и металлический блеск.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Ионная связь — электростатическое притяжение разноимённо заряженных ионов.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Металлическая связь — взаимодействие катионов металла с обобществлённым «электронным газом».</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ионная связь</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Металлическая связь</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электронный газ</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ковкость</span>
        </div>
      </section>

      {/* SECTION 3.4 */}
      <section id="section-intermolecular" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3.4. Межмолекулярное взаимодействие</h2>
              <p className="text-xs sm:text-sm text-slate-500">Силы Ван-дер-Ваальса и водородная связь</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Межмолекулярные силы (взаимодействия Ван-дер-Ваальса) значительно слабее химических связей. Выделяют ориентационные силы (между полярными молекулами), индукционные и дисперсионные; дисперсионные силы действуют между любыми частицами.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Водородная связь — взаимодействие атома водорода, связанного с сильно электроотрицательным атомом (<ChemFormula formula="O-H" className="font-semibold text-slate-900" />, <ChemFormula formula="N-H" className="font-semibold text-slate-900" />, <ChemFormula formula="F-H" className="font-semibold text-slate-900" />), с неподелённой парой электронов другого атома. Именно водородная связь объясняет аномально высокие температуры кипения воды, аммиака и фтороводорода.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Взаимодействия Ван-дер-Ваальса — ориентационные, индукционные и дисперсионные силы между молекулами.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Водородная связь — взаимодействие атома водорода при полярной связи с неподелённой парой электронов другого атома.</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Взаимодействие Ван-дер-Ваальса</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Водородная связь</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Температура кипения</span>
        </div>
      </section>

      {/* SECTION 3.5 */}
      <section id="section-crystal-lattices" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3.5. Типы кристаллических решёток</h2>
              <p className="text-xs sm:text-sm text-slate-500">Атомная, молекулярная, ионная и металлическая решётки</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          В твёрдом веществе частицы могут образовывать четыре типа кристаллических решёток, и тип решётки напрямую определяет физические свойства вещества.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Атомная решётка (алмаз, кварц <ChemFormula formula="SiO2" className="font-semibold text-slate-900" />) образована атомами, соединёнными прочными ковалентными связями: такие вещества исключительно твёрдые и тугоплавкие. Молекулярная решётка (иод, «сухой лёд» <ChemFormula formula="CO2" className="font-semibold text-slate-900" />) удерживается слабыми межмолекулярными силами: вещества летучи и легкоплавки. Ионная решётка (<ChemFormula formula="NaCl" className="font-semibold text-slate-900" />) — тугоплавкие, но хрупкие вещества, расплавы и растворы которых проводят электрический ток. Металлическая решётка обеспечивает металлический блеск, электропроводность и пластичность.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Атомная решётка — прочные ковалентные связи между атомами: твёрдость и тугоплавкость.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Молекулярная решётка — слабые межмолекулярные силы: летучесть и легкоплавкость.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Ионная решётка — ионы в узлах решётки: тугоплавкость, хрупкость, проводимость расплавов и растворов.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200">Металлическая решётка — катионы и обобществлённые электроны: блеск, проводимость, пластичность.</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Атомная решётка</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Молекулярная решётка</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ионная решётка</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Металлическая решётка</span>
        </div>
      </section>

      {/* Scaffold status */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-03" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
