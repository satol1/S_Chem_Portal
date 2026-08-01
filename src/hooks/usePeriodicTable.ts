import { useState, useMemo, useCallback } from 'react';
import { ELEMENTS_DATA } from '../data/periodicTable/elementsData';
import type { ChemicalElement, ElementBlock, ElementCategory, MatterState, HeatmapProperty } from '../types/periodicTable';
import { filterElements } from '../services/periodicTable/elementFilterService';

export function usePeriodicTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | 'all'>('all');
  const [selectedState, setSelectedState] = useState<MatterState | 'all'>('all');
  const [selectedBlock, setSelectedBlock] = useState<ElementBlock | 'all'>('all');
  const [temperatureKelvin, setTemperatureKelvin] = useState(298.15); // 25 °C по умолчанию
  const [heatmapProperty, setHeatmapProperty] = useState<HeatmapProperty>('none');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);

  const filteredElementsSet = useMemo(() => {
    const filtered = filterElements(ELEMENTS_DATA, {
      searchQuery,
      selectedCategory,
      selectedState,
      selectedBlock,
      temperatureKelvin,
    });
    return new Set(filtered.map(e => e.number));
  }, [searchQuery, selectedCategory, selectedState, selectedBlock, temperatureKelvin]);

  const selectNextElement = useCallback(() => {
    setSelectedElement(prev => {
      if (!prev) return null;
      const currentIndex = ELEMENTS_DATA.findIndex(e => e.number === prev.number);
      if (currentIndex !== -1 && currentIndex < ELEMENTS_DATA.length - 1) {
        return ELEMENTS_DATA[currentIndex + 1];
      }
      return prev;
    });
  }, []);

  const selectPrevElement = useCallback(() => {
    setSelectedElement(prev => {
      if (!prev) return null;
      const currentIndex = ELEMENTS_DATA.findIndex(e => e.number === prev.number);
      if (currentIndex > 0) {
        return ELEMENTS_DATA[currentIndex - 1];
      }
      return prev;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedState('all');
    setSelectedBlock('all');
    setTemperatureKelvin(298.15);
    setHeatmapProperty('none');
  }, []);

  return {
    allElements: ELEMENTS_DATA,
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
  };
}
