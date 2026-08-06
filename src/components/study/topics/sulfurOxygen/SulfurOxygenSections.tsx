import React, { useState } from 'react';
import { ZoomIn, X, FlaskConical, Flame, ShieldAlert, TestTube, Factory, BookOpen, Layers } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { SulfurOxygen2DRender } from './SulfurOxygen2DRenders';
import { 
  SulfurOxygenDarkBlock1, 
  SulfurOxygenDarkBlock2, 
  SulfurOxygenDarkBlock3 
} from './SulfurOxygenDarkBlocks';
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
                1. Сравнительный анализ
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Элементы VI-A группы (S и O). Электронные конфигурации, валентные состояния и периодометрические свойства подгруппы кислорода
              </p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кислород (<ChemFormula formula="O" className="font-semibold text-slate-900" />) и сера (<ChemFormula formula="S" className="font-semibold text-slate-900" />) принадлежат к 16-й (VI-A) группе Периодической системы элементов Д.И. Менделеева — <TermTooltip term="Халькогены" definition="Элементы VI-A группы (16 группы ИЮПАК): O, S, Se, Te, Po, Lv. Название происходит от греч. «халькос» (руда) и «генос» (рождающий)." />. На внешнем энергетическом уровне их атомы содержат по 6 валентных электронов (<ChemFormula formula="ns^2 np^4" className="font-semibold text-slate-900" />). Полный ряд халькогенов (<ChemFormula formula="O" className="font-semibold text-slate-900" />, <ChemFormula formula="S" className="font-semibold text-slate-900" />, <ChemFormula formula="Se" className="font-semibold text-slate-900" />, <ChemFormula formula="Te" className="font-semibold text-slate-900" />, <ChemFormula formula="Po" className="font-semibold text-slate-900" />) демонстрирует регулярное увеличение ковалентных радиусов (<ChemFormula math="r_{\text{ков}}(\mathrm{O}) = 0.066\,\text{нм}" className="font-semibold text-slate-900" />, <ChemFormula math="r_{\text{ков}}(\mathrm{S}) = 0.104\,\text{нм}" className="font-semibold text-slate-900" />) и законный переход от неметаллов к полуметаллам и металлу (полоний).
        </p>

        {/* Detailed Comparison Table (Amber accent style matching elements theme) */}
        <div className="overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Характеристика</th>
                <th className="p-3.5">Кислород (O) — 2-й период</th>
                <th className="p-3.5">Сера (S) — 3-й период</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30">
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Порядковый номер (<ChemFormula math="Z" />) и атомная масса (<ChemFormula math="A_r" />)</td>
                <td className="p-3.5"><ChemFormula math="Z = 8,\; A_r = 15.999" /></td>
                <td className="p-3.5"><ChemFormula math="Z = 16,\; A_r = 32.06" /></td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Электронная конфигурация</td>
                <td className="p-3.5"><ChemFormula formula="1s^2 2s^2 2p^4" /> (отсутствуют 2d-орбитали)</td>
                <td className="p-3.5"><ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^4 3d^0" /> (есть вакантные 3d)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Атомный радиус (ковалентный <ChemFormula math="r_{\text{ков}}" />, вандерваальсов <ChemFormula math="r_{\text{vdW}}" />)</td>
                <td className="p-3.5"><ChemFormula math="r_{\text{ков}} = 0.066\,\text{нм},\; r_{\text{vdW}} = 0.152\,\text{нм}" /></td>
                <td className="p-3.5"><ChemFormula math="r_{\text{ков}} = 0.104\,\text{нм},\; r_{\text{vdW}} = 0.180\,\text{нм}" /></td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Энергия первой ионизации (<ChemFormula math="I_1" />)</td>
                <td className="p-3.5"><ChemFormula math="I_1 = 1314\,\text{кДж/моль} \;(13.62\,\text{эВ})" /></td>
                <td className="p-3.5"><ChemFormula math="I_1 = 1000\,\text{кДж/моль} \;(10.36\,\text{эВ})" /></td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Сродство к электрону (<ChemFormula math="E_{\text{ea}}" />)</td>
                <td className="p-3.5"><ChemFormula math="E_{\text{ea}} = 141\,\text{кДж/моль}" /> (ниже S из-за плотности 2p-слоя)</td>
                <td className="p-3.5 font-semibold text-slate-900"><ChemFormula math="E_{\text{ea}} = 200.4\,\text{кДж/моль}" /> (высокое)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Электроотрицательность по Полингу (<ChemFormula math="\chi" />)</td>
                <td className="p-3.5 font-bold text-rose-800"><ChemFormula math="\chi = 3.44" /> (2-е место после F = 3.98)</td>
                <td className="p-3.5 font-semibold text-slate-900"><ChemFormula math="\chi = 2.58" /> (умеренная)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Валентные состояния</td>
                <td className="p-3.5 font-semibold text-slate-900">II (в <ChemFormula formula="H2O" />, <ChemFormula formula="OF2" />); III (в <ChemFormula formula="H3O(+)" />, <ChemFormula formula="CO" /> по донорно-акцепторному)</td>
                <td className="p-3.5 font-semibold text-slate-900">II, IV (в <ChemFormula formula="SO2" />), VI (в <ChemFormula formula="SO3" />, <ChemFormula formula="H2SO4" />, <ChemFormula formula="SF6" />)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Степени окисления</td>
                <td className="p-3.5">-2 (оксиды), -1 (пероксиды), 0 (<ChemFormula formula="O2" />), +2 (<ChemFormula formula="OF2" />)</td>
                <td className="p-3.5">-2 (<ChemFormula formula="H2S" />), 0 (<ChemFormula formula="S8" />), +4 (<ChemFormula formula="SO2" />), +6 (<ChemFormula formula="H2SO4" />)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Энергия одинарной связи (<ChemFormula math="E_{\text{связи}}(\mathrm{E}\text{--}\mathrm{E})" />)</td>
                <td className="p-3.5"><ChemFormula math="E(\mathrm{O}\text{--}\mathrm{O}) = 146\,\text{кДж/моль}" /> (слабая из-за отталкивания н.э.п.)</td>
                <td className="p-3.5 font-semibold text-emerald-800"><ChemFormula math="E(\mathrm{S}\text{--}\mathrm{S}) = 266\,\text{кДж/моль}" /> (высокая прочность)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Энергия двойной связи (<ChemFormula math="E_{\text{связи}}(\mathrm{E}=\mathrm{E})" />)</td>
                <td className="p-3.5 font-semibold text-slate-900"><ChemFormula math="E(\mathrm{O}=\mathrm{O}) = 498\,\text{кДж/моль}" /> (высшая прочность pπ-pπ)</td>
                <td className="p-3.5"><ChemFormula math="E(\mathrm{S}=\mathrm{S}) = 425\,\text{кДж/моль}" /> (диффузное 3pπ-3pπ перекрывание)</td>
              </tr>
              <tr className="hover:bg-amber-100/50 transition-colors">
                <td className="p-3.5 font-semibold text-slate-900">Способность к <TermTooltip term="Катенация" definition="Свойство атомов одного химического элемента связываться друг с другом в устойчивые цепи или кольца (от лат. catena — цепь). Сера обладает высочайшей способностью к катенации среди неметаллов после углерода." /> (цепочкам)</td>
                <td className="p-3.5">Низкая (только пероксиды <ChemFormula formula="-O-O-" />)</td>
                <td className="p-3.5 font-semibold text-emerald-800">Высокая (полисульфиды <ChemFormula formula="-S-S-S-" />, кольца <ChemFormula formula="S8" />, цепи <ChemFormula math="\mathrm{S}_\infty" />)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quantum Mechanism & Excitation Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Квантово-механические причины различий валентных возможностей</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 font-bold text-slate-900">
                <span>Кислород (O) — 2-й период</span>
                <span className="font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-xs"><ChemFormula math="Z = 8" /></span>
              </div>
              <p className="text-slate-600 leading-relaxed font-normal">
                На 2-м энергетическом уровне <strong>полностью отсутствуют d-орбитали</strong>. Энергетический зазор до 3s-орбитали превышает 10 эВ. Распаривание электронных пар невозможно, поэтому в основном состоянии валентность кислорода равна II (<ChemFormula formula="H2O" />). Валентность III достигается только по донорно-акцепторному механизму (<ChemFormula formula="H3O(+)" />, <ChemFormula formula="CO" /> с тройной связью <ChemFormula formula=":C#O:" />).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 font-bold text-slate-900">
                <span>Сера (S) — 3-й период</span>
                <span className="font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-xs"><ChemFormula math="Z = 16" /></span>
              </div>
              <p className="text-slate-600 leading-relaxed font-normal">
                На 3-м уровне находятся <strong>низколежащие вакантные 3d-орбитали</strong>. При возбуждении электронные пары распариваются: <ChemFormula formula="3s^2 3p^3 3d^1" /> (валентность IV в <ChemFormula formula="SO2" />, <ChemFormula formula="SF4" />) и <ChemFormula formula="3s^1 3p^3 3d^2" /> (валентность VI в <ChemFormula formula="SO3" />, <ChemFormula formula="H2SO4" />, октаэдрическом <ChemFormula formula="SF6" /> с sp³d²-гибридизацией).
              </p>
            </div>
          </div>
        </div>

        {/* Fundamental Chemical Differences & Lone Pair Repulsion */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Принципиальное различие в связывании: Кислородная аномалия и <TermTooltip term="Катенация" definition="Свойство атомов одного химического элемента связываться друг с другом в устойчивые цепи или кольца (от лат. catena — цепь). Сера обладает высочайшей способностью к катенации среди неметаллов после углерода." /> серы</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">1. Прочность кратных <ChemFormula math="p_\pi-p_\pi" /> связей O₂ против S₈</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                Малый атомный радиус кислорода (<ChemFormula math="r_{\text{ков}} = 0.066\,\text{нм}" />) обеспечивает эффективное боковое перекрывание 2p-орбиталей с образованием прочной двойной связи <ChemFormula formula="O=O" className="font-semibold text-slate-900" /> (<ChemFormula math="E = 498\,\text{кДж/моль}" />). У серы 3p-орбитали более диффузны, боковое перекрывание слабое, поэтому сера выигрывает в энергии при образовании прочных одинарных <ChemFormula math="\sigma" />-связей <ChemFormula formula="S-S" className="font-semibold text-slate-900" /> (<ChemFormula math="E = 266\,\text{кДж/моль}" />), замыкаясь в корончатые кольца <ChemFormula formula="S8" />.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block">2. Нестабильность связи -O-O- и <TermTooltip term="Катенация" definition="Свойство атомов одного химического элемента связываться друг с другом в устойчивые цепи или кольца (от лат. catena — цепь). Сера обладает высочайшей способностью к катенации среди неметаллов после углерода." /> серы</span>
              <p className="text-slate-600 leading-relaxed font-normal">
                В связи <ChemFormula formula="O-O" /> (<ChemFormula math="E = 146\,\text{кДж/моль}" />) близко расположенные неподелённые электронные пары испытывают сильнейшее отталкивание (Lone Pair Repulsion). В одинарной связи <ChemFormula formula="S-S" /> (<ChemFormula math="E = 266\,\text{кДж/моль}" />) атомы разнесены дальше (<ChemFormula math="r_{\text{ков}} = 0.104\,\text{нм}" />), отталкивание слабое, что обусловливает уникальную способность серы к <TermTooltip term="Катенация" definition="Свойство атомов одного химического элемента связываться друг с другом в устойчивые цепи или кольца (от лат. catena — цепь). Сера обладает высочайшей способностью к катенации среди неметаллов после углерода." /> (цепи <ChemFormula math="\mathrm{S}_\infty" />, полисульфиды <ChemFormula math="\mathrm{S}_n^{2-}" />).
              </p>
            </div>
          </div>
        </div>

        {/* Academic Hydride Comparison (Drago's Rule) */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-slate-700" />
            <span>Закономерности в водородных соединениях (H₂E) и правило Драго</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            При переходе от <ChemFormula formula="H2O" /> к тяжелым гидридам <ChemFormula formula="H2S" />, <ChemFormula formula="H2Se" />, <ChemFormula formula="H2Te" /> наблюдается падение угла связи и усиление кислотных и восстановительных свойств:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
                <tr>
                  <th className="p-3.5">Соединение (<ChemFormula formula="H2E" />)</th>
                  <th className="p-3.5">Валентный угол (<ChemFormula math="\angle\mathrm{H}\text{--}\mathrm{E}\text{--}\mathrm{H}" />)</th>
                  <th className="p-3.5">Тип гибридизации</th>
                  <th className="p-3.5">Энергия связи H-E (кДж/моль)</th>
                  <th className="p-3.5">Кислотность (<ChemFormula math="pK_{a1}" />)</th>
                  <th className="p-3.5">Восстановительные свойства</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="H2O" /></td>
                  <td className="p-3.5 font-mono font-semibold">104.5°</td>
                  <td className="p-3.5">sp³-гибридизация</td>
                  <td className="p-3.5 font-mono">463</td>
                  <td className="p-3.5 font-mono"><ChemFormula math="pK_{a1} = 15.7" /> (амфотерный растворитель)</td>
                  <td className="p-3.5 text-slate-500">Отсутствуют</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="H2S" /></td>
                  <td className="p-3.5 font-mono font-semibold">92.1°</td>
                  <td className="p-3.5">Правило Драго (чистые p-орбитали)</td>
                  <td className="p-3.5 font-mono">363</td>
                  <td className="p-3.5 font-mono font-semibold"><ChemFormula math="pK_{a1} = 7.04" /> (слабая кислота)</td>
                  <td className="p-3.5 text-slate-900 font-medium">Умеренный восстановитель</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="H2Se" /></td>
                  <td className="p-3.5 font-mono font-semibold">91.0°</td>
                  <td className="p-3.5">Правило Драго (чистые p-орбитали)</td>
                  <td className="p-3.5 font-mono">276</td>
                  <td className="p-3.5 font-mono font-semibold text-rose-800"><ChemFormula math="pK_{a1} = 3.89" /> (средняя кислота)</td>
                  <td className="p-3.5 text-rose-800 font-medium">Сильный восстановитель</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold text-slate-900"><ChemFormula formula="H2Te" /></td>
                  <td className="p-3.5 font-mono font-semibold">89.5°</td>
                  <td className="p-3.5">Правило Драго (чистые p-орбитали)</td>
                  <td className="p-3.5 font-mono">238</td>
                  <td className="p-3.5 font-mono font-bold text-rose-800"><ChemFormula math="pK_{a1} = 2.60" /> (сильная кислота)</td>
                  <td className="p-3.5 text-rose-800 font-bold">Сильнейший восстановитель</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic pt-0.5">
            * <strong>Правило Драго:</strong> У тяжелых элементов 3-го и последующих периодов (S, Se, Te) гибридизация s- и p-орбиталей энергетически невыгодна из-за большого различия в их радиальных размерах. Связи образуются практически чистыми p-орбиталями под углом близким к 90°.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="section-allotropes" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. <TermTooltip term="Аллотропия" definition="Существование одного химического элемента в виде нескольких простых веществ." />
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Кислород (O₂, O₃) и сера (S₈). Дикислород, озон, ромбическая, моноклинная и пластическая сера</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Аллотропные формы элементов группы VI-A отличаются типом молекулярной кристаллической решетки, геометрией молекул, фазовыми переходами и реакционной способностью.
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
                  title: 'Ромбическая сера — 3D-корончатая конформация S₈ (sp³-гибридизация, валентный угол 107.9°, торсионный 98.0°)'
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
                title="Нажмите для открытия справочной структурной формулы"
              >
                <SulfurOxygen2DRender type="rhombic-sulfur" />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  Ромбическая сера S₈
                </div>
              </button>

              <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
                Кристаллы лимонно-желтого цвета (температура плавления 112.8 °C, плотность 2.07 г/см³). При 95.6 °C энантиотропно переходит в моноклинную β-S₈. Состоит из замкнутых молекул <ChemFormula formula="S8" className="font-semibold text-slate-900" /> в форме короны. Не растворяется в воде, растворяется в сероуглероде <ChemFormula formula="CS2" className="font-semibold text-slate-900" />.
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
                  title: 'Озон — структурная формула изогнутой молекулы O₃ (sp²-гибридизация, угол 116.8°)'
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-sky-500 transition-colors"
                title="Нажмите для открытия справочной структурной формулы"
              >
                <SulfurOxygen2DRender type="ozone" />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  Озон O₃
                </div>
              </button>

              <div className="space-y-2 flex-1">
                <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm">
                  Газ светло-голубого цвета с удушливым свежим запахом. Молекула изогнута (угол 116.8°) за счет sp²-гибридизации центрального O. Сильнейший окислитель (окисляет <ChemFormula formula="Ag -> Ag2O" className="font-semibold text-slate-900" />, <ChemFormula formula="PbS -> PbSO4" className="font-semibold text-slate-900" />).
                </p>
                <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-900">
                  Качественная реакция на озон (посинение крахмальной бумаги):<br />
                  <ChemFormula formula="O3 + 2KI + H2O -> O2^ + I2v + 2KOH" className="font-bold text-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Viscosity & Polymerization of Liquid Sulfur */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-700" />
            <span>Аномалия вязкости расплава серы при нагревании</span>
          </h4>
          <p className="text-slate-700 leading-relaxed font-normal">
            При расплавлении серы при 119 °C образуется подвижная желтая жидкость из молекул S₈. При нагревании выше 160 °C кольца S₈ разрываются с образованием <TermTooltip term="биррадикалов" definition="Частицы или фрагменты молекул с двумя неспаренными электронами на концах открытой цепи (•S-S-S-S-S-S-S-S•), способные легко связываться в полимерные цепи." /> <code className="font-mono text-amber-900 font-bold text-xs">•S-S-S-S-S-S-S-S•</code>, которые связываются в гигантские полимерные цепи (вязкость возрастает в 10 000 раз!). При выливании этого темно-коричневого расплава при 190 °C в холодную воду образуется резиноподобная <strong>пластическая сера</strong>.
          </p>
        </div>

        {/* Detailed Chemical Properties of Elemental Sulfur */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-600" />
            <span>Химические свойства элементной серы</span>
          </h4>
          
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <p>
              • <strong>С металлами (окислитель, образует сульфиды):</strong> реагирует с <ChemFormula formula="Na" className="font-semibold text-slate-900" />, <ChemFormula formula="K" className="font-semibold text-slate-900" />, <ChemFormula formula="Ca" className="font-semibold text-slate-900" />, <ChemFormula formula="Fe" className="font-semibold text-slate-900" />, <ChemFormula formula="Zn" className="font-semibold text-slate-900" /> при нагревании. С ртутью <ChemFormula formula="Hg" className="font-semibold text-slate-900" /> реагирует при комнатной температуре 20 °C (связывание пролитой ртути — демеркуризация!):<br />
              <ChemFormula formula="Hg + S -> HgS (черный)" className="font-bold text-slate-900" /><br />
              <ChemFormula formula="Fe + S -t-> FeS" className="font-bold text-slate-900" />
            </p>
            <p>
              • <strong>С неметаллами (восстановитель со сильными неметаллами):</strong> с кислородом <ChemFormula formula="O2" className="font-semibold text-slate-900" />, фтором <ChemFormula formula="F2" className="font-semibold text-slate-900" />, хлором <ChemFormula formula="Cl2" className="font-semibold text-slate-900" />, углеродом <ChemFormula formula="C" className="font-semibold text-slate-900" />, фосфором <ChemFormula formula="P" className="font-semibold text-slate-900" />:<br />
              <ChemFormula formula="S + O2 -t-> SO2^" className="font-bold text-slate-900" /><br />
              <ChemFormula formula="C + 2S -t-> CS2" className="font-bold text-slate-900" />
            </p>
            <p>
              • <strong>Диспропорционирование в горячих щелочах:</strong> сера самоокисляется-самовосстанавливается в горячем растворе щелочи:<br />
              <ChemFormula formula="3S + 6KOH -t-> 2K2S + K2SO3 + 3H2O" className="font-bold text-slate-900" />
            </p>
          </div>
        </div>

        {/* Distributed Dark Block 3: Underground Sulfur Mining (Frasch Process) */}
        <SulfurOxygenDarkBlock3 />

        <SulfurOxygenFunFacts />
      </section>

      {/* SECTION 3 */}
      <section id="section-peroxide" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Химия кислорода и пероксидов
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">O₂, O₃, H₂O₂. Лабораторное получение O₂, регенерация воздуха пероксидами и двойственность H₂O₂</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        {/* Superoxides and Air Regeneration Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-700" />
            <span>Пероксиды и надпероксиды в автономных системах регенерации воздуха (космос, подводные лодки)</span>
          </h4>
          <p className="text-slate-700 leading-relaxed font-normal">
            Пероксид натрия <ChemFormula formula="Na2O2" className="font-semibold text-slate-900" /> и надпероксид калия <ChemFormula formula="KO2" className="font-semibold text-slate-900" /> связывают углекислый газ <ChemFormula formula="CO2" className="font-semibold text-slate-900" />, выдыхаемый человеком, с одновременным выделением чистейшего кислорода <ChemFormula formula="O2^" className="font-semibold text-slate-900" />:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-900 font-semibold space-y-1">
            <div><ChemFormula formula="2Na2O2 + 2CO2 -> 2Na2CO3 + O2^" /></div>
            <div><ChemFormula formula="4KO2 + 2CO2 -> 2K2CO3 + 3O2^" /></div>
          </div>
        </div>

        {/* Laboratory Oxygen Preparation Equations */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TestTube className="w-4 h-4 text-slate-700" />
            <span>Лабораторные способы получения кислорода (O₂)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-900">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              1) Разложение перманганата калия:<br />
              <ChemFormula formula="2KMnO4 -t-> K2MnO4 + MnO2 + O2^" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              2) Разложение бертолетовой соли:<br />
              <ChemFormula formula="2KClO3 -(MnO2, t)-> 2KCl + 3O2^" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              3) Каталитический распад H₂O₂:<br />
              <ChemFormula formula="2H2O2 -(MnO2)-> 2H2O + O2^" className="font-bold text-slate-900" />
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              4) Термолиз нитратов щелочных металлов:<br />
              <ChemFormula formula="2NaNO3 -t-> 2NaNO2 + O2^" className="font-bold text-slate-900" />
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
              <strong className="text-amber-900 block mb-1">1. H₂O₂ как ОКИСЛИТЕЛЬ (кислород восстанавливается из степени -1 в -2):</strong>
              <div className="text-xs text-slate-900 space-y-1">
                <div><ChemFormula formula="H2O2 + 2KI + H2SO4 -> I2v + K2SO4 + 2H2O" className="font-bold text-slate-900" /></div>
                <div><ChemFormula formula="Na2SO3 + H2O2 -> Na2SO4 + H2O" className="font-bold text-slate-900" /></div>
                <div><ChemFormula formula="PbS (черный) + 4H2O2 -> PbSO4 (белый) + 4H2O" className="font-bold text-slate-900" /> (реставрация живописи)</div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-teal-900 block mb-1">2. H₂O₂ как ВОССТАНОВИТЕЛЬ (кислород окисляется из степени -1 в 0):</strong>
              <div className="text-xs text-slate-900 space-y-1">
                <div><ChemFormula formula="2KMnO4 + 5H2O2 + 3H2SO4 -> 2MnSO4 + K2SO4 + 5O2^ + 8H2O" className="font-bold text-slate-900" /> (обесцвечивание)</div>
                <div><ChemFormula formula="Ag2O + H2O2 -> 2Agv + O2^ + H2O" className="font-bold text-slate-900" /></div>
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
                4. Водородные соединения серы и сульфиды
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">H₂S, S²⁻. Восстановительные свойства H₂S и классификация сульфидов по растворимости</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Сероводород <ChemFormula formula="H2S" className="font-semibold text-slate-900" /> — бесцветный чрезвычайно токсичный газ с запахом тухлых яиц. Сера находится в минимальной степени окисления -2, что делает сероводород сильнейшим восстановителем.
        </p>

        {/* Extended OVR Reactions of H2S */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm">Окисление H₂S мощными лабораторными окислителями</h4>
          <div className="text-slate-900 space-y-1 font-semibold">
            <div>• С дихроматом калия в кислой среде: <ChemFormula formula="3H2S + K2Cr2O7 + 4H2SO4 -> 3Sv + Cr2(SO4)3 + K2SO4 + 7H2O" /></div>
            <div>• С хлоридом железа(III): <ChemFormula formula="2FeCl3 + H2S -> 2FeCl2 + Sv + 2HCl" /></div>
            <div>• С бромной водой: <ChemFormula formula="H2S + Br2 -> Sv + 2HBr" /></div>
          </div>
        </div>

        {/* Complete Classification of Sulfides Table */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Классификация сульфидов по отношению к воде и кислотам</h4>
          <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-emerald-800 block mb-1">1. Растворимые сульфиды (Na₂S, K₂S, (NH₄)₂S, BaS):</strong>
              Растворяются в воде, подвергаются гидролизу по аниону (pH &gt; 7). Реагируют со всеми сильными кислотами.
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-amber-800 block mb-1">2. Нерастворимые в воде, но растворимые в сильных неокисляющих кислотах (FeS, ZnS, MnS):</strong>
              Не растворяются в воде, но легко растворяются в <ChemFormula formula="HCl" className="font-semibold text-slate-900" /> или разбавленной <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> с выделением <ChemFormula formula="H2S^" className="font-bold text-slate-900" />:<br />
              <ChemFormula formula="FeS + 2HCl -> FeCl2 + H2S^" className="font-bold text-slate-900" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-rose-800 block mb-1">3. Нерастворимые ни в воде, ни в сильных неокисляющих кислотах (CuS, PbS, Ag₂S, HgS):</strong>
              Имеют крайне низкие произведения растворимости. НЕ растворяются в <ChemFormula formula="HCl" className="font-semibold text-slate-900" /> и разбавленной <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" />! Осаждаются даже при пропускании <ChemFormula formula="H2S" className="font-semibold text-slate-900" /> через растворы солей:<br />
              <ChemFormula formula="CuSO4 + H2S -> CuSv (черный) + H2SO4" className="font-bold text-slate-900" /><br />
              Растворяются только при кипячении в концентрированной азотной кислоте <ChemFormula formula="HNO3(конц)" className="font-semibold text-slate-900" /> за счет окисления серы:<br />
              <ChemFormula formula="CuS + 8HNO3(конц) -t-> CuSO4 + 8NO2^ + 4H2O" className="font-bold text-slate-900" />!
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-purple-800 block mb-1">4. Сульфиды, разлагаемые водой (необратимый совместный гидролиз: Al₂S₃, Cr₂S₃):</strong>
              Не могут существовать в водном растворе, при получении полностью разлагаются:<br />
              <ChemFormula formula="Al2S3 + 6H2O -> 2Al(OH)3v + 3H2S^" className="font-bold text-slate-900" />
            </div>
          </div>
        </div>

        {/* Distributed Dark Block 2: Claus Process (H2S Recovery) */}
        <SulfurOxygenDarkBlock2 />
      </section>

      {/* SECTION 5 */}
      <section id="section-oxides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Оксиды серы
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">SO₂ и SO₃. Сернистый газ (SO₂) и серный ангидрид (SO₃)</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button 
              onClick={() => setModalDiagram({
                type: 'so2',
                title: 'Диоксид серы — структурная формула уголковой молекулы SO₂ (sp²-гибридизация, угол 119.5°)'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <SulfurOxygen2DRender type="so2" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Диоксид серы SO₂
              </div>
            </button>

            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Диоксид серы (SO₂) — Сернистый газ</span>
              <p className="text-slate-600 font-normal">
                Бесцветный газ с резким запахом загорающейся спички. Ангидрид средней по силе кислоты <ChemFormula formula="H2SO3" className="font-semibold" />. Двойственная ОВР функция с преобладанием восстановительных свойств:
              </p>
              <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-900 space-y-1.5 font-semibold">
                <div>• Обесцвечивание бромной воды: <ChemFormula formula="SO2 + Br2 + 2H2O -> H2SO4 + 2HBr" className="font-bold text-slate-900" /></div>
                <div>• Обесцвечивание перманганата: <ChemFormula formula="5SO2 + 2KMnO4 + 2H2O -> K2SO4 + 2MnSO4 + 2H2SO4" className="font-bold text-slate-900" /></div>
                <div>• Окисление азотной кислотой: <ChemFormula formula="SO2 + 2HNO3(конц) -> H2SO4 + 2NO2^" className="font-bold text-slate-900" /></div>
                <div>• Реакция сопропорционирования: <ChemFormula formula="SO2 + 2H2S -> 3Sv + 2H2O" className="font-bold text-slate-900" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sulfur Trioxide SO3 Properties */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm">Триоксид серы (SO₃) — Серный ангидрид</h4>
          <p className="text-xs sm:text-sm text-slate-700 font-normal">
            Плоская тригональная молекула (sp²-гибридизация серы, угол 120°). Высший кислотный оксид серы. Энергично взаимодействует с водой с выделением большого количества тепла (<ChemFormula formula="SO3 + H2O -> H2SO4 + Q" className="font-bold text-slate-900" />). Растворяется в 100%-ной серной кислоте с образованием олеума.
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
                6. Серная кислота и олеум
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">H₂SO₄. Свойства концентрированной H₂SO₄, реакции с металлами, неметаллами, дегидратация и пассивация</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button 
              onClick={() => setModalDiagram({
                type: 'h2so4',
                title: 'Серная кислота — структурная формула тетраэдра H₂SO₄ (sp³-гибридизация, S(+6))'
              })}
              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
              title="Нажмите для открытия справочной структурной формулы"
            >
              <SulfurOxygen2DRender type="h2so4" />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                Серная кислота H₂SO₄
              </div>
            </button>

            <div className="space-y-2 text-xs sm:text-sm flex-1">
              <span className="font-bold text-slate-900 text-base block">Серная кислота (H₂SO₄) — Тетраэдрическое окружение</span>
              <p className="text-slate-600 font-normal">
                Концентрированная <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> — мощнейший окислитель за счет серы +6. Окисляет металлы БЕЗ ВЫДЕЛЕНИЯ ВОДОРОДА <ChemFormula formula="H2" className="font-semibold text-slate-900" />!
              </p>
            </div>
          </div>
        </div>

        {/* Dehydration of Organics by H2SO4 Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 text-sm">Дегидратирующие свойства концентрированной H₂SO₄ в лаборатории</h4>
          <p className="text-slate-700 font-normal">
            Благодаря гигантскому сродству к воде концентрированная серная кислота используется для отщепления элементов воды от органических молекул:
          </p>
          <div className="text-slate-900 font-semibold space-y-1">
            <div>• Получение угарного газа CO из муравьиной кислоты: <ChemFormula formula="HCOOH -(H2SO4, t)-> CO^ + H2O" /></div>
            <div>• Разложение щавелевой кислоты: <ChemFormula formula="H2C2O4 -(H2SO4, t)-> CO^ + CO2^ + H2O" /></div>
            <div>• Обугливание сахарозы: <ChemFormula formula="C12H22O11 -(H2SO4)-> 12C + 11H2O" /></div>
          </div>
        </div>

        {/* Structured Reaction Matrix / OVR Scheme Box */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Сводная карта ОВР концентрированной H₂SO₄</span>
            </h4>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-900 text-xs font-bold border border-amber-300/50">
              Водород (H₂) НЕ выделяется!
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            В реакциях с концентрированной <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> окислителем выступает сера в высшей степени окисления (<ChemFormula math="\mathrm{S}^{+6}" className="font-bold text-slate-900" />). Глубина восстановления зависит от восстановительной активности вещества:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Branch 1: Weak Metals */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-amber-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>1. Малоактивные металлы (Cu, Ag, Hg)</span>
                <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900 font-mono text-xs font-bold">S⁺⁶ → S⁺⁴ (SO₂↑)</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Кислота восстанавливается до сернистого газа <ChemFormula formula="SO2^" className="font-semibold text-slate-900" /> с характерным резким запахом:
              </p>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <ChemFormula formula="Cu + 2H2SO4(конц) -t-> CuSO4 + SO2^ + 2H2O" className="font-bold text-slate-900" />
              </div>
            </div>

            {/* Branch 2: Active Metals */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-emerald-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>2. Активные металлы (Zn, Mg, Ca, Na)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-mono text-xs font-bold">S⁺⁶ → S⁻² (H₂S↑) / S⁰</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Глубокое восстановление до сероводорода <ChemFormula formula="H2S^" className="font-semibold text-slate-900" /> или элементной серы <ChemFormula formula="Sv" className="font-semibold text-slate-900" />:
              </p>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <ChemFormula formula="4Zn + 5H2SO4(конц) -> 4ZnSO4 + H2S^ + 4H2O" className="font-bold text-slate-900" />
              </div>
            </div>

            {/* Branch 3: Passivation Fe, Cr, Al */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-rose-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>3. <TermTooltip term="Пассивация" definition="Образование прочной оксидной пленки на поверхности Fe, Cr, Al при 20°C, прекращающее реакцию с концентрированной H₂SO₄." /> при 20 °C (Fe, Cr, Al)</span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-xs font-bold">Без t° нет реакции</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Без нагревания (при 20 °C) образуется тонкая защитная оксидная пленка. При нагревании пленка разрушается:
              </p>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                <ChemFormula formula="2Fe + 6H2SO4(конц) -t-> Fe2(SO4)3 + 3SO2^ + 6H2O" className="font-bold text-slate-900" />
              </div>
            </div>

            {/* Branch 4: Non-metals */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-indigo-400 transition-colors shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 font-bold text-slate-900">
                <span>4. Неметаллы-восстановители (C, S, P)</span>
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 font-mono text-xs font-bold">S⁺⁶ → S⁺⁴ (SO₂↑)</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Неметаллы окисляются до своих высших оксидов/кислот, а сера восстанавливается до <ChemFormula formula="SO2^" className="font-semibold text-slate-900" />:
              </p>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div><ChemFormula formula="C + 2H2SO4(конц) -t-> CO2^ + 2SO2^ + 2H2O" className="font-bold text-slate-900" /></div>
                <div><ChemFormula formula="S + 2H2SO4(конц) -t-> 3SO2^ + 2H2O" className="font-bold text-slate-900" /></div>
                <div><ChemFormula formula="2P + 5H2SO4(конц) -t-> 2H3PO4 + 5SO2^ + 2H2O" className="font-bold text-slate-900" /></div>
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
                7. Соли серных кислот
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Сульфаты, сульфиты, тиосульфаты. Качественный анализ анионов серы и свойства тиосульфата натрия</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
          <h4 className="font-bold text-slate-900 text-sm">Качественные реакции аналитической химии</h4>
          
          <div className="space-y-2.5 font-normal">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Сульфат-ион <ChemFormula formula="SO4(2-)" className="font-semibold text-slate-900" />:</strong> Качественный реагент <ChemFormula formula="Ba(2+)" className="font-bold text-slate-900" /> образует белый осадок <ChemFormula formula="BaSO4v" className="font-bold text-slate-900" />, нерастворимый ни в <ChemFormula formula="H2O" className="font-semibold text-slate-900" />, ни в <ChemFormula formula="HNO3" className="font-semibold text-slate-900" />, ни в <ChemFormula formula="HCl" className="font-semibold text-slate-900" />:<br />
              <ChemFormula formula="Ba(2+) + SO4(2-) -> BaSO4v (белый мелкокристаллический)" className="font-bold text-slate-900" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Сульфит-ион <ChemFormula formula="SO3(2-)" className="font-semibold text-slate-900" />:</strong> При взаимодействии с сильными кислотами выделяется сернистый газ <ChemFormula formula="SO2^" className="font-bold text-slate-900" /> с резким запахом спички:<br />
              <ChemFormula formula="Na2SO3 + 2HCl -> 2NaCl + SO2^ + H2O" className="font-bold text-slate-900" />
            </div>

            <div className="p-3 bg-white rounded-lg border border-slate-200">
              • <strong>Тиосульфат натрия <ChemFormula formula="Na2S2O3" className="font-semibold text-slate-900" />:</strong> Диспропорционирование в кислой среде с мутью элементной серы и выделением газа <ChemFormula formula="SO2^" className="font-bold text-slate-900" />:<br />
              <ChemFormula formula="Na2S2O3 + H2SO4 -> Na2SO4 + Sv (желтый) + SO2^ + H2O" className="font-bold text-slate-900" /><br />
              Тиосульфат — стандартный реагент в иодометрии:<br />
              <ChemFormula formula="2Na2S2O3 + I2 -> Na2S4O6 + 2NaI" className="font-bold text-slate-900" />
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
                8. Контактный способ
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Промышленный химизм: производство H₂SO₄. Технологическая схема, стадии обжига, катализатор V₂O₅ и теплообмен</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        {/* Standard White Theoretical Card for Contact Process Stages */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Factory className="w-5 h-5 text-slate-800" />
            <span>Стадии контактного способа производства серной кислоты</span>
          </h3>

          <div className="space-y-3 font-normal">
            <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">Стадия 1: Получение и очистка диоксида серы (SO₂)</strong>
              <p>Обжиг измельченного колчедана <ChemFormula formula="FeS2" className="font-semibold text-slate-900" /> производят в печи «кипящего слоя» продувкой воздуха снизу при 800–900 °C:</p>
              <div className="p-2 bg-slate-100 rounded text-slate-900 font-semibold">
                <ChemFormula formula="4FeS2 + 11O2 -(t=800-900°C)-> 2Fe2O3 + 8SO2^ + Q" className="font-bold text-slate-900" />
              </div>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">Стадия 2: Каталитическое окисление SO₂ в SO₃</strong>
              <p>Обратимая экзотермическая реакция в контактном аппарате на катализаторе <ChemFormula formula="V2O5" className="font-semibold text-slate-900" /> при 450–500 °C:</p>
              <div className="p-2 bg-slate-100 rounded text-slate-900 font-semibold">
                <ChemFormula formula="2SO2 + O2 <=(V2O5, t=450-500°C)=> 2SO3 + Q" className="font-bold text-slate-900" />
              </div>
            </div>

            <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">Стадия 3: Абсорбция SO₃ концентрированной серной кислотой</strong>
              <p>Газообразный <ChemFormula formula="SO3" className="font-semibold text-slate-900" /> поглощают 98.3%-ной концентрированной <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> в поглотительной башне с образованием олеума:</p>
              <div className="p-2 bg-slate-100 rounded text-slate-900 font-semibold space-y-1">
                <div><ChemFormula formula="SO3 + H2SO4(98.3%) -> H2S2O7 (олеум)" className="font-bold text-slate-900" /></div>
                <div><ChemFormula formula="H2S2O7 + H2O -> 2H2SO4" className="font-bold text-slate-900" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Distributed Dark Block 1: Contact Process Highlight Card */}
        <SulfurOxygenDarkBlock1 />
      </section>

      {/* SECTION 9 */}
      <section id="section-molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. 3D-модели
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Интерактивные 3D-модели веществ серы и кислорода. Пространственные 3D-модели молекул Three.js</p>
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
              <SulfurOxygen2DRender type={modalDiagram.type} isModal={true} />
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
