import React from 'react';
import { 
  Atom, Dna, FlaskConical, Trophy, Factory, 
  GraduationCap, BookCheck, ArrowRight, BookOpen, 
  CheckCircle2, ShieldCheck
} from 'lucide-react';
import { STUDY_BLOCKS } from '../../data/studyBlocksData';
import { useRouter } from '../../routes/router';
import { StudyBreadcrumbs } from './StudyBreadcrumbs';

export const StudyBlocksListPage: React.FC = () => {
  const { openStudyBlock } = useRouter();

  const renderIcon = (iconName: string, className: string = "w-7 h-7") => {
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

  return (
    <div className="min-h-screen bg-slate-50 py-10 font-body text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Breadcrumbs */}
        <StudyBreadcrumbs items={[]} />

        {/* Page Academic Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Академический каталог курсов</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Блоки для изучения химических дисциплин
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Систематизированное руководство от фундаментальной теории до решения сложных КИМ ОГЭ, ЕГЭ и олимпиадных задач. Выберите интересующий раздел для перехода к темам и интерактивным практикумам.
            </p>
          </div>
        </div>

        {/* Grid of Large Fundamental Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STUDY_BLOCKS.map((block) => (
            <div
              key={block.id}
              onClick={() => openStudyBlock(block.id)}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${block.gradient} text-white shadow-md group-hover:scale-105 transition-transform`}>
                    {renderIcon(block.iconName, "w-7 h-7")}
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                    {block.badge}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {block.title}
                  </h2>

                  <p className="text-xs font-bold text-amber-700 mb-3">
                    {block.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                {/* Topics Preview List */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                    Содержание раздела ({block.topics.length} тем):
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {block.topics.slice(0, 4).map((t) => (
                      <li key={t.id} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-bold text-slate-900">{t.code}:</span>
                        <span className="truncate">{t.title}</span>
                      </li>
                    ))}
                    {block.topics.length > 4 && (
                      <li className="text-[11px] font-bold text-slate-400 pl-5">
                        ...и ещё {block.topics.length - 4} тем в этом разделе
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom Navigation Button */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  Теория и Разборы реакций
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openStudyBlock(block.id);
                  }}
                  className="px-5 py-3 rounded-xl bg-slate-900 group-hover:bg-amber-600 text-white font-extrabold text-xs shadow-md transition flex items-center gap-2"
                >
                  <span>Войти в раздел ({block.topics.length} тем)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default StudyBlocksListPage;
