import React from 'react';
import { Filter, Layers } from 'lucide-react';
import type { SubtopicFilterOption } from '../../../types/trainer';

interface SubtopicFilterBarProps {
  subtopics: SubtopicFilterOption[];
  selectedSubtopic: string;
  filteredCount: number;
  onSelectSubtopic: (subtopicId: string) => void;
}

export const SubtopicFilterBar: React.FC<SubtopicFilterBarProps> = ({
  subtopics,
  selectedSubtopic,
  filteredCount,
  onSelectSubtopic,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6 shadow-md space-y-3 text-white">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-extrabold text-slate-300 flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-400" />
          Разделение задач по темам (Азот и Фосфор):
        </span>
        <span className="text-[11px] text-slate-400">
          Найдено вариантов: <strong className="text-amber-400">{filteredCount}</strong>
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {subtopics.map((st) => (
          <button
            key={st.id}
            onClick={() => onSelectSubtopic(st.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              selectedSubtopic === st.id
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>{st.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
