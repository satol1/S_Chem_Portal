import React from 'react';

export type DifficultyLevel = 'Легкий' | 'Средний' | 'Сложный' | 'ЕГЭ Высокий';

interface DifficultyBadgeProps {
  difficulty?: DifficultyLevel | string;
  className?: string;
}

/**
 * Centralized difficulty level color resolver.
 * Follows DRY & SOLID principles for all chemical portal trainers.
 */
export function getDifficultyColorClass(difficulty?: string): string {
  switch (difficulty) {
    case 'Легкий':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'Средний':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'Сложный':
      return 'bg-rose-100 text-rose-800 border-rose-200';
    case 'ЕГЭ Высокий':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className = '' }) => {
  if (!difficulty) return null;

  const colorClass = getDifficultyColorClass(difficulty);

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${colorClass} ${className}`}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
