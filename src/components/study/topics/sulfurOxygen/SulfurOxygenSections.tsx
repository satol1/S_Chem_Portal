import React, { useState } from 'react';
import { ZoomIn, X, FlaskConical } from 'lucide-react';
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
                Электронные конфигурации, валентные состояния и особенности d-орбиталей
              </p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кислород (<ChemFormula formula="O" className="font-semibold text-slate-900" />) и сера (<ChemFormula formula="S" className="font-semibold text-slate-900" />) — главные представители VI-A группы (<TermTooltip term="Халькогены" definition="Элементы главной подгруппы VI группы: O, S, Se, Te, Po." />). На внешнем энергетическом уровне их атомы содержат по 6 валентных электронов (<ChemFormula formula="ns^2 np^4" className="font-semibold text-slate-900" />).
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Характеристика</th>
                <th className="p-3.5">Кислород (O) — 2-й период</th>
                <th className="p-3.5">Сера (S) — 3-й период</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Порядковый номер и атомная масса</td>
                <td className="p-3.5">Z = 8, Ar = 15.999</td>
                <td className="p-3.5">Z = 16, Ar = 32.06</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электронная конфигурация</td>
                <td className="p-3.5">1s² 2s² 2p⁴ (нет d-орбиталей)</td>
                <td className="p-3.5">1s² 2s² 2p⁶ 3s² 3p⁴ 3d⁰ (есть 3d)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Валентность</td>
                <td className="p-3.5 font-semibold text-slate-900">Строго II (в CO валентность III)</td>
                <td className="p-3.5 font-semibold text-slate-900">II, IV, VI (распаривание e⁻)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Степени окисления</td>
                <td className="p-3.5">-2, -1 (в H₂O₂), 0, +2 (в OF₂)</td>
                <td className="p-3.5">-2, 0, +2, +4, +6</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электроотрицательность (по Полингу)</td>
                <td className="p-3.5 font-semibold text-slate-900">3.44 (2-е место после F)</td>
                <td className="p-3.5 font-semibold text-slate-900">2.58 (умеренная)</td>
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
                2. <TermTooltip term="Аллотропия" definition="Существование одного элемента в виде нескольких простых веществ." /> кислорода (O₂, O₃) и серы (S₈)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Дикислород, озон, ромбическая и пластическая сера</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

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
                Состоит из 8-членных корончатых циклов S₈. Желтые кристаллы, устойчивые при комнатной температуре. Не растворяется в воде, легко растворяется в сероуглероде <ChemFormula formula="CS2" className="font-semibold text-slate-900" />.
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
                  Газ с резким запахом. Молекула изогнута (угол 116.8°) из-за sp²-гибридизации центрального O. Сильнейший окислитель.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-200/60 font-mono text-xs text-slate-900">
                  Качественная реакция (посинение крахмала):<br />
                  <ChemFormula formula="O3 + 2KI + H2O -> O2^ + I2v + 2KOH" className="font-bold" />
                </div>
              </div>
            </div>
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
              <p className="text-xs sm:text-sm text-slate-500">Двойственная ОВР-функция пероксида водорода</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Двойственность ОВР свойств H₂O₂ (степень окисления O = -1)</span>
          </h4>
          
          <div className="space-y-2 text-xs sm:text-sm font-normal">
            <div>
              <strong>1. Как окислитель (переходит в H₂O):</strong><br />
              <ChemFormula formula="H2O2 + 2KI + H2SO4 -> I2v + K2SO4 + 2H2O" className="font-bold text-slate-900" /><br />
              <ChemFormula formula="PbS (черный) + 4H2O2 -> PbSO4 (белый) + 4H2O" className="font-bold text-slate-900" />
            </div>
            <div className="pt-2">
              <strong>2. Как восстановитель (переходит в O₂^):</strong><br />
              <ChemFormula formula="2KMnO4 + 5H2O2 + 3H2SO4 -> 2MnSO4 + K2SO4 + 5O2^ + 8H2O" className="font-bold text-slate-900" />
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
              <p className="text-xs sm:text-sm text-slate-500">Классификация сульфидов и гидролиз</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Растворимость сульфидов в сильных кислотах</h4>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-normal">
            <p>
              • <strong>Нерастворимы даже в HCl/H₂SO₄(разб):</strong> <ChemFormula formula="CuS" className="font-bold text-slate-900" />, <ChemFormula formula="PbS" className="font-bold text-slate-900" />, <ChemFormula formula="Ag2S" className="font-bold text-slate-900" />, <ChemFormula formula="HgS" className="font-bold text-slate-900" />.
            </p>
            <p>
              • <strong>Растворимы в сильных кислотах:</strong> <ChemFormula formula="FeS" className="font-bold text-slate-900" />, <ChemFormula formula="ZnS" className="font-bold text-slate-900" />, <ChemFormula formula="MnS" className="font-bold text-slate-900" />.
            </p>
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
              <p className="text-xs sm:text-sm text-slate-500">Сернистый газ и серный ангидрид</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
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
              <span className="font-bold text-slate-900 text-base block">Диоксид серы (SO₂)</span>
              <p className="text-slate-600 font-normal">
                Сернистый газ обесцвечивает бромную воду и перманганат калия:
              </p>
              <div className="p-2.5 rounded-lg bg-slate-200/60 font-mono text-xs text-slate-900 space-y-1">
                <div><ChemFormula formula="SO2 + Br2 + 2H2O -> H2SO4 + 2HBr" className="font-bold" /></div>
                <div><ChemFormula formula="SO2 + 2H2S -> 3Sv + 2H2O" className="font-bold" /></div>
              </div>
            </div>
          </div>
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
              <p className="text-xs sm:text-sm text-slate-500">Свойства концентрированной H₂SO₄ и пассивация</p>
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
              <span className="font-bold text-slate-900 text-base block">Серная кислота (H₂SO₄)</span>
              <p className="text-slate-600 font-normal">
                Концентрированная <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> является сильнейшим ОВР-окислителем. Реагирует с металлами без выделения водорода!
              </p>
              <div className="p-2.5 rounded-lg bg-slate-200/60 font-mono text-xs text-slate-900 space-y-1">
                <div><ChemFormula formula="Cu + 2H2SO4(конц) -t-> CuSO4 + SO2^ + 2H2O" className="font-bold" /></div>
                <div><ChemFormula formula="C + 2H2SO4(конц) -t-> CO2^ + 2SO2^ + 2H2O" className="font-bold" /></div>
              </div>
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
              <p className="text-xs sm:text-sm text-slate-500">Качественные реакции на анионы серы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
          <p>
            • <strong>Сульфат-ион <ChemFormula formula="SO4(2-)" className="font-semibold text-slate-900" />:</strong> Качественный реагент <ChemFormula formula="Ba(2+)" className="font-bold text-slate-900" /> дает белый осадок <ChemFormula formula="BaSO4v" className="font-bold text-slate-900" />, нерастворимый в сильных кислотах.
          </p>
          <p>
            • <strong>Сульфит-ион <ChemFormula formula="SO3(2-)" className="font-semibold text-slate-900" />:</strong> При действии кислот выделяется <ChemFormula formula="SO2^" className="font-bold text-slate-900" /> с резким запахом.
          </p>
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
              <p className="text-xs sm:text-sm text-slate-500">Стадии производства, катализатор V₂O₅ и олеум</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

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
              <p className="text-xs sm:text-sm text-slate-500">Пространственные 3D-модели молекул</p>
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
