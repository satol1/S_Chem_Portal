import type { ChemicalElement, HeatmapProperty, HeatmapPropertyInfo } from '../../types/periodicTable';

export const HEATMAP_PROPERTIES: Record<Exclude<HeatmapProperty, 'none'>, HeatmapPropertyInfo> = {
  atomicMass: {
    id: 'atomicMass',
    labelRu: 'Атомная масса',
    unit: 'а.е.м.',
    min: 1.008,
    max: 294,
    description: 'Масса атома, выраженная в атомных единицах массы.',
    lowColor: '#3b82f6',
    midColor: '#eab308',
    highColor: '#ef4444'
  },
  electronegativity: {
    id: 'electronegativity',
    labelRu: 'Электроотрицательность',
    unit: 'Полинг',
    min: 0.79,
    max: 3.98,
    description: 'Способность атома притягивать к себе общие электронные пары.',
    lowColor: '#06b6d4',
    midColor: '#84cc16',
    highColor: '#f97316'
  },
  density: {
    id: 'density',
    labelRu: 'Плотность',
    unit: 'г/см³',
    min: 0.00008988,
    max: 40.7,
    description: 'Масса вещества в единице объема при стандартных условиях.',
    lowColor: '#6366f1',
    midColor: '#ec4899',
    highColor: '#f43f5e'
  },
  meltingPoint: {
    id: 'meltingPoint',
    labelRu: 'Температура плавления',
    unit: 'K',
    min: 0.95,
    max: 3823,
    description: 'Температура перехода из твердого состояния в жидкое.',
    lowColor: '#38bdf8',
    midColor: '#facc15',
    highColor: '#dc2626'
  },
  boilingPoint: {
    id: 'boilingPoint',
    labelRu: 'Температура кипения',
    unit: 'K',
    min: 4.222,
    max: 5869,
    description: 'Температура перехода из жидкого состояния в газообразное.',
    lowColor: '#2dd4bf',
    midColor: '#fb923c',
    highColor: '#b91c1c'
  },
  atomicRadius: {
    id: 'atomicRadius',
    labelRu: 'Атомный радиус',
    unit: 'пм',
    min: 31,
    max: 348,
    description: 'Расстояние между ядром атома и самой дальней стабильной орбитой электронов.',
    lowColor: '#a855f7',
    midColor: '#06b6d4',
    highColor: '#10b981'
  },
  ionizationEnergy: {
    id: 'ionizationEnergy',
    labelRu: 'Энергия ионизации',
    unit: 'кДж/моль',
    min: 375.7,
    max: 2372.3,
    description: 'Энергия, необходимая для отрыва электрона от изолированного атома.',
    lowColor: '#3b82f6',
    midColor: '#a855f7',
    highColor: '#ec4899'
  },
  discoveredYear: {
    id: 'discoveredYear',
    labelRu: 'Год открытия',
    unit: 'год',
    min: 1669,
    max: 2010,
    description: 'Хронология открытия химических элементов от XVII века до XXI века.',
    lowColor: '#64748b',
    midColor: '#3b82f6',
    highColor: '#06b6d4'
  }
};

/**
 * Возвращает значение выбранного свойства для элемента
 */
export function getElementPropertyValue(element: ChemicalElement, property: HeatmapProperty): number | null {
  if (property === 'none') return null;

  switch (property) {
    case 'atomicMass':
      return typeof element.atomicMass === 'number' ? element.atomicMass : null;
    case 'electronegativity':
      return element.electronegativity;
    case 'density':
      return element.density;
    case 'meltingPoint':
      return element.meltingPoint;
    case 'boilingPoint':
      return element.boilingPoint;
    case 'atomicRadius':
      return element.atomicRadius ?? null;
    case 'ionizationEnergy':
      return element.ionizationEnergy ?? null;
    case 'discoveredYear':
      return typeof element.discoveredYear === 'number' ? element.discoveredYear : 1700;
    default:
      return null;
  }
}

/**
 * Рассчитывает относительный коэффициент 0.0 - 1.0 для цвета теплокарты
 */
export function getHeatmapRatio(val: number, min: number, max: number): number {
  if (max === min) return 0.5;
  const ratio = (val - min) / (max - min);
  return Math.min(Math.max(ratio, 0), 1);
}

/**
 * Формирует градиентный цвет для элемента на базе значения теплокарты
 */
export function getHeatmapColor(val: number | null, propInfo: HeatmapPropertyInfo): string {
  if (val === null) return 'rgba(30, 41, 59, 0.6)'; // нейтральный фон без данных

  const ratio = getHeatmapRatio(val, propInfo.min, propInfo.max);

  // Линейная интерполяция от голубого к желтому и красному
  if (ratio < 0.5) {
    const t = ratio * 2;
    return `hsl(${210 - t * 150}, 85%, ${45 + t * 5}%)`;
  } else {
    const t = (ratio - 0.5) * 2;
    return `hsl(${60 - t * 60}, 90%, ${50 - t * 5}%)`;
  }
}
