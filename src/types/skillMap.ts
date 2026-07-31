export type GradeLevel = '8-class' | '9-class' | '10-class' | '11-class' | 'university';

export type SkillBranch = 
  | 'inorganic'      // Неорганическая химия
  | 'organic'        // Органическая химия
  | 'general'        // Общая химия & Теория
  | 'physical'       // Физхимия, Термодинамика & Кинетика
  | 'analytical'     // Аналитическая химия & Эксперимент
  | 'olympiad'       // Олимпиадная химия (ВсОШ, Ломоносов, ДВИ)
  | 'stem_project';   // Метапредметный STEM & Исследования

export type BloomLevel = 
  | 'remember'     // Знание / Запоминание (ФГОС / Блум 1)
  | 'understand'   // Понимание / Объяснение (ФГОС / Блум 2)
  | 'apply'        // Применение / Расчет (Талызина / Блум 3)
  | 'analyze'      // Анализ / Закономерности (Давыдов / Блум 4)
  | 'evaluate'     // Оценка / Эксперимент (NGSS / Блум 5)
  | 'create';      // Синтез / Проект деятельность (Блум 6)

export type SkillMapViewMode = 'tree' | 'grid' | 'timeline' | 'matrix';

export interface SkillResource {
  type: 'trainer' | 'theory' | 'video' | 'lab';
  title: string;
  urlOrTopicId?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SkillNode {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  gradeLevel: GradeLevel;
  branch: SkillBranch;
  bloomLevel: BloomLevel;
  
  // Educational Frameworks alignment
  fgosStandard: string;     // e.g. "ФГОС ООО 3.1.2 / ФОП Химия 8-9"
  fipiExamTarget?: string;  // e.g. "ОГЭ №15, №21" / "ЕГЭ №29, №31, №34" / "ДВИ МГУ" / "ВсОШ"
  ngssStandard?: string;    // e.g. "NGSS HS-PS1-2: Chemical Reactions & Valence"
  pedagogicalNote?: string; // Concept from Galperin/Davydov/Shatalov
  
  // Graph connection
  prerequisites: string[]; // Skill IDs
  nextSkills: string[];    // Skill IDs
  
  // Position coordinates in canvas space (x, y)
  position: { x: number; y: number };
  
  // Practical resources & trainers
  resources?: SkillResource[];
  trainerTopicId?: string;
  
  // Self assessment check
  quiz?: QuizQuestion;
  
  // Meta competencies
  competencies: string[];
}

export interface SkillBranchMeta {
  id: SkillBranch;
  name: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  iconName: string;
}

export interface GradeLevelMeta {
  id: GradeLevel;
  title: string;
  subtitle: string;
  order: number;
  badgeColor: string;
}

export interface BloomLevelMeta {
  id: BloomLevel;
  name: string;
  num: number;
  desc: string;
}

export interface SkillFilterState {
  searchQuery: string;
  gradeLevel: GradeLevel | 'all';
  branch: SkillBranch | 'all';
  bloomLevel: BloomLevel | 'all';
}

export interface SkillMapStats {
  total: number;
  gradeStats: Record<GradeLevel, number>;
  branchStats: Record<SkillBranch, number>;
}
