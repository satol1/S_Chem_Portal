import React from 'react';
import { Search, X, Flame, Filter, Layers } from 'lucide-react';
import type { ElementBlock, ElementCategory, MatterState, HeatmapProperty } from '../../types/periodicTable';
import { CATEGORIES } from '../../data/periodicTable/categoriesData';
import { HEATMAP_PROPERTIES } from '../../services/periodicTable/heatmapService';

interface ControlPanelProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: ElementCategory | 'all';
  onCategoryChange: (c: ElementCategory | 'all') => void;
  selectedState: MatterState | 'all';
  onStateChange: (s: MatterState | 'all') => void;
  selectedBlock: ElementBlock | 'all';
  onBlockChange: (b: ElementBlock | 'all') => void;
  heatmapProperty: HeatmapProperty;
  onHeatmapChange: (hp: HeatmapProperty) => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedState,
  onStateChange,
  selectedBlock,
  onBlockChange,
  heatmapProperty,
  onHeatmapChange,
}) => {
  return (
    <div className="w-full">
      <div className="glass-panel p-4 space-y-3">
        {/* Верхняя строка: Поиск + Фильтр состояний + Теплокарта */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          {/* Поисковая строка */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-sky-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Поиск по названию (Водород), символу (H) или № (1)..."
              className="w-full pl-10 pr-9 py-2 bg-slate-900/80 border border-slate-700/80 focus:border-sky-500 rounded-xl text-xs md:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Фильтр по агрегатному состоянию */}
          <div className="lg:col-span-4 flex flex-wrap items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 text-xs">
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 px-1.5 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Состояние:
            </span>
            {(['all', 'solid', 'liquid', 'gas', 'synthetic'] as const).map((st) => (
              <button
                key={st}
                onClick={() => onStateChange(st)}
                className={`px-2 py-1 rounded-lg transition-all font-medium whitespace-nowrap capitalize cursor-pointer text-xs ${
                  selectedState === st
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {st === 'all' && 'Все'}
                {st === 'solid' && 'Твердое'}
                {st === 'liquid' && 'Жидкое'}
                {st === 'gas' && 'Газ'}
                {st === 'synthetic' && 'Синтетика'}
              </button>
            ))}
          </div>

          {/* Выбор свойства тепловой карты (Heatmap) */}
          <div className="lg:col-span-3 flex items-center gap-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Flame className="w-4 h-4 text-amber-400" />
              </div>
              <select
                value={heatmapProperty}
                onChange={(e) => onHeatmapChange(e.target.value as HeatmapProperty)}
                className="w-full pl-9 pr-8 py-2 bg-slate-900/80 border border-amber-500/30 focus:border-amber-500 rounded-xl text-xs font-medium text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 appearance-none cursor-pointer"
              >
                <option value="none">Теплокарта: Отключена</option>
                {Object.values(HEATMAP_PROPERTIES).map((prop) => (
                  <option key={prop.id} value={prop.id}>
                    Теплокарта: {prop.labelRu} ({prop.unit})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Нижняя строка: Фильтр Блоков (s, p, d, f) и Переключатель Категорий */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-800/60">
          {/* Селектор s, p, d, f блоков */}
          <div className="flex items-center gap-1 bg-slate-900/60 px-2.5 py-1 rounded-xl border border-slate-800 text-xs">
            <span className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
              <Layers className="w-3 h-3 text-purple-400" /> Блок:
            </span>
            {(['all', 's', 'p', 'd', 'f'] as const).map((blk) => (
              <button
                key={blk}
                onClick={() => onBlockChange(blk)}
                className={`px-2 py-0.5 rounded text-xs font-mono uppercase font-bold transition-all cursor-pointer ${
                  selectedBlock === blk
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {blk}
              </button>
            ))}
          </div>

          {/* Быстрые фильтры по категориям (без прокрутки) */}
          <div className="flex flex-wrap items-center gap-1 py-0.5 max-w-full">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-2 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-200 text-slate-950 font-bold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              Все категории
            </button>
            {Object.values(CATEGORIES).map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id === selectedCategory ? 'all' : cat.id)}
                style={{
                  borderColor: cat.color,
                  backgroundColor: selectedCategory === cat.id ? cat.color : undefined,
                  color: selectedCategory === cat.id ? '#05080f' : undefined,
                }}
                className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'font-bold shadow-md'
                    : 'bg-slate-900/40 text-slate-300 hover:bg-slate-800/80 border-opacity-40'
                }`}
              >
                {cat.nameRu}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
