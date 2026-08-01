export type ElementCategory = 
  | 'alkali-metal'          // Щелочные металлы
  | 'alkaline-earth-metal'  // Щёлочноземельные металлы
  | 'transition-metal'      // Переходные металлы
  | 'post-transition-metal' // Постпереходные металлы
  | 'metalloid'             // Полуметаллы (Металлоиды)
  | 'reactive-nonmetal'     // Неметаллы
  | 'halogen'               // Галогены
  | 'noble-gas'             // Благородные газы
  | 'lanthanide'            // Лантаноиды
  | 'actinide'              // Актиноиды
  | 'unknown';              // Неизвестная категория

export type MatterState = 'solid' | 'liquid' | 'gas' | 'synthetic';

export type ElementBlock = 's' | 'p' | 'd' | 'f';

export interface ChemicalElement {
  number: number;                   // Атомный номер (1-118)
  symbol: string;                   // Символ (H, He, Li...)
  nameRu: string;                   // Название на русском (Водород)
  nameEn: string;                   // Название на английском (Hydrogen)
  latinName: string;                // Латинское название (Hydrogenium)
  atomicMass: number | string;      // Атомная масса (а.е.м.)
  category: ElementCategory;        // Категория
  period: number;                   // Период (1-7)
  group: number | null;             // Группа (1-18) (null для лантаноидов/актиноидов)
  block: ElementBlock;              // Блок (s, p, d, f)
  electronConfiguration: string;    // Электронная конфигурация (1s¹)
  shells: number[];                 // Распределение электронов по слоям [1] или [2, 8, 18, 7]
  electronegativity: number | null; // Электроотрицательность по Полингу
  density: number | null;           // Плотность в г/см³ (или г/л для газов) при 20°C
  meltingPoint: number | null;      // Температура плавления в Кельвинах
  boilingPoint: number | null;      // Температура кипения в Кельвинах
  phaseAtSTP: MatterState;          // Состояние при стандартных условиях (298.15 K / 25°C)
  discoveredYear: number | string;  // Год открытия или "Древность"
  discoverer: string;               // Открыватель / Авторы открытия
  summaryRu: string;                // Краткое описание на русском
  applicationsRu: string[];        // Области применения
  oxidationStates?: string;         // Степени окисления
  ionizationEnergy?: number | null; // Энергия первой ионизации (кДж/моль)
  atomicRadius?: number | null;     // Атомный радиус (пм)
  covalentRadius?: number | null;   // Ковалентный радиус (пм)
  crystalStructure?: string;        // Кристаллическая решетка (ГЦК, ОЦК, ГПУ...)
  abundanceEarthCrust?: string;     // Распространенность в земной коре
}

export interface CategoryInfo {
  id: ElementCategory;
  nameRu: string;
  nameEn: string;
  color: string;           // Основной цвет (hex/hsl)
  borderColor: string;     // Цвет границы
  glowColor: string;       // Неоновое свечение
  description: string;
}

export type HeatmapProperty = 
  | 'none'
  | 'atomicMass'
  | 'electronegativity'
  | 'density'
  | 'meltingPoint'
  | 'boilingPoint'
  | 'atomicRadius'
  | 'ionizationEnergy'
  | 'discoveredYear';

export interface HeatmapPropertyInfo {
  id: HeatmapProperty;
  labelRu: string;
  unit: string;
  min: number;
  max: number;
  description: string;
  lowColor: string;  // e.g. '#3b82f6' (blue)
  midColor: string;  // e.g. '#eab308' (yellow)
  highColor: string; // e.g. '#ef4444' (red)
}
