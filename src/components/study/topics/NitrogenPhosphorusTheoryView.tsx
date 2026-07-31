import React, { useState } from 'react';
import { 
  Zap, ArrowRight, Lightbulb, AlertTriangle, 
  CheckCircle2, Flame, FlaskConical, Atom, TestTube, Orbit,
  ArrowUp, BookOpen, Factory, Layers, Filter
} from 'lucide-react';
import { ChemFormula } from '../../scientific/ChemFormula';
import { MoleculeViewer3D } from '../../interactive/MoleculeViewer3D';
import { useRouter } from '../../../routes/router';

/**
 * Authentic Academic Tree Diagram for Ammonium Salt Thermal Decomposition (Схема 11)
 */
const AmmoniumDecompositionDiagram: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base italic font-serif">
          Схема 11
        </h4>
        <span className="text-xs text-slate-500 font-sans">Термическое разложение солей аммония</span>
      </div>

      {/* Main Vector Tree Area */}
      <div className="overflow-x-auto py-2">
        <div className="min-w-[720px] flex items-center gap-3 text-slate-900">
          
          {/* Root Label */}
          <div className="w-28 text-right pr-1 shrink-0 font-medium text-base leading-snug">
            <div>Соли</div>
            <div>аммония</div>
          </div>

          {/* SVG Vector Tree Bracket with Arrows */}
          <div className="relative w-48 shrink-0 h-[380px] flex flex-col justify-between py-6">
            <svg className="absolute inset-0 w-full h-full text-slate-400 stroke-[1.75]" preserveAspectRatio="none" viewBox="0 0 192 380">
              {/* Top branch line */}
              <path d="M 12 190 L 36 190 L 36 44 L 176 44" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow)" />
              {/* Middle branch line */}
              <path d="M 36 190 L 176 190" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow)" />
              {/* Bottom branch line */}
              <path d="M 36 190 L 36 336 L 176 336" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow)" />
              <defs>
                <marker id="chem-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* Label 1 on Top Arrow */}
            <div className="relative z-10 text-center text-xs font-medium text-slate-700 bg-slate-50 px-2 py-0.5 self-center -mt-3 border border-slate-200/80 rounded-md shadow-2xs">
              летучих кислот
            </div>

            {/* Label 2 on Middle Arrow */}
            <div className="relative z-10 text-center text-xs font-medium text-slate-700 bg-slate-50 px-2 py-0.5 self-center border border-slate-200/80 rounded-md shadow-2xs">
              нелетучих кислот
            </div>

            {/* Label 3 on Bottom Arrow */}
            <div className="relative z-10 text-center text-xs font-medium text-slate-700 bg-slate-50 px-2 py-0.5 self-center -mb-3 border border-slate-200/80 rounded-md shadow-2xs">
              кислот-окислителей
            </div>
          </div>

          {/* Right Reaction Equations */}
          <div className="flex-1 space-y-7 text-sm pl-2">
            
            {/* Branch 1 */}
            <div className="space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5 text-sm sm:text-base">
                <ChemFormula formula="NH3^" className="font-semibold text-slate-900" /> + летучая кислота
              </div>
              <div className="pl-3 space-y-1 font-mono text-xs sm:text-sm text-slate-900">
                <div className="flex items-center gap-2">
                  <ChemFormula formula="NH4Cl -t-> NH3^ + HCl^" className="font-semibold" />
                </div>
                <div className="flex items-center gap-2">
                  <ChemFormula formula="NH4HCO3 -t-> NH3^ + CO2^ + H2O" className="font-semibold" />
                </div>
                <div className="flex items-center gap-2">
                  <ChemFormula formula="NH4HS = NH3^ + H2S^" className="font-semibold" />
                </div>
              </div>
            </div>

            {/* Branch 2 */}
            <div className="space-y-1.5 pt-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5 text-sm sm:text-base">
                <ChemFormula formula="NH3^" className="font-semibold text-slate-900" /> + нелетучая кислота (или кислая соль)
              </div>
              <div className="pl-3 space-y-1 font-mono text-xs sm:text-sm text-slate-900">
                <div className="flex items-center gap-2">
                  <ChemFormula formula="(NH4)2HPO4 -t-> 2NH3^ + H3PO4" className="font-semibold" />
                </div>
                <div className="flex items-center gap-2">
                  <ChemFormula formula="(NH4)2SO4 -t-> NH3^ + NH4HSO4" className="font-semibold" />
                  <span className="font-sans text-xs text-slate-500"><span className="whitespace-nowrap">(<ChemFormula formula="H2SO4" className="font-semibold text-slate-700" />)</span></span>
                </div>
              </div>
            </div>

            {/* Branch 3 */}
            <div className="space-y-1.5 pt-1">
              <div className="font-semibold text-slate-900 text-sm sm:text-base">
                внутримолекулярное ок.-вос. разложение
              </div>
              <div className="pl-3 space-y-1 font-mono text-xs sm:text-sm text-slate-900">
                <div className="flex items-center gap-2">
                  <ChemFormula formula="(NH4)2Cr2O7 -t-> N2^ + Cr2O3 + 4H2O" className="font-semibold" />
                </div>
                <div className="flex items-center gap-2">
                  <ChemFormula formula="NH4NO2 -t-> N2^ + 2H2O" className="font-semibold" />
                </div>
                <div className="flex items-center gap-2">
                  <ChemFormula formula="NH4NO3 -t-> N2O^ + 2H2O" className="font-semibold" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

/**
 * Clean Academic Reference Matrix Table for Nitric Acid Reactions
 */
