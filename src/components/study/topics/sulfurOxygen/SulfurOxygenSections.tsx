import React, { useState } from 'react';
import { ZoomIn, X, FlaskConical, Flame, ShieldAlert, TestTube } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { SulfurOxygen2DRender } from './SulfurOxygen2DRenders';
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
  const [modalDiagram, setModalDiagram] = useState<{ type: 'rhombic-sulfur' | 'ozone' | 'h2so4' | 'so2'; title: string } | null>(null);

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 1 */}
      <section id="section-general" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Сравнительный анализ элементов VI-A группы (S и O)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Электронные конфигурации, квантовые ограничения валентности кислорода и d-орбитали серы
              </p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кислород (<ChemFormula formula="O" className="font-semibold text-slate-900" />) и сера (<ChemFormula formula="S" className="font-semibold text-slate-900" />) образуют подгруппу кислорода — <TermTooltip term="Халькогены" definition="Элементы VI-A группы (16 группы ИЮПАК): O, S, Se, Te, Po. Название происходит от греч. «халькос» — руда и «генос» — рождающий." />. На внешнем энергетическом уровне их атомы имеют по 6 валентных электронов с общей конфигурацией <ChemFormula formula="ns^2 np^4" className="font-semibold text-slate-900" />.
        </p>

        {/* Deep Theoretical Comparison Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 text-sm block border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span>Кислород (O) — 2-й период</span>
              <span className="text-xs font-mono bg-slate-200 text-slate-900 px-2 py-0.5 rounded">Z = 8</span>
            </span>
            <div className="font-mono text-xs text-slate-900 font-bold bg-white p-2 rounded border border-slate-200/80">
              <ChemFormula formula="1s^2 2s^2 2p^4" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal">
              На 2-м энергетическом уровне <strong>полностью отсутствуют d-орбитали</strong>. Перевод электронов в возбужденное состояние с распариванием пар невозможно. Поэтому валентность кислорода в нормальном состоянии строго равна II. Исключения: ион гидроксония <ChemFormula formula="H3O(+)" className="font-semibold" /> (валентность III по донорно-акцепторному механизму) и монооксид углерода <ChemFormula formula="CO" className="font-semibold" /> (тройная связь <ChemFormula formula=":C#O:" className="font-semibold" />, валентность III).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="font-bold text-slate-900 text-sm block border-b border-slate-200 pb-1.5 flex items-center justify-between">
              <span>Сера (S) — 3-й период</span>
              <span className="text-xs font-mono bg-slate-200 text-slate-900 px-2 py-0.5 rounded">Z = 16</span>
            </span>
            <div className="font-mono text-xs text-slate-900 font-bold bg-white p-2 rounded border border-slate-200/80">
              <ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^4 3d^0" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-1 font-normal">
              На 3-м энергетическом уровне имеются <strong>вакантные 3d-орбитали</strong>. При поглощении энергии электронные пары распариваются: <ChemFormula formula="3s^2 3p^3 3d^1" className="font-semibold" /> (валентность IV, <ChemFormula formula="SO2" />) и далее <ChemFormula formula="3s^1 3p^3 3d^2" className="font-semibold" /> (валентность VI, <ChemFormula formula="SO3" />, <ChemFormula formula="H2SO4" />).
            </p>
          </div>
        </div>

        {/* Academic Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Характеристика</th>
                <th className="p-3.5">Кислород (O)</th>
                <th className="p-3.5">Сера (S)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Атомный радиус (r)</td>
                <td className="p-3.5">0.066 нм (малый радиус)</td>
                <td className="p-3.5">0.104 нм (большой радиус)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электроотрицательность (по Полингу)</td>
                <td className="p-3.5 font-bold text-rose-800">3.44 (2-е место после фтора F = 3.98)</td>
                <td className="p-3.5 font-semibold text-slate-900">2.58 (умеренная)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Характерные степени окисления</td>
                <td className="p-3.5 font-bold text-slate-900">-2 (оксиды), -1 (H₂O₂), 0 (O₂), +2 (OF₂)</td>
                <td className="p-3.5 font-bold text-slate-900">-2 (H₂S), 0 (S₈), +4 (SO₂), +6 (H₂SO₄)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Способность к образованию цепочек</td>
                <td className="p-3.5">Низкая (только пероксиды -O-O-)</td>
                <td className="p-3.5 font-semibold text-emerald-800">Высокая (полисульфиды -S-S-S- до 8 и более)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-allotropes" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. <TermTooltip term="Аллотропия" definition="Существование одного химического элемента в виде нескольких простых веществ." /> кислорода (O₂, O₃) и серы (S₈)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Дикислород, озон, ромбическая, моноклинная и пластическая сера</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Аллотропные формы элементов группы VI-A отличаются типом молекулярной кристаллической решетки, геометрией молекул и реакционной способностью.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs sm:text-sm">
          {/* RHOMBIC SULFUR */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-sm transition-shadow">
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between border-b border-slate-200/80 pb-2">
              <span>Ромбическая сера (α-S₈)</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-900 font-mono text-xs font-semibold">Устойчивая S₈</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
              <button 
                onClick={() => setModalDiagram({
                  type: 'rhombic-sulfur',
                  title: 'Ромбическая сера — 2D-схема корончатого цикла S₈ (sp³-гибридизация, угол 108°)'
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
                title="Нажмите для открытия справочной 2D-схемы"
              >
                <SulfurOxygen2DRender type="rhombic-sulfur" />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  2D-схема
                </div>
              </button>

              <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
                Кристаллы лимонно-желтого цвета (температура плавления 112.8°C, плотность 2.07 г/см³). Состоит из замкнутых молекул S₈ в форме короны. Не растворяется в воде, легко растворяется в сероуглероде <ChemFormula formula="CS2" className="font-semibold" />.
              </p>
            </div>
          </div>

          {/* OZONE */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-sm transition-shadow">
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between border-b border-slate-200/80 pb-2">
              <span>Озон (O₃) — Изогнутая структура</span>
              <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-900 font-mono text-xs font-semibold">Окислитель</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
              <button 
                onClick={() => setModalDiagram({
                  type: 'ozone',
                  title: 'Озон — 2D-схема изогнутой молекулы O₃ (sp²-гибридизация, угол 116.8°)'
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-sky-500 transition-colors"
                title="Нажмите для открытия справочной 2D-схемы"
              >
                <SulfurOxygen2DRender type="ozone" />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  2D-схема
                </div>
              </button>

              <div className="space-y-2 flex-1">
                <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm">
                  Газ светло-голубого цвета с удушливым свежим запахом. Молекула изогнута (116.8°) за счет sp²-гибридизации центрального O. Сильнейший окислитель (окисляет Ag → Ag₂O, PbS → PbSO₄).
                </p>
                <div className="p-2.5 rounded-lg bg-slate-200/60 font-mono text-xs text-slate-900">
                  Качественная реакция на озон (посинение крахмальной бумаги):<br />
                  <ChemFormula formula="O3 + 2KI + H2O -> O2^ + I2v + 2KOH" className="font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Chemical Properties of Elemental Sulfur */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Химические свойства элементной серы</span>
          </h4>
          
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <p>
              • <strong>С металлами (окислитель, образует сульфиды):</strong> реагирует с Na, K, Ca, Fe, Zn при нагревании. С ртутью Hg реагирует при комнатной температуре 20°C (связывание пролитой ртути — демеркуризация!):<br />
              <ChemFormula formula="Hg + S -> HgS (черный)" className="font-bold text-slate-900" /><br />
              <ChemFormula formula="Fe + S -t-> FeS" className="font-bold text-slate-900" />
            </p>
            <p>
              • <strong>С неметаллами (восстановитель со сильными неметаллами):</strong> с кислородом O₂, фтором F₂, хлором Cl₂, углеродом C, фосфором P:<br />
              <ChemFormula formula="S + O2 -t-> SO2^" className="font-bold text-slate-900" /><br />
              <ChemFormula formula="C + 2S -t-> CS2" className="font-bold text-slate-900" />
            </p>
            <p>
              • <strong>Диспропорционирование в горячих щелочах:</strong> сера самоокисляется-самовосстанавливается в горячем растворе щелочи:<br />
              <ChemFormula formula="3S + 6KOH -t-> 2K2S + K2SO3 + 3H2O" className="font-bold text-slate-900" />
            </p>
          </div>
        </div>

        <SulfurOxygenFunFacts />
      </section>

      {/* SECTION 3 */}
      <section id="section-peroxide" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Химия кислорода и пероксидов (O₂, O₃, H₂O₂)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Лабораторное получение O₂ и двойственные ОВР свойства пероксида водорода</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        {/* Laboratory Oxygen Preparation Equations */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TestTube className="w-4 h-4 text-slate-700" />
            <span>Лабораторные способы получения кислорода (O₂)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono text-slate-900">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              1) Разложение перманганата калия:<br />
              <ChemFormula formula="2KMnO4 -t-> K2MnO4 + MnO2 + O2^" className="font-bold" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              2) Разложение бертолетовой соли:<br />
              <ChemFormula formula="2KClO3 -(MnO2, t)-> 2KCl + 3O2^" className="font-bold" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              3) Каталитический распад H₂O₂:<br />
              <ChemFormula formula="2H2O2 -(MnO2)-> 2H2O + O2^" className="font-bold" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              4) Термолиз нитратов щелочных металлов:<br />
              <ChemFormula formula="2NaNO3 -t-> 2NaNO2 + O2^" className="font-bold" />
            </div>
          </div>
        </div>

        {/* H2O2 Dual OVR Box */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Двойственность ОВР свойств H₂O₂ (степень окисления O = -1)</span>
          </h4>
          
          <div className="space-y-3 text-xs sm:text-sm font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-amber-900 block mb-1">1. H₂O₂ как ОКИСЛИТЕЛЬ (кислород восстанавливается: O⁻¹ + 1e⁻ → O⁻² в H₂O):</strong>
              <div className="font-mono text-xs text-slate-900 space-y-1">
                <div><ChemFormula formula="H2O2 + 2KI + H2SO4 -> I2v + K2SO4 + 2H2O" className="font-bold" /></div>
                <div><ChemFormula formula="Na2SO3 + H2O2 -> Na2SO4 + H2O" className="font-bold" /></div>
                <div><ChemFormula formula="PbS (черный) + 4H2O2 -> PbSO4 (белый) + 4H2O" className="font-bold" /> (реставрация живописи)</div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-teal-900 block mb-1">2. H₂O₂ как ВОССТАНОВИТЕЛЬ (кислород окисляется: 2O⁻¹ - 2e⁻ → O₂⁰^):</strong>
              <div className="font-mono text-xs text-slate-900 space-y-1">
                <div><ChemFormula formula="2KMnO4 + 5H2O2 + 3H2SO4 -> 2MnSO4 + K2SO4 + 5O2^ + 8H2O" className="font-bold" /> (обесцвечивание)</div>
                <div><ChemFormula formula="Ag2O + H2O2 -> 2Agv + O2^ + H2O" className="font-bold" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="section-sulfides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Водородные соединения серы и сульфиды (H₂S, S²⁻)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Восстановительные свойства H₂S и классификация сульфидов по растворимости</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Сероводород <ChemFormula formula="H2S" className="font-semibold text-slate-900" /> — бесцветный чрезвычайно токсичный газ с запахом тухлых яиц. Сера находится в минимальной степени окисления $-2$, что делает сероводород сильнейшим восстановителем.
        </p>

        {/* Complete Classification of Sulfides Table */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Классификация сульфидов по отношению к воде и кислотам (Критерий ФИПИ)</h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-emerald-800 block mb-1">1. Растворимые сульфиды (Na₂S, K₂S, (NH₄)₂S, BaS):</strong>
              Растворяются в воде, подвергаются гидролизу по аниону (pH &gt; 7). Реагируют со всеми сильными кислотами.
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-amber-800 block mb-1">2. Нерастворимые в воде, но растворимые в сильных неокисляющих кислотах (FeS, ZnS, MnS):</strong>
              Не растворяются в воде, но легко растворяются в HCl или разбавленной H₂SO₄ с выделением H₂S^:<br />
              <ChemFormula formula="FeS + 2HCl -> FeCl2 + H2S^" className="font-bold text-slate-900 font-mono" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-800 block mb-1">3. Нерастворимые ни в воде, ни в сильных неокисляющих кислотах (CuS, PbS, Ag₂S, HgS):</strong>
              Имеют крайне низкие произведения растворимости (K_sp &lt; 10⁻³⁵). НЕ растворяются в HCl и H₂SO₄(разб)! Осаждаются даже при пропускании H₂S через растворы солей:<br />
              <ChemFormula formula="CuSO4 + H2S -> CuSv (черный) + H2SO4" className="font-bold text-slate-900 font-mono" /><br />
              Растворяются только при кипячении в концентрированной азотной кислоте <ChemFormula formula="HNO3(конц)" className="font-semibold" /> за счет окисления серы!
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-purple-800 block mb-1">4. Сульфиды, разлагаемые водой (необратимый совместный гидролиз: Al₂S₃, Cr₂S₃):</strong>
              Не могут существовать в водном растворе, при получении полностью разлагаются:<br />
              <ChemFormula formula="Al2S3 + 6H2O -> 2Al(OH)3v + 3H2S^" className="font-bold text-slate-900 font-mono" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="section-oxides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Оксиды серы: SO₂ и SO₃
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Сернистый газ (SO₂) и серный ангидрид (SO₃)</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button 
              onClick={() => setModalDiagram({
                type: 'so2',
                title: 'Диоксид серы — 2D-схема уголковой молекулы SO₂ (sp²-гибридизация, угол 119.5°)'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной 2D-схемы"
            >
              <SulfurOxygen2DRender type="so2" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                2D-схема
              </div>
            </button>

            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Диоксид серы (SO₂) — Сернистый газ</span>
              <p className="text-slate-600 font-normal">
                Бесцветный газ с резким запахом загорающейся спи спички. Ангидрид средней по силе кислоты <ChemFormula formula="H2SO3" className="font-semibold" />. Двойственная ОВР функция с преобладанием восстановительных свойств:
              </p>
              <div className="p-2.5 rounded-lg bg-slate-200/60 font-mono text-xs text-slate-900 space-y-1.5">
                <div>• Обесцвечивание бромной воды: <ChemFormula formula="SO2 + Br2 + 2H2O -> H2SO4 + 2HBr" className="font-bold" /></div>
                <div>• Обесцвечивание перманганата: <ChemFormula formula="5SO2 + 2KMnO4 + 2H2O -> K2SO4 + 2MnSO4 + 2H2SO4" className="font-bold" /></div>
                <div>• Реакция сопропорционирования: <ChemFormula formula="SO2 + 2H2S -> 3Sv + 2H2O" className="font-bold" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sulfur Trioxide SO3 Properties */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Триоксид серы (SO₃) — Серный ангидрид</h4>
          <p className="text-xs sm:text-sm text-slate-700 font-normal">
            Плоская тригональная молекула ($sp^2$-гибридизация $S$, угол $120^\circ$). Высший кислотный оксид серы. Энергично взаимодействует с водой с выделением тепла (<ChemFormula formula="SO3 + H2O -> H2SO4 + Q" className="font-bold text-slate-900" />). Растворяется в 100%-ной серной кислоте с образованием олеума.
          </p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section id="section-h2so4" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Серная кислота (H₂SO₄) и олеум
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Свойства концентрированной H₂SO₄, реакции с металлами, неметаллами и пассивация</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button 
              onClick={() => setModalDiagram({
                type: 'h2so4',
                title: 'Серная кислота — 2D-структура тетраэдра H₂SO₄ (sp³-гибридизация, S(+6))'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной 2D-схемы"
            >
              <SulfurOxygen2DRender type="h2so4" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                2D-схема
              </div>
            </button>

            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Серная кислота (H₂SO₄) — Тетраэдрическое окружение</span>
              <p className="text-slate-600 font-normal">
                Концентрированная <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> — мощнейший окислитель за счет <ChemFormula formula="S(+6)" className="font-semibold" />. Окисляет металлы БЕЗ ВЫДЕЛЕНИЯ ВОДОРОДА <ChemFormula formula="H2" className="font-semibold" />!
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Reactions of Conc H2SO4 Box */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Сводная химическая картина ОВР концентрированной H₂SO₄</span>
          </h4>

          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">1. С малоактивными металлами (Cu, Ag, Hg):</strong>
              Восстанавливается до сернистого газа <ChemFormula formula="SO2^" className="font-bold" />:<br />
              <ChemFormula formula="Cu + 2H2SO4(конц) -t-> CuSO4 + SO2^ + 2H2O" className="font-bold text-slate-900 font-mono" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">2. С активными металлами (Zn, Mg, Ca):</strong>
              Восстанавливается преимущественно до сероводорода <ChemFormula formula="H2S^" className="font-bold" /> или элементной серы <ChemFormula formula="Sv" className="font-bold" />:<br />
              <ChemFormula formula="4Zn + 5H2SO4(конц) -> 4ZnSO4 + H2S^ + 4H2O" className="font-bold text-slate-900 font-mono" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">3. Пассивация на холоду (20°C):</strong>
              Железо (<ChemFormula formula="Fe" />), хром (<ChemFormula formula="Cr" />) и алюминий (<ChemFormula formula="Al" />) НЕ реагируют с концентрированной <ChemFormula formula="H2SO4" /> при комнатной температуре. При нагревании пассивирующая пленка разрушается:<br />
              <ChemFormula formula="2Fe + 6H2SO4(конц) -t-> Fe2(SO4)3 + 3SO2^ + 6H2O" className="font-bold text-slate-900 font-mono" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">4. С неметаллами (C, S, P):</strong><br />
              <ChemFormula formula="C + 2H2SO4(конц) -t-> CO2^ + 2SO2^ + 2H2O" className="font-bold text-slate-900 font-mono" /><br />
              <ChemFormula formula="S + 2H2SO4(конц) -t-> 3SO2^ + 2H2O" className="font-bold text-slate-900 font-mono" /><br />
              <ChemFormula formula="2P + 5H2SO4(конц) -t-> 2H3PO4 + 5SO2^ + 2H2O" className="font-bold text-slate-900 font-mono" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section id="section-salts" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Соли серных кислот: сульфаты, сульфиты, тиосульфаты
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Качественный анализ анионов серы и свойства тиосульфата натрия</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
          <h4 className="font-bold text-slate-900 text-sm">Качественные реакции аналитической химии</h4>
          
          <div className="space-y-2.5 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Сульфат-ион <ChemFormula formula="SO4(2-)" className="font-semibold text-slate-900" />:</strong> Качественный реагент <ChemFormula formula="Ba(2+)" className="font-bold text-slate-900" /> образует белый осадок <ChemFormula formula="BaSO4v" className="font-bold text-slate-900" />, нерастворимый ни в $H_2O$, ни в $HNO_3$, ни в $HCl$:<br />
              <ChemFormula formula="Ba(2+) + SO4(2-) -> BaSO4v (белый мелкокристаллический)" className="font-bold text-slate-900 font-mono" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Сульфит-ион <ChemFormula formula="SO3(2-)" className="font-semibold text-slate-900" />:</strong> При взаимодействии с сильными кислотами выделяется сернистый газ <ChemFormula formula="SO2^" className="font-bold text-slate-900" /> с резким запахом спички:<br />
              <ChemFormula formula="Na2SO3 + 2HCl -> 2NaCl + SO2^ + H2O" className="font-bold text-slate-900 font-mono" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Тиосульфат натрия <ChemFormula formula="Na2S2O3" className="font-semibold text-slate-900" />:</strong> Диспропорционирование в кислой среде с мутью элементной серы и выделением газа <ChemFormula formula="SO2^" className="font-bold text-slate-900" />:<br />
              <ChemFormula formula="Na2S2O3 + H2SO4 -> Na2SO4 + Sv (желтый) + SO2^ + H2O" className="font-bold text-slate-900 font-mono" /><br />
              Тиосульфат — стандартный реагент в иодометрии:<br />
              <ChemFormula formula="2Na2S2O3 + I2 -> Na2S4O6 + 2NaI" className="font-bold text-slate-900 font-mono" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section id="section-industry" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. Промышленный химизм: Контактный способ производства H₂SO₄
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Технологическая схема, стадии обжига, катализатор V₂O₅, теплообмен и Клаусс-процесс</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Детальный химико-технологический разбор промышленного производства серной кислоты контактным способом, включая реакторы, теплообменники и промышленный процесс Клаусса:
        </p>

        <SulfurOxygenDarkBlocks />
      </section>

      {/* SECTION 9 */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Интерактивные 3D-модели веществ серы и кислорода
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Пространственные 3D-модели молекул Three.js</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <MoleculeViewer3D
          moleculeIds={['o2', 'o3', 'h2o', 'h2o2', 'h2s', 'so2', 'so3', 'h2so4', 's8']}
          initialSelectedId="so2"
          title="Интерактивные 3D-модели соединений серы и кислорода"
        />
      </section>

      {/* Practice Banner */}
      <PracticeBanner
        topicCode="ХЭ-06"
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
              <SulfurOxygen2DRender type={modalDiagram.type} />
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
