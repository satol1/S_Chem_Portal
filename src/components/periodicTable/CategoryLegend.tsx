import React from 'react';
import type { ElementCategory } from '../../types/periodicTable';
import { CATEGORIES } from '../../data/periodicTable/categoriesData';

interface CategoryLegendProps {
  selectedCategory: ElementCategory | 'all';
  onCategorySelect: (cat: ElementCategory | 'all') => void;
}

export const CategoryLegend: React.FC<CategoryLegendProps> = ({
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="w-full">
      <div className="glass-panel p-4">
        <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
          Классификация Категорий Элементов:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {Object.values(CATEGORIES).map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(isSelected ? 'all' : cat.id)}
                className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border transition-all text-left cursor-pointer ${
                  isSelected
                    ? 'ring-2 ring-white shadow-lg scale-[1.02]'
                    : 'bg-slate-900/40 hover:bg-slate-800/80 border-slate-800/80'
                }`}
                style={{
                  borderColor: isSelected ? '#ffffff' : `${cat.borderColor}60`,
                }}
              >
                <span
                  className="w-3.5 h-3.5 rounded-md flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-slate-200 truncate">{cat.nameRu}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
