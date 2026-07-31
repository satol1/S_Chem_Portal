import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Send, Phone, User } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';
import { getAssetUrl } from '../../utils/assets';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const EnrollmentModal: React.FC<Props> = ({ isOpen, onClose, defaultCourse }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('9');
  const [course, setCourse] = useState(defaultCourse || 'Подготовка к ОГЭ по химии');
  const [format, setFormat] = useState('Очно (ул. Кирова, 14)');
  const [groupType, setGroupType] = useState('Мини-группа (4-6 чел)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Пожалуйста, укажите Ваше имя и контактный телефон.');
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 border border-slate-200 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={getAssetUrl('images/logo.png')}
                alt="Логотип Школы"
                className="w-12 h-12 rounded-full border border-slate-200 object-cover shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Запись на урок</h3>
                <p className="text-xs text-slate-500 mt-0.5">Очно на ул. Кирова, 14 или Онлайн</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Имя ученика или родителя *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Контактный телефон *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (900) 000-00-00"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Класс
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="8">8 класс</option>
                    <option value="9">9 класс (ОГЭ)</option>
                    <option value="10">10 класс</option>
                    <option value="11">11 класс (ЕГЭ)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Программа
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Подготовка к ОГЭ по химии">Подготовка к ОГЭ</option>
                    <option value="ЕГЭ по химии (85+ баллов)">Подготовка к ЕГЭ</option>
                    <option value="Олимпиадный Химический Клуб">Олимпиадный клуб</option>
                    <option value="Практическая Лабораторная Химия">Практикум в лаб</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Формат занятий
                  </label>
                  <select
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Очно (ул. Кирова, 14)">Очно (ул. Кирова, 14)</option>
                    <option value="Онлайн (дистанционно)">Онлайн (дистанционно)</option>
                    <option value="Гибридный формат">Гибридный формат</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Тип группы
                  </label>
                  <select
                    value={groupType}
                    onChange={(e) => setGroupType(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Мини-группа (4-6 чел)">Мини-группа (4-6 чел)</option>
                    <option value="Индивидуальные занятия">Индивидуальные уроки</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 mt-6"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Отправить заявку</span>
              </button>

              <p className="text-[10px] text-slate-400 text-center mt-2">
                Мы свяжемся с вами в течение 15 минут. Вы также можете написать нам прямо в Telegram: <a href={CONTACTS.telegramUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline font-bold">{CONTACTS.telegram}</a> или позвонить <a href={`tel:${CONTACTS.phoneRaw}`} className="text-slate-700 underline font-bold">{CONTACTS.phone}</a>.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка принята!</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Спасибо, <strong className="text-slate-900">{name}</strong>! Вы выбрали: <strong className="text-slate-900">{format}</strong> ({groupType}). Администратор свяжется с Вами по номеру <strong className="text-slate-900">{phone}</strong> для подтверждения времени.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
            >
              Закрыть
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
