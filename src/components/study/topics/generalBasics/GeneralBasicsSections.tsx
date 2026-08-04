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
          Химия изучает вещества — определённые виды материи, обладающие постоянным составом и характерными физическими и химическими свойствами. Каждое чистое вещество имеет постоянные физические свойства (температуры плавления и кипения, плотность), по которым его можно отличить от других веществ.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          В отличие от чистых веществ, смеси — это системы из двух или более веществ, в которых каждый компонент сохраняет свои свойства. Смеси делят на однородные (гомогенные, например, растворы) и неоднородные (гетерогенные, например, смесь песка и воды). Поскольку компоненты смеси не связаны химически, их разделяют физическими методами: фильтрацией, отстаиванием, дистилляцией, кристаллизацией и хроматографией.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Чистое вещество</strong> — вещество с постоянным составом и характерными свойствами</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Однородная смесь</strong> — смесь, в которой компоненты не различимы даже под микроскопом</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Неоднородная смесь</strong> — смесь, в которой компоненты различимы визуально или под микроскопом</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Чистое вещество</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Однородная смесь</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Неоднородная смесь</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Дистилляция</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Хроматография</span>
        </div>
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
          Явления, происходящие с веществами, делят на физические и химические. Физические явления изменяют форму, размеры или агрегатное состояние вещества, но не меняют его состав: например, плавление льда, испарение воды или измельчение куска мела.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Химические явления (химические реакции) сопровождаются превращением исходных веществ в новые вещества с другим составом и свойствами. О протекании реакции судят по признакам: изменению окраски, выпадению осадка, выделению газа, выделению или поглощению теплоты, появлению запаха.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Химическая реакция</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Признаки реакции</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Агрегатные состояния</span>
        </div>
      </section>

      {/* SECTION 1.3 */}
      <section id="section-atoms-elements" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.3. Атомы. Химические элементы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Нуклиды, массовое число и изотопы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Атом — наименьшая частица химического элемента, сохраняющая его химические свойства. Химический элемент — это совокупность атомов с одинаковым зарядом ядра <ChemFormula math="Z" className="font-semibold text-slate-900" />. Каждый вид атомов (нуклид) характеризуется массовым числом <ChemFormula math="A" className="font-semibold text-slate-900" />, равным сумме числа протонов <ChemFormula math="Z" className="font-semibold text-slate-900" /> и нейтронов <ChemFormula math="N" className="font-semibold text-slate-900" />.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Изотопы — атомы одного химического элемента с одинаковым зарядом ядра, но разным числом нейтронов. Изотопы одного элемента имеют практически одинаковые химические свойства, но различаются массами.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="A = Z + N" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="N = A - Z" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Атом</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Химический элемент</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Изотопы</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Нуклид</span>
        </div>
      </section>

      {/* SECTION 1.4 */}
      <section id="section-molecules-theory" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.4. Молекулы. Атомно-молекулярная теория</h2>
              <p className="text-xs sm:text-sm text-slate-500">Основные положения атомно-молекулярного учения</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Молекула — наименьшая частица вещества, сохраняющая его химические свойства. Вещества молекулярного строения (вода <ChemFormula formula="H2O" className="font-semibold text-slate-900" />, углекислый газ <ChemFormula formula="CO2" className="font-semibold text-slate-900" />, кислород <ChemFormula formula="O2" className="font-semibold text-slate-900" />) состоят из молекул; вещества немолекулярного строения (соли, металлы) образованы ионами или атомами.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Основные положения атомно-молекулярной теории: все вещества состоят из молекул, атомов или ионов; частицы находятся в непрерывном хаотическом движении и взаимодействуют между собой; при химических реакциях молекулы исходных веществ превращаются в молекулы продуктов, а атомы при этом сохраняются.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Молекула</strong> — наименьшая частица вещества, сохраняющая его химические свойства</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Атом</strong> — наименьшая частица химического элемента</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Ион</strong> — заряженная частица, образующаяся при потере или присоединении электронов</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Молекула</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Атомно-молекулярная теория</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ион</span>
        </div>
      </section>

      {/* SECTION 1.5 */}
      <section id="section-composition-laws" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.5. Закон постоянства состава. Закон кратных отношений</h2>
              <p className="text-xs sm:text-sm text-slate-500">Стехиометрические законы состава веществ</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Закон постоянства состава (Ж. Пруст, 1801 г.): каждое чистое вещество молекулярного строения имеет постоянный качественный и количественный состав независимо от способа получения. Например, вода в любом случае образована водородом и кислородом в массовом отношении 1 : 8.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Закон кратных отношений (Дж. Дальтон, 1803 г.): если два элемента образуют несколько соединений, то массы одного элемента, приходящиеся на одну и ту же массу другого, относятся как небольшие целые числа. Классический пример — оксиды углерода <ChemFormula formula="CO" className="font-semibold text-slate-900" /> и <ChemFormula formula="CO2" className="font-semibold text-slate-900" />: на одинаковую массу углерода в них приходится одна и две массовые части кислорода.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="H2O" /> <span className="text-slate-500">— постоянный состав воды</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CO" /> <span className="text-slate-500">— оксид углерода(II)</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CO2" /> <span className="text-slate-500">— оксид углерода(IV)</span></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Закон постоянства состава</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Закон кратных отношений</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Стехиометрия</span>
        </div>
      </section>

      {/* SECTION 1.6 */}
      <section id="section-avogadro" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.6. Закон объёмных отношений. Закон Авогадро</h2>
              <p className="text-xs sm:text-sm text-slate-500">Следствия закона Авогадро и молярный объём газа</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Закон объёмных отношений (Ж. Гей-Люссак, 1808 г.): объёмы вступающих в реакцию газов и газообразных продуктов относятся как небольшие целые числа. Например, водород соединяется с кислородом в объёмном отношении 2 : 1.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Закон Авогадро (1811 г.): в равных объёмах любых газов при одинаковых температуре и давлении содержится одинаковое число молекул. Важное следствие закона: один моль любого газа при нормальных условиях (0 °C, 101.325 кПа) занимает одинаковый объём — молярный объём <ChemFormula math="V_m = 22.4\,\text{л/моль}" className="font-semibold text-slate-900" />.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="V_m = 22.4\,\text{л/моль}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="V = n \cdot V_m" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Закон Авогадро</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Молярный объём</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Нормальные условия</span>
        </div>
      </section>

      {/* SECTION 1.7 */}
      <section id="section-simple-complex" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.7. Простые и сложные вещества</h2>
              <p className="text-xs sm:text-sm text-slate-500">Классификация веществ: металлы, неметаллы, бинарные и сложные соединения</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Простые вещества образованы атомами одного химического элемента. По свойствам их делят на металлы (железо, медь, алюминий) и неметаллы (кислород, сера, хлор). Сложные вещества образованы атомами разных элементов: к ним относят бинарные соединения, оксиды, основания, кислоты и соли.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Важно различать химический элемент и образованное им простое вещество: элемент — это совокупность атомов с определённым зарядом ядра, а простое вещество — конкретная форма существования этого элемента (например, кислород как элемент и кислород как газ <ChemFormula formula="O2" className="font-semibold text-slate-900" />).
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Простое вещество</strong> — вещество, образованное атомами одного химического элемента</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Сложное вещество</strong> — вещество, образованное атомами разных химических элементов</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Простое вещество</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Сложное вещество</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Металлы</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Неметаллы</span>
        </div>
      </section>

      {/* SECTION 1.8 */}
      <section id="section-mole" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.8. Атомные и молекулярные массы. Моль. Мольная доля</h2>
              <p className="text-xs sm:text-sm text-slate-500">Количество вещества, молярная масса и число Авогадро</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Относительная атомная масса <ChemFormula math="A_r" className="font-semibold text-slate-900" /> и относительная молекулярная масса <ChemFormula math="M_r" className="font-semibold text-slate-900" /> — безразмерные величины, показывающие, во сколько раз масса атома или молекулы больше 1/12 массы атома углерода. Молярная масса <ChemFormula math="M" className="font-semibold text-slate-900" /> численно равна <ChemFormula math="M_r" className="font-semibold text-slate-900" /> и измеряется в г/моль.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Моль — количество вещества, содержащее <ChemFormula math="6.02\cdot 10^{23}" className="font-semibold text-slate-900" /> структурных единиц (атомов, молекул, ионов); это число называют числом Авогадро <ChemFormula math="N_A" className="font-semibold text-slate-900" />. Мольная доля компонента смеси — отношение его количества вещества к суммарному количеству вещества всех компонентов смеси.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="N_A = 6.02\cdot 10^{23}\,\text{моль}^{-1}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="n = \dfrac{m}{M}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="n = \dfrac{V}{V_m}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="x_i = \dfrac{n_i}{n_{\text{см}}}" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Моль</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Молярная масса</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Число Авогадро</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Мольная доля</span>
        </div>
      </section>

      {/* SECTION 1.9 */}
      <section id="section-gas-laws" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.9. Газовые законы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Уравнение состояния идеального газа и законы Бойля — Мариотта, Гей-Люссака, Шарля и Дальтона</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Состояние идеального газа описывает уравнение Клапейрона — Менделеева <ChemFormula math="pV = nRT" className="font-semibold text-slate-900" />, объединяющее основные газовые законы. Из него следуют частные случаи: закон Бойля — Мариотта (при постоянной температуре произведение давления газа на его объём постоянно), закон Гей-Люссака (при постоянном давлении объём пропорционален температуре) и закон Шарля (при постоянном объёме давление пропорционально температуре).
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Для смесей газов действует закон Дальтона: общее давление смеси равно сумме парциальных давлений её компонентов, причём парциальное давление газа пропорционально его мольной доле в смеси.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="pV = nRT" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="pV = \text{const}\;\;(T = \text{const})" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\dfrac{V}{T} = \text{const}\;\;(p = \text{const})" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\dfrac{p}{T} = \text{const}\;\;(V = \text{const})" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="p_{\text{общ}} = p_1 + p_2 + \ldots" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Идеальный газ</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Уравнение Клапейрона — Менделеева</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Парциальное давление</span>
        </div>
      </section>

      {/* SECTION 1.10 */}
      <section id="section-equivalents" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1.10. Эквивалент. Закон эквивалентов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Молярная масса эквивалента и расчёты по закону эквивалентов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Химический эквивалент — реальная или условная частица, эквивалентная одному иону водорода в данной кислотно-основной реакции. Молярная масса эквивалента зависит от природы вещества: для кислоты она равна молярной массе, делённой на основность, для основания — делённой на кислотность, для соли — делённой на произведение заряда катиона и числа катионов в формульной единице.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Закон эквивалентов: вещества реагируют в количествах, пропорциональных их эквивалентам, — то есть числа молей эквивалентов реагирующих веществ равны между собой.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_{\text{экв}}(\text{кислоты}) = \dfrac{M}{\text{основность}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_{\text{экв}}(\text{основания}) = \dfrac{M}{\text{кислотность}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="M_{\text{экв}}(\text{соли}) = \dfrac{M}{z_{\text{кат}} \cdot n_{\text{кат}}}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\dfrac{m_A}{M_{\text{экв}}(A)} = \dfrac{m_B}{M_{\text{экв}}(B)}" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Эквивалент</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Молярная масса эквивалента</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Закон эквивалентов</span>
        </div>
      </section>

      {/* SCAFFOLD STATUS */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-01" onGoToPractice={handleGoToPractice} />

    </div>
  );
};
