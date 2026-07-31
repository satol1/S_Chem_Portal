import React from 'react';
import { 
  BookOpen, Zap, ArrowRight, Lightbulb
} from 'lucide-react';
import { STUDY_BLOCKS } from '../../data/studyBlocksData';
import { useRouter } from '../../routes/router';
import { StudyBreadcrumbs } from './StudyBreadcrumbs';
import { ChemFormula } from '../scientific/ChemFormula';
import { NitrogenPhosphorusTheoryView } from './topics/NitrogenPhosphorusTheoryView';
import { CarbonSiliconTheoryView } from './topics/CarbonSiliconTheoryView';

interface Props {
  blockId: string;
  topicId: string;
}

export const StudyTopicTheoryPage: React.FC<Props> = ({ blockId, topicId }) => {
  const { openStudyBlock } = useRouter();

  const block = STUDY_BLOCKS.find(b => b.id === blockId);
  const topic = block?.topics.find(t => t.id === topicId);

  if (!block || !topic) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Тема не найдена</h2>
        <button
          onClick={() => openStudyBlock(blockId)}
          className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
        >
          Вернуться к разделу
        </button>
      </div>
    );
  }

  const handleGoToPractice = () => {
    openStudyBlock(block.id, topic.id, 'practice');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 font-body text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs Navigation */}
        <StudyBreadcrumbs
          items={[
            { label: block.title, onClick: () => openStudyBlock(block.id) },
            { label: topic.title, active: true }
          ]}
        />

        {topic.id === 'elem-nonme-np' ? (
          <NitrogenPhosphorusTheoryView />
        ) : topic.id === 'elem-nonme-csi' ? (
          <CarbonSiliconTheoryView />
        ) : (
          <>
            {/* Academic Topic Header Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-amber-400">
                  {topic.code}
                </span>
                <span className="text-xs font-bold text-slate-500">{block.title}</span>
                {topic.targetExam && (
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                    {topic.targetExam}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {topic.title}
              </h1>

              <p className="text-sm font-semibold text-amber-800">
                {topic.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {topic.description}
              </p>

              {/* Quick Action to Practice */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">
                  Академический конспект по программе 2026 года
                </span>

                <button
                  onClick={handleGoToPractice}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow transition flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Перейти к практике и тренажеру</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Theory Lesson Content */}
            {topic.theoryLesson ? (
              <div className="space-y-8">
                {/* Key Summary Banner */}
                <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-4 shadow-sm">
                  <div className="p-3 rounded-2xl bg-amber-500 text-slate-950 shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-amber-950 mb-1">
                      Ключевая идея темы:
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-amber-900 leading-relaxed">
                      {topic.theoryLesson.summary}
                    </p>
                  </div>
                </div>

                {/* Important Exam Notes (if present) */}
                {topic.theoryLesson.importantNotes && topic.theoryLesson.importantNotes.length > 0 && (
                  <div className="p-6 rounded-3xl bg-rose-50 border border-rose-200 text-rose-950 space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm">
                      <span className="p-1.5 rounded-lg bg-rose-500 text-white text-xs">⚠️</span>
                      <span>Важные экзаменационные подводные камни (ФИПИ):</span>
                    </div>
                    <ul className="space-y-2 pl-5 list-disc text-xs sm:text-sm text-rose-900 font-medium leading-relaxed">
                      {topic.theoryLesson.importantNotes.map((note, ni) => (
                        <li key={ni}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sections */}
                {topic.theoryLesson.sections.map((sec, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                    <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
                      <span>{sec.title}</span>
                      <span className="text-xs font-mono font-bold text-slate-400">#0{idx + 1}</span>
                    </h2>

                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-2">
                      {sec.content}
                    </div>

                    {sec.formulae && sec.formulae.length > 0 && (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs text-slate-900">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                          Формулы и уравнения реакций:
                        </span>
                        {sec.formulae.map((f, fi) => (
                          <div key={fi} className="font-extrabold text-amber-900 text-sm py-1 border-b border-slate-200/50 last:border-0">
                            <ChemFormula formula={f} />
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.keyTerms && sec.keyTerms.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                        <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
                        {sec.keyTerms.map((kt, kti) => (
                          <span key={kti} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">
                            #{kt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Big Bottom Action to Practice */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="text-xl font-extrabold text-white">
                      Закрепите материал на практике
                    </h3>
                    <p className="text-xs text-slate-300 max-w-lg">
                      Перейдите к интерактивному практикуму и решебнику заданий с автопроверкой по критериям ФИПИ.
                    </p>
                  </div>

                  <button
                    onClick={handleGoToPractice}
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-lg transition shrink-0 flex items-center gap-2 group"
                  >
                    <span>Перейти к практикуму ({topic.code})</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-800">Конспект темы находится в стадии доработки</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Учебные материалы по этой теме формируются редакционной коллегией. Но вы можете прямо сейчас перейти к практике.
                </p>
                <button
                  onClick={handleGoToPractice}
                  className="px-6 py-3 bg-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow"
                >
                  Перейти к практикуму по теме
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default StudyTopicTheoryPage;
