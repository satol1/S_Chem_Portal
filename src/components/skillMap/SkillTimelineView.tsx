import React from 'react';
import { GitCommit } from 'lucide-react';
import type { SkillNode } from '../../types/skillMap';
import { GradeLevels } from '../../data/skillsData';
import { SkillNodeCard } from './SkillNodeCard';

interface Props {
  skills: SkillNode[];
  onSelectSkill: (skillId: string) => void;
  onOpenTrainer?: (topicId: string) => void;
}

export const SkillTimelineView: React.FC<Props> = ({
  skills,
  onSelectSkill,
  onOpenTrainer,
}) => {
  return (
    <div className="space-y-12 py-6">
      {GradeLevels.map(grade => {
        const gradeSkills = skills.filter(s => s.gradeLevel === grade.id);
        if (gradeSkills.length === 0) return null;

        return (
          <div key={grade.id} className="relative pl-6 md:pl-10 border-l-2 border-teal-500/40 space-y-6">
            
            {/* Timeline Grade Node Badge */}
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
              <GitCommit className="w-4 h-4 text-teal-400" />
            </div>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-black uppercase tracking-wider">
                <span>{grade.title}</span>
              </div>
              <p className="text-xs text-slate-400">{grade.subtitle}</p>
            </div>

            {/* Grid of skill cards for this grade */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gradeSkills.map(node => (
                <SkillNodeCard
                  key={node.id}
                  node={node}
                  onSelect={onSelectSkill}
                  onOpenTrainer={onOpenTrainer}
                />
              ))}
            </div>

          </div>
        );
      })}
    </div>
  );
};
