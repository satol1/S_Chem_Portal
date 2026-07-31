import React from 'react';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export interface TaskSolutionFeedbackProps {
  isSubmitted: boolean;
  score: number;
  maxScore: number;
  showSolution: boolean;
  onToggleSolution?: () => void;
  mode: 'practice' | 'exam';
  customFeedbackText?: string;
  solutionTitle?: string;
  children?: React.ReactNode;
}

export const TaskSolutionFeedback: React.FC<TaskSolutionFeedbackProps> = ({
  isSubmitted,
  score,
  maxScore,
  showSolution,
  customFeedbackText,
  solutionTitle = 'Правильное решение и его химический разбор:',
  children,
}) => {
  const isFullScore = score === maxScore;
  const isPartialScore = score > 0 && score < maxScore;

  const defaultFeedbackText = isFullScore
    ? 'Отлично! Задание выполнено полностью верно.'
    : isPartialScore
    ? 'Частично верно. Проверьте введенные значения или коэффициенты.'
    : 'Есть ошибки. Сверьте расстановку коэффициентов и ответы.';

  return (
    <div className="space-y-4 mt-4">
      {/* Submission Feedback Banner */}
      {isSubmitted && (
        <div
          className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition ${
            isFullScore
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
              : isPartialScore
              ? 'bg-amber-50 border-amber-300 text-amber-900'
              : 'bg-rose-50 border-rose-300 text-rose-900'
          }`}
        >
          <div className="flex items-center gap-3">
            {isFullScore ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            )}
            <div>
              <p className="font-extrabold text-sm">
                Результат проверки: {score} из {maxScore} баллов
              </p>
              <p className="text-xs opacity-90 mt-0.5">
                {customFeedbackText || defaultFeedbackText}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Official Solution Key Drawer */}
      {showSolution && children && (
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fade-in">
          <h3 className="text-sm font-bold text-amber-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>{solutionTitle}</span>
          </h3>
          {children}
        </div>
      )}
    </div>
  );
};
