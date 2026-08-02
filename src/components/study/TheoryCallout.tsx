import React from 'react';
import { Lightbulb, type LucideIcon } from 'lucide-react';

interface TheoryCalloutProps {
  /** Title of the callout box */
  title: React.ReactNode;
  /** Content / text / description inside callout */
  children: React.ReactNode;
  /** Optional icon, defaults to Lightbulb */
  icon?: LucideIcon;
  /** Custom icon color class, defaults to text-amber-600 */
  iconColor?: string;
  /** Additional container class */
  className?: string;
}

/**
 * Reusable amber left-bordered callout box for interesting facts, key ideas, and alerts.
 */
export const TheoryCallout: React.FC<TheoryCalloutProps> = ({
  title,
  children,
  icon: Icon = Lightbulb,
  iconColor = 'text-amber-600',
  className = '',
}) => {
  return (
    <div className={`p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2 shadow-2xs ${className}`}>
      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
        <Icon className={`w-5 h-5 shrink-0 ${iconColor}`} />
        <span>{title}</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pl-7">
        {children}
      </div>
    </div>
  );
};
