import React from 'react';
import { BookOpen } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

interface TopicNavGridProps {
  /** Array of navigation section items */
  navItems: NavItem[];
  /** ID of currently active section */
  activeSection: string;
  /** Handler when user selects section */
  onSelectSection: (id: string) => void;
  /** Custom title for TOC header */
  title?: string;
  className?: string;
}

/**
 * Reusable Table of Contents (TOC) navigation grid for study topic headers.
 */
export const TopicNavGrid: React.FC<TopicNavGridProps> = ({
  navItems,
  activeSection,
  onSelectSection,
  title = 'Содержание раздела',
  className = '',
}) => {
  return (
    <div id="nav-toc" className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3.5 scroll-mt-6 ${className}`}>
      <div className="flex items-center justify-between text-slate-900 border-b border-slate-100 pb-2">
        <span className="flex items-center gap-2 font-bold text-sm sm:text-base">
          <BookOpen className="w-4 h-4 text-slate-700" />
          <span>{title}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onSelectSection(item.id);
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-left transition border cursor-pointer ${
              activeSection === item.id
                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
