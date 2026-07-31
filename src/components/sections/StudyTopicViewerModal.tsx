import React, { useState } from 'react';
import { 
  X, BookOpen, Zap, CheckCircle2, 
  Lightbulb, ChevronRight 
} from 'lucide-react';
import { STUDY_BLOCKS } from '../../data/studyBlocksData';
import { ChemFormula } from '../scientific/ChemFormula';

interface Props {
  blockId: string | null;
  topicId: string | null;
  onClose: () => void;
  onOpenTrainer?: (trainerId: string) => void;
}

export const StudyTopicViewerModal: React.FC<Props> = ({
  blockId,
  topicId,
  onClose,
  onOpenTrainer
}) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('theory');

  if (!blockId || !topicId) return null;

  const block = STUDY_BLOCKS.find(b => b.id === blockId);
  const topic = block?.topics.find(t => t.id === topicId);

  if (!block || !topic) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-white text-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {topic.code}
              </span>
              <span className="text-xs text-slate-400 font-bold">{block.title}</span>
              {topic.targetExam && (
                <span className="text-[11px] font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                  {topic.targetExam}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              {topic.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {topic.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition shrink-0"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Bar */}
        <div className="flex items-center justify-between px-6 bg-slate-100 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('theory')}
              className={`py-3 px-4 text-xs font-extrabold border-b-2 transition flex items-center gap-2 ${
                activeTab === 'theory'
                  ? 'border-amber-600 text-amber-800 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Теоретическая часть</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`py-3 px-4 text-xs font-extrabold border-b-2 transition flex items-center gap-2 ${
                activeTab === 'practice'
                  ? 'border-amber-600 text-amber-800 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Практика и Задания</span>
            </button>
          </div>

          {topic.trainerId && onOpenTrainer && (
            <button
              onClick={() => {
                onClose();
                onOpenTrainer(topic.trainerId!);
              }}
              className="py-1.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-bold shadow hover:opacity-95 transition flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Запустить тренажер</span>
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          {activeTab === 'theory' ? (
            topic.theoryLesson ? (
              <div className="space-y-6 text-slate-800">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Главная суть темы:</h4>
                    <p>{topic.theoryLesson.summary}</p>
                  </div>
                </div>

                {topic.theoryLesson.sections.map((sec, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <h3 className="text-base font-bold text-slate-900">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {sec.content}
                    </p>

                    {sec.formulae && sec.formulae.length > 0 && (
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 font-mono text-xs text-slate-900">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Формулы и уравнения:</span>
                        {sec.formulae.map((f, fi) => (
                          <div key={fi} className="font-bold text-amber-800">
                            <ChemFormula formula={f} />
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.keyTerms && sec.keyTerms.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {sec.keyTerms.map((kt, kti) => (
                          <span key={kti} className="px-2.5 py-1 rounded-lg bg-slate-200 text-slate-700 font-semibold text-xs">
                            #{kt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {topic.trainerId && onOpenTrainer && (
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">Готовы проверить знания?</h4>
                      <p className="text-xs text-slate-300">
                        Закрепите изученный теоретический материал в интерактивном решебнике с конструктором ответов.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenTrainer(topic.trainerId!);
                      }}
                      className="px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs shadow-md hover:bg-amber-400 transition shrink-0 flex items-center gap-2"
                    >
                      <span>Открыть тренажер ({topic.code})</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 space-y-3">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-base font-bold text-slate-700">Конспект по этой теме готовится</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Подробный иллюстрированный конспект с формулами и схемами реакций появится в следующем обновлении.
                </p>
              </div>
            )
          ) : (
            /* Practice & Trainer Tab */
            <div className="space-y-6">
              {topic.trainerId && onOpenTrainer ? (
                <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    Для этой темы доступен полнофункциональный тренажер!
                  </h3>
                  <p className="text-xs text-slate-300 max-w-lg mx-auto">
                    Вам доступен решебник с конструктором уравнений реакций, автопроверкой электронного баланса и детальными пошаговыми разборами.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenTrainer(topic.trainerId!);
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs shadow-lg hover:opacity-95 transition"
                  >
                    Запустить интерактивный тренажер
                  </button>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h3 className="text-base font-bold text-slate-800">Практический блок {topic.code}</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Практика по этой теме включает в себя тесты, номенклатуру и уравнения реакций.
                  </p>
                  <button
                    onClick={() => setActiveTab('theory')}
                    className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition"
                  >
                    Изучить теоретическую часть
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default StudyTopicViewerModal;
