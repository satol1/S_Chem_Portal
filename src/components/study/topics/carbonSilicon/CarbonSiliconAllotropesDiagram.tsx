import React from 'react';
import { Gem, Layers, Sparkles, Atom } from 'lucide-react';

export const AllotropesDiagram: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base italic font-serif">
          Схема 12
        </h4>
        <span className="text-xs text-slate-500 font-sans">
          Аллотропия и структура кристаллической решетки элементов IV-A группы (C и Si)
        </span>
      </div>

      <div className="overflow-x-auto py-2">
        <div className="min-w-[760px] flex items-center gap-3 text-slate-900">
          {/* Left Root */}
          <div className="w-32 text-right pr-1 shrink-0 font-medium text-base leading-snug">
            <div className="font-bold text-slate-900">Элементы IV-A</div>
            <div className="text-xs text-slate-500">C и Si</div>
          </div>

          {/* SVG Tree Lines */}
          <div className="relative w-44 shrink-0 h-[380px] flex flex-col justify-between py-4">
            <svg className="absolute inset-0 w-full h-full text-slate-400 stroke-[1.75]" preserveAspectRatio="none" viewBox="0 0 176 380">
              <path d="M 12 190 L 36 190 L 36 44 L 160 44" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow-cs)" />
              <path d="M 36 190 L 36 140 L 160 140" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow-cs)" />
              <path d="M 36 190 L 36 240 L 160 240" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow-cs)" />
              <path d="M 36 190 L 36 336 L 160 336" fill="none" stroke="currentColor" markerEnd="url(#chem-arrow-cs)" />
              <defs>
                <marker id="chem-arrow-cs" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            <div className="relative z-10 text-center text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 self-center -mt-2 border border-slate-200 rounded-md shadow-2xs">
              sp³-гибридизация
            </div>
            <div className="relative z-10 text-center text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 self-center border border-slate-200 rounded-md shadow-2xs">
              sp²-гибридизация
            </div>
            <div className="relative z-10 text-center text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 self-center border border-slate-200 rounded-md shadow-2xs">
              Аморфный углерод
            </div>
            <div className="relative z-10 text-center text-[11px] font-bold text-slate-700 bg-slate-50 px-2 py-0.5 self-center -mb-2 border border-slate-200 rounded-md shadow-2xs">
              Кристаллический Si
            </div>
          </div>

          {/* Right Descriptions */}
          <div className="flex-1 space-y-5 text-xs sm:text-sm pl-2">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Gem className="w-4 h-4 text-amber-600" />
                <span>Алмаз (C)</span>
                <span className="text-[11px] font-normal text-slate-500">— Атомная решетка</span>
              </div>
              <p className="text-slate-600 text-xs">
                Тетраэдрическая 3D-сеть связей C-C (109.5°). Твердость 10 по Моосу, диэлектрик, прозрачен.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-700" />
                <span>Графит, Фуллерены C₆₀, Графен (C)</span>
              </div>
              <p className="text-slate-600 text-xs">
                Плоские гексагональные слои. Электропроводность (делокализованные π-электроны), смазывающие свойства.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Древесный уголь, Сажа, Кокс (C)</span>
              </div>
              <p className="text-slate-600 text-xs">
                Высокая пористость. Активированный уголь — мощнейший адсорбент газов и растворенных веществ.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <Atom className="w-4 h-4 text-teal-600" />
                <span>Кремний (Si)</span>
                <span className="text-[11px] font-normal text-slate-500">— Алмазоподобная структура</span>
              </div>
              <p className="text-slate-600 text-xs">
                Темно-серый с металлическим блеском, хрупкий полупроводник. Связи Si-Si слабее, чем C-C.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
