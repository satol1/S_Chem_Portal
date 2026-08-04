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

export const SolutionsDissociationSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 8.1 */}
      <section id="section-solutions-basics" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.1. Понятие о растворах. Процесс растворения. Растворимость веществ</h2>
              <p className="text-xs sm:text-sm text-slate-500">Гомогенные системы переменного состава, гидратация и насыщенные растворы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Раствор — однородная (гомогенная) система переменного состава, состоящая из растворителя и растворённых веществ. Растворение — сложный физико-химический процесс: при нём происходит разрушение кристаллической решётки твёрдого вещества и сольватация (в воде — гидратация) частиц молекулами растворителя.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Растворимость — максимальная масса вещества, растворяющаяся в 100 г растворителя при данной температуре. По содержанию растворённого вещества растворы делят на ненасыщенные, насыщенные (содержат максимально возможное количество вещества) и пересыщенные.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><strong className="text-slate-900">Раствор</strong> — однородная система из растворителя и растворённых веществ</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><strong className="text-slate-900">Гидратация</strong> — взаимодействие частиц вещества с молекулами воды</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><strong className="text-slate-900">Растворимость</strong> — максимальная масса вещества на 100 г растворителя</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><strong className="text-slate-900">Насыщенный раствор</strong> — содержит максимально возможное количество вещества</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Раствор</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гидратация</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Растворимость</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Насыщенный раствор</span>
        </div>
      </section>

      {/* SECTION 8.2 */}
      <section id="section-concentrations" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.2. Количественная характеристика состава растворов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Массовая доля, молярная и моляльная концентрации</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Состав раствора количественно описывают несколькими способами. Массовая доля — отношение массы растворённого вещества к массе всего раствора; молярная концентрация (молярность) — количество вещества в молях на литр раствора. Также используют моляльную концентрацию (моль на килограмм растворителя) и мольную долю.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Задачи на смешение и разбавление растворов решаются по закону сохранения массы растворённого вещества: масса (или количество) растворённого вещества до и после операции остаётся неизменной.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\omega = \frac{m(\text{вещества})}{m(\text{раствора})} \cdot 100\%" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="c = \frac{n}{V}\;(\text{моль/л})" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="b = \frac{n}{m(\text{растворителя})}\;(\text{моль/кг})" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Массовая доля</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Молярная концентрация</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Моляльность</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Мольная доля</span>
        </div>
      </section>

      {/* SECTION 8.3 */}
      <section id="section-dissociation" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.3. Электролитическая диссоциация</h2>
              <p className="text-xs sm:text-sm text-slate-500">Теория Аррениуса, степень диссоциации, сильные и слабые электролиты</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Согласно теории электролитической диссоциации С. Аррениуса (1887), электролиты при растворении в воде или расплавлении распадаются на ионы — положительно заряженные катионы и отрицательно заряженные анионы. Вещества с ковалентной полярной связью диссоциируют за счёт гидратации: полярные молекулы воды «растягивают» молекулу на ионы.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Доля распавшихся молекул характеризуется степенью диссоциации <ChemFormula math="\alpha" className="font-semibold text-slate-900" />. Сильные электролиты (щёлочи, сильные кислоты, растворимые соли) диссоциируют практически полностью, слабые (слабые кислоты и основания, вода) — лишь частично, с установлением равновесия.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaCl -> Na+ + Cl-" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="H2O <=> H+ + OH-" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\alpha = \frac{n_{\text{диссоц.}}}{n_{\text{общ.}}} \cdot 100\%" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электролиты</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Катионы и анионы</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Степень диссоциации</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Сильные и слабые электролиты</span>
        </div>
      </section>

      {/* SECTION 8.4 */}
      <section id="section-dissociation-hydroxides-salts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.4. Диссоциация гидроксидов и солей в водных растворах</h2>
              <p className="text-xs sm:text-sm text-slate-500">Щёлочи, средние и кислые соли, ступенчатая диссоциация</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Щёлочи диссоциируют на катионы металла и гидроксид-ионы; нерастворимые основания в водных растворах практически не диссоциируют. Средние соли как сильные электролиты диссоциируют полностью за одну ступень.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кислые соли диссоциируют ступенчато: на первой ступени отщепляется катион металла и кислотный остаток с водородом, на второй — происходит обратимый распад гидроаниона.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaOH -> Na+ + OH-" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Na2SO4 -> 2Na+ + SO4(2-)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaHCO3 -> Na+ + HCO3-" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="HCO3- <=> H+ + CO3(2-)" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ступенчатая диссоциация</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гидроксид-ион</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Кислые соли</span>
        </div>
      </section>

      {/* SECTION 8.5 */}
      <section id="section-water-ph" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.5. Диссоциация воды. Водородный показатель</h2>
              <p className="text-xs sm:text-sm text-slate-500">Ионное произведение воды, шкала pH и индикаторы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Вода — слабый электролит и обратимо диссоциирует на ионы. Ионное произведение воды при 25 °C постоянно; в нейтральной среде концентрации ионов водорода и гидроксид-ионов равны. Водородный показатель <ChemFormula math="pH = -\lg[\mathrm{H}^+]" className="font-semibold text-slate-900" /> характеризует среду раствора: <ChemFormula math="pH < 7" /> — кислая среда, <ChemFormula math="pH = 7" /> — нейтральная, <ChemFormula math="pH > 7" /> — щелочная.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Среду растворов на практике определяют с помощью индикаторов: лакмуса, фенолфталеина и метилового оранжевого, изменяющих окраску в зависимости от среды.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="H2O <=> H+ + OH-" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="K_w = [\mathrm{H}^+][\mathrm{OH}^-] = 10^{-14}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="pH = -\lg[\mathrm{H}^+]" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="[\mathrm{H}^+] = [\mathrm{OH}^-] = 10^{-7}\;\text{(нейтральная)}" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ионное произведение воды</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">pH</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Индикаторы</span>
        </div>
      </section>

      {/* SECTION 8.6 */}
      <section id="section-rio" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.6. Реакции обмена в водных растворах электролитов. Ионные реакции и уравнения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Условия необратимости и три формы записи ионных уравнений</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Реакции ионного обмена протекают до конца при выполнении хотя бы одного из трёх условий: выпадение осадка, выделение газа или образование слабого электролита (чаще всего воды). Если ни одно условие не выполняется, реакция обратима.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Уравнения реакций записывают в трёх формах: молекулярной, полной ионной и сокращённой ионной. Сильные электролиты записывают в виде ионов, а слабые электролиты, осадки и газы — в молекулярной форме; именно сокращённое ионное уравнение отражает сущность процесса.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="H+ + OH- -> H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Ba2+ + SO4(2-) -> BaSO4v" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2H+ + CO3(2-) -> H2O + CO2^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Реакции ионного обмена</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Сокращённое ионное уравнение</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Условия необратимости</span>
        </div>
      </section>

      {/* SECTION 8.7 */}
      <section id="section-hydrolysis" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.7. Гидролиз солей</h2>
              <p className="text-xs sm:text-sm text-slate-500">Гидролиз по катиону, по аниону и совместный гидролиз</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Гидролиз — обменное взаимодействие ионов соли с водой. Соль сильного основания и слабой кислоты гидролизуется по аниону (среда раствора щелочная, например <ChemFormula formula="Na2CO3" className="font-semibold text-slate-900" />); соль слабого основания и сильной кислоты — по катиону (среда кислая, например <ChemFormula formula="NH4Cl" className="font-semibold text-slate-900" />).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Соль слабого основания и слабой кислоты гидролизуется по обоим ионам; среда зависит от констант соответствующих кислоты и основания, а сам гидролиз часто необратим. Гидролиз усиливают нагревание и разбавление раствора. Соли сильных кислот и сильных оснований гидролизу не подвергаются — среда их растворов нейтральная.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CO3(2-) + H2O <=> HCO3- + OH-" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NH4+ + H2O <=> NH4OH + H+" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Al2S3 + 6H2O -> 2Al(OH)3v + 3H2S^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гидролиз по катиону</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гидролиз по аниону</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Совместный гидролиз</span>
        </div>
      </section>

      {/* SECTION 8.8 */}
      <section id="section-disperse-systems" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8.8. Понятие о дисперсных системах. Коллоидные растворы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Дисперсная фаза и среда, взвеси, золи и гели</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Дисперсная система состоит из дисперсной фазы (измельчённого вещества) и дисперсионной среды, в которой оно распределено. По размеру частиц различают грубодисперсные системы — суспензии, эмульсии и аэрозоли (частицы более 100 нм) — и коллоидные растворы (частицы 1–100 нм).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Коллоидные растворы дают эффект Тиндаля — рассеяние проходящего через них пучка света. Многие коллоиды нестабильны и способны к коагуляции — слипанию частиц с образованием осадка или геля.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><strong className="text-slate-900">Грубодисперсные системы</strong> — частицы более 100 нм: суспензии, эмульсии, аэрозоли</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><strong className="text-slate-900">Коллоидные растворы</strong> — частицы 1–100 нм, дают эффект Тиндаля</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Дисперсная система</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Суспензия</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Эмульсия</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Коллоидный раствор</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Эффект Тиндаля</span>
        </div>
      </section>

      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-08" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
