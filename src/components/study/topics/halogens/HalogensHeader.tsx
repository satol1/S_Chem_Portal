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

export const HalogensHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-general', label: 'Строение атомов и тенденции', icon: Atom },
    { targetId: 'section-oxyacids', label: 'Кислородные кислоты хлора', icon: TestTube },
    { targetId: 'section-molecules-3d', label: '3D-Модели веществ', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('elements-chemistry', 'elem-nonme-halogens', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ХЭ-05
          </span>
          <span>•</span>
          <span>Химия элементов</span>
          <span>•</span>
          <span>VII-A Группа (Подгруппа галогенов)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Химия галогенов (F, Cl, Br, I)</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Галогены, галогеноводороды HF, HCl, HBr, HI, галогениды и качественные реакции, вытеснение галогенов из солей, кислородсодержащие кислоты хлора (от HClO до HClO₄), диспропорционирование в щелочах и промышленный электролиз.
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
            Галогены — элементы VII-A группы с конфигурацией внешнего слоя <ChemFormula formula="ns^2 np^5" className="font-semibold text-slate-900" />: одного электрона до октета не хватает, поэтому это самые активные неметаллы-окислители. В подгруппе F → Cl → Br → I окислительная способность простых веществ <TermTooltip term="закономерно убывает" definition="Стандартный электродный потенциал E°(X₂/2X⁻) падает от +2.87 В у F₂ до +0.54 В у I₂, а восстановительная способность галогенид-ионов X⁻, напротив, растёт." />, а восстановительная активность галогенид-ионов <ChemFormula formula="X(-)" className="font-semibold text-slate-900" /> растёт. Хлор — единственный галоген, чьи кислородные соединения (от <ChemFormula formula="HClO" /> до <ChemFormula formula="HClO4" />) широко представлены в заданиях ЕГЭ.
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
              <strong>Фтор — исключение из правил</strong>: проявляет только степень окисления −1 и НЕ образует оксидов (<ChemFormula formula="OF2" /> — дифторид кислорода, O(+2)). В водном растворе <ChemFormula formula="F2" /> реагирует с водой (<ChemFormula formula="2F2 + 2H2O -> 4HF + O2^" className="font-semibold text-slate-900" />), поэтому фтор НЕ вытесняет другие галогены из растворов их солей.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong><TermTooltip term="Диспропорционирование" definition="Окислительно-восстановительная реакция, в которой атомы одного элемента в промежуточной степени окисления одновременно окисляются и восстанавливаются." /> хлора в щелочах зависит от температуры</strong>: холодный раствор даёт гипохлорит (<ChemFormula formula="Cl(-)" /> и <ChemFormula formula="Cl(+)" />), горячий — хлорат (<ChemFormula formula="Cl(-)" /> и <ChemFormula formula="Cl(+5)" />): <ChemFormula formula="3Cl2 + 6KOH -t-> 5KCl + KClO3 + 3H2O" className="font-semibold text-slate-900" />.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong>HF — единственный слабый галогеноводород</strong>: HCl, HBr, HI — сильные кислоты, причём их сила и восстановительная активность РАСТУТ от HF к HI. HF травит стекло: <ChemFormula formula="SiO2 + 4HF -> SiF4^ + 2H2O" className="font-semibold text-slate-900" />.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong>Качественная реакция на галогениды — <ChemFormula formula="AgNO3" /></strong>: AgCl белый, AgBr бледно-жёлтый, AgI жёлтый; <TermTooltip term="AgF растворим" definition="Фторид серебра, в отличие от остальных галогенидов серебра, хорошо растворим в воде и осадка не образует." /> (осадка НЕТ!). Различие — в растворимости в аммиаке: AgCl (разб. <ChemFormula formula="NH3*H2O" />), AgBr (конц.), AgI — не растворяется.
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
