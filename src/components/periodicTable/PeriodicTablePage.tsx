import React from 'react';
import { Atom, RotateCcw, Zap, Home, ChevronRight, BookOpen } from 'lucide-react';
import { usePeriodicTable } from '../../hooks/usePeriodicTable';
import { useRouter } from '../../routes/router';
import { ControlPanel } from './ControlPanel';
import { TemperatureController } from './TemperatureController';
import { HeatmapLegend } from './HeatmapLegend';
import { PeriodicTableGrid } from './PeriodicTableGrid';
import { PeriodicTableReference } from './PeriodicTableReference';
import { ElementModal } from './ElementModal';

interface Props {
  onBackToHome?: () => void;
  onOpenTrainers?: () => void;
}

export const PeriodicTablePage: React.FC<Props> = ({ onBackToHome, onOpenTrainers }) => {
  const { goHome, openTrainersCatalog } = useRouter();

  const handleBackToHome = onBackToHome || goHome;
  const handleOpenTrainers = onOpenTrainers || openTrainersCatalog;

  const {
    allElements,
    filteredElementsSet,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedState,
    setSelectedState,
    selectedBlock,
    setSelectedBlock,
    temperatureKelvin,
    setTemperatureKelvin,
    heatmapProperty,
    setHeatmapProperty,
    selectedElement,
    setSelectedElement,
    selectNextElement,
    selectPrevElement,
    resetFilters,
  } = usePeriodicTable();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-body selection:bg-sky-400 selection:text-slate-950 pb-20 relative overflow-x-hidden">
      
      {/* Main periodic table view components */}
      <main className="max-w-[1480px] mx-auto px-4 py-4 space-y-3">

        {/* Centralized Breadcrumbs & Actions Toolbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-1">
          
          {/* Centralized Breadcrumbs navigation */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 py-2.5 px-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-sm flex-wrap">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-1.5 hover:text-amber-400 text-slate-300 transition shrink-0 cursor-pointer"
              title="На главную"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Главная</span>
            </button>

            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

            <button
              onClick={handleBackToHome}
              className="flex items-center gap-1.5 hover:text-amber-400 text-slate-300 transition shrink-0 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>Интерактивные разделы</span>
            </button>

            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />

            <span className="flex items-center gap-1.5 text-sky-400 font-extrabold truncate">
              <Atom className="w-4 h-4 text-sky-400 animate-spin-slow" />
              Периодическая Система Элементов
            </span>
          </nav>

          {/* Right Action Bar (Counters, Reset, Trainers) */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono">
              <div className="text-center">
                <span className="block text-slate-400 text-[9px]">Найдено:</span>
                <span className="font-bold text-sky-400 text-xs">{filteredElementsSet.size}</span>
              </div>
              <div className="w-px h-5 bg-slate-800" />
              <div className="text-center">
                <span className="block text-slate-400 text-[9px]">Всего:</span>
                <span className="font-bold text-slate-300 text-xs">{allElements.length}</span>
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-medium text-slate-200 transition border border-slate-800 hover:border-slate-600 cursor-pointer shadow-sm"
              title="Сбросить все фильтры"
            >
              <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Сброс</span>
            </button>

            <button
              onClick={handleOpenTrainers}
              className="px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-amber-400 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="hidden lg:inline">Тренажеры</span>
            </button>
          </div>

        </div>
        {/* Control Panel: Search, States, Heatmap, Blocks, Categories */}
        <ControlPanel
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedState={selectedState}
          onStateChange={setSelectedState}
          selectedBlock={selectedBlock}
          onBlockChange={setSelectedBlock}
          heatmapProperty={heatmapProperty}
          onHeatmapChange={setHeatmapProperty}
        />

        {/* Temperature Simulation Controller */}
        <TemperatureController
          temperatureKelvin={temperatureKelvin}
          onTemperatureChange={setTemperatureKelvin}
        />

        {/* Heatmap Legend (when enabled) */}
        <HeatmapLegend property={heatmapProperty} />

        {/* Periodic Grid (18 columns) */}
        <PeriodicTableGrid
          elements={allElements}
          filteredElementsSet={filteredElementsSet}
          selectedElement={selectedElement}
          heatmapProperty={heatmapProperty}
          temperatureKelvin={temperatureKelvin}
          onElementClick={setSelectedElement}
        />

        {/* Scientific Periodic Table Reference & Trends Guide */}
        <PeriodicTableReference />
      </main>

      {/* Element Detail Modal (with Bohr model & tabs) */}
      <ElementModal
        element={selectedElement}
        temperatureKelvin={temperatureKelvin}
        onClose={() => setSelectedElement(null)}
        onPrev={selectPrevElement}
        onNext={selectNextElement}
      />

    </div>
  );
};
