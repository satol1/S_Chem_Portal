export interface TopicCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  gradient: string;
}

export interface TrainerTopic {
  id: string;
  code: string;               // e.g. "T-01"
  categoryId: string;         // e.g. "general-ovr"
  title: string;
  subtitle: string;
  targetExam: string;         // "ЕГЭ Задание 29", "ОГЭ Задание 15", "8-9 класс"
  grade: '8-9 класс' | '10-11 класс' | '8-11 класс' | 'ЕГЭ' | 'Олимпиады';
  taskCount: number;
  available: boolean;
  badgeText: string;
  tags: string[];
  description: string;
}

export const TOPIC_CATEGORIES: TopicCategory[] = [
  {
    id: 'nitrogen-phosphorus',
    name: 'Азот и Фосфор (Решебники №29 и №31)',
    description: 'Комплексные тренажеры по химии соединений азота и фосфора: ОВР (Задание 29) и 4 уравнения неорганических реакций (Задание 31).',
    iconName: 'Zap',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'inorganic-rio',
    name: 'Неорганическая химия и РИО',
    description: 'Реакции ионного обмена, гидролиз, электролиз, свойства металлов, неметаллов и их соединений.',
    iconName: 'Droplet',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'organic-chains',
    name: 'Органическая химия и Цепочки',
    description: 'Углеводороды, кислород- и азотсодержащие соединения, механизмы реакций и цепочки превращений.',
    iconName: 'Atom',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'calculations-34',
    name: 'Расчетные задачи (Задания 33-34)',
    description: 'Количественный анализ, растворы, кристалогидраты, вычисление молекулярных формул и смеси.',
    iconName: 'Calculator',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'olympiad-exp',
    name: 'Олимпиады и Качественный анализ',
    description: 'Задачи повышенной сложности, мысленный эксперимент, идентификация веществ и аналитическая химия.',
    iconName: 'Trophy',
    gradient: 'from-rose-500 to-pink-600',
  }
];

