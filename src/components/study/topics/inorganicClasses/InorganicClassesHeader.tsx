import React from 'react';
import {
  Zap, ArrowRight, Lightbulb, AlertTriangle,
  FlaskConical, Atom, TestTube, Orbit
} from 'lucide-react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TopicNavGrid } from '../../TopicNavGrid';
import { TopicQuickNavTags, type QuickNavTag } from '../../TopicQuickNavTags';
import { useRouter } from '../../../../routes/router';

interface HeaderProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const InorganicClassesHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-oxides', label: 'Оксиды', icon: Atom },
    { targetId: 'section-acids', label: 'Кислоты', icon: TestTube },
    { targetId: 'section-genetic-link', label: 'Генетическая связь', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('general-chemistry', 'gen-inorg-classes', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ОХ-04
          </span>
          <span>•</span>
          <span>Общая химия</span>
          <span>•</span>
          <span>Раздел 4 • Классы неорганических веществ</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Основные классы неорганических соединений</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Оксиды, основания, кислоты, амфотерные гидроксиды и соли: классификация, химические свойства, способы получения и генетическая связь между классами.
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
            Пять основных классов неорганических соединений — оксиды, основания, кислоты, амфотерные гидроксиды и соли — связаны генетическими рядами: зная свойства каждого класса, можно построить любую цепочку превращений.
          </p>
        </div>
      </div>

      {/* 3. Important Exam Pitfalls Alert Banner */}
      <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base border-b border-slate-200/60 pb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Важные экзаменационные «подводные камни» и тонкости:</span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">1</span>
            <div>
              <strong>Несолеобразующие оксиды</strong>: <ChemFormula formula="NO" />, <ChemFormula formula="N2O" />, <ChemFormula formula="CO" /> и <ChemFormula formula="SiO" /> не реагируют ни с кислотами, ни со щелочами и солей не образуют.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong>Две схемы растворения амфотерного гидроксида в щёлочи</strong>: в растворе образуется комплексная соль (<ChemFormula formula="Na[Al(OH)4]" />), при сплавлении — средняя соль (<ChemFormula formula="NaAlO2" />). Не путать!
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong>Взаимодействие оксидов с водой</strong>: с водой реагируют только оксиды щелочных и щёлочноземельных металлов (основные) и кислотные оксиды; большинство основных оксидов (например, <ChemFormula formula="CuO" />, <ChemFormula formula="Fe2O3" />) с водой не взаимодействуют.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong>Взаимные превращения кислых и средних солей</strong>: кислые соли при действии щёлочи превращаются в средние, а средние соли при избытке кислотного оксида — в кислые: <ChemFormula formula="CaCO3 + CO2 + H2O -> Ca(HCO3)2" />.
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
