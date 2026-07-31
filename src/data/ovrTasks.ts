import type { OvrTask, TrainerModule, SubtopicFilterOption } from '../types/trainer';

export const OVR_SUBTOPICS: SubtopicFilterOption[] = [
  { id: 'all', title: 'Все подтемы ОВР (20 задач)' },
  { id: 'hno3-nitrates', title: 'Азотная кислота и нитраты' },
  { id: 'oxides-nitrites', title: 'Оксиды азота и нитриты' },
  { id: 'phosphorus-ph3', title: 'Фосфор и фосфин' },
  { id: 'phosphates-acids', title: 'Фосфорные кислоты и фосфаты' },
];

export const TRAINER_MODULES: TrainerModule[] = [
  {
    id: 'ovr-29',
    title: 'Решебник ОВР (Задание 29 ЕГЭ)',
    subtitle: 'Тема: Азот и Фосфор',
    description: 'Полный тренажер расстановки коэффициентов, электронного баланса и определения окислителя/восстановителя. 20 вариантов с разбором.',
    taskCount: 20,
    targetExam: 'ЕГЭ Задание 29',
    badge: 'АКТИВЕН • 20 Заданий',
    available: true,
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'inorg-31-np',
    title: 'Решебник №31: Азот и Фосфор',
    subtitle: 'Задание 31 ЕГЭ по химии',
    description: 'Интерактивный тренажер 63 вариантов по 4 химических уравнения реакций, подтверждающих взаимосвязь веществ.',
    taskCount: 63,
    targetExam: 'ЕГЭ Задание 31',
    badge: 'АКТИВЕН • 63 Задания',
    available: true,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'rio-30',
    title: 'Решебник РИО (Задание 30 ЕГЭ)',
    subtitle: 'Тема: Соединения Азота и Фосфора',
    description: 'Составление молекулярных, полных и сокращенных ионных уравнений. Определение условий (осадок, газ, слабый электролит).',
    taskCount: 15,
    targetExam: 'ЕГЭ Задание 30',
    badge: 'В разработке',
    available: false,
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'org-32',
    title: 'Цепочки превращений органики (№32)',
    subtitle: 'Азотсодержащая органика',
    description: 'Тренажер написания уравнений реакций аминов, аминокислот и нитросоединений с указанием условий.',
    taskCount: 12,
    targetExam: 'ЕГЭ Задание 32',
    badge: 'В разработке',
    available: false,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
  }
];


