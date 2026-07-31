import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

export const AnnouncementBar: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white py-2 px-4 text-xs font-semibold">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
            Астрахань 2026/2027
          </span>
          <span className="hidden sm:inline">Открыт набор в мини-группы ОГЭ, ЕГЭ и Олимпиадного клуба!</span>
        </div>

        <button
          onClick={onOpenModal}
          className="flex items-center gap-1 hover:underline text-amber-300 hover:text-amber-200 transition font-bold"
        >
          <span>Записаться на бесплатное пробное занятие</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
