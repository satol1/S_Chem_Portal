export interface ElectronicBalanceRow {
  element: string;           // e.g. "Fe", "N", "2I", "2P", "Cl₂"
  initialOxState: string;    // "+2", "+5", "0", "-1", "-3"
  electronChangeText: string;// "- 1ē", "+ 1ē", "- 16ē", "+ 6ē"
  electronCount: number;     // -1 (loss), +1 (gain), -16, etc.
  finalElement: string;      // "Fe", "N", "I₂", "2P", "2Cl"
  finalOxState: string;      // "+3", "+4", "0", "+5", "-1"
  multiplier: number;        // 1, 2, 3, 4, 8, 14, 16...
}

export interface OvrTask {
  id: number;
  title: string;
  unbalancedEquation: string;
  balancedEquation: string;
  katexEquation?: string;
  reactants: { formula: string; correctCoef: number }[];
  products: { formula: string; correctCoef: number }[];
  electronicBalance: ElectronicBalanceRow[];
  oxidant: {
    formula: string;
    atom: string;
    oxState: string;
    fullText: string;
  };
  reductant: {
    formula: string;
    atom: string;
    oxState: string;
    fullText: string;
  };
  alternativeOptions?: {
    balancedEquation: string;
    electronicBalance: ElectronicBalanceRow[];
    oxidantFullText: string;
    reductantFullText: string;
  }[];
  note?: string;
  maxScore: number;
  difficulty: 'Легкий' | 'Средний' | 'Сложный' | 'ЕГЭ Высокий';
  explanation: string;
  subtopicId?: string;
  subtopicTitle?: string;
}

export interface InorganicEquation {
  id: number; // 1, 2, 3, 4
  unbalanced: string;
  balanced: string;
  katex?: string;
  reactants: { formula: string; correctCoef: number }[];
  products: { formula: string; correctCoef: number }[];
  condition?: string;
  hint?: string;
}

export interface Inorganic31Task {
  id: number;
  title: string;
  subtopicId: string;
  subtopicTitle: string;
  difficulty?: 'Средний' | 'Сложный' | 'ЕГЭ Высокий';
  equations: InorganicEquation[];
  explanation: string;
}

export interface SubtopicFilterOption {
  id: string;
  title: string;
  count?: number;
}

export interface TrainerModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  taskCount: number;
  targetExam: string;
  badge: string;
  available: boolean;
  color: string;
  gradient: string;
}

export interface SingleReactionTask {
  id: number;
  title: string;
  taskPrompt: string;
  subtopicId: string;
  subtopicTitle: string;
  difficulty?: 'Легкий' | 'Средний' | 'Сложный' | 'ЕГЭ Высокий';
  unbalancedEquation: string;
  balancedEquation: string;
  katexEquation?: string;
  reactants: { formula: string; correctCoef: number }[];
  products: { formula: string; correctCoef: number }[];
  condition?: string;
  hint?: string;
  explanation: string;
  maxScore: number;
}

export type TaskType = 'select-two' | 'transformation-chain' | 'matching';

export interface MatchingPair {
  label: string;
  correctOptionId: number;
}

export interface TaskOption {
  id: number;
  text: string;
  katex?: string;
}

export interface MultipleChoiceMatchingTask {
  id: number;
  title: string;
  taskType: TaskType;
  subtopicId: string;
  subtopicTitle: string;
  difficulty?: 'Легкий' | 'Средний' | 'Сложный' | 'ЕГЭ Высокий';
  taskPrompt: string;
  schemeFormula?: string;
  options: TaskOption[];
  correctSelectTwo?: number[];
  correctX?: number;
  correctY?: number;
  matchingLabels?: string[];
  correctMatching?: number[];
  hint?: string;
  explanation: string;
  maxScore: number;
}

