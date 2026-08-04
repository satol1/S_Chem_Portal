import React, { useState } from 'react';
import { ZoomIn, X, FlaskConical, Flame, ShieldAlert, TestTube, Factory, BookOpen, Layers, Sparkles } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ChemText } from '../../../scientific/ChemText';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { Halogens2DRender } from './Halogens2DRenders';
import {
  HalogensDarkBlock1,
  HalogensDarkBlock2,
  HalogensDarkBlock3
} from './HalogensDarkBlocks';
import { HalogensFunFacts } from './HalogensFunFacts';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

export const HalogensSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  const [modalDiagram, setModalDiagram] = useState<{ type: 'x2-molecules' | 'hcl' | 'hclo4' | 'hclo'; title: string } | null>(null);

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 1 */}
      <section id="section-general" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Строение атомов и периодические тенденции
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Элементы VII-A группы (F, Cl, Br, I). Электронные конфигурации, окислительная активность и закономерности подгруппы галогенов
              </p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Галогены — элементы 17-й группы (VII-A) Периодической системы: фтор (<ChemFormula formula="F" className="font-semibold text-slate-900" />), хлор (<ChemFormula formula="Cl" className="font-semibold text-slate-900" />), бром (<ChemFormula formula="Br" className="font-semibold text-slate-900" />), иод (<ChemFormula formula="I" className="font-semibold text-slate-900" />) и радиоактивный астат (<ChemFormula formula="At" className="font-semibold text-slate-900" />). Название означает «рождающие соли» (греч. <em>hals</em> — соль, <em>genos</em> — рождение). На внешнем уровне атомы содержат 7 валентных электронов (<ChemFormula formula="ns^2 np^5" className="font-semibold text-slate-900" />): до завершения октета не хватает одного электрона, что делает галогены типичными неметаллами и сильными окислителями.
        </p>

        {/* Detailed Comparison Table (Amber accent) */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Характеристика</th>
                <th className="p-3.5">Фтор (F)</th>
                <th className="p-3.5">Хлор (Cl)</th>
                <th className="p-3.5">Бром (Br)</th>
                <th className="p-3.5">Иод (I)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Порядковый номер и конфигурация</td>
                <td className="p-3.5"><ChemFormula math="Z = 9;\; 1s^2 2s^2 2p^5" /></td>
                <td className="p-3.5"><ChemFormula math="Z = 17;\; [\mathrm{Ne}]\,3s^2 3p^5" /></td>
                <td className="p-3.5"><ChemFormula math="Z = 35;\; [\mathrm{Ar}]\,3d^{10}4s^2 4p^5" /></td>
                <td className="p-3.5"><ChemFormula math="Z = 53;\; [\mathrm{Kr}]\,4d^{10}5s^2 5p^5" /></td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Ковалентный радиус (<ChemFormula math="r_{\text{ков}}" />)</td>
                <td className="p-3.5 font-mono">0.064 нм</td>
                <td className="p-3.5 font-mono">0.099 нм</td>
                <td className="p-3.5 font-mono">0.114 нм</td>
                <td className="p-3.5 font-mono">0.133 нм</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Электроотрицательность (<ChemFormula math="\chi" />, Полинг)</td>
                <td className="p-3.5 font-bold text-rose-800 font-mono">3.98 (максимум)</td>
                <td className="p-3.5 font-mono">3.16</td>
                <td className="p-3.5 font-mono">2.96</td>
                <td className="p-3.5 font-mono">2.66</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Первая энергия ионизации (<ChemFormula math="I_1" />)</td>
                <td className="p-3.5 font-mono">1681 кДж/моль</td>
                <td className="p-3.5 font-mono">1251 кДж/моль</td>
                <td className="p-3.5 font-mono">1140 кДж/моль</td>
                <td className="p-3.5 font-mono">1008 кДж/моль</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Сродство к электрону (<ChemFormula math="E_{\text{ea}}" />)</td>
                <td className="p-3.5 font-mono">328 кДж/моль</td>
                <td className="p-3.5 font-bold text-emerald-800 font-mono">349 кДж/моль (максимум)</td>
                <td className="p-3.5 font-mono">325 кДж/моль</td>
                <td className="p-3.5 font-mono">295 кДж/моль</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Потенциал <ChemFormula math="E^\circ(\mathrm{X}_2/2\mathrm{X}^-)" /></td>
                <td className="p-3.5 font-bold text-rose-800 font-mono">+2.87 В</td>
                <td className="p-3.5 font-mono">+1.36 В</td>
                <td className="p-3.5 font-mono">+1.07 В</td>
                <td className="p-3.5 font-mono">+0.54 В</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Степени окисления</td>
                <td className="p-3.5 font-bold text-rose-800">−1 (только)</td>
                <td className="p-3.5">−1, +1, +3, +5, +7</td>
                <td className="p-3.5">−1, +1, +3, +5, +7</td>
                <td className="p-3.5">−1, +1, +3, +5, +7</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Валентность</td>
                <td className="p-3.5">I (нет d-орбиталей)</td>
                <td className="p-3.5">I, III, V, VII</td>
                <td className="p-3.5">I, III, V, VII</td>
                <td className="p-3.5">I, III, V, VII</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Энергия связи <ChemFormula math="E(\mathrm{X}\text{--}\mathrm{X})" /></td>
                <td className="p-3.5 font-bold text-rose-800 font-mono">158 кДж/моль (аномалия)</td>
                <td className="p-3.5 font-mono">243 кДж/моль</td>
                <td className="p-3.5 font-mono">193 кДж/моль</td>
                <td className="p-3.5 font-mono">151 кДж/моль</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quantum mechanism box */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Почему фтор — исключение: валентность и степень окисления</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Фтор (F) — 2-й период</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                На 2-м уровне <strong>отсутствуют d-орбитали</strong>, распаривание электронной пары невозможно, поэтому фтор всегда валентен I. Как самый электроотрицательный элемент он проявляет <strong>только степень окисления −1</strong> и не образует соединений с положительной степенью окисления (оксидов фтора не существует — <ChemFormula formula="OF2" className="font-semibold text-slate-900" /> это фторид кислорода, O(+2)).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Хлор, бром, иод — 3-й период и ниже</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                Наличие вакантных d-орбиталей позволяет распаривать электронные пары и проявлять валентности III, V, VII (в <ChemFormula formula="HClO" className="font-semibold text-slate-900" />, <ChemFormula formula="HClO3" className="font-semibold text-slate-900" />, <ChemFormula formula="HClO4" className="font-semibold text-slate-900" /> соответственно) и степени окисления от −1 до +7. Окислительная активность простых веществ закономерно падает от <ChemFormula formula="F2" /> к <ChemFormula formula="I2" />.
              </p>
            </div>
          </div>
        </div>

        {/* Bond energy anomaly */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-700" />
            <span>Аномалия связи F–F и простое вещество X₂</span>
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={() => setModalDiagram({
                type: 'x2-molecules',
                title: 'Молекулы галогенов X₂ — рост длины связи и аномально слабая связь F–F (158 кДж/моль)'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной 2D-схемы"
            >
              <Halogens2DRender type="x2-molecules" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                2D-схема
              </div>
            </button>
            <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
              В ряду F₂ → Cl₂ → Br₂ → I₂ длина связи X–X растёт (1.412 → 2.666 Å), а энергия падает. Связь <ChemFormula formula="F-F" className="font-semibold text-slate-900" /> <TermTooltip term="аномально слабая" definition="Энергия связи F–F (158 кДж/моль) ниже, чем у Cl–Cl (243 кДж/моль), из-за сильного отталкивания неподелённых электронных пар компактных атомов фтора. Именно поэтому F₂ исключительно реакционноспособен." /> (158 кДж/моль против 243 у Cl₂) — из-за отталкивания неподелённых пар компактных атомов. Поэтому фтор — самый реакционноспособный галоген.
            </p>
          </div>
        </div>

        {/* Physical properties of simple substances */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Физические свойства простых веществ</span>
          </h4>
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
                <tr>
                  <th className="p-3.5">Вещество</th>
                  <th className="p-3.5">Агрегатное состояние и окраска (н.у.)</th>
                  <th className="p-3.5 font-mono">t пл / t кип, °C</th>
                  <th className="p-3.5">Особенности растворимости</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="F2" /></td>
                  <td className="p-3.5">Бледно-жёлтый газ</td>
                  <td className="p-3.5 font-mono">−219.6 / −188.1</td>
                  <td className="p-3.5 text-rose-800 font-medium">Реагирует с водой</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="Cl2" /></td>
                  <td className="p-3.5">Жёлто-зелёный газ, удушливый</td>
                  <td className="p-3.5 font-mono">−101.5 / −34.0</td>
                  <td className="p-3.5">Умеренно (хлорная вода)</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="Br2" /></td>
                  <td className="p-3.5 text-rose-800 font-semibold">Красно-бурая жидкость (ρ = 3.10 г/см³)</td>
                  <td className="p-3.5 font-mono">−7.2 / 58.8</td>
                  <td className="p-3.5">Мало (бромная вода)</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="I2" /></td>
                  <td className="p-3.5">Тёмно-фиолетовые кристаллы, металлический блеск</td>
                  <td className="p-3.5 font-mono">113.7 / 184.3</td>
                  <td className="p-3.5">Плохо в воде; хорошо в KI (I₃⁻) и органике</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic pt-0.5">
            * В природе хлор встречается в виде галита NaCl, сильвина KCl, карналлита KCl·MgCl₂·6H₂O; фтор — флюорита CaF₂, криолита Na₃[AlF₆], фторапатита Ca₅(PO₄)₃F; бром и иод — в рассолах и морской воде.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-simple" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Простые вещества X₂: химические свойства
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Взаимодействие с металлами, водородом, неметаллами и водой; получение галогенов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Галогены — сильные окислители. Активность уменьшается от фтора к иоду: фтор реагирует практически со всеми веществами, а иод — лишь с активными восстановителями.
        </p>

        {/* Reactions with metals */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Взаимодействие с металлами (галоген — окислитель, образуются галогениды)</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <p>
              • С активными металлами — энергично, часто горение:<br />
              <ChemFormula formula="2Na + Cl2 -> 2NaCl" className="font-bold text-slate-900" /><br />
              • Хлор окисляет металлы переменной валентности до высшей степени окисления:<br />
              <ChemFormula formula="2Fe + 3Cl2 -> 2FeCl3" className="font-bold text-slate-900" /> (образуется хлорид железа(III), а не FeCl₂!)<br />
              <ChemFormula formula="Cu + Cl2 -t-> CuCl2" className="font-bold text-slate-900" /><br />
              • Иод — слабый окислитель, даёт иодид железа(II):<br />
              <ChemFormula formula="Fe + I2 -> FeI2" className="font-bold text-slate-900" />
            </p>
          </div>
        </div>

        {/* Reactions with hydrogen */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TestTube className="w-4 h-4 text-slate-700" />
            <span>Взаимодействие с водородом — тенденция активности</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-900">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Фтор — взрыв даже в темноте и на холоду (цепная реакция):<br />
              <ChemFormula formula="H2 + F2 -> 2HF" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Хлор — на свету <TermTooltip term="цепная реакция" definition="Реакция, в которой активная частица (атом, радикал), порождая продукты, регенерируется и продолжает превращение множества молекул. H₂ + Cl₂ инициируется квантом света: Cl₂ → 2Cl•." />, на прямом свету взрыв:<br />
              <ChemFormula formula="H2 + Cl2 -(hv)-> 2HCl" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Бром — обратимо при нагревании:<br />
              <ChemFormula formula="H2 + Br2 <==> 2HBr" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Иод — обратимо, степень превращения мала:<br />
              <ChemFormula formula="H2 + I2 <==> 2HI" className="font-bold text-slate-900" />
            </div>
          </div>
          <p className="text-xs text-slate-500 italic pt-0.5">
            * От фтора к иоду реакция с водородом идёт всё труднее, а равновесие смещается в сторону исходных веществ.
          </p>
        </div>

        {/* Non-metals and water */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TestTube className="w-4 h-4 text-sky-700" />
            <span>Взаимодействие с неметаллами и водой</span>
          </h4>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-900 font-semibold space-y-1">
            <div>• С фосфором: <ChemFormula formula="2P + 3Cl2 -> 2PCl3" /> (недостаток) и <ChemFormula formula="2P + 5Cl2 -> 2PCl5" /> (избыток)</div>
            <div>• С кремнием: <ChemFormula formula="Si + 2Cl2 -t-> SiCl4" /></div>
            <div>• Фтор окисляет воду: <ChemFormula formula="2F2 + 2H2O -> 4HF + O2^" /></div>
            <div>• Хлор обратимо реагирует с водой (хлорная вода): <ChemFormula formula="Cl2 + H2O <=> HCl + HClO" /></div>
            <div>• Бром: <ChemFormula formula="Br2 + H2O <=> HBr + HBrO" /> (в меньшей степени); иод с водой практически не реагирует</div>
          </div>
        </div>

        {/* Organic reactions */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Взаимодействие с органическими соединениями</span>
          </h4>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-900 font-semibold space-y-1">
            <div>• Радикальное замещение в алканах: <ChemFormula formula="CH4 + Cl2 -(hv)-> CH3Cl + HCl" /></div>
            <div>• Присоединение по кратной связи (обесцвечивание <TermTooltip term="бромной воды" definition="Насыщенный водный раствор брома красно-бурого цвета. Обесцвечивание бромной воды — качественная реакция на кратную (C=C) связь." /> — качественная реакция): <ChemFormula formula="C2H4 + Br2 -> C2H4Br2" /></div>
            <div>• Электрофильное замещение в аренах с катализатором: <ChemFormula formula="C6H6 + Br2 -(FeBr3)-> C6H5Br + HBr" /></div>
          </div>
        </div>

        {/* Preparation */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Factory className="w-4 h-4 text-slate-800" />
            <span>Получение галогенов</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-900">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Лабораторно хлор (реакция Шееле, 1774):<br />
              <ChemFormula formula="MnO2 + 4HCl(конц) -t-> MnCl2 + Cl2^ + 2H2O" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Лабораторно хлор (без нагревания):<br />
              <ChemFormula formula="2KMnO4 + 16HCl(конц) -> 2KCl + 2MnCl2 + 5Cl2^ + 8H2O" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Бром и иод — вытеснением хлором из галогенидов:<br />
              <ChemFormula formula="2NaBr + Cl2 -> 2NaCl + Br2" className="font-bold text-slate-900" /><br />
              <ChemFormula formula="2NaI + Cl2 -> 2NaCl + I2" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Промышленно хлор и фтор — электролизом (см. раздел 8). Фтор получают только электролизом.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-hx" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Галогеноводороды HX и галогеноводородные кислоты
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">HF, HCl, HBr, HI. Аномалия HF, сила кислот и восстановительная активность</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={() => setModalDiagram({
                type: 'hcl',
                title: 'Хлороводород HCl — полярная молекула (d = 127.5 пм, μ = 1.08 D)'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной 2D-схемы"
            >
              <Halogens2DRender type="hcl" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                2D-схема
              </div>
            </button>
            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Галогеноводороды HX — полярные двухатомные молекулы</span>
              <p className="text-slate-600 font-normal">
                Бесцветные газы с резким запахом, хорошо растворимые в воде. Связь H–X — <TermTooltip term="полярная ковалентная связь" definition="Связь, образованная общей электронной парой, смещённой к более электроотрицательному атому (галогену); молекула HX обладает дипольным моментом." />: электронная пара смещена к галогену, а молекула обладает дипольным моментом. Водные растворы — галогеноводородные кислоты: плавиковая <ChemFormula formula="HF" className="font-semibold" />, соляная <ChemFormula formula="HCl" className="font-semibold" />, бромоводородная <ChemFormula formula="HBr" className="font-semibold" /> и иодоводородная <ChemFormula formula="HI" className="font-semibold" />.
              </p>
            </div>
          </div>
        </div>

        {/* Anomaly of HF and acid strength */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Аномалия HF и закономерности в ряду HX</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-800 block mb-1">1. HF — единственная слабая галогеноводородная кислота:</strong>
              <ChemText text="Из-за высокой прочности связи H–F (565 кДж/моль) и ассоциации молекул по водородным связям HF диссоциирует неполностью (Ka ≈ 6.6·10⁻⁴). HCl, HBr, HI — сильные кислоты." />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-amber-800 block mb-1">2. Сила кислот растёт от HF к HI:</strong>
              <ChemText text="HF (слабая) ≪ HCl < HBr < HI. Связь H–X ослабевает (565 → 299 кДж/моль), поэтому отщепление протона облегчается. HI — самая сильная из бескилородных кислот." />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-emerald-800 block mb-1">3. Восстановительная активность растёт от HF к HI:</strong>
              <ChemText text="HF восстановителем не является. HI окисляется уже кислородом воздуха: 4HI + O2 -> 2I2 + 2H2O. Поэтому HBr и HI нельзя получать действием конц. H2SO4 на соли — кислота их окисляет." />
            </div>
          </div>
        </div>

        {/* Physical anomaly of HF */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-700" />
            <span>Водородные связи в HF — аномально высокая температура кипения</span>
          </h4>
          <p className="text-slate-700 font-normal">
            Молекулы HF ассоциированы водородными связями <ChemText text="(HF)_n" />, поэтому HF — жидкость с аномально высокой температурой кипения +19.5 °C (у HCl −85 °C, HBr −66.8 °C, HI −35.4 °C).
          </p>
        </div>

        {/* Preparation of HX */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TestTube className="w-4 h-4 text-slate-700" />
            <span>Получение галогеноводородов</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-900">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Лабораторно HCl — вытеснение конц. серной кислотой:<br />
              <ChemFormula formula="NaCl(тв) + H2SO4(конц) -> NaHSO4 + HCl^" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Промышленно HCl — синтез из элементов:<br />
              <ChemFormula formula="H2 + Cl2 -> 2HCl" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              Лабораторно HF из плавикового шпата:<br />
              <ChemFormula formula="CaF2 + H2SO4(конц) -> CaSO4 + 2HF^" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              HBr и HI — гидролизом галогенидов фосфора:<br />
              <ChemFormula formula="PBr3 + 3H2O -> H3PO3 + 3HBr^" className="font-bold text-slate-900" />
            </div>
          </div>
        </div>

        {/* Hydrochloric acid */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Соляная кислота HCl — свойства сильной кислоты</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <p>
              Концентрированная соляная кислота содержит ~36% HCl (плотность 1.19 г/см³) и «дымит» на воздухе. Проявляет все общие свойства сильных кислот:<br />
              • С металлами до водорода: <ChemFormula formula="Fe + 2HCl -> FeCl2 + H2^" className="font-bold text-slate-900" /><br />
              • С основными оксидами: <ChemFormula formula="CuO + 2HCl -> CuCl2 + H2O" className="font-bold text-slate-900" /><br />
              • С гидроксидами: <ChemFormula formula="Fe(OH)3 + 3HCl -> FeCl3 + 3H2O" className="font-bold text-slate-900" />
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="section-halides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Галогениды и качественные реакции
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Осаждение галогенидов ионом Ag⁺, окраска осадков, растворимость в аммиаке</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Галогенид-ионы <ChemFormula formula="X(-)" className="font-semibold text-slate-900" /> обнаруживают качественными реакциями. Важнейшая — осаждение ионом серебра <ChemFormula formula="Ag(+)" className="font-semibold text-slate-900" />.
        </p>

        {/* AgNO3 qualitative table */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Ион</th>
                <th className="p-3.5">Реакция с <ChemFormula math="\mathrm{Ag}^+" /></th>
                <th className="p-3.5">Осадок и окраска</th>
                <th className="p-3.5">Растворимость в <ChemFormula math="\mathrm{NH_3 \cdot H_2O}" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="F(-)" /></td>
                <td className="p-3.5 text-emerald-800 font-semibold">Осадка НЕТ (AgF растворим!)</td>
                <td className="p-3.5">—</td>
                <td className="p-3.5">—</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="Cl(-)" /></td>
                <td className="p-3.5"><ChemFormula formula="Ag(+) + Cl(-) -> AgClv" /></td>
                <td className="p-3.5 font-semibold text-slate-900">Белый творожистый</td>
                <td className="p-3.5">Растворим (разб.)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="Br(-)" /></td>
                <td className="p-3.5"><ChemFormula formula="Ag(+) + Br(-) -> AgBrv" /></td>
                <td className="p-3.5 font-semibold text-slate-900">Бледно-жёлтый (кремовый)</td>
                <td className="p-3.5">Растворим (конц.)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="I(-)" /></td>
                <td className="p-3.5"><ChemFormula formula="Ag(+) + I(-) -> AgIv" /></td>
                <td className="p-3.5 font-semibold text-slate-900">Жёлтый</td>
                <td className="p-3.5 text-rose-800 font-semibold">Не растворим</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
          <h4 className="font-bold text-slate-900 text-sm">Дополнительные качественные реакции</h4>
          <div className="space-y-2.5 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Иод и крахмал:</strong> молекулярный иод <ChemFormula formula="I2" className="font-semibold text-slate-900" /> даёт с крахмалом интенсивное синее окрашивание (соединения включения) — сверхчувствительная реакция на иод.<br />
              • <strong>Фторид-ион</strong> осаждают ионом кальция: <ChemFormula formula="Ca(2+) + 2F(-) -> CaF2v (белый)" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Растворение AgCl в аммиаке</strong> — образование комплексного иона:<br />
              <ChemFormula formula="AgCl + 2NH3 -> [Ag(NH3)2]Cl" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Светочувствительность галогенидов серебра</strong> — основа классической фотографии: <ChemFormula formula="2AgBr -(hv)-> 2Ag + Br2" className="font-bold text-slate-900" />
            </div>
          </div>
        </div>

        {/* Important halides */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Важнейшие галогениды и их применение</span>
          </h4>
          <p className="text-slate-700 font-normal">
            NaCl (поваренная соль), KCl (калийное удобрение), <ChemFormula formula="CaCl2" className="font-semibold text-slate-900" /> (осушитель), <ChemFormula formula="ZnCl2" className="font-semibold text-slate-900" /> (паяльная кислота), <ChemFormula formula="NH4Cl" className="font-semibold text-slate-900" /> (нашатырь). Галогениды серебра AgCl, AgBr, AgI применяются в фотографии благодаря светочувствительности.
          </p>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="section-redox" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. ОВР свойства: вытеснение галогенов и диспропорционирование
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Ряд окислительной активности, вытеснение из солей, диспропорционирование в воде и щелочах</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        {/* Displacement summary card */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Сводная карта: более активный галоген вытесняет менее активный</span>
            </h4>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-900 text-xs font-bold border border-amber-300/50">
              Активность: F₂ &gt; Cl₂ &gt; Br₂ &gt; I₂
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Окислительная способность падает от <ChemFormula formula="F2" className="font-semibold text-slate-900" /> к <ChemFormula formula="I2" className="font-semibold text-slate-900" /> (<TermTooltip term="стандартный электродный потенциал" definition="Характеристика окислительной способности пары X₂/2X⁻ при стандартных условиях; чем больше E°, тем сильнее окислитель. Для галогенов: от +2.87 В (F₂) до +0.54 В (I₂)." /> <ChemFormula math="E^\circ" /> от +2.87 до +0.54 В), поэтому активный галоген вытесняет менее активный из растворов его солей:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-emerald-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>1. Реакции ИДУТ</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono text-xs font-bold">Активный → менее активный</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <ChemFormula formula="Cl2 + 2KBr -> 2KCl + Br2" className="font-bold text-slate-900" /> (раствор желтеет)<br />
                <ChemFormula formula="Cl2 + 2KI -> 2KCl + I2" className="font-bold text-slate-900" /><br />
                <ChemFormula formula="Br2 + 2KI -> 2KBr + I2" className="font-bold text-slate-900" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-rose-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>2. Реакции НЕ ИДУТ</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-xs font-bold">Менее активный → более активный</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-slate-700">
                <ChemFormula formula="Br2 + KCl" className="font-bold text-slate-900" /> — нет реакции<br />
                <ChemFormula formula="I2 + KBr" className="font-bold text-slate-900" /> — нет реакции<br />
                <ChemFormula formula="I2 + KCl" className="font-bold text-slate-900" /> — нет реакции
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-sky-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>3. Фтор в водном растворе</span>
                <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900 font-mono text-xs font-bold">Реагирует с водой</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Фтор сначала окисляет воду, поэтому для вытеснения галогенов из водных растворов солей не используется:
              </p>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <ChemFormula formula="2F2 + 2H2O -> 4HF + O2^" className="font-bold text-slate-900" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-indigo-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>4. Хлор окисляет другие восстановители</span>
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 font-mono text-xs font-bold">Fe²⁺ → Fe³⁺, S²⁻ → S⁰</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <ChemFormula formula="2FeCl2 + Cl2 -> 2FeCl3" className="font-bold text-slate-900" /><br />
                <ChemFormula formula="Cl2 + H2S -> Sv + 2HCl" className="font-bold text-slate-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Disproportionation */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span><TermTooltip term="Диспропорционирование" definition="Реакция, в которой атомы одного элемента в промежуточной степени окисления одновременно окисляются и восстанавливаются." /> хлора в воде и щелочах</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">В воде (обратимо, хлорная вода):</strong>
              <ChemFormula formula="Cl2 + H2O <=> HCl + HClO" className="font-bold text-slate-900" /> — хлор переходит в степени −1 и +1.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-emerald-800 block mb-1">В холодной щёлочи → гипохлориты (Cl⁻¹ и Cl⁺¹):</strong>
              <ChemFormula formula="Cl2 + 2NaOH(хол) -> NaCl + NaClO + H2O" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-800 block mb-1">В горячей щёлочи → хлораты (Cl⁻¹ и Cl⁺⁵):</strong>
              <ChemFormula formula="3Cl2 + 6KOH -t-> 5KCl + KClO3 + 3H2O" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Бром и иод:</strong> бром диспропорционирует аналогично, а иод в щелочах даёт только иодид и иодат: <ChemFormula formula="3I2 + 6KOH -t-> 5KI + KIO3 + 3H2O" className="font-bold text-slate-900" />.
            </div>
          </div>
        </div>

        {/* HClO decomposition */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Фотолиз хлорноватистой кислоты — источник бактерицидного действия</span>
          </h4>
          <p className="text-slate-700 font-normal">
            Хлорноватистая кислота неустойчива и разлагается на свету с выделением атомарного кислорода — сильного окислителя, обеспечивающего отбеливающее и обеззараживающее действие хлорной воды:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-900 font-semibold">
            <ChemFormula formula="2HClO -(hv)-> 2HCl + O2^" />
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section id="section-oxyacids" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Кислородсодержащие соединения хлора
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Кислоты от HClO до HClO₄, их соли и закономерности изменения свойств</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={() => setModalDiagram({
                type: 'hclo4',
                title: 'Хлорная кислота HClO₄ — тетраэдр Cl(+7): 3 связи Cl=O и Cl–OH'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной 2D-схемы"
            >
              <Halogens2DRender type="hclo4" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                2D-схема
              </div>
            </button>
            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Хлор образует четыре кислородные кислоты</span>
              <p className="text-slate-600 font-normal">
                Степени окисления хлора в них +1, +3, +5, +7. На схеме — хлорная кислота <ChemFormula formula="HClO4" className="font-semibold" /> с хлором в высшей степени окисления +7.
              </p>
            </div>
          </div>
        </div>

        {/* Acids table */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Кислота</th>
                <th className="p-3.5">Название</th>
                <th className="p-3.5">С.О. Cl</th>
                <th className="p-3.5">Сила кислоты</th>
                <th className="p-3.5">Устойчивость</th>
                <th className="p-3.5">Окислит. способность</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="HClO" /></td>
                <td className="p-3.5">Хлорноватистая</td>
                <td className="p-3.5 font-mono">+1</td>
                <td className="p-3.5">Очень слабая</td>
                <td className="p-3.5 text-rose-800">Только в растворе</td>
                <td className="p-3.5 font-bold text-rose-800">Сильнейшая</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="HClO2" /></td>
                <td className="p-3.5">Хлористая</td>
                <td className="p-3.5 font-mono">+3</td>
                <td className="p-3.5">Слабая</td>
                <td className="p-3.5 text-rose-800">Только в растворе</td>
                <td className="p-3.5">Сильная</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="HClO3" /></td>
                <td className="p-3.5">Хлорноватая</td>
                <td className="p-3.5 font-mono">+5</td>
                <td className="p-3.5">Сильная</td>
                <td className="p-3.5">Только в растворе</td>
                <td className="p-3.5">Средняя</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-bold"><ChemFormula formula="HClO4" /></td>
                <td className="p-3.5">Хлорная</td>
                <td className="p-3.5 font-mono">+7</td>
                <td className="p-3.5 font-bold text-emerald-800">Одна из сильнейших</td>
                <td className="p-3.5 text-emerald-800">Устойчива</td>
                <td className="p-3.5 text-slate-500">Слабая (в разб. р-ре)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" />
            <span>Закономерность ряда HClO → HClO₄</span>
          </h4>
          <p className="text-slate-700 font-normal">
            В ряду <ChemFormula formula="HClO" /> → <ChemFormula formula="HClO2" /> → <ChemFormula formula="HClO3" /> → <ChemFormula formula="HClO4" /> сила и термическая устойчивость кислот <strong className="text-emerald-800">растут</strong>, а окислительная способность <strong className="text-rose-800">падает</strong> (хлор в высшей степени окисления +7 в разбавленном растворе уже не проявляет окислительных свойств).
          </p>
        </div>

        {/* Salts and decomposition */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TestTube className="w-4 h-4 text-slate-700" />
            <span>Соли кислородных кислот хлора и их свойства</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Бертолетова соль KClO₃ (хлорат калия):</strong>
              Разложение с катализатором — лабораторный способ получения кислорода:<br />
              <ChemFormula formula="2KClO3 -(MnO2, t)-> 2KCl + 3O2^" className="font-bold text-slate-900" /><br />
              Без катализатора — диспропорционирование: <ChemFormula formula="4KClO3 -t-> 3KClO4 + KCl" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Гипохлорит натрия NaClO («Белизна»):</strong>
              получают хлорированием холодного раствора щёлочи; применяют для отбеливания и дезинфекции.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Перхлораты (KClO₄, NH₄ClO₄):</strong>
              термически стабильны; перхлорат аммония — компонент твёрдого ракетного топлива.
            </div>
          </div>
        </div>

        {/* Dark Block 2: Bleaching powder */}
        <HalogensDarkBlock2 />
      </section>

      {/* SECTION 7 */}
      <section id="section-fluorine" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Особенности фтора, брома и иода
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Аномалии фтора, жидкий бром, возгонка иода и его биологическая роль</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        {/* Fluorine */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Фтор — самый сильный окислитель из простых веществ</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <p>
              • Фтор окисляет воду, большинство металлов (включая золото и платину при нагревании), серу и фосфор; с ксеноном образует <ChemFormula formula="XeF2" className="font-semibold text-slate-900" />, <ChemFormula formula="XeF4" className="font-semibold text-slate-900" />, <ChemFormula formula="XeF6" className="font-semibold text-slate-900" />.<br />
              • Соединений фтора с положительной степенью окисления не существует.<br />
              • <ChemFormula formula="OF2" className="font-semibold text-slate-900" /> — дифторид кислорода, кислород в степени окисления +2; получают: <ChemFormula formula="2F2 + 2NaOH(разб) -> 2NaF + OF2 + H2O" className="font-bold text-slate-900" />.
            </p>
          </div>
        </div>

        {/* HF and glass etching */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-sky-700" />
            <span>Плавиковая кислота травит стекло</span>
          </h4>
          <p className="text-slate-700 font-normal">
            HF — слабая кислота, но она реагирует с диоксидом кремния, поэтому её используют для травления стекла и хранят в полиэтиленовой таре:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-900 font-semibold">
            <ChemFormula formula="SiO2 + 4HF -> SiF4^ + 2H2O" />
          </div>
          <p className="text-slate-700 font-normal">
            Фториды входят в состав зубной эмали — <TermTooltip term="фторапатита" definition="Минерал Ca₅(PO₄)₃F, составляющая минеральной основы зубов и костей; добавки фторидов укрепляют эмаль." /> <ChemFormula formula="Ca5(PO4)3F" className="font-semibold text-slate-900" />.
          </p>
        </div>

        {/* Bromine and Iodine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Бром — жидкий неметалл</span>
            <p className="text-slate-600 leading-relaxed font-normal">
              Единственный неметалл, жидкий при н.у. (вместе с ртутью — единственные жидкие элементы). Тяжёлая красно-бурая летучая жидкость (ρ = 3.10 г/см³), плохо растворима в воде («бромная вода»), хорошо — в органических растворителях. Открыт А. Баларом в 1826 г. из золы морских водорослей.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Иод — возгонка и биологическая роль</span>
            <p className="text-slate-600 leading-relaxed font-normal">
              Тёмно-серые/фиолетово-чёрные кристаллы, <TermTooltip term="возгоняют" definition="Возгонка (сублимация) — переход твёрдого вещества в пар, минуя жидкую фазу. Пары иода имеют характерный фиолетовый цвет." /> с образованием фиолетовых паров. В воде мало растворим, хорошо — в растворах KI (образование <ChemFormula formula="I3(-)" className="font-semibold" />) и этаноле (спиртовая настойка). Атомы иода входят в гормоны щитовидной железы тироксин T₄ и трийодтиронин T₃.
            </p>
          </div>
        </div>

        {/* Interhalogens */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Интергалогениды — соединения галогенов между собой</span>
          </h4>
          <p className="text-slate-700 font-normal">
            Галогены образуют бинарные соединения друг с другом: <ChemFormula formula="ClF" className="font-semibold" />, <ChemFormula formula="BrF3" className="font-semibold" />, <ChemFormula formula="IF5" className="font-semibold" />, <ChemFormula formula="ICl" className="font-semibold" /> и др. Более электроотрицательный галоген проявляет отрицательную степень окисления; <ChemFormula formula="IF7" className="font-semibold" /> демонстрирует предельную валентность иода VII.
          </p>
        </div>

        {/* Fun facts */}
        <HalogensFunFacts />
      </section>

      {/* SECTION 8 */}
      <section id="section-industry" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. Промышленный химизм галогенов
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Электролиз растворов и расплавов, хлорная известь, применение</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Хлор и его соединения — крупнотоннажные продукты химической промышленности. Хлор получают электролизом, а фтор — исключительно электролизом расплавов.
        </p>

        {/* Chlor-alkali */}
        <HalogensDarkBlock1 />

        {/* Fluorine production */}
        <HalogensDarkBlock3 />

        {/* Applications */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Factory className="w-4 h-4 text-slate-800" />
            <span>Применение галогенов и их соединений</span>
          </h4>
          <div className="space-y-2.5 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Полимеры:</strong> поливинилхлорид ПВХ (мономер <ChemFormula formula="CH2=CHCl" className="font-semibold text-slate-900" />), тефлон (мономер <ChemFormula formula="CF2=CF2" className="font-semibold text-slate-900" />).<br />
              • <strong>Отбеливание и дезинфекция:</strong> хлорная известь, гипохлориты, хлорирование воды.<br />
              • <strong>Хладагенты:</strong> фреоны (хлорфторуглероды), ограниченные Монреальским протоколом 1987 г. из-за разрушения озонового слоя.<br />
              • <strong>Фотография и медицина:</strong> галогениды серебра, спиртовая настойка иода.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. 3D-модели веществ галогенов
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Интерактивные 3D-модели молекул Three.js: галогены, галогеноводороды и кислородные кислоты хлора</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <MoleculeViewer3D
          moleculeIds={['f2', 'cl2', 'br2', 'i2', 'hcl', 'hf', 'hclo', 'hclo3', 'hclo4']}
          initialSelectedId="cl2"
          title="Интерактивные 3D-модели соединений галогенов"
        />
      </section>

      {/* Practice Banner */}
      <PracticeBanner
        topicCode="ХЭ-05"
        onGoToPractice={handleGoToPractice}
      />

      {/* Static Fullscreen 2D Render Modal */}
      {modalDiagram && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-5 sm:p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base sm:text-lg">
                {modalDiagram.title}
              </h3>
              <button
                onClick={() => setModalDiagram(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center bg-slate-950 rounded-xl p-4 border border-slate-800 min-h-[320px]">
              <Halogens2DRender type={modalDiagram.type} isModal={true} />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setModalDiagram(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl shadow transition cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
