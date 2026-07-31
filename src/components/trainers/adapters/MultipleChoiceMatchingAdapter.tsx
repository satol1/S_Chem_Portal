import React, { useState, useEffect } from 'react';
import type { MultipleChoiceMatchingTask } from '../../../types/trainer';
import type { TaskProgressStatus } from '../../../services/trainerStorage';
import { ChemFormula } from '../../scientific/ChemFormula';
import { ChemText } from '../../scientific/ChemText';
import { TaskSolutionFeedback } from '../../../core/trainer/components/TaskSolutionFeedback';
import { DifficultyBadge } from '../common/DifficultyBadge';
import { HelpCircle, CheckCircle2, RotateCcw, Lightbulb, BookOpen } from 'lucide-react';
import { CompactTaskNavigation, TaskNavigationBar } from '../common/TaskNavigation';

interface MultipleChoiceMatchingAdapterProps {
  task: MultipleChoiceMatchingTask;
  mode: 'practice' | 'exam';
  initialStatus?: TaskProgressStatus;
  onSaveProgress: (solved: boolean, score: number, details?: unknown) => void;
  onPrevTask: () => void;
  onNextTask: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const MultipleChoiceMatchingAdapter: React.FC<MultipleChoiceMatchingAdapterProps> = ({
  task,
  mode,
  initialStatus,
  onSaveProgress,
  onPrevTask,
  onNextTask,
  hasPrev,
  hasNext,
}) => {
  // State for user input
  const [selectedTwo, setSelectedTwo] = useState<number[]>([]);
  const [selectedX, setSelectedX] = useState<number | null>(null);
  const [selectedY, setSelectedY] = useState<number | null>(null);
  const [matchingAnswers, setMatchingAnswers] = useState<(number | null)[]>([null, null, null, null]);

  // Validation & UI State
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [earnedScore, setEarnedScore] = useState<number>(0);

  // Restore saved state when task changes or mounts
  useEffect(() => {
    setShowHint(false);
    setShowSolution(false);
    
    if (initialStatus && initialStatus.details) {
      const details = initialStatus.details as {
        selectedTwo?: number[];
        selectedX?: number;
        selectedY?: number;
        matchingAnswers?: number[];
      };
      if (details.selectedTwo) setSelectedTwo(details.selectedTwo);
      if (details.selectedX !== undefined) setSelectedX(details.selectedX);
      if (details.selectedY !== undefined) setSelectedY(details.selectedY);
      if (details.matchingAnswers) setMatchingAnswers(details.matchingAnswers);
      
      setIsSubmitted(true);
      setEarnedScore(initialStatus.score);
    } else {
      setSelectedTwo([]);
      setSelectedX(null);
      setSelectedY(null);
      setMatchingAnswers([null, null, null, null]);
      setIsSubmitted(false);
      setEarnedScore(0);
    }
  }, [task.id, initialStatus]);

  // Toggle selection for select-two
  const handleToggleSelectTwo = (optionId: number) => {
    if (isSubmitted) return;
    if (selectedTwo.includes(optionId)) {
      setSelectedTwo(selectedTwo.filter((id) => id !== optionId));
    } else {
      if (selectedTwo.length < 2) {
        setSelectedTwo([...selectedTwo, optionId].sort((a, b) => a - b));
      }
    }
  };

  // Check user answer
  const handleSubmit = () => {
    if (isSubmitted && mode === 'exam') return;
    let score = 0;
    let solved = false;

    if (task.taskType === 'select-two') {
      const correct = task.correctSelectTwo || [];
      const userSorted = [...selectedTwo].sort((a, b) => a - b);
      const correctSorted = [...correct].sort((a, b) => a - b);
      
      const isExact = userSorted.length === 2 && userSorted[0] === correctSorted[0] && userSorted[1] === correctSorted[1];
      const matchCount = userSorted.filter((val) => correctSorted.includes(val)).length;

      if (isExact) {
        score = 2;
        solved = true;
      } else if (matchCount === 1) {
        score = 1;
        solved = false;
      } else {
        score = 0;
        solved = false;
      }
      onSaveProgress(solved, score, { selectedTwo: userSorted });
    } else if (task.taskType === 'transformation-chain') {
      const isXCorrect = selectedX === task.correctX;
      const isYCorrect = selectedY === task.correctY;

      if (isXCorrect && isYCorrect) {
        score = 2;
        solved = true;
      } else if (isXCorrect || isYCorrect) {
        score = 1;
        solved = false;
      } else {
        score = 0;
        solved = false;
      }
      onSaveProgress(solved, score, { selectedX, selectedY });
    } else if (task.taskType === 'matching') {
      const correct = task.correctMatching || [];
      let correctCount = 0;
      matchingAnswers.forEach((ans, idx) => {
        if (ans === correct[idx]) correctCount++;
      });

      if (correctCount === 4) {
        score = 2;
        solved = true;
      } else if (correctCount === 3) {
        score = 1;
        solved = false;
      } else {
        score = 0;
        solved = false;
      }
      onSaveProgress(solved, score, { matchingAnswers });
    }

    setIsSubmitted(true);
    setEarnedScore(score);
    if (mode === 'practice') {
      setShowSolution(true);
    }
  };

  // Reset answer
  const handleReset = () => {
    if (isSubmitted && mode === 'exam') return;
    setSelectedTwo([]);
    setSelectedX(null);
    setSelectedY(null);
    setMatchingAnswers([null, null, null, null]);
    setIsSubmitted(false);
    setShowSolution(false);
    setEarnedScore(0);
  };

  const isFormComplete = () => {
    if (task.taskType === 'select-two') return selectedTwo.length === 2;
    if (task.taskType === 'transformation-chain') return selectedX !== null && selectedY !== null;
    if (task.taskType === 'matching') return matchingAnswers.every((a) => a !== null);
    return false;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40 p-6 md:p-8 space-y-6 animate-fade-in">
      
      {/* 1. Header & Task Description */}
      <div className="space-y-4 pb-4 border-b border-slate-100">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-50 text-amber-700 font-semibold text-xs rounded-full border border-amber-200">
              {task.taskType === 'select-two' && 'Выбор 2 элементов'}
              {task.taskType === 'transformation-chain' && 'Цепочка превращений X → Y'}
              {task.taskType === 'matching' && 'Установление соответствия (А-Г)'}
            </span>
            {task.difficulty && <DifficultyBadge difficulty={task.difficulty} />}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              Макс. балл: {task.maxScore}
            </span>
            <CompactTaskNavigation
              onPrevTask={onPrevTask}
              onNextTask={onNextTask}
              hasPrev={hasPrev}
              hasNext={hasNext}
            />
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {task.title}
        </h3>

        <div className="text-slate-700 text-sm md:text-base leading-relaxed">
          <ChemText text={task.taskPrompt} />
        </div>

        {/* Scheme Formula if present */}
        {task.schemeFormula && (
          <div className="my-4 p-4 bg-slate-900 rounded-xl text-center text-amber-300 shadow-inner overflow-x-auto">
            <ChemFormula math={task.schemeFormula} displayMode className="text-lg md:text-xl text-amber-300" />
          </div>
        )}
      </div>

      {/* 2. Interactive Input Forms */}

      {/* TYPE A: SELECT TWO */}
      {task.taskType === 'select-two' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Выберите 2 правильных ответа:</span>
            <span className="text-amber-600 font-bold">Выбрано: {selectedTwo.length} из 2</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {task.options.map((opt) => {
              const isSelected = selectedTwo.includes(opt.id);
              const isCorrectOption = isSubmitted && task.correctSelectTwo?.includes(opt.id);
              const isWrongSelection = isSubmitted && isSelected && !task.correctSelectTwo?.includes(opt.id);

              let cardBg = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
              if (isSelected) cardBg = 'bg-amber-50 border-amber-500 text-amber-950 shadow-md shadow-amber-500/10';
              if (isSubmitted && mode === 'practice') {
                if (isCorrectOption) cardBg = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium';
                else if (isWrongSelection) cardBg = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleToggleSelectTwo(opt.id)}
                  disabled={isSubmitted}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left cursor-pointer disabled:cursor-not-allowed ${cardBg}`}
                >
                  <span className={`w-8 h-8 rounded-lg font-bold text-sm flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="flex-grow font-medium">
                    <ChemText text={opt.text} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* TYPE B: TRANSFORMATION CHAIN (X & Y) */}
      {task.taskType === 'transformation-chain' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Selector X */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-bold flex items-center justify-center text-xs">X</span>
                  Вещество X:
                </span>
                {isSubmitted && mode === 'practice' && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    selectedX === task.correctX ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {selectedX === task.correctX ? 'Верно' : `Эталон: ${task.correctX}`}
                  </span>
                )}
              </div>
              <select
                value={selectedX ?? ''}
                onChange={(e) => setSelectedX(e.target.value ? Number(e.target.value) : null)}
                disabled={isSubmitted}
                className="w-full p-3 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="">-- Выберите вещество X --</option>
                {task.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.id}. {opt.text}
                  </option>
                ))}
              </select>
            </div>

            {/* Selector Y */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-bold flex items-center justify-center text-xs">Y</span>
                  Вещество Y:
                </span>
                {isSubmitted && mode === 'practice' && (
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                    selectedY === task.correctY ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    {selectedY === task.correctY ? 'Верно' : `Эталон: ${task.correctY}`}
                  </span>
                )}
              </div>
              <select
                value={selectedY ?? ''}
                onChange={(e) => setSelectedY(e.target.value ? Number(e.target.value) : null)}
                disabled={isSubmitted}
                className="w-full p-3 rounded-lg border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="">-- Выберите вещество Y --</option>
                {task.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.id}. {opt.text}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Options Reference List */}
          <div className="p-4 bg-slate-100/70 rounded-xl space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Перечень веществ:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {task.options.map((opt) => (
                <div key={opt.id} className="text-xs font-medium bg-white p-2.5 rounded-lg border border-slate-200 flex items-center gap-2">
                  <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{opt.id}</span>
                  <ChemText text={opt.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TYPE C: MATCHING (А, Б, В, Г) */}
      {task.taskType === 'matching' && (
        <div className="space-y-6">
          
          {/* Options Reference Table */}
          <div className="p-4 bg-slate-900 rounded-xl text-slate-100 space-y-3 shadow-inner">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Продукты реакции / Вещества (варианты 1-6):</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {task.options.map((opt) => (
                <div key={opt.id} className="flex items-center gap-2.5 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <span className="w-6 h-6 rounded bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                    {opt.id}
                  </span>
                  <ChemText text={opt.text} className="text-slate-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Matching Grid for A, B, V, G */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Подберите соответствие для каждой позиции:</span>
            
            <div className="space-y-3">
              {(task.matchingLabels || []).map((label, idx) => {
                const currentAns = matchingAnswers[idx];
                const correctAns = task.correctMatching ? task.correctMatching[idx] : null;
                const isMatchCorrect = isSubmitted && currentAns === correctAns;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl border transition-colors ${
                      isSubmitted && mode === 'practice'
                        ? isMatchCorrect
                          ? 'bg-emerald-50 border-emerald-300'
                          : 'bg-rose-50 border-rose-300'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="font-semibold text-slate-800 text-sm md:text-base">
                      <ChemText text={label} />
                    </span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {isSubmitted && mode === 'practice' && (
                        <span className="text-xs font-bold px-2 py-1 rounded">
                          {isMatchCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <span className="text-rose-700 font-medium">Эталон: {correctAns}</span>
                          )}
                        </span>
                      )}

                      <select
                        value={currentAns ?? ''}
                        onChange={(e) => {
                          const val = e.target.value ? Number(e.target.value) : null;
                          const newAns = [...matchingAnswers];
                          newAns[idx] = val;
                          setMatchingAnswers(newAns);
                        }}
                        disabled={isSubmitted}
                        className="w-full sm:w-44 p-2.5 rounded-lg border border-slate-300 bg-white font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-100"
                      >
                        <option value=""> Выбрать (1-6) </option>
                        {task.options.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            №{opt.id}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* 3. Action Buttons (Submit, Reset, Hint, Navigation) */}
      <div className="pt-4 border-t border-slate-100 space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            {task.hint && mode === 'practice' && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
                {showHint ? 'Скрыть подсказку' : 'Подсказка'}
              </button>
            )}

            {isSubmitted && (
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                {showSolution ? 'Скрыть разбор' : 'Показать химический разбор'}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isSubmitted && mode === 'practice' && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Попробовать снова
              </button>
            )}

            <button
              onClick={handleSubmit}
              disabled={!isFormComplete() || (isSubmitted && mode === 'exam')}
              className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-md shadow-amber-400/20 transition-all cursor-pointer"
            >
              {isSubmitted && mode === 'exam' ? 'Ответ зафиксирован' : 'Проверить ответ'}
            </button>
          </div>

        </div>

        {/* Hint Dropdown Box */}
        {showHint && task.hint && mode === 'practice' && (
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs md:text-sm text-amber-900 animate-fade-in flex items-start gap-2.5">
            <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-1 font-semibold text-amber-950">Подсказка к решению:</strong>
              <ChemText text={task.hint} />
            </div>
          </div>
        )}

      </div>

      {/* 4. Solution Feedback & Full Explanation */}
      {isSubmitted && (
        <TaskSolutionFeedback
          isSubmitted={isSubmitted}
          score={earnedScore}
          maxScore={task.maxScore}
          showSolution={showSolution}
          mode={mode}
          customFeedbackText={
            mode === 'exam'
              ? earnedScore === task.maxScore
                ? 'Отлично! Задание выполнено полностью верно.'
                : 'Ответ зафиксирован. Нажмите "Показать химический разбор" для просмотра эталонного решения.'
              : undefined
          }
        >
          <div className="space-y-3 text-xs md:text-sm text-slate-800 leading-relaxed font-medium">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <strong className="font-bold text-amber-900 block mb-1">Правильный ответ:</strong>
              {task.taskType === 'select-two' && (
                <span className="font-bold text-amber-800">
                  Варианты №{task.correctSelectTwo?.join(', №')}
                </span>
              )}
              {task.taskType === 'transformation-chain' && (
                <span className="font-bold text-amber-800">
                  X = {task.correctX} ({task.options.find((o) => o.id === task.correctX)?.text}), Y = {task.correctY} ({task.options.find((o) => o.id === task.correctY)?.text})
                </span>
              )}
              {task.taskType === 'matching' && (
                <span className="font-bold text-amber-800">
                  {task.correctMatching?.join(', ')}
                </span>
              )}
            </div>

            <div className="pt-2">
              <strong className="block mb-1 text-slate-900 font-bold">Подробный химический разбор:</strong>
              <ChemText text={task.explanation} className="text-slate-700" />
            </div>
          </div>
        </TaskSolutionFeedback>
      )}

      {/* 5. Navigation Bar (Prev / Next Task) */}
      <TaskNavigationBar
        onPrevTask={onPrevTask}
        onNextTask={onNextTask}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />

    </div>
  );
};
