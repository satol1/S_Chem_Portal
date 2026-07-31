import type { ReactionTask } from '../types';

export const REACTION_TASKS: ReactionTask[] = [
  {
    id: 'fe-o2',
    title: 'Окисление железа до оксида железа(III)',
    unbalanced: 'Fe + O₂ ➔ Fe₂O₃',
    difficulty: 'Легкий',
    reactants: [
      { formula: 'Fe', correctCoef: 4 },
      { formula: 'O₂', correctCoef: 3 }
    ],
    products: [
      { formula: 'Fe₂O₃', correctCoef: 2 }
    ],
    hint: 'Посчитайте атомы кислорода справа: в Fe₂O₃ их 3. Для четности увеличим перед оксидом коэффициент до 2 (итог 6 кислорода).',
    explanation: '4Fe + 3O₂ ➔ 2Fe₂O₃. Слева: 4 Fe и 6 O. Справа: 4 Fe и 6 O. Реакция сбалансирована!'
  },
  {
    id: 'ch4-o2',
    title: 'Горение метана',
    unbalanced: 'CH₄ + O₂ ➔ CO₂ + H₂O',
    difficulty: 'Средний',
    reactants: [
      { formula: 'CH₄', correctCoef: 1 },
      { formula: 'O₂', correctCoef: 2 }
    ],
    products: [
      { formula: 'CO₂', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    hint: 'Сначала уравняйте атомы водорода (слева 4 H, значит перед H₂O ставим 2), затем подсчитайте суммарный кислород справа.',
    explanation: 'CH₄ + 2O₂ ➔ CO₂ + 2H₂O. Углерода: 1=1. Водорода: 4=4. Кислорода: 4=4. Уравнение сбалансировано!'
  },
  {
    id: 'al-hcl',
    title: 'Взаимодействие алюминия с соляной кислотой',
    unbalanced: 'Al + HCl ➔ AlCl₃ + H₂',
    difficulty: 'Сложный',
    reactants: [
      { formula: 'Al', correctCoef: 2 },
      { formula: 'HCl', correctCoef: 6 }
    ],
    products: [
      { formula: 'AlCl₃', correctCoef: 2 },
      { formula: 'H₂', correctCoef: 3 }
    ],
    hint: 'В AlCl₃ три хлора, а в H₂ два водорода. Наименьшее общее кратное для (3×2) равно 6 перед HCl.',
    explanation: '2Al + 6HCl ➔ 2AlCl₃ + 3H₂↑. Типичная реакция замещения с выделением водорода.'
  }
];
