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

export const RedoxReactionsHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-redox-concepts', label: 'Основные понятия', icon: Atom },
    { targetId: 'section-redox-equations', label: 'Электронный баланс', icon: TestTube },
    { targetId: 'section-electrolysis', label: 'Электролиз', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('general-chemistry', 'gen-ovr-basics', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ОХ-06
          </span>
          <span>•</span>
          <span>Общая химия</span>
          <span>•</span>
          <span>Раздел 6 • ОВР и электролиз</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Окислительно-восстановительные реакции</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Окислитель и восстановитель, степени окисления и перенос электронов, важнейшие окислители и
          восстановители, метод электронного баланса и метод полуреакций, электрохимический ряд активности
          металлов и электролиз расплавов и растворов — от процессов на электродах до промышленного
          получения алюминия и хлора.
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
            Окислитель принимает электроны и восстанавливается, восстановитель отдаёт электроны и окисляется;
            число отданных электронов всегда равно числу принятых — на этом основан метод электронного баланса.
            Продукт восстановления окислителя зависит от среды раствора, а при электролизе водных растворов
            исход конкуренции ионов и воды определяет ряд активности металлов.
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
              <strong>Продукт восстановления перманганата калия зависит от среды</strong>: <ChemFormula formula="Mn(2+)" /> в кислой, <ChemFormula formula="MnO2" /> в нейтральной, <ChemFormula formula="MnO4(2-)" /> в щелочной; у дихромата в кислой среде продукт — <ChemFormula formula="Cr(3+)" /> (окраска меняется с оранжевой на зелёную).
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong>Концентрированные серная и азотная кислоты реагируют с металлами, как правило, без выделения водорода</strong>: окислителем является не ион <ChemFormula formula="H+" />, а сера (+6) или азот (+5); железо, хром и алюминий на холоду пассивируются этими кислотами.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong>Роль элемента зависит от степени окисления</strong>: элемент в высшей степени окисления (например <ChemFormula formula="S(+6)" />, <ChemFormula formula="N(+5)" />) — только окислитель, в низшей (<ChemFormula formula="S(-2)" />, <ChemFormula formula="N(-3)" />) — только восстановитель, в промежуточной (кислород −1 в <ChemFormula formula="H2O2" />) — проявляет двойственность.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong>Электролиз растворов солей активных металлов</strong> (от лития до алюминия): металл на катоде не выделяется — восстанавливается вода с выделением водорода <ChemFormula formula="H2" />; на инертном аноде кислородсодержащие анионы не окисляются — окисляется вода.
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
