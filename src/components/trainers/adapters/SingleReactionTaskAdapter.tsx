import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Sparkles, BookOpen, Check, RotateCcw, HelpCircle, Info, Plus, Trash2, Keyboard, Clock
} from 'lucide-react';
import type { SingleReactionTask } from '../../../types/trainer';
import { CompactTaskNavigation, TaskNavigationBar } from '../common/TaskNavigation';
import { ChemFormula } from '../../scientific/ChemFormula';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { useTaskState, type BaseTaskAdapterProps } from '../../../core/trainer/hooks/useTaskState';
import { evaluateReactionSlots, parseCoef } from '../../../core/chemistry/equationEvaluator';
import { TaskSolutionFeedback } from '../../../core/trainer/components/TaskSolutionFeedback';

interface FormulaSlot {
  id: string;
  coef: string;
  formula: string;
}

export type SingleReactionTaskAdapterProps = BaseTaskAdapterProps<SingleReactionTask>;

export const SingleReactionTaskAdapter: React.FC<SingleReactionTaskAdapterProps> = (props) => {
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
    showHint,
    toggleHint,
    submitted,
    setSubmitted,
    score,
    setScore,
    triggerSuccessConfetti,
    saveTaskProgress,
    resetBaseState,
  } = useTaskState(props);

  const [showReactantHint, setShowReactantHint] = useState<boolean>(false);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(true);

  // Active focused input for virtual keyboard insertion
  const focusedInputRef = useRef<{ type: 'reactant' | 'product'; index: number; field: 'coef' | 'formula' } | null>(null);

  // Reactants and products slots state
  const [reactants, setReactants] = useState<FormulaSlot[]>([]);
  const [products, setProducts] = useState<FormulaSlot[]>([]);

  const [evalErrors, setEvalErrors] = useState<{ reactants: boolean[]; products: boolean[] }>({
    reactants: [],
    products: [],
  });

  // Sync inputs on task change or initialStatus load
  useEffect(() => {
    const isSolved = initialStatus?.solved;
    const savedDetails = initialStatus?.details as {
      reactants?: { coef: string; formula: string }[];
      products?: { coef: string; formula: string }[];
    } | undefined;

    if (savedDetails?.reactants && savedDetails?.products) {
      setReactants(savedDetails.reactants.map((r, i) => ({ id: `r-${i}`, ...r })));
      setProducts(savedDetails.products.map((p, i) => ({ id: `p-${i}`, ...p })));
      setSubmitted(true);
      setScore(initialStatus?.score ?? 0);
    } else if (isSolved) {
      setReactants(
        task.reactants.map((r, i) => ({
          id: `r-${i}`,
          coef: r.correctCoef === 1 ? '' : String(r.correctCoef),
          formula: r.formula,
        }))
      );
      setProducts(
        task.products.map((p, i) => ({
          id: `p-${i}`,
          coef: p.correctCoef === 1 ? '' : String(p.correctCoef),
          formula: p.formula,
        }))
      );
      setSubmitted(true);
      setScore(initialStatus?.score ?? task.maxScore);
    } else {
      // Default empty slots corresponding to target count
      setReactants(
        Array.from({ length: Math.max(1, task.reactants.length) }).map((_, i) => ({
          id: `r-${i}`,
          coef: '',
          formula: '',
        }))
      );
      setProducts(
        Array.from({ length: Math.max(1, task.products.length) }).map((_, i) => ({
          id: `p-${i}`,
          coef: '',
          formula: '',
        }))
      );
      resetBaseState();
    }

    setEvalErrors({ reactants: [], products: [] });
    setShowReactantHint(false);
    focusedInputRef.current = null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task.id]);

  // Add/remove slot handlers
  const handleAddReactant = () => {
    if (submitted && mode === 'exam') return;
    setReactants((prev) => [...prev, { id: `r-${Date.now()}`, coef: '', formula: '' }]);
  };

  const handleRemoveReactant = (index: number) => {
    if (submitted && mode === 'exam') return;
    if (reactants.length <= 1) return;
    setReactants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddProduct = () => {
    if (submitted && mode === 'exam') return;
    setProducts((prev) => [...prev, { id: `p-${Date.now()}`, coef: '', formula: '' }]);
  };

  const handleRemoveProduct = (index: number) => {
    if (submitted && mode === 'exam') return;
    if (products.length <= 1) return;
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  // Update slot field
  const handleSlotChange = (
    type: 'reactant' | 'product',
    index: number,
    field: 'coef' | 'formula',
    value: string
  ) => {
    if (submitted && mode === 'exam') return;
    if (type === 'reactant') {
      setReactants((prev) => {
        const next = [...prev];
        next[index] = { ...next[index], [field]: value };
        return next;
      });
    } else {
      setProducts((prev) => {
        const next = [...prev];
        next[index] = { ...next[index], [field]: value };
        return next;
      });
    }
    if (submitted && mode === 'practice') setSubmitted(false);
  };

  // Virtual chemical keyboard insertion
  const handleVirtualInsert = (text: string) => {
    if (submitted && mode === 'exam') return;
    if (!focusedInputRef.current) {
      const rIdx = reactants.findIndex((r) => !r.formula);
      if (rIdx !== -1) {
        handleSlotChange('reactant', rIdx, 'formula', reactants[rIdx].formula + text);
        return;
      }
      const pIdx = products.findIndex((p) => !p.formula);
      if (pIdx !== -1) {
        handleSlotChange('product', pIdx, 'formula', products[pIdx].formula + text);
        return;
      }
      if (reactants.length > 0) {
        handleSlotChange('reactant', reactants.length - 1, 'formula', reactants[reactants.length - 1].formula + text);
      }
      return;
    }

    const { type, index, field } = focusedInputRef.current;
    if (type === 'reactant') {
      const currentVal = reactants[index]?.[field] || '';
      handleSlotChange('reactant', index, field, currentVal + text);
    } else {
      const currentVal = products[index]?.[field] || '';
      handleSlotChange('product', index, field, currentVal + text);
    }
  };

  // Verification logic via equationEvaluator
  const handleSubmit = () => {
    if (submitted && mode === 'exam') return;
    const { allCorrect, evalErrors: resultErrors } = evaluateReactionSlots(
      reactants,
      products,
      task.reactants,
      task.products
    );

    setEvalErrors(resultErrors);

    if (allCorrect) {
      triggerSuccessConfetti();
      saveTaskProgress(true, task.maxScore, { reactants, products });
    } else {
      saveTaskProgress(false, 0, { reactants, products });
    }
  };

  const handleReset = () => {
    if (submitted && mode === 'exam') return;
    setReactants(
      Array.from({ length: Math.max(1, task.reactants.length) }).map((_, i) => ({
        id: `r-${i}`,
        coef: '',
        formula: '',
      }))
    );
    setProducts(
      Array.from({ length: Math.max(1, task.products.length) }).map((_, i) => ({
        id: `p-${i}`,
        coef: '',
        formula: '',
      }))
    );
    setEvalErrors({ reactants: [], products: [] });
    resetBaseState();
    setShowReactantHint(false);
    focusedInputRef.current = null;
  };

  // Build live KaTeX string from slots
  const formatLiveFormula = () => {
    const buildSide = (slots: FormulaSlot[]) => {
      const valid = slots.filter((s) => s.formula.trim() !== '');
      if (valid.length === 0) return '...';
      return valid
        .map((s) => {
          const c = parseCoef(s.coef);
          const cText = c > 1 ? `${c}` : '';
          return `${cText}${s.formula.trim()}`;
        })
        .join(' + ');
    };

    return `${buildSide(reactants)} -> ${buildSide(products)}`;
  };

  const symbolToolbar = ['₂', '₃', '₄', '₅', '₆', '(', ')', '[', ']'];
  const quickElementToolbar = ['P', 'N', 'O', 'H', 'NO₂', 'P₂O₅', 'NH₃', 'HNO₃', 'Cu', 'Fe', 'Mg', 'Ag', 'Al', 'K', 'Na', 'Ca'];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      
      {/* 1. Task Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 text-white">
              Вариант №{task.id}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              {task.subtopicTitle}
            </span>
            <DifficultyBadge difficulty={task.difficulty} />
            <span className="text-xs text-slate-400">
              Написание реакции • {task.maxScore} б.
            </span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-2">
            {task.title}
          </h2>
        </div>

        {/* Header Right: Quick Variant Arrows */}
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
          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Режим Экзамена: Подсказки отключены, разбор доступен после проверки.</span>
        </div>
      )}

      {/* 2. Task Prompt Box */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-500/10 border border-amber-200/60 rounded-xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-500 text-white shrink-0 mt-0.5">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              Задание: Напишите полное уравнение химической реакции
            </span>
            <p className="text-base font-bold text-slate-900 leading-relaxed">
              {task.taskPrompt}
            </p>
            {task.condition && (
              <p className="text-xs font-medium text-amber-900 flex items-center gap-1.5 pt-0.5">
                <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Условия реакции: <strong>{task.condition}</strong></span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 3. Interactive Chemical Reaction Constructor */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-6">
        
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Конструктор формул и коэффициентов реакции:</span>
          </h3>
          <button
            onClick={() => setShowKeyboard((prev) => !prev)}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
          >
            <Keyboard className="w-4 h-4 text-amber-500" />
            <span>{showKeyboard ? 'Скрыть палитру' : 'Химическая палитра'}</span>
          </button>
        </div>

        {/* 3A. Reactants & Products Slot Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Left Column: Reactants */}
          <div className="lg:col-span-5 space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Исходные вещества (Реагенты)
              </span>
              <button
                onClick={handleAddReactant}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Добавить</span>
              </button>
            </div>

            <div className="space-y-2">
              {reactants.map((r, idx) => {
                const isErr = mode === 'practice' && submitted && evalErrors.reactants[idx];
                const isDisabled = submitted && mode === 'exam';

                return (
                  <div key={r.id} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-sm font-bold text-slate-400">+</span>}
                    
                    {/* Coef Input */}
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="коэф."
                      value={r.coef}
                      disabled={isDisabled}
                      onFocus={() => (focusedInputRef.current = { type: 'reactant', index: idx, field: 'coef' })}
                      onChange={(e) => handleSlotChange('reactant', idx, 'coef', e.target.value)}
                      className={`w-14 h-10 text-center font-bold text-sm rounded-lg border transition focus:outline-none focus:ring-2 ${
                        isErr
                          ? 'bg-rose-50 border-rose-400 text-rose-900 ring-rose-200'
                          : isDisabled
                          ? 'bg-slate-100 border-slate-200 text-slate-700 cursor-not-allowed'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />

                    {/* Formula Input */}
                    <input
                      type="text"
                      placeholder="Формула (напр. P, NO2)"
                      value={r.formula}
                      disabled={isDisabled}
                      onFocus={() => (focusedInputRef.current = { type: 'reactant', index: idx, field: 'formula' })}
                      onChange={(e) => handleSlotChange('reactant', idx, 'formula', e.target.value)}
                      className={`flex-1 h-10 px-3 font-semibold text-sm rounded-lg border transition focus:outline-none focus:ring-2 ${
                        isErr
                          ? 'bg-rose-50 border-rose-400 text-rose-900 ring-rose-200'
                          : isDisabled
                          ? 'bg-slate-100 border-slate-200 text-slate-700 cursor-not-allowed'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />

                    {reactants.length > 1 && !isDisabled && (
                      <button
                        onClick={() => handleRemoveReactant(idx)}
                        className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Удалить слот"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Middle Column: Reaction Arrow */}
          <div className="lg:col-span-2 flex justify-center items-center py-2">
            <div className="p-3 bg-amber-500 text-white rounded-full shadow-md">
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </div>
          </div>

          {/* Right Column: Products */}
          <div className="lg:col-span-5 space-y-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Продукты реакции
              </span>
              {!(submitted && mode === 'exam') && (
                <button
                  onClick={handleAddProduct}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Добавить</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              {products.map((p, idx) => {
                const isErr = mode === 'practice' && submitted && evalErrors.products[idx];
                const isDisabled = submitted && mode === 'exam';

                return (
                  <div key={p.id} className="flex items-center gap-2">
                    {idx > 0 && <span className="text-sm font-bold text-slate-400">+</span>}
                    
                    {/* Coef Input */}
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="коэф."
                      value={p.coef}
                      disabled={isDisabled}
                      onFocus={() => (focusedInputRef.current = { type: 'product', index: idx, field: 'coef' })}
                      onChange={(e) => handleSlotChange('product', idx, 'coef', e.target.value)}
                      className={`w-14 h-10 text-center font-bold text-sm rounded-lg border transition focus:outline-none focus:ring-2 ${
                        isErr
                          ? 'bg-rose-50 border-rose-400 text-rose-900 ring-rose-200'
                          : isDisabled
                          ? 'bg-slate-100 border-slate-200 text-slate-700 cursor-not-allowed'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />

                    {/* Formula Input */}
                    <input
                      type="text"
                      placeholder="Формула (напр. N2, P2O5)"
                      value={p.formula}
                      disabled={isDisabled}
                      onFocus={() => (focusedInputRef.current = { type: 'product', index: idx, field: 'formula' })}
                      onChange={(e) => handleSlotChange('product', idx, 'formula', e.target.value)}
                      className={`flex-1 h-10 px-3 font-semibold text-sm rounded-lg border transition focus:outline-none focus:ring-2 ${
                        isErr
                          ? 'bg-rose-50 border-rose-400 text-rose-900 ring-rose-200'
                          : isDisabled
                          ? 'bg-slate-100 border-slate-200 text-slate-700 cursor-not-allowed'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />

                    {products.length > 1 && !isDisabled && (
                      <button
                        onClick={() => handleRemoveProduct(idx)}
                        className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Удалить слот"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 3B. Virtual Chemical Keyboard */}
        {showKeyboard && !(submitted && mode === 'exam') && (
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2.5 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-600">
                Химическая клавиатура (нажмите для вставки в активное поле):
              </span>
            </div>

            {/* Subscripts & Brackets */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 font-semibold mr-1">Индексы и скобки:</span>
              {symbolToolbar.map((s) => (
                <button
                  key={s}
                  onClick={() => handleVirtualInsert(s)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-amber-100 hover:text-amber-900 active:bg-amber-200 text-slate-900 font-bold text-sm transition border border-slate-200 flex items-center justify-center"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Quick Elements */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs text-slate-400 font-semibold mr-1">Элементы и частицы:</span>
              {quickElementToolbar.map((el) => (
                <button
                  key={el}
                  onClick={() => handleVirtualInsert(el)}
                  className="px-2.5 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs transition border border-amber-200 flex items-center justify-center"
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3C. Real-time Live Reaction Preview */}
        <div className="bg-slate-900 text-white rounded-xl p-4 flex items-center justify-center shadow-inner min-h-[56px]">
          <div className="text-xl font-serif tracking-wide text-amber-300 font-bold text-center">
            <ChemFormula formula={formatLiveFormula()} className="text-amber-300 font-bold text-xl" displayMode={false} />
          </div>
        </div>

      </div>

      {/* 4. Submission Feedback Banner & Official Solution Drawer */}
      <TaskSolutionFeedback
        isSubmitted={submitted}
        score={score}
        maxScore={task.maxScore}
        showSolution={showSolution}
        mode={mode}
        solutionTitle="Правильное уравнение и его химический разбор:"
        customFeedbackText={
          mode === 'exam'
            ? score === task.maxScore
              ? 'Отлично! Уравнение реакции составлено и сбалансировано абсолютно верно.'
              : 'Ответ зафиксирован. Вы можете просмотреть разбор по кнопке ниже.'
            : score === task.maxScore
            ? 'Отлично! Уравнение реакции составлено и сбалансировано абсолютно верно.'
            : 'В уравнении есть ошибки в формулах или коэффициентах. Проверьте подсвеченные красным поля.'
        }
      >
        <div className="space-y-3">
          <div>
            <span className="text-xs text-slate-400 block mb-1">Уравнение реакции:</span>
            <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 text-amber-300 font-serif text-lg">
              <ChemFormula math={task.katexEquation || task.balancedEquation} className="text-amber-300 font-bold" />
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-400 block mb-1">Химические особенности и механизм:</span>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {task.explanation}
            </p>
          </div>
        </div>
      </TaskSolutionFeedback>

      {/* 5. Action Control Buttons Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleSubmit}
            disabled={submitted && mode === 'exam'}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 active:from-amber-600 text-slate-950 font-extrabold text-sm transition shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{submitted && mode === 'exam' ? 'Ответ зафиксирован' : 'Проверить решение'}</span>
          </button>

          <button
            onClick={handleReset}
            disabled={submitted && mode === 'exam'}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
            title="Сбросить введенные данные"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {mode === 'practice' && (
            <button
              onClick={() => setShowReactantHint((prev) => !prev)}
              className="px-3 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs transition border border-amber-200 flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>{showReactantHint ? 'Скрыть реагенты' : 'Подсказка: Реагенты'}</span>
            </button>
          )}

          {task.hint && mode === 'practice' && (
            <button
              onClick={toggleHint}
              className="px-3 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-xs transition border border-amber-200 flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>{showHint ? 'Скрыть подсказку' : 'Подсказка по реакции'}</span>
            </button>
          )}

          {(mode === 'practice' || submitted) && (
            <button
              onClick={toggleSolution}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>{showSolution ? 'Скрыть разбор' : 'Показать разбор'}</span>
            </button>
          )}
        </div>
      </div>

      {/* 6. Reactants Hint Box */}
      {showReactantHint && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 animate-fade-in space-y-1">
          <span className="text-xs font-bold text-amber-900 uppercase block">
            Подсказка: Исходные вещества (Реагенты) реакции:
          </span>
          <div className="text-base font-serif font-bold text-amber-950">
            <ChemFormula formula={task.reactants.map((r) => r.formula).join(' + ')} />
          </div>
        </div>
      )}

      {/* 7. General Hint Box */}
      {showHint && task.hint && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 animate-fade-in space-y-1">
          <span className="text-xs font-bold text-amber-900 uppercase block">
            Подсказка по протеканию реакции:
          </span>
          <p className="text-sm font-medium text-amber-900 leading-relaxed">
            {task.hint}
          </p>
        </div>
      )}

      {/* 8. Bottom Navigation Bar */}
      <TaskNavigationBar
        onPrevTask={onPrevTask}
        onNextTask={onNextTask}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />

    </div>
  );
};
