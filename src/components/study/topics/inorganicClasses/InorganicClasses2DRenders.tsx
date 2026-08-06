import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import SvgCurlyArrow from '../../../scientific/svg/SvgCurlyArrow';

export interface InorganicClasses2DProps {
  type: 'oxide-classification' | 'salt-classification' | 'amphoteric-duality' | 'genetic-link';
  className?: string;
}

// ═══════════════════════════════════════
// Схема 1: Классификация оксидов (tree-диаграмма: 4 ветви)
// Лейблы категорий — в SVG-колонке (justify-evenly), описания — справа.
// ═══════════════════════════════════════

/** 4 стрелки под равномерно распределённые лейблы (justify-evenly) */
const OXIDE_ARROWS = [
  { startY: 0.50, endY: 0.125 },
  { startY: 0.50, endY: 0.375 },
  { startY: 0.50, endY: 0.625 },
  { startY: 0.50, endY: 0.875 },
];

const OxideClassification: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          Классификация оксидов по химическим свойствам
        </h4>
        <span className="text-xs text-slate-500">Классификация по химическим свойствам</span>
      </div>

      <div className="overflow-x-auto py-2">
        <div className="min-w-[900px] w-full flex items-stretch gap-1">

          {/* Корень с голубой окантовкой */}
          <div className="flex items-center">
            <div className="w-[130px] p-4 rounded-xl bg-white border-2 border-sky-400/80 shadow-xs text-center shrink-0">
              <span className="font-bold text-slate-900 text-sm sm:text-base block">ОКСИДЫ</span>
              <span className="text-xs text-slate-500 mt-1 block">по хим. свойствам</span>
            </div>
          </div>

          {/* SVG-колонка со стрелками от корня к 4 категориям */}
          <div className="relative w-[140px] shrink-0 self-stretch">
            <SvgCurlyArrow
              width={140}
              height={380}
              arrows={OXIDE_ARROWS}
              strokeWidth={2}
              markerPrefix="ox-curly"
              className="w-full h-full"
            />
          </div>

          {/* Колонки категорий и описаний */}
          <div className="flex-1 flex flex-col justify-between gap-3.5 min-w-0">
            {/* 1. Основные */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-blue-200 text-blue-800 bg-blue-50/80 px-3.5 py-3 shadow-2xs">
                Основные (Me⁺¹, Me⁺²)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">+ кислота → соль + H₂O</div>
                <div className="text-slate-700">
                  <ChemFormula formula="Na2O" className="font-semibold text-slate-900" />, <ChemFormula formula="CaO" className="font-semibold text-slate-900" />, <ChemFormula formula="CuO" className="font-semibold text-slate-900" />, <ChemFormula formula="Fe2O3" className="font-semibold text-slate-900" />
                </div>
                <div className="pt-0.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50/80 border border-blue-100 text-blue-700 text-[11px] font-medium">
                    С водой — только оксиды щелочных и щёлочноземельных Me
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Кислотные */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-red-200 text-red-800 bg-red-50/80 px-3.5 py-3 shadow-2xs">
                Кислотные (неMe; Me⁺⁵–⁺⁷)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">+ щёлочь → соль + H₂O &nbsp;|&nbsp; + H₂O → кислота</div>
                <div className="text-slate-700">
                  <ChemFormula formula="CO2" className="font-semibold text-slate-900" />, <ChemFormula formula="SO3" className="font-semibold text-slate-900" />, <ChemFormula formula="P2O5" className="font-semibold text-slate-900" />, <ChemFormula formula="SiO2" className="font-semibold text-slate-900" />, <ChemFormula formula="CrO3" className="font-semibold text-slate-900" />
                </div>
                <div className="pt-0.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-50/80 border border-red-100 text-red-700 text-[11px] font-medium">
                    SiO₂ с водой не реагирует; CrO₃ — кислотный оксид металла
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Амфотерные */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-violet-200 text-violet-800 bg-violet-50/80 px-3.5 py-3 shadow-2xs">
                Амфотерные (Zn, Al, Cr³⁺, Be)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">+ кислота → соль &nbsp;|&nbsp; + щёлочь → соль</div>
                <div className="text-slate-700">
                  <ChemFormula formula="ZnO" className="font-semibold text-slate-900" />, <ChemFormula formula="Al2O3" className="font-semibold text-slate-900" />, <ChemFormula formula="Cr2O3" className="font-semibold text-slate-900" />, <ChemFormula formula="BeO" className="font-semibold text-slate-900" />
                </div>
                <div className="pt-0.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-violet-50/80 border border-violet-100 text-violet-700 text-[11px] font-medium">
                    Реагируют и с кислотами, и со щелочами (при сплавлении)
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Несолеобразующие */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-slate-300 text-slate-700 bg-slate-100/80 px-3.5 py-3 shadow-2xs">
                Несолеобразующие
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">Не реагируют ни с кислотами, ни со щелочами</div>
                <div className="text-slate-700">
                  <ChemFormula formula="CO" className="font-semibold text-slate-900" />, <ChemFormula formula="NO" className="font-semibold text-slate-900" />, <ChemFormula formula="N2O" className="font-semibold text-slate-900" />, <ChemFormula formula="SiO" className="font-semibold text-slate-900" />
                </div>
                <div className="pt-0.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-medium">
                    В цепочках превращений — «тупиковые» ветви
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// Схема 2: Классификация солей (tree-диаграмма: 5 ветвей)
// ═══════════════════════════════════════

/** 5 стрелок под 5 выровненных строк */
const SALT_ARROWS = [
  { startY: 0.50, endY: 0.10 },
  { startY: 0.50, endY: 0.30 },
  { startY: 0.50, endY: 0.50 },
  { startY: 0.50, endY: 0.70 },
  { startY: 0.50, endY: 0.90 },
];

const SaltClassification: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          Классификация солей по составу
        </h4>
        <span className="text-xs text-slate-500">Классификация солей по составу</span>
      </div>

      <div className="overflow-x-auto py-2">
        <div className="min-w-[900px] w-full flex items-stretch gap-1">

          {/* Корень с изумрудной окантовкой */}
          <div className="flex items-center">
            <div className="w-[130px] p-4 rounded-xl bg-white border-2 border-emerald-400/80 shadow-xs text-center shrink-0">
              <span className="font-bold text-slate-900 text-sm sm:text-base block">СОЛИ</span>
              <span className="text-xs text-slate-500 mt-1 block">по составу</span>
            </div>
          </div>

          {/* SVG-колонка со стрелками от корня к 5 категориям */}
          <div className="relative w-[140px] shrink-0 self-stretch">
            <SvgCurlyArrow
              width={140}
              height={460}
              arrows={SALT_ARROWS}
              strokeWidth={2}
              markerPrefix="salt-curly"
              className="w-full h-full"
            />
          </div>

          {/* Колонки категорий и описаний */}
          <div className="flex-1 flex flex-col justify-between gap-3.5 min-w-0">
            {/* 1. Средние */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50/80 px-3.5 py-3 shadow-2xs">
                Средние (нормальные)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">Продукт полного замещения H⁺ на металл</div>
                <div className="text-slate-700">
                  <ChemFormula formula="NaCl" className="font-semibold text-slate-900" />, <ChemFormula formula="K2SO4" className="font-semibold text-slate-900" />, <ChemFormula formula="Ca3(PO4)2" className="font-semibold text-slate-900" />, <ChemFormula formula="Fe(NO3)3" className="font-semibold text-slate-900" />
                </div>
              </div>
            </div>

            {/* 2. Кислые */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-amber-200 text-amber-800 bg-amber-50/80 px-3.5 py-3 shadow-2xs">
                Кислые (гидро-)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">Неполное замещение H⁺ (только от многоосновных кислот)</div>
                <div className="text-slate-700">
                  <ChemFormula formula="NaHCO3" className="font-semibold text-slate-900" /> (питьевая сода), <ChemFormula formula="NaHSO4" className="font-semibold text-slate-900" />, <ChemFormula formula="Ca(H2PO4)2" className="font-semibold text-slate-900" />
                </div>
                <div className="pt-0.5">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50/80 border border-amber-100 text-amber-800 text-[11px] font-medium">
                    Средняя соль + CO₂ + H₂O → кислая соль (пример: CaCO₃ → Ca(HCO₃)₂)
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Основные */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-orange-200 text-orange-800 bg-orange-50/80 px-3.5 py-3 shadow-2xs">
                Основные (гидроксо-)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">Содержат гидроксогруппы OH⁻ (от многокислотных оснований)</div>
                <div className="text-slate-700">
                  <ChemFormula formula="(CuOH)2CO3" className="font-semibold text-slate-900" /> (малахит), <ChemFormula formula="MgOHCl" className="font-semibold text-slate-900" />
                </div>
              </div>
            </div>

            {/* 4. Двойные */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-sky-200 text-sky-800 bg-sky-50/80 px-3.5 py-3 shadow-2xs">
                Двойные
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">Два разных металла + один кислотный остаток</div>
                <div className="text-slate-700">
                  <ChemFormula formula="KAl(SO4)2" className="font-semibold text-slate-900" /> (алюмокалиевые квасцы), <ChemFormula formula="KNaCO3" className="font-semibold text-slate-900" />
                </div>
              </div>
            </div>

            {/* 5. Комплексные */}
            <div className="flex items-center gap-2">
              <div className="w-[210px] shrink-0 text-center text-xs font-semibold rounded-xl border border-purple-200 text-purple-800 bg-purple-50/80 px-3.5 py-3 shadow-2xs">
                Комплексные
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1 text-xs sm:text-sm">
                <div className="font-semibold text-slate-900">Содержат комплексный ион [⋯]</div>
                <div className="text-slate-700">
                  <ChemFormula formula="Na[Al(OH)4]" className="font-semibold text-slate-900" />, <ChemFormula formula="K3[Fe(CN)6]" className="font-semibold text-slate-900" />, <ChemFormula formula="[Ag(NH3)2]Cl" className="font-semibold text-slate-900" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// Схема 3: Две схемы амфотерности (tree-диаграмма: 2 ветви)
// ═══════════════════════════════════════

const AmphotericDuality: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          Две схемы растворения амфотерного гидроксида в щёлочи
        </h4>
        <span className="text-xs text-slate-500">Реакции в водном растворе и при сплавлении</span>
      </div>

      <div className="overflow-x-auto py-2">
        <div className="min-w-[850px] w-full flex items-stretch gap-1 text-slate-900">

          {/* Корень */}
          <div className="flex items-center">
            <div className="w-[130px] p-4 rounded-xl bg-white border-2 border-violet-400/80 shadow-xs text-center shrink-0">
              <ChemFormula formula="Al(OH)3" className="font-bold text-base block text-slate-900" />
              <span className="text-[11px] text-slate-500 block mt-1">амфотерный гидроксид</span>
            </div>
          </div>

          {/* SVG 2 ветви */}
          <div className="relative w-[140px] shrink-0 self-stretch">
            <SvgCurlyArrow
              width={140}
              height={220}
              arrows={[
                { startY: 0.50, endY: 0.25 },
                { startY: 0.50, endY: 0.75 },
              ]}
              strokeWidth={2}
              markerPrefix="amph-curly"
              className="w-full h-full"
            />
          </div>

          {/* Правая часть с карточками реакций */}
          <div className="flex-1 flex flex-col justify-between gap-4 min-w-0">
            {/* Раствор */}
            <div className="flex items-center gap-2">
              <div className="w-[220px] shrink-0 text-center text-xs font-semibold rounded-xl border border-violet-200 text-violet-800 bg-violet-50/80 px-3.5 py-3 shadow-2xs">
                + NaOH (раствор, t ≈ 20 °C)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-violet-800">
                  Комплексная соль — тетрагидроксоалюминат натрия
                </div>
                <div className="space-y-1">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <ChemFormula formula="Al(OH)3 + NaOH -> Na[Al(OH)4]" className="font-semibold text-slate-900" />
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <ChemFormula formula="Zn(OH)2 + 2NaOH -> Na2[Zn(OH)4]" className="font-semibold text-slate-900" />
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 pt-0.5">Аналогично для Cr(OH)₃, Be(OH)₂</div>
              </div>
            </div>

            {/* Сплавление */}
            <div className="flex items-center gap-2">
              <div className="w-[220px] shrink-0 text-center text-xs font-semibold rounded-xl border border-red-200 text-red-800 bg-red-50/80 px-3.5 py-3 shadow-2xs">
                + NaOH (сплавление, t &gt; 300 °C)
              </div>
              <svg className="w-5 h-5 text-slate-300 shrink-0 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="flex-1 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs space-y-1.5 text-xs sm:text-sm">
                <div className="font-semibold text-red-800">
                  Средняя соль — метаалюминат (или цинкат) + H₂O↑
                </div>
                <div className="space-y-1">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <ChemFormula math="\mathrm{Al(OH)_3} + \mathrm{NaOH} \xrightarrow{\text{сплавление}} \mathrm{NaAlO_2} + 2\mathrm{H_2O}" className="font-semibold text-slate-900" />
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
                    <ChemFormula math="\mathrm{Zn(OH)_2} + 2\mathrm{NaOH} \xrightarrow{\text{сплавление}} \mathrm{Na_2ZnO_2} + 2\mathrm{H_2O}" className="font-semibold text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// Схема 4: Генетическая связь (два горизонтальных ряда)
// ═══════════════════════════════════════

const GeneticLink: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
          Генетическая связь между классами неорганических соединений
        </h4>
        <span className="text-xs text-slate-500">Ряды металла и неметалла</span>
      </div>

      <div className="overflow-x-auto py-2 space-y-6">
        {/* Ряд металла */}
        <div className="min-w-[720px] flex items-center gap-3 text-slate-900">
          <div className="w-24 text-right pr-2 shrink-0 font-bold text-xs text-slate-600">
            РЯД МЕТАЛЛА
          </div>

          <div className="flex items-center gap-0 flex-1">
            <div className="px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-2xs text-center min-w-[90px]">
              <div className="font-bold text-sm">Металл</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">Ca</div>
            </div>
            <div className="text-slate-400 text-lg px-2">→</div>
            <div className="px-3 py-2 bg-white rounded-lg border border-blue-200 shadow-2xs text-center min-w-[110px]">
              <div className="font-bold text-sm text-blue-700">Основный оксид</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">CaO</div>
            </div>
            <div className="text-slate-400 text-lg px-2">→</div>
            <div className="px-3 py-2 bg-white rounded-lg border border-blue-200 shadow-2xs text-center min-w-[100px]">
              <div className="font-bold text-sm text-blue-700">Основание</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">Ca(OH)₂</div>
            </div>
            <div className="text-slate-400 text-lg px-2">→</div>
            <div className="px-3 py-2 bg-white rounded-lg border border-emerald-200 shadow-2xs text-center min-w-[90px]">
              <div className="font-bold text-sm text-emerald-700">Соль</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">CaCl₂</div>
            </div>
          </div>
        </div>

        {/* Ряд неметалла */}
        <div className="min-w-[720px] flex items-center gap-3 text-slate-900">
          <div className="w-24 text-right pr-2 shrink-0 font-bold text-xs text-slate-600">
            РЯД НЕМЕТАЛЛА
          </div>

          <div className="flex items-center gap-0 flex-1">
            <div className="px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-2xs text-center min-w-[90px]">
              <div className="font-bold text-sm">Неметалл</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">S</div>
            </div>
            <div className="text-slate-400 text-lg px-2">→</div>
            <div className="px-3 py-2 bg-white rounded-lg border border-red-200 shadow-2xs text-center min-w-[110px]">
              <div className="font-bold text-sm text-red-700">Кислотный оксид</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">SO₃</div>
            </div>
            <div className="text-slate-400 text-lg px-2">→</div>
            <div className="px-3 py-2 bg-white rounded-lg border border-red-200 shadow-2xs text-center min-w-[100px]">
              <div className="font-bold text-sm text-red-700">Кислота</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">H₂SO₄</div>
            </div>
            <div className="text-slate-400 text-lg px-2">→</div>
            <div className="px-3 py-2 bg-white rounded-lg border border-emerald-200 shadow-2xs text-center min-w-[90px]">
              <div className="font-bold text-sm text-emerald-700">Соль</div>
              <div className="text-xs text-slate-500 mt-0.5 font-mono">Na₂SO₄</div>
            </div>
          </div>
        </div>

        {/* Связующее примечание */}
        <div className="min-w-[720px] flex items-start gap-3 text-xs text-slate-500 pl-28">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
            <span className="text-violet-600 font-bold">↕</span>
            <span>Амфотерные соединения (ZnO, Al₂O₃, Al(OH)₃) связывают ряды металла и неметалла в единую систему превращений.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════
// Диспетчер рендера
// ═══════════════════════════════════════

export const InorganicClasses2DRenders: React.FC<InorganicClasses2DProps> = ({ type }) => {
  switch (type) {
    case 'oxide-classification':
      return <OxideClassification />;
    case 'salt-classification':
      return <SaltClassification />;
    case 'amphoteric-duality':
      return <AmphotericDuality />;
    case 'genetic-link':
      return <GeneticLink />;
    default:
      return null;
  }
};
