import React from 'react';
import { MapPin, Phone, Send, Clock } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';
import { getAssetUrl } from '../../utils/assets';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={getAssetUrl('images/logo.png')}
                alt={CONTACTS.schoolName}
                className="w-10 h-10 rounded-full border border-slate-700 object-cover"
              />
              <span className="font-extrabold text-base tracking-tight">{CONTACTS.schoolName}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              Дополнительное образование для учащихся 8–11 классов в {CONTACTS.city}. Подготовка к ОГЭ, ЕГЭ и Олимпиадам под руководством кандидатов химических наук.
            </p>
          </div>

          <div className="md:col-span-3 text-xs space-y-2">
            <div className="font-bold text-amber-400 uppercase tracking-wider mb-2">Основатели</div>
            {CONTACTS.founders.map((f, i) => (
              <div key={i}>{f.name} — {f.degree}</div>
            ))}
          </div>

          <div className="md:col-span-4 text-xs space-y-2 text-slate-300">
            <div className="font-bold text-amber-400 uppercase tracking-wider mb-2">Адрес и Контакты</div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{CONTACTS.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={`tel:${CONTACTS.phoneRaw}`} className="hover:text-emerald-400 transition font-bold">{CONTACTS.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4 text-blue-400 shrink-0" />
              <a href={CONTACTS.telegramUrl} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition font-bold">Telegram: {CONTACTS.telegram}</a>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Режим работы: {CONTACTS.workingHoursShort}</span>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} {CONTACTS.schoolName} ({CONTACTS.city}). Все права защищены.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Политика конфиденциальности</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
