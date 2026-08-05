import React, { useState } from 'react';
import { ZoomIn, X, ShieldAlert, Factory } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ChemText } from '../../../scientific/ChemText';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { ChromiumManganese2DRender, ChromiumOxyFormsLightPanel } from './ChromiumManganese2DRenders';
import {
  ChromiumManganeseDarkBlock1,
  ChromiumManganeseDarkBlock2,
  ChromiumManganeseDarkBlock3,
  ChromiumManganeseDarkBlock4,
} from './ChromiumManganeseDarkBlocks';
import {
  ChromiumColorFunFact,
  ChemicalVolcanoFunFact,
  ManganeseBatteryFunFact,
  AlloyFunFact,
} from './ChromiumManganeseFunFacts';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

type ModalDiagramType = 'cro4' | 'cr2o7' | 'cro2cl2' | 'mno4' | 'mn2o7';

/**
 * Сводная tree-диаграмма: продукты восстановления перманганат-иона
 * в зависимости от среды раствора (20-RENDERING §2.6).
 * Все реакции взяты из материала темы (раздел 6).
 */
const PermanganateMediumDiagram: React.FC = () => (
  <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
        Перманганат калия как окислитель
      </h4>
      <span className="text-xs text-slate-500">Продукты восстановления в зависимости от среды раствора</span>
    </div>

    <div className="overflow-x-auto py-2">
      <div className="min-w-[720px] flex items-center gap-3 text-slate-900">

        {/* Корневой объект */}
        <div className="w-28 text-right pr-1 shrink-0 font-medium text-base leading-snug">
          <div>Перманганат</div>
          <div>калия KMnO₄</div>
        </div>

        {/* Векторные ветвления со стрелками */}
        <div className="relative w-48 shrink-0 h-[400px] flex flex-col justify-between py-6">
          <svg className="absolute inset-0 w-full h-full text-slate-400 stroke-[1.75]" preserveAspectRatio="none" viewBox="0 0 192 400">
            <path d="M 12 200 L 36 200 L 36 48 L 176 48" fill="none" stroke="currentColor" markerEnd="url(#crmn-tree-arrow)" />
            <path d="M 36 200 L 176 200" fill="none" stroke="currentColor" markerEnd="url(#crmn-tree-arrow)" />
            <path d="M 36 200 L 36 352 L 176 352" fill="none" stroke="currentColor" markerEnd="url(#crmn-tree-arrow)" />
            <defs>
              <marker id="crmn-tree-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" />
              </marker>
            </defs>
          </svg>

          <div className="relative z-10 text-center text-xs font-medium text-slate-700 bg-slate-50 px-2 py-0.5 self-center -mt-3 border border-slate-200/80 rounded-md shadow-2xs">
            кислая среда (H⁺)
          </div>
          <div className="relative z-10 text-center text-xs font-medium text-slate-700 bg-slate-50 px-2 py-0.5 self-center border border-slate-200/80 rounded-md shadow-2xs">
            нейтральная среда
          </div>
          <div className="relative z-10 text-center text-xs font-medium text-slate-700 bg-slate-50 px-2 py-0.5 self-center -mb-3 border border-slate-200/80 rounded-md shadow-2xs">
            сильнощелочная среда (OH⁻)
          </div>
        </div>

        {/* Сгруппированные реакции по ветвям */}
        <div className="flex-1 space-y-7 text-sm pl-2">

          <div className="space-y-1.5">
            <div className="font-semibold text-slate-900 flex flex-wrap items-center gap-1.5 text-sm sm:text-base">
              <ChemFormula formula="Mn2+" className="font-semibold text-slate-900" /> — раствор обесцвечивается (бледно-розовый)
            </div>
            <div className="pl-3 space-y-1 text-xs sm:text-sm text-slate-900">
              <div className="flex items-center gap-2">
                <ChemFormula formula="2KMnO4 + 5H2O2 + 3H2SO4 -> 2MnSO4 + 5O2^ + K2SO4 + 8H2O" className="font-semibold" />
              </div>
              <div className="flex items-center gap-2">
                <ChemFormula formula="2KMnO4 + 10FeSO4 + 8H2SO4 -> 2MnSO4 + 5Fe2(SO4)3 + K2SO4 + 8H2O" className="font-semibold" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="font-semibold text-slate-900 flex flex-wrap items-center gap-1.5 text-sm sm:text-base">
              <ChemFormula formula="MnO2" className="font-semibold text-slate-900" /> — бурый осадок
            </div>
            <div className="pl-3 space-y-1 text-xs sm:text-sm text-slate-900">
              <div className="flex items-center gap-2">
                <ChemFormula formula="2KMnO4 + 3Na2SO3 + H2O -> 2MnO2v + 3Na2SO4 + 2NaOH" className="font-semibold" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="font-semibold text-slate-900 flex flex-wrap items-center gap-1.5 text-sm sm:text-base">
              <ChemFormula formula="MnO4(2-)" className="font-semibold text-slate-900" /> — зелёный раствор
            </div>
            <div className="pl-3 space-y-1 text-xs sm:text-sm text-slate-900">
              <div className="flex items-center gap-2">
                <ChemFormula formula="2KMnO4 + Na2SO3 + 2KOH -> 2K2MnO4 + Na2SO4 + H2O" className="font-semibold" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export const ChromiumManganeseSections: React.FC<SectionsProps> = ({ scrollToNav, handleGoToPractice }) => {
  const [modalDiagram, setModalDiagram] = useState<{ type: ModalDiagramType; title: string } | null>(null);

  return (
    <div className="space-y-8">

      {/* ══════════ Раздел 1. Положение в ПСХО и строение атомов ══════════ */}
      <section id="section-general" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Хром и марганец в периодической системе. Строение атомов</h2>
              <p className="text-xs sm:text-sm text-slate-500">d-Элементы 4-го периода: «провал» электрона и спектр степеней окисления от +2 до +7</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="Хром (Z = 24) и марганец (Z = 25) расположены в 4-м периоде в группах VI-B и VII-B соответственно. Это типичные d-элементы: у них заполняется предвнешний 3d-подуровень, а на внешнем 4s-подуровне находится один-два электрона. Именно d-электроны участвуют в образовании связей наряду с s-электронами, поэтому оба элемента проявляют переменные степени окисления." />
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Электронная конфигурация хрома</h4>
            <ChemFormula math="Cr:\; 1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}3d^{5}4s^{1}" displayMode />
            <p className="text-xs sm:text-sm text-slate-600">
              Характерен{' '}
              <TermTooltip
                term="«провал» электрона"
                definition="Переход одного электрона с внешнего 4s-подуровня на предвнешний 3d-подуровень ради энергетически выгодного наполовину заполненного d⁵-состояния (у Cr, Cu и др.)."
                className="font-semibold text-slate-900"
              />
              : один 4s-электрон переходит на 3d-подуровень, образуя наполовину заполненную оболочку{' '}
              <ChemFormula formula="3d^5" className="font-bold" />. Записывать <ChemFormula formula="3d^4 4s^2" className="font-bold" /> — ошибка!
              Шесть валентных электронов (<ChemFormula formula="3d^5 4s^1" className="font-bold" />) определяют высшую степень окисления хрома +6.
            </p>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Электронная конфигурация марганца</h4>
            <ChemFormula math="Mn:\; 1s^{2}2s^{2}2p^{6}3s^{2}3p^{6}3d^{5}4s^{2}" displayMode />
            <p className="text-xs sm:text-sm text-slate-600">
              У марганца «провала» нет: 3d-подуровень уже наполовину заполнен. Семь валентных электронов{' '}
              (<ChemFormula formula="3d^5 4s^2" className="font-bold" />) обусловливают высшую степень
              окисления +7, равную номеру группы.
            </p>
          </div>
        </div>

        {/* Сравнительная amber-таблица */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Параметр</th>
                <th className="p-3.5">Хром (Cr)</th>
                <th className="p-3.5">Марганец (Mn)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Положение</td>
                <td className="p-3.5">4-й период, группа VI-B</td>
                <td className="p-3.5">4-й период, группа VII-B</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Относительная атомная масса</td>
                <td className="p-3.5 font-mono">51.996 ≈ 52</td>
                <td className="p-3.5 font-mono">54.938 ≈ 55</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Конфигурация</td>
                <td className="p-3.5"><ChemFormula math="[\mathrm{Ar}]\,3d^{5}4s^{1}" className="font-bold" /> («провал»)</td>
                <td className="p-3.5"><ChemFormula math="[\mathrm{Ar}]\,3d^{5}4s^{2}" className="font-bold" /></td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Степени окисления</td>
                <td className="p-3.5">+2, +3, +6 (реже +4, +5)</td>
                <td className="p-3.5">+2, +3, +4, +6, +7</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Наиболее устойчивая с.о.</td>
                <td className="p-3.5 text-emerald-800 font-semibold">+3 (в любой среде)</td>
                <td className="p-3.5 text-emerald-800 font-semibold">+2 (в кислой среде)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Характер оксидов</td>
                <td className="p-3.5">CrO — основный → Cr₂O₃ — амфотерный → CrO₃ — кислотный</td>
                <td className="p-3.5">MnO — основный → MnO₂ — амфотерный → Mn₂O₇ — кислотный</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">ЭО по Полингу</td>
                <td className="p-3.5 font-mono">1.66</td>
                <td className="p-3.5 font-mono">1.55</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Главная закономерность темы</h4>
          <p className="text-xs sm:text-sm text-slate-600">
            С ростом степени окисления основной характер оксидов и гидроксидов ослабевает и сменяется кислотным,
            а окислительная способность соединений усиливается. Соединения высших степеней окисления —{' '}
            <TermTooltip
              term="хроматы"
              definition="Соли хромовой кислоты H₂CrO₄, содержащие жёлтый тетраэдрический ион CrO₄²⁻ (хром в степени окисления +6)."
              className="font-semibold text-slate-900"
            />{' '}
            и{' '}
            <TermTooltip
              term="дихроматы"
              definition="Соли дихромовой кислоты H₂Cr₂O₇ с оранжевым ионом Cr₂O₇²⁻; в кислой среде — сильные окислители (E° = +1.33 В)."
              className="font-semibold text-slate-900"
            />{' '}
            хрома(+6), манганаты(+6) и{' '}
            <TermTooltip
              term="перманганаты"
              definition="Соли пермангановой кислоты HMnO₄ с фиолетовым ионом MnO₄⁻ (марганец +7); одни из сильнейших окислителей (E° = +1.51 В в кислой среде)."
              className="font-semibold text-slate-900"
            />{' '}
            марганца(+7) — сильнейшие окислители курса неорганической химии.
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
            <ChemFormula math="E^\circ(Cr^{3+}/Cr) = -0{,}74\,\text{В}\quad E^\circ(Cr^{2+}/Cr) = -0{,}91\,\text{В}\quad E^\circ(Mn^{2+}/Mn) = -1{,}18\,\text{В}" className="block" />
            <ChemFormula math="E^\circ(Cr_2O_7^{2-}/Cr^{3+}) = +1{,}33\,\text{В}\quad E^\circ(MnO_4^{-}/Mn^{2+}) = +1{,}51\,\text{В}" className="block" />
          </div>
        </div>
      </section>

      {/* ══════════ Раздел 2. Простые вещества ══════════ */}
      <section id="section-simple" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Простые вещества: хром и марганец</h2>
              <p className="text-xs sm:text-sm text-slate-500">Твёрдые тугоплавкие металлы, пассивация и реакции с кислотами</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="Хром и марганец — твёрдые тугоплавкие металлы: в ряду активности хром расположен между Zn и Fe, а марганец активнее цинка. Хром — самый твёрдый металл (8.5 по Моосу), его поверхность защищена оксидной плёнкой, поэтому с водой он практически не реагирует. Марганец твёрдый, но хрупкий, и без нагревания взаимодействует с водой очень медленно. Оба металла при нагревании соединяются с неметаллами, а поведение их в кислотах различается из-за пассивации хрома." />
        </p>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Свойство</th>
                <th className="p-3.5">Хром</th>
                <th className="p-3.5">Марганец</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-semibold">Внешний вид</td>
                <td className="p-3.5">Серебристо-белый с голубоватым отливом</td>
                <td className="p-3.5">Серебристо-серый, твёрдый, но хрупкий</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-semibold">Твёрдость по Моосу</td>
                <td className="p-3.5 font-mono">8.5 — самый твёрдый металл</td>
                <td className="p-3.5 font-mono">≈6 (α-модификация)</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-semibold">Плотность</td>
                <td className="p-3.5 font-mono">7.19 г/см³</td>
                <td className="p-3.5 font-mono">7.3 г/см³</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-semibold">t пл. / t кип.</td>
                <td className="p-3.5 font-mono">1907 °C / 2671 °C</td>
                <td className="p-3.5 font-mono">1246 °C / 2061 °C</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-semibold">Положение в ряду активности</td>
                <td className="p-3.5">Между Zn и Fe</td>
                <td className="p-3.5">Перед Zn (активнее цинка)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Реакции с неметаллами (при нагревании)</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• С кислородом: <ChemFormula formula="4Cr + 3O2 -t-> 2Cr2O3" className="font-bold text-slate-900" />; <ChemFormula formula="3Mn + 2O2 -t-> Mn3O4" className="font-bold text-slate-900" /></div>
            <div>• С галогенами: <ChemFormula formula="2Cr + 3Cl2 -t-> 2CrCl3" className="font-bold text-slate-900" />; <ChemFormula formula="Mn + Cl2 -t-> MnCl2" className="font-bold text-slate-900" /></div>
            <div>• С азотом: <ChemFormula formula="2Cr + N2 -t-> 2CrN" className="font-bold text-slate-900" />; <ChemFormula formula="3Mn + N2 -t-> Mn3N2" className="font-bold text-slate-900" /></div>
            <div>• С серой и углеродом: <ChemFormula formula="2Cr + 3S -t-> Cr2S3" className="font-bold text-slate-900" />; <ChemFormula formula="Mn + S -t-> MnS" className="font-bold text-slate-900" />; образуются также карбиды</div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Взаимодействие с водой и кислотами</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• Хром с водой практически не реагирует (защитная оксидная плёнка); марганец очень медленно реагирует с холодной водой и значительно быстрее — при нагревании: <ChemFormula formula="Mn + 2H2O -t-> Mn(OH)2 + H2^" className="font-bold text-slate-900" /></div>
            <div><ChemText text="• Разбавленные HCl и H2SO4:" /> <ChemFormula formula="Cr + 2HCl -> CrCl2 + H2^" className="font-bold text-slate-900" /> (голубой раствор соли Cr²⁺); <ChemFormula formula="Mn + H2SO4 -> MnSO4 + H2^" className="font-bold text-slate-900" /> (бледно-розовый раствор)</div>
            <div><ChemText text="• Хром при комнатной температуре пассивируется концентрированными H2SO4 и HNO3; при нагревании окисляется без выделения водорода:" /> <ChemFormula formula="2Cr + 6H2SO4(конц) -t-> Cr2(SO4)3 + 3SO2^ + 6H2O" className="font-bold text-slate-900" />; <ChemFormula formula="Cr + 6HNO3(конц) -t-> Cr(NO3)3 + 3NO2^ + 3H2O" className="font-bold text-slate-900" /></div>
            <div>• Марганец, в отличие от хрома, не пассивируется: с концентрированной азотной кислотой бурно реагирует с образованием бурого газа: <ChemFormula formula="Mn + 4HNO3(конц) -> Mn(NO3)2 + 2NO2^ + 2H2O" className="font-bold text-slate-900" /></div>
            <div>• С растворами щелочей оба металла не взаимодействуют (в отличие от цинка и алюминия).</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
            <span className="font-bold">Водород НЕ выделяется!</span>{' '}
            <ChemText text="Концентрированные HNO3 и H2SO4 — кислоты-окислители: при реакции с металлами выделяются NO2, NO или SO2, но никогда не H2 (это верно для всех металлов без исключения)." />
            {' '}Хром при комнатной температуре дополнительно пассивируется ими (как Fe и Al), а марганец с концентрированной азотной кислотой бурно реагирует даже без нагревания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ChromiumManganeseDarkBlock4 />

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs sm:text-sm">
                <Factory className="w-4 h-4 text-slate-700" />
                <span>Практическое значение пассивации</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <TermTooltip
                  term="Пассивация"
                  definition="Образование на поверхности металла плотной защитной оксидной плёнки, препятствующей дальнейшему протеканию реакции при комнатной температуре."
                  className="font-semibold text-slate-900"
                />{' '}
                защищает хром от концентрированных кислот — именно поэтому холодную концентрированную
                серную и азотную кислоты перевозят в стальных резервуарах без разрушения.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-600">
              <ChemText text="Марганец ведёт себя иначе: он не пассивируется и бурно реагирует с концентрированной HNO3 с выделением бурого газа NO2 даже без нагревания." />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ Раздел 3. Соединения Cr(+2) и Cr(+3) ══════════ */}
      <section id="section-cr-compounds" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Соединения хрома(+2) и хрома(+3)</h2>
              <p className="text-xs sm:text-sm text-slate-500">От основного CrO до амфотерного Cr(OH)₃; восстановительные свойства Cr²⁺</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="Наиболее устойчивая степень окисления хрома — +3: Cr2O3 и Cr(OH)3 амфотерны и реагируют как с кислотами, так и со щелочами. Соединения хрома(+2) — сильные восстановители: они легко окисляются даже кислородом воздуха. Окисление же хрома(+3) до хроматов возможно только в щелочной среде." />
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Хром(+2): сильный восстановитель</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• <ChemFormula formula="CrO" className="font-bold" /> — чёрный основный оксид; <ChemFormula formula="Cr(OH)2" className="font-bold" /> — жёлтое основание, легко окисляется воздухом: <ChemFormula formula="4Cr(OH)2 + O2 + 2H2O -> 4Cr(OH)3" className="font-bold text-slate-900" /></div>
            <div>• Соли Cr²⁺ (например, <ChemFormula formula="CrCl2" className="font-bold" />, <ChemFormula formula="CrSO4" className="font-bold" />) дают голубые растворы и легко окисляются даже кислородом воздуха: <ChemFormula formula="4CrCl2 + O2 + 4HCl -> 4CrCl3 + 2H2O" className="font-bold text-slate-900" /></div>
            <div>• Получение: <ChemFormula formula="Cr + 2HCl -> CrCl2 + H2^" className="font-bold text-slate-900" /></div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Хром(+3): амфотерность — ключевое свойство</h4>
          <p className="text-xs sm:text-sm text-slate-600">
            <ChemFormula formula="Cr2O3" className="font-bold" /> — зелёный тугоплавкий порошок, а{' '}
            <ChemFormula formula="Cr(OH)3" className="font-bold" /> — серо-зелёный студенистый осадок. Оба соединения{' '}
            <TermTooltip
              term="амфотерны"
              definition="Способность соединения проявлять свойства и основания (реагировать с кислотами), и кислоты (реагировать со щелочами)."
              className="font-semibold text-slate-900"
            />
            : реагируют и с кислотами, и со щелочами.
          </p>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• С кислотами: <ChemFormula formula="Cr2O3 + 6HCl -> 2CrCl3 + 3H2O" className="font-bold text-slate-900" />; <ChemFormula formula="Cr(OH)3 + 3HCl -> CrCl3 + 3H2O" className="font-bold text-slate-900" /></div>
            <div>• Со щелочами в растворе — гидроксокомплексы: <ChemFormula formula="Cr2O3 + 2NaOH + 3H2O -> 2Na[Cr(OH)4]" className="font-bold text-slate-900" />; <ChemFormula formula="Cr(OH)3 + 3NaOH -> Na3[Cr(OH)6]" className="font-bold text-slate-900" /> (избыток щёлочи)</div>
            <div>• При сплавлении — безводные соли —{' '}
              <TermTooltip
                term="хромиты"
                definition="Соли хромистой кислоты HCrO₂, содержащие ион CrO₂⁻ (хром +3), например NaCrO₂; образуются при сплавлении Cr₂O₃ или Cr(OH)₃ со щелочами."
                className="font-semibold text-slate-900"
              />:
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
            <ChemFormula math="Cr_2O_3 + 2NaOH \xrightarrow{\text{сплавление}} 2NaCrO_2 + H_2O" className="block font-bold text-slate-900" />
            <ChemFormula math="Cr(OH)_3 + NaOH \xrightarrow{\text{сплавление}} NaCrO_2 + 2H_2O" className="block font-bold text-slate-900" />
            <ChemFormula math="Cr_2O_3 + Na_2CO_3 \xrightarrow{\text{сплавление}} 2NaCrO_2 + CO_2\uparrow" className="block font-bold text-slate-900" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• Получение Cr(OH)₃: <ChemFormula formula="CrCl3 + 3NH3*H2O -> Cr(OH)3v + 3NH4Cl" className="font-bold text-slate-900" /> (осаждение слабым основанием)</div>
            <div>• Получение Cr₂O₃: <ChemFormula formula="2Cr(OH)3 -t-> Cr2O3 + 3H2O" className="font-bold text-slate-900" /> или разложение дихромата аммония — «химический вулкан»: <ChemFormula formula="(NH4)2Cr2O7 -t-> Cr2O3 + N2^ + 4H2O" className="font-bold text-slate-900" /></div>
          </div>
        </div>

        <ChemicalVolcanoFunFact />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Окисление Cr(+3) до Cr(+6) — только в щелочной среде</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• Пероксидом водорода: <ChemFormula formula="2Na3[Cr(OH)6] + 3H2O2 -> 2Na2CrO4 + 2NaOH + 8H2O" className="font-bold text-slate-900" /></div>
            <div>• Для хромитов: <ChemFormula formula="2NaCrO2 + 3H2O2 + 2NaOH -> 2Na2CrO4 + 4H2O" className="font-bold text-slate-900" /></div>
            <div>• Галогенами: <ChemFormula formula="2CrCl3 + 3Br2 + 16KOH -> 2K2CrO4 + 6KBr + 6KCl + 8H2O" className="font-bold text-slate-900" /></div>
            <div>• Обратный переход — восстановление Zn в соляной кислоте: <ChemFormula formula="2CrCl3 + Zn -> 2CrCl2 + ZnCl2" className="font-bold text-slate-900" /></div>
          </div>
        </div>
      </section>

      {/* ══════════ Раздел 4. Хром(+6) ══════════ */}
      <section id="section-chromates" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Хром(+6): оксид CrO₃, хроматы и дихроматы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Равновесие, управляемое pH, и окислительные свойства в кислой среде</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="Высшую степень окисления +6 хром проявляет в кислотном оксиде CrO3 и солях хромовой кислоты H2CrO4. Жёлтые хроматы и оранжевые дихроматы — сильные окислители: в кислой среде дихромат-ион окисляет многие восстановители, восстанавливаясь до солей хрома(+3). Равновесие между хромат- и дихромат-ионами легко смещается изменением pH, что делает его одной из самых наглядных демонстраций химического равновесия." />
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Оксид хрома(VI) — кислотный оксид и сильный окислитель</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• Тёмно-красные («вишнёвые») кристаллы, растворимы в воде с образованием хромовой кислоты (устойчива только в разбавленном растворе): <ChemFormula formula="CrO3 + H2O -> H2CrO4" className="font-bold text-slate-900" /></div>
            <div>• Со щелочами: <ChemFormula formula="CrO3 + 2NaOH -> Na2CrO4 + H2O" className="font-bold text-slate-900" /></div>
            <div>• Окисляет органические вещества — этанол воспламеняется при контакте: <ChemFormula formula="2CrO3 + 3C2H5OH -> Cr2O3 + 3CH3CHO + 3H2O" className="font-bold text-slate-900" /></div>
            <div>• Получение: <ChemFormula formula="K2Cr2O7 + H2SO4(конц) -> 2CrO3v + K2SO4 + H2O" className="font-bold text-slate-900" /></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Равновесие хромат ⇄ дихромат</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Жёлтые хроматы <ChemFormula formula="CrO4(2-)" className="font-bold" /> и оранжевые дихроматы{' '}
              <ChemFormula formula="Cr2O7(2-)" className="font-bold" /> связаны равновесием, которое
              смещается изменением pH:
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
              <ChemFormula formula="2CrO4(2-) + 2H+ <=> Cr2O7(2-) + H2O" className="block font-bold text-slate-900" />
              <ChemFormula formula="2K2CrO4 + H2SO4 -> K2Cr2O7 + K2SO4 + H2O" className="block" />
              <ChemFormula formula="K2Cr2O7 + 2KOH -> 2K2CrO4 + H2O" className="block" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Подкисление жёлтого раствора делает его оранжевым, добавление щёлочи возвращает жёлтую окраску —
              одна из самых наглядных демонстраций химического равновесия.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => setModalDiagram({
                type: 'cro4',
                title: 'Хромат-ион CrO₄²⁻ — правильный тетраэдр, d(Cr–O) ≈ 1.65 Å',
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <ChromiumManganese2DRender type="cro4" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Хромат-ион CrO₄²⁻
              </div>
            </button>

            <button
              onClick={() => setModalDiagram({
                type: 'cr2o7',
                title: 'Дихромат-ион Cr₂O₇²⁻ — два тетраэдра CrO₄ с общей вершиной',
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <ChromiumManganese2DRender type="cr2o7" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Дихромат-ион Cr₂O₇²⁻
              </div>
            </button>
          </div>
        </div>

        <ChromiumColorFunFact />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Окислительные свойства дихроматов (кислая среда)</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• Окисление солей железа(+2) — оранжевый раствор становится зелёным: <ChemFormula formula="K2Cr2O7 + 6FeSO4 + 7H2SO4 -> Cr2(SO4)3 + 3Fe2(SO4)3 + K2SO4 + 7H2O" className="font-bold text-slate-900" /></div>
            <div>• С концентрированной соляной кислотой выделяется хлор: <ChemFormula formula="K2Cr2O7 + 14HCl(конц) -t-> 2CrCl3 + 3Cl2^ + 2KCl + 7H2O" className="font-bold text-slate-900" /></div>
            <div>• Сернистый газ: <ChemFormula formula="K2Cr2O7 + 3SO2 + H2SO4 -> Cr2(SO4)3 + K2SO4 + H2O" className="font-bold text-slate-900" /></div>
            <div>• Сероводород окисляется до серы: <ChemFormula formula="K2Cr2O7 + 3H2S + 4H2SO4 -> Cr2(SO4)3 + 3Sv + K2SO4 + 7H2O" className="font-bold text-slate-900" /></div>
            <div>• Пероксид водорода: <ChemFormula formula="K2Cr2O7 + 3H2O2 + 4H2SO4 -> Cr2(SO4)3 + 3O2^ + K2SO4 + 7H2O" className="font-bold text-slate-900" /></div>
          </div>
        </div>

        {/* Качественные реакции — amber таблица */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Реагент</th>
                <th className="p-3.5">Уравнение</th>
                <th className="p-3.5">Признак</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Соли бария</td>
                <td className="p-3.5"><ChemFormula formula="K2CrO4 + BaCl2 -> BaCrO4v + 2KCl" className="font-bold" /></td>
                <td className="p-3.5">Жёлтый осадок; растворяется в сильных кислотах (отличие от BaSO₄)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Соли свинца</td>
                <td className="p-3.5"><ChemFormula formula="K2CrO4 + Pb(NO3)2 -> PbCrO4v + 2KNO3" className="font-bold" /></td>
                <td className="p-3.5">Жёлтый осадок — пигмент «крон»</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Нитрат серебра</td>
                <td className="p-3.5"><ChemFormula formula="K2CrO4 + 2AgNO3 -> Ag2CrO4v + 2KNO3" className="font-bold" /></td>
                <td className="p-3.5">Кирпично-красный осадок (индикатор метода Мора)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Пероксид водорода + кислота</td>
                <td className="p-3.5"><ChemFormula formula="K2Cr2O7 + 4H2O2 + H2SO4 -> 2CrO5 + K2SO4 + 5H2O" className="font-bold" /></td>
                <td className="p-3.5">Синий пероксид хрома CrO₅, извлекается эфиром</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">Проба на хлорид-ионы — «хлорид хромоила»</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              При нагревании хлорида с дихроматом калия и концентрированной серной кислотой выделяются
              красные дымящиеся пары{' '}
              <TermTooltip
                term="хлорида хромоила"
                definition="CrO₂Cl₂ — соединение хрома(+6), тетраэдрическая молекула с двумя связями Cr=O и двумя Cr–Cl; тёмно-красная дымящая жидкость."
                className="font-semibold text-slate-900"
              />
              :
            </p>
            <ChemFormula formula="K2Cr2O7 + 4KCl + 3H2SO4(конц) -t-> 2CrO2Cl2^ + 3K2SO4 + 3H2O" className="font-bold text-slate-900" />
          </div>

          <button
            onClick={() => setModalDiagram({
              type: 'cro2cl2',
              title: 'Хлорид хромоила CrO₂Cl₂ — тетраэдр хрома(+6)',
            })}
            className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
            title="Нажмите для открытия справочной структурной формулы"
          >
            <ChromiumManganese2DRender type="cro2cl2" />
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
              Хлорид хромоила
            </div>
          </button>
        </div>

        <ChromiumOxyFormsLightPanel />
      </section>

      {/* ══════════ Раздел 5. Соединения Mn(+2) и Mn(+4) ══════════ */}
      <section id="section-mn-compounds" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Соединения марганца(+2) и марганца(+4)</h2>
              <p className="text-xs sm:text-sm text-slate-500">Основный MnO, «буреющий» Mn(OH)₂ и окислитель-катализатор MnO₂</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="В отличие от хрома, у марганца наиболее устойчива степень окисления +2 (в кислой среде): MnO и Mn(OH)2 — соединения основного характера, а гидроксид марганца(+2) легко окисляется кислородом воздуха. Марганец(+4) представлен диоксидом MnO2 — амфотерным соединением, которое работает и как окислитель, и как катализатор; именно из него сплавлением со щёлочью получают зелёные манганаты." />
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Марганец(+2): самое устойчивое состояние в кислой среде</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• <ChemFormula formula="MnO" className="font-bold" /> — зелёный основный оксид; <ChemFormula formula="Mn(OH)2" className="font-bold" /> — белое основание, осаждается щелочами: <ChemFormula formula="MnSO4 + 2NaOH -> Mn(OH)2v + Na2SO4" className="font-bold text-slate-900" /></div>
            <div>• На воздухе белый осадок буреет — окисляется кислородом до MnO₂: <ChemFormula formula="2Mn(OH)2 + O2 -> 2MnO2v + 2H2O" className="font-bold text-slate-900" /></div>
            <div>• С кислотами: <ChemFormula formula="Mn(OH)2 + 2HCl -> MnCl2 + 2H2O" className="font-bold text-slate-900" /></div>
            <div>• Соли Mn²⁺ дают бледно-розовые растворы; сильные окислители переводят их в фиолетовый перманганат (качественная реакция): <ChemFormula formula="2Mn(NO3)2 + 5PbO2 + 6HNO3 -> 2HMnO4 + 5Pb(NO3)2 + 2H2O" className="font-bold text-slate-900" /></div>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Марганец(+4): диоксид — окислитель и катализатор</h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• <ChemFormula formula="MnO2" className="font-bold" /> — чёрный порошок, нерастворим в воде; с концентрированной соляной кислотой даёт хлор (получение Cl₂, К. Шееле, 1774 г.): <ChemFormula formula="MnO2 + 4HCl(конц) -t-> MnCl2 + Cl2^ + 2H2O" className="font-bold text-slate-900" /></div>
            <div>• С концентрированной серной кислотой: <ChemFormula formula="2MnO2 + 2H2SO4(конц) -t-> 2MnSO4 + O2^ + 2H2O" className="font-bold text-slate-900" /></div>
            <div>• Катализатор разложения: <ChemFormula formula="2H2O2 -(MnO2)-> 2H2O + O2^" className="font-bold text-slate-900" />; <ChemFormula formula="2KClO3 -(MnO2, t)-> 2KCl + 3O2^" className="font-bold text-slate-900" /></div>
            <div>• При сплавлении со щёлочью в присутствии окислителя образуется зелёный манганат:</div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
            <ChemFormula math="2MnO_2 + 4KOH + O_2 \xrightarrow{\text{сплавление}} 2K_2MnO_4 + 2H_2O" className="block font-bold text-slate-900" />
            <ChemFormula math="3MnO_2 + 6KOH + KClO_3 \xrightarrow{\text{сплавление}} 3K_2MnO_4 + KCl + 3H_2O" className="block font-bold text-slate-900" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div>• Получение MnO₂: термическое разложение нитрата: <ChemFormula formula="Mn(NO3)2 -t-> MnO2 + 2NO2^" className="font-bold text-slate-900" /></div>
          </div>
        </div>

        <ManganeseBatteryFunFact />

        {/* Сводная таблица цветов соединений марганца */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">С.о. Mn</th>
                <th className="p-3.5">Соединение</th>
                <th className="p-3.5">Окраска</th>
                <th className="p-3.5">Характер</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-mono">+2</td>
                <td className="p-3.5"><ChemFormula formula="Mn(OH)2" className="font-bold" />, соли Mn²⁺</td>
                <td className="p-3.5">Белая / бледно-розовая</td>
                <td className="p-3.5">Основный</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-mono">+4</td>
                <td className="p-3.5"><ChemFormula formula="MnO2" className="font-bold" /></td>
                <td className="p-3.5">Чёрная</td>
                <td className="p-3.5">Амфотерный, окислитель</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-mono">+6</td>
                <td className="p-3.5"><ChemFormula formula="K2MnO4" className="font-bold" /></td>
                <td className="p-3.5 text-emerald-800 font-semibold">Зелёная</td>
                <td className="p-3.5">Устойчив только в щёлочи</td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-mono">+7</td>
                <td className="p-3.5"><ChemFormula formula="KMnO4" className="font-bold" /></td>
                <td className="p-3.5 text-purple-800 font-semibold">Фиолетовая</td>
                <td className="p-3.5">Сильный окислитель</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════ Раздел 6. Манганаты и перманганаты ══════════ */}
      <section id="section-permanganates" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Марганец(+6) и марганец(+7): манганаты и перманганаты</h2>
              <p className="text-xs sm:text-sm text-slate-500">Диспропорционирование манганатов и «правило среды» для перманганата</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="Высшие степени окисления марганца образуют манганаты (MnO4(2-), зелёные) и перманганаты (MnO4(-), фиолетовые) — сильнейшие окислители. Манганат-ион устойчив только в сильнощелочной среде и в воде диспропорционирует. А продукт восстановления фиолетового перманганат-иона целиком определяется средой раствора — это главное «правило среды» темы." />
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Манганаты — зелёные, неустойчивы в воде</h4>
          <p className="text-xs sm:text-sm text-slate-600">
            Манганат-ион <ChemFormula formula="MnO4(2-)" className="font-bold" /> устойчив лишь в сильнощелочной среде;
            при разбавлении водой или подкислении происходит{' '}
            <TermTooltip
              term="диспропорционирование"
              definition="Окислительно-восстановительная реакция, в которой атомы одного и того же элемента одновременно окисляются и восстанавливаются."
              className="font-semibold text-slate-900"
            />
            — зелёный раствор становится фиолетовым и выпадает бурый осадок:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
            <ChemFormula formula="3K2MnO4 + 2H2O -> 2KMnO4 + MnO2v + 4KOH" className="block font-bold text-slate-900" />
            <ChemFormula formula="3MnO4(2-) + 4H+ -> 2MnO4(-) + MnO2v + 2H2O" className="block" />
            <ChemFormula formula="2K2MnO4 + Cl2 -> 2KMnO4 + 2KCl" className="block" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Перманганат калия — «марганцовка»</h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>• Тёмно-фиолетовые кристаллы; при нагревании разлагается — лабораторный способ получения кислорода: <ChemFormula formula="2KMnO4 -t-> K2MnO4 + MnO2 + O2^" className="font-bold text-slate-900" /></div>
              <div>• С концентрированной соляной кислотой: <ChemFormula formula="2KMnO4 + 16HCl(конц) -> 2MnCl2 + 5Cl2^ + 2KCl + 8H2O" className="font-bold text-slate-900" /></div>
              <div>• Окисление сернистого газа в водном растворе: <ChemFormula formula="2KMnO4 + 5SO2 + 2H2O -> 2MnSO4 + K2SO4 + 2H2SO4" className="font-bold text-slate-900" /></div>
              <div>•{' '}
                <TermTooltip
                  term="Реакция Вагнера"
                  definition="Мягкое окисление алкенов водным раствором KMnO₄ с образованием двухатомных спиртов (диолов) и бурым осадком MnO₂; качественная реакция на кратные связи."
                  className="font-semibold text-slate-900"
                />
                — окисление этилена до этиленгликоля: <ChemFormula formula="3CH2=CH2 + 2KMnO4 + 4H2O -> 3C2H4(OH)2 + 2MnO2v + 2KOH" className="font-bold text-slate-900" />
              </div>
            </div>
          </div>

          <button
            onClick={() => setModalDiagram({
              type: 'mno4',
              title: 'Перманганат-ион MnO₄⁻ — тетраэдр марганца(+7), d(Mn–O) ≈ 1.63 Å',
            })}
            className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
            title="Нажмите для открытия справочной структурной формулы"
          >
            <ChromiumManganese2DRender type="mno4" />
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
              Перманганат-ион MnO₄⁻
            </div>
          </button>
        </div>

        {/* Главная таблица темы: продукты восстановления KMnO4 */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Среда</th>
                <th className="p-3.5">Полуреакция восстановления</th>
                <th className="p-3.5">Продукт и признак</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Кислая (H⁺)</td>
                <td className="p-3.5"><ChemFormula formula="MnO4(-) + 8H(+) + 5e- -> Mn2+ + 4H2O" className="font-bold" /></td>
                <td className="p-3.5">Mn²⁺ — раствор обесцвечивается (бледно-розовый)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Нейтральная</td>
                <td className="p-3.5"><ChemFormula formula="MnO4(-) + 2H2O + 3e- -> MnO2v + 4OH-" className="font-bold" /></td>
                <td className="p-3.5">MnO₂ — бурый осадок</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold">Сильнощелочная (OH⁻)</td>
                <td className="p-3.5"><ChemFormula formula="MnO4(-) + 1e- -> MnO4(2-)" className="font-bold" /></td>
                <td className="p-3.5">MnO₄²⁻ — зелёный раствор</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Примеры полных уравнений по «правилу среды» сгруппированы по ветвям tree-диаграммы */}
        <PermanganateMediumDiagram />

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Марганец(+7) вне растворов: HMnO₄ и Mn₂O₇</h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>• Пермангановая кислота <ChemFormula formula="HMnO4" className="font-bold" /> — сильная, существует только в разбавленном растворе.</div>
              <div>• Ангидрид <ChemFormula formula="Mn2O7" className="font-bold" /> — тёмно-зелёная маслянистая жидкость, взрывоопасен и воспламеняет органику: <ChemFormula formula="Mn2O7 + H2O -> 2HMnO4" className="font-bold text-slate-900" /></div>
              <div>• Получение (опасно!): <ChemFormula math="2KMnO_4 + 2H_2SO_4(\text{конц.}) \xrightarrow{0\,^\circ\mathrm{C}} Mn_2O_7 + 2KHSO_4 + H_2O" className="font-bold text-slate-900" /></div>
            </div>
          </div>

          <button
            onClick={() => setModalDiagram({
              type: 'mn2o7',
              title: 'Оксид марганца(VII) Mn₂O₇ — два тетраэдра MnO₄ с общей вершиной',
            })}
            className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
            title="Нажмите для открытия справочной структурной формулы"
          >
            <ChromiumManganese2DRender type="mn2o7" />
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
              Оксид марганца(VII)
            </div>
          </button>
        </div>

        <ChromiumManganeseDarkBlock3 />
      </section>

      {/* ══════════ Раздел 7. Природа и промышленное получение ══════════ */}
      <section id="section-genesis" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Нахождение в природе и промышленное получение</h2>
              <p className="text-xs sm:text-sm text-slate-500">Хромит и пиролюзит, алюминотермия и ферросплавы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p>
          <ChemText text="Главные минералы хрома — хромит FeCr2O4 и крокоит PbCrO4, марганца — пиролюзит MnO2. Оба металла получают восстановлением из оксидов: алюминотермия даёт чистые металлы, а восстановление углеродом в электропечах — ферросплавы, главные легирующие и раскисляющие компоненты сталей." />
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Минералы хрома</h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>• <TermTooltip term="Хромит (хромистый железняк)" definition="FeCr₂O₄ (FeO·Cr₂O₃) — главный минерал хрома; крупные месторождения — на Южном Урале." className="font-semibold text-slate-900" />: <ChemFormula formula="FeCr2O4" className="font-bold" /> (= FeO·Cr₂O₃)</div>
              <div>• Крокоит: <ChemFormula formula="PbCrO4" className="font-bold" /> — ярко-красный минерал, из которого хром был открыт Л. Вокленом в 1797 году</div>
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Минералы марганца</h4>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>• Пиролюзит: <ChemFormula formula="MnO2" className="font-bold" /> — главный промышленный минерал</div>
              <div>• Манганит: <ChemFormula formula="MnO(OH)" className="font-bold" />; родохрозит: <ChemFormula formula="MnCO3" className="font-bold" />; гаусманит: <ChemFormula formula="Mn3O4" className="font-bold" /></div>
            </div>
          </div>
        </div>

        {/* Большой тёмный блок — полная ширина (многостадийная цепочка) */}
        <ChromiumManganeseDarkBlock1 />

        {/* Малый тёмный блок + светлая карточка-партнёр */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ChromiumManganeseDarkBlock2 />

          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Factory className="w-4 h-4 text-slate-700" />
              <span>Применение хрома и марганца</span>
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600">
              <div>• Хром — нержавеющие стали (12–20 % Cr), нихром, хромирование деталей, дубление кожи.</div>
              <div>• Марганец — ферромарганец для раскисления стали, износостойкая сталь Гадфильда (~13 % Mn), батарейки на основе MnO₂.</div>
            </div>
          </div>
        </div>

        <AlloyFunFact />
      </section>

      {/* ══════════ Раздел 8. 3D-модели ══════════ */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8. 3D-модели соединений хрома и марганца</h2>
              <p className="text-xs sm:text-sm text-slate-500">Интерактивные модели оксоанионов и оксидов — вращайте и изучайте геометрию</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <MoleculeViewer3D
          moleculeIds={['cro3', 'cro4', 'cr2o7', 'cro2cl2', 'mno4', 'mno42', 'mn2o7', 'hmno4']}
          initialSelectedId="mno4"
          title="Интерактивные 3D-модели соединений хрома и марганца"
        />

        <PracticeBanner
          topicCode="ХЭ-04"
          onGoToPractice={handleGoToPractice}
        />
      </section>

      {/* ══════════ Статическая модалка 2D-схем ══════════ */}
      {modalDiagram && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-5 sm:p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base sm:text-lg">{modalDiagram.title}</h3>
              <button
                onClick={() => setModalDiagram(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center justify-center bg-slate-950 rounded-xl p-4 border border-slate-800 min-h-[320px]">
              <ChromiumManganese2DRender type={modalDiagram.type} isModal={true} />
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
