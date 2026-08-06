import React from 'react';
import { FlaskConical, BookOpen, Layers, Flame } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ChemText } from '../../../scientific/ChemText';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';

import {
  ReactionsClassificationTreeInfographic,
  PhaseCompositionInfographic,
  ParticleTransferInfographic,
  ThermalEffectsEnergyProfileInfographic
} from './ReactionClassificationInfographics';

import { ChemicalEquilibriumConceptFlow } from './ReactionClassificationConceptFlow';

import { ReactionClassification2DRenders } from './ReactionClassification2DRenders';

import {
  ReactionClassificationDarkBlock1,
  ReactionClassificationDarkBlock2,
  ReactionClassificationDarkBlock3
} from './ReactionClassificationDarkBlocks';

import {
  ReactionClassificationFunFact1,
  ReactionClassificationFunFact2,
  ReactionClassificationFunFact3
} from './ReactionClassificationFunFacts';

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

      {/* SECTION 5.1: Общие сведения */}
      <section id="section-general-concepts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.1. Общие сведения и признаки классификации</h2>
              <p className="text-xs sm:text-sm text-slate-500">Реагенты, продукты и многомерная классификация реакций</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Химическая реакция — это микроскопический и макроскопический процесс превращения исходных химических веществ (реагентов) в новые вещества с иным составом, строением и свойствами (продукты реакции). В отличие от ядерных превращений, при химических реакциях ядра атомов остаются неизменными — происходят лишь перестройка электронных оболочек, разрыв химических связей в реагентах и образование новых связей в продуктах.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Для систематизации огромного разнообразия химических превращений применяют классификацию по нескольким независимым фундаментальным признакам. Это означает, что любая конкретная реакция характеризуется не одним, а сразу совокупностью всех признаков (состав, фазовость, ОВР-статус, тепловой эффект, обратимость, наличие катализатора).
        </p>

        {/* Сводная инфографика дерева признаков */}
        <div className="my-6">
          <ReactionsClassificationTreeInfographic />
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые понятия и термины</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Реагенты</span> — исходные вещества, вступающие в реакцию.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Продукты реакции</span> — конечные вещества, образующиеся в ходе реакции.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Условия протекания</span> — температура, давление, катализатор, облучение.</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><span className="font-bold text-slate-900">Тепловой эффект</span> — количество выделенного или поглощённого тепла.</div>
          </div>
        </div>

        <ReactionClassificationFunFact1 />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Реагенты</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Продукты</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Классификация</span>
        </div>
      </section>

      {/* SECTION 5.2: По числу и составу */}
      <section id="section-by-number" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.2. Классификация по числу и составу реагентов и продуктов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Реакции соединения, разложения, замещения и обмена</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По изменению числа и качественного состава участников выделяют четыре классических типа реакций в неорганической химии: соединение, разложение, замещение и обмен.
        </p>

        {/* Таблица 1: Сравнительная таблица 4 основных типов */}
        <div className="my-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Тип реакции</th>
                <th className="p-3">Общая схема</th>
                <th className="p-3">Характеристика участников</th>
                <th className="p-3">Пример уравнения</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white font-normal text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-900">Соединение</td>
                <td className="p-3 font-mono text-slate-900 font-semibold">A + B → AB</td>
                <td className="p-3">Из нескольких веществ образуется ОДНО новое</td>
                <td className="p-3 font-mono"><ChemFormula formula="CaO + H2O -> Ca(OH)2" /></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-900">Разложение</td>
                <td className="p-3 font-mono text-slate-900 font-semibold">AB → A + B</td>
                <td className="p-3">Из ОДНОГО сложного вещества образуется несколько</td>
                <td className="p-3 font-mono"><ChemFormula formula="CaCO3 -t-> CaO + CO2^" /></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-900">Замещение</td>
                <td className="p-3 font-mono text-slate-900 font-semibold">A + BC → AC + B</td>
                <td className="p-3">Атомы ПРОСТОГО замещают элемент в СЛОЖНОМ</td>
                <td className="p-3 font-mono"><ChemFormula formula="Zn + CuSO4 -> ZnSO4 + Cu" /></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-900">Обмен (РИО)</td>
                <td className="p-3 font-mono text-slate-900 font-semibold">AB + CD → AD + CB</td>
                <td className="p-3">Два СЛОЖНЫХ вещества обмениваются составными частями</td>
                <td className="p-3 font-mono"><ChemFormula formula="AgNO3 + NaCl -> AgClv + NaNO3" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Примеры реакций по числу и составу</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2H2 + O2 -> 2H2O" /> <span className="text-slate-500 font-sans text-xs">(соединение)</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2KNO3 -t-> 2KNO2 + O2^" /> <span className="text-slate-500 font-sans text-xs">(разложение)</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Fe + 2HCl -> FeCl2 + H2^" /> <span className="text-slate-500 font-sans text-xs">(замещение)</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="BaCl2 + Na2SO4 -> BaSO4v + 2NaCl" /> <span className="text-slate-500 font-sans text-xs">(обмен)</span></div>
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

      {/* SECTION 5.3: По фазовому состоянию */}
      <section id="section-by-phase" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.3. Классификация по агрегатному состоянию (фазовый состав)</h2>
              <p className="text-xs sm:text-sm text-slate-500">Гомогенные и гетерогенные системы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Фаза — это совокупность однородных частей системы, обладающих одинаковыми физическими и химическими свойствами и отделённых от других частей поверхностью раздела.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          В <span className="font-bold text-slate-900">гомогенных реакциях</span> все реагенты находятся в одной фазе (смесь газов или истинный раствор). Реакция протекает во всём объёме фазы. В <span className="font-bold text-slate-900">гетерогенных реакциях</span> реагенты находятся в разных фазах (твёрдое вещество и газ, твёрдое вещество и раствор), а сама реакция протекает на границе раздела фаз.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-700" />
            <span>Примеры гомогенных и гетерогенных систем</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 font-mono">
              <div className="font-bold text-teal-700 font-sans mb-1">Гомогенная (газ + газ):</div>
              <ChemFormula formula="2SO2(г) + O2(г) <=(V2O5)=> 2SO3(г)" />
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 font-mono">
              <div className="font-bold text-teal-700 font-sans mb-1">Гомогенная (раствор):</div>
              <ChemFormula formula="NaOH(р-р) + HCl(р-р) -> NaCl(р-р) + H2O(ж)" />
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 font-mono">
              <div className="font-bold text-amber-700 font-sans mb-1">Гетерогенная (твёрдое + газ):</div>
              <ChemFormula formula="C(тв) + O2(г) -t-> CO2(г)" />
            </div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 font-mono">
              <div className="font-bold text-amber-700 font-sans mb-1">Гетерогенная (твёрдое + раствор):</div>
              <ChemFormula formula="Zn(тв) + 2HCl(р-р) -> ZnCl2(р-р) + H2^" />
            </div>
          </div>
        </div>

        {/* Инфографика гомогенных и гетерогенных систем */}
        <div className="my-6">
          <PhaseCompositionInfographic />
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гомогенная</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гетерогенная</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Фаза</span>
        </div>
      </section>

      {/* SECTION 5.4: По типу переносимых частиц */}
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
          В зависимости от природы элементарных актов переноса микрочастиц реакции подразделяют на:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-700 font-normal">
          <li><span className="font-bold text-slate-900">Окислительно-восстановительные (ОВР)</span> — протекают с переносом электронов и изменением степеней окисления атомов.</li>
          <li><span className="font-bold text-slate-900">Кислотно-основные (протолитические)</span> — протекают с переносом протона <ChemFormula formula="H+" /> (теория Брёнстеда-Лоури).</li>
          <li><span className="font-bold text-slate-900">Реакции ионного обмена (РИО)</span> — протекают без изменения степеней окисления с обменом ионами в растворах.</li>
        </ul>

        {/* Инфографика типов переносимых частиц */}
        <div className="my-6">
          <ParticleTransferInfographic />
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Перенос электронов (ОВР)</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Перенос протона</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">РИО</span>
        </div>
      </section>

      {/* SECTION 5.5: По тепловому эффекту */}
      <section id="section-thermal-effects" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.5. Классификация по тепловому эффекту</h2>
              <p className="text-xs sm:text-sm text-slate-500">Экзотермические (+Q, ΔH &lt; 0) и эндотермические (-Q, ΔH &gt; 0) реакции</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <ChemText
          text="Тепловой эффект реакции $Q$ — количество теплоты, выделяемое или поглощаемое в ходе химического превращения. В термохимии используют энтальпию, связанную с тепловым эффектом соотношением $\Delta H = -Q$."
          className="text-slate-700 leading-relaxed font-normal"
        />
        <p className="text-slate-700 leading-relaxed font-normal">
          <span className="font-bold text-emerald-700">Экзотермические реакции (+Q, ΔH &lt; 0)</span> идут с выделением тепла (горение, нейтрализация, большинство реакций соединения). <span className="font-bold text-rose-700">Эндотермические реакции (−Q, ΔH &gt; 0)</span> идут с поглощением тепла (обжиг известняка, разложение солей, гидратов).
        </p>

        {/* Инфографика энергетических профилей */}
        <div className="my-6">
          <ThermalEffectsEnergyProfileInfographic />
        </div>

        {/* Таблица 2: Важные исключения тепловых эффектов для ФИПИ */}
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
          <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Важные исключения для экзаменов (ЕГЭ/ОГЭ)</span>
          </h4>
          <ul className="text-xs sm:text-sm text-amber-950 space-y-1.5 list-disc list-inside">
            <li><span className="font-bold">Эндотермическое соединение:</span> <ChemFormula formula="N2 + O2 <=(t>2000°C)=> 2NO" /> (требует огромной энергии на разрыв связи N≡N).</li>
            <li><span className="font-bold">Экзотермическое разложение:</span> разложение дихромата аммония <ChemFormula formula="(NH4)2Cr2O7 -t-> N2^ + Cr2O3 + 4H2O^" /> («химический вулкан»).</li>
            <li><span className="font-bold">Экзотермическое разложение H₂O₂:</span> <ChemFormula formula="2H2O2 -(MnO2)-> 2H2O + O2^" />.</li>
          </ul>
        </div>

        <ReactionClassificationDarkBlock3 />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Экзотермическая (+Q)</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Эндотермическая (-Q)</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энтальпия ΔH</span>
        </div>
      </section>

      {/* SECTION 5.6: Обратимость */}
      <section id="section-reversibility" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.6. Обратимые и необратимые реакции</h2>
              <p className="text-xs sm:text-sm text-slate-500">Химическое равновесие и условия полноты протекания</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По признаку обратимости реакции подразделяют на необратимые (протекают практически до полного израсходования одного из реагентов) и обратимые (протекают одновременно в прямом и обратном направлениях). В школьном курсе обратимость обозначают двойной стрелкой <ChemFormula formula="<=>" /> вместо одинарной.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Классический пример обратимости — димеризация бурого оксида азота(IV): <ChemFormula formula="2NO2 <=> N2O4" />. При охлаждении равновесие смещается в сторону бесцветного тетраоксида диазота, при нагревании — обратно в сторону бурого мономера, что легко наблюдать визуально.
        </p>

        {/* Интерактивная концепт-карта равновесия и его смещения */}
        <div className="my-6">
          <ChemicalEquilibriumConceptFlow />
        </div>

        <ReactionClassificationFunFact3 />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Условия необратимости реакций в растворах:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-center font-bold">Выпадение осадка (↓)</div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-center font-bold">Выделение газа (↑)</div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-center font-bold">Малодиссоциирующее вещество (<ChemFormula formula="H2O" />)</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Обратимость</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Равновесие</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Условия необратимости</span>
        </div>
      </section>

      {/* SECTION 5.7: Катализ */}
      <section id="section-catalysis" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.7. Каталитические и некаталитические процессы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Роль катализаторов и ферментов в химии и биохимии</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <ChemText
          text="Каталитические реакции протекают только в присутствии специфических веществ — катализаторов (или ферментов в биологических системах). Катализатор снижает энергию активации $E_a$, предлагая иной химический механизм процесса, но сам к концу реакции восстанавливает свой состав и количество."
          className="text-slate-700 leading-relaxed font-normal"
        />

        <ReactionClassificationDarkBlock2 />
        <ReactionClassificationFunFact2 />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Катализатор</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ингибитор</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энергия активации</span>
        </div>
      </section>

      {/* SECTION 5.8: Механизмы */}
      <section id="section-mechanisms" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.8. Классификация по механизму протекания</h2>
              <p className="text-xs sm:text-sm text-slate-500">Ионные, радикальные и молекулярные механизмы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По типу разрыва ковалентной связи в реагирующих молекулах химические механизмы делят на <span className="font-bold text-slate-900">радикальные (гомолитические)</span> и <span className="font-bold text-slate-900">ионные (гетеролитические)</span>.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Сравнение механизмов разрыва связей:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-amber-700 block">Гомолитический (Радикальный):</span>
              <p className="text-slate-600">Электронная пара связывающих электронов делится поровну между атомами:</p>
              <div className="p-2 bg-slate-100 rounded font-mono font-bold"><ChemFormula formula="A:B -> A. + B." /></div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-purple-700 block">Гетеролитический (Ионный):</span>
              <p className="text-slate-600">Электронная пара полностью переходит к одному из более электроотрицательных атомов:</p>
              <div className="p-2 bg-slate-100 rounded font-mono font-bold"><ChemFormula formula="A:B -> A+ + :B-" /></div>
            </div>
          </div>
        </div>

        {/* Схема механизмов разрыва ковалентной связи */}
        <div className="my-6">
          <ReactionClassification2DRenders type="bond-cleavage" />
        </div>

        <ReactionClassificationDarkBlock1 />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гомолиз</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гетеролиз</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Свободные радикалы</span>
        </div>
      </section>

      {/* SECTION 5.9: 3D-модели */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5.9. 3D-модели участников химических реакций</h2>
              <p className="text-xs sm:text-sm text-slate-500">Интерактивная пространственная визуализация молекул</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          В этом разделе представлены 3D-модели молекул, демонстрирующие химические превращения различных типов классификации: от простых газов до оксидов и аммиака.
        </p>

        <MoleculeViewer3D
          moleculeIds={['h2', 'o2', 'n2', 'h2o', 'co2', 'nh3', 'ch4', 'so2', 'so3']}
          initialSelectedId="h2o"
          title="Интерактивные 3D-модели участников реакций"
        />
      </section>

      <PracticeBanner topicCode="ОХ-05" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
