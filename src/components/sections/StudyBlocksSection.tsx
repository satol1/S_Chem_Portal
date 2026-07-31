import React, { useState } from 'react';
import { 
  Atom, Dna, FlaskConical, Trophy, Factory, 
  GraduationCap, BookCheck, ArrowRight, BookOpen, 
  Zap
} from 'lucide-react';
import { STUDY_BLOCKS } from '../../data/studyBlocksData';

import { useRouter } from '../../routes/router';

interface Props {
  onSelectTopic: (blockId: string, topicId: string, trainerId?: string) => void;
  onOpenTrainer?: (trainerId: string) => void;
}

export const StudyBlocksSection: React.FC<Props> = ({ onSelectTopic, onOpenTrainer }) => {
  const [activeBlockId, setActiveBlockId] = useState<string>('elements-chemistry');
  const [filterSubgroup, setFilterSubgroup] = useState<string | null>(null);
  const { goHome } = useRouter();

  const activeBlock = STUDY_BLOCKS.find(b => b.id === activeBlockId) || STUDY_BLOCKS[0];

  // Helper to render dynamically matched Lucide icons
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case 'Atom': return <Atom className={className} />;
      case 'Dna': return <Dna className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Trophy': return <Trophy className={className} />;
      case 'Factory': return <Factory className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'BookCheck': return <BookCheck className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // Get subgroups for current block if any (e.g. Me / neMe)
  const subgroups = Array.from(
    new Set(activeBlock.topics.map(t => t.subgroup).filter(Boolean) as string[])
  );

  const filteredTopics = activeBlock.topics.filter(t => 
    !filterSubgroup || t.subgroup === filterSubgroup
  );

  return (
    <section id="study-blocks" className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden min-h-screen">
      
      {/* Dynamic Glow Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <button
            onClick={goHome}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white text-xs font-bold transition flex items-center gap-2"
          >
            <span>← Назад на главную</span>
          </button>

          <div className="text-right">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Блоки для изучения
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              7 ключевых направлений фундаментальной химии, ОГЭ и ЕГЭ
            </p>
          </div>
        </div>

        {/* Blocks Navigation Tabs (Horizontal Bar) */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {STUDY_BLOCKS.map((block) => {
            const isActive = block.id === activeBlockId;
            return (
              <button
                key={block.id}
                onClick={() => {
                  setActiveBlockId(block.id);
                  setFilterSubgroup(null);
                }}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl font-bold text-xs transition-all shrink-0 border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className={isActive ? 'text-slate-950' : 'text-amber-400'}>
                  {renderIcon(block.iconName, "w-4 h-4")}
                </div>
                <span>{block.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Block Summary Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-800/90 to-slate-900/90 border border-slate-700/80 shadow-2xl mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeBlock.gradient} text-white shadow-lg shrink-0`}>
              {renderIcon(activeBlock.iconName, "w-8 h-8")}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {activeBlock.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">Модуль {activeBlock.title}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {activeBlock.subtitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeBlock.description}
              </p>
            </div>
          </div>

          {/* Subgroup Filters (If Any, e.g., Me / neMe) */}
          {subgroups.length > 0 && (
            <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-700 shrink-0 self-stretch sm:self-auto">
              <button
                onClick={() => setFilterSubgroup(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  filterSubgroup === null ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Все темы ({activeBlock.topics.length})
              </button>
              {subgroups.map(sg => (
                <button
                  key={sg}
                  onClick={() => setFilterSubgroup(sg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    filterSubgroup === sg ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {sg}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700/70 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Topic Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-900 text-amber-400 border border-slate-700">
                    {topic.code}
                  </span>
                  {topic.targetExam && (
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                      {topic.targetExam}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                  {topic.title}
                </h4>

                <p className="text-xs text-amber-400/90 font-medium mb-3">
                  {topic.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {topic.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-700/60">
                <div className="flex items-center gap-2">
                  {/* Primary Action: Read Theory / Practice */}
                  <button
                    onClick={() => onSelectTopic(activeBlock.id, topic.id, topic.trainerId)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Изучить тему</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Direct Trainer Button if Trainer Linked */}
                  {topic.trainerId && onOpenTrainer && (
                    <button
                      onClick={() => onOpenTrainer(topic.trainerId!)}
                      className="py-2.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 text-xs font-bold transition flex items-center gap-1.5 shrink-0"
                      title="Перейти к интерактивному тренажеру"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Тренажер</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudyBlocksSection;
