import React from 'react';
import { 
  Zap, ArrowRight, Lightbulb, AlertTriangle, 
  FlaskConical, Atom, TestTube, Orbit 
} from 'lucide-react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { TopicNavGrid } from '../../TopicNavGrid';
import { TopicQuickNavTags, type QuickNavTag } from '../../TopicQuickNavTags';
import { useRouter } from '../../../../routes/router';

interface HeaderProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const CarbonSiliconHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'allotropes', label: 'Аллотропия C и Si', icon: Atom },
    { targetId: 'carbon-chem', label: 'Восстановители C и CO', icon: TestTube },
    { targetId: 'molecules-3d', label: '3D-Модели веществ', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('elements-chemistry', 'elem-nonme-csi', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      
      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ХЭ-08
          </span>
          <span>•</span>
          <span>Химия элементов</span>
          <span>•</span>
          <span>IV-A Группа (Подгруппа углерода)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Химия углерода (C) и кремния (Si)</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Аллотропия (алмаз, графит, фуллерены, аморфный кремний), оксиды CO, CO₂, SiO₂, силикаты и силикатная промышленность. Подробный академический учебный конспект с разбором специфических реакций, качественных тестов и 3D-моделей веществ.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
          <TopicQuickNavTags tags={quickNavTags} />

          <button
            onClick={handleGoToPractice}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Перейти к практикуму темы</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Key Idea Lightbulb Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-start gap-3.5 shadow-xs">
        <div className="p-2.5 rounded-lg bg-slate-200 text-slate-800 shrink-0">
          <Lightbulb className="w-5 h-5 text-slate-700" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <h3 className="font-bold text-slate-900">
            Ключевая идея темы:
          </h3>
          <p className="text-slate-600 leading-relaxed font-normal">
            Углерод и кремний — элементы IV-A группы с 4 валентными электронами (<ChemFormula formula="ns^2 np^2" className="font-semibold text-slate-900" />). Углерод образует чрезвычайно прочные ковалентные связи C-C, создающие разнообразие аллотропных форм и органических молекул. Кремний образует прочные связи Si-O (энергия связи 466 кДж/моль), поэтому в природе существует исключительно в виде диоксида <ChemFormula formula="SiO2" className="font-semibold text-slate-900" /> (кварц, песок) и силикатов, составляющих более 90% массы земной коры.
          </p>
        </div>
      </div>

      {/* 3. Important Exam Pitfalls Alert Banner */}
      <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base border-b border-slate-200/60 pb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Важные экзаменационные «подводные камни»:</span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">1</span>
            <div>
              <strong>Растворение кремния в щелочи</strong>: В отличие от углерода, который не реагирует со щелочами, кремний легко растворяется в водных растворах щелочей с выделением водорода: <ChemFormula formula="Si + 2NaOH + H2O -> Na2SiO3 + 2H2^" className="font-bold text-slate-900" />.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong>Уникальность плавиковой кислоты для <ChemFormula formula="SiO2" /></strong>: Диоксид кремния <ChemFormula formula="SiO2" /> имеет атомную кристаллическую решетку и категорически НЕ реагирует ни с какими кислотами (<ChemFormula formula="HCl" />, <ChemFormula formula="HNO3" />, <ChemFormula formula="H2SO4" />), за исключением <ChemFormula formula="HF" />: <ChemFormula formula="SiO2 + 4HF -> SiF4^ + 2H2O" className="font-bold text-slate-900" /> (травление стекла).
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong><TermTooltip term="Совместный (взаимный) гидролиз солей" definition="Взаимно усиливающийся необратимый гидролиз солей слабых многоосновных кислот и слабых оснований (напр. Al³⁺ и CO₃²⁻) с выпадением осадка гидроксида и выделением газа CO₂." /></strong>: При смешивании растворов солей <ChemFormula formula="Al(3+)" />, <ChemFormula formula="Cr(3+)" />, <ChemFormula formula="Fe(3+)" /> с карбонатами или силикатами происходит ВЗАИМНЫЙ НЕОБРАТИМЫЙ ГИДРОЛИЗ с выпадением гидратированного оксида/гидроксида и выделением <ChemFormula formula="CO2^" /> или <ChemFormula formula="H2SiO3v" />: <ChemFormula formula="2AlCl3 + 3Na2CO3 + 3H2O -> 2Al(OH)3v + 3CO2^ + 6NaCl" className="font-bold text-slate-900" />.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong>Разложение карбонатов и гидрокарбонатов при нагревании</strong>: Соли <ChemFormula formula="Na2CO3" /> и <ChemFormula formula="K2CO3" /> устойчивы к нагреванию и плавятся без разложения! Однако <ChemFormula formula="Li2CO3" />, карбонаты щелочноземельных металлов (<ChemFormula formula="CaCO3" />, <ChemFormula formula="MgCO3" />) и ВСЕ гидрокарбонаты (<ChemFormula formula="NaHCO3" />) разлагаются при нагревании: <ChemFormula formula="2NaHCO3 -t-> Na2CO3 + CO2^ + H2O" className="font-bold text-slate-900" />.
            </div>
          </li>
        </ul>
      </div>

      {/* 4. Table of Contents Navigation Grid */}
      <TopicNavGrid
        navItems={navItems}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

    </div>
  );
};
