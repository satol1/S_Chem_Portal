import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface DarkBlockCardProps {
  /** Optional header title */
  title?: React.ReactNode;
  /** Optional subtitle or badge tag */
  subtitle?: string;
  /** Optional header icon */
  icon?: LucideIcon;
  /** Inner content of the dark block */
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable dark card container (bg-slate-900 border-slate-800) for industrial chemistry & process notes.
 */
export const DarkBlockCard: React.FC<DarkBlockCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  children,
  className = '',
}) => {
  return (
    <div className={`p-5 sm:p-6 rounded-xl bg-slate-900 text-white space-y-3.5 text-xs sm:text-sm border border-slate-800 ${className}`}>
      {(title || subtitle) && (
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h3 className="font-semibold text-white text-base flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4 text-amber-400 shrink-0" />}
            <span>{title}</span>
          </h3>
          {subtitle && <span className="text-xs font-mono text-slate-400">{subtitle}</span>}
        </div>
      )}
      {children}
    </div>
  );
};
