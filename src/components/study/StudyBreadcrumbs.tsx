import React from 'react';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { useRouter } from '../../routes/router';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

interface Props {
  items: BreadcrumbItem[];
}

export const StudyBreadcrumbs: React.FC<Props> = ({ items }) => {
  const { goHome, openStudyBlock } = useRouter();

  return (
    <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 py-3 px-4 bg-slate-100/80 rounded-2xl border border-slate-200/80 mb-6 overflow-x-auto no-scrollbar">
      <button
        onClick={goHome}
        className="flex items-center gap-1 hover:text-amber-700 transition shrink-0"
        title="На главную"
      >
        <Home className="w-3.5 h-3.5 text-slate-400" />
        <span>Главная</span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

      <button
        onClick={() => openStudyBlock()}
        className="flex items-center gap-1 hover:text-amber-700 transition shrink-0"
      >
        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
        <span>Блоки для изучения</span>
      </button>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {item.active || !item.onClick ? (
            <span className="text-slate-900 font-extrabold truncate max-w-[200px] sm:max-w-xs">
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="hover:text-amber-700 transition truncate max-w-[180px] sm:max-w-xs"
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
