import React, { useState } from 'react';
import { 
  BookOpen, Zap, Filter 
} from 'lucide-react';
import { STUDY_BLOCKS } from '../../data/studyBlocksData';
import { useRouter } from '../../routes/router';
import { StudyBreadcrumbs } from './StudyBreadcrumbs';

interface Props {
  blockId: string;
}

export const StudyBlockDetailPage: React.FC<Props> = ({ blockId }) => {
  const { openStudyBlock } = useRouter();
  const [filterSubgroup, setFilterSubgroup] = useState<string | null>(null);

  const block = STUDY_BLOCKS.find(b => b.id === blockId);

  if (!block) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Раздел не найден</h2>
        <button
          onClick={() => openStudyBlock()}
          className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
        >
          Вернуться к списку блоков
        </button>
      </div>
    );
  }

  // Get subgroups for current block if any (e.g. Me / neMe)
  const subgroups = Array.from(
    new Set(block.topics.map(t => t.subgroup).filter(Boolean) as string[])
  );

  const filteredTopics = block.topics.filter(t => 
    !filterSubgroup || t.subgroup === filterSubgroup
  );

  return (
    <div className="min-h-screen bg-slate-50 py-10 font-body text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Navigation */}
        <StudyBreadcrumbs
          items={[
            { label: block.title, active: true }
          ]}
        />

        {/* Block Academic Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-amber-500/20 text-amber-900 border border-amber-500/30">
                  {block.badge}
                </span>
                <span className="text-xs font-bold text-slate-500">Раздел курса</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {block.title}
              </h1>

              <p className="text-sm font-semibold text-amber-800">
                {block.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {block.description}
              </p>
            </div>

            {/* Subgroup Filters */}
            {subgroups.length > 0 && (
              <div className="p-3 bg-slate-100 rounded-2xl border border-slate-200 shrink-0 w-full sm:w-auto">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-700">
                  <Filter className="w-3.5 h-3.5 text-amber-700" />
                  <span>Фильтровать по подгруппе:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilterSubgroup(null)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      filterSubgroup === null
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Все темы ({block.topics.length})
                  </button>
                  {subgroups.map(sg => (
                    <button
                      key={sg}
                      onClick={() => setFilterSubgroup(sg)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                        filterSubgroup === sg
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {sg}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Topics Academic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-900 text-amber-400">
                    {topic.code}
                  </span>
                  {topic.targetExam && (
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {topic.targetExam}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {topic.title}
                </h3>

                <p className="text-xs text-amber-700 font-medium">
                  {topic.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Action Buttons for Theory and Practice */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => openStudyBlock(block.id, topic.id, 'theory')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-sm transition flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Читать теорию темы</span>
                </button>

                {(() => {
                  const trainersCount = topic.trainerIds?.length || (topic.trainerId ? 1 : 0);
                  const hasTrainers = trainersCount > 0;
                  return (
                    <button
                      onClick={() => openStudyBlock(block.id, topic.id, 'practice')}
                      className={`w-full py-2.5 px-4 rounded-xl font-extrabold text-xs transition flex items-center justify-center gap-2 ${
                        hasTrainers
                          ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm shadow-amber-500/20 border border-amber-400'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-500 border border-slate-200'
                      }`}
                    >
                      <Zap className={`w-3.5 h-3.5 ${hasTrainers ? 'text-slate-950' : 'text-slate-400'}`} />
                      <span>Практика и Тренажер ({trainersCount})</span>
                    </button>
                  );
                })()}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StudyBlockDetailPage;
