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

export const SolutionsDissociationHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-dissociation', label: 'Диссоциация', icon: Atom },
    { targetId: 'section-rio', label: 'Реакции ионного обмена', icon: TestTube },
    { targetId: 'section-hydrolysis', label: 'Гидролиз солей', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('general-chemistry', 'gen-solutions-rio', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ОХ-08
          </span>
          <span>•</span>
          <span>Общая химия</span>
          <span>•</span>
          <span>Раздел 8 • Растворы и электролиты</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Растворы. Электролитическая диссоциация</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Процесс растворения и растворимость, количественные характеристики состава растворов, теория электролитической диссоциации, водородный показатель, реакции ионного обмена, гидролиз солей и дисперсные системы.
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
            Свойства растворов определяют ионы: теория электролитической диссоциации объясняет электропроводность, среду растворов, реакции ионного обмена и гидролиз солей.
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
              <strong>Условия необратимости реакций ионного обмена</strong>: они протекают до конца только при выполнении хотя бы одного условия — выпадение осадка (<ChemFormula formula="Ba2+ + SO4(2-) -> BaSO4v" />), выделение газа (<ChemFormula formula="2H+ + CO3(2-) -> H2O + CO2^" />) или образование слабого электролита, чаще всего воды (<ChemFormula formula="H+ + OH- -> H2O" />). Иначе реакция обратима.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong>Запись сокращённого ионного уравнения</strong>: слабые электролиты, осадки и газы записывают в молекулярной форме, а сильные электролиты — в виде ионов.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong>Соли сильных кислот и сильных оснований не гидролизуются</strong>: например <ChemFormula formula="NaCl" /> и <ChemFormula formula="KNO3" /> — среда их растворов нейтральная (<ChemFormula math="pH = 7" />).
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong>Гидролиз солей слабых кислот и слабых оснований часто необратим</strong>: такие соли (например, сульфид алюминия <ChemFormula formula="Al2S3" />) нельзя получить реакцией обмена в водном растворе — они полностью гидролизуются: <ChemFormula formula="Al2S3 + 6H2O -> 2Al(OH)3v + 3H2S^" />.
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
