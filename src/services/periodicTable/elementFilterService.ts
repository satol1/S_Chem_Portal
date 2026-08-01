import type { ChemicalElement, ElementBlock, ElementCategory, MatterState } from '../../types/periodicTable';
import { getElementPhaseAtTemp } from './temperatureService';

export interface FilterState {
  searchQuery: string;
  selectedCategory: ElementCategory | 'all';
  selectedState: MatterState | 'all';
  selectedBlock: ElementBlock | 'all';
  temperatureKelvin: number;
}

export function filterElements(elements: ChemicalElement[], filters: FilterState): ChemicalElement[] {
  const query = filters.searchQuery.trim().toLowerCase();

  return elements.filter(el => {
    // 1. Поиск по названию (рус/англ), символу или номеру
    if (query) {
      const matchNameRu = el.nameRu.toLowerCase().includes(query);
      const matchNameEn = el.nameEn.toLowerCase().includes(query);
      const matchSymbol = el.symbol.toLowerCase() === query || el.symbol.toLowerCase().startsWith(query);
      const matchNumber = el.number.toString() === query;

      if (!matchNameRu && !matchNameEn && !matchSymbol && !matchNumber) {
        return false;
      }
    }

    // 2. Категория
    if (filters.selectedCategory !== 'all' && el.category !== filters.selectedCategory) {
      return false;
    }

    // 3. Блок (s, p, d, f)
    if (filters.selectedBlock !== 'all' && el.block !== filters.selectedBlock) {
      return false;
    }

    // 4. Агрегатное состояние при текущей температуре
    if (filters.selectedState !== 'all') {
      const currentPhase = getElementPhaseAtTemp(el, filters.temperatureKelvin);
      if (currentPhase !== filters.selectedState) {
        return false;
      }
    }

    return true;
  });
}
