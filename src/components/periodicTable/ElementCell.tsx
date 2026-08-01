import React from 'react';
import type { ChemicalElement, MatterState, HeatmapProperty } from '../../types/periodicTable';
import { CATEGORIES } from '../../data/periodicTable/categoriesData';
import { HEATMAP_PROPERTIES, getElementPropertyValue, getHeatmapColor } from '../../services/periodicTable/heatmapService';
import { getElementPhaseAtTemp } from '../../services/periodicTable/temperatureService';

interface ElementCellProps {
  element: ChemicalElement;
  isFiltered: boolean;
  isSelected: boolean;
  heatmapProperty: HeatmapProperty;
  temperatureKelvin: number;
  onClick: (element: ChemicalElement) => void;
}

const STATE_CLASSES: Record<MatterState, string> = {
  solid: 'state-solid',
  liquid: 'state-liquid',
  gas: 'state-gas',
  synthetic: 'state-synthetic',
};

const STATE_NAMES: Record<MatterState, string> = {
  solid: 'Твердое',
  liquid: 'Жидкое',
  gas: 'Газ',
  synthetic: 'Синтезировано',
};

export const ElementCell = React.memo<ElementCellProps>(
  ({
    element,
    isFiltered,
    isSelected,
    heatmapProperty,
    temperatureKelvin,
    onClick,
  }) => {
    const categoryInfo = CATEGORIES[element.category] || CATEGORIES.unknown;
    const currentPhase = getElementPhaseAtTemp(element, temperatureKelvin);

    // Вычисление данных теплокарты
    const cellStyle: React.CSSProperties = {
      '--cell-glow': categoryInfo.glowColor,
      borderColor: isSelected ? '#ffffff' : categoryInfo.borderColor,
    } as React.CSSProperties;

    let topRightDisplay =
      typeof element.atomicMass === 'number'
        ? element.atomicMass < 100
          ? element.atomicMass.toFixed(2)
          : element.atomicMass.toFixed(1)
        : element.atomicMass;

    if (heatmapProperty !== 'none') {
      const val = getElementPropertyValue(element, heatmapProperty);
      const propInfo = HEATMAP_PROPERTIES[heatmapProperty];
      const bgColor = getHeatmapColor(val, propInfo);
      cellStyle.backgroundColor = bgColor;
      topRightDisplay = val !== null ? `${val} ${propInfo.unit}` : '—';
    } else {
      cellStyle.backgroundColor = `${categoryInfo.color}1e`; // 12% прозрачности
    }

    return (
      <div
        onClick={() => onClick(element)}
        style={cellStyle}
        className={`element-cell ${!isFiltered ? 'dimmed' : ''} ${isSelected ? 'active-selected' : ''}`}
        title={`${element.nameRu} (${element.symbol}) — №${element.number}, ${categoryInfo.nameRu}, Состояние при ${Math.round(temperatureKelvin)} K: ${STATE_NAMES[currentPhase]}`}
      >
        {/* Верхняя строка: Атомный номер и Атомная масса / Теплокарта */}
        <div className="cell-top-row">
          <span className="cell-number" style={{ color: categoryInfo.color }}>
            {element.number}
          </span>
          <span className="cell-mass text-slate-300">{topRightDisplay}</span>
        </div>

        {/* Центр: Химический символ и Название на русском */}
        <div className="cell-main">
          <span className="cell-symbol">{element.symbol}</span>
          <span className="cell-name-ru">{element.nameRu}</span>
        </div>

        {/* Нижняя строка: Электронная формула и Маркер агрегатного состояния */}
        <div className="cell-bottom-row">
          <span className="cell-config" title={`Электронная конфигурация: ${element.electronConfiguration}`}>
            {element.electronConfiguration.replace(/\[.*?\]\s*/, '')}
          </span>
          <span
            className={`state-badge ${STATE_CLASSES[currentPhase]}`}
            title={`Фаза: ${STATE_NAMES[currentPhase]}`}
          />
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.isFiltered === nextProps.isFiltered &&
      prevProps.isSelected === nextProps.isSelected &&
      prevProps.heatmapProperty === nextProps.heatmapProperty &&
      prevProps.temperatureKelvin === nextProps.temperatureKelvin &&
      prevProps.element.number === nextProps.element.number
    );
  }
);

ElementCell.displayName = 'ElementCell';
