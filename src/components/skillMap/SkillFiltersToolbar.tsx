import React from 'react';
import { Search, Filter, Network, LayoutGrid, GitCommit, Table, X } from 'lucide-react';
import type { SkillFilterState, GradeLevel, SkillBranch, BloomLevel } from '../../types/skillMap';
import { GradeLevels, SKILL_BRANCHES } from '../../data/skillsData';
import type { SkillMapViewMode } from '../../hooks/useSkillMap';

interface Props {
  filterState: SkillFilterState;
  viewMode: SkillMapViewMode;
  onSearchChange: (q: string) => void;
  onGradeChange: (g: GradeLevel | 'all') => void;
  onBranchChange: (b: SkillBranch | 'all') => void;
  onBloomChange: (bl: BloomLevel | 'all') => void;
  onResetFilters: () => void;
  onViewModeChange: (vm: SkillMapViewMode) => void;
}

export const SkillFiltersToolbar: React.FC<Props> = ({
  filterState,
  viewMode,
  onSearchChange,
  onGradeChange,
  onBranchChange,
  onBloomChange,
  onResetFilters,
  onViewModeChange,
}) => {
  const hasActiveFilters = 
    filterState.searchQuery ||
    filterState.gradeLevel !== 'all' ||
    filterState.branch !== 'all' ||
    filterState.bloomLevel !== 'all';

  return (
    <div className="bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-4 shadow-xl backdrop-blur-md">
      
      {/* Top Row: Search & View Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search Bar */}
        <div className="relative flex-grow max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Поиск по навыкам, ОГЭ/ЕГЭ заданиям, компетенциям или стандарту ФГОС..."
            value={filterState.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-11 pl-10 pr-9 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 font-medium text-xs focus:border-teal-500 outline-none transition"
          />
          {filterState.searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* View Mode Switcher Buttons */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => onViewModeChange('tree')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === 'tree' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Интерактивное графовое дерево навыков"
          >
            <Network className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Дерево граф</span>
          </button>

          <button
            onClick={() => onViewModeChange('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === 'grid' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Сетка карточек"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Сетка</span>
          </button>

          <button
            onClick={() => onViewModeChange('timeline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === 'timeline' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Хронологическая траектория 8 кл. -> ВУЗ"
          >
            <GitCommit className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Траектория</span>
          </button>

          <button
            onClick={() => onViewModeChange('matrix')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              viewMode === 'matrix' ? 'bg-teal-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
            title="Матрица Блума и ФГОС"
          >
            <Table className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Матрица</span>
          </button>
        </div>

      </div>

      {/* Filter Chips Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
        
        <div className="flex flex-wrap items-center gap-2 text-xs">
          
          <span className="text-slate-400 font-bold flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5 text-teal-400" /> Фильтры:
          </span>

          {/* Grade filter */}
          <select
            value={filterState.gradeLevel}
            onChange={(e) => onGradeChange(e.target.value as GradeLevel | 'all')}
            className="h-8 px-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 font-semibold focus:border-teal-500 outline-none text-xs"
          >
            <option value="all">Все классы (8 кл. — ВУЗ)</option>
            {GradeLevels.map(g => (
              <option key={g.id} value={g.id}>{g.title}</option>
            ))}
          </select>

          {/* Branch filter */}
          <select
            value={filterState.branch}
            onChange={(e) => onBranchChange(e.target.value as SkillBranch | 'all')}
            className="h-8 px-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 font-semibold focus:border-teal-500 outline-none text-xs"
          >
            <option value="all">Все разделы химии</option>
            {SKILL_BRANCHES.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>

          {/* Bloom Taxonomy filter */}
          <select
            value={filterState.bloomLevel}
            onChange={(e) => onBloomChange(e.target.value as BloomLevel | 'all')}
            className="h-8 px-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 font-semibold focus:border-teal-500 outline-none text-xs"
          >
            <option value="all">Все уровни усвоения (Блум)</option>
            <option value="remember">1. Знание / Запоминание</option>
            <option value="understand">2. Понимание / Объяснение</option>
            <option value="apply">3. Применение / Алгоритм</option>
            <option value="analyze">4. Анализ / Свойства</option>
            <option value="evaluate">5. Оценка / Сложные задачи</option>
            <option value="create">6. Синтез / Проект ВУЗ</option>
          </select>

        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-xs text-teal-400 hover:text-teal-300 font-bold flex items-center gap-1 underline underline-offset-4"
          >
            <X className="w-3.5 h-3.5" />
            Сбросить фильтры
          </button>
        )}

      </div>

    </div>
  );
};
