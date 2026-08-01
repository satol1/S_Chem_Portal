import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useRouter } from '../../routes/router';
import { getElementTopicLink } from '../../services/periodicTable/elementStudyService';

interface ElementTopicButtonProps {
  atomicNumber: number;
  onNavigate?: () => void;
  className?: string;
  variant?: 'compact' | 'banner';
}

export const ElementTopicButton: React.FC<ElementTopicButtonProps> = ({
  atomicNumber,
  onNavigate,
  className = '',
  variant = 'compact',
}) => {
  const { openStudyBlock } = useRouter();
  const topicLink = getElementTopicLink(atomicNumber);

  if (!topicLink) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onNavigate) onNavigate();
    openStudyBlock(topicLink.blockId, topicLink.topicId);
  };

  if (variant === 'compact') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-amber-200 font-bold text-xs transition cursor-pointer group shadow-sm ${className}`}
        title={`Перейти к теме: ${topicLink.topicTitle}`}
      >
        <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate max-w-[240px]">
          {topicLink.shortTitle}
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
      </button>
    );
  }

  return (
    <div className={`p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/40 flex items-center justify-between gap-3 shadow-md ${className}`}>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4 text-amber-400" />
        </div>
        <div className="min-w-0">
          <span className="block text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">
            Обучающая тема курса
          </span>
          <h5 className="text-xs font-bold text-white truncate">
            {topicLink.topicTitle}
          </h5>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-1 shrink-0 cursor-pointer shadow-sm group"
      >
        <span>Перейти</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};
