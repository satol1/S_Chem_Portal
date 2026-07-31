import React, { useState, useEffect } from 'react';
import {
  BookOpen, Check, RotateCcw, Clock, Heart
} from 'lucide-react';
import type { OvrTask } from '../../../types/trainer';
import { CompactTaskNavigation, TaskNavigationBar } from '../common/TaskNavigation';
import { ChemFormula, formatHalfReaction } from '../../scientific/ChemFormula';
import { useTaskState, type BaseTaskAdapterProps } from '../../../core/trainer/hooks/useTaskState';
import { evaluateEquationCoefficients, parseMultiplier, normalizeFormula } from '../../../core/chemistry/equationEvaluator';
import { InteractiveEquationForm } from '../../../core/trainer/components/InteractiveEquationForm';
import { TaskSolutionFeedback } from '../../../core/trainer/components/TaskSolutionFeedback';

interface UserSolutionState {
  reactantCoefs: Record<string, string>;
  productCoefs: Record<string, string>;
  balanceRows: Array<{
    initialElement: string;
    initialOxState: string;
    electronText: string;
    finalElement: string;
    finalOxState: string;
    multiplier: string;
  }>;
  selectedOxidant: string;
  selectedReductant: string;
}

export type OvrTaskAdapterProps = BaseTaskAdapterProps<OvrTask>;

