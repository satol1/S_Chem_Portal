import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { REACTION_TASKS } from '../../data/tasks';
import type { ReactionTask } from '../../types';
import { CheckCircle2, HelpCircle, RefreshCw, Zap, ArrowRight, Lightbulb } from 'lucide-react';

export const ReactionSimulator: React.FC = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
  const task: ReactionTask = REACTION_TASKS[currentTaskIndex];

  // User coefficient states
  const [reactantCoefs, setReactantCoefs] = useState<number[]>(
    task.reactants.map(() => 1)
  );
  const [productCoefs, setProductCoefs] = useState<number[]>(
    task.products.map(() => 1)
  );
  const [showHint, setShowHint] = useState<boolean>(false);
  const [isSolved, setIsSolved] = useState<boolean>(false);

  const handleReactantChange = (index: number, delta: number) => {
    const next = [...reactantCoefs];
    next[index] = Math.max(1, Math.min(10, next[index] + delta));
    setReactantCoefs(next);
    setIsSolved(false);
  };

  const handleProductChange = (index: number, delta: number) => {
    const next = [...productCoefs];
    next[index] = Math.max(1, Math.min(10, next[index] + delta));
    setProductCoefs(next);
    setIsSolved(false);
  };

  const checkSolution = () => {
    const reactantsCorrect = task.reactants.every(
      (r, i) => r.correctCoef === reactantCoefs[i]
    );
    const productsCorrect = task.products.every(
      (p, i) => p.correctCoef === productCoefs[i]
    );

    if (reactantsCorrect && productsCorrect) {
      setIsSolved(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#0284c7', '#f59e0b']
      });
    } else {
      setIsSolved(false);
      alert('Пока коэффициенты не сбалансированы. Попробуйте еще раз или воспользуйтесь подсказкой!');
    }
  };

  const nextTask = () => {
    const nextIdx = (currentTaskIndex + 1) % REACTION_TASKS.length;
    setCurrentTaskIndex(nextIdx);
    setReactantCoefs(REACTION_TASKS[nextIdx].reactants.map(() => 1));
    setProductCoefs(REACTION_TASKS[nextIdx].products.map(() => 1));
    setShowHint(false);
    setIsSolved(false);
  };

  return (
    <div className="w-full glass-card rounded-3xl p-6 border border-slate-200/80 shadow-xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Интерактивный симулятор</span>
            <h3 className="text-xl font-bold text-slate-900">{task.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            task.difficulty === 'Легкий' ? 'bg-emerald-100 text-emerald-800' :
            task.difficulty === 'Средний' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
          }`}>
            Сложность: {task.difficulty}
          </span>
          <button
            onClick={nextTask}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Следующая задача</span>
          </button>
        </div>
      </div>

      {/* Task Prompt Box */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
        <p className="text-xs text-slate-400 font-semibold uppercase mb-1">Несбалансированная реакция:</p>
        <div className="text-2xl font-mono font-bold tracking-wide text-emerald-400">{task.unbalanced}</div>
        <p className="text-xs text-slate-300 mt-2">
          Расставьте правильные коэффициенты перед формулами веществ, чтобы количество атомов каждого элемента слева и справа было одинаковым.
        </p>
      </div>

      {/* Interactive Balancing Workspace */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        {/* Reactants */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {task.reactants.map((r, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => handleReactantChange(idx, 1)}
                  className="w-6 h-5 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 rounded text-xs font-bold flex items-center justify-center"
                >
                  +
                </button>
                <span className="w-6 text-center font-mono font-bold text-lg text-emerald-600">
                  {reactantCoefs[idx]}
                </span>
                <button
                  onClick={() => handleReactantChange(idx, -1)}
                  className="w-6 h-5 bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-rose-700 rounded text-xs font-bold flex items-center justify-center"
                >
                  -
                </button>
              </div>
              <span className="font-mono text-xl font-bold text-slate-800 px-1">{r.formula}</span>
              {idx < task.reactants.length - 1 && (
                <span className="text-slate-400 font-bold text-lg mx-1">+</span>
              )}
            </div>
          ))}
        </div>

        {/* Reaction Arrow */}
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md my-2 md:my-0">
          <ArrowRight className="w-5 h-5" />
        </div>

        {/* Products */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {task.products.map((p, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => handleProductChange(idx, 1)}
                  className="w-6 h-5 bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 rounded text-xs font-bold flex items-center justify-center"
                >
                  +
                </button>
                <span className="w-6 text-center font-mono font-bold text-lg text-emerald-600">
                  {productCoefs[idx]}
                </span>
                <button
                  onClick={() => handleProductChange(idx, -1)}
                  className="w-6 h-5 bg-slate-100 hover:bg-rose-100 text-slate-700 hover:text-rose-700 rounded text-xs font-bold flex items-center justify-center"
                >
                  -
                </button>
              </div>
              <span className="font-mono text-xl font-bold text-slate-800 px-1">{p.formula}</span>
              {idx < task.products.length - 1 && (
                <span className="text-slate-400 font-bold text-lg mx-1">+</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/80 transition"
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <span>{showHint ? 'Скрыть подсказку' : 'Показать подсказку'}</span>
        </button>

        <button
          onClick={checkSolution}
          className="flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition transform active:scale-95"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Проверить уравнение</span>
        </button>
      </div>

      {/* Hint Alert */}
      {showHint && (
        <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed animate-fade-in flex items-start gap-2">
          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Методическая подсказка:</span>
            {task.hint}
          </div>
        </div>
      )}

      {/* Success Banner */}
      {isSolved && (
        <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs leading-relaxed animate-bounce-short flex items-start gap-3 shadow-md">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-sm text-emerald-900 block mb-1">🎉 Отлично! Уравнение полностью сбалансировано!</span>
            <p className="text-emerald-800">{task.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};
