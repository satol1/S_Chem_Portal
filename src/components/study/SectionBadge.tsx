import React from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface SectionBadgeProps {
  /** Optional custom Lucide icon component, defaults to ArrowRight */
  icon?: LucideIcon;
  /** Additional container classes */
  className?: string;
  /** Additional icon classes */
  iconClassName?: string;
}

/**
 * Reusable Section Icon Badge for theory and study topic headers.
 */
export const SectionBadge: React.FC<SectionBadgeProps> = ({
  icon: Icon = ArrowRight,
  className = '',
  iconClassName = 'w-4 h-4',
}) => {
  return (
    <div className={`w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 ${className}`}>
      <Icon className={iconClassName} />
    </div>
  );
};
