import React from 'react';
import { Table, BookOpen } from 'lucide-react';
import type { SkillNode } from '../../types/skillMap';
import { GradeLevels, BLOOM_LEVELS_META } from '../../data/skillsData';

interface Props {
  skills: SkillNode[];
  onSelectSkill: (skillId: string) => void;
}

export const SkillMatrixView: React.FC<Props> = ({
  skills,
  onSelectSkill,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 overflow-x-auto shadow-2xl space-y-6">
      
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <Table className="w-5 h-5 text-teal-400" />
        <div>
          <h3 className="text-lg font-black text-white">
            Матрица компетенций: Таксономия Блума × Классы обучения
          </h3>
          <p className="text-xs text-slate-400">
            Систематизация глубины когнитивного освоения химических наук от запоминания базовых формул до научного синтеза.
          </p>
        </div>
      </div>

      <table className="w-full min-w-[900px] border-collapse text-xs text-left">
        <thead>
          <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] font-bold">
            <th className="p-3 w-48">Уровень усвоения (Блум)</th>
            {GradeLevels.map(g => (
              <th key={g.id} className="p-3 text-center">{g.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/80">
          {BLOOM_LEVELS_META.map(bloom => (
            <tr key={bloom.id} className="hover:bg-slate-950/40 transition">
              
              <td className="p-3 font-semibold space-y-0.5">
                <div className="flex items-center gap-1.5 text-teal-300 font-bold">
                  <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-mono text-[10px] flex items-center justify-center border border-teal-500/40">
                    {bloom.num}
                  </span>
                  <span>{bloom.name}</span>
                </div>
                <p className="text-[10px] text-slate-400 font-normal pl-6">{bloom.desc}</p>
              </td>

              {GradeLevels.map(grade => {
                const cellSkills = skills.filter(
                  s => s.bloomLevel === bloom.id && s.gradeLevel === grade.id
                );

                return (
                  <td key={grade.id} className="p-2 align-top text-center">
                    {cellSkills.length > 0 ? (
                      <div className="space-y-1.5">
                        {cellSkills.map(skill => (
                          <button
                            key={skill.id}
                            onClick={() => onSelectSkill(skill.id)}
                            className="w-full p-2 rounded-xl text-left border border-slate-800 bg-slate-950 hover:border-teal-400 text-slate-200 transition flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span className="font-mono text-[9px] font-black text-teal-400">{skill.code}</span>
                              <BookOpen className="w-3 h-3 text-teal-400" />
                            </div>
                            <span className="font-bold text-[11px] line-clamp-1 leading-snug">{skill.title}</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-700 italic">—</span>
                    )}
                  </td>
                );
              })}

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};
