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

export const ReactionClassificationSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 1 */}
      <section id="section-general-concepts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.1. Общие сведения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Реагенты, продукты и классификационные признаки реакций</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Химическая реакция — это процесс превращения исходных веществ (реагентов) в новые вещества с иным составом и свойствами — продукты реакции. Любая реакция протекает при определённых условиях: температура, давление, присутствие катализатора, растворитель, освещение. Именно совокупность условий определяет, возможна ли реакция и с какой скоростью она идёт.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Для описания реакций используют несколько независимых классификационных признаков: изменение числа и состава реагентов и продуктов, изменение степеней окисления элементов, агрегатное состояние участников, обратимость и тепловой эффект (экзо- или эндотермичность). Поэтому одна и та же реакция одновременно характеризуется несколькими признаками.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Реагенты</span> — исходные вещества, вступающие в химическую реакцию.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Продукты реакции</span> — новые вещества, образующиеся в результате реакции.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Условия протекания</span> — температура, давление, катализатор, растворитель, освещение.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Тепловой эффект</span> — количество теплоты, выделяющейся или поглощаемой в ходе реакции.</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Реагенты</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Продукты реакции</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Условия протекания</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Тепловой эффект</span>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-by-number" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.2. Классификация по числу реагентов и продуктов и их состава</h2>
              <p className="text-xs sm:text-sm text-slate-500">Соединение, разложение, замещение и обмен</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По соотношению числа и состава реагентов и продуктов выделяют четыре основных типа реакций. Реакции соединения — из нескольких простых или сложных веществ образуется одно новое вещество. Реакции разложения — одно сложное вещество распадается на несколько более простых. Реакции замещения — атомы простого вещества замещают атомы одного из элементов в сложном веществе. Реакции обмена — два сложных вещества обмениваются своими составными частями.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Отдельно рассматривают реакции диспропорционирования и конпропорционирования, в которых один и тот же элемент одновременно повышает и понижает свою степень окисления. Реакции обмена в растворах протекают без изменения степеней окисления элементов.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2H2 + O2 -> 2H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2H2O -t-> 2H2^ + O2^" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Zn + CuSO4 -> ZnSO4 + Cu" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaOH + HCl -> NaCl + H2O" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Соединение</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Разложение</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Замещение</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Обмен</span>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-by-phase" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.3. Классификация по агрегатному состоянию</h2>
              <p className="text-xs sm:text-sm text-slate-500">Гомогенные и гетерогенные системы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По агрегатному состоянию участников реакции делят на гомогенные и гетерогенные. Гомогенные реакции идут в одной фазе — между газами (например, окисление сернистого газа) или в растворе. Гетерогенные реакции идут на границе раздела фаз: твёрдое вещество с газом (горение углерода <ChemFormula formula="C + O2 -t-> CO2" />), твёрдое вещество с раствором и в других сочетаниях.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Фазовое состояние участников определяет факторы, влияющие на скорость процесса: в гетерогенных системах существенна площадь поверхности соприкосновения фаз, в гомогенных газовых — давление.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2SO2 + O2 <=(V2O5)=> 2SO3" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="C + O2 -t-> CO2" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Zn + 2HCl -> ZnCl2 + H2^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гомогенная реакция</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гетерогенная реакция</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Фаза</span>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="section-by-transfer" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.4. Классификация по типу переносимых частиц</h2>
              <p className="text-xs sm:text-sm text-slate-500">Перенос электронов, протонов и радикальные процессы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По типу частиц, перенос которых сопровождает реакцию, выделяют несколько типов процессов. Окислительно-восстановительные реакции идут с переносом электронов, и степени окисления элементов в них изменяются. Кислотно-основные реакции (по Брёнстеду) идут с переносом протона <ChemFormula formula="H+" className="font-semibold text-slate-900" />. Реакции обмена — это обмен ионами или группами атомов без изменения степеней окисления. Радикальные реакции идут с участием частиц с неспаренными электронами.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Эти признаки важно различать: например, нейтрализация — одновременно реакция обмена и кислотно-основная реакция, но не окислительно-восстановительная.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="HCl + NaOH -> NaCl + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Fe(0) - 2e- -> Fe(+2)" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Перенос электрона</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Перенос протона</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Радикальные реакции</span>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="section-reversibility" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.5. Обратимые и необратимые реакции</h2>
              <p className="text-xs sm:text-sm text-slate-500">Химическое равновесие и условия необратимости</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По обратимости различают обратимые и необратимые реакции. Обратимые реакции протекают одновременно в прямом и обратном направлениях и не доходят до конца — в уравнениях их обозначают двусторонней стрелкой. Со временем в такой системе устанавливается химическое равновесие.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Необратимые реакции идут практически до конца. В растворах необратимость обусловлена выпадением осадка, выделением газа или образованием слабого электролита, например воды <ChemFormula formula="H2O" className="font-semibold text-slate-900" />. При изменении условий характер реакции может меняться.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="N2 + 3H2 <=(t, p, Fe)=> 2NH3" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="AgNO3 + NaCl -> AgClv + NaNO3" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Обратимость</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Химическое равновесие</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Условия необратимости</span>
        </div>
      </section>

      {/* Status block */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-05" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
