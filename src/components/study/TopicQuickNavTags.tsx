import React from 'react';
import { type LucideIcon } from 'lucide-react';

export interface QuickNavTag {
  /** Target HTML section ID to scroll to e.g. "allotropes" */
  targetId: string;
  /** Display label text e.g. "Аллотропия C и Si" */
  label: string;
  /** Lucide Icon component */
  icon: LucideIcon;
}

interface TopicQuickNavTagsProps {
  /** Array of quick navigation tag items */
  tags: QuickNavTag[];
  className?: string;
}

/**
 * Reusable header quick navigation tags for study topic headers.
 * Clicking a tag smoothly scrolls to the target section ID.
 */
export const TopicQuickNavTags: React.FC<TopicQuickNavTagsProps> = ({
  tags,
  className = '',
}) => {
  const handleScroll = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-4 sm:gap-5 ${className}`}>
      {tags.map((tag) => {
        const Icon = tag.icon;
        return (
          <button
            key={tag.targetId}
            onClick={() => handleScroll(tag.targetId)}
            className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium hover:opacity-70 transition-opacity cursor-pointer text-left bg-transparent border-0 p-0"
            title={`Перейти к разделу: ${tag.label}`}
          >
            <Icon className="w-4 h-4 text-slate-700 shrink-0" />
            <span>{tag.label}</span>
          </button>
        );
      })}
    </div>
  );
};
