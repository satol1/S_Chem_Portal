import { BookOpen, FileText, BarChart3, Video, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from '../../routes/router';

interface Props {
  onOpenTrainers?: () => void;
  onOpenSkillMap?: () => void;
}

export const FuturePortal: React.FC<Props> = ({ onOpenSkillMap }) => {
  const { openSkillMap, openStudyBlock } = useRouter();
  const handleOpenSkillMap = onOpenSkillMap || (() => openSkillMap());
  return (
    <section id="future" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Развитие экосистемы
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Будущие и интерактивные разделы образовательного портала
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Проект построен на централизованной масштабируемой архитектуре и расширяется новыми исследовательскими и практическо-теоретическими модулями.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Карта развития умений (NOW AVAILABLE WITH TEAL/CYAN DISTINCT COLOR SCHEME) */}
          <div 
            className="rounded-2xl p-6 bg-gradient-to-b from-slate-900 via-teal-950 to-slate-950 border border-teal-500/60 ring-1 ring-teal-500/30 shadow-xl shadow-teal-500/10 relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1"
            onClick={handleOpenSkillMap}
          >
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-teal-500/20">
                  <Compass className="w-5 h-5 text-slate-950" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase text-teal-300 bg-teal-500/20 border border-teal-500/40 px-2.5 py-1 rounded-full shadow-sm">
                  <Sparkles className="w-3 h-3 text-teal-300" />
                  Интерактивный граф
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white mb-1.5">Карта развития умений</h3>
              <p className="text-xs text-teal-100/90 leading-relaxed mb-4">
                Пошаговая траектория освоения навыков от 8 класса до ВУЗа. Интерактивная таксономия Блума, ФГОС/ФОП критерии и российская школа (Гальперин, Давыдов).
              </p>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); handleOpenSkillMap(); }}
              className="relative z-10 w-full py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-slate-950 font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 mt-2 group"
            >
              <span>Открыть карту умений (8 кл. — ВУЗ)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 2. Блоки для изучения (AVAILABLE WITH ELEGANT AMBER/GOLD COLOR SCHEME) */}
          <div 
            className="rounded-2xl p-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/50 ring-1 ring-amber-500/20 shadow-xl shadow-amber-500/10 relative overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1"
            onClick={() => openStudyBlock()}
          >
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                  <BookOpen className="w-5 h-5 text-slate-950" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase text-amber-300 bg-amber-500/20 border border-amber-500/30 px-2.5 py-1 rounded-full shadow-sm">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Уже доступно
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-white mb-1.5">Блоки для изучения</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Повопросные и тематические разделы от фундаментальной химии до ЕГЭ/ОГЭ с теорией, конспектами и тренажерами.
              </p>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); openStudyBlock(); }}
              className="relative z-10 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 mt-2 group"
            >
              <span>Открыть блоки для изучения (7 разделов)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3. Лекционный хаб (In development) */}
          <div className="clean-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center font-bold mb-4 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Лекционный хаб</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Централизованная база теории и авторских видеолекций 24/7</p>
            </div>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full w-fit">
              В разработке
            </span>
          </div>

          {/* 4. Конспекты & Шпаргалки (In development) */}
          <div className="clean-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center font-bold mb-4 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Конспекты и Шпаргалки</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Иллюстрированные PDF-выжимки и матрицы решений сложных задач</p>
            </div>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full w-fit">
              В разработке
            </span>
          </div>

          {/* 5. Инфографика & Формулы (In development) */}
          <div className="clean-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center font-bold mb-4 shadow-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Инфографика и Формулы</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Наглядные карты реакций и схемы превращений веществ</p>
            </div>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full w-fit">
              В разработке
            </span>
          </div>

          {/* 6. Видеолаборатория (In development) */}
          <div className="clean-card p-6 bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center font-bold mb-4 shadow-sm">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Видеолаборатория</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Записи реальных качественных реакций в лабораториях АГУ</p>
            </div>
            <span className="inline-block mt-3 text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full w-fit">
              В разработке
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
