import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToNavButtonProps {
  /** Click handler to scroll to navigation / TOC */
  onClick: () => void;
  /** Optional custom title tooltip */
  title?: string;
  className?: string;
}

/**
 * Reusable 'Return to Contents' ArrowUp button for section headers.
 */
export const ScrollToNavButton: React.FC<ScrollToNavButtonProps> = ({
  onClick,
  title = 'К содержанию',
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition shrink-0 cursor-pointer ${className}`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
