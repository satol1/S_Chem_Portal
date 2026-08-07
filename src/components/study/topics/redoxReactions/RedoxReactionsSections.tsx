import React, { useState } from 'react';
import { ZoomIn, X, FlaskConical, BookOpen, ShieldAlert, TestTube, Zap, Scale } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { ChemText } from '../../../scientific/ChemText';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';

import { RedoxReactions2DRender, RedoxChlorineOxyacidsLightPanel } from './RedoxReactions2DRenders';
import {
  PermanganateMediaInfographic,
  ActivitySeriesInfographic,
  ElectrolyzerInfographic,
  ElectrolysisSolutionsTreeInfographic
} from './RedoxReactionsInfographics';
import { RedoxConceptFlow } from './RedoxReactionsConceptFlow';
import {
  RedoxDarkBlockHalfReactions,
  RedoxDarkBlockHallHeroult,
  RedoxDarkBlockBeketov,
  RedoxDarkBlockElectroplating
} from './RedoxReactionsDarkBlocks';
import {
  RedoxFunFactLavoisier,
  RedoxFunFactAquaRegia,
  RedoxFunFactBleach,
  RedoxFunFactDavy,
  RedoxFunFactAluminum
} from './RedoxReactionsFunFacts';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

export const RedoxReactionsSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  const [modalDiagram, setModalDiagram] = useState<{ type: 'h2o2' | 'mno4' | 'cr2o7'; title: string } | null>(null);

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 6.1: Общие понятия */}
      <section id="section-redox-concepts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.1. Общие понятия ОВР</h2>
              <p className="text-xs sm:text-sm text-slate-500">Степень окисления, окисление и восстановление, окислитель и восстановитель</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Окислительно-восстановительные реакции (ОВР) — реакции, протекающие с изменением степеней окисления элементов. В отличие от реакций ионного обмена, в ОВР происходит перенос электронов между частицами: одни вещества теряют электроны, другие их принимают. Чтобы описать этот перенос количественно, используют понятие{' '}
          <TermTooltip term="степень окисления" definition="Условный заряд атома в соединении, вычисленный в предположении, что все связи ионные: электронные пары полностью смещены к более электроотрицательному атому. Может быть положительной, отрицательной или нулевой." />.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          <span className="font-bold text-slate-900">Окисление</span> — процесс отдачи электронов: степень окисления элемента при этом повышается. <span className="font-bold text-slate-900">Восстановление</span> — процесс присоединения электронов: степень окисления понижается. Эти процессы неразрывны: число электронов, отданных восстановителем, всегда равно числу электронов, принятых окислителем.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Правила определения степеней окисления</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-white rounded-lg border border-slate-200">У простых веществ степень окисления равна 0: <ChemFormula math="\mathrm{Fe^0,\ O_2^0,\ Cl_2^0}" className="font-semibold text-slate-900" />.</div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">Фтор во всех соединениях имеет степень окисления −1.</div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">Кислород обычно −2; исключения — пероксиды (<ChemFormula formula="H2O2" className="font-semibold" />: −1) и <ChemFormula formula="OF2" className="font-semibold" /> (+2).</div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">Водород обычно +1; исключение — гидриды активных металлов (<ChemFormula formula="NaH, CaH2" className="font-semibold" />: −1).</div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 sm:col-span-2">Сумма степеней окисления атомов в молекуле равна 0, в ионе — заряду иона.</div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-slate-900 block mb-1">Примеры расчёта:</span>
            в <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> сера имеет степень окисления +6; в <ChemFormula formula="K2Cr2O7" className="font-semibold text-slate-900" /> хром +6; в ионе <ChemFormula formula="NH4+" className="font-semibold text-slate-900" /> азот −3; в <ChemFormula formula="Fe3O4" className="font-semibold text-slate-900" /> средняя степень окисления железа +8/3 (смешанный оксид <ChemFormula formula="FeO*Fe2O3" className="font-semibold text-slate-900" />).
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые полуреакции</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center"><ChemFormula formula="Fe(0) - 2e- -> Fe(+2)" /><span className="block text-[11px] text-slate-500 mt-1">окисление</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center"><ChemFormula formula="S(0) + 2e- -> S(-2)" /><span className="block text-[11px] text-slate-500 mt-1">восстановление</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center"><ChemFormula formula="Mn(+7) + 5e- -> Mn(+2)" /><span className="block text-[11px] text-slate-500 mt-1">восстановление</span></div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Scale className="w-4 h-4 text-slate-700" />
            <span>Роль элемента зависит от степени окисления</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-rose-700 block">Высшая степень окисления</span>
              <p className="text-slate-600">Может только принимать электроны — <TermTooltip term="окислитель" definition="Частица, принимающая электроны в ходе реакции; окислитель восстанавливается." />: <ChemFormula math="\mathrm{S^{+6},\ N^{+5},\ Cr^{+6},\ Mn^{+7}}" className="font-semibold" />.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-emerald-700 block">Низшая степень окисления</span>
              <p className="text-slate-600">Может только отдавать электроны — восстановитель: <ChemFormula math="\mathrm{S^{-2},\ N^{-3},\ Cl^{-1}}" className="font-semibold" />, металлы в степени окисления 0.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-amber-700 block">Промежуточная степень окисления</span>
              <p className="text-slate-600">Проявляет двойственность: <ChemFormula math="\mathrm{S^{+4},\ N^{+3},\ N^{+4},\ Fe^{+2}}" className="font-semibold" />, кислород −1 в пероксидах.</p>
            </div>
          </div>
        </div>

        <div className="my-6">
          <RedoxConceptFlow />
        </div>

        <RedoxFunFactLavoisier />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Степень окисления</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Окисление</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Восстановление</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Окислитель</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Восстановитель</span>
        </div>
      </section>

      {/* SECTION 6.2: Окислители и восстановители */}
      <section id="section-oxidizers-reducers" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.2. Окислители и восстановители</h2>
              <p className="text-xs sm:text-sm text-slate-500">Важнейшие вещества, двойственность, влияние среды раствора</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Важнейшие окислители — простые вещества с высокой электроотрицательностью (кислород, озон, галогены; окислительная способность галогенов убывает в ряду <ChemFormula math="\mathrm{F_2 > Cl_2 > Br_2 > I_2}" className="font-semibold text-slate-900" />) и соединения элементов в высших степенях окисления: перманганат калия <ChemFormula formula="KMnO4" className="font-semibold text-slate-900" />, дихромат калия <ChemFormula formula="K2Cr2O7" className="font-semibold text-slate-900" />, азотная и концентрированная серная кислоты, пероксид водорода <ChemFormula formula="H2O2" className="font-semibold text-slate-900" />, оксид свинца(IV) <ChemFormula formula="PbO2" className="font-semibold text-slate-900" />, соли железа(III) и меди(II), хлорат калия <ChemFormula formula="KClO3" className="font-semibold text-slate-900" />, нитраты.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Важнейшие восстановители — активные металлы (щелочные и щёлочноземельные, алюминий, цинк, железо и др.), простые вещества водород, углерод, кремний, а также соединения элементов в низших степенях окисления: угарный газ <ChemFormula formula="CO" className="font-semibold text-slate-900" />, сероводород и сульфиды, иодоводород и бромоводород, галогенид-ионы, аммиак, соли железа(II) и олова(II), сульфиты.
        </p>

        {/* Таблица 1: янтарная сравнительная */}
        <div className="my-4 overflow-x-auto rounded-xl border border-amber-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-amber-50 text-amber-900 font-bold border-b border-amber-200">
              <tr>
                <th className="p-3">Окислитель</th>
                <th className="p-3">Продукт восстановления</th>
                <th className="p-3">Условия и среда</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100 bg-white font-normal text-slate-700">
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="KMnO4" /></td>
                <td className="p-3"><ChemFormula formula="Mn(2+)" /> (бесцветный раствор)</td>
                <td className="p-3">кислая среда</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="KMnO4" /></td>
                <td className="p-3"><ChemFormula formula="MnO2" /> (бурый осадок)</td>
                <td className="p-3">нейтральная среда</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="KMnO4" /></td>
                <td className="p-3"><ChemFormula formula="K2MnO4" /> (зелёный раствор)</td>
                <td className="p-3">сильнощелочная среда</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="K2Cr2O7" /></td>
                <td className="p-3">соли <ChemFormula formula="Cr(3+)" /> (зелёные)</td>
                <td className="p-3">кислая среда</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="HNO3" /> концентрированная</td>
                <td className="p-3"><ChemFormula formula="NO2" /> (бурый газ)</td>
                <td className="p-3">с металлами и неметаллами</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="HNO3" /> разбавленная</td>
                <td className="p-3"><ChemFormula formula="NO" /></td>
                <td className="p-3">с металлами</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="H2SO4" /> концентрированная</td>
                <td className="p-3"><ChemFormula formula="SO2" /> (реже S, <ChemFormula formula="H2S" />)</td>
                <td className="p-3">продукт зависит от активности металла</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900"><ChemFormula formula="H2O2" /></td>
                <td className="p-3"><ChemFormula formula="H2O" /> (или <ChemFormula formula="OH-" />)</td>
                <td className="p-3">как окислитель</td>
              </tr>
              <tr className="hover:bg-amber-50/50">
                <td className="p-3 font-bold text-slate-900">Галогены <ChemFormula formula="X2" /></td>
                <td className="p-3">галогенид-ионы <ChemFormula formula="X-" /></td>
                <td className="p-3">в реакциях с восстановителями</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Полуреакции восстановления в зависимости от среды</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="MnO4(-) + 8H(+) + 5e- -> Mn(2+) + 4H2O" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="MnO4(-) + 2H2O + 3e- -> MnO2v + 4OH(-)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="MnO4(-) + 1e- -> MnO4(2-)" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="Cr2O7(2-) + 14H(+) + 6e- -> 2Cr(3+) + 7H2O" /></div>
          </div>
        </div>

        <div className="my-6">
          <PermanganateMediaInfographic />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Азотная и концентрированная серная кислоты: водород не выделяется</span>
          </h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-800 block mb-1">1. Азотная кислота — окислитель за счёт азота (+5), а не иона <ChemFormula formula="H+" />:</strong>
              <ChemText text="При её реакции с металлами водород, как правило, не выделяется. Концентрированная кислота восстанавливается преимущественно до NO2, разбавленная — до NO; с активными металлами (магний, цинк) возможны N2O, N2 и NH4NO3." />
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2 bg-slate-100 rounded font-bold"><ChemFormula formula="Cu + 4HNO3(конц) -> Cu(NO3)2 + 2NO2^ + 2H2O" /></div>
                <div className="p-2 bg-slate-100 rounded font-bold"><ChemFormula formula="3Cu + 8HNO3(разб) -> 3Cu(NO3)2 + 2NO^ + 4H2O" /></div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-amber-800 block mb-1">2. Концентрированная серная кислота — окислитель за счёт серы (+6):</strong>
              <ChemText text="С малоактивными металлами (медь, ртуть) образуется SO2; с металлами средней активности — преимущественно сера; с активными металлами (магний) — возможен сероводород. Разбавленная кислота реагирует как обычная кислота с выделением водорода." />
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-2 bg-slate-100 rounded font-bold"><ChemFormula formula="Cu + 2H2SO4(конц) -> CuSO4 + SO2^ + 2H2O" /></div>
                <div className="p-2 bg-slate-100 rounded font-bold"><ChemFormula formula="Zn + 2H2SO4(конц) -> ZnSO4 + Sv + 2H2O" /></div>
                <div className="p-2 bg-slate-100 rounded font-bold"><ChemFormula formula="4Mg + 5H2SO4(конц) -> 4MgSO4 + H2S^ + 4H2O" /></div>
                <div className="p-2 bg-slate-100 rounded font-bold"><ChemFormula formula="Zn + H2SO4(разб) -> ZnSO4 + H2^" /></div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-emerald-800 block mb-1">3. <TermTooltip term="пассивация" definition="Образование на поверхности металла плотной оксидной плёнки, защищающей его от дальнейшего разрушения; снимается при нагревании." /> железа, хрома и алюминия:</strong>
              холодные концентрированные азотная и серная кислоты покрывают эти металлы защитной оксидной плёнкой, поэтому концентрированную азотную кислоту перевозят в стальных цистернах. При нагревании пассивация снимается и реакция идёт.
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={() => setModalDiagram({ type: 'h2o2', title: 'Пероксид водорода H₂O₂ — пероксидная связь O–O и кислород −1' })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <RedoxReactions2DRender type="h2o2" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Пероксид водорода H₂O₂
              </div>
            </button>
            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Пероксид водорода — вещество с двойственной природой</span>
              <p className="text-slate-600 font-normal">
                Кислород в <ChemFormula formula="H2O2" className="font-semibold" /> имеет промежуточную степень окисления −1, поэтому пероксид водорода — и окислитель, и восстановитель. Как окислитель он восстанавливается до воды: <ChemFormula formula="H2O2 + 2KI -> I2 + 2KOH" className="font-semibold" />; как восстановитель окисляется до кислорода: <ChemFormula formula="2KMnO4 + 5H2O2 + 3H2SO4 -> 2MnSO4 + 5O2^ + K2SO4 + 8H2O" className="font-semibold" />. Разложение <ChemFormula formula="2H2O2 -> 2H2O + O2^" className="font-semibold" /> — диспропорционирование кислорода (−1 → −2 и 0).
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={() => setModalDiagram({ type: 'mno4', title: 'Перманганат-ион MnO₄⁻ — тетраэдр марганца (+7)' })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <RedoxReactions2DRender type="mno4" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Перманганат-ион MnO₄⁻
              </div>
            </button>
            <button
              onClick={() => setModalDiagram({ type: 'cr2o7', title: 'Дихромат-ион Cr₂O₇²⁻ — два тетраэдра CrO₄ с общей вершиной' })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <RedoxReactions2DRender type="cr2o7" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Дихромат-ион Cr₂O₇²⁻
              </div>
            </button>
            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Ионы-окислители с элементами в высших степенях окисления</span>
              <p className="text-slate-600 font-normal">
                Перманганат-ион <ChemFormula formula="MnO4(-)" className="font-semibold" /> (марганец +7) и дихромат-ион <ChemFormula formula="Cr2O7(2-)" className="font-semibold" /> (хром +6) — сильные окислители: первый меняет окраску от фиолетовой в зависимости от среды, второй в кислой среде превращается в зелёные соли хрома(III). Фтор — сильнейший окислитель среди простых веществ, он окисляет даже воду: <ChemFormula formula="2F2 + 2H2O -> 4HF + O2" className="font-semibold" />.
              </p>
            </div>
          </div>
        </div>

        <RedoxFunFactAquaRegia />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Среда раствора</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Пассивация</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Двойственная природа</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Перманганат калия</span>
        </div>
      </section>

      {/* SECTION 6.3: Типы ОВР */}
      <section id="section-redox-types" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.3. Типы ОВР</h2>
              <p className="text-xs sm:text-sm text-slate-500">Межмолекулярные, внутримолекулярные, диспропорционирование</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          По взаимному расположению окислителя и восстановителя окислительно-восстановительные реакции делят на межмолекулярные, внутримолекулярные и реакции самоокисления-восстановления (диспропорционирование). Классификация помогает правильно составлять электронный баланс — прежде всего выбирать, от какой формулы «отсчитывать» отданные и принятые электроны.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Межмолекулярные</span>
              <p className="text-slate-600">Окислитель и восстановитель — разные вещества. Самый распространённый тип ОВР.</p>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula formula="Zn + CuSO4 -> ZnSO4 + Cu" /></div>
                <div><ChemFormula formula="CH4 + 2O2 -> CO2 + 2H2O" /></div>
                <div><ChemFormula formula="2FeCl2 + Cl2 -> 2FeCl3" /></div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-amber-700 block">Внутримолекулярные</span>
              <p className="text-slate-600">Окислитель и восстановитель входят в состав одной молекулы.</p>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula formula="2KClO3 -(MnO2, t)-> 2KCl + 3O2^" /></div>
                <div><ChemFormula formula="2KNO3 -t-> 2KNO2 + O2^" /></div>
                <div><ChemFormula formula="2KMnO4 -t-> K2MnO4 + MnO2 + O2^" /></div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-purple-700 block"><TermTooltip term="диспропорционирование" definition="Реакция, в которой один и тот же элемент в промежуточной степени окисления одновременно окисляется и восстанавливается (самоокисление-восстановление)." /></span>
              <p className="text-slate-600">Один элемент в промежуточной степени окисления одновременно окисляется и восстанавливается.</p>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula formula="Cl2 + 2NaOH -> NaCl + NaClO + H2O" /></div>
                <div><ChemFormula formula="3NO2 + H2O -> 2HNO3 + NO" /></div>
                <div><ChemFormula formula="2H2O2 -> 2H2O + O2^" /></div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-slate-900">Противоположный процесс — конпропорционирование:</span> два соединения одного элемента в разных степенях окисления дают продукт с промежуточной степенью окисления: <ChemFormula formula="2H2S(-2) + SO2(+4) -> 3S(0)v + 2H2O" className="font-semibold text-slate-900" />.
          </div>
        </div>

        <div className="p-5 rounded-xl border border-rose-200 bg-rose-50/60 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-rose-700" />
            <span>«Химический вулкан»: внутримолекулярная ОВР дихромата аммония</span>
          </h4>
          <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm">
            Термическое разложение дихромата аммония — зрелищная внутримолекулярная реакция: азот аммония (−3) окисляется до свободного азота, хром дихромата (+6) восстанавливается до оксида хрома(III): <ChemFormula formula="(NH4)2Cr2O7 -t-> N2^ + Cr2O3 + 4H2O" className="font-semibold text-slate-900" />. Рыхлый зелёный оксид хрома(III) имитирует «извержение».
          </p>
        </div>

        <RedoxChlorineOxyacidsLightPanel />

        <RedoxFunFactBleach />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Межмолекулярные</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Внутримолекулярные</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Диспропорционирование</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Конпропорционирование</span>
        </div>
      </section>

      {/* SECTION 6.4: Составление уравнений */}
      <section id="section-redox-equations" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.4. Составление уравнений ОВР</h2>
              <p className="text-xs sm:text-sm text-slate-500">Метод электронного баланса и метод полуреакций</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Расстановка коэффициентов в ОВР опирается на закон электронного баланса: число электронов, отданных восстановителем, равно числу электронов, принятых окислителем. Базовый приём — <TermTooltip term="метод электронного баланса" definition="Метод расстановки коэффициентов в уравнениях ОВР по числу отданных и принятых электронов: полуреакции окисления и восстановления уравниваются через наименьшее общее кратное." />; для реакций в растворах удобнее метод полуреакций (ионно-электронный метод).
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Алгоритм метода электронного баланса</h4>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-700 font-normal list-none">
            <li className="flex items-start gap-2"><span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">1</span>Расставить степени окисления всех элементов в уравнении.</li>
            <li className="flex items-start gap-2"><span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>Найти элементы, изменившие степень окисления.</li>
            <li className="flex items-start gap-2"><span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>Записать полуреакции окисления и восстановления с числом отданных и принятых электронов.</li>
            <li className="flex items-start gap-2"><span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>Найти наименьшее общее кратное чисел электронов и дополнительные множители.</li>
            <li className="flex items-start gap-2"><span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">5</span>Перенести множители в уравнение как коэффициенты.</li>
            <li className="flex items-start gap-2"><span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">6</span>Проверить баланс всех атомов (при необходимости дорасставить коэффициенты, начиная со среды и воды).</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Пример 1. Окисление фосфора азотной кислотой</span>
            <div className="p-2.5 bg-slate-100 rounded font-bold"><ChemFormula formula="3P + 5HNO3 + 2H2O -> 3H3PO4 + 5NO" /></div>
            <div className="grid grid-cols-1 gap-1.5">
              <div className="p-2 bg-white rounded border border-slate-200 font-bold"><ChemFormula formula="P(0) - 5e- -> P(+5)" /> <span className="font-normal text-slate-500">(×3)</span></div>
              <div className="p-2 bg-white rounded border border-slate-200 font-bold"><ChemFormula formula="N(+5) + 3e- -> N(+2)" /> <span className="font-normal text-slate-500">(×5)</span></div>
            </div>
            <p className="text-slate-600">НОК(5, 3) = 15. Фосфор — восстановитель, азотная кислота — окислитель.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Пример 2. Обжиг пирита: окисляются два элемента</span>
            <div className="p-2.5 bg-slate-100 rounded font-bold"><ChemFormula formula="4FeS2 + 11O2 -> 2Fe2O3 + 8SO2" /></div>
            <p className="text-slate-600">Железо Fe⁺² → Fe⁺³ отдаёт 1 e⁻, каждый атом серы S⁻¹ → S⁺⁴ отдаёт 5 e⁻; формула FeS₂ суммарно отдаёт 1 + 2·5 = 11 e⁻, молекула O₂ принимает 4 e⁻. НОК(11, 4) = 44 → FeS₂ ×4, O₂ ×11.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Пример 3. Среда участвует в реакции</span>
            <div className="p-2.5 bg-slate-100 rounded font-bold"><ChemFormula formula="5KNO2 + 2KMnO4 + 3H2SO4 -> 5KNO3 + 2MnSO4 + K2SO4 + 3H2O" /></div>
            <div className="grid grid-cols-1 gap-1.5">
              <div className="p-2 bg-white rounded border border-slate-200 font-bold"><ChemFormula formula="N(+3) - 2e- -> N(+5)" /> <span className="font-normal text-slate-500">(×5)</span></div>
              <div className="p-2 bg-white rounded border border-slate-200 font-bold"><ChemFormula formula="Mn(+7) + 5e- -> Mn(+2)" /> <span className="font-normal text-slate-500">(×2)</span></div>
            </div>
            <p className="text-slate-600">НОК(2, 5) = 10. Нитрит калия — восстановитель, перманганат — окислитель.</p>
          </div>
        </div>

        <RedoxDarkBlockHalfReactions />

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
          <strong className="text-slate-900 block mb-1">Особые случаи:</strong> если элемент, меняющий степень окисления, входит в обе части уравнения (например, при разложении солей), баланс удобнее составлять «от продуктов»; во внутримолекулярных реакциях электроны окислителя и восстановителя внутри одной формулы учитываются суммарно.
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электронный баланс</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Метод полуреакций</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Наименьшее общее кратное</span>
        </div>
      </section>

      {/* SECTION 6.5: Ряд активности */}
      <section id="section-activity-series" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.5. Ряд активности металлов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Стандартные электродные потенциалы и их практические следствия</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Способность металла отдавать электроны количественно характеризует <TermTooltip term="стандартный электродный потенциал" definition="ЭДС полуэлемента (металл в растворе собственной соли при 25 °C и концентрации 1 М) относительно стандартного водородного электрода, потенциал которого принят за 0 В." /> <ChemFormula math="E^\circ" className="font-semibold text-slate-900" /> — ЭДС полуэлемента (металл в растворе собственной соли) относительно стандартного водородного электрода, потенциал которого принят за 0 В. Чем отрицательнее потенциал, тем сильнее металл как восстановитель.
        </p>

        <div className="my-6">
          <ActivitySeriesInfographic />
        </div>

        {/* Таблица 2: данные E° */}
        <div className="my-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Металл</th>
                <th className="p-3"><ChemFormula math="E^\circ" />, В</th>
                <th className="p-3">Металл</th>
                <th className="p-3"><ChemFormula math="E^\circ" />, В</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white font-normal text-slate-700">
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">литий</td><td className="p-3 font-mono">−3.04</td><td className="p-3 font-bold text-slate-900">никель</td><td className="p-3 font-mono">−0.26</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">калий</td><td className="p-3 font-mono">−2.93</td><td className="p-3 font-bold text-slate-900">олово</td><td className="p-3 font-mono">−0.14</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">барий</td><td className="p-3 font-mono">−2.91</td><td className="p-3 font-bold text-slate-900">свинец</td><td className="p-3 font-mono">−0.13</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">кальций</td><td className="p-3 font-mono">−2.87</td><td className="p-3 font-bold text-amber-700">водород (H₂)</td><td className="p-3 font-mono font-bold">0.00</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">натрий</td><td className="p-3 font-mono">−2.71</td><td className="p-3 font-bold text-slate-900">медь</td><td className="p-3 font-mono">+0.34</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">магний</td><td className="p-3 font-mono">−2.37</td><td className="p-3 font-bold text-slate-900">ртуть</td><td className="p-3 font-mono">+0.85</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">алюминий</td><td className="p-3 font-mono">−1.66</td><td className="p-3 font-bold text-slate-900">серебро</td><td className="p-3 font-mono">+0.80</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">марганец</td><td className="p-3 font-mono">−1.18</td><td className="p-3 font-bold text-slate-900">платина</td><td className="p-3 font-mono">+1.19</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">цинк</td><td className="p-3 font-mono">−0.76</td><td className="p-3 font-bold text-slate-900">золото</td><td className="p-3 font-mono">+1.50</td></tr>
              <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-slate-900">хром / железо</td><td className="p-3 font-mono">−0.74 / −0.44</td><td className="p-3 font-bold text-slate-900">кадмий</td><td className="p-3 font-mono">−0.40</td></tr>
            </tbody>
          </table>
          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
            Значения даны в школьном округлении для пары Mⁿ⁺/M (25 °C). В школьном ряду активности ртуть традиционно стоит между медью и серебром (исторический ряд Бекетова); строго по <ChemFormula math="E^\circ" className="font-semibold text-slate-500" /> серебро (+0.80 В) стоит перед ртутью (+0.85 В). Для бария по справочникам CRC −2.912 В, в части школьных таблиц округляют до −2.90 В.
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Практические следствия ряда активности</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Вытеснение водорода</strong>
              металлы левее водорода вытесняют его из разбавленных растворов кислот (кроме концентрированных азотной и серной); металлы правее — не вытесняют.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Вытеснение металлов</strong>
              более активный металл (левее) вытесняет менее активный из раствора его соли: <ChemFormula formula="Fe + CuSO4 -> FeSO4 + Cu" className="font-semibold" />.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Активные металлы и вода</strong>
              металлы левее алюминия (Li–Al) не вытесняют другие металлы из растворов — они реагируют с водой.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <RedoxDarkBlockBeketov />
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <TestTube className="w-4 h-4 text-slate-700" />
                <span>Стандартный водородный электрод</span>
              </h4>
              <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm mt-2">
                Платиновый электрод, омываемый раствором с концентрацией ионов <ChemFormula formula="H+" className="font-semibold" /> 1 М и обдуваемый водородом при давлении 1 атм. Его потенциал условно принят за 0 В — это точка отсчёта всех стандартных электродных потенциалов ряда активности.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm">
              <ChemFormula math="\mathrm{2H^+ + 2e^- \rightleftharpoons H_2}, \quad E^\circ \equiv 0 \text{ В}" className="font-bold text-slate-900" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электродный потенциал</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ряд активности</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Водородный электрод</span>
        </div>
      </section>

      {/* SECTION 6.6: Электролиз расплавов */}
      <section id="section-electrolysis" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.6. Электролиз расплавов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Устройство процесса: катод и анод, электролиз солей и оксидов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          <TermTooltip term="электролиз" definition="Совокупность окислительно-восстановительных процессов на электродах при пропускании постоянного электрического тока через расплав или раствор электролита." /> — окислительно-восстановительные процессы на электродах при пропускании постоянного тока через расплав или раствор электролита. В отличие от самопроизвольных реакций в гальванических элементах, электролиз идёт за счёт энергии внешнего источника тока.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Устройство электролизёра: источник постоянного тока и два электрода, погружённых в электролит. <span className="font-bold text-slate-900">Катод</span> подключён к отрицательному полюсу — на нём восстанавливаются катионы; <span className="font-bold text-slate-900">анод</span> подключён к положительному полюсу — на нём окисляются анионы. Мнемоника: «катод — минус, восстановление катионов; анод — плюс, окисление анионов».
        </p>

        <div className="my-6">
          <ElectrolyzerInfographic />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-600" />
            <span>Электролиз расплавов: разряжаются ионы самой соли</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Расплав хлорида натрия (получение натрия и хлора)</span>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula math="\mathrm{Na^+ + e^- \rightarrow Na^0} \quad \text{(катод)}" /></div>
                <div><ChemFormula math="\mathrm{2Cl^- - 2e^- \rightarrow Cl_2\uparrow} \quad \text{(анод)}" /></div>
                <div className="pt-1 border-t border-slate-200"><ChemFormula math="2\mathrm{NaCl}\,(\text{расплав}) \xrightarrow{\text{электролиз}} 2\mathrm{Na} + \mathrm{Cl_2}\uparrow" /></div>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Расплав гидроксида натрия (исторический способ Дэви)</span>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula math="\mathrm{Na^+ + e^- \rightarrow Na^0} \quad \text{(катод)}" /></div>
                <div><ChemFormula math="\mathrm{4OH^- - 4e^- \rightarrow O_2\uparrow + 2H_2O} \quad \text{(анод)}" /></div>
                <div className="pt-1 border-t border-slate-200"><ChemFormula math="4\mathrm{NaOH}\,(\text{расплав}) \xrightarrow{\text{электролиз}} 4\mathrm{Na} + \mathrm{O_2}\uparrow + 2\mathrm{H_2O}" /></div>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Оксид алюминия в расплаве криолита (промышленный способ)</span>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula math="\mathrm{Al^{3+} + 3e^- \rightarrow Al^0} \quad \text{(катод)}" /></div>
                <div><ChemFormula math="\mathrm{2O^{2-} - 4e^- \rightarrow O_2}; \quad \mathrm{C + O_2 \rightarrow CO_2} \quad \text{(анод сгорает)}" /></div>
                <div className="pt-1 border-t border-slate-200"><ChemFormula math="2\mathrm{Al_2O_3} \xrightarrow{\text{криолит, электролиз}} 4\mathrm{Al} + 3\mathrm{O_2}\uparrow" /></div>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">Электролиз воды (с добавкой электролита)</span>
              <div className="p-2 bg-slate-100 rounded font-bold space-y-1">
                <div><ChemFormula math="\mathrm{2H_2O + 2e^- \rightarrow H_2\uparrow + 2OH^-} \quad \text{(катод)}" /></div>
                <div><ChemFormula math="\mathrm{2H_2O - 4e^- \rightarrow O_2\uparrow + 4H^+} \quad \text{(анод)}" /></div>
                <div className="pt-1 border-t border-slate-200"><ChemFormula math="2\mathrm{H_2O} \xrightarrow{\text{электролиз}} 2\mathrm{H_2}\uparrow + \mathrm{O_2}\uparrow" /></div>
              </div>
              <p className="text-slate-600">Объёмное соотношение газов <ChemFormula formula="H2 : O2" className="font-semibold" /> = 2 : 1.</p>
            </div>
          </div>
        </div>

        <RedoxFunFactDavy />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Катод</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Анод</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Расплав</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Криолит</span>
        </div>
      </section>

      {/* SECTION 6.7: Электролиз растворов */}
      <section id="section-electrolysis-solutions" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.7. Электролиз водных растворов</h2>
              <p className="text-xs sm:text-sm text-slate-500">Конкуренция ионов и воды: правила катода и анода</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          В водных растворах в конкуренцию за разряд вступают ионы электролита и молекулы воды. Исход определяет положение металла в ряду активности (на катоде) и природа аниона (на аноде); активный (растворимый) анод окисляется сам независимо от состава раствора.
        </p>

        <div className="my-6">
          <ElectrolysisSolutionsTreeInfographic />
        </div>

        {/* Таблица 3: процессы на электродах */}
        <div className="my-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Электрод</th>
                <th className="p-3">Ион / условие</th>
                <th className="p-3">Полуреакция</th>
                <th className="p-3">Продукт</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white font-normal text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-teal-800">Катод (−)</td>
                <td className="p-3">катионы металлов правее H₂ (Cu, Hg, Ag)</td>
                <td className="p-3 font-mono"><ChemFormula math="\mathrm{Me^{n+} + n e^- \rightarrow Me^0}" /></td>
                <td className="p-3">металл</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-teal-800">Катод (−)</td>
                <td className="p-3">катионы металлов от Mn до Pb</td>
                <td className="p-3 font-mono"><ChemFormula math="\mathrm{Me^{n+} + n e^- \rightarrow Me^0}" /> и вода</td>
                <td className="p-3">металл и водород</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-teal-800">Катод (−)</td>
                <td className="p-3">катионы металлов левее Al (Li–Al), ионы <ChemFormula formula="H+" /></td>
                <td className="p-3 font-mono"><ChemFormula formula="2H2O + 2e- -> H2^ + 2OH(-)" /></td>
                <td className="p-3">водород</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-rose-800">Анод (+)</td>
                <td className="p-3">бескислородные анионы (кроме F⁻): Cl⁻, Br⁻, I⁻, S²⁻</td>
                <td className="p-3 font-mono"><ChemFormula formula="2Cl(-) - 2e- -> Cl2^" /></td>
                <td className="p-3">простое вещество</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold text-rose-800">Анод (+)</td>
                <td className="p-3">кислородсодержащие анионы (SO₄²⁻, NO₃⁻, PO₄³⁻, CO₃²⁻) и F⁻</td>
                <td className="p-3 font-mono"><ChemFormula formula="2H2O - 4e- -> O2^ + 4H(+)" /></td>
                <td className="p-3">кислород</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Раствор сульфата меди(II)</span>
            <p className="text-slate-600">Медь правее водорода — восстанавливается на катоде; сульфат — кислородсодержащий анион, на аноде окисляется вода:</p>
            <div className="p-2.5 bg-slate-100 rounded font-bold"><ChemFormula math="2\mathrm{CuSO_4} + 2\mathrm{H_2O} \xrightarrow{\text{электролиз}} 2\mathrm{Cu}\downarrow + \mathrm{O_2}\uparrow + 2\mathrm{H_2SO_4}" /></div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Раствор хлорида натрия</span>
            <p className="text-slate-600">Натрий — активный металл: на катоде восстанавливается вода, на аноде окисляется хлорид-ион; в растворе накапливается щёлочь:</p>
            <div className="p-2.5 bg-slate-100 rounded font-bold"><ChemFormula math="2\mathrm{NaCl} + 2\mathrm{H_2O} \xrightarrow{\text{электролиз}} 2\mathrm{NaOH} + \mathrm{H_2}\uparrow + \mathrm{Cl_2}\uparrow" /></div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 block">Раствор сульфата натрия</span>
            <p className="text-slate-600">Ни катион, ни анион не разряжаются — фактически идёт электролиз воды, соль остаётся в растворе:</p>
            <div className="p-2.5 bg-slate-100 rounded font-bold"><ChemFormula math="2\mathrm{H_2O} \xrightarrow{\text{электролиз}} 2\mathrm{H_2}\uparrow + \mathrm{O_2}\uparrow" /></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Scale className="w-4 h-4 text-slate-700" />
              <span>Законы Фарадея: масса продукта пропорциональна заряду</span>
            </h4>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm">
              <ChemFormula math="m = \dfrac{M \cdot I \cdot t}{n \cdot F}, \qquad F \approx 96\,485 \ \text{Кл/моль}" className="font-bold text-slate-900" />
            </div>
            <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm">
              Здесь M — молярная масса вещества, n — число электронов на ион, I·t — прошедший заряд, F — постоянная Фарадея. Пример: при электролизе расплава NaCl на получение 1 моль натрия (23 г) расходуется 1 моль электронов (1 F).
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Типичная ошибка: металл на катоде</span>
            </h4>
            <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm">
              Из раствора соли активного металла (натрия, калия, кальция, алюминия) сам металл электролизом не получить — на катоде выделяется водород. Металлический натрий и алюминий получают электролизом расплавов, где воды нет и конкурировать нечему.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Инертный анод</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Конкуренция ионов и воды</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Постоянная Фарадея</span>
        </div>
      </section>

      {/* SECTION 6.8: Применение электролиза */}
      <section id="section-electrolysis-applications" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.8. Применение электролиза</h2>
              <p className="text-xs sm:text-sm text-slate-500">Алюминий, хлор и щёлочи, гальванотехника; химические источники тока</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Электролиз — основа целых отраслей промышленности: металлургии лёгких металлов, хлорщелочного производства и гальванотехники. Обратная по смыслу задача — превращение энергии самопроизвольной ОВР в электричество — решается в химических источниках тока; самопроизвольные ОВР лежат и в основе коррозии металлов.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Производство алюминия</strong>
              электролиз <ChemFormula formula="Al2O3" className="font-semibold" /> в криолите (способ Холла–Эру, 1886) — единственный промышленный способ; расход электроэнергии ≈ 13–16 кВт·ч на 1 кг, поэтому заводы строят рядом с ГЭС.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Хлорщелочная промышленность</strong>
              электролиз раствора NaCl даёт одновременно хлор, водород и гидроксид натрия. Мировое производство хлора превышает 60 млн тонн в год, и почти весь объём получают электролизом.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1"><TermTooltip term="гальванотехника" definition="Электролитическое нанесение металлических покрытий (никелирование, хромирование, цинкование, золочение) на поверхность деталей; анодом служит покрывающий металл." /></strong>
              анодом служит покрывающий металл — он растворяется и пополняет раствор своими ионами, деталь-катод обрастает защитным слоем.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Электролитическое рафинирование</strong>
              черновой металл (медь с примесями) — анод, чистый металл — катод: медь анода переходит в раствор и осаждается на катоде чистотой 99.99 % для электротехники.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Химические источники тока</strong>
              гальванические элементы (элемент Даниэля: Zn | ZnSO₄ || CuSO₄ | Cu, ЭДС ≈ 1.1 В), батарейки, аккумуляторы и топливные элементы превращают энергию самопроизвольной ОВР в электричество. В гальваническом элементе анод — отрицательный электрод, катод — положительный: по знакам электроды противоположны электролизёру.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Коррозия металлов</strong>
              самопроизвольная ОВР разрушения металла: ржавление железа <ChemFormula formula="4Fe + 3O2 + 6H2O -> 4Fe(OH)3" className="font-semibold" /> (упрощённо). В контактной паре двух металлов разрушается более активный — на этом основана протекторная защита.
            </div>
          </div>
        </div>

        <RedoxDarkBlockHallHeroult />

        <div className="grid md:grid-cols-2 gap-4">
          <RedoxDarkBlockElectroplating />
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-600" />
                <span>Протекторная защита от коррозии</span>
              </h4>
              <p className="text-slate-700 leading-relaxed font-normal text-xs sm:text-sm mt-2">
                Цинковые или магниевые пластины, контактирующие с железным корпусом судна или трубопроводом, разрушаются первыми: в электрохимической паре железо становится катодом и не корродирует. Протекторы периодически заменяют — это «жертвенные аноды».
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm">
              <ChemFormula formula="Zn(0) - 2e- -> Zn(+2)" className="font-bold text-slate-900" /> — анодный процесс протектора
            </div>
          </div>
        </div>

        <RedoxFunFactAluminum />

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гальванотехника</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Рафинирование</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Гальванический элемент</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Коррозия</span>
        </div>
      </section>

      {/* SECTION 6.9: 3D-модели */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6.9. 3D-модели участников ОВР и электролиза</h2>
              <p className="text-xs sm:text-sm text-slate-500">Интерактивная пространственная визуализация молекул и ионов</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          В разделе собраны 3D-модели ключевых участников окислительно-восстановительных реакций: главные окислители природы и лаборатории (кислород, хлор, азотная и концентрированная серная кислоты, перманганат-ион), восстановители (водород), вещества с двойственной природой (пероксид водорода), вода как участник электродных процессов и хлорид натрия — классический объект электролиза.
        </p>

        <MoleculeViewer3D
          moleculeIds={['h2o2', 'o2', 'h2', 'cl2', 'hno3', 'h2so4', 'mno4', 'nacl', 'h2o']}
          initialSelectedId="h2o2"
          title="Интерактивные 3D-модели участников ОВР и электролиза"
        />
      </section>

      <PracticeBanner topicCode="ОХ-06" onGoToPractice={handleGoToPractice} />

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
              <RedoxReactions2DRender type={modalDiagram.type} isModal={true} />
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
