import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-section-shaded border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Результаты учеников
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Отзывы и поступление в ВУЗы
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Выпускники нашей школы учатся на бюджете в Сеченова, Пирогова, РХТУ, СПбГУ и АГМУ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="clean-card p-6 bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
                  «{t.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="font-bold text-sm text-slate-900">{t.studentName}</div>
                <div className="text-xs font-extrabold text-amber-700 mt-0.5">{t.score}</div>
                <div className="text-[11px] text-slate-500">{t.university}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
