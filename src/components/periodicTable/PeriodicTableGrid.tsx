import React, { useMemo } from 'react';
import type { ChemicalElement, HeatmapProperty } from '../../types/periodicTable';
import { ElementCell } from './ElementCell';

interface PeriodicTableGridProps {
  elements: ChemicalElement[];
  filteredElementsSet: Set<number>;
  selectedElement: ChemicalElement | null;
  heatmapProperty: HeatmapProperty;
  temperatureKelvin: number;
  onElementClick: (element: ChemicalElement) => void;
}

export const PeriodicTableGrid: React.FC<PeriodicTableGridProps> = React.memo(
  ({
    elements,
    filteredElementsSet,
    selectedElement,
    heatmapProperty,
    temperatureKelvin,
    onElementClick,
  }) => {
    // Кеширование разделения основных элементов и лантаноидов/актиноидов
    const { mainGridElements, lanthanides, actinides } = useMemo(() => {
      return {
        mainGridElements: elements.filter(
          (e) => (e.number < 57 || (e.number > 71 && e.number < 89) || e.number > 103)
        ),
        lanthanides: elements.filter((e) => e.number >= 57 && e.number <= 71),
        actinides: elements.filter((e) => e.number >= 89 && e.number <= 103),
      };
    }, [elements]);

    return (
      <div className="w-full">
        <div className="glass-panel p-3 sm:p-4">
          <div className="table-scroll-wrapper">
            {/* Номера групп 1-18 сверху */}
            <div className="periodic-grid-container mb-1">
              {Array.from({ length: 18 }, (_, i) => i + 1).map((grp) => (
                <div
                  key={`grp-${grp}`}
                  className="text-center font-mono text-[10px] font-bold text-slate-500 py-0.5 border-b border-slate-800"
                >
                  {grp}
                </div>
              ))}
            </div>

            {/* Основная сетка 18x7 */}
            <div className="periodic-grid-container relative">
              {mainGridElements.map((el) => {
                const group = el.group ?? 3;
                const period = el.period;

                return (
                  <div
                    key={el.number}
                    style={{
                      gridColumn: group,
                      gridRow: period,
                    }}
                  >
                    <ElementCell
                      element={el}
                      isFiltered={filteredElementsSet.has(el.number)}
                      isSelected={selectedElement?.number === el.number}
                      heatmapProperty={heatmapProperty}
                      temperatureKelvin={temperatureKelvin}
                      onClick={onElementClick}
                    />
                  </div>
                );
              })}

              {/* Плейсхолдер Лантаноидов (Период 6, Группа 3, №57-71) */}
              <div
                style={{ gridColumn: 3, gridRow: 6 }}
                className="element-cell border-dashed border-purple-500/50 bg-purple-950/20 flex flex-col items-center justify-center text-center p-1 cursor-default opacity-80"
                title="Лантаноиды (57-71)"
              >
                <span className="text-[10px] font-bold text-purple-300">57–71</span>
                <span className="text-[9px] text-purple-400 font-medium leading-none mt-1">La-Lu</span>
                <span className="text-[8px] text-slate-400 mt-0.5">Лантаноиды</span>
              </div>

              {/* Плейсхолдер Актиноидов (Период 7, Группа 3, №89-103) */}
              <div
                style={{ gridColumn: 3, gridRow: 7 }}
                className="element-cell border-dashed border-pink-500/50 bg-pink-950/20 flex flex-col items-center justify-center text-center p-1 cursor-default opacity-80"
                title="Актиноиды (89-103)"
              >
                <span className="text-[10px] font-bold text-pink-300">89–103</span>
                <span className="text-[9px] text-pink-400 font-medium leading-none mt-1">Ac-Lr</span>
                <span className="text-[8px] text-slate-400 mt-0.5">Актиноиды</span>
              </div>
            </div>

            {/* Разделитель под отдельный блок f-элементов */}
            <div className="my-5 border-t border-dashed border-slate-800/80 flex items-center justify-between px-2">
              <span className="text-[11px] font-mono font-bold text-purple-400 tracking-wider uppercase">
                ↓ Семейства f-блока (Редкоземельные и Радиоактивные элементы)
              </span>
            </div>

            {/* Сетка Лантаноидов (57-71) */}
            <div className="periodic-grid-container mb-2">
              <div className="col-span-2 flex items-center justify-end pr-3">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                  Лантаноиды
                </span>
              </div>
              <div className="col-span-15 grid grid-cols-15 gap-[6px]" style={{ gridColumn: '3 / span 15' }}>
                {lanthanides.map((el) => (
                  <ElementCell
                    key={el.number}
                    element={el}
                    isFiltered={filteredElementsSet.has(el.number)}
                    isSelected={selectedElement?.number === el.number}
                    heatmapProperty={heatmapProperty}
                    temperatureKelvin={temperatureKelvin}
                    onClick={onElementClick}
                  />
                ))}
              </div>
            </div>

            {/* Сетка Актиноидов (89-103) */}
            <div className="periodic-grid-container">
              <div className="col-span-2 flex items-center justify-end pr-3">
                <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-wider">
                  Актиноиды
                </span>
              </div>
              <div className="col-span-15 grid grid-cols-15 gap-[6px]" style={{ gridColumn: '3 / span 15' }}>
                {actinides.map((el) => (
                  <ElementCell
                    key={el.number}
                    element={el}
                    isFiltered={filteredElementsSet.has(el.number)}
                    isSelected={selectedElement?.number === el.number}
                    heatmapProperty={heatmapProperty}
                    temperatureKelvin={temperatureKelvin}
                    onClick={onElementClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PeriodicTableGrid.displayName = 'PeriodicTableGrid';
