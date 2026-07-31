import React from 'react';
import { TRAINER_MODULES } from '../../data/ovrTasks';
import { 
  Zap, ArrowRight, BookOpen, 
  Atom, ShieldCheck 
} from 'lucide-react';

interface Props {
  onSelectTrainer: (trainerId: string) => void;
}

export const TaskTrainersSection: React.FC<Props> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Glow Effects Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Интерактивная практика • ЕГЭ и ОГЭ 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Тренажеры химических задач
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            Пошаговые решебники с конструктором электронного баланса, проверкой коэффициентов и научным KaTeX-рендером химических формул.
          </p>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <Atom className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Научная библиотека KaTeX</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Точное отображение степеней окисления, зарядов ионов и электронных балансов высокого качества.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Критерии ФИПИ</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Проверка составления электронного баланса и определения окислителя/восстановителя на 2 балла.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">20 Подробных разборов</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Каждое задание содержит пошаговый разбор, варианты ответов и методические подсказки.
              </p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINER_MODULES.map((mod) => (
            <div
              key={mod.id}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                mod.available
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-amber-500/40 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1'
                  : 'bg-slate-800/40 border-slate-800 opacity-70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider ${
                    mod.available ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {mod.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">{mod.targetExam}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                  {mod.title}
                </h3>
                <p className="text-xs text-amber-400 font-medium mb-3">
                  {mod.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {mod.description}
                </p>
              </div>

              <div>
                {mod.available ? (
                  <button
                    onClick={() => onSelectTrainer(mod.id)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 group"
                  >
                    <span>Начать тренировку ({mod.taskCount} задач)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                ) : (
                  <button
                    disabled
                    className="w-full py-3 rounded-xl bg-slate-800 text-slate-500 font-bold text-xs cursor-not-allowed border border-slate-700"
                  >
                    Модуль пополняется
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