export const OVR_TASKS: OvrTask[] = [
  {
    id: 1,
    subtopicId: 'hno3-nitrates',
    subtopicTitle: 'Азотная кислота и нитраты',
    title: 'Задание 1: Взаимодействие дихромита железа(II) с азотной кислотой',
    unbalancedEquation: 'Fe(CrO₂)₂ + HNO₃ ➔ Fe(NO₃)₃ + Cr(NO₃)₃ + NO₂ + H₂O',
    balancedEquation: 'Fe(CrO₂)₂ + 10HNO₃ = Fe(NO₃)₃ + 2Cr(NO₃)₃ + NO₂ + 5H₂O',
    katexEquation: '\\ce{Fe(CrO2)2 + 10HNO3 -> Fe(NO3)3 + 2Cr(NO3)3 + NO2 + 5H2O}',
    reactants: [
      { formula: 'Fe(CrO₂)₂', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 10 }
    ],
    products: [
      { formula: 'Fe(NO₃)₃', correctCoef: 1 },
      { formula: 'Cr(NO₃)₃', correctCoef: 2 },
      { formula: 'NO₂', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 5 }
    ],
    electronicBalance: [
      {
        element: 'Fe',
        initialOxState: '+2',
        electronChangeText: '- 1ē',
        electronCount: -1,
        finalElement: 'Fe',
        finalOxState: '+3',
        multiplier: 1
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 2
      }
    ],
    reductant: {
      formula: 'Fe(CrO₂)₂',
      atom: 'Fe',
      oxState: '+2',
      fullText: 'Fe(CrO₂)₂ (Fe⁺²) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Сложный',
    explanation: 'Азотная кислота окисляет катион железа Fe⁺² до Fe⁺³, выделяя оксид азота(IV) NO₂. Азот принимает 1 электрон, железо отдает 1 электрон.'
  },
  {
    id: 2,
    title: 'Задание 2: Реакции с участием нитрита натрия',
    unbalancedEquation: 'Cl₂ + NaNO₂ + H₂O ➔ NaNO₃ + HCl',
    balancedEquation: 'Cl₂ + NaNO₂ + H₂O = NaNO₃ + 2HCl',
    katexEquation: '\\ce{Cl2 + NaNO2 + H2O -> NaNO3 + 2HCl}',
    reactants: [
      { formula: 'Cl₂', correctCoef: 1 },
      { formula: 'NaNO₂', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 1 }
    ],
    products: [
      { formula: 'NaNO₃', correctCoef: 1 },
      { formula: 'HCl', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: 'N',
        initialOxState: '+3',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'N',
        finalOxState: '+5',
        multiplier: 1
      },
      {
        element: 'Cl₂',
        initialOxState: '0',
        electronChangeText: '+ 2ē',
        electronCount: 2,
        finalElement: '2Cl',
        finalOxState: '-1',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'NaNO₂',
      atom: 'N',
      oxState: '+3',
      fullText: 'NaNO₂ (N⁺³) — восстановитель'
    },
    oxidant: {
      formula: 'Cl₂',
      atom: 'Cl',
      oxState: '0',
      fullText: 'Cl₂ — окислитель'
    },
    alternativeOptions: [
      {
        balancedEquation: 'CH₃COONH₄ + NaNO₂ = CH₃COONa + N₂ + 2H₂O',
        electronicBalance: [
          {
            element: '2N',
            initialOxState: '-3',
            electronChangeText: '- 6ē',
            electronCount: -6,
            finalElement: 'N₂',
            finalOxState: '0',
            multiplier: 1
          },
          {
            element: '2N',
            initialOxState: '+3',
            electronChangeText: '+ 6ē',
            electronCount: 6,
            finalElement: 'N₂',
            finalOxState: '0',
            multiplier: 1
          }
        ],
        oxidantFullText: 'NaNO₂ (N⁺³) — окислитель',
        reductantFullText: 'CH₃COONH₄ (N⁻³) — восстановитель'
      }
    ],
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Хлор как сильный окислитель переводит нитрит-ион (N⁺³) в нитрат-ион (N⁺⁵). Альтернативно ацетат аммония с нитритом натрия дает сопропорционирование азота в N₂.'
  },
  {
    id: 3,
    title: 'Задание 3: Окисление углерода / иодида кальция концентрированной HNO₃',
    unbalancedEquation: 'C + HNO₃ ➔ CO₂ + NO₂ + H₂O',
    balancedEquation: 'C + 4HNO₃ = CO₂ + 4NO₂ + 2H₂O',
    katexEquation: '\\ce{C + 4HNO3 -> CO2 + 4NO2 + 2H2O}',
    reactants: [
      { formula: 'C', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 4 }
    ],
    products: [
      { formula: 'CO₂', correctCoef: 1 },
      { formula: 'NO₂', correctCoef: 4 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: 'C',
        initialOxState: '0',
        electronChangeText: '- 4ē',
        electronCount: -4,
        finalElement: 'C',
        finalOxState: '+4',
        multiplier: 1
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 4
      }
    ],
    reductant: {
      formula: 'C',
      atom: 'C',
      oxState: '0',
      fullText: 'C — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    alternativeOptions: [
      {
        balancedEquation: 'CaI₂ + 4HNO₃ = Ca(NO₃)₂ + I₂ + 2NO₂ + 2H₂O',
        electronicBalance: [
          {
            element: '2I',
            initialOxState: '-1',
            electronChangeText: '- 2ē',
            electronCount: -2,
            finalElement: 'I₂',
            finalOxState: '0',
            multiplier: 1
          },
          {
            element: 'N',
            initialOxState: '+5',
            electronChangeText: '+ 1ē',
            electronCount: 1,
            finalElement: 'N',
            finalOxState: '+4',
            multiplier: 2
          }
        ],
        oxidantFullText: 'HNO₃ (N⁺⁵) — окислитель',
        reductantFullText: 'CaI₂ (I⁻¹) — восстановитель'
      }
    ],
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Концентрированная азотная кислота окисляет неметаллы (C⁰ ➔ C⁺⁴) и галогениды (I⁻¹ ➔ I₂⁰) с восстановлением азота до бурого газа NO₂.'
  },
  {
    id: 4,
    title: 'Задание 4: Окисление сульфата железа(II) азотной кислотой',
    unbalancedEquation: 'HNO₃ + FeSO₄ ➔ Fe(NO₃)₃ + H₂SO₄ + NO + H₂O',
    balancedEquation: '10HNO₃ + 3FeSO₄ = 3Fe(NO₃)₃ + 3H₂SO₄ + NO + 2H₂O',
    katexEquation: '\\ce{10HNO3 + 3FeSO4 -> 3Fe(NO3)3 + 3H2SO4 + NO + 2H2O}',
    reactants: [
      { formula: 'HNO₃', correctCoef: 10 },
      { formula: 'FeSO₄', correctCoef: 3 }
    ],
    products: [
      { formula: 'Fe(NO₃)₃', correctCoef: 3 },
      { formula: 'H₂SO₄', correctCoef: 3 },
      { formula: 'NO', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: 'Fe',
        initialOxState: '+2',
        electronChangeText: '- 1ē',
        electronCount: -1,
        finalElement: 'Fe',
        finalOxState: '+3',
        multiplier: 3
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 3ē',
        electronCount: 3,
        finalElement: 'N',
        finalOxState: '+2',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'FeSO₄',
      atom: 'Fe',
      oxState: '+2',
      fullText: 'FeSO₄ (Fe⁺²) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Сложный',
    explanation: 'Сульфат железа(II) окисляется азотной кислотой до соли Fe⁺³, при этом азот восстановлен до монооксида азота NO (N⁺²).'
  },
  {
    id: 5,
    title: 'Задание 5: Окисление сульфита натрия разбавленной HNO₃',
    unbalancedEquation: 'Na₂SO₃ + HNO₃ ➔ Na₂SO₄ + NO₂ + H₂O',
    balancedEquation: 'Na₂SO₃ + 2HNO₃ = Na₂SO₄ + 2NO₂ + H₂O',
    katexEquation: '\\ce{Na2SO3 + 2HNO3 -> Na2SO4 + 2NO2 + H2O}',
    reactants: [
      { formula: 'Na₂SO₃', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 2 }
    ],
    products: [
      { formula: 'Na₂SO₄', correctCoef: 1 },
      { formula: 'NO₂', correctCoef: 2 },
      { formula: 'H₂O', correctCoef: 1 }
    ],
    electronicBalance: [
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 2
      },
      {
        element: 'S',
        initialOxState: '+4',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'S',
        finalOxState: '+6',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'Na₂SO₃',
      atom: 'S',
      oxState: '+4',
      fullText: 'Na₂SO₃ (S⁺⁴) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Легкий',
    explanation: 'Сульфит-ион (S⁺⁴) отдаёт 2 электрона и превращается в сульфат-ион (S⁺⁶), азотная кислота восстанавливается до NO₂.'
  },
  {
    id: 6,
    title: 'Задание 6: Окисление иодида калия концентрированной HNO₃',
    unbalancedEquation: 'HNO₃ + KI ➔ KNO₃ + I₂ + NO₂ + H₂O',
    balancedEquation: '4HNO₃ + 2KI = 2KNO₃ + I₂ + 2NO₂ + 2H₂O',
    katexEquation: '\\ce{4HNO3 + 2KI -> 2KNO3 + I2 + 2NO2 + 2H2O}',
    reactants: [
      { formula: 'HNO₃', correctCoef: 4 },
      { formula: 'KI', correctCoef: 2 }
    ],
    products: [
      { formula: 'KNO₃', correctCoef: 2 },
      { formula: 'I₂', correctCoef: 1 },
      { formula: 'NO₂', correctCoef: 2 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 2
      },
      {
        element: '2I',
        initialOxState: '-1',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'I₂',
        finalOxState: '0',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'KI',
      atom: 'I',
      oxState: '-1',
      fullText: 'KI (I⁻¹) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Легкий',
    explanation: 'Иодид-ион I⁻¹ является сильным восстановителем и легко окисляется азотной кислотой до свободного иода I₂.'
  },
  {
    id: 7,
    title: 'Задание 7: Взаимодействие сероводорода с азотной кислотой',
    unbalancedEquation: 'H₂S + HNO₃ ➔ S + NO + H₂O',
    balancedEquation: '3H₂S + 2HNO₃ = 3S + 2NO + 4H₂O',
    katexEquation: '\\ce{3H2S + 2HNO3 -> 3S + 2NO + 4H2O}',
    reactants: [
      { formula: 'H₂S', correctCoef: 3 },
      { formula: 'HNO₃', correctCoef: 2 }
    ],
    products: [
      { formula: 'S', correctCoef: 3 },
      { formula: 'NO', correctCoef: 2 },
      { formula: 'H₂O', correctCoef: 4 }
    ],
    electronicBalance: [
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 3ē',
        electronCount: 3,
        finalElement: 'N',
        finalOxState: '+2',
        multiplier: 2
      },
      {
        element: 'S',
        initialOxState: '-2',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'S',
        finalOxState: '0',
        multiplier: 3
      }
    ],
    reductant: {
      formula: 'H₂S',
      atom: 'S',
      oxState: '-2',
      fullText: 'H₂S (S⁻²) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Сероводород восстанавливает разбавленную HNO₃ до бесцветного газа NO, сама сера выпадает в осадок (S⁰).'
  },
  {
    id: 8,
    title: 'Задание 8: Окисление фосфида кальция хлором в щелочной среде',
    unbalancedEquation: 'Ca₃P₂ + Cl₂ + NaOH ➔ NaCl + Ca₃(PO₄)₂ + H₂O',
    balancedEquation: 'Ca₃P₂ + 8Cl₂ + 16NaOH = 16NaCl + Ca₃(PO₄)₂ + 8H₂O',
    katexEquation: '\\ce{Ca3P2 + 8Cl2 + 16NaOH -> 16NaCl + Ca3(PO4)2 + 8H2O}',
    reactants: [
      { formula: 'Ca₃P₂', correctCoef: 1 },
      { formula: 'Cl₂', correctCoef: 8 },
      { formula: 'NaOH', correctCoef: 16 }
    ],
    products: [
      { formula: 'NaCl', correctCoef: 16 },
      { formula: 'Ca₃(PO₄)₂', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 8 }
    ],
    electronicBalance: [
      {
        element: '2P',
        initialOxState: '-3',
        electronChangeText: '- 16ē',
        electronCount: -16,
        finalElement: '2P',
        finalOxState: '+5',
        multiplier: 1
      },
      {
        element: 'Cl₂',
        initialOxState: '0',
        electronChangeText: '+ 2ē',
        electronCount: 2,
        finalElement: '2Cl',
        finalOxState: '-1',
        multiplier: 8
      }
    ],
    reductant: {
      formula: 'Ca₃P₂',
      atom: 'P',
      oxState: '-3',
      fullText: 'Ca₃P₂ (P⁻³) — восстановитель'
    },
    oxidant: {
      formula: 'Cl₂',
      atom: 'Cl',
      oxState: '0',
      fullText: 'Cl₂ — окислитель'
    },
    maxScore: 2,
    difficulty: 'ЕГЭ Высокий',
    explanation: 'Фосфид-ион (P⁻³) окисляется хлором сразу на 8 электронов на каждый атом фосфора (всего 16ē на 2P). Хлор принимает 2ē.'
  },
  {
    id: 9,
    title: 'Задание 9: Растворение цинка в азотной кислоте с выделением азота',
    unbalancedEquation: 'Zn + HNO₃ ➔ Zn(NO₃)₂ + N₂ + H₂O',
    balancedEquation: '5Zn + 12HNO₃ = 5Zn(NO₃)₂ + N₂ + 6H₂O',
    katexEquation: '\\ce{5Zn + 12HNO3 -> 5Zn(NO3)2 + N2 + 6H2O}',
    reactants: [
      { formula: 'Zn', correctCoef: 5 },
      { formula: 'HNO₃', correctCoef: 12 }
    ],
    products: [
      { formula: 'Zn(NO₃)₂', correctCoef: 5 },
      { formula: 'N₂', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 6 }
    ],
    electronicBalance: [
      {
        element: 'Zn',
        initialOxState: '0',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'Zn',
        finalOxState: '+2',
        multiplier: 5
      },
      {
        element: '2N',
        initialOxState: '+5',
        electronChangeText: '+ 10ē',
        electronCount: 10,
        finalElement: 'N₂',
        finalOxState: '0',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'Zn',
      atom: 'Zn',
      oxState: '0',
      fullText: 'Zn — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Активный металл цинк глубоко восстанавливает N⁺⁵ до чистого азота N₂⁰. 2 атома N берут 10 электронов.'
  },
  {
    id: 10,
    title: 'Задание 10: Взаимодействие нитрита калия с иодоводородной кислотой',
    unbalancedEquation: 'KNO₂ + HI ➔ KI + I₂ + NO + H₂O',
    balancedEquation: '2KNO₂ + 4HI = 2KI + I₂ + 2NO + 2H₂O',
    katexEquation: '\\ce{2KNO2 + 4HI -> 2KI + I2 + 2NO + 2H2O}',
    reactants: [
      { formula: 'KNO₂', correctCoef: 2 },
      { formula: 'HI', correctCoef: 4 }
    ],
    products: [
      { formula: 'KI', correctCoef: 2 },
      { formula: 'I₂', correctCoef: 1 },
      { formula: 'NO', correctCoef: 2 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: '2I',
        initialOxState: '-1',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'I₂',
        finalOxState: '0',
        multiplier: 1
      },
      {
        element: 'N',
        initialOxState: '+3',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+2',
        multiplier: 2
      }
    ],
    reductant: {
      formula: 'HI',
      atom: 'I',
      oxState: '-1',
      fullText: 'HI (I⁻¹) — восстановитель'
    },
    oxidant: {
      formula: 'KNO₂',
      atom: 'N',
      oxState: '+3',
      fullText: 'KNO₂ (N⁺³) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Нитрит-ион в кислой среде проявляет окислительные свойства и восстанавливается до NO, а иодид-ион I⁻¹ окисляется до I₂.'
  },
  {
    id: 11,
    title: 'Задание 11: Горение / окисление углерода в концентрированной азотной кислоте',
    unbalancedEquation: 'C + HNO₃ ➔ CO₂ + NO₂ + H₂O',
    balancedEquation: 'C + 4HNO₃ = CO₂ + 4NO₂ + 2H₂O',
    katexEquation: '\\ce{C + 4HNO3 -> CO2 + 4NO2 + 2H2O}',
    reactants: [
      { formula: 'C', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 4 }
    ],
    products: [
      { formula: 'CO₂', correctCoef: 1 },
      { formula: 'NO₂', correctCoef: 4 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: 'C',
        initialOxState: '0',
        electronChangeText: '- 4ē',
        electronCount: -4,
        finalElement: 'C',
        finalOxState: '+4',
        multiplier: 1
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 4
      }
    ],
    reductant: {
      formula: 'C',
      atom: 'C',
      oxState: '0',
      fullText: 'C — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Легкий',
    explanation: 'Атом углерода отдаёт 4 электрона, восстанавливая 4 молекулы азотной кислоты до NO₂.'
  },
  {
    id: 12,
    title: 'Задание 12: Окисление гидросульфида бария азотной кислотой',
    unbalancedEquation: 'Ba(HS)₂ + HNO₃ ➔ Ba(NO₃)₂ + S + NO₂ + H₂O',
    balancedEquation: 'Ba(HS)₂ + 6HNO₃ = Ba(NO₃)₂ + 2S + 4NO₂ + 4H₂O',
    katexEquation: '\\ce{Ba(HS)2 + 6HNO3 -> Ba(NO3)2 + 2S + 4NO2 + 4H2O}',
    reactants: [
      { formula: 'Ba(HS)₂', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 6 }
    ],
    products: [
      { formula: 'Ba(NO₃)₂', correctCoef: 1 },
      { formula: 'S', correctCoef: 2 },
      { formula: 'NO₂', correctCoef: 4 },
      { formula: 'H₂O', correctCoef: 4 }
    ],
    electronicBalance: [
      {
        element: '2S',
        initialOxState: '-2',
        electronChangeText: '- 4ē',
        electronCount: -4,
        finalElement: '2S',
        finalOxState: '0',
        multiplier: 1
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 4
      }
    ],
    reductant: {
      formula: 'Ba(HS)₂',
      atom: 'S',
      oxState: '-2',
      fullText: 'Ba(HS)₂ (S⁻²) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    note: 'Примечание: серу также можно окислить до +6 (S⁺⁶), в этом случае одним из продуктов должен являться осадок сульфата бария BaSO₄.',
    maxScore: 2,
    difficulty: 'Сложный',
    explanation: 'Гидросульфид-анион содержит серу в степени окисления -2, которая отдаёт электроны азотной кислоте.'
  },
  {
    id: 13,
    title: 'Задание 13: Взаимодействие сульфида цинка с концентрированной HNO₃',
    unbalancedEquation: 'ZnS + HNO₃ ➔ ZnSO₄ + NO₂ + H₂O',
    balancedEquation: 'ZnS + 8HNO₃ = ZnSO₄ + 8NO₂ + 4H₂O',
    katexEquation: '\\ce{ZnS + 8HNO3 -> ZnSO4 + 8NO2 + 4H2O}',
    reactants: [
      { formula: 'ZnS', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 8 }
    ],
    products: [
      { formula: 'ZnSO₄', correctCoef: 1 },
      { formula: 'NO₂', correctCoef: 8 },
      { formula: 'H₂O', correctCoef: 4 }
    ],
    electronicBalance: [
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 8
      },
      {
        element: 'S',
        initialOxState: '-2',
        electronChangeText: '- 8ē',
        electronCount: -8,
        finalElement: 'S',
        finalOxState: '+6',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'ZnS',
      atom: 'S',
      oxState: '-2',
      fullText: 'ZnS (S⁻²) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    alternativeOptions: [
      {
        balancedEquation: 'ZnS + 10HNO₃ = H₂SO₄ + Zn(NO₃)₂ + 8NO₂ + 4H₂O',
        electronicBalance: [
          {
            element: 'S',
            initialOxState: '-2',
            electronChangeText: '- 8ē',
            electronCount: -8,
            finalElement: 'S',
            finalOxState: '+6',
            multiplier: 1
          },
          {
            element: 'N',
            initialOxState: '+5',
            electronChangeText: '+ 1ē',
            electronCount: 1,
            finalElement: 'N',
            finalOxState: '+4',
            multiplier: 8
          }
        ],
        oxidantFullText: 'HNO₃ (N⁺⁵) — окислитель',
        reductantFullText: 'ZnS (S⁻²) — восстановитель'
      }
    ],
    maxScore: 2,
    difficulty: 'Сложный',
    explanation: 'Сера из сульфида ZnS (-2) полностью окисляется концентрированной HNO₃ до сульфата (+6), отдавая 8 электронов.'
  },
  {
    id: 14,
    title: 'Задание 14: Окисление аммиака перманганатом калия',
    unbalancedEquation: 'NH₃ + KMnO₄ ➔ MnO₂ + N₂ + KOH + H₂O',
    balancedEquation: '2NH₃ + 2KMnO₄ = 2MnO₂ + N₂ + 2KOH + 2H₂O',
    katexEquation: '\\ce{2NH3 + 2KMnO4 -> 2MnO2 + N2 + 2KOH + 2H2O}',
    reactants: [
      { formula: 'NH₃', correctCoef: 2 },
      { formula: 'KMnO₄', correctCoef: 2 }
    ],
    products: [
      { formula: 'MnO₂', correctCoef: 2 },
      { formula: 'N₂', correctCoef: 1 },
      { formula: 'KOH', correctCoef: 2 },
      { formula: 'H₂O', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: 'Mn',
        initialOxState: '+7',
        electronChangeText: '+ 3ē',
        electronCount: 3,
        finalElement: 'Mn',
        finalOxState: '+4',
        multiplier: 2
      },
      {
        element: '2N',
        initialOxState: '-3',
        electronChangeText: '- 6ē',
        electronCount: -6,
        finalElement: 'N₂',
        finalOxState: '0',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'NH₃',
      atom: 'N',
      oxState: '-3',
      fullText: 'NH₃ (N⁻³) — восстановитель'
    },
    oxidant: {
      formula: 'KMnO₄',
      atom: 'Mn',
      oxState: '+7',
      fullText: 'KMnO₄ (Mn⁺⁷) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Аммиак N⁻³ окисляется до свободного азота N₂, марганец Mn⁺⁷ восстановлен в нейтральной/водной среде до бурого оксида MnO₂.'
  },
  {
    id: 15,
    title: 'Задание 15: Окисление фосфида кальция манганатом/перманганатом в щелочи',
    unbalancedEquation: 'Ca₃P₂ + NaMnO₄ + NaOH ➔ Ca₃(PO₄)₂ + Na₂MnO₄ + H₂O',
    balancedEquation: 'Ca₃P₂ + 16NaMnO₄ + 16NaOH = Ca₃(PO₄)₂ + 16Na₂MnO₄ + 8H₂O',
    katexEquation: '\\ce{Ca3P2 + 16NaMnO4 + 16NaOH -> Ca3(PO4)2 + 16Na2MnO4 + 8H2O}',
    reactants: [
      { formula: 'Ca₃P₂', correctCoef: 1 },
      { formula: 'NaMnO₄', correctCoef: 16 },
      { formula: 'NaOH', correctCoef: 16 }
    ],
    products: [
      { formula: 'Ca₃(PO₄)₂', correctCoef: 1 },
      { formula: 'Na₂MnO₄', correctCoef: 16 },
      { formula: 'H₂O', correctCoef: 8 }
    ],
    electronicBalance: [
      {
        element: '2P',
        initialOxState: '-3',
        electronChangeText: '- 16ē',
        electronCount: -16,
        finalElement: '2P',
        finalOxState: '+5',
        multiplier: 1
      },
      {
        element: 'Mn',
        initialOxState: '+7',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'Mn',
        finalOxState: '+6',
        multiplier: 16
      }
    ],
    reductant: {
      formula: 'Ca₃P₂',
      atom: 'P',
      oxState: '-3',
      fullText: 'Ca₃P₂ (P⁻³) — восстановитель'
    },
    oxidant: {
      formula: 'NaMnO₄',
      atom: 'Mn',
      oxState: '+7',
      fullText: 'NaMnO₄ (Mn⁺⁷) — окислитель'
    },
    maxScore: 2,
    difficulty: 'ЕГЭ Высокий',
    explanation: 'В сильнощелочной среде (NaOH) перманганат Mn⁺⁷ восстанавливается ровно на 1 электрон до зеленого манганата Mn⁺⁶ (Na₂MnO₄).'
  },
  {
    id: 16,
    title: 'Задание 16: Окисление сульфита натрия азотной кислотой с выделением NO',
    unbalancedEquation: 'Na₂SO₃ + HNO₃ ➔ NO + Na₂SO₄ + H₂O',
    balancedEquation: '3Na₂SO₃ + 2HNO₃ = 2NO + 3Na₂SO₄ + H₂O',
    katexEquation: '\\ce{3Na2SO3 + 2HNO3 -> 2NO + 3Na2SO4 + H2O}',
    reactants: [
      { formula: 'Na₂SO₃', correctCoef: 3 },
      { formula: 'HNO₃', correctCoef: 2 }
    ],
    products: [
      { formula: 'NO', correctCoef: 2 },
      { formula: 'Na₂SO₄', correctCoef: 3 },
      { formula: 'H₂O', correctCoef: 1 }
    ],
    electronicBalance: [
      {
        element: 'S',
        initialOxState: '+4',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'S',
        finalOxState: '+6',
        multiplier: 3
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 3ē',
        electronCount: 3,
        finalElement: 'N',
        finalOxState: '+2',
        multiplier: 2
      }
    ],
    reductant: {
      formula: 'Na₂SO₃',
      atom: 'S',
      oxState: '+4',
      fullText: 'Na₂SO₃ (S⁺⁴) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Легкий',
    explanation: '3 молекулы сульфита натрия отдают суммарно 6 электронов 2 молекулам азотной кислоты.'
  },
  {
    id: 17,
    title: 'Задание 17: Взаимодействие магния с очень разбавленной HNO₃',
    unbalancedEquation: 'Mg + HNO₃ ➔ Mg(NO₃)₂ + NH₄NO₃ + H₂O',
    balancedEquation: '4Mg + 10HNO₃ = 4Mg(NO₃)₂ + NH₄NO₃ + 3H₂O',
    katexEquation: '\\ce{4Mg + 10HNO3 -> 4Mg(NO3)2 + NH4NO3 + 3H2O}',
    reactants: [
      { formula: 'Mg', correctCoef: 4 },
      { formula: 'HNO₃', correctCoef: 10 }
    ],
    products: [
      { formula: 'Mg(NO₃)₂', correctCoef: 4 },
      { formula: 'NH₄NO₃', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 3 }
    ],
    electronicBalance: [
      {
        element: 'Mg',
        initialOxState: '0',
        electronChangeText: '- 2ē',
        electronCount: -2,
        finalElement: 'Mg',
        finalOxState: '+2',
        multiplier: 4
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 8ē',
        electronCount: 8,
        finalElement: 'N',
        finalOxState: '-3',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'Mg',
      atom: 'Mg',
      oxState: '0',
      fullText: 'Mg — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Средний',
    explanation: 'Очень активный металл магний глубоко восстанавливает азот до нитрата аммония NH₄NO₃ (N⁻³), где азот принимает 8 электронов.'
  },
  {
    id: 18,
    title: 'Задание 18: Окисление оксида фосфора(III) гипохлоритом натрия',
    unbalancedEquation: 'NaClO + P₂O₃ + H₂O ➔ NaCl + H₃PO₄',
    balancedEquation: '2NaClO + P₂O₃ + 3H₂O = 2NaCl + 2H₃PO₄',
    katexEquation: '\\ce{2NaClO + P2O3 + 3H2O -> 2NaCl + 2H3PO4}',
    reactants: [
      { formula: 'NaClO', correctCoef: 2 },
      { formula: 'P₂O₃', correctCoef: 1 },
      { formula: 'H₂O', correctCoef: 3 }
    ],
    products: [
      { formula: 'NaCl', correctCoef: 2 },
      { formula: 'H₃PO₄', correctCoef: 2 }
    ],
    electronicBalance: [
      {
        element: '2P',
        initialOxState: '+3',
        electronChangeText: '- 4ē',
        electronCount: -4,
        finalElement: '2P',
        finalOxState: '+5',
        multiplier: 1
      },
      {
        element: 'Cl',
        initialOxState: '+1',
        electronChangeText: '+ 2ē',
        electronCount: 2,
        finalElement: 'Cl',
        finalOxState: '-1',
        multiplier: 2
      }
    ],
    reductant: {
      formula: 'P₂O₃',
      atom: 'P',
      oxState: '+3',
      fullText: 'P₂O₃ (P⁺³) — восстановитель'
    },
    oxidant: {
      formula: 'NaClO',
      atom: 'Cl',
      oxState: '+1',
      fullText: 'NaClO (Cl⁺¹) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Сложный',
    explanation: 'Фосфор P⁺³ окисляется гипохлоритом до фосфорной кислоты H₃PO₄ (P⁺⁵), а хлор Cl⁺¹ восстанавливается до хлорида NaCl (Cl⁻¹).'
  },
  {
    id: 19,
    title: 'Задание 19: Растворение карбоната железа(II) в азотной кислоте',
    unbalancedEquation: 'FeCO₃ + HNO₃ ➔ Fe(NO₃)₃ + NO + CO₂ + H₂O',
    balancedEquation: '3FeCO₃ + 10HNO₃ = 3Fe(NO₃)₃ + NO + 3CO₂ + 5H₂O',
    katexEquation: '\\ce{3FeCO3 + 10HNO3 -> 3Fe(NO3)3 + NO + 3CO2 + 5H2O}',
    reactants: [
      { formula: 'FeCO₃', correctCoef: 3 },
      { formula: 'HNO₃', correctCoef: 10 }
    ],
    products: [
      { formula: 'Fe(NO₃)₃', correctCoef: 3 },
      { formula: 'NO', correctCoef: 1 },
      { formula: 'CO₂', correctCoef: 3 },
      { formula: 'H₂O', correctCoef: 5 }
    ],
    electronicBalance: [
      {
        element: 'Fe',
        initialOxState: '+2',
        electronChangeText: '- 1ē',
        electronCount: -1,
        finalElement: 'Fe',
        finalOxState: '+3',
        multiplier: 3
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 3ē',
        electronCount: 3,
        finalElement: 'N',
        finalOxState: '+2',
        multiplier: 1
      }
    ],
    reductant: {
      formula: 'FeCO₃',
      atom: 'Fe',
      oxState: '+2',
      fullText: 'FeCO₃ (Fe⁺²) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'Сложный',
    explanation: 'Помимо выделения углекислого газа CO₂ при разложении карбоната, Fe⁺² окисляется азотной кислотой до Fe⁺³ с выделением NO.'
  },
  {
    id: 20,
    title: 'Задание 20: Окисление дисульфида натрия концентрированной HNO₃',
    unbalancedEquation: 'Na₂S₂ + HNO₃ ➔ NaNO₃ + H₂SO₄ + NO₂ + H₂O',
    balancedEquation: 'Na₂S₂ + 16HNO₃ = 2NaNO₃ + 2H₂SO₄ + 14NO₂ + 6H₂O',
    katexEquation: '\\ce{Na2S2 + 16HNO3 -> 2NaNO3 + 2H2SO4 + 14NO2 + 6H2O}',
    reactants: [
      { formula: 'Na₂S₂', correctCoef: 1 },
      { formula: 'HNO₃', correctCoef: 16 }
    ],
    products: [
      { formula: 'NaNO₃', correctCoef: 2 },
      { formula: 'H₂SO₄', correctCoef: 2 },
      { formula: 'NO₂', correctCoef: 14 },
      { formula: 'H₂O', correctCoef: 6 }
    ],
    electronicBalance: [
      {
        element: '2S',
        initialOxState: '-1',
        electronChangeText: '- 14ē',
        electronCount: -14,
        finalElement: '2S',
        finalOxState: '+6',
        multiplier: 1
      },
      {
        element: 'N',
        initialOxState: '+5',
        electronChangeText: '+ 1ē',
        electronCount: 1,
        finalElement: 'N',
        finalOxState: '+4',
        multiplier: 14
      }
    ],
    reductant: {
      formula: 'Na₂S₂',
      atom: 'S',
      oxState: '-1',
      fullText: 'Na₂S₂ (S⁻¹) — восстановитель'
    },
    oxidant: {
      formula: 'HNO₃',
      atom: 'N',
      oxState: '+5',
      fullText: 'HNO₃ (N⁺⁵) — окислитель'
    },
    maxScore: 2,
    difficulty: 'ЕГЭ Высокий',
    explanation: 'В дисульфиде натрия Na₂S₂ сера имеет степень окисления -1 (как в пероксидах для O). 2 атома S⁻¹ отдают по 7ē каждого (всего 14ē) до серной кислоты S⁺⁶.'
  }
];
