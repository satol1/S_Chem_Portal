import React from 'react';
import { Trophy, Award, Users, GraduationCap } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: '20+ лет',
      label: 'Опыта вузовского преподавания',
      subtext: 'АГУ им. В. Н. Татищева'
    },
    {
      icon: Trophy,
      value: '86.4',
      label: 'Средний балл ЕГЭ учеников',
      subtext: 'Флагманская подготовка'
    },
    {
      icon: Users,
      value: '92%',
      label: 'Поступление на бюджет',
      subtext: 'Сеченова, Пирогова, РХТУ, АГМУ'
    },
    {
      icon: GraduationCap,
      value: '4-6',
      label: 'Человек в мини-группах',
      subtext: 'Персональное внимание'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-200">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