export const TRAINER_TOPICS: TrainerTopic[] = [
  // Category 1: Nitrogen & Phosphorus
  {
    id: 'ovr-29',
    code: 'Т-29',
    categoryId: 'nitrogen-phosphorus',
    title: 'Решебник ОВР №29: Азот и Фосфор',
    subtitle: 'Расстановка коэффициентов и электронный баланс',
    targetExam: 'ЕГЭ Задание 29',
    grade: 'ЕГЭ',
    taskCount: 20,
    available: true,
    badgeText: 'АКТИВЕН • 20 Заданий',
    tags: ['Азот и Фосфор', 'ОВР', 'Электронный баланс', 'Задание 29'],
    description: 'Полный тренажер с конструктором решений, разделением задач по темам, автопроверкой и KaTeX-рендером. 20 вариантов с разбором.'
  },
  {
    id: 'inorg-31-np',
    code: 'Т-31',
    categoryId: 'nitrogen-phosphorus',
    title: 'Решебник №31: Азот и Фосфор',
    subtitle: 'Составление 4 уравнений реакций по 63 вариантам',
    targetExam: 'ЕГЭ Задание 31',
    grade: 'ЕГЭ',
    taskCount: 63,
    available: true,
    badgeText: 'АКТИВЕН • 63 Задания',
    tags: ['Азот и Фосфор', 'Задание 31', 'Цепочки реакций', 'Неорганика'],
    description: 'Новый тренажер 63 вариантов Задания 31 ЕГЭ по химии азота и фосфора. Подсказки, условия реакций и пошаговые разборы.'
  },
  {
    id: 'reactions-np',
    code: 'Т-48',
    categoryId: 'nitrogen-phosphorus',
    title: 'Решебник Реакций: Азот и Фосфор',
    subtitle: 'Составление и балансировка 48 ключевых уравнений реакций',
    targetExam: 'ЕГЭ / ОГЭ / ВУЗ',
    grade: '8-11 класс',
    taskCount: 48,
    available: true,
    badgeText: 'АКТИВЕН • 48 Реакций',
    tags: ['Азот и Фосфор', 'Уравнения реакций', 'Балансировка', 'Неорганика'],
    description: 'Интерактивный тренажер 48 ключевых уравнений химических реакций элементов группы азота и фосфора. Проверка коэффициентов, подсказки и KaTeX-разбор.'
  },
  {
    id: 'np-test-14-1',
    code: 'Т-14.1',
    categoryId: 'nitrogen-phosphorus',
    title: 'Тренажер 14.1: Азот и Фосфор',
    subtitle: '66 тестов: выбор 2 веществ, цепочки превращений X/Y и соответствия А-Г',
    targetExam: 'ЕГЭ / ОГЭ / ВсОШ',
    grade: '8-11 класс',
    taskCount: 66,
    available: true,
    badgeText: 'АКТИВЕН • 66 Заданий',
    tags: ['Азот и Фосфор', 'Тест 14.1', 'Выбор 2 элементов', 'Цепочки превращений', 'Соответствие'],
    description: 'Интерактивный тренажер 66 вариантов темы 14.1 (Азот и Фосфор). Выбор двух веществ, определение X и Y в цепочках превращений, установление соответствия солей и оксидов.'
  },
  {
    id: 'rio-30-np',
    code: 'Т-30',
    categoryId: 'nitrogen-phosphorus',
    title: 'Решебник РИО №30: Азот и Фосфор',
    subtitle: 'Молекулярные и ионные уравнения реакций обмена',
    targetExam: 'ЕГЭ Задание 30',
    grade: 'ЕГЭ',
    taskCount: 15,
    available: false,
    badgeText: 'В разработке',
    tags: ['Азот и Фосфор', 'РИО', 'Ионные уравнения'],
    description: 'Тренажер составления полных и сокращенных ионных уравнений для солей аммония, нитратов и фосфатов.'
  },


  {
    id: 'ox-states-02',
    code: 'Т-02',
    categoryId: 'general-ovr',
    title: 'Степени окисления элементов',
    subtitle: 'Определение высшей и низшей степени окисления',
    targetExam: 'ЕГЭ Задание 3 / ОГЭ 4',
    grade: '8-9 класс',
    taskCount: 30,
    available: false,
    badgeText: 'Скоро',
    tags: ['Степень окисления', 'Валентность', 'Периодический закон'],
    description: 'Тренажер нахождения степеней окисления в бинарных соединениях, кислотах и комплексных солях.'
  },
  {
    id: 'atom-structure-03',
    code: 'Т-03',
    categoryId: 'general-ovr',
    title: 'Электронные конфигурации атомов и ионов',
    subtitle: 's, p, d-орбитали, проскок электрона',
    targetExam: 'ЕГЭ Задание 1',
    grade: '10-11 класс',
    taskCount: 25,
    available: false,
    badgeText: 'В разработке',
    tags: ['Электронная формула', 'Валентные электроны', 'Возбужденное состояние'],
    description: 'Составление полных и сокращенных электронных формул элементов I-IV периодов.'
  },
  {
    id: 'kinetics-04',
    code: 'Т-04',
    categoryId: 'general-ovr',
    title: 'Скорость химических реакций и смещение равновесия',
    subtitle: 'Принцип Ле Шателье и закон действующих масс',
    targetExam: 'ЕГЭ Задания 18, 22',
    grade: 'ЕГЭ',
    taskCount: 20,
    available: false,
    badgeText: 'Скоро',
    tags: ['Равновесие', 'Катализ', 'Давление', 'Температура'],
    description: 'Тренажер определения направления смещения химического равновесия при изменении внешних условий.'
  },

  // Category 2: Inorganic & RIO
  {
    id: 'rio-30',
    code: 'Т-05',
    categoryId: 'inorganic-rio',
    title: 'Реакции ионного обмена (РИО)',
    subtitle: 'Молекулярные, полные и сокращенные ионные уравнения',
    targetExam: 'ЕГЭ Задание 30',
    grade: 'ЕГЭ',
    taskCount: 25,
    available: false,
    badgeText: 'Скоро',
    tags: ['РИО', 'Ионные уравнения', 'Осадок', 'Газ', 'Слабый электролит'],
    description: 'Конструктор ионных уравнений с выбором признаков протекания реакций.'
  },
  {
    id: 'hydrolysis-06',
    code: 'Т-06',
    categoryId: 'inorganic-rio',
    title: 'Гидролиз солей и среда растворов',
    subtitle: 'pH растворов, катионный и анионный гидролиз',
    targetExam: 'ЕГЭ Задание 21',
    grade: '10-11 класс',
    taskCount: 30,
    available: false,
    badgeText: 'В разработке',
    tags: ['Гидролиз', 'Индикаторы', 'pH', 'Лакмус'],
    description: 'Тренажер ранжирования растворов по возрастанию/убыванию pH.'
  },
  {
    id: 'electrolysis-07',
    code: 'Т-07',
    categoryId: 'inorganic-rio',
    title: 'Электролиз расплавов и растворов солей',
    subtitle: 'Катодные и анодные процессы',
    targetExam: 'ЕГЭ Задание 19',
    grade: 'ЕГЭ',
    taskCount: 20,
    available: false,
    badgeText: 'Скоро',
    tags: ['Электролиз', 'Катод', 'Анод', 'Продукты электролиза'],
    description: 'Определение продуктов на электродах при электролизе солей и кислот.'
  },
  {
    id: 'inorg-prop-08',
    code: 'Т-08',
    categoryId: 'inorganic-rio',
    title: 'Химические свойства оксидов, гидроксидов и солей',
    subtitle: 'Генетическая связь неорганических веществ',
    targetExam: 'ЕГЭ Задания 6-9, 31',
    grade: 'ЕГЭ',
    taskCount: 40,
    available: false,
    badgeText: 'В разработке',
    tags: ['Амфотерность', 'Кислотные оксиды', 'Щелочи', 'Соли'],
    description: 'Составление уравнений мысленного эксперимента и свойств неорганики.'
  },

  // Category 3: Organic
  {
    id: 'org-chains-32',
    code: 'Т-09',
    categoryId: 'organic-chains',
    title: 'Цепочки превращений органических веществ',
    subtitle: 'Задание 32 повышенной сложности',
    targetExam: 'ЕГЭ Задание 32',
    grade: 'ЕГЭ',
    taskCount: 15,
    available: false,
    badgeText: 'Скоро',
    tags: ['Органика', 'Цепочки', 'Замещение', 'Присоединение'],
    description: 'Тренажер расшифровки X1, X2, X3 и составления структурных уравнений.'
  },
  {
    id: 'org-nomenclature-10',
    code: 'Т-10',
    categoryId: 'organic-chains',
    title: 'Номенклатура IUPAC и изомерия органики',
    subtitle: 'Структурная, пространственная и межклассовая изомерия',
    targetExam: 'ЕГЭ Задания 11, 12',
    grade: '10-11 класс',
    taskCount: 35,
    available: false,
    badgeText: 'Скоро',
    tags: ['IUPAC', 'Изомеры', 'Гомологи', 'Гибридизация'],
    description: 'Интерактивный конструктор названий и структурных формул органических соединений.'
  },
  {
    id: 'oxygen-organic-11',
    code: 'Т-11',
    categoryId: 'organic-chains',
    title: 'Спирты, фенолы, альдегиды и карбоновые кислоты',
    subtitle: 'Качественные реакции и свойства функциональных групп',
    targetExam: 'ЕГЭ Задания 14-16',
    grade: '10-11 класс',
    taskCount: 30,
    available: false,
    badgeText: 'В разработке',
    tags: ['Спирты', 'Альдегиды', 'Этерификация', 'Серебряное зеркало'],
    description: 'Тренировка уравнений реакций окисления спиртов, этерификации и восстановительного аминирования.'
  },

  // Category 4: Calculations
  {
    id: 'calc-34-solutions',
    code: 'Т-12',
    categoryId: 'calculations-34',
    title: 'Расчетные задачи на растворы и смесь солей',
    subtitle: 'Массовая доля, атомистика, растворимость',
    targetExam: 'ЕГЭ Задание 34',
    grade: 'ЕГЭ',
    taskCount: 20,
    available: false,
    badgeText: 'Скоро',
    tags: ['Задание 34', 'Растворимость', 'Кристаллогидраты', 'Смеси'],
    description: 'Пошаговый тренажер алгоритмов решения задач повышенного уровня сложности.'
  },
  {
    id: 'calc-org-formula-13',
    code: 'Т-13',
    categoryId: 'calculations-34',
    title: 'Установление молекулярной формулы органических веществ',
    subtitle: 'Расчеты по продуктам сгорания и массовым долям',
    targetExam: 'ЕГЭ Задание 33',
    grade: 'ЕГЭ',
    taskCount: 25,
    available: false,
    badgeText: 'В разработке',
    tags: ['Задание 33', 'Продукты сгорания', 'Формула', 'Массовые доли'],
    description: 'Алгоритмический тренажер вывода эмпирической и истинной формулы вещества.'
  },

  // Category 5: Olympiads & Qualitative
  {
    id: 'qualitative-reactions-14',
    code: 'Т-14',
    categoryId: 'olympiad-exp',
    title: 'Качественные реакции на катионы и анионы',
    subtitle: 'Цвета осадков, газов и окрашивание пламени',
    targetExam: 'ЕГЭ Задание 24 / ОГЭ 23',
    grade: '8-11 класс',
    taskCount: 40,
    available: false,
    badgeText: 'Скоро',
    tags: ['Качественный анализ', 'Осадки', 'Цвет пламени', 'Идентификация'],
    description: 'Визуальный тренажер распознавания неорганических и органических веществ.'
  },
  {
    id: 'olympiad-hard-15',
    code: 'Т-15',
    categoryId: 'olympiad-exp',
    title: 'Олимпиадная химия: Задачи Всеросса и "Ломоносов"',
    subtitle: 'Сложный синтез, матричные задачи и кристаллохимия',
    targetExam: 'Олимпиады ВСОШ',
    grade: 'Олимпиады',
    taskCount: 15,
    available: false,
    badgeText: 'В разработке',
    tags: ['ВСОШ', 'Ломоносов', 'Высшая проба', 'Матрицы'],
    description: 'Специальный модуль подготовки к заключительным этапам школьных олимпиад.'
  }
];
