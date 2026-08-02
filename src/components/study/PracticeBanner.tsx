import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface PracticeBannerProps {
  /** Handler to navigate to practice */
  onGoToPractice: () => void;
  /** Main title of the banner */
  title?: string;
  /** Subtitle description text */
  description?: string;
  /** Button label */
  buttonText?: string;
  /** Optional topic code e.g. "ХЭ-08" */
  topicCode?: string;
  className?: string;
}

/**
 * Reusable dark action banner at the end of theory topics leading to practice.
 */
export const PracticeBanner: React.FC<PracticeBannerProps> = ({
  onGoToPractice,
  title = 'Закрепите теорию на практике',
  description = 'Перейдите к интерактивному практикуму и решебнику заданий с автопроверкой по критериям ФИПИ.',
  buttonText = 'Перейти к практикуму',
  topicCode,
  className = '',
}) => {
  return (
    <div className={`bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 ${className}`}>
      <div className="space-y-1.5 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-xl">
          {description}
        </p>
      </div>

      <button
        onClick={onGoToPractice}
        className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition shrink-0 flex items-center gap-2 group cursor-pointer"
      >
        <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
        <span>{buttonText}{topicCode ? ` (${topicCode})` : ''}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
