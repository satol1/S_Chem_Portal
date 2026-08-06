import React from 'react';
import { FlaskConical, Beaker, Check, X, HelpCircle } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { InorganicClassesDarkBlock1, InorganicClassesDarkBlock2, InorganicClassesDarkBlock3, InorganicClassesDarkBlock4 } from './InorganicClassesDarkBlocks';
import { FunFactGypsum, FunFactGlassHF, FunFactPhosphorus } from './InorganicClassesFunFacts';
import { InorganicClasses2DRenders } from './InorganicClasses2DRenders';

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

      {/* ═══════════════ SECTION 4.1: ОКСИДЫ ═══════════════ */}
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
          <TermTooltip term="Оксиды" definition="Бинарные соединения химических элементов с кислородом в степени окисления –2. Общая формула: Э₂Oₓ (где x — валентность элемента)." /> — бинарные соединения элементов с кислородом. По химическим свойствам различают четыре типа: основные (<ChemFormula formula="Na2O" className="font-semibold text-slate-900" />, <ChemFormula formula="CaO" className="font-semibold text-slate-900" />), кислотные (<ChemFormula formula="CO2" className="font-semibold text-slate-900" />, <ChemFormula formula="SO3" className="font-semibold text-slate-900" />, <ChemFormula formula="P2O5" className="font-semibold text-slate-900" />), амфотерные (<ChemFormula formula="ZnO" className="font-semibold text-slate-900" />, <ChemFormula formula="Al2O3" className="font-semibold text-slate-900" />, <ChemFormula formula="Cr2O3" className="font-semibold text-slate-900" />) и несолеобразующие (<ChemFormula formula="NO" className="font-semibold text-slate-900" />, <ChemFormula formula="N2O" className="font-semibold text-slate-900" />, <ChemFormula formula="CO" className="font-semibold text-slate-900" />, <ChemFormula formula="SiO" className="font-semibold text-slate-900" />).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Основные оксиды образованы металлами со с.о. +1, +2 (исключение: <ChemFormula formula="ZnO" className="font-semibold text-slate-900" />, <ChemFormula formula="BeO" className="font-semibold text-slate-900" /> — амфотерные). Они реагируют с кислотами, образуя соль и воду. С водой взаимодействуют только оксиды щелочных и щёлочноземельных металлов, давая щёлочи.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кислотные оксиды — это оксиды неметаллов (кроме несолеобразующих) и металлов в высоких с.о. (<ChemFormula formula="CrO3" className="font-semibold text-slate-900" />, <ChemFormula formula="Mn2O7" className="font-semibold text-slate-900" />). Они реагируют со щелочами, образуя соль и воду, и с водой (кроме <ChemFormula formula="SiO2" className="font-semibold text-slate-900" />) — с образованием кислот. Амфотерные оксиды взаимодействуют и с кислотами, и со щелочами.
        </p>

        {/* Таблица: типы оксидов */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
                <th className="p-3.5">Тип оксида</th>
                <th className="p-3.5">Типичные элементы</th>
                <th className="p-3.5">Реакция с <ChemFormula formula="H2O" /></th>
                <th className="p-3.5">Реакция с кислотой</th>
                <th className="p-3.5">Реакция со щёлочью</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Основные</td>
                <td className="p-3.5"><ChemFormula math="\mathrm{Me}^{+1},\,\mathrm{Me}^{+2}" /></td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>(активные Me)</span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>→ соль + <ChemFormula formula="H2O" /></span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>не реагирует</span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Кислотные</td>
                <td className="p-3.5"><ChemFormula math="\text{неметаллы};\,\mathrm{Me}^{+5\dots+7}" /></td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>(кроме <ChemFormula formula="SiO2" />)</span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>не реагирует</span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>→ соль + <ChemFormula formula="H2O" /></span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Амфотерные</td>
                <td className="p-3.5"><ChemFormula math="\mathrm{Zn},\,\mathrm{Al},\,\mathrm{Cr}^{3+},\,\mathrm{Be}" /></td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>не реагирует</span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>→ соль + <ChemFormula formula="H2O" /></span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>→ соль + <ChemFormula formula="H2O" /></span>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Несолеобразующие</td>
                <td className="p-3.5"><ChemFormula math="\mathrm{C}^{+2},\,\mathrm{N}^{+2},\,\mathrm{N}^{+1},\,\mathrm{Si}^{+2}" /></td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>не реагирует</span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>не реагирует</span>
                  </div>
                </td>
                <td className="p-3.5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>не реагирует</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2D-превью: классификация оксидов */}
        <InorganicClasses2DRenders type="oxide-classification" />

        {/* Dark Block 4: несолеобразующие оксиды (компактный) в гриде со светлой карточкой */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InorganicClassesDarkBlock4 />
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-700" />
              <span>Экзаменационная ловушка: несолеобразующие оксиды</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>В цепочках превращений:</strong> не вступают в реакции солеобразования с H₂O, кислотами и щелочами.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Ложные аналогии:</strong> CO — не кислотный оксид (не образует H₂CO₃), NO — не образует HNO₂/HNO₃ при гидратации.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Окислительно-восстановительные свойства:</strong> участвуют в ОВР (например, CO — важнейший восстановитель в металлургии: <ChemFormula formula="CuO + CO -> Cu + CO2^" className="font-semibold" />).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Интересный факт: самовоспламенение фосфора → P₄O₁₀ */}
        <FunFactPhosphorus />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CaO + 2HCl -> CaCl2 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="SO3 + 2NaOH -> Na2SO4 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CaCO3 -t-> CaO + CO2^" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2Mg + O2 -(t)-> 2MgO" /></div>
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

      {/* ═══════════════ SECTION 4.2: ОСНОВАНИЯ ═══════════════ */}
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
          <TermTooltip term="Основания" definition="Сложные вещества, состоящие из катиона металла и одного или нескольких гидроксид-ионов OH⁻. Общая формула: Me(OH)ₓ." /> — соединения металлов с гидроксогруппами. По кислотности (числу OH⁻-групп) различают однокислотные (<ChemFormula formula="NaOH" className="font-semibold text-slate-900" />, <ChemFormula formula="KOH" className="font-semibold text-slate-900" />) и двухкислотные (<ChemFormula formula="Ca(OH)2" className="font-semibold text-slate-900" />, <ChemFormula formula="Ba(OH)2" className="font-semibold text-slate-900" />); по растворимости в воде — щёлочи (растворимые: NaOH, KOH, Ca(OH)₂ — малорастворим, Ba(OH)₂) и нерастворимые основания (Cu(OH)₂, Fe(OH)₂, Fe(OH)₃, Mg(OH)₂).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          <TermTooltip term="Щёлочи" definition="Хорошо растворимые в воде основания: NaOH, KOH, LiOH, RbOH, CsOH, Ca(OH)₂ (малорастворим), Sr(OH)₂, Ba(OH)₂. В растворе полностью диссоциируют на ионы." /> вступают в реакции нейтрализации с кислотами, реагируют с кислотными оксидами и растворами солей (если образуется осадок или газ). Нерастворимые основания при нагревании разлагаются на оксид и воду.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Основные способы получения: щёлочи — активный металл + вода (<ChemFormula formula="2Na + 2H2O -> 2NaOH + H2^" className="font-semibold text-slate-900" />) или оксид активного металла + вода; нерастворимые основания — щёлочь + раствор соли (<ChemFormula formula="CuSO4 + 2NaOH -> Cu(OH)2v + Na2SO4" className="font-semibold text-slate-900" />).
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
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="2NaOH + CO2 -> Na2CO3 + H2O" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Щёлочи</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Нерастворимые основания</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Реакция нейтрализации</span>
        </div>
      </section>

      {/* ═══════════════ SECTION 4.3: КИСЛОТЫ ═══════════════ */}
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
          <TermTooltip term="Кислоты" definition="Сложные вещества, состоящие из атомов водорода, способных замещаться на металл, и кислотного остатка. В водном растворе диссоциируют с образованием катионов H⁺." /> классифицируют по составу (кислородсодержащие и бескислородные) и по основности — числу атомов водорода, способных замещаться на металл. Одноосновные: <ChemFormula formula="HCl" className="font-semibold text-slate-900" />, <ChemFormula formula="HNO3" className="font-semibold text-slate-900" />; двухосновные: <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" />, <ChemFormula formula="H2CO3" className="font-semibold text-slate-900" />; трёхосновные: <ChemFormula formula="H3PO4" className="font-semibold text-slate-900" />.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Общие химические свойства кислот: взаимодействие с металлами (стоящими в ряду активности до водорода, с выделением H₂ — кроме <TermTooltip term="кислот-окислителей" definition="HNO₃ (любой концентрации) и концентрированная H₂SO₄: реагируют с металлами без выделения водорода за счёт окислительных свойств аниона (NO₃⁻, SO₄²⁻)." />), с основными и амфотерными оксидами, с основаниями (реакция нейтрализации) и с солями (если образуется осадок, газ или слабый электролит).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Способы получения: растворение кислотных оксидов в воде (<ChemFormula formula="SO3 + H2O -> H2SO4" className="font-semibold text-slate-900" />), вытеснение более летучей или слабой кислоты из соли, гидролиз галогенидов неметаллов.
        </p>

        {/* Таблица: классификация кислот */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
                <th className="p-3.5">Группа</th>
                <th className="p-3.5">Примеры</th>
                <th className="p-3.5">Особенности</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Бескислородные</td>
                <td className="p-3.5 text-xs sm:text-sm">
                  <ChemFormula formula="HCl" className="font-semibold text-slate-900" />, <ChemFormula formula="HBr" className="font-semibold text-slate-900" />, <ChemFormula formula="HI" className="font-semibold text-slate-900" />, <ChemFormula formula="HF" className="font-semibold text-slate-900" />, <ChemFormula formula="H2S" className="font-semibold text-slate-900" />
                </td>
                <td className="p-3.5">Растворы газов в воде; HF — слабая, остальные — сильные</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Кислородсодержащие</td>
                <td className="p-3.5 text-xs sm:text-sm">
                  <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" />, <ChemFormula formula="HNO3" className="font-semibold text-slate-900" />, <ChemFormula formula="H3PO4" className="font-semibold text-slate-900" />, <ChemFormula formula="H2CO3" className="font-semibold text-slate-900" />
                </td>
                <td className="p-3.5">Содержат элемент-кислотообразователь в высшей (или промежуточной) с.о.</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Одноосновные</td>
                <td className="p-3.5 text-xs sm:text-sm">
                  <ChemFormula formula="HCl" className="font-semibold text-slate-900" />, <ChemFormula formula="HNO3" className="font-semibold text-slate-900" />, <ChemFormula formula="CH3COOH" className="font-semibold text-slate-900" />
                </td>
                <td className="p-3.5">Одна ступень диссоциации</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Многоосновные</td>
                <td className="p-3.5 text-xs sm:text-sm">
                  <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" />, <ChemFormula formula="H3PO4" className="font-semibold text-slate-900" />
                </td>
                <td className="p-3.5">Ступенчатая диссоциация; образуют кислые и средние соли</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dark Block 1: контактный способ H₂SO₄ */}
        <InorganicClassesDarkBlock1 />

        {/* Интересный факт: стекло и HF */}
        <FunFactGlassHF />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Zn + 2HCl -> ZnCl2 + H2^" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CuO + H2SO4 -> CuSO4 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="SO3 + H2O -> H2SO4" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Na2CO3 + 2HCl -> 2NaCl + H2O + CO2^" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Основность кислоты</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ряд активности металлов</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Кислоты-окислители</span>
        </div>
      </section>

      {/* ═══════════════ SECTION 4.4: АМФОТЕРНЫЕ ГИДРОКСИДЫ ═══════════════ */}
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
          <TermTooltip term="Амфотерные гидроксиды" definition="Гидроксиды, проявляющие двойственные свойства: с кислотами реагируют как основания (образуя соль и воду), со щелочами — как кислоты (образуя комплексную или среднюю соль)." /> — соединения, проявляющие одновременно свойства оснований и кислот. К ним относятся: <ChemFormula formula="Zn(OH)2" className="font-semibold text-slate-900" />, <ChemFormula formula="Al(OH)3" className="font-semibold text-slate-900" />, <ChemFormula formula="Cr(OH)3" className="font-semibold text-slate-900" />, <ChemFormula formula="Be(OH)2" className="font-semibold text-slate-900" />, <ChemFormula formula="Sn(OH)2" className="font-semibold text-slate-900" />, <ChemFormula formula="Pb(OH)2" className="font-semibold text-slate-900" />.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Ключевая особенность — <strong className="text-slate-900">две схемы реакции со щелочами</strong>: в растворе при комнатной температуре образуется комплексная соль, при сплавлении — средняя соль. Это одно из самых частых экзаменационных заданий: нужно различать условия и продукты.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Получают амфотерные гидроксиды действием <strong>небольшого</strong> количества щёлочи на раствор соли соответствующего металла (избыток щёлочи приведёт к растворению осадка): <ChemFormula formula="AlCl3 + 3NaOH -> Al(OH)3v + 3NaCl" className="font-semibold text-slate-900" />.
        </p>

        {/* 2D-превью: две схемы амфотерности */}
        <InorganicClasses2DRenders type="amphoteric-duality" />

        {/* Dark Block 3: амфотерность — раствор vs сплавление (компактный) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InorganicClassesDarkBlock3 />
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Beaker className="w-4 h-4 text-slate-700" />
              <span>Как не перепутать на экзамене</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>«Раствор»</strong> (t ≈ 20 °C) → комплексная соль: <ChemFormula formula="Na[Al(OH)4]" className="font-semibold" /></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>«Сплавление» / «t°»</strong> → средняя соль + H₂O↑: <ChemFormula formula="NaAlO2 + 2H2O" className="font-semibold" /></span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Не пиши <ChemFormula formula="NaAlO2" /> без указания температуры!</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Al(OH)3 + 3HCl -> AlCl3 + 3H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Al(OH)3 + NaOH -> Na[Al(OH)4]" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="ZnSO4 + 2NaOH -> Zn(OH)2v + Na2SO4" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\mathrm{Zn(OH)_2} + 2\mathrm{NaOH} \xrightarrow{\text{сплавление}} \mathrm{Na_2ZnO_2} + 2\mathrm{H_2O}" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Амфотерность</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Комплексные соли</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Алюминаты и цинкаты</span>
        </div>
      </section>

      {/* ═══════════════ SECTION 4.5: СОЛИ ═══════════════ */}
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
          <TermTooltip term="Соли" definition="Продукты полного или частичного замещения атомов водорода кислоты на металл или гидроксогрупп основания на кислотный остаток. Состоят из катиона металла (или NH₄⁺) и аниона кислотного остатка." /> — наиболее многочисленный класс неорганических веществ. По составу различают пять типов: средние (<ChemFormula formula="NaCl" className="font-semibold text-slate-900" />, <ChemFormula formula="K2SO4" className="font-semibold text-slate-900" />), кислые (<ChemFormula formula="NaHCO3" className="font-semibold text-slate-900" />, <ChemFormula formula="Ca(H2PO4)2" className="font-semibold text-slate-900" />), основные (<ChemFormula formula="(CuOH)2CO3" className="font-semibold text-slate-900" />), двойные (<ChemFormula formula="KAl(SO4)2" className="font-semibold text-slate-900" />) и комплексные (<ChemFormula formula="K3[Fe(CN)6]" className="font-semibold text-slate-900" />).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          <strong>Химические свойства солей</strong>: 1) с металлами — более активный металл (левее в ряду напряжений) вытесняет менее активный из раствора соли; 2) с кислотами — если образуется осадок, газ или слабый электролит; 3) со щелочами — если образуется нерастворимое основание; 4) с другими солями — если один из продуктов выпадает в осадок (<TermTooltip term="правило Бертолле" definition="Реакции ионного обмена в растворах протекают до конца, если образуется осадок (↓), газ (↑) или слабый электролит (H₂O, слабая кислота)." />); 5) термическое разложение — многие соли разлагаются при нагревании.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          <strong>Способы получения</strong>: реакция нейтрализации, взаимодействие металла с кислотой, основного оксида с кислотой, кислотного оксида со щёлочью, соли с солью, металла с неметаллом (для бескислородных солей).
        </p>

        {/* Интересный факт: гипс и алебастр */}
        <FunFactGypsum />

        {/* Dark Block 2: классификация солей (большой) */}
        <InorganicClassesDarkBlock2 />

        {/* 2D-превью: классификация солей */}
        <InorganicClasses2DRenders type="salt-classification" />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Fe + CuSO4 -> FeSO4 + Cu" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Na2CO3 + 2HCl -> 2NaCl + H2O + CO2^" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="NaHCO3 + NaOH -> Na2CO3 + H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="CaCO3 + CO2 + H2O -> Ca(HCO3)2" /></div>
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

      {/* ═══════════════ SECTION 4.6: ГЕНЕТИЧЕСКАЯ СВЯЗЬ ═══════════════ */}
      <section id="section-genetic-link" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.6. Генетическая связь между классами неорганических соединений</h2>
              <p className="text-xs sm:text-sm text-slate-500">Генетические ряды, цепочки превращений и взаимосвязь классов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          <TermTooltip term="Генетическая связь" definition="Закономерная взаимосвязь между веществами разных классов, в основе которой лежит один и тот же химический элемент. Отражает возможность взаимных переходов: простое вещество → оксид → гидроксид → соль." /> показывает взаимные превращения между классами веществ. Выделяют генетический ряд металла и генетический ряд неметалла:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Ряд металла (на примере кальция)</h4>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">1.</span>
                <ChemFormula formula="2Ca + O2 -> 2CaO" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">2.</span>
                <ChemFormula formula="CaO + H2O -> Ca(OH)2" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">3.</span>
                <ChemFormula formula="Ca(OH)2 + 2HCl -> CaCl2 + 2H2O" />
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Ряд неметалла (на примере серы)</h4>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">1.</span>
                <ChemFormula formula="S + O2 -> SO2" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">2.</span>
                <ChemFormula formula="2SO2 + O2 <=> 2SO3" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">3.</span>
                <ChemFormula formula="SO3 + H2O -> H2SO4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-slate-500">4.</span>
                <ChemFormula formula="H2SO4 + 2NaOH -> Na2SO4 + 2H2O" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Через амфотерные соединения ряды металла и неметалла связываются в единую систему, а реакции между классами позволяют осуществлять взаимные переходы — это основа для построения <strong className="text-slate-900">цепочек превращений</strong>.
        </p>

        {/* 2D-превью: генетическая связь */}
        <InorganicClasses2DRenders type="genetic-link" />

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

      {/* ═══════════════ SECTION 4.7: СВОДНАЯ ТАБЛИЦА СПОСОБОВ ПОЛУЧЕНИЯ ═══════════════ */}
      <section id="section-preparation" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.7. Сводная таблица способов получения</h2>
              <p className="text-xs sm:text-sm text-slate-500">Обзор методов получения веществ каждого класса</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Систематизируем основные способы получения веществ всех пяти классов. Знание этой таблицы — ключ к решению цепочек превращений на экзамене.
        </p>

        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
                <th className="p-3.5">Целевой класс</th>
                <th className="p-3.5">Способ 1</th>
                <th className="p-3.5">Способ 2</th>
                <th className="p-3.5">Способ 3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Оксиды</td>
                <td className="p-3.5">Me + <ChemFormula formula="O2" /> (горение)</td>
                <td className="p-3.5">Разложение гидроксида</td>
                <td className="p-3.5">Разложение карбоната / нитрата</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Основания (щёлочи)</td>
                <td className="p-3.5">Me(акт) + <ChemFormula formula="H2O" /></td>
                <td className="p-3.5"><ChemFormula formula="Me2O" />(акт) + <ChemFormula formula="H2O" /></td>
                <td className="p-3.5">Электролиз р-ра соли</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Основания (↓)</td>
                <td className="p-3.5">Соль Me + щёлочь</td>
                <td className="p-3.5 text-slate-400">—</td>
                <td className="p-3.5 text-slate-400">—</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Кислоты</td>
                <td className="p-3.5">Кислотный оксид + <ChemFormula formula="H2O" /></td>
                <td className="p-3.5">Соль + более сильная к-та</td>
                <td className="p-3.5">Гидролиз галогенида неметалла</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Амф. гидроксиды</td>
                <td className="p-3.5">Соль Me + недостаток щёлочи</td>
                <td className="p-3.5 text-slate-400">—</td>
                <td className="p-3.5 text-slate-400">—</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Соли (средние)</td>
                <td className="p-3.5">Me + кислота</td>
                <td className="p-3.5">Основный оксид + кислота</td>
                <td className="p-3.5">Кислотный оксид + основание</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Соли (кислые)</td>
                <td className="p-3.5">Средняя соль + избыток кислоты</td>
                <td className="p-3.5">Средняя соль + изб. кислотного оксида</td>
                <td className="p-3.5">Неполная нейтрализация</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ═══════════════ SECTION 4.8: 3D-МОДЕЛИ ═══════════════ */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4.8. 3D-модели ключевых соединений</h2>
              <p className="text-xs sm:text-sm text-slate-500">Пространственное строение кислот, оксидов и солей</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Изучите пространственное строение ключевых представителей каждого класса: серной и азотной кислот, амфотерного гидроксида алюминия, основных и кислотных оксидов, ионного соединения NaCl. Вращайте модели для лучшего понимания геометрии молекул.
        </p>

        <MoleculeViewer3D
          moleculeIds={['h2so4', 'hno3', 'h3po4', 'so3', 'co2', 'aloh3', 'na2o', 'cao', 'zno', 'nacl']}
          initialSelectedId="h2so4"
          title="3D-модели веществ основных классов"
        />
      </section>

      <PracticeBanner topicCode="ОХ-04" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
