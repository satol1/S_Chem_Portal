import React from 'react';
import { ArrowLeft, Award, CheckCircle2, RotateCcw } from 'lucide-react';

interface TrainerHeaderProps {
  badgeText: string;
  moduleCategoryText: string;
  title: string;
  totalScore: number;
  maxPossibleScore: number;
  solvedCount: number;
  totalTaskCount: number;
  mode: 'practice' | 'exam';
  onModeChange: (mode: 'practice' | 'exam') => void;
  onResetProgress: () => void;
  onBackToCatalog?: () => void;
}

export const TrainerHeader: React.FC<TrainerHeaderProps> = ({
  badgeText,
  moduleCategoryText,
  title,
  totalScore,
  maxPossibleScore,
  solvedCount,
  totalTaskCount,
  mode,
  onModeChange,
  onResetProgress,
  onBackToCatalog,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
      
      {/* Left Title Group */}
      <div className="flex items-center gap-3">
        {onBackToCatalog && (
          <button
            onClick={onBackToCatalog}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            title="К каталогу тренажеров"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
              {badgeText}
            </span>
            <span className="text-xs text-slate-500 font-medium">{moduleCategoryText}</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            {title}
          </h1>
        </div>
      </div>

      {/* Right Controls & Stats Group */}
      <div className="flex flex-wrap items-center gap-3">
        
        {/* Score & Progress Badge */}
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold text-slate-700">
              Баллы: <strong className="text-slate-900 text-sm">{totalScore}</strong> / {maxPossibleScore}
            </span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-slate-700">
              Решено: <strong className="text-slate-900 text-sm">{solvedCount}</strong> / {totalTaskCount}
            </span>
          </div>
        </div>

        {/* Practice / Exam Switcher */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => onModeChange('practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              mode === 'practice' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎓 Тренировка
          </button>
          <button
            onClick={() => onModeChange('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              mode === 'exam' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⏱️ Экзамен
          </button>
        </div>

        {/* Reset Progress */}
        <button
          onClick={onResetProgress}
          className="p-2.5 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition"
          title="Сбросить прогресс"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
