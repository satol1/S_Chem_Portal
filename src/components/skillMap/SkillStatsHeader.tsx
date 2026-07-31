import React from 'react';
import { Compass, Award, Layers } from 'lucide-react';
import type { SkillMapStats } from '../../types/skillMap';
import { GradeLevels } from '../../data/skillsData';

interface Props {
  stats: SkillMapStats;
}

export const SkillStatsHeader: React.FC<Props> = ({ stats }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 border border-teal-500/30 p-6 md:p-8 shadow-2xl shadow-teal-500/10 text-white">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* Top title and summary info */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-teal-400 animate-spin-slow" />
              <span>Научная Траектория • ФГОС и Давыдов/Гальперин</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Карта развития умений по химии
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Пошаговая интерактивная траектория освоения ключевых химических компетенций от 8 класса до академического ВУЗа. Основана на принципах деятельностного подхода российской педагогической школы и международных стандартах STEM (NGSS).
            </p>
          </div>

          {/* Quick Stats Widget */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-teal-500/40 p-4 sm:p-5 rounded-2xl shadow-lg shrink-0 backdrop-blur-md">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold shrink-0">
              <Layers className="w-7 h-7" />
            </div>

            <div className="space-y-0.5">
              <span className="text-2xl font-black text-white leading-none block">{stats.total}</span>
              <span className="text-xs font-bold text-teal-300">Ключевых тем и навыков</span>
              <p className="text-[10px] text-slate-400">От 8 класса до ВУЗа</p>
            </div>
          </div>

        </div>

        {/* Grade-by-grade topic counters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4 border-t border-teal-500/20">
          {GradeLevels.map(grade => {
            const count = stats.gradeStats[grade.id] || 0;

            return (
              <div
                key={grade.id}
                className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl hover:border-teal-500/40 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-black text-white">{grade.title}</span>
                    <span className="text-[10px] font-mono font-bold text-teal-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                      {count} тем
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1 mb-1">{grade.subtitle}</p>
                </div>

                <div className="w-full bg-slate-800 rounded-full h-1 overflow-hidden mt-1">
                  <div className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full rounded-full w-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Footnote */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-400" />
            <span>Каждая карточка содержит критерии ФИПИ, алгоритмы решений и интерактивный мини-тест</span>
          </div>
        </div>

      </div>
    </div>
  );
};
