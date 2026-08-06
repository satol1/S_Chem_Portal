import React from 'react';
import { FlaskConical, BookOpen, CheckCircle2 } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import {
  MixturesClassificationInfographic,
  MultipleProportionsInfographic,
  GasLawsInfographic,
} from './GeneralBasicsInfographics';
import { MoleHubConceptFlow } from './GeneralBasicsConceptFlow';
import {
  GeneralBasicsDarkBlock1,
  GeneralBasicsDarkBlock2,
  GeneralBasicsDarkBlock3,
} from './GeneralBasicsDarkBlocks';
import {
  GeneralBasicsFactChromatography,
  GeneralBasicsFactHeavyWater,
  GeneralBasicsFactMole,
} from './GeneralBasicsFunFacts';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

/** Ключевые термины секции — единый формат чипов */
const TermChips: React.FC<{ terms: string[] }> = ({ terms }) => (
  <div className="flex flex-wrap items-center gap-2 pt-1">
    <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
    {terms.map((term) => (
      <span key={term} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">
        {term}
      </span>
    ))}
  </div>
);

export const GeneralBasicsSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 1.1 */}
      <section id="section-substances" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.1. Вещества и смеси. Разделение смесей</h2>
              <p className="text-xs sm:text-sm text-slate-500">Чистые вещества, гомогенные и гетерогенные смеси, физические методы разделения</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Химия изучает вещества — определённые виды материи, обладающие постоянным составом и характерными
          физическими и химическими свойствами. Каждое чистое вещество имеет постоянные физические свойства
          (температуры плавления и кипения, плотность), по которым его можно отличить от других веществ.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          В отличие от чистых веществ, смеси — это системы из двух или более компонентов, в которых каждый
          компонент сохраняет свои свойства. Смеси делят на однородные (гомогенные, например воздух или
          растворы) и неоднородные (гетерогенные, например смесь песка и воды). Поскольку компоненты смеси
          не связаны химически, их разделяют физическими методами.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="space-y-2 text-xs sm:text-sm">
            <span className="font-bold text-slate-900 text-base block">Классификация: чистое вещество или смесь?</span>
            <p className="text-slate-600 font-normal">
              Критерий — постоянство состава и свойств. Чистая вода кипит при 100 °C строго при 101.325 кПа,
              а раствор соли — при более высокой температуре, и температура кипения растёт по мере выпаривания.
              Классическая гомогенная смесь — воздух: <ChemFormula formula="N2" className="font-semibold" /> ≈ 78 %,{' '}
              <ChemFormula formula="O2" className="font-semibold" /> ≈ 21 %, аргон ≈ 0.93 % и{' '}
              <ChemFormula formula="CO2" className="font-semibold" /> ≈ 0.04 % по объёму.
            </p>
          </div>
          <MixturesClassificationInfographic />
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Метод разделения</th>
                <th className="p-3.5">На чём основан</th>
                <th className="p-3.5">Пример применения</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Фильтрация</td><td className="p-3.5">Различие в размерах частиц</td><td className="p-3.5">Песок и вода</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Отстаивание</td><td className="p-3.5">Различие в плотностях компонентов</td><td className="p-3.5">Масло и вода, мел и вода</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900"><TermTooltip term="Дистилляция" definition="Перегонка: испарение жидкости с последующей конденсацией пара; разделяет компоненты с разными температурами кипения." /> (перегонка)</td><td className="p-3.5">Различие в температурах кипения</td><td className="p-3.5">Получение дистиллированной воды, нефтепереработка</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Кристаллизация</td><td className="p-3.5">Различие в растворимости при изменении температуры</td><td className="p-3.5">Получение солей из растворов</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900"><TermTooltip term="Хроматография" definition="Метод разделения смесей, основанный на различии в способности компонентов сорбироваться на поверхности сорбента." /> </td><td className="p-3.5">Различие в сорбируемости компонентов</td><td className="p-3.5">Разделение красителей, аминокислот</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Действие магнитом</td><td className="p-3.5">Различие в магнитных свойствах</td><td className="p-3.5">Железные опилки и сера</td></tr>
            </tbody>
          </table>
        </div>

        <GeneralBasicsFactChromatography />

        <TermChips terms={['Чистое вещество', 'Однородная смесь', 'Неоднородная смесь', 'Дистилляция', 'Хроматография']} />
      </section>

      {/* SECTION 1.2 */}
      <section id="section-phenomena" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.2. Физические и химические явления</h2>
              <p className="text-xs sm:text-sm text-slate-500">Признаки химических реакций и их отличие от физических явлений</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Явления, происходящие с веществами, делят на физические и химические. Физические явления изменяют
          форму, размеры или агрегатное состояние вещества, но не его состав: плавление льда, испарение воды,
          измельчение куска мела.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Химические явления (химические реакции) сопровождаются превращением исходных веществ в новые вещества
          с другим составом и свойствами. О протекании реакции судят по наблюдаемым признакам.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-700" />
              <span>Признаки химических реакций</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>изменение окраски</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>выпадение или растворение осадка</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>выделение газа</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>выделение или поглощение теплоты (иногда света)</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>появление запаха</span></li>
            </ul>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-slate-700" />
              <span>Примеры для сравнения</span>
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700">
                <strong className="text-slate-900">Физические:</strong> плавление льда, кипение воды, измельчение сахара, растворение сахара в воде
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700">
                <strong className="text-slate-900">Химические:</strong> ржавление железа, горение древесины, скисание молока
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Тепловой эффект реакции</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            По тепловому эффекту реакции делят на <strong className="text-emerald-800">экзотермические</strong> (с
            выделением теплоты, например горение) и <strong className="text-rose-800">эндотермические</strong> (с
            поглощением теплоты, например разложение известняка при прокаливании). Типичная экзотермическая
            реакция — горение метана: <ChemFormula formula="CH4 + 2O2 -> CO2 + 2H2O" className="font-bold text-slate-900" />.
          </p>
        </div>

        <TermChips terms={['Химическая реакция', 'Признаки реакции', 'Экзотермическая реакция', 'Эндотермическая реакция']} />
      </section>

      {/* SECTION 1.3 */}
      <section id="section-conservation" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.3. Закон сохранения массы и энергии</h2>
              <p className="text-xs sm:text-sm text-slate-500">Первый количественный закон химии — фундамент стехиометрии</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Закон сохранения массы: масса веществ, вступивших в химическую реакцию, равна массе веществ,
          образовавшихся в результате реакции — <ChemFormula math="m(\text{реагентов}) = m(\text{продуктов})" className="font-semibold text-slate-900" />.
          С позиций атомно-молекулярной теории закон объясняется просто: при химических реакциях атомы не
          создаются и не уничтожаются, а только перегруппировываются, поэтому число атомов каждого элемента
          до и после реакции одинаково.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Именно поэтому химические уравнения уравнивают коэффициентами, и именно на этом законе основаны все
          стехиометрические расчёты: от массы реагентов и продуктов до выхода продукта. Закон выполняется для
          любых реакций, например: <ChemFormula formula="2H2 + O2 -> 2H2O" className="font-bold text-slate-900" /> —
          масса 4 г водорода и 32 г кислорода даёт ровно 36 г воды.
        </p>

        <GeneralBasicsDarkBlock1 />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Сохранение энергии</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Наряду с массой в реакциях сохраняется и энергия: она не возникает из ничего и не исчезает, а только
            переходит из одной формы в другую. Экзотермическая реакция отдаёт окружающей среде ровно то
            количество энергии, на которое продукты беднее реагентов по запасу энергии в химических связях.
          </p>
        </div>

        <TermChips terms={['Закон сохранения массы', 'Закон сохранения энергии', 'Стехиометрия']} />
      </section>

      {/* SECTION 1.4 */}
      <section id="section-atoms-elements" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.4. Атомы. Химические элементы. Изотопы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Нуклиды, массовое число и изотопный состав элементов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Атом — наименьшая частица химического элемента, сохраняющая его химические свойства; атом состоит из
          положительно заряженного ядра (протоны и нейтроны) и электронной оболочки. Химический элемент — это
          совокупность атомов с одинаковым зарядом ядра <ChemFormula math="Z" className="font-semibold text-slate-900" />;
          известно 118 элементов. Само слово «атом» происходит от греческого «неделимый» — понятие ввёл ещё
          Демокрит в V–IV вв. до н. э.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Каждый вид атомов (<TermTooltip term="Нуклид" definition="Вид атомов с определённым зарядом ядра Z и массовым числом A." />)
          характеризуется массовым числом <ChemFormula math="A" className="font-semibold text-slate-900" />, равным сумме
          числа протонов и нейтронов. Изотопы — атомы одного элемента с одинаковым зарядом ядра, но разным
          числом нейтронов: их химические свойства практически одинаковы, а массы различаются.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и константы</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="A = Z + N" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="N = A - Z" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="1\,\text{а.е.м.} = \dfrac{1}{12}\,m(^{12}\mathrm{C}) = 1.6605\cdot10^{-27}\,\text{кг}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="A_r(^{35}\mathrm{Cl}) \approx 35.45\;\text{(смесь изотопов)}" /></div>
          </div>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Нуклид</th>
                <th className="p-3.5">Z (протоны)</th>
                <th className="p-3.5">N (нейтроны)</th>
                <th className="p-3.5">A = Z + N</th>
                <th className="p-3.5">Название и распространённость</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-mono font-semibold">¹H</td><td className="p-3.5 font-mono">1</td><td className="p-3.5 font-mono">0</td><td className="p-3.5 font-mono">1</td><td className="p-3.5">протий — основной изотоп водорода</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-mono font-semibold">²H (D)</td><td className="p-3.5 font-mono">1</td><td className="p-3.5 font-mono">1</td><td className="p-3.5 font-mono">2</td><td className="p-3.5">дейтерий — ≈ 0.015 % атомов водорода в природе</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-mono font-semibold">³H (T)</td><td className="p-3.5 font-mono">1</td><td className="p-3.5 font-mono">2</td><td className="p-3.5 font-mono">3</td><td className="p-3.5">тритий — радиоактивный изотоп водорода</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-mono font-semibold">³⁵Cl</td><td className="p-3.5 font-mono">17</td><td className="p-3.5 font-mono">18</td><td className="p-3.5 font-mono">35</td><td className="p-3.5">≈ 75.77 % атомов хлора</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-mono font-semibold">³⁷Cl</td><td className="p-3.5 font-mono">17</td><td className="p-3.5 font-mono">20</td><td className="p-3.5 font-mono">37</td><td className="p-3.5">≈ 24.23 % атомов хлора</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic">
          Средневзвешенная по изотопному составу относительная атомная масса хлора равна ≈ 35.45, поэтому в расчётах используют округлённое значение 35.5.
        </p>

        <GeneralBasicsFactHeavyWater />

        <TermChips terms={['Атом', 'Химический элемент', 'Нуклид', 'Изотопы']} />
      </section>

      {/* SECTION 1.5 */}
      <section id="section-molecules-theory" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.5. Молекулы. Атомно-молекулярная теория</h2>
              <p className="text-xs sm:text-sm text-slate-500">Основные положения учения и его исторические вехи</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Молекула — наименьшая частица вещества, сохраняющая его химические свойства; молекулы состоят из
          атомов, связанных химическими связями. Вещества молекулярного строения (вода, углекислый газ,
          кислород, аммиак, органические вещества) состоят из молекул; вещества немолекулярного строения
          образованы ионами (соли, щёлочи) или атомами (металлы, алмаз, кремний).
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Атомно-молекулярная теория объясняет строение веществ и суть химических превращений; её основные
          положения — понятийный каркас всего курса химии.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Основные положения атомно-молекулярной теории</span>
          </h4>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">1</span>
              <span>Все вещества состоят из молекул, атомов или ионов.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
              <span>Частицы находятся в непрерывном хаотическом движении и взаимодействуют между собой.</span>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
              <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
              <span>При химических реакциях молекулы исходных веществ разрушаются, атомы перегруппировываются в молекулы продуктов; атомы при этом сохраняются.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">1741</span>
            <h5 className="font-bold text-slate-900 text-sm">М. В. Ломоносов</h5>
            <p className="text-xs text-slate-600 leading-relaxed">«Элементы математической химии»: различал «корпускулы» (молекулы) и «элементы» (атомы), объяснял теплоту движением частиц.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">1803–1808</span>
            <h5 className="font-bold text-slate-900 text-sm">Дж. Дальтон</h5>
            <p className="text-xs text-slate-600 leading-relaxed">Атомистическая теория: элементы состоят из атомов с характерной атомной массой; первые химические символы элементов.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">1811</span>
            <h5 className="font-bold text-slate-900 text-sm">А. Авогадро</h5>
            <p className="text-xs text-slate-600 leading-relaxed">Молекулярная гипотеза: газы состоят из молекул; молекулы простых газов могут содержать несколько атомов (H₂, O₂).</p>
          </div>
        </div>

        <GeneralBasicsDarkBlock2 />

        <TermChips terms={['Молекула', 'Атомно-молекулярная теория', 'Ион', 'Вещества молекулярного строения']} />
      </section>

      {/* SECTION 1.6 */}
      <section id="section-composition-laws" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.6. Закон постоянства состава. Закон кратных отношений</h2>
              <p className="text-xs sm:text-sm text-slate-500">Стехиометрические законы состава веществ</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Закон постоянства состава (Ж. Л. Пруст, конец XVIII в.; в российской школьной традиции — 1801 г.):
          каждое чистое вещество молекулярного строения имеет постоянный качественный и количественный состав
          независимо от способа получения. Например, вода в любом случае образована водородом и кислородом в
          массовом отношении 1 : 8. Гипотезе Пруста возражал К. Л. Бертолле (1803), считавший состав
          соединений переменным; спор продолжался около 8 лет, и закон был признан после развития атомной
          теории Дальтона и точных количественных анализов Й. Берцелиуса (~1811–1812).
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Закон кратных отношений (Дж. Дальтон, 1803 г.): если два элемента образуют несколько соединений, то
          массы одного элемента, приходящиеся на одну и ту же массу другого, относятся как небольшие целые
          числа. Классический пример — ряд оксидов азота: массы кислорода, приходящиеся на 14 г азота,
          образуют последовательность 8, 16, 24, 32, 40 г — отношение 1 : 2 : 3 : 4 : 5.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="space-y-2 text-xs sm:text-sm">
            <span className="font-bold text-slate-900 text-base block">Целочисленная последовательность — следствие дискретности атомов</span>
            <p className="text-slate-600 font-normal">
              Кислород присоединяется к азоту «порциями» по числу атомов в молекуле, поэтому массы кислорода
              в ряду <ChemFormula formula="N2O" className="font-semibold" /> → <ChemFormula formula="NO" className="font-semibold" /> →{' '}
              <ChemFormula formula="N2O3" className="font-semibold" /> → <ChemFormula formula="NO2" className="font-semibold" /> →{' '}
              <ChemFormula formula="N2O5" className="font-semibold" /> растут в 1, 2, 3, 4, 5 раз. Тот же закон иллюстрируют
              оксиды углерода: в <ChemFormula formula="CO" className="font-semibold" /> и <ChemFormula formula="CO2" className="font-semibold" /> на
              12 г углерода приходится 16 и 32 г кислорода — отношение 1 : 2.
            </p>
          </div>
          <MultipleProportionsInfographic />
        </div>

        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Оксид азота</th>
                <th className="p-3.5">Масса O на 14 г азота</th>
                <th className="p-3.5">Отношение</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors"><td className="p-3.5"><ChemFormula formula="N2O" className="font-semibold" /> — оксид азота(I)</td><td className="p-3.5 font-mono">8 г</td><td className="p-3.5 font-mono text-amber-800 font-bold">1</td></tr>
              <tr className="hover:bg-amber-100/50 transition-colors"><td className="p-3.5"><ChemFormula formula="NO" className="font-semibold" /> — оксид азота(II)</td><td className="p-3.5 font-mono">16 г</td><td className="p-3.5 font-mono text-amber-800 font-bold">2</td></tr>
              <tr className="hover:bg-amber-100/50 transition-colors"><td className="p-3.5"><ChemFormula formula="N2O3" className="font-semibold" /> — оксид азота(III)</td><td className="p-3.5 font-mono">24 г</td><td className="p-3.5 font-mono text-amber-800 font-bold">3</td></tr>
              <tr className="hover:bg-amber-100/50 transition-colors"><td className="p-3.5"><ChemFormula formula="NO2" className="font-semibold" /> — оксид азота(IV)</td><td className="p-3.5 font-mono">32 г</td><td className="p-3.5 font-mono text-amber-800 font-bold">4</td></tr>
              <tr className="hover:bg-amber-100/50 transition-colors"><td className="p-3.5"><ChemFormula formula="N2O5" className="font-semibold" /> — оксид азота(V)</td><td className="p-3.5 font-mono">40 г</td><td className="p-3.5 font-mono text-amber-800 font-bold">5</td></tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Дальтониды и бертоллиды</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Закон постоянства состава строго выполняется для{' '}
            <TermTooltip term="далтонидов" definition="Дальтониды — стехиометрические соединения постоянного состава: молекулярные вещества и большинство ионных соединений (солей)." /> —
            молекулярных веществ и большинства ионных соединений. Исключение —{' '}
            <TermTooltip term="бертоллиды" definition="Бертоллиды — нестехиометрические соединения переменного состава, например оксид железа(II) FeₓO (x < 1), карбиды и гидриды d-металлов." />:
            соединения переменного состава, например оксид железа(II) переменного состава FeₓO (x &lt; 1),
            карбиды, гидриды и оксиды d-металлов.
          </p>
        </div>

        <TermChips terms={['Закон постоянства состава', 'Закон кратных отношений', 'Стехиометрия', 'Дальтониды', 'Бертоллиды']} />
      </section>

      {/* SECTION 1.7 */}
      <section id="section-avogadro" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.7. Закон объёмных отношений. Закон Авогадро</h2>
              <p className="text-xs sm:text-sm text-slate-500">Следствия закона Авогадро и молярный объём газа</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Закон объёмных отношений (Ж. Л. Гей-Люссак, 1808 г.): объёмы вступающих в реакцию газов и
          газообразных продуктов относятся как небольшие целые числа. Например, водород соединяется с хлором в
          отношении 1 : 1 : 2 (<ChemFormula formula="H2 + Cl2 -> 2HCl" className="font-semibold" />), а с кислородом —
          2 : 1 : 2. Закон Авогадро (1811 г.): в равных объёмах любых газов при одинаковых температуре и
          давлении содержится одинаковое число молекул.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Из закона Авогадро следуют важнейшие расчётные инструменты: молярный объём газов при нормальных
          условиях и относительная плотность газа. Нормальные условия (н. у.) — температура 0 °C (273.15 К)
          и давление 101.325 кПа (1 атм).
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="V_m = 22.4\,\text{л/моль (н. у.)}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="V = n \cdot V_m" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="D = \dfrac{M_1}{M_2}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="D_{\text{возд}} = \dfrac{M}{29}" /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <GeneralBasicsDarkBlock3 />
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-700" />
              <span>Следствия закона Авогадро</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>1 моль любого газа при н. у. занимает одинаковый объём 22.4 л.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <TermTooltip term="Относительная плотность" definition="Относительная плотность газа — отношение молярных масс двух газов: D = M₁/M₂; показывает, во сколько раз один газ тяжелее другого." />{' '}
                  одного газа по другому равна отношению их молярных масс; чаще всего используют плотность по
                  воздуху <ChemFormula math="(M \approx 29\,\text{г/моль})" className="font-semibold" /> и по водороду{' '}
                  <ChemFormula math="(M = 2\,\text{г/моль})" className="font-semibold" />.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Газ легче воздуха, если его молярная масса меньше 29 г/моль (например, <ChemFormula formula="H2" className="font-semibold" />, <ChemFormula formula="CH4" className="font-semibold" />, <ChemFormula formula="NH3" className="font-semibold" />).</span>
              </li>
            </ul>
          </div>
        </div>

        <TermChips terms={['Закон Авогадро', 'Молярный объём', 'Нормальные условия', 'Относительная плотность газа']} />
      </section>

      {/* SECTION 1.8 */}
      <section id="section-simple-complex" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.8. Простые и сложные вещества</h2>
              <p className="text-xs sm:text-sm text-slate-500">Классификация веществ: металлы, неметаллы и классы неорганических соединений</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Простые вещества образованы атомами одного химического элемента. По свойствам их делят на металлы
          (железо, медь, алюминий) и неметаллы (кислород, сера, хлор). Некоторые элементы образуют несколько
          простых веществ с разным строением и свойствами — это{' '}
          <TermTooltip term="аллотропия" definition="Аллотропия — способность химического элемента образовывать несколько простых веществ с разным строением и свойствами (O₂ и O₃; алмаз, графит и фуллерен)." />{' '}
          (кислород и озон, алмаз и графит, белый и красный фосфор).
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Сложные вещества образованы атомами разных элементов. Важно различать химический элемент и
          образованное им простое вещество: «кислород» как элемент входит в состав воды и оксидов, а
          «кислород» как простое вещество — это газ <ChemFormula formula="O2" className="font-semibold text-slate-900" />.
        </p>

        {/* Tree-диаграмма: классификация веществ */}
        <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h4 className="font-bold text-slate-900 text-sm">Классификация веществ</h4>
            <span className="text-xs text-slate-500">простые и сложные вещества</span>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[720px] flex items-stretch gap-4">
              <div className="flex items-center">
                <div className="p-4 rounded-xl bg-white border-2 border-amber-400/70 shadow-xs">
                  <span className="font-bold text-slate-900 text-sm block">Вещества</span>
                  <span className="text-xs text-slate-500">по составу</span>
                </div>
              </div>

              <svg viewBox="0 0 100 260" className="w-24 self-stretch shrink-0" preserveAspectRatio="none">
                <defs>
                  <marker id="gb-tree-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </marker>
                </defs>
                <path d="M 0 130 C 40 130 50 65 92 65" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-slate-400" markerEnd="url(#gb-tree-arrow)" />
                <path d="M 0 130 C 40 130 50 195 92 195" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-slate-400" markerEnd="url(#gb-tree-arrow)" />
              </svg>

              <div className="flex-1 grid grid-cols-1 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-900 text-sm block">Простые вещества — один элемент</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-slate-700">
                      <strong className="text-slate-900 block">Металлы</strong>
                      <ChemFormula formula="Fe" className="font-semibold" />, <ChemFormula formula="Cu" className="font-semibold" />, <ChemFormula formula="Al" className="font-semibold" />, <ChemFormula formula="Na" className="font-semibold" />
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-slate-700">
                      <strong className="text-slate-900 block">Неметаллы</strong>
                      <ChemFormula formula="O2" className="font-semibold" />, <ChemFormula formula="S" className="font-semibold" />, <ChemFormula formula="Cl2" className="font-semibold" />, <ChemFormula formula="C" className="font-semibold" />
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <span className="font-bold text-slate-900 text-sm block">Сложные вещества — разные элементы</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-slate-700">
                      <strong className="text-slate-900 block">Бинарные соединения</strong>
                      оксиды (<ChemFormula formula="CaO" className="font-semibold" />, <ChemFormula formula="CO2" className="font-semibold" />), летучие водородные (<ChemFormula formula="HCl" className="font-semibold" />, <ChemFormula formula="NH3" className="font-semibold" />, <ChemFormula formula="H2S" className="font-semibold" />), бинарные соли (<ChemFormula formula="NaCl" className="font-semibold" />, <ChemFormula formula="CaF2" className="font-semibold" />)
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-slate-700">
                      <strong className="text-slate-900 block">Гидроксиды</strong>
                      основания (<ChemFormula formula="NaOH" className="font-semibold" />), амфотерные гидроксиды (<ChemFormula formula="Al(OH)3" className="font-semibold" />, <ChemFormula formula="Zn(OH)2" className="font-semibold" />)
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-slate-700">
                      <strong className="text-slate-900 block">Кислоты</strong>
                      <ChemFormula formula="HCl" className="font-semibold" />, <ChemFormula formula="H2SO4" className="font-semibold" />, <ChemFormula formula="HNO3" className="font-semibold" />, <ChemFormula formula="H3PO4" className="font-semibold" />
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-slate-700">
                      <strong className="text-slate-900 block">Соли</strong>
                      средние (<ChemFormula formula="NaCl" className="font-semibold" />), кислые (<ChemFormula formula="NaHSO4" className="font-semibold" />), основные (<ChemFormula formula="(CuOH)2CO3" className="font-semibold" />)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TermChips terms={['Простое вещество', 'Сложное вещество', 'Металлы', 'Неметаллы', 'Аллотропия']} />
      </section>

      {/* SECTION 1.9 */}
      <section id="section-mole" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.9. Относительные массы. Моль. Молярная масса</h2>
              <p className="text-xs sm:text-sm text-slate-500">Количество вещества, число Авогадро и мольная доля</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Относительная атомная масса <ChemFormula math="A_r" className="font-semibold text-slate-900" /> и
          относительная молекулярная масса <ChemFormula math="M_r" className="font-semibold text-slate-900" /> —
          безразмерные величины, показывающие, во сколько раз масса атома или молекулы больше 1/12 массы атома
          углерода-12. Молярная масса <ChemFormula math="M" className="font-semibold text-slate-900" /> — масса одного
          моля вещества, г/моль; она численно равна <ChemFormula math="M_r" className="font-semibold text-slate-900" />.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Моль — количество вещества, содержащее <ChemFormula math="6.02\cdot10^{23}" className="font-semibold text-slate-900" /> структурных
          единиц (атомов, молекул, ионов); это число называют числом Авогадро <ChemFormula math="N_A" className="font-semibold text-slate-900" />.
          Моль связывает массу, число частиц и объём газа — это главная расчётная величина химии.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="space-y-2 text-xs sm:text-sm">
            <span className="font-bold text-slate-900 text-base block">Три дороги к количеству вещества</span>
            <p className="text-slate-600 font-normal">
              Зная массу, число частиц или объём газа при н. у., можно найти количество вещества — и наоборот.
              Пример: порция воды массой 36 г — это <ChemFormula math="n = \dfrac{36}{18} = 2" className="font-semibold" /> моль,
              то есть <ChemFormula math="1.204\cdot10^{24}" className="font-semibold" /> молекул.
            </p>
          </div>
          <MoleHubConceptFlow />
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="N_A = 6.02\cdot10^{23}\,\text{моль}^{-1}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="n = \dfrac{m}{M}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="n = \dfrac{N}{N_A}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="n = \dfrac{V}{V_m}\;\;(\text{газы})" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="x_i = \dfrac{n_i}{n_{\text{см}}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_r(\mathrm{H_2O}) = 18;\;M_r(\mathrm{CO_2}) = 44" /></div>
          </div>
        </div>

        <GeneralBasicsFactMole />

        <TermChips terms={['Моль', 'Молярная масса', 'Число Авогадро', 'Мольная доля']} />
      </section>

      {/* SECTION 1.10 */}
      <section id="section-gas-laws" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.10. Газовые законы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Уравнение состояния идеального газа и изопроцессы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Состояние газа задают три параметра — давление <ChemFormula math="p" className="font-semibold text-slate-900" />,
          объём <ChemFormula math="V" className="font-semibold text-slate-900" /> и абсолютная температура <ChemFormula math="T" className="font-semibold text-slate-900" />.
          Идеальный газ — модель, в которой размеры молекул и их взаимодействие пренебрежимо малы; реальные
          газы близки к идеальному при низких давлениях и высоких температурах. Объединяет все газовые законы
          уравнение Клапейрона — Менделеева.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Для смесей газов действует закон Дальтона: общее давление смеси равно сумме парциальных давлений её
          компонентов, причём парциальное давление газа пропорционально его мольной доле в смеси.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="space-y-2 text-xs sm:text-sm">
            <span className="font-bold text-slate-900 text-base block">Изопроцессы и уравнение состояния</span>
            <p className="text-slate-600 font-normal">
              При фиксации одного из параметров уравнение состояния вырождается в частный закон: изотерму
              Бойля — Мариотта, изобару Гей-Люссака или изохору Шарля. Универсальная газовая постоянная
              связывает все величины: <ChemFormula math="R = 8.314\,\dfrac{\text{Дж}}{\text{моль}\cdot\text{К}}" className="font-semibold" />.
            </p>
          </div>
          <GasLawsInfographic />
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Закон</th>
                <th className="p-3.5">Условия</th>
                <th className="p-3.5">Формула</th>
                <th className="p-3.5">Кто установил</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Бойля — Мариотта</td><td className="p-3.5"><ChemFormula math="T = \text{const}" /></td><td className="p-3.5"><ChemFormula math="pV = \text{const}" /></td><td className="p-3.5">Р. Бойль (1662); Э. Мариотт (1676, по другим данным 1679)</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Гей-Люссака</td><td className="p-3.5"><ChemFormula math="p = \text{const}" /></td><td className="p-3.5"><ChemFormula math="\dfrac{V}{T} = \text{const}" /></td><td className="p-3.5">Ж. Л. Гей-Люссак (1802)</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Шарля</td><td className="p-3.5"><ChemFormula math="V = \text{const}" /></td><td className="p-3.5"><ChemFormula math="\dfrac{p}{T} = \text{const}" /></td><td className="p-3.5">Ж. Шарль (1787; опубликован Гей-Люссаком в 1802)</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Дальтона</td><td className="p-3.5">смесь газов</td><td className="p-3.5"><ChemFormula math="p_{\text{общ}} = p_1 + p_2 + \ldots" /></td><td className="p-3.5">Дж. Дальтон (1801)</td></tr>
              <tr className="hover:bg-slate-50/80 transition-colors"><td className="p-3.5 font-semibold text-slate-900">Клапейрона — Менделеева</td><td className="p-3.5">уравнение состояния</td><td className="p-3.5"><ChemFormula math="pV = nRT" /></td><td className="p-3.5">Э. Клапейрон (1834); Д. И. Менделеев (1874)</td></tr>
            </tbody>
          </table>
        </div>

        <TermChips terms={['Идеальный газ', 'Уравнение Клапейрона — Менделеева', 'Парциальное давление', 'Изопроцесс']} />
      </section>

      {/* SECTION 1.11 */}
      <section id="section-equivalents" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.11. Эквивалент. Закон эквивалентов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Молярная масса эквивалента и расчёты по закону эквивалентов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          <TermTooltip term="Химический эквивалент" definition="Реальная или условная частица, эквивалентная одному иону водорода в данной кислотно-основной реакции или одному электрону в данной ОВР." /> —
          реальная или условная частица, эквивалентная одному иону водорода в данной кислотно-основной реакции
          (или одному электрону в данной ОВР). Эквивалент одного и того же вещества может различаться в разных
          реакциях — это ключевая тонкость темы.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Закон эквивалентов (И. Б. Рихтер, 1792–1794 — в российской литературе часто 1793 г.; с опорой на
          более ранние работы К. Венцеля, 1777): вещества реагируют в количествах, пропорциональных их
          эквивалентам, — то есть числа молей эквивалентов реагирующих веществ равны между собой.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Молярная масса эквивалента</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_{\text{экв}}(\text{кислоты}) = \dfrac{M}{\text{число замещённых H}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_{\text{экв}}(\text{основания}) = \dfrac{M}{\text{кислотность}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_{\text{экв}}(\text{соли}) = \dfrac{M}{z_{\text{кат}} \cdot n_{\text{кат}}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\dfrac{m_A}{M_{\text{экв}}(A)} = \dfrac{m_B}{M_{\text{экв}}(B)}" /></div>
          </div>
          <p className="text-xs text-slate-500 italic">
            Здесь <TermTooltip term="фактор эквивалентности" definition="Фактор эквивалентности — доля частицы, эквивалентная одному иону H⁺ (или одному электрону в ОВР); f ≤ 1, M(экв) = f·M." /> определяется
            конкретной реакцией: для <ChemFormula formula="H2SO4" className="font-semibold" /> в реакции до{' '}
            <ChemFormula formula="NaHSO4" className="font-semibold" /> — <ChemFormula math="M_{\text{экв}} = 98\,\text{г/моль}" className="font-semibold" />,
            а в реакции до <ChemFormula formula="Na2SO4" className="font-semibold" /> — <ChemFormula math="M_{\text{экв}} = 49\,\text{г/моль}" className="font-semibold" />.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-amber-50/40 border border-amber-200/80 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Пример расчёта по закону эквивалентов</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            На нейтрализацию 4.9 г серной кислоты в реакции{' '}
            <ChemFormula formula="H2SO4 + 2NaOH -> Na2SO4 + 2H2O" className="font-semibold text-slate-900" /> потребуется:
            <ChemFormula math="n(\text{экв}) = \dfrac{4.9}{49} = 0.1\,\text{моль}" className="font-semibold text-slate-900" /> эквивалента
            щёлочи, то есть <ChemFormula math="m(\mathrm{NaOH}) = 0.1 \cdot 40 = 4.0\,\text{г}" className="font-semibold text-slate-900" />.
          </p>
        </div>

        <TermChips terms={['Эквивалент', 'Фактор эквивалентности', 'Молярная масса эквивалента', 'Закон эквивалентов']} />
      </section>

      {/* SECTION 1.12: 3D */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.12. Молекулы в 3D</h2>
              <p className="text-xs sm:text-sm text-slate-500">Интерактивные модели простых веществ и соединений из атомно-молекулярной теории</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Атомно-молекулярная теория оживает, когда видишь реальные формы молекул: линейный углекислый газ,
          угловую молекулу воды, тетраэдры метана и пирамиды аммиака. Все модели ниже построены по
          экспериментальным длинам связей и валентным углам.
        </p>

        <MoleculeViewer3D
          moleculeIds={['h2', 'n2', 'o2', 'h2o', 'co2', 'ch4', 'nh3', 'hcl', 'cl2']}
          initialSelectedId="h2o"
          title="Интерактивные 3D-модели молекул"
        />

        <p className="text-xs text-slate-500 italic">
          Вращайте модель мышью, переключайте молекулы и открывайте справочные параметры: длины связей, энергии связей и занимательные факты.
        </p>
      </section>

      {/* Practice Banner */}
      <PracticeBanner topicCode="ОХ-01" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
