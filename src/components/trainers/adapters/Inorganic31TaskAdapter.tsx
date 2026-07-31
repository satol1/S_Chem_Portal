import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, XCircle, 
  Sparkles, BookOpen, Check, RotateCcw, HelpCircle, Clock 
} from 'lucide-react';
import type { Inorganic31Task, InorganicEquation } from '../../../types/trainer';
import { CompactTaskNavigation, TaskNavigationBar } from '../common/TaskNavigation';
import { ChemFormula } from '../../scientific/ChemFormula';
import { useTaskState, type BaseTaskAdapterProps } from '../../../core/trainer/hooks/useTaskState';
import { evaluateEquationCoefficients } from '../../../core/chemistry/equationEvaluator';
import { InteractiveEquationForm } from '../../../core/trainer/components/InteractiveEquationForm';
import { TaskSolutionFeedback } from '../../../core/trainer/components/TaskSolutionFeedback';

interface UserEquationInput {
  reactantCoefs: Record<string, string>;
  productCoefs: Record<string, string>;
}

export type Inorganic31TaskAdapterProps = BaseTaskAdapterProps<Inorganic31Task>;

export const Inorganic31TaskAdapter: React.FC<Inorganic31TaskAdapterProps> = (props) => {
  const {
    task,
    mode,
    initialStatus,
    onPrevTask,
    onNextTask,
    hasPrev,
    hasNext,
  } = props;

  const {
    showSolution,
    toggleSolution,
    submitted,
    setSubmitted,
    score,
    setScore,
    triggerSuccessConfetti,
    saveTaskProgress,
    resetBaseState,
  } = useTaskState(props);

  const [showHints, setShowHints] = useState<Record<number, boolean>>({});

  const [userInputs, setUserInputs] = useState<Record<number, UserEquationInput>>({
    1: { reactantCoefs: {}, productCoefs: {} },
    2: { reactantCoefs: {}, productCoefs: {} },
    3: { reactantCoefs: {}, productCoefs: {} },
    4: { reactantCoefs: {}, productCoefs: {} },
  });

  const [evalResults, setEvalResults] = useState<boolean[]>([false, false, false, false]);

  // Sync inputs ONLY when task.id changes or initial status is loaded
  useEffect(() => {
    const newInputs: Record<number, UserEquationInput> = {};
    const isSolved = initialStatus?.solved;
    const savedDetails = initialStatus?.details as {
      inputs?: Record<number, UserEquationInput>;
      evalResults?: boolean[];
    } | undefined;

    task.equations.forEach((eq) => {
      const rCoefs: Record<string, string> = {};
      const pCoefs: Record<string, string> = {};

      eq.reactants.forEach((r) => {
        if (savedDetails?.inputs?.[eq.id]?.reactantCoefs?.[r.formula] !== undefined) {
          rCoefs[r.formula] = savedDetails.inputs[eq.id].reactantCoefs[r.formula];
        } else {
          rCoefs[r.formula] = isSolved ? String(r.correctCoef) : '';
        }
      });

      eq.products.forEach((p) => {
        if (savedDetails?.inputs?.[eq.id]?.productCoefs?.[p.formula] !== undefined) {
          pCoefs[p.formula] = savedDetails.inputs[eq.id].productCoefs[p.formula];
        } else {
          pCoefs[p.formula] = isSolved ? String(p.correctCoef) : '';
        }
      });

      newInputs[eq.id] = { reactantCoefs: rCoefs, productCoefs: pCoefs };
    });

    setUserInputs(newInputs);
    setEvalResults(savedDetails?.evalResults || (initialStatus?.solved ? [true, true, true, true] : [false, false, false, false]));
    if (savedDetails || isSolved) {
      setSubmitted(true);
      setScore(initialStatus?.score ?? 0);
    } else {
      resetBaseState();
    }
    setShowHints({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id]);

  const handleReactantCoefChange = (eqId: number, formula: string, value: string) => {
    if (submitted && mode === 'exam') return;
    setUserInputs((prev) => ({
      ...prev,
      [eqId]: {
        ...prev[eqId],
        reactantCoefs: { ...prev[eqId]?.reactantCoefs, [formula]: value },
      },
    }));
  };

  const handleProductCoefChange = (eqId: number, formula: string, value: string) => {
    if (submitted && mode === 'exam') return;
    setUserInputs((prev) => ({
      ...prev,
      [eqId]: {
        ...prev[eqId],
        productCoefs: { ...prev[eqId]?.productCoefs, [formula]: value },
      },
    }));
  };

  const handleCheckSolution = () => {
    if (submitted && mode === 'exam') return;
    const results: boolean[] = [];

    task.equations.forEach((eq) => {
      const eqInput = userInputs[eq.id] || { reactantCoefs: {}, productCoefs: {} };
      const { isEquationBalanced } = evaluateEquationCoefficients(
        eqInput.reactantCoefs,
        eqInput.productCoefs,
        eq.reactants,
        eq.products
      );
      results.push(isEquationBalanced);
    });

    const calculatedScore = results.filter(Boolean).length;
    const isFullySolved = calculatedScore === 4;

    setEvalResults(results);

    if (isFullySolved) {
      triggerSuccessConfetti();
    }

    saveTaskProgress(isFullySolved, calculatedScore, {
      evalResults: results,
      inputs: userInputs,
    });
  };

  const handleReset = () => {
    if (submitted && mode === 'exam') return;
    const newInputs: Record<number, UserEquationInput> = {};
    task.equations.forEach((eq) => {
      const rCoefs: Record<string, string> = {};
      const pCoefs: Record<string, string> = {};
      eq.reactants.forEach((r) => { rCoefs[r.formula] = ''; });
      eq.products.forEach((p) => { pCoefs[p.formula] = ''; });
      newInputs[eq.id] = { reactantCoefs: rCoefs, productCoefs: pCoefs };
    });
    setUserInputs(newInputs);
    setEvalResults([false, false, false, false]);
    resetBaseState();
    setShowHints({});
  };

  return (
    <div className="clean-card p-6 bg-white shadow-sm border border-slate-200 rounded-2xl space-y-6 font-body">
      
      {/* Task Header & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 text-white">
            Вариант №{task.id}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
            {task.subtopicTitle}
          </span>
          {task.difficulty && (
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              task.difficulty === 'Средний' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
            }`}>
              {task.difficulty}
            </span>
          )}
        </div>

        <CompactTaskNavigation
          onPrevTask={onPrevTask}
          onNextTask={onNextTask}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>

      {/* Mode Banner */}
      {mode === 'exam' && (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-600" />
          <span>⏱️ Режим экзамена: подсказки и ответы скрыты до проверки.</span>
        </div>
      )}

      <h2 className="text-lg font-bold text-slate-900 leading-snug">
        {task.title}
      </h2>

      {/* Overview Context Card */}
      <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 shadow-inner">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Цепочка из 4 уравнений химических реакций</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Составьте молекулярные уравнения реакций и расставьте коэффициенты для каждого из 4 превращений. За каждое верное уравнение начисляется 1 балл.
        </p>
      </div>

      {/* 4 Reaction Equation Cards */}
      <div className="space-y-6">
        {task.equations.map((eq: InorganicEquation, eqIdx: number) => {
          const eqInput = userInputs[eq.id] || { reactantCoefs: {}, productCoefs: {} };
          const isEqCorrect = mode === 'practice' && submitted && evalResults[eqIdx];

          return (
            <div
              key={eq.id}
              className={`p-5 rounded-2xl border transition-all space-y-4 ${
                submitted && mode === 'practice'
                  ? isEqCorrect
                    ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400/30'
                    : 'bg-rose-50/70 border-rose-300 ring-1 ring-rose-400/30'
                  : 'bg-slate-50/60 border-slate-200'
              }`}
            >
              {/* Equation Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center ${
                    submitted && mode === 'practice'
                      ? isEqCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                      : 'bg-slate-900 text-white'
                  }`}>
                    #{eq.id}
                  </span>
                  <span className="text-xs font-bold text-slate-800">Реакция №{eq.id}</span>

                  {eq.condition && (
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-[11px] font-semibold text-slate-700">
                      условие: {eq.condition}
                    </span>
                  )}
                </div>

                {submitted && mode === 'practice' && (
                  <div className="flex items-center gap-1 text-xs font-extrabold">
                    {isEqCorrect ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1 балл
                      </span>
                    ) : (
                      <span className="text-rose-700 flex items-center gap-1">
                        <XCircle className="w-4 h-4 text-rose-600" /> 0 баллов
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Equation Form */}
              <InteractiveEquationForm
                unbalancedEquation={eq.unbalanced}
                reactants={eq.reactants}
                products={eq.products}
                reactantCoefs={eqInput.reactantCoefs}
                productCoefs={eqInput.productCoefs}
                onReactantCoefChange={(formula, value) => handleReactantCoefChange(eq.id, formula, value)}
                onProductCoefChange={(formula, value) => handleProductCoefChange(eq.id, formula, value)}
                isSubmitted={submitted}
                mode={mode}
              />

              {/* Hints in Practice Mode */}
              {mode === 'practice' && eq.hint && (
                <div>
                  <button
                    onClick={() => setShowHints((prev) => ({ ...prev, [eq.id]: !prev[eq.id] }))}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 transition"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{showHints[eq.id] ? 'Скрыть подсказку' : 'Показать подсказку'}</span>
                  </button>
                  {showHints[eq.id] && (
                    <p className="mt-2 text-xs text-slate-700 bg-amber-50 p-3 rounded-lg border border-amber-200 leading-relaxed">
                      💡 {eq.hint}
                    </p>
                  )}
                </div>
              )}

              {/* Reveal Solution Key */}
              {showSolution && (
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs space-y-1">
                  <span className="text-[11px] text-blue-700 font-extrabold uppercase">Уравнение реакции #{eq.id}:</span>
                  <div className="text-sm font-bold text-slate-900">
                    <ChemFormula formula={eq.balanced} />
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Submission Feedback Banner and Drawer */}
      <TaskSolutionFeedback
        isSubmitted={submitted}
        score={score}
        maxScore={4}
        showSolution={showSolution}
        mode={mode}
        solutionTitle="Разбор Задания 31:"
        customFeedbackText={
          mode === 'exam'
            ? score === 4
              ? 'Отлично! Все 4 химических уравнения верны и полностью сбалансированы.'
              : 'Ответ зафиксирован. Вы можете просмотреть разбор по кнопке ниже.'
            : score === 4
            ? 'Отлично! Все 4 химических уравнения верны и полностью сбалансированы.'
            : `Верно составлено ${score} из 4 уравнений. Проверьте зеленые/красные подсветки коэффициентов.`
        }
      >
        <div className="space-y-3 text-xs text-slate-800">
          {task.equations.map((eq) => (
            <div key={eq.id} className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-[10px]">
                  Реакция #{eq.id}
                </span>
                <ChemFormula formula={eq.balanced} />
              </div>
              {eq.hint && <p className="text-slate-600 text-[11px] italic">Пояснение: {eq.hint}</p>}
            </div>
          ))}

          <div className="pt-2 text-slate-700 leading-relaxed border-t border-slate-200">
            <strong>Химическое обоснование превращений:</strong>
            <p className="mt-1">{task.explanation}</p>
          </div>
        </div>
      </TaskSolutionFeedback>

      {/* Action Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={handleCheckSolution}
            disabled={submitted && mode === 'exam'}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-md transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4" />
            <span>{submitted && mode === 'exam' ? 'Ответ зафиксирован' : 'Проверить решение (4 реакции)'}</span>
          </button>

          <button
            onClick={handleReset}
            disabled={submitted && mode === 'exam'}
            className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Сбросить введенные коэффициенты"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {(mode === 'practice' || submitted) && (
          <button
            onClick={toggleSolution}
            className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>{showSolution ? 'Скрыть разбор' : 'Показать разбор'}</span>
          </button>
        )}
      </div>

      {/* Task Navigation Bar */}
      <TaskNavigationBar
        onPrevTask={onPrevTask}
        onNextTask={onNextTask}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />

    </div>
  );
};
