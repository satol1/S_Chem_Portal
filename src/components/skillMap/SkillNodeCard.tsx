import React, { memo } from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import type { SkillNode } from '../../types/skillMap';
import { SKILL_BRANCHES, GradeLevels } from '../../data/skillsData';

interface Props {
  node: SkillNode;
  onSelect: (skillId: string) => void;
  onOpenTrainer?: (topicId: string) => void;
}

export const SkillNodeCard: React.FC<Props> = memo(({
  node,
  onSelect,
  onOpenTrainer,
}) => {
  const branchMeta = SKILL_BRANCHES.find(b => b.id === node.branch);
  const gradeMeta = GradeLevels.find(g => g.id === node.gradeLevel);

  return (
    <div
      onClick={() => onSelect(node.id)}
      className="rounded-2xl p-5 border border-slate-800 bg-slate-900/90 hover:border-teal-500/60 ring-1 ring-slate-800 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/10"
    >
      {/* Subtle top background glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="space-y-3 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[11px] font-extrabold text-teal-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">
              {node.code}
            </span>
            {gradeMeta && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${gradeMeta.badgeColor}`}>
                {gradeMeta.title}
              </span>
            )}
          </div>

          {node.fipiExamTarget && (
            <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded">
              {node.fipiExamTarget}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-base font-extrabold text-white leading-snug group-hover:text-teal-300 transition-colors">
            {node.title}
          </h3>
          <p className="text-xs font-semibold text-teal-400/90 mt-0.5 line-clamp-1">
            {node.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
          {node.description}
        </p>

        {/* Pedagogical Note Badge */}
        {node.pedagogicalNote && (
          <div className="bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl text-[11px] text-slate-300 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{node.pedagogicalNote}</span>
          </div>
        )}

        {/* Competencies Tags */}
        <div className="flex flex-wrap gap-1 pt-1">
          {node.competencies.map((comp, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60"
            >
              #{comp}
            </span>
          ))}
        </div>

      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 relative z-10">
        
        {node.trainerTopicId ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenTrainer?.(node.trainerTopicId!);
            }}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md transition"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Открыть тренажер</span>
          </button>
        ) : (
          <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>{branchMeta?.name || 'Химия'}</span>
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(node.id);
          }}
          className="text-xs font-bold text-teal-300 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ml-auto"
        >
          <span>Детали и Тест</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
});
