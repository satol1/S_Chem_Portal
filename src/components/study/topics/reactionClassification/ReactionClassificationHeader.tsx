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

export const ReactionClassificationHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-by-number', label: 'Типы реакций', icon: Atom },
    { targetId: 'section-thermal-effects', label: 'Тепловой эффект', icon: TestTube },
    { targetId: 'section-molecules-3d', label: '3D-модели', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('general-chemistry', 'gen-reaction-classification', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ОХ-05
          </span>
          <span>•</span>
          <span>Общая химия</span>
          <span>•</span>
          <span>Раздел 5 • Классификация реакций</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Классификация химических реакций</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Исходные вещества и продукты реакции, условия протекания и классификационные признаки: по числу и составу реагентов и продуктов, агрегатному состоянию, типу переносимых частиц, обратимости и тепловому эффекту.
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
            Одна и та же реакция может характеризоваться сразу несколькими классификационными признаками: например, синтез аммиака — реакция соединения, гомогенная, обратимая, экзотермическая и каталитическая.
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
              <strong>Реакции обмена — не окислительно-восстановительные</strong>: они идут без изменения степеней окисления элементов и НЕ относятся к ОВР, например <ChemFormula formula="HCl + NaOH -> NaCl + H2O" />.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong>Диспропорционирование</strong>: в таких реакциях один и тот же элемент выступает одновременно и окислителем, и восстановителем — например, хлор в щёлочи: <ChemFormula formula="Cl2 + 2NaOH -> NaCl + NaClO + H2O" />.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong>Тепловой эффект и скорость независимы</strong>: признаки «экзотермическая/эндотермическая» и «быстрая/медленная» не связаны между собой — реакция азота с кислородом <ChemFormula formula="N2 + O2 -t-> 2NO" /> эндотермическая и идёт только при очень высокой температуре.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong>Обратимость зависит от условий</strong>: реакция, необратимая в растворе (с выпадением осадка или выделением газа), может стать обратимой при других условиях.
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
