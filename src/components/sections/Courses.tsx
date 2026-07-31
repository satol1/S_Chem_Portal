import React from 'react';
import { COURSES_DATA } from '../../data/courses';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  onOpenModal: (courseTitle?: string) => void;
}

export const Courses: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <section id="courses" className="py-16 bg-section-shaded border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Программы и Стоимость
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Курсы подготовки по химии
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Прозрачная стоимость без скрытых платежей. Индивидуальный подход в мини-группах.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES_DATA.map((c) => (
            <div key={c.id} className="clean-card p-6 md:p-8 bg-white shadow-sm flex flex-col justify-between relative">
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full badge-gold text-xs font-bold">
                    {c.grade} • {c.format}
                  </span>
                  <span className="text-xs font-bold text-amber-700">
                    Мест осталось: {c.spotsLeft}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-xs font-semibold text-slate-500 mb-4">{c.subtitle}</p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {c.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    В курс входит:
                  </span>
                  {c.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 font-bold block">Стоимость:</span>
                    <span className="text-xl font-black text-slate-900">{c.price}</span>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <div>{c.intensity}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal(c.title)}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Записаться на курс</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
