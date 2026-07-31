import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface TaskNavigationProps {
  onPrevTask: () => void;
  onNextTask: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  className?: string;
  nextButtonSubContent?: React.ReactNode;
}

/**
 * Compact navigation arrow buttons for card headers.
 * Provides consistent tooltips, accessibility, and disabled state styling.
 */
export const CompactTaskNavigation: React.FC<TaskNavigationProps> = ({
  onPrevTask,
  onNextTask,
  hasPrev,
  hasNext,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={onPrevTask}
        disabled={!hasPrev}
        className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        title="Предыдущее задание"
        aria-label="Предыдущее задание"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={onNextTask}
        disabled={!hasNext}
        className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        title="Следующее задание"
        aria-label="Следующее задание"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

/**
 * Full task navigation bar for the bottom of task adapter cards.
 * Ensures strict DRY & SOLID design across all trainer views.
 */
export const TaskNavigationBar: React.FC<TaskNavigationProps> = ({
  onPrevTask,
  onNextTask,
  hasPrev,
  hasNext,
  className = '',
  nextButtonSubContent
}) => {
  return (
    <div className={`flex items-center justify-between pt-4 border-t border-slate-200/80 ${className}`}>
      <button
        type="button"
        onClick={onPrevTask}
        disabled={!hasPrev}
        className="px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        title="Перейти к предыдущему заданию"
      >
        <ArrowLeft className="w-4 h-4 text-slate-600" />
        <span>Предыдущее задание</span>
      </button>

      <div className="flex items-center gap-2">
        {nextButtonSubContent}
        <button
          type="button"
          onClick={onNextTask}
          disabled={!hasNext}
          className="px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition cursor-pointer bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
          title="Перейти к следующим заданиям"
        >
          <span>Следующее задание</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>
    </div>
  );
};