export const OvrTaskAdapter: React.FC<OvrTaskAdapterProps> = (props) => {
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

  const [userState, setUserState] = useState<UserSolutionState>({
    reactantCoefs: {},
    productCoefs: {},
    balanceRows: [
      { initialElement: '', initialOxState: '', electronText: '', finalElement: '', finalOxState: '', multiplier: '' },
      { initialElement: '', initialOxState: '', electronText: '', finalElement: '', finalOxState: '', multiplier: '' }
    ],
    selectedOxidant: '',
    selectedReductant: '',
  });

  // Sync inputs ONLY when task.id changes or initial status loaded
  useEffect(() => {
    const savedState = (initialStatus?.details as { savedState?: UserSolutionState & { isSubmitted?: boolean; score?: number } })?.savedState;

    if (savedState) {
      setUserState(savedState);
      if (savedState.isSubmitted || initialStatus?.solved) {
        setSubmitted(true);
        setScore(savedState.score ?? initialStatus?.score ?? 0);
      } else {
        resetBaseState();
      }
    } else if (initialStatus?.solved) {
      const initReactants: Record<string, string> = {};
      task.reactants.forEach(r => {
        initReactants[r.formula] = String(r.correctCoef);
      });

      const initProducts: Record<string, string> = {};
      task.products.forEach(p => {
        initProducts[p.formula] = String(p.correctCoef);
      });

      setUserState({
        reactantCoefs: initReactants,
        productCoefs: initProducts,
        balanceRows: task.electronicBalance.map(b => ({
          initialElement: b.element,
          initialOxState: b.initialOxState,
          electronText: b.electronChangeText,
          finalElement: b.finalElement || b.element,
          finalOxState: b.finalOxState,
          multiplier: String(b.multiplier)
        })),
        selectedOxidant: task.oxidant.formula,
        selectedReductant: task.reductant.formula,
      });
      setSubmitted(true);
      setScore(initialStatus.score);
    } else {
      const initReactants: Record<string, string> = {};
      task.reactants.forEach(r => { initReactants[r.formula] = ''; });
      const initProducts: Record<string, string> = {};
      task.products.forEach(p => { initProducts[p.formula] = ''; });

      setUserState({
        reactantCoefs: initReactants,
        productCoefs: initProducts,
        balanceRows: [
          { initialElement: '', initialOxState: '', electronText: '', finalElement: '', finalOxState: '', multiplier: '' },
          { initialElement: '', initialOxState: '', electronText: '', finalElement: '', finalOxState: '', multiplier: '' }
        ],
        selectedOxidant: '',
        selectedReductant: '',
      });
      resetBaseState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id]);

  const handleCheckSolution = () => {
    if (submitted && mode === 'exam') return;
    let earnedPoints = 0;

    const { isEquationBalanced } = evaluateEquationCoefficients(
      userState.reactantCoefs,
      userState.productCoefs,
      task.reactants,
      task.products
    );

    const isOxidantCorrect = normalizeFormula(userState.selectedOxidant) === normalizeFormula(task.oxidant.formula);
    const isReductantCorrect = normalizeFormula(userState.selectedReductant) === normalizeFormula(task.reductant.formula);

    if (isEquationBalanced && isOxidantCorrect && isReductantCorrect) {
      earnedPoints += 1;
    }

    const balancesCorrect = task.electronicBalance.every(b => {
      return userState.balanceRows.some(userRow => {
        if (!userRow) return false;
        
        const normalize = (s: string | undefined) => (s || '').replace(/\s+/g, '').toLowerCase();
        
        const normElec = (s: string | undefined) => {
          let val = (s || '').replace(/\s+/g, '').toLowerCase();
          if (val.endsWith('e-')) val = val.slice(0, -2);
          else if (val.endsWith('e')) val = val.slice(0, -1);
          if (val === '-' || val === '+') val += '1';
          return val;
        };
        
        const isInitEl = normalize(userRow.initialElement) === normalize(b.element);
        const isInitOx = normalize(userRow.initialOxState) === normalize(b.initialOxState) ||
          normalize(userRow.initialOxState) === normalize(b.initialOxState).replace('+', '') ||
          (normalize(b.initialOxState) === '0' && normalize(userRow.initialOxState) === '');
        const isElec = normElec(userRow.electronText) === normElec(b.electronChangeText);
        const isFinEl = normalize(userRow.finalElement) === normalize(b.finalElement || b.element);
        const isFinOx = normalize(userRow.finalOxState) === normalize(b.finalOxState) ||
          normalize(userRow.finalOxState) === normalize(b.finalOxState).replace('+', '') ||
          (normalize(b.finalOxState) === '0' && normalize(userRow.finalOxState) === '');
        const isMult = parseMultiplier(userRow.multiplier) === b.multiplier;
        
        return isInitEl && isInitOx && isElec && isFinEl && isFinOx && isMult;
      });
    });

    if (balancesCorrect) {
      earnedPoints += 1;
    }

    const isFullSuccess = earnedPoints === 2;

    if (isFullSuccess) {
      triggerSuccessConfetti();
    }

    saveTaskProgress(isFullSuccess || earnedPoints > 0, earnedPoints, {
      savedState: {
        ...userState,
        isSubmitted: true,
        score: earnedPoints,
      }
    });
  };

  const handleReset = () => {
    if (submitted && mode === 'exam') return;
    const initReactants: Record<string, string> = {};
    task.reactants.forEach(r => { initReactants[r.formula] = ''; });
    const initProducts: Record<string, string> = {};
    task.products.forEach(p => { initProducts[p.formula] = ''; });

    setUserState({
      reactantCoefs: initReactants,
      productCoefs: initProducts,
      balanceRows: [
        { initialElement: '', initialOxState: '', electronText: '', finalElement: '', finalOxState: '', multiplier: '' },
        { initialElement: '', initialOxState: '', electronText: '', finalElement: '', finalOxState: '', multiplier: '' }
      ],
      selectedOxidant: '',
      selectedReductant: '',
    });

    resetBaseState();
  };

  return (
    <div className="clean-card p-6 bg-white shadow-sm border border-slate-200 rounded-2xl space-y-6 font-body">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 text-white">
            Вариант №{task.id}
          </span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${task.difficulty === 'Легкий' ? 'bg-emerald-100 text-emerald-800' :
            task.difficulty === 'Средний' ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'
            }`}>
            {task.difficulty}
          </span>
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
          <span>⏱️ Режим экзамена: разбор недоступен до отправки ответа.</span>
        </div>
      )}

      <h2 className="text-lg font-bold text-slate-900 leading-snug">
        {task.title}
      </h2>

      {/* Step 1: Coefficients Constructor */}
      <InteractiveEquationForm
        stepNumber={1}
        label="Расставьте коэффициенты в уравнении реакции"
        unbalancedEquation={task.unbalancedEquation}
        reactants={task.reactants}
        products={task.products}
        reactantCoefs={userState.reactantCoefs}
        productCoefs={userState.productCoefs}
        onReactantCoefChange={(formula, value) => {
          if (submitted && mode === 'exam') return;
          setUserState(prev => ({
            ...prev,
            reactantCoefs: { ...prev.reactantCoefs, [formula]: value }
          }));
        }}
        onProductCoefChange={(formula, value) => {
          if (submitted && mode === 'exam') return;
          setUserState(prev => ({
            ...prev,
            productCoefs: { ...prev.productCoefs, [formula]: value }
          }));
        }}
        isSubmitted={submitted}
        mode={mode}
      />

      {/* Step 2: Electronic Balance Table */}
      <div className="mt-6">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">2</span>
          <span>Электронный баланс</span>
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Полуреакция окисления / восстановления</th>
                <th className="py-3 px-4 text-center w-28">Множитель</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {userState.balanceRows.map((userRow, idx) => {
                const isPracticeSubmitted = mode === 'practice' && submitted;
                const isRowDisabled = submitted && mode === 'exam';

                const normalize = (s: string | undefined) => (s || '').replace(/\s+/g, '').toLowerCase();
                const normElec = (s: string | undefined) => {
                  let val = (s || '').replace(/\s+/g, '').toLowerCase();
                  if (val.endsWith('e-')) val = val.slice(0, -2);
                  else if (val.endsWith('e')) val = val.slice(0, -1);
                  if (val === '-' || val === '+') val += '1';
                  return val;
                };

                let targetRow = task.electronicBalance[idx];
                if (!targetRow) return null;
                if (userRow.initialElement) {
                  const potentialMatch = task.electronicBalance.find(b => normalize(b.element) === normalize(userRow.initialElement));
                  if (potentialMatch) targetRow = potentialMatch;
                }

                const displayRow = showSolution ? {
                  initialElement: targetRow.element,
                  initialOxState: targetRow.initialOxState,
                  electronText: targetRow.electronChangeText,
                  finalElement: targetRow.finalElement || targetRow.element,
                  finalOxState: targetRow.finalOxState,
                  multiplier: String(targetRow.multiplier)
                } : userRow;

                const isInitElCorrect = normalize(userRow.initialElement) === normalize(targetRow.element);
                const isInitOxCorrect = normalize(userRow.initialOxState) === normalize(targetRow.initialOxState) ||
                  normalize(userRow.initialOxState) === normalize(targetRow.initialOxState).replace('+', '') ||
                  (normalize(targetRow.initialOxState) === '0' && normalize(userRow.initialOxState) === '');
                const isElecCorrect = normElec(userRow.electronText) === normElec(targetRow.electronChangeText);
                const isFinElCorrect = normalize(userRow.finalElement) === normalize(targetRow.finalElement || targetRow.element);
                const isFinOxCorrect = normalize(userRow.finalOxState) === normalize(targetRow.finalOxState) ||
                  normalize(userRow.finalOxState) === normalize(targetRow.finalOxState).replace('+', '') ||
                  (normalize(targetRow.finalOxState) === '0' && normalize(userRow.finalOxState) === '');
                const isMultCorrect = parseMultiplier(userRow.multiplier) === targetRow.multiplier;

                const getInputClass = (isCorrect: boolean, val: string) => {
                  if (showSolution) return 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40';
                  if (!isPracticeSubmitted) {
                    if (isRowDisabled) return 'border-slate-200 bg-slate-100 text-slate-700 cursor-not-allowed';
                    return 'border-slate-300 focus:border-amber-500 bg-white text-slate-900';
                  }
                  if (!val) return 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40';
                  return isCorrect
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40'
                    : 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40';
                };

                const updateField = (field: keyof typeof userRow, val: string) => {
                  if (submitted && mode === 'exam') return;
                  setUserState(prev => {
                    const newRows = [...prev.balanceRows];
                    newRows[idx] = { ...newRows[idx], [field]: val };
                    return { ...prev, balanceRows: newRows };
                  });
                };

                return (
                  <tr key={`b-${idx}`} className="hover:bg-slate-50/80 transition">
                    <td className="py-3 px-4 font-bold text-slate-800">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-start gap-0.5">
                          <input 
                            placeholder="Элем." 
                            className={`w-10 sm:w-12 h-9 px-1 text-center font-bold text-sm rounded-lg border outline-none transition ${getInputClass(isInitElCorrect, userRow.initialElement)}`}
                            value={displayRow.initialElement}
                            disabled={isRowDisabled || showSolution}
                            onChange={(e) => updateField('initialElement', e.target.value)}
                          />
                          <input 
                            placeholder="С.О." 
                            className={`w-8 h-6 px-1 text-center font-bold text-xs rounded-md border outline-none -mt-1 transition ${getInputClass(isInitOxCorrect, userRow.initialOxState)}`}
                            value={displayRow.initialOxState}
                            disabled={isRowDisabled || showSolution}
                            onChange={(e) => updateField('initialOxState', e.target.value)}
                          />
                        </div>

                        <input 
                          placeholder="- 1e" 
                          className={`w-12 sm:w-16 h-9 px-1 text-center font-bold text-sm rounded-lg border outline-none transition ${getInputClass(isElecCorrect, userRow.electronText)}`}
                          value={displayRow.electronText}
                          disabled={isRowDisabled || showSolution}
                          onChange={(e) => updateField('electronText', e.target.value)}
                        />

                        <span className="text-slate-400 font-bold">→</span>

                        <div className="flex items-start gap-0.5">
                          <input 
                            placeholder="Элем." 
                            className={`w-10 sm:w-12 h-9 px-1 text-center font-bold text-sm rounded-lg border outline-none transition ${getInputClass(isFinElCorrect, userRow.finalElement)}`}
                            value={displayRow.finalElement}
                            disabled={isRowDisabled || showSolution}
                            onChange={(e) => updateField('finalElement', e.target.value)}
                          />
                          <input 
                            placeholder="С.О." 
                            className={`w-8 h-6 px-1 text-center font-bold text-xs rounded-md border outline-none -mt-1 transition ${getInputClass(isFinOxCorrect, userRow.finalOxState)}`}
                            value={displayRow.finalOxState}
                            disabled={isRowDisabled || showSolution}
                            onChange={(e) => updateField('finalOxState', e.target.value)}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <input
                        type="number"
                        min="1"
                        max="99"
                        placeholder="?"
                        value={displayRow.multiplier}
                        disabled={isRowDisabled || showSolution}
                        onChange={(e) => updateField('multiplier', e.target.value)}
                        className={`w-12 h-9 text-center font-extrabold text-sm rounded-lg border outline-none transition ${getInputClass(isMultCorrect, userRow.multiplier)}`}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Step 3: Oxidant & Reductant Selection */}
      <div className="mt-6">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">3</span>
          <span>Укажите окислитель и восстановитель</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="text-xs font-bold text-slate-700 block">Окислитель (принимает электроны):</label>
            <select
              value={userState.selectedOxidant}
              disabled={submitted && mode === 'exam'}
              onChange={(e) => {
                if (submitted && mode === 'exam') return;
                setUserState(prev => ({ ...prev, selectedOxidant: e.target.value }));
              }}
              className={`w-full h-10 px-3 rounded-xl bg-white border font-bold text-xs outline-none transition ${mode === 'practice' && submitted
                ? (userState.selectedOxidant || '').trim() === task.oxidant.formula.trim()
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40'
                  : 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40'
                : submitted && mode === 'exam'
                  ? 'border-slate-200 bg-slate-100 text-slate-700 cursor-not-allowed'
                  : 'border-slate-300 text-slate-800 focus:border-amber-500'
                }`}
            >
              <option value="">-- Выберите вещество-окислитель --</option>
              {task.reactants.map(r => (
                <option key={`ox-${r.formula}`} value={r.formula}>{r.formula}</option>
              ))}
            </select>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <label className="text-xs font-bold text-slate-700 block">Восстановитель (отдает электроны):</label>
            <select
              value={userState.selectedReductant}
              disabled={submitted && mode === 'exam'}
              onChange={(e) => {
                if (submitted && mode === 'exam') return;
                setUserState(prev => ({ ...prev, selectedReductant: e.target.value }));
              }}
              className={`w-full h-10 px-3 rounded-xl bg-white border font-bold text-xs outline-none transition ${mode === 'practice' && submitted
                ? (userState.selectedReductant || '').trim() === task.reductant.formula.trim()
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40'
                  : 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40'
                : submitted && mode === 'exam'
                  ? 'border-slate-200 bg-slate-100 text-slate-700 cursor-not-allowed'
                  : 'border-slate-300 text-slate-800 focus:border-amber-500'
                }`}
            >
              <option value="">-- Выберите вещество-восстановитель --</option>
              {task.reactants.map(r => (
                <option key={`red-${r.formula}`} value={r.formula}>{r.formula}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Submission Feedback Banner and Drawer */}
      <TaskSolutionFeedback
        isSubmitted={submitted}
        score={score}
        maxScore={task.maxScore}
        showSolution={showSolution}
        mode={mode}
        solutionTitle="Разбор Задания 29:"
        customFeedbackText={
          mode === 'exam'
            ? score === task.maxScore
              ? 'Отлично! Задание 29 выполнено полностью верно.'
              : 'Ответ зафиксирован. Вы можете просмотреть разбор по кнопке ниже.'
            : undefined
        }
      >
        <div className="space-y-2 text-xs text-slate-800">
          <p><strong>1) Уравнение реакции:</strong> <ChemFormula formula={task.balancedEquation} /></p>
          <p><strong>2) Электронный баланс:</strong></p>
          <ul className="list-disc pl-5 font-mono space-y-1">
            {task.electronicBalance.map((b, i) => (
              <li key={i}>
                <ChemFormula formula={formatHalfReaction(b.element, b.initialOxState, b.electronChangeText, b.finalElement, b.finalOxState)} /> | {b.multiplier}
              </li>
            ))}
          </ul>
          <p><strong>3) Вещества:</strong> {task.oxidant.fullText}; {task.reductant.fullText}</p>
          <p className="text-slate-600 pt-2">{task.explanation}</p>
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
            <span>{submitted && mode === 'exam' ? 'Ответ зафиксирован' : 'Проверить решение'}</span>
          </button>

          <button
            onClick={handleReset}
            disabled={submitted && mode === 'exam'}
            className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Сбросить введенные данные"
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
        nextButtonSubContent={
          task.id === 1 ? (
            <div className="flex items-center justify-center text-rose-500 pt-1" title="Вариант 1">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500 drop-shadow-sm" />
            </div>
          ) : undefined
        }
      />

    </div>
  );
};
