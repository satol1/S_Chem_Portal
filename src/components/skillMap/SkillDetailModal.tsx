import React, { useState } from 'react';
import { 
  X, CheckCircle2, ArrowRight, ShieldCheck, BookOpen, 
  Zap, HelpCircle, ExternalLink 
} from 'lucide-react';
import type { SkillNode } from '../../types/skillMap';
import { GradeLevels } from '../../data/skillsData';
import { SkillMapService } from '../../services/skillMapService';

interface Props {
  node: SkillNode | null;
  onClose: () => void;
  onSelectSkill: (skillId: string) => void;
  onOpenTrainer?: (topicId: string) => void;
}

export const SkillDetailModal: React.FC<Props> = ({
  node,
  onClose,
  onSelectSkill,
  onOpenTrainer,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);

  if (!node) return null;

  const gradeMeta = GradeLevels.find(g => g.id === node.gradeLevel);
  const prereqNodes = SkillMapService.getPrerequisiteNodes(node);
  const nextNodes = SkillMapService.getNextSkillsNodes(node);

  const handleQuizSubmit = (idx: number) => {
    setSelectedOption(idx);
    setQuizAnswered(true);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-slate-900/95 border-l border-teal-500/40 shadow-2xl backdrop-blur-2xl text-white flex flex-col transform transition-transform duration-300 ease-in-out">
      
      {/* Drawer Top Header */}
      <div className="relative bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 p-6 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0">
        
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-black text-teal-400 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
              {node.code}
            </span>
            {gradeMeta && (
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${gradeMeta.badgeColor}`}>
                {gradeMeta.title}
              </span>
            )}
            {node.fipiExamTarget && (
              <span className="text-xs font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2.5 py-1 rounded-lg">
                {node.fipiExamTarget}
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
            {node.title}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-teal-300">
            {node.subtitle}
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition shrink-0"
          aria-label="Закрыть панель"
        >
          <X className="w-5 h-5" />
        </button>

      </div>

      {/* Drawer Scrollable Content */}
      <div className="p-6 space-y-6 overflow-y-auto flex-grow">
        
        {/* Description & Pedagogical Note */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span>Содержание компетенции и Описание</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            {node.description}
          </p>
        </div>

        {/* Pedagogical Methodology */}
        {node.pedagogicalNote && (
          <div className="bg-gradient-to-r from-teal-950/40 to-slate-950/60 border border-teal-500/30 p-4 rounded-2xl space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-extrabold text-teal-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Методология русской школы:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pl-6">
              {node.pedagogicalNote}
            </p>
          </div>
        )}

        {/* Standards & Competencies Metadata Grid */}
        <div className="grid grid-cols-1 gap-3 text-xs">
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Стандарт РФ (ФГОС/ФОП):</span>
            <p className="font-semibold text-slate-200">{node.fgosStandard}</p>
          </div>
          {node.ngssStandard && (
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Зарубежный стандарт STEM (NGSS / IB):</span>
              <p className="font-semibold text-slate-200">{node.ngssStandard}</p>
            </div>
          )}
        </div>

        {/* Direct Trainer Connection Link */}
        {node.trainerTopicId && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-slate-900 border border-amber-500/40 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-black text-amber-300">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Интерактивная практика доступна</span>
              </div>
              <p className="text-xs text-slate-300">
                Закрепите навык в автоматизированном тренажере решения задач.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenTrainer?.(node.trainerTopicId!);
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black shrink-0 shadow-lg flex items-center gap-1.5"
            >
              <span>Перейти</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Interactive Self-Check Quiz */}
        {node.quiz && (
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-teal-300">
              <HelpCircle className="w-4 h-4 text-teal-400" />
              <span>Интерактивная самопроверка навыка:</span>
            </div>

            <p className="text-xs font-bold text-white bg-slate-900 p-3 rounded-xl border border-slate-800">
              {node.quiz.question}
            </p>

            <div className="grid grid-cols-1 gap-2">
              {node.quiz.options.map((opt, idx) => {
                let optStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700';

                if (quizAnswered) {
                  if (idx === node.quiz!.correctIndex) {
                    optStyle = 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold';
                  } else if (selectedOption === idx) {
                    optStyle = 'bg-rose-500/20 border-rose-500/60 text-rose-300 font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizSubmit(idx)}
                    disabled={quizAnswered}
                    className={`p-3 rounded-xl border text-xs text-left transition flex items-center justify-between ${optStyle}`}
                  >
                    <span>{opt}</span>
                    {quizAnswered && idx === node.quiz!.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {quizAnswered && (
              <div className={`p-3 rounded-xl text-xs space-y-1 ${
                selectedOption === node.quiz.correctIndex
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
              }`}>
                <p className="font-bold">
                  {selectedOption === node.quiz.correctIndex ? 'Верно!' : 'Не совсем верно.'}
                </p>
                <p className="text-slate-300 text-[11px]">
                  {node.quiz.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Prerequisite & Next Skills Graph Chain */}
        <div className="grid grid-cols-1 gap-4 text-xs">
          {/* Prerequisites */}
          <div className="space-y-2">
            <span className="font-bold text-slate-400 uppercase text-[10px]">Что изучить до этого:</span>
            {prereqNodes.length > 0 ? (
              <div className="space-y-1.5">
                {prereqNodes.map(pn => (
                  <button
                    key={pn.id}
                    onClick={() => onSelectSkill(pn.id)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-left hover:border-teal-500/40 transition flex items-center justify-between"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-teal-400 block">{pn.code}</span>
                      <span className="font-bold text-slate-200 text-xs">{pn.title}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic text-[11px]">Базовый стартовый навык</p>
            )}
          </div>

          {/* Next Skills Unlocked */}
          <div className="space-y-2">
            <span className="font-bold text-slate-400 uppercase text-[10px]">Открываемые дальнейшие навыки:</span>
            {nextNodes.length > 0 ? (
              <div className="space-y-1.5">
                {nextNodes.map(nn => (
                  <button
                    key={nn.id}
                    onClick={() => onSelectSkill(nn.id)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-left hover:border-teal-500/40 transition flex items-center justify-between"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-teal-400 block">{nn.code}</span>
                      <span className="font-bold text-slate-200 text-xs">{nn.title}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic text-[11px]">Академический ВУЗовский финал</p>
            )}
          </div>
        </div>

      </div>

      {/* Drawer Bottom Footer */}
      <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
        <span className="hidden sm:inline">ФГОС ООО / СОО / ВО</span>
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition ml-auto"
        >
          Закрыть боковую панель
        </button>
      </div>

    </div>
  );
};