const Hno3MatrixTable: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
            Матрица взаимодействий Азотной кислоты (HNO₃)
          </h4>
          <p className="text-xs text-slate-500 font-normal">Сводные продукты восстановления азота по категориям реагентов</p>
        </div>
        <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
          HNO₃ (конц) и HNO₃ (разб)
        </span>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
            <tr>
              <th className="p-3.5 sm:p-4 w-1/4 border-r border-slate-700">Категория реагента</th>
              <th className="p-3.5 sm:p-4 w-3/8 border-r border-slate-700 bg-slate-900/60">
                <div className="flex items-center justify-between">
                  <span>Концентрированная HNO₃</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold">NO₂↑ (Бурый газ)</span>
                </div>
              </th>
              <th className="p-3.5 sm:p-4 w-3/8 bg-slate-800/80">
                <div className="flex items-center justify-between">
                  <span>Разбавленная HNO₃</span>
                  <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono text-[11px] font-bold">NO↑ / NH₄NO₃</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {/* Row 1 */}
            <tr className="hover:bg-slate-50/80 transition">
              <td className="p-3.5 sm:p-4 border-r border-slate-200">
                <div className="font-bold text-slate-900">Малоактивные металлы</div>
                <div className="text-xs text-slate-500 font-mono">Cu, Ag, Hg</div>
              </td>
              <td className="p-3.5 sm:p-4 border-r border-slate-200 font-mono">
                <ChemFormula formula="Cu + 4HNO3(конц) -> Cu(NO3)2 + 2NO2^ + 2H2O" className="text-slate-900 font-semibold" />
              </td>
              <td className="p-3.5 sm:p-4 font-mono">
                <ChemFormula formula="3Cu + 8HNO3(разб) -> 3Cu(NO3)2 + 2NO^ + 4H2O" className="text-slate-900 font-semibold" />
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-slate-50/80 transition bg-slate-50/30">
              <td className="p-3.5 sm:p-4 border-r border-slate-200">
                <div className="font-bold text-slate-900">Пассивирующиеся на холоду</div>
                <div className="text-xs text-slate-500 font-mono">Fe, Cr, Al</div>
              </td>
              <td className="p-3.5 sm:p-4 border-r border-slate-200 space-y-1">
                <div className="text-xs text-amber-800 font-sans font-medium flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Пассивация при 20°C! Реакция только при t°:</span>
                </div>
                <div className="font-mono">
                  <ChemFormula formula="Fe + 6HNO3(конц) -t-> Fe(NO3)3 + 3NO2^ + 3H2O" className="text-slate-900 font-semibold" />
                </div>
              </td>
              <td className="p-3.5 sm:p-4 font-mono">
                <ChemFormula formula="Fe + 4HNO3(разб) -> Fe(NO3)3 + NO^ + 2H2O" className="text-slate-900 font-semibold" />
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-slate-50/80 transition">
              <td className="p-3.5 sm:p-4 border-r border-slate-200">
                <div className="font-bold text-slate-900">Активные металлы</div>
                <div className="text-xs text-slate-500 font-mono">Zn, Mg, Ca, Na</div>
              </td>
              <td className="p-3.5 sm:p-4 border-r border-slate-200 font-mono">
                <ChemFormula formula="Zn + 4HNO3(конц) -> Zn(NO3)2 + 2NO2^ + 2H2O" className="text-slate-900 font-semibold" />
              </td>
              <td className="p-3.5 sm:p-4 font-mono space-y-1">
                <ChemFormula formula="4Zn + 10HNO3(очень разб) -> 4Zn(NO3)2 + NH4NO3 + 3H2O" className="text-slate-900 font-semibold" />
                <div className="text-xs font-sans text-indigo-700 font-medium">(Без выделения газа!)</div>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-slate-50/80 transition bg-slate-50/30">
              <td className="p-3.5 sm:p-4 border-r border-slate-200">
                <div className="font-bold text-slate-900">Неметаллы</div>
                <div className="text-xs text-slate-500 font-mono">P, S, C</div>
              </td>
              <td className="p-3.5 sm:p-4 border-r border-slate-200 font-mono">
                <ChemFormula formula="P + 5HNO3(конц) -> H3PO4 + 5NO2^ + H2O" className="text-slate-900 font-semibold" />
              </td>
              <td className="p-3.5 sm:p-4 font-mono">
                <ChemFormula formula="3P + 5HNO3(разб) + 2H2O -> 3H3PO4 + 5NO^" className="text-slate-900 font-semibold" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const NitrogenPhosphorusTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('comparison');
  const [hydrationTemp, setHydrationTemp] = useState<'cold' | 'warm' | 'hot'>('hot');

  const navItems = [
    { id: 'comparison', label: '1. Сравнение N и P' },
    { id: 'allotropes', label: '2. Простые вещества и Аллотропия' },
    { id: 'hydrides', label: '3. Водородные соединения и Соли аммония' },
    { id: 'oxides', label: '4. Оксиды Азота и Фосфора' },
    { id: 'acids', label: '5. Азотная кислота, Нитриты и Удобрения' },
    { id: 'qualitative', label: '6. Качественные реакции' },
    { id: 'molecules-3d', label: '7. 3D-Модели веществ' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      
      {/* Academic Header Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ХЭ-07
          </span>
          <span>•</span>
          <span>Химия элементов</span>
          <span>•</span>
          <span>V-A Группа (Пниктогены)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Химия Азота (N) и Фосфора (P)</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Обстоятельный учебный конспект по неорганической химии: электронное строение атомов, квантовые ограничения валентности, свойства гидридов, подробная химия солей аммония со Схемой 11, механизмы 3-стадийного синтеза азотной кислоты, свойства нитритов, минеральных удобрений и аналитические качественные реакции.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Atom className="w-4 h-4 text-slate-700" /> Строение атомов</span>
            <span className="flex items-center gap-1.5"><TestTube className="w-4 h-4 text-slate-700" /> Свойства солей аммония</span>
            <span className="flex items-center gap-1.5"><Orbit className="w-4 h-4 text-slate-700" /> 3D-Модели соединений</span>
          </div>

          <button
            onClick={() => openStudyBlock('elements-chemistry', 'elem-nonme-np', 'practice')}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Перейти к практикуму темы</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Academic Table of Contents Navigation Grid */}
      <div id="nav-toc" className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3.5 scroll-mt-6">
        <div className="flex items-center justify-between text-slate-900 border-b border-slate-100 pb-2">
          <span className="flex items-center gap-2 font-bold text-sm sm:text-base">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Содержание раздела</span>
          </span>
          <span className="text-xs text-slate-500 font-normal">7 разделов</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-left transition border ${
                activeSection === item.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: COMPARISON & VALENCE ANOMALY */}
      <section id="comparison" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              01
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Сравнительный анализ: Азот и Фосфор
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Электронные конфигурации, квантовые ограничения и степени окисления</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Theoretical introduction text */}
        <p className="text-slate-700 leading-relaxed font-normal">
          Азот (<ChemFormula formula="N" className="font-semibold text-slate-900" />) и Фосфор (<ChemFormula formula="P" className="font-semibold text-slate-900" />) принадлежат к V-A группе (15-й группе) Периодической системы элементов Д.И. Менделеева — подгруппе p-элементов (пникогенам). На внешнем энергетическом уровне их атомы содержат по 5 валентных электронов (<ChemFormula math="ns^2\,np^3" className="font-semibold text-slate-900" />). Однако существенное различие в строении внешнего энергетического слоя обусловливает кардинальные различия в химическом поведении данных элементов.
        </p>

        {/* Valence Anomaly Academic Alert */}
        <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Квантовое ограничение валентности Азота</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            Азот находится во 2-м периоде, где имеются только две квантовые подоболочки — 2s и 2p. Максимально возможное число валентных орбиталей атома азота равняется 4 (одна s-орбиталь и три p-орбитали <span className="whitespace-nowrap">(<ChemFormula math="2s, 2p_x, 2p_y, 2p_z" className="text-slate-900 font-semibold" />)</span>). Поэтому <strong>максимальная валентность азота равна 4</strong> (в азотной кислоте <ChemFormula formula="HNO3" className="text-slate-900 font-semibold" />, катионе аммония <ChemFormula formula="NH4+" className="text-slate-900 font-semibold" /> и оксиде азота V <ChemFormula formula="N2O5" className="text-slate-900 font-semibold" />). Атом фосфора находится в 3-м периоде и имеет свободные 3d-орбитали (<ChemFormula math="3s^2\,3p^3\,3d^0" className="text-slate-900 font-semibold" />), что позволяет ему переходить в возбужденное состояние (<ChemFormula math="3s^1\,3p^3\,3d^1" className="text-slate-900 font-semibold" />) и проявлять валентность V.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Характеристика</th>
                <th className="p-3.5">Азот (N) — 2-й период</th>
                <th className="p-3.5">Фосфор (P) — 3-й период</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Порядковый номер и масса</td>
                <td className="p-3.5 font-mono">Z = 7, Ar = 14</td>
                <td className="p-3.5 font-mono">Z = 15, Ar = 31</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электронная конфигурация</td>
                <td className="p-3.5 font-mono">1s² 2s² 2p³ (нет 2d-орбиталей)</td>
                <td className="p-3.5 font-mono">1s² 2s² 2p⁶ 3s² 3p³ 3d⁰ (есть 3d)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Возможные валентности</td>
                <td className="p-3.5 font-semibold text-slate-900">I, II, III, IV (Валентность V невозможна)</td>
                <td className="p-3.5 font-semibold text-slate-900">III, V (за счет e⁻ на 3d)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Степени окисления</td>
                <td className="p-3.5 font-mono">-3, 0, +1, +2, +3, +4, +5</td>
                <td className="p-3.5 font-mono">-3, 0, +1, +3, +5</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электроотрицательность (ЭО)</td>
                <td className="p-3.5">3.04 (высокая)</td>
                <td className="p-3.5">2.19 (умеренная, близка к H)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Радиус атома</td>
                <td className="p-3.5 font-mono">0.071 нм</td>
                <td className="p-3.5 font-mono">0.110 нм</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mnemonic Rule */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-start gap-3.5">
          <div className="p-2.5 rounded-lg bg-slate-200 text-slate-800 shrink-0">
            <Lightbulb className="w-5 h-5 text-slate-700" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <h4 className="font-semibold text-slate-900">
              Мнемоническое правило: «Четыре валентные орбитали»
            </h4>
            <p className="text-slate-600 leading-relaxed font-normal">
              Во&nbsp;2-м энергетическом слое азота доступны лишь 4&nbsp;орбитали <span className="whitespace-nowrap">(<ChemFormula math="2s, 2p_x, 2p_y, 2p_z" className="text-slate-900 font-semibold" />)</span>. Так как 5-я d-орбиталь отсутствует, число образуемых связей (валентность) <strong>не&nbsp;может быть больше&nbsp;4</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SIMPLE SUBSTANCES, INDUSTRIAL SYNTHESIS & ALLOTROPES */}
      <section id="allotropes" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              02
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Простые вещества: Тройная связь N₂ и Аллотропы Фосфора
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Свойства N2, промышленное получение P из фосфорита и разновидности фосфора</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Простое вещество азот состоит из двухатомных молекул <ChemFormula formula="N2" className="font-semibold text-slate-900" />, в которых атомы связаны сверхпрочной тройной ковалентной связью <span className="whitespace-nowrap">(<ChemFormula math="1\sigma + 2\pi" className="text-slate-900 font-semibold" />)</span>. Высокая энергия связи (945 кДж/моль) делает азот крайне инертным газом при комнатной температуре. При обычных условиях азот реагирует исключительно с щелочным металлом литием (<ChemFormula formula="Li" className="font-semibold text-slate-900" />), образуя нитрид лития <ChemFormula formula="Li3N" className="font-semibold text-slate-900" />. С другими металлами и водородом реакция протекает только при сильном нагревании.
        </p>

        {/* Nitrogen Gas N2 & History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-slate-900 text-white space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700">
                Молекулярный Азот (N₂)
              </span>
              <span className="text-xs font-mono text-slate-400">:N ≡ N:</span>
            </div>

            <h3 className="text-base font-semibold text-white">
              Химическая инертность азота
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Молекула <ChemFormula formula="N2" className="text-amber-300 font-medium" /> имеет тройную ковалентную связь <span className="whitespace-nowrap">(<ChemFormula math="1\sigma + 2\pi" className="text-amber-300 font-medium" />)</span>, энергия разрыва которой составляет <strong>945&nbsp;кДж/моль</strong>. Из-за этого азот инертен при нормальных условиях.
            </p>

            <div className="p-3.5 rounded-lg bg-slate-800 border border-slate-700 space-y-1 text-xs sm:text-sm font-mono">
              <div className="text-slate-400 font-medium text-xs">Реакция с литием при 20°C:</div>
              <div className="text-emerald-300 font-semibold">
                <ChemFormula formula="6Li + N2 -> 2Li3N" className="text-emerald-300" /> (Нитрид лития)
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs sm:text-sm">
                <FlaskConical className="w-4 h-4 text-slate-700" />
                <span>Историческая справка: Открытие Фосфора (1669 г.)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Алхимик Хенниг Бранд при выпаривании органических субстратов получил вещество, светившееся в&nbsp;темноте. Полученная модификация была названа <strong>Белым фосфором</strong>.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 font-normal">
              Термин происходит от&nbsp;греч. φῶς (свет) и&nbsp;φέρω (несу).
            </div>
          </div>
        </div>

        {/* Industrial Phosphorus Production */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
            <Factory className="w-4 h-4 text-slate-700 shrink-0" />
            <span>Промышленный способ получения Фосфора в электропечах</span>
          </div>

          <p className="text-slate-700 leading-relaxed font-normal">
            В отличие от азота, фосфор в свободном виде в природе не встречается из-за своей высокой реакционной способности. В промышленности элементный фосфор получают восстановлением фосфорита или апатита <span className="whitespace-nowrap">(<ChemFormula formula="Ca3(PO4)2" className="text-slate-900 font-semibold" />)</span> коксом <span className="whitespace-nowrap">(<ChemFormula formula="C" className="text-slate-900 font-semibold" />)</span> в присутствии оксида кремния IV <span className="whitespace-nowrap">(<ChemFormula formula="SiO2" className="text-slate-900 font-semibold" />)</span> в электрических печах при температуре около 1500°C:
          </p>

          <div className="font-mono text-slate-900 font-semibold p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm">
            <ChemFormula formula="Ca3(PO4)2 + 3SiO2 + 5C -t-> 3CaSiO3 + 5CO^ + 2P" className="text-slate-900 font-semibold" />
          </div>
        </div>

        {/* Allotropes Table */}
        <div className="space-y-3">
          <h3 className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-2">
            <Flame className="w-4 h-4 text-slate-700" />
            <span>Сравнение аллотропных модификаций фосфора:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-slate-900 text-sm">Белый фосфор (P₄)</div>
              <p className="text-slate-600 leading-relaxed font-normal">
                Молекулярная решетка <span className="whitespace-nowrap">(<ChemFormula formula="P4" className="text-slate-900 font-semibold" />)</span>. Воскообразный, растворим в&nbsp;<ChemFormula formula="CS2" className="text-slate-900 font-semibold" />. Высокотоксичен. Светится на&nbsp;воздухе и&nbsp;самовоспламеняется при 34–40°C. Хранят под водой.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                <span>Красный фосфор</span>
                <span className="font-mono text-slate-700">(<ChemFormula formula="Pn" className="font-semibold" />)</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-normal">
                Полимерное строение. Порошок красно-бурого цвета. Нетоксичен, не&nbsp;светится. Воспламеняется при нагревании до&nbsp;260°C или при трении.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-slate-900 text-sm">Черный фосфор</div>
              <p className="text-slate-600 leading-relaxed font-normal">
                Атомная слоистая решетка. Обладает металлическим блеском и&nbsp;полупроводниковыми свойствами. Наиболее термодинамически устойчив.
              </p>
            </div>
          </div>
        </div>

        {/* Reaction with alkali */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs sm:text-sm">
          <div className="font-semibold text-slate-900">Диспропорционирование Фосфора в&nbsp;щелочи:</div>
          <div className="font-mono text-slate-900 font-semibold p-2.5 bg-white rounded border border-slate-200">
            <ChemFormula formula="P4 + 3KOH + 3H2O -> PH3^ + 3KH2PO2" className="text-slate-900 font-semibold" /> (Гипофосфит калия)
          </div>
        </div>
      </section>

      {/* SECTION 3: HYDRIDES NH3 vs PH3 & AMMONIUM SALTS COMPLETE TEXTBOOK THEORY */}
      <section id="hydrides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              03
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Водородные соединения и Соли Аммония
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Свойства аммиака, фосфина, свойства солей аммония и Схема 11 термического разложения</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Phosphine Natural Phenomenon Alert */}
        <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm sm:text-base">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Природное явление: Природа «Блуждающих огней»</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            При гниении органических остатков без доступа воздуха выделяется фосфин <ChemFormula formula="PH3" className="text-slate-900 font-semibold" /> с&nbsp;примесью самовоспламеняющегося дифосфина <ChemFormula formula="P2H4" className="text-slate-900 font-semibold" />. На&nbsp;воздухе дифосфин вспыхивает при обычной температуре, поджигая фосфин и&nbsp;образуя блуждающие голубые огни на&nbsp;болотах и&nbsp;заброшенных участках.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
          {/* Ammonia */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Аммиак (NH₃)</h3>
              <span className="text-xs font-mono text-slate-600">Основание</span>
            </div>

            <ul className="space-y-2 text-slate-700 font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Высокая растворимость: 700&nbsp;объемов <ChemFormula formula="NH3" className="text-slate-900 font-semibold" /> на&nbsp;1&nbsp;объем <ChemFormula formula="H2O" className="text-slate-900 font-semibold" />.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Щелочная среда раствора: <ChemFormula formula="NH3 + H2O <-> NH4+ + OH-" className="text-slate-900 font-semibold" />.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Образование комплексов: <ChemFormula formula="CuSO4 + 4NH3 -> [Cu(NH3)4]SO4" className="text-slate-900 font-semibold" />.</span>
              </li>
            </ul>

            <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1.5 font-mono text-xs sm:text-sm">
              <div className="font-semibold text-slate-900 font-sans">Режимы окисления NH₃:</div>
              <div>1. Без катализатора: <ChemFormula formula="4NH3 + 3O2 -> 2N2^ + 6H2O" className="text-slate-900 font-semibold" /></div>
              <div>2. Каталитическое (Pt/Rh): <ChemFormula formula="4NH3 + 5O2 -(Pt/Rh)-> 4NO^ + 6H2O" className="text-slate-900 font-semibold" /></div>
            </div>
          </div>

          {/* Phosphine */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Фосфин (PH₃)</h3>
              <span className="text-xs font-mono text-slate-600">Восстановитель</span>
            </div>

            <ul className="space-y-2 text-slate-700 font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Токсичный газ со&nbsp;специфическим запахом.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Основные свойства в&nbsp;воде практически отсутствуют. Соли фосфония <span className="whitespace-nowrap">(<ChemFormula formula="PH4I" className="text-slate-900 font-semibold" />)</span> разлагаются водой.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                <span>Сильный восстановитель: <ChemFormula formula="PH3 + 8HNO3(конц) -> H3PO4 + 8NO2^ + 4H2O" className="text-slate-900 font-semibold" />.</span>
              </li>
            </ul>

            <div className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1.5 font-mono text-xs sm:text-sm">
              <div className="font-semibold text-slate-900 font-sans">Гидролиз бинарных соединений:</div>
              <div><ChemFormula formula="Mg3N2 + 6H2O -> 3Mg(OH)2v + 2NH3^" className="text-slate-900 font-semibold" /></div>
              <div><ChemFormula formula="Ca3P2 + 6HCl -> 3CaCl2 + 2PH3^" className="text-slate-900 font-semibold" /></div>
            </div>
          </div>
        </div>

        {/* DETAILED TEXTBOOK THEORY: СОЛИ АММОНИЯ */}
        <div className="space-y-4 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-slate-800" />
            <h3 className="text-lg font-bold text-slate-900">
              Соли Аммония: Строение, свойства и реакционная способность
            </h3>
          </div>

          <p className="text-slate-700 leading-relaxed font-normal">
            <strong>Соли аммония</strong> образуются при взаимодействии газообразного аммиака или его водного раствора с кислотами. Галогениды аммония получаются также в реакциях аммиака с газообразными галогеноводородами (например, образование «белого дыма» хлорида аммония при контакте паров <ChemFormula formula="NH3" className="font-semibold text-slate-900" /> и <ChemFormula formula="HCl" className="font-semibold text-slate-900" />).
          </p>

          <p className="text-slate-700 leading-relaxed font-normal">
            Это твердые кристаллические вещества с <em>ионной кристаллической решеткой</em>, в узлах которой находятся сложные катионы аммония <span className="whitespace-nowrap">(<ChemFormula formula="NH4+" className="font-semibold text-slate-900" />)</span> и анионы кислотных остатков. Все соли аммония хорошо растворимы в воде и являются сильными электролитами, полностью диссоциирующими на ионы в водных растворах.
          </p>

          <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs sm:text-sm">
            <h4 className="font-semibold text-slate-900 text-sm">Химические свойства солей аммония:</h4>
            
            <ul className="space-y-2.5 text-slate-700 font-normal">
              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900 shrink-0">• С солями:</span>
                <div>
                  Вступают в реакции обмена, если образуется осадок или газ: 
                  <div className="font-mono mt-1 text-slate-900 font-semibold">
                    <ChemFormula formula="NH4Cl + AgNO3 -> AgClv + NH4NO3" className="text-slate-900 font-semibold" /> (белый творожистый осадок)
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900 shrink-0">• С кислотами:</span>
                <div>
                  Взаимодействуют с вытеснением более слабых или летучих кислот:
                  <div className="font-mono mt-1 text-slate-900 font-semibold">
                    <ChemFormula formula="(NH4)2CO3 + 2HCl -> 2NH4Cl + H2O + CO2^" className="text-slate-900 font-semibold" />
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900 shrink-0">• С основаниями (Качественная реакция):</span>
                <div>
                  Сильные основания вытесняют аммиак из солей аммония при нагревании:
                  <div className="font-mono mt-1 text-slate-900 font-semibold">
                    <ChemFormula formula="NH4Cl + NaOH -t-> NaCl + NH3^ + H2O" className="text-slate-900 font-semibold" />
                  </div>
                  Это <strong>качественная реакция на ион аммония (NH₄⁺)</strong>. Выделяющийся аммиак определяют по специфическому резкому запаху или по синению влажной красной лакмусовой бумажки.
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="font-bold text-slate-900 shrink-0">• Гидролиз в водных растворах:</span>
                <div>
                  В водных растворах соли аммония подвергаются гидролизу по катиону:
                  <div className="font-mono mt-1 text-slate-900 font-semibold">
                    <ChemFormula formula="NH4+ + HOH <-> NH3*H2O + H+" className="text-slate-900 font-semibold" /> (среда слабокислая, pH &lt; 7)
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* AUTHENTIC VECTOR TREE DIAGRAM FOR SCHEME 11 */}
        <AmmoniumDecompositionDiagram />

      </section>

      {/* SECTION 4: NITROGEN & PHOSPHORUS OXIDES */}
      <section id="oxides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              04
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Оксиды Азота и Фосфора
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Классификация оксидов азота и постадийная гидратация P2O5</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Азот образует 5 основных оксидов с различной степенью окисления от +1 до +5. Оксиды <ChemFormula formula="N2O" className="font-semibold text-slate-900" /> и <ChemFormula formula="NO" className="font-semibold text-slate-900" /> являются <em>несолеобразующими</em>. Оксид <ChemFormula formula="NO" className="font-semibold text-slate-900" /> бесцветен, но мгновенно окисляется кислородом воздуха до бурого газа <ChemFormula formula="NO2" className="font-semibold text-slate-900" />. Оксид азота IV <ChemFormula formula="NO2" className="font-semibold text-slate-900" /> является кислотным смешанным ангидридом: при растворении в воде образует смесь азотной <ChemFormula formula="HNO3" className="font-semibold text-slate-900" /> и азотистой <ChemFormula formula="HNO2" className="font-semibold text-slate-900" /> кислот.
        </p>

        {/* Nitrogen Oxides Grid */}
        <div className="space-y-3 text-xs sm:text-sm">
          <h3 className="font-semibold text-slate-900 text-sm">Оксиды Азота (степени окисления от&nbsp;+1 до&nbsp;+5):</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-mono text-xs text-slate-500 font-semibold">С.О. +1</div>
              <div className="font-semibold text-slate-900 text-sm">N₂O</div>
              <p className="text-slate-600 font-normal">Несолеобразующий оксид.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-mono text-xs text-slate-500 font-semibold">С.О. +2</div>
              <div className="font-semibold text-slate-900 text-sm">NO</div>
              <p className="text-slate-600 font-normal">Несолеобразующий. На&nbsp;воздухе буреет: <ChemFormula formula="2NO + O2 -> 2NO2^" className="text-slate-900 font-semibold" /></p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-mono text-xs text-slate-500 font-semibold">С.О. +3</div>
              <div className="font-semibold text-slate-900 text-sm">N₂O₃</div>
              <p className="text-slate-600 font-normal">Кислотный. Ангидрид <ChemFormula formula="HNO2" className="text-slate-900 font-semibold" />.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-mono text-xs text-slate-500 font-semibold">С.О. +4</div>
              <div className="font-semibold text-slate-900 text-sm">NO₂</div>
              <p className="text-slate-600 font-normal">Кислотный. В&nbsp;воде: <ChemFormula formula="2NO2 + H2O -> HNO3 + HNO2" className="text-slate-900 font-semibold" />.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-mono text-xs text-slate-500 font-semibold">С.О. +5</div>
              <div className="font-semibold text-slate-900 text-sm">N₂O₅</div>
              <p className="text-slate-600 font-normal">Кислотный. Ангидрид <ChemFormula formula="HNO3" className="text-slate-900 font-semibold" />.</p>
            </div>
          </div>
        </div>

        {/* P2O5 Hydration */}
        <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3.5 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold text-white text-base">
                Постадийная гидратация Оксида Фосфора (V) — P₂O₅
              </h3>
              <p className="text-slate-300 font-normal">Продукты гидратации в&nbsp;зависимости от&nbsp;температуры</p>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setHydrationTemp('cold')}
                className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                  hydrationTemp === 'cold' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Холодная H₂O
              </button>
              <button
                onClick={() => setHydrationTemp('warm')}
                className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                  hydrationTemp === 'warm' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Теплая H₂O
              </button>
              <button
                onClick={() => setHydrationTemp('hot')}
                className={`px-3 py-1.5 rounded text-xs font-medium transition ${
                  hydrationTemp === 'hot' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                Горячая H₂O
              </button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 font-mono text-sm sm:text-base text-white">
            {hydrationTemp === 'cold' && (
              <div>Холодная вода (0–15°C): <ChemFormula formula="P2O5 + H2O -> 2HPO3" className="text-amber-300 font-semibold" /> (Метафосфорная кислота)</div>
            )}
            {hydrationTemp === 'warm' && (
              <div>Теплая вода (20–50°C): <ChemFormula formula="P2O5 + 2H2O -> H4P2O7" className="text-amber-300 font-semibold" /> (Пирофосфорная кислота)</div>
            )}
            {hydrationTemp === 'hot' && (
              <div>Горячая вода / избыток: <ChemFormula formula="P2O5 + 3H2O -> 2H3PO4" className="text-amber-300 font-semibold" /> (Ортофосфорная кислота)</div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5: NITRIC ACID, NITRITES & MINERAL FERTILIZERS */}
      <section id="acids" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              05
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Азотная кислота, Нитриты и Минеральные Удобрения
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">3-стадийный промышленный синтез HNO3, двойственные ОВР-свойства нитритов и классификация удобрений</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Aqua Regia Academic Note */}
        <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2">
          <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm sm:text-base">
            <TestTube className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Научный факт: Свойства «Царской водки» (Aqua Regia)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            Смесь 1&nbsp;объема концентрированной <ChemFormula formula="HNO3" className="text-slate-900 font-semibold" /> и&nbsp;3&nbsp;объемов концентрированной <ChemFormula formula="HCl" className="text-slate-900 font-semibold" /> способна растворять даже благородные металлы (золото и&nbsp;платину). Сильнейшим окислителем выступает атомарный хлор и&nbsp;нитрозилхлорид: <ChemFormula formula="Au + HNO3 + 4HCl -> H[AuCl4] + NO^ + 2H2O" className="text-slate-900 font-semibold" />.
          </p>
        </div>

        {/* 3-Stage Industrial Synthesis of HNO3 */}
        <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3 text-xs sm:text-sm">
          <h3 className="font-semibold text-white text-base flex items-center gap-2">
            <Factory className="w-4 h-4 text-amber-400" />
            <span>Промышленный 3-стадийный синтез Азотной кислоты:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono">
            <div className="p-3.5 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-xs font-sans font-medium">Стадия 1: Окисление NH₃</div>
              <div className="text-amber-300 font-semibold"><ChemFormula formula="4NH3 + 5O2 -(Pt/Rh)-> 4NO^ + 6H2O" className="text-amber-300" /></div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-xs font-sans font-medium">Стадия 2: Доокисление NO</div>
              <div className="text-amber-300 font-semibold"><ChemFormula formula="2NO + O2 -> 2NO2^" className="text-amber-300" /></div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-800 border border-slate-700 space-y-1">
              <div className="text-slate-400 text-xs font-sans font-medium">Стадия 3: Гидратация с O₂</div>
              <div className="text-amber-300 font-semibold"><ChemFormula formula="4NO2 + O2 + 2H2O -> 4HNO3" className="text-amber-300" /></div>
            </div>
          </div>
        </div>

        {/* CLEAN ACADEMIC REFERENCE MATRIX TABLE */}
        <Hno3MatrixTable />

        {/* DUAL REDOX BEHAVIOR OF NITRITES */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
          <div className="font-semibold text-slate-900 text-sm sm:text-base">
            Двойственная окислительно-восстановительная природа Нитритов (С.О. +3):
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <div className="font-semibold text-slate-900">1. Как Окислитель (с KI в кислой среде):</div>
              <div className="font-mono text-slate-900 font-semibold">
                <ChemFormula formula="2KNO2 + 2KI + 2H2SO4 -> I2 + 2NO^ + 2K2SO4 + 2H2O" className="text-slate-900 font-semibold" />
              </div>
              <p className="text-slate-600 font-normal">Выделяется свободный йод (раствор буреет).</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <div className="font-semibold text-slate-900">2. Как Восстановитель (с KMnO₄ в кислой среде):</div>
              <div className="font-mono text-slate-900 font-semibold">
                <ChemFormula formula="5KNO2 + 2KMnO4 + 3H2SO4 -> 5KNO3 + 2MnSO4 + K2SO4 + 3H2O" className="text-slate-900 font-semibold" />
              </div>
              <p className="text-slate-600 font-normal">Происходит обесцвечивание перманганата калия.</p>
            </div>
          </div>
        </div>

        {/* PHOSPHORUS OXYACIDS BASICITY */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm sm:text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Основность кислородсодержащих кислот Фосфора</span>
          </div>

          <p className="text-slate-700 leading-relaxed font-normal">
            Связи <strong>P-H</strong> не&nbsp;диссоциируют в&nbsp;воде. Диссоциации подвергаются только атомы водорода гидроксильных групп <strong>O-H</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <div className="font-semibold text-slate-900 text-sm">H₃PO₂ (H[PH₂O₂]) — Одноосновная</div>
              <p className="text-slate-600 font-normal">
                Соль <ChemFormula formula="NaH2PO2" className="text-slate-900 font-semibold" /> (гипофосфит натрия) — <strong>средняя соль</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <div className="font-semibold text-slate-900 text-sm">H₃PO₃ (H₂[PHO₃]) — Двухосновная</div>
              <p className="text-slate-600 font-normal">
                Соль <ChemFormula formula="Na2HPO3" className="text-slate-900 font-semibold" /> (фосфит натрия) — <strong>средняя соль</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <div className="font-semibold text-slate-900 text-sm">H₃PO₄ — Трехосновная</div>
              <p className="text-slate-600 font-normal">
                Образует соли: <ChemFormula formula="NaH2PO4" className="text-slate-900 font-semibold" />, <ChemFormula formula="Na2HPO4" className="text-slate-900 font-semibold" />, <ChemFormula formula="Na3PO4" className="text-slate-900 font-semibold" />.
              </p>
            </div>
          </div>
        </div>

        {/* MINERAL FERTILIZERS (DARK BLOCK) */}
        <div className="p-5 sm:p-6 rounded-xl bg-slate-900 text-white space-y-3.5 text-xs sm:text-sm border border-slate-800">
          <div className="font-semibold text-white text-sm sm:text-base flex items-center justify-between border-b border-slate-800 pb-2">
            <span>Важнейшие азотные и фосфорные удобрения:</span>
            <span className="text-xs font-mono text-slate-400">Минеральные туки</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
              <div className="font-semibold text-white">Простой суперфосфат</div>
              <p className="text-slate-300 text-xs font-normal">Смесь <ChemFormula formula="Ca(H2PO4)2" className="text-amber-300 font-semibold" /> и&nbsp;<ChemFormula formula="2CaSO4" className="text-amber-300 font-semibold" />.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
              <div className="font-semibold text-white">Двойной суперфосфат</div>
              <p className="text-slate-300 text-xs font-normal">Чистый <ChemFormula formula="Ca(H2PO4)2" className="text-amber-300 font-semibold" /> (без балласта <ChemFormula formula="CaSO4" className="text-slate-400 font-normal" />).</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
              <div className="font-semibold text-white">Аммофос</div>
              <p className="text-slate-300 text-xs font-normal">Смесь <ChemFormula formula="NH4H2PO4" className="text-amber-300 font-semibold" /> и&nbsp;<ChemFormula formula="(NH4)2HPO4" className="text-amber-300 font-semibold" />.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
              <div className="font-semibold text-white">Нитрофоска</div>
              <p className="text-slate-300 text-xs font-normal">Комплексное удобрение из&nbsp;<ChemFormula formula="NH4NO3" className="text-amber-300 font-semibold" />, <ChemFormula formula="(NH4)2HPO4" className="text-amber-300 font-semibold" /> и&nbsp;<ChemFormula formula="KCl" className="text-amber-300 font-semibold" />.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: QUALITATIVE REACTIONS OF NITROGEN & PHOSPHORUS */}
      <section id="qualitative" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              06
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Качественные реакции Азота и Фосфора
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Аналитические методы обнаружения ионов NH₄⁺, NO₃⁻ и PO₄³⁻ в растворах</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Extended Theory Text on Qualitative Analysis */}
        <div className="space-y-3 text-slate-700 leading-relaxed font-normal">
          <p>
            Качественный химический анализ соединений азота и фосфора основан на появлении характерных аналитических признаков: выделении летучих газов со специфическим запахом, изменении окраски индикаторов, окрашивании растворов и выпадении нерастворимых осадков строго определенного цвета.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
          {/* Ammonium Cation */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2 border-b border-slate-200 pb-2">
                <Filter className="w-4 h-4 text-slate-700" />
                <span>Катион Аммония (NH₄⁺)</span>
              </div>
              <div className="text-slate-600 font-normal">
                <strong>Качественный реактив:</strong> Водный раствор щелочи (<ChemFormula formula="OH-" className="font-semibold text-slate-900" />) при нагревании.
              </div>
              <div className="font-mono text-slate-900 font-semibold p-3 bg-white rounded-lg border border-slate-200">
                <ChemFormula formula="NH4+ + OH- -t-> NH3^ + H2O" className="text-slate-900 font-semibold" />
              </div>
            </div>
            <p className="text-slate-600 font-normal leading-relaxed pt-1">
              <strong>Аналитический признак:</strong> Выделение аммиака <ChemFormula formula="NH3" className="font-semibold text-slate-900" /> с резким специфическим запахом. Поднесенная к пробирке влажная красная лакмусовая или фенолфталеиновая бумажка окрашивается соответственно в <em>синий</em> или <em>малиновый</em> цвет.
            </p>
          </div>

          {/* Nitrate Anion */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2 border-b border-slate-200 pb-2">
                <Filter className="w-4 h-4 text-slate-700" />
                <span>Нитрат-анион (NO₃⁻)</span>
              </div>
              <div className="text-slate-600 font-normal">
                <strong>Качественный реактив:</strong> Медь (<ChemFormula formula="Cu" className="font-semibold text-slate-900" />) в среде концентрированной серной кислоты (<ChemFormula formula="H2SO4(конц)" className="font-semibold text-slate-900" />) при нагревании.
              </div>
              <div className="font-mono text-slate-900 font-semibold p-3 bg-white rounded-lg border border-slate-200">
                <ChemFormula formula="3Cu + 8H+ + 2NO3- -t-> 3Cu(2+) + 2NO^ + 4H2O" className="text-slate-900 font-semibold" />
              </div>
            </div>
            <p className="text-slate-600 font-normal leading-relaxed pt-1">
              <strong>Аналитический признак:</strong> Раствор приобретает интенсивный голубой/синий цвет из-за образования ионов меди II <ChemFormula formula="Cu2+" className="font-semibold text-slate-900" />, и выделяется бурый газ оксид азота IV <span className="whitespace-nowrap">(<ChemFormula formula="NO2^" className="font-semibold text-slate-900" />)</span> — «лисий хвост».
            </p>
          </div>

          {/* Phosphate Anion */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="font-semibold text-slate-900 text-sm sm:text-base flex items-center gap-2 border-b border-slate-200 pb-2">
                <Filter className="w-4 h-4 text-slate-700" />
                <span>Фосфат-анион (PO₄³⁻)</span>
              </div>
              <div className="text-slate-600 font-normal">
                <strong>Качественный реактив:</strong> Растворимая соль серебра — нитрат серебра I (<ChemFormula formula="AgNO3" className="font-semibold text-slate-900" />).
              </div>
              <div className="font-mono text-slate-900 font-semibold p-3 bg-white rounded-lg border border-slate-200">
                <ChemFormula formula="3Ag+ + PO4(3-) -> Ag3PO4v" className="text-slate-900 font-semibold" />
              </div>
            </div>
            <p className="text-slate-600 font-normal leading-relaxed pt-1">
              <strong>Аналитический признак:</strong> Выпадение характерного ярко-желтого осадка ортофосфата серебра I <span className="whitespace-nowrap">(<ChemFormula formula="Ag3PO4v" className="font-semibold text-slate-900" />)</span>, растворимого в разбавленной азотной кислоте <ChemFormula formula="HNO3" className="font-semibold text-slate-900" /> и растворе аммиака.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: 3D MOLECULE VIEWER */}
      <section id="molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-bold text-sm font-mono">
              07
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. 3D-Модели соединений темы: Азот и Фосфор
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Пространственное строение молекул NH₃, PH₃, HNO₃, H₃PO₄, P₄</p>
            </div>
          </div>

          <button
            onClick={scrollToNav}
            title="К содержанию"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <MoleculeViewer3D 
          moleculeIds={['nh3', 'ph3', 'hno3', 'h3po4', 'p4']} 
          initialSelectedId="nh3" 
        />
      </section>

      {/* BOTTOM PRACTICE LINK BUTTON */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Закрепите теорию на практике
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-xl">
            Перейти к тренажерам и практикуму по химии Азота и Фосфора.
          </p>
        </div>

        <button
          onClick={() => openStudyBlock('elements-chemistry', 'elem-nonme-np', 'practice')}
          className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm transition shrink-0 flex items-center gap-2"
        >
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Перейти к практикуму</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
