import React, { useState } from 'react';

interface TermTooltipProps {
  /** Слово или термин, отображаемый в тексте */
  term: React.ReactNode;
  /** Краткая научная расшифровка/определение термина */
  definition: React.ReactNode;
  /** Кастомные CSS-классы для обертки слова */
  className?: string;
  /** Положение тултипа: сверху (по умолчанию) или снизу */
  position?: 'top' | 'bottom';
}

/**
 * Переиспользуемый компонент для научных терминов.
 * При наведении слово становится бледнее, появляется плашка с расшифровкой.
 */
export const TermTooltip: React.FC<TermTooltipProps> = ({
  term,
  definition,
  className = '',
  position = 'top',
}) => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <span className="relative inline-block group cursor-help">
      <span
        onClick={() => setIsOpenMobile((prev) => !prev)}
        className={`border-b border-dashed border-current/40 transition-opacity duration-200 hover:opacity-60 ${className}`}
      >
        {term}
      </span>

      <span
        className={`
          absolute left-1/2 -translate-x-1/2 w-64 p-2.5 
          bg-slate-900/95 backdrop-blur-md text-white text-xs font-sans font-normal leading-relaxed 
          rounded-xl shadow-2xl border border-slate-700/80 z-40 
          pointer-events-none transition-all duration-200 
          ${isOpenMobile ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto'}
          ${
            position === 'top'
              ? 'bottom-full mb-2 after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-slate-900/95'
              : 'top-full mt-2 after:content-[""] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-slate-900/95'
          }
        `}
      >
        <span className="block font-semibold text-amber-400 mb-0.5 border-b border-slate-800 pb-1">
          {typeof term === 'string' ? term : 'Научный термин'}
        </span>
        <span className="block text-slate-200">{definition}</span>
      </span>
    </span>
  );
};
