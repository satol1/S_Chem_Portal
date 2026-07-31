import React from 'react';
import { MapPin, ArrowRight, GraduationCap, Send, Monitor, Users, User } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';
import { useRouter } from '../../routes/router';
import { getAssetUrl } from '../../utils/assets';

interface Props {
  onOpenModal: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenModal }) => {
  const { openStudyBlock } = useRouter();
  return (
    <section className="py-12 md:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Info */}
          <div className="lg:col-span-7">
            
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Очно: {CONTACTS.city}, {CONTACTS.address} ({CONTACTS.office})</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
                <Monitor className="w-3.5 h-3.5 text-blue-600" />
                <span>Онлайн-программы по РФ</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.15] mb-6">
              Подготовка к ОГЭ, ЕГЭ и Олимпиадам по химии
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              Очные и онлайн-программы под руководством кандидатов химических наук, доцентов АГУ{' '}
              <strong className="text-slate-900 font-bold">{CONTACTS.founders[0].name}</strong> и{' '}
              <strong className="text-slate-900 font-bold">{CONTACTS.founders[1].name}</strong>. Доступны <strong className="text-slate-900 font-bold">индивидуальные занятия</strong> и обучение в <strong className="text-slate-900 font-bold">мини-группах</strong>.
            </p>

            {/* Formats Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Мини-группы (4–6 чел)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                <User className="w-4 h-4 text-amber-600" />
                <span>Индивидуальные уроки</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                <Monitor className="w-4 h-4 text-blue-600" />
                <span>Очно / Онлайн</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Записаться на бесплатный урок</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openStudyBlock()}
                className="px-6 py-4 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm border border-amber-200 transition flex items-center gap-2 shadow-sm"
              >
                <span>📚 Блоки для изучения</span>
              </button>

              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-sm transition flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-blue-600" />
                <span>Telegram: {CONTACTS.telegram}</span>
              </a>
            </div>

            {/* Concise Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-black text-slate-900">20+ лет</div>
                <div className="text-xs text-slate-500 font-medium">Преподавательского стажа</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">К.х.н.</div>
                <div className="text-xs text-slate-500 font-medium">Доценты ВУЗа</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">86.4</div>
                <div className="text-xs text-slate-500 font-medium">Средний балл на ЕГЭ</div>
              </div>
            </div>

          </div>

          {/* Right Dual Teachers Portrait Showcase */}
          <div className="lg:col-span-5">
            <div className="clean-card p-4 bg-slate-50 shadow-md">
              <div className="grid grid-cols-2 gap-3 mb-4">
                
                {/* Olga Sadomtseva Card */}
                <div className="relative rounded-xl overflow-hidden shadow-sm group">
                  <img
                    src={getAssetUrl('images/sadomtseva.jpg')}
                    alt={CONTACTS.founders[0].name}
                    className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">К.х.н. • Доцент</span>
                    <span className="text-xs font-extrabold leading-tight">О.С. Садомцева</span>
                  </div>
                </div>

                {/* Viktoria Shakirova Card */}
                <div className="relative rounded-xl overflow-hidden shadow-sm group">
                  <img
                    src={getAssetUrl('images/shakirova.jpg')}
                    alt={CONTACTS.founders[1].name}
                    className="w-full h-56 object-cover object-top group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">К.х.н. • Доцент</span>
                    <span className="text-xs font-extrabold leading-tight">В.В. Шакирова</span>
                  </div>
                </div>

              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-800">
                  Очно ({CONTACTS.address}, {CONTACTS.office}) и Онлайн • Группы и Индивидуально
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
