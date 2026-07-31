export interface Teacher {
  id: string;
  name: string;
  role: string;
  academicTitle: string;
  degree: string;
  experienceYears: number;
  department: string;
  university: string;
  photoUrl?: string;
  avatarBg: string;
  specialization: string[];
  achievements: string[];
  publicationsCount: number;
  bio: string;
  quote: string;
  profileUrl: string;
  tags: string[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  grade: string;
  duration: string;
  intensity: string;
  format: 'очно' | 'онлайн' | 'гибрид';
  description: string;
  features: string[];
  results: string[];
  icon: string;
  popular?: boolean;
  price: string;
  spotsLeft: number;
}

export type HybridizationType = 'sp' | 'sp2' | 'sp3';

export interface AtomData {
  element: string; // 'H', 'C', 'O', 'N', etc.
  x: number;
  y: number;
  z: number;
  hybridization?: HybridizationType;
}

export type RenderMode = 'ball-and-stick' | 'space-filling';

export interface RenderOptions {
  renderMode?: RenderMode;
  showHybridization?: boolean;
  transitionProgress?: number; // 0 for ball-and-stick, 1 for space-filling
}

export interface BondData {
  source: number;
  target: number;
  order: 1 | 2 | 3;
}

export interface Molecule {
  id: string;
  name: string;
  formula: string;
  iupacName: string;
  category: 'Органическая' | 'Неорганическая' | 'Биохимия' | 'Простая';
  description: string;
  atoms: AtomData[];
  bonds: BondData[];
  funFact: string;
}

export interface SkillNode {
  id: string;
  title: string;
  grade: string; // '8 класс', '9 класс', etc.
  level: 'Базовый' | 'Продвинутый' | 'Олимпиадный' | 'ВУЗ';
  description: string;
  topics: string[];
  icon: string;
  completed?: boolean;
}

export interface ReactionTask {
  id: string;
  title: string;
  unbalanced: string; // e.g. "Fe + O2 -> Fe2O3"
  reactants: { formula: string; correctCoef: number }[];
  products: { formula: string; correctCoef: number }[];
  explanation: string;
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
  hint: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  year: string;
  score: string;
  university: string;
  text: string;
  teacher: string;
  avatarBg: string;
}
