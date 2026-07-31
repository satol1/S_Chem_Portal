import React from 'react';
import { MapPin, Phone, Clock, Send, Navigation } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';

export const LocationContacts: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Контакты и учебный класс
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Где проходят очные занятия
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Очный учебный центр расположен в историческом центре {CONTACTS.city}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Detailed Contact Card */}
          <div className="lg:col-span-6 clean-card p-6 md:p-8 bg-slate-50 border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span>{CONTACTS.schoolName} ({CONTACTS.city})</span>
            </h3>

            <div className="space-y-4 text-xs text-slate-800 mb-8">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Адрес офиса:</span>
                  <p className="text-slate-700 font-semibold mt-0.5">{CONTACTS.city}, {CONTACTS.address}</p>
                  <span className="text-slate-500 block text-[11px] mt-0.5">{CONTACTS.office}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Телефон:</span>
                    <a href={`tel:${CONTACTS.phoneRaw}`} className="text-emerald-700 font-bold hover:underline block mt-0.5">
                      {CONTACTS.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                  <Send className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Telegram:</span>
                    <a href={CONTACTS.telegramUrl} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline block mt-0.5">
                      {CONTACTS.telegram}
                    </a>
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Режим работы офиса:</span>
                  <p className="text-slate-700 font-semibold mt-0.5">{CONTACTS.workingHours}</p>
                  <span className="text-slate-500 block text-[11px] mt-0.5">Суббота и воскресенье — по расписанию занятий</span>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold block mb-1">💡 Как к нам добраться:</span>
              Офис находится на {CONTACTS.address} (перекресток Эспланадной и ул. Кирова). Вход через центральный портал здания, {CONTACTS.office}.
            </div>

          </div>

          {/* Interactive Yandex/Static Map Box */}
          <div className="lg:col-span-6 clean-card overflow-hidden border-slate-200 shadow-sm">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Карта проезда: {CONTACTS.address}</span>
              </div>
              <a
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(CONTACTS.city + ', ' + CONTACTS.address)}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-amber-400 hover:underline font-bold"
              >
                Открыть в Яндекс.Картах ↗
              </a>
            </div>

            <div className="relative w-full h-[360px] bg-slate-100 flex items-center justify-center">
              <iframe
                title={`Карта проезда ${CONTACTS.address}`}
                src={`https://yandex.ru/map-widget/v1/?ll=${CONTACTS.coordinates.lng}%2C${CONTACTS.coordinates.lat}&z=17&pt=${CONTACTS.coordinates.lng}%2C${CONTACTS.coordinates.lat}%2Cpm2rdm`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
