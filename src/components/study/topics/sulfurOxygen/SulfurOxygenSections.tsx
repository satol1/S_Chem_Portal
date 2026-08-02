import React, { useState } from 'react';
import { ZoomIn, X, Sparkles } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { SulfurOxygen2DRender } from './SulfurOxygen2DRenders';
import { SulfurOxygenInteractive2DViewer } from './SulfurOxygenInteractive2DViewer';
import { SulfurOxygenDarkBlocks } from './SulfurOxygenDarkBlocks';
import { SulfurOxygenFunFacts } from './SulfurOxygenFunFacts';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

export const SulfurOxygenSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  const [modalType, setModalType] = useState<'rhombic-sulfur' | 'ozone' | 'h2so4' | 'so2' | null>(null);

  return (
    <div className="space-y-10">

      {/* SECTION 1 */}
      <section id="section-general" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              1. Положение в ПСХО и строение атомов S и O
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            <TermTooltip term="Халькогены" definition="Элементы главной подгруппы VI группы (16 группы ИЮПАК): O, S, Se, Te, Po. Название означает «образующие руды»." /> (VI-A группа) имеют на внешнем энергетическом уровне 6 электронов с общей конфигурацией <code className="font-mono text-amber-900 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">ns^2 np^4</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block border-b border-slate-200 pb-1">
                Атом кислорода (O, Z = 8)
              </span>
              <p className="text-xs text-slate-600">Электронная конфигурация:</p>
              <div className="font-mono text-xs text-amber-900 font-bold">
                <ChemFormula formula="1s^2 2s^2 2p^4" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                На 2-м энергетическом уровне <strong>нет d-орбиталей</strong>. Поэтому атом кислорода НЕ может распаривать электроны и в нормальном состоянии валентен строго II. Ему не хватает 2 электронов до устойчивого 8-электронного октета.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 text-sm block border-b border-slate-200 pb-1">
                Атом серы (S, Z = 16)
              </span>
              <p className="text-xs text-slate-600">Электронная конфигурация:</p>
              <div className="font-mono text-xs text-amber-900 font-bold">
                <ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^4 3d^0" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                На 3-м энергетическом уровне имеются <strong>вакантные 3d-орбитали</strong>. При возбуждении (S*) происходят переходы электронов с 3p- и 3s-орбиталей на 3d, обеспечивая валентности II, IV и VI.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <span className="font-extrabold text-amber-950 text-xs uppercase tracking-wider block">
              Сводная таблица степеней окисления и валентности серы:
            </span>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-amber-200 text-amber-950 font-bold">
                    <th className="py-2 pr-3">Степень окисления</th>
                    <th className="py-2 px-3">Валентность</th>
                    <th className="py-2 px-3">Электронное состояние</th>
                    <th className="py-2 pl-3">Характерные соединения</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-200/60 font-mono text-slate-800 text-[11px]">
                  <tr>
                    <td className="py-2 pr-3 font-bold text-rose-700">-2</td>
                    <td className="py-2 px-3">II</td>
                    <td className="py-2 px-3">3s² 3p⁶ (октетная оболочка)</td>
                    <td className="py-2 pl-3">H₂S, Na₂S, FeS, CuS</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-bold text-amber-700">0</td>
                    <td className="py-2 px-3">II</td>
                    <td className="py-2 px-3">3s² 3p⁴ (основное)</td>
                    <td className="py-2 pl-3">S₈ (ромбическая, моноклинная)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-bold text-emerald-700">+4</td>
                    <td className="py-2 px-3">IV</td>
                    <td className="py-2 px-3">3s² 3p³ 3d¹ (S*)</td>
                    <td className="py-2 pl-3">SO₂, H₂SO₃, Na₂SO₃, SF₄</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-bold text-blue-700">+6</td>
                    <td className="py-2 px-3">VI</td>
                    <td className="py-2 px-3">3s¹ 3p³ 3d² (S**)</td>
                    <td className="py-2 pl-3">SO₃, H₂SO₄, Na₂SO₄, SF₆</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-allotropes" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              2. Аллотропия кислорода (O₂, O₃) и серы (S₈)
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            И кислород, и сера образуют <TermTooltip term="Аллотропные модификации" definition="Существование одного и того же химического элемента в виде нескольких простых веществ, отличающихся строением или составом молекул." />.
          </p>

          {/* 2D Render Card for S8 */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-4 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div
              onClick={() => setModalType('rhombic-sulfur')}
              className="w-32 sm:w-36 h-32 sm:h-36 bg-slate-950 rounded-xl border border-slate-800 p-1.5 flex items-center justify-center shrink-0 cursor-pointer relative group"
            >
              <SulfurOxygen2DRender type="rhombic-sulfur" />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <ZoomIn className="w-6 h-6 text-amber-400" />
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <span className="font-extrabold text-amber-400 text-base block">
                Ромбическая сера (α-S₈) — Корончатый цикл
              </span>
              <p className="text-slate-300 leading-relaxed">
                Наиболее устойчивая при 20°C форма серы. Состоит из замкнутых 8-атомных циклов S₈ в виде королевской короны (угол S-S-S равен 108°, длина связи 2.06 Å). Прозрачные лимонно-желтые кристаллы.
              </p>
              <button
                onClick={() => setModalType('rhombic-sulfur')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition pt-1"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Открыть полноэкранную 2D-схему S₈</span>
              </button>
            </div>
          </div>

          {/* 2D Render Card for Ozone */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-4 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div
              onClick={() => setModalType('ozone')}
              className="w-32 sm:w-36 h-32 sm:h-36 bg-slate-950 rounded-xl border border-slate-800 p-1.5 flex items-center justify-center shrink-0 cursor-pointer relative group"
            >
              <SulfurOxygen2DRender type="ozone" />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <ZoomIn className="w-6 h-6 text-sky-400" />
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <span className="font-extrabold text-sky-400 text-base block">
                Озон (O₃) — Изогнутая триатомная структура
              </span>
              <p className="text-slate-300 leading-relaxed">
                Газ светло-голубого цвета с резким свежим запахом. Молекула O₃ изогнута (угол 116.8°) благодаря sp²-гибридизации центрального атома кислорода и делокализованной 3-центровой 4-электронной π-системе.
              </p>
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-amber-300">
                Качественная реакция на озон (посинение крахмальной бумаги):<br />
                <ChemFormula formula="O3 + 2KI + H2O -> O2^ + I2v + 2KOH" />
              </div>
            </div>
          </div>

          <SulfurOxygenFunFacts />
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="section-peroxide" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              3. Химия кислорода и пероксидов (O₂, O₃, H₂O₂)
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Пероксид водорода H₂O₂ содержит кислород в промежуточной степени окисления <code className="font-mono text-rose-700 font-bold bg-rose-50 px-1 rounded">-1</code>, что обуславливает его <strong>двойственную ОВР-функцию</strong>:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 text-sm block mb-1">
                1) H₂O₂ как окислитель (переходит в H₂O или OH⁻):
              </span>
              <p className="text-xs text-slate-600 mb-2">
                Реагирует с восстановителями (KI, Na₂SO₃, Fe²⁺, H₂S):
              </p>
              <div className="font-mono text-xs text-amber-900 font-bold space-y-1">
                <div><ChemFormula formula="H2O2 + 2KI + H2SO4 -> I2v + K2SO4 + 2H2O" /></div>
                <div><ChemFormula formula="Na2SO3 + H2O2 -> Na2SO4 + H2O" /></div>
                <div><ChemFormula formula="PbS (черный) + 4H2O2 -> PbSO4 (белый) + 4H2O" /> (реставрация картин!)</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 text-sm block mb-1">
                2) H₂O₂ как восстановитель (окисляется до O₂^):
              </span>
              <p className="text-xs text-slate-600 mb-2">
                Реагирует с сильными окислителями (KMnO₄, Cl₂, Ag₂O):
              </p>
              <div className="font-mono text-xs text-amber-900 font-bold space-y-1">
                <div><ChemFormula formula="2KMnO4 + 5H2O2 + 3H2SO4 -> 2MnSO4 + K2SO4 + 5O2^ + 8H2O" /></div>
                <div><ChemFormula formula="Ag2O + H2O2 -> 2Agv + O2^ + H2O" /></div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 text-sm block mb-1">
                3) Каталитическое разложение H₂O₂ (диспропорционирование):
              </span>
              <div className="font-mono text-xs text-amber-900 font-bold">
                <ChemFormula formula="2H2O2 -(MnO2)-> 2H2O + O2^" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="section-sulfides" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              4. Водородные соединения серы и сульфиды (H₂S, S²⁻)
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Сероводород H₂S — бесцветный чрезвычайно токсичный газ с запахом тухлых яиц. Сера находится в минимальной степени окисления <code className="font-mono text-rose-700 font-bold">-2</code>, поэтому H₂S является <strong>сильным восстановителем</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <span className="font-extrabold text-amber-950 text-xs uppercase tracking-wider block">
              Классификация сульфидов по растворимости и гидролизу (Критерий ФИПИ):
            </span>
            <div className="space-y-2 font-mono text-xs text-slate-800">
              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong className="text-emerald-700">1. Растворимые сульфиды (Na₂S, K₂S, (NH₄)₂S, BaS):</strong><br />
                Растворяются в H₂O, гидролизуются по аниону (щелочная среда pH &gt; 7).
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong className="text-amber-700">2. Растворимые в неокисляющих кислотах (FeS, ZnS, MnS):</strong><br />
                Не растворяются в воде, но легко растворяются в HCl/H₂SO₄(разб):<br />
                <ChemFormula formula="FeS + 2HCl -> FeCl2 + H2S^" />
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong className="text-rose-700">3. Нерастворимые в сильных кислотах (CuS, PbS, Ag₂S, HgS):</strong><br />
                НЕ растворяются ни в H₂O, ни в HCl, ни в H₂SO₄(разб)! Осаждаются даже при пропускании H₂S через растворы солей:<br />
                <ChemFormula formula="CuSO4 + H2S -> CuSv (черный) + H2SO4" /><br />
                <ChemFormula formula="Pb(NO3)2 + H2S -> PbSv (черный) + 2HNO3" />
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong className="text-purple-700">4. Необратимо гидролизующиеся (Al₂S₃, Cr₂S₃):</strong><br />
                В водной среде мгновенно разлагаются полностью:<br />
                <ChemFormula formula="Al2S3 + 6H2O -> 2Al(OH)3v + 3H2S^" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="section-oxides" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              5. Оксиды серы: SO₂ и SO₃
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* 2D Render Card for SO2 */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-4 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div
              onClick={() => setModalType('so2')}
              className="w-32 sm:w-36 h-32 sm:h-36 bg-slate-950 rounded-xl border border-slate-800 p-1.5 flex items-center justify-center shrink-0 cursor-pointer relative group"
            >
              <SulfurOxygen2DRender type="so2" />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <ZoomIn className="w-6 h-6 text-amber-400" />
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <span className="font-extrabold text-amber-400 text-base block">
                Диоксид серы (SO₂) — Сернистый газ
              </span>
              <p className="text-slate-300 leading-relaxed">
                Бесцветный удушливый газ. ОВР-двойственность с преобладанием восстановительных свойств. Обесцвечивает бромную воду и KMnO₄:
              </p>
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-amber-300 space-y-1">
                <div><ChemFormula formula="SO2 + Br2 + 2H2O -> H2SO4 + 2HBr" /> (обесцвечивание)</div>
                <div><ChemFormula formula="5SO2 + 2KMnO4 + 2H2O -> K2SO4 + 2MnSO4 + 2H2SO4" /></div>
                <div><ChemFormula formula="SO2 + 2H2S -> 3Sv + 2H2O" /> (сопропорционирование!)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section id="section-h2so4" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              6. Серная кислота (H₂SO₄) и олеум
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* 2D Render Card for H2SO4 */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start p-4 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div
              onClick={() => setModalType('h2so4')}
              className="w-32 sm:w-36 h-32 sm:h-36 bg-slate-950 rounded-xl border border-slate-800 p-1.5 flex items-center justify-center shrink-0 cursor-pointer relative group"
            >
              <SulfurOxygen2DRender type="h2so4" />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <ZoomIn className="w-6 h-6 text-amber-400" />
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <span className="font-extrabold text-amber-400 text-base block">
                Серная кислота (H₂SO₄) — Тетраэдрическая структура
              </span>
              <p className="text-slate-300 leading-relaxed">
                Центральный атом S(+6) в sp³-гибридизации. Разбавленная H₂SO₄ проявляет обычные свойства кислот. Концентрированная H₂SO₄ — сильнейший окислитель!
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="font-bold text-slate-900 text-sm block">
              Взаимодействие H₂SO₄(конц) с металлами (БЕЗ ВЫДЕЛЕНИЯ H₂!):
            </span>
            <div className="font-mono text-xs text-amber-900 font-bold space-y-1.5">
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                С малоактивными (Cu, Ag): <ChemFormula formula="Cu + 2H2SO4(конц) -t-> CuSO4 + SO2^ + 2H2O" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                С активными (Mg, Zn): <ChemFormula formula="4Zn + 5H2SO4(конц) -> 4ZnSO4 + H2S^ + 4H2O" />
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                С неметаллами (C, S, P):<br />
                <ChemFormula formula="C + 2H2SO4(конц) -t-> CO2^ + 2SO2^ + 2H2O" /><br />
                <ChemFormula formula="S + 2H2SO4(конц) -t-> 3SO2^ + 2H2O" /><br />
                <ChemFormula formula="2P + 5H2SO4(конц) -t-> 2H3PO4 + 5SO2^ + 2H2O" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section id="section-salts" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              7. Соли серных кислот: сульфаты, сульфиты, тиосульфаты
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <span className="font-extrabold text-amber-950 text-xs uppercase tracking-wider block">
              Качественный анализ анионов серы:
            </span>
            <div className="space-y-2 font-mono text-xs text-slate-800">
              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong>Сульфат-ион SO₄²⁻:</strong> Реагент Ba²⁺ (BaCl₂, Ba(NO₃)₂) образует белый осадок BaSO₄, нерастворимый в HNO₃ и HCl:<br />
                <ChemFormula formula="Ba(2+) + SO4(2-) -> BaSO4v (белый мелкокристаллический)" />
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong>Сульфит-ион SO₃²⁻:</strong> Реагент H⁺ (HCl, H₂SO₄) приводит к выделению SO₂ с резким запахом:<br />
                <ChemFormula formula="Na2SO3 + 2HCl -> 2NaCl + SO2^ + H2O" />
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-amber-200">
                <strong>Тиосульфат-ион S₂O₃²⁻:</strong> Диспропорционирование в кислой среде с мутью S и запахом SO₂:<br />
                <ChemFormula formula="Na2S2O3 + H2SO4 -> Na2SO4 + Sv (желтый) + SO2^ + H2O" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section id="section-industry" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              8. Промышленный химизм: Контактный способ производства H₂SO₄
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Детальный химико-технологический разбор промышленного производства серной кислоты контактным способом:
          </p>

          <SulfurOxygenDarkBlocks />
        </div>
      </section>

      {/* SECTION 9 */}
      <section id="section-molecules-3d" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              9. Интерактивные 3D-модели веществ серы и кислорода
            </h2>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Вращайте, приближайте и исследуйте пространственное строение молекул соединения серы и кислорода.
          </p>

          {/* 3D Viewer for Topic Molecules */}
          <MoleculeViewer3D
            moleculeIds={['o2', 'o3', 'h2o', 'h2o2', 'h2s', 'so2', 'so3', 'h2so4', 's8']}
            initialSelectedId="so2"
            title="Интерактивные 3D-модели соединений серы и кислорода"
          />
        </div>
      </section>

      {/* Practice Banner at Bottom */}
      <PracticeBanner
        topicCode="ХЭ-06"
        onGoToPractice={handleGoToPractice}
      />

      {/* Fullscreen 2D Render Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">
                  {modalType === 'rhombic-sulfur' && 'Ромбическая сера — Цикл S₈'}
                  {modalType === 'ozone' && 'Озон (O₃) — Изогнутое строение'}
                  {modalType === 'h2so4' && 'Серная кислота (H₂SO₄) — Тетраэдр S(+6)'}
                  {modalType === 'so2' && 'Диоксид серы (SO₂) — Уголковая структура'}
                </h3>
              </div>
              <button
                onClick={() => setModalType(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-2">
              <SulfurOxygenInteractive2DViewer type={modalType} />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow transition"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
