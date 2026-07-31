import React from 'react';
import { TEACHERS_DATA } from '../../data/teachers';
import { ExternalLink, CheckCircle2, Quote, Building2 } from 'lucide-react';
import { getAssetUrl } from '../../utils/assets';

export const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-16 bg-section-shaded border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Преподавательский состав
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Основатели Школы химических знаний
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Качественная фундаментальная подготовка под руководством кандидатов химических наук с университетским опытом преподавания.
          </p>
        </div>

        {/* Teachers List */}
        <div className="space-y-10">
          {TEACHERS_DATA.map((t) => (
            <div key={t.id} className="clean-card p-6 md:p-8 bg-white shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo */}
              <div className="md:col-span-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md max-w-xs mx-auto md:max-w-none">
                  <img
                    src={getAssetUrl(t.photoUrl)}
                    alt={t.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs font-bold text-slate-900 block">{t.degree}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{t.academicTitle} • Стаж {t.experienceYears}+ лет</span>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{t.name}</h3>
                    <p className="text-xs font-bold text-amber-700 mt-0.5">{t.role}</p>
                  </div>

                  <a
                    href={t.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                  >
                    <span>Профиль АГУ</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{t.university} ({t.department})</span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  {t.bio}
                </p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Ключевые факты и заслуги:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs italic text-amber-900 flex items-start gap-2">
                  <Quote className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>«{t.quote}»</p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
