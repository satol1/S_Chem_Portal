import type { MultipleChoiceMatchingTask } from '../../types/trainer';

export const MATCHING_TASKS: MultipleChoiceMatchingTask[] = [
  {
    id: 39,
    title: 'Задание 39: Реакции азотной кислоты и оксидов железа/меди',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) FeO + HNO₃ (конц)',
      'Б) Fe₃O₄ + HNO₃ (конц)',
      'В) Cu + HNO₃ (конц)',
      'Г) CuO + HNO₃ (разб)'
    ],
    options: [
      { id: 1, text: 'Fe(NO₃)₂ + H₂O' },
      { id: 2, text: 'Cu(NO₃)₂ + H₂O' },
      { id: 3, text: 'Cu(NO₃)₂ + NO₂ + H₂O' },
      { id: 4, text: 'Fe(NO₃)₃ + NO₂ + H₂O' },
      { id: 5, text: 'Fe(NO₃)₂ + Fe(NO₃)₃ + H₂O' },
      { id: 6, text: 'Cu(NO₃)₂ + H₂' }
    ],
    correctMatching: [4, 4, 3, 2],
    hint: 'Подумайте о степенях окисления железа в FeO и Fe3O4 и сильных окислительных свойствах концентрированной азотной кислоты. Медь с концентрированной HNO3 образует бурый газ, а оксид меди(II) реагирует без ОВР.',
    explanation: 'Разбор соответствий: А) FeO + 4HNO3(конц) -> Fe(NO3)3 + NO2 + 2H2O (4). Б) Fe3O4 + 10HNO3(конц) -> 3Fe(NO3)3 + NO2 + 5H2O (4). В) Cu + 4HNO3(конц) -> Cu(NO3)2 + 2NO2 + 2H2O (3). Г) CuO + 2HNO3 -> Cu(NO3)2 + H2O (2). Ответ: 4, 4, 3, 2.',
    maxScore: 2
  },
  {
    id: 40,
    title: 'Задание 40: Реакции фосфатов и термическое разложение',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Na₂HPO₄ + H₃PO₄ (изб)',
      'Б) Na₃PO₄ + NaH₂PO₄',
      'В) KNO₃ --t-->',
      'Г) (NH₄)₂CO₃ --t-->'
    ],
    options: [
      { id: 1, text: 'KNO₂ + O₂' },
      { id: 2, text: 'NH₃ + CO₂ + H₂O' },
      { id: 3, text: 'N₂ + CO₂ + H₂O + H₂' },
      { id: 4, text: 'NaH₂PO₄' },
      { id: 5, text: 'K₂O + NO₂ + O₂' },
      { id: 6, text: 'Na₂HPO₄' }
    ],
    correctMatching: [4, 6, 1, 2],
    hint: 'Вспомните переходы между средними и кислыми солями фосфорной кислоты при добавлении кислоты или среднего фосфата, а также продукты термического разложения нитратов щелочных металлов и карбоната аммония.',
    explanation: 'Разбор соответствий: А) Na2HPO4 + H3PO4 -> 2NaH2PO4 (4). Б) Na3PO4 + NaH2PO4 -> 2Na2HPO4 (6). В) 2KNO3 --t--> 2KNO2 + O2 (1). Г) (NH4)2CO3 --t--> 2NH3 + CO2 + H2O (2). Ответ: 4, 6, 1, 2.',
    maxScore: 2
  },
  {
    id: 41,
    title: 'Задание 41: Реакции соединений фосфора со щелочью и кислотой',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) P + KOH (р-р) --t-->',
      'Б) P₂O₅ + KOH (изб)',
      'В) K₃PO₄ + H₃PO₄',
      'Г) P₂O₃ + KOH'
    ],
    options: [
      { id: 1, text: 'K₃PO₄ + H₂O' },
      { id: 2, text: 'PH₃ + KH₂PO₂' },
      { id: 3, text: 'KH₂PO₄' },
      { id: 4, text: 'K₂HPO₃ + H₂O' },
      { id: 5, text: 'K₃P + K₃PO₄ + H₂O' },
      { id: 6, text: 'K₃PO₄ + H₂' }
    ],
    correctMatching: [2, 1, 3, 4],
    hint: 'Вспомните продукты диспропорционирования белого фосфора в щелочи, нейтрализацию оксидов фосфора(V) и (III) избытком щелочи (учитывая двухосновность фосфористой кислоты), и перераспределение фосфата с фосфорной кислотой.',
    explanation: 'Разбор соответствий: А) 4P + 3KOH + 3H2O -> PH3 + 3KH2PO2 (2). Б) P2O5 + 6KOH -> 2K3PO4 + 3H2O (1). В) K3PO4 + 2H3PO4 -> 3KH2PO4 (3). Г) P2O3 + 4KOH -> 2K2HPO3 + H2O (4). Ответ: 2, 1, 3, 4.',
    maxScore: 2
  },
  {
    id: 42,
    title: 'Задание 42: Окисление фосфора и фосфина азотной кислотой',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) P + HNO₃ (конц) --t-->',
      'Б) CaO + HNO₃',
      'В) Ca + HNO₃ (р-р)',
      'Г) PH₃ + HNO₃ (конц) --t-->'
    ],
    options: [
      { id: 1, text: 'Ca(NO₃)₂ + H₂' },
      { id: 2, text: 'Ca(NO₃)₂ + H₂O' },
      { id: 3, text: 'P₂O₃ + N₂ + H₂O' },
      { id: 4, text: 'Ca(NO₃)₂ + N₂ + H₂O' },
      { id: 5, text: 'P₂O₅ + NH₃' },
      { id: 6, text: 'H₃PO₄ + NO₂ + H₂O' }
    ],
    correctMatching: [6, 2, 4, 6],
    hint: 'Фосфор и фосфин PH3 при окислении горячей концентрированной HNO3 дают ортофосфорную кислоту и бурый газ NO2. Активный металл Ca восстанавливает разбавленную HNO3 до молекулярного азота.',
    explanation: 'Разбор соответствий: А) P + 5HNO3(конц) -> H3PO4 + 5NO2 + H2O (6). Б) CaO + 2HNO3 -> Ca(NO3)2 + H2O (2). В) 5Ca + 12HNO3(разб) -> 5Ca(NO3)2 + N2 + 6H2O (4). Г) PH3 + 8HNO3(конц) -> H3PO4 + 8NO2 + 4H2O (6). Ответ: 6, 2, 4, 6.',
    maxScore: 2
  },
  {
    id: 43,
    title: 'Задание 43: Реакции нитридов и нитритов',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) K₃N + HCl (р-р, изб)',
      'Б) KNO₂ + HCl',
      'В) KNO₂ + NH₄Cl --t-->',
      'Г) KOH + NH₄Cl'
    ],
    options: [
      { id: 1, text: 'KOH + KCl + NO' },
      { id: 2, text: 'KCl + NH₄Cl' },
      { id: 3, text: 'KCl + HNO₂' },
      { id: 4, text: 'KCl + N₂ + H₂O' },
      { id: 5, text: 'Cl₂ + K₃N + H₂O' },
      { id: 6, text: 'KCl + NH₃ + H₂O' }
    ],
    correctMatching: [2, 3, 4, 6],
    hint: 'Гидролиз нитрида K3N соляной кислотой образует две соли, при реакции со щелочью из соли аммония вытесняется аммиак, а нагревание нитрита калия с солью аммония выделяет чистый N2.',
    explanation: 'Разбор соответствий: А) K3N + 4HCl -> 3KCl + NH4Cl (2). Б) KNO2 + HCl -> KCl + HNO2 (3). В) KNO2 + NH4Cl --t--> KCl + N2 + 2H2O (4). Г) KOH + NH4Cl -> KCl + NH3 + H2O (6). Ответ: 2, 3, 4, 6.',
    maxScore: 2
  },
  {
    id: 44,
    title: 'Задание 44: Реакции NO2 и термическое разложение солей аммония',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) KOH + NO₂',
      'Б) NH₄NO₃ --t-->',
      'В) KOH + NH₄NO₃',
      'Г) NH₄NO₂ --t-->'
    ],
    options: [
      { id: 1, text: 'NH₃ + NO₂ + H₂O' },
      { id: 2, text: 'KNO₂ + KNO₃ + H₂O' },
      { id: 3, text: 'KNO₂ + H₂O' },
      { id: 4, text: 'KNO₃ + NH₃ + H₂O' },
      { id: 5, text: 'N₂O + H₂O' },
      { id: 6, text: 'N₂ + H₂O' }
    ],
    correctMatching: [2, 5, 4, 6],
    hint: 'Разграничивайте продукты разложения солей аммония: нитрат аммония даёт закись азота N2O, а нитрит аммония — чистый азот N2. Диспропорционирование NO2 в щелочи даёт смесь двух солей.',
    explanation: 'Разбор соответствий: А) 2KOH + 2NO2 -> KNO2 + KNO3 + H2O (2). Б) NH4NO3 --t--> N2O + 2H2O (5). В) KOH + NH4NO3 -> KNO3 + NH3 + H2O (4). Г) NH4NO2 --t--> N2 + 2H2O (6). Ответ: 2, 5, 4, 6.',
    maxScore: 2
  },
  {
    id: 45,
    title: 'Задание 45: Реакции оксидов и гидроксида меди с азотной кислотой',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Cu₂O + HNO₃ (конц)',
      'Б) Cu(OH)₂ + HNO₃ (разб)',
      'В) Cu + HNO₃ (конц)',
      'Г) Cu(NO₃)₂ --t-->'
    ],
    options: [
      { id: 1, text: 'Cu(NO₃)₂ + NO₂ + H₂O' },
      { id: 2, text: 'Cu(NO₃)₂ + H₂O' },
      { id: 3, text: 'Cu + NO₂ + O₂' },
      { id: 4, text: 'CuO + NO₂ + O₂' },
      { id: 5, text: 'Cu(NO₃)₂ + NO + H₂O' },
      { id: 6, text: 'CuO + NO₂ + H₂O' }
    ],
    correctMatching: [1, 2, 1, 4],
    hint: 'Медь и оксид меди(I) Cu(+1) окисляются концентрированной HNO3 до соединения Cu(+2) с выделением бурого газа NO2. Разложение нитрата меди(II) дает оксид меди(II), NO2 и O2.',
    explanation: 'Разбор соответствий: А) Cu2O + 6HNO3(конц) -> 2Cu(NO3)2 + 2NO2 + 3H2O (1). Б) Cu(OH)2 + 2HNO3 -> Cu(NO3)2 + 2H2O (2). В) Cu + 4HNO3(конц) -> Cu(NO3)2 + 2NO2 + 2H2O (1). Г) 2Cu(NO3)2 --t--> 2CuO + 4NO2 + O2 (4). Ответ: 1, 2, 1, 4.',
    maxScore: 2
  },
  {
    id: 46,
    title: 'Задание 46: Реакции карбонатов и гидрокарбонатов кальция',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) CaCO₃ + CO₂ + H₂O',
      'Б) Ca(HCO₃)₂ + HNO₃',
      'В) Ca(HCO₃)₂ --t-->',
      'Г) Ca + HNO₃ (разб)'
    ],
    options: [
      { id: 1, text: 'Ca(NO₃)₂ + H₂O + CO₂' },
      { id: 2, text: 'CaCO₃ + CO₂ + H₂O' },
      { id: 3, text: 'Ca(OH)₂ + NO₂ + CO₂' },
      { id: 4, text: 'Ca(NO₃)₂ + H₂O + NO₂' },
      { id: 5, text: 'Ca(NO₃)₂ + H₂O + NH₄NO₃' },
      { id: 6, text: 'Ca(HCO₃)₂' }
    ],
    correctMatching: [6, 1, 2, 5],
    hint: 'Растворение CaCO3 в избытке CO2 и воды даёт кислую соль, разложение которой при нагревании возвращает средний карбонат. Реакция активного металла Ca с разбавленной HNO3 образует нитрат аммония.',
    explanation: 'Разбор соответствий: А) CaCO3 + CO2 + H2O -> Ca(HCO3)2 (6). Б) Ca(HCO3)2 + 2HNO3 -> Ca(NO3)2 + 2H2O + 2CO2 (1). В) Ca(HCO3)2 --t--> CaCO3 + CO2 + H2O (2). Г) 4Ca + 10HNO3(разб) -> 4Ca(NO3)2 + NH4NO3 + 3H2O (5). Ответ: 6, 1, 2, 5.',
    maxScore: 2
  },
  {
    id: 47,
    title: 'Задание 47: Взаимодействие фосфидов и солей фосфора',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) K₃P + H₂O',
      'Б) KH₂PO₄ + KOH',
      'В) KOH + P₂O₃',
      'Г) P + KOH (р-р)'
    ],
    options: [
      { id: 1, text: 'K₃PO₄ + H₂O' },
      { id: 2, text: 'K₂HPO₃ + H₂O' },
      { id: 3, text: 'PH₃ + KOH' },
      { id: 4, text: 'KH₂PO₂ + PH₃' },
      { id: 5, text: 'K₃P + H₂O' },
      { id: 6, text: 'K₂HPO₄ + H₂' }
    ],
    correctMatching: [3, 1, 2, 4],
    hint: 'Водный гидролиз фосфида K3P вытесняет газ фосфин PH3. Добавление KOH к кислым солям фосфора доводит их до средних солей, а P2O3 даёт соль фосфористой кислоты K2HPO3.',
    explanation: 'Разбор соответствий: А) K3P + 3H2O -> PH3 + 3KOH (3). Б) KH2PO4 + 2KOH -> K3PO4 + 2H2O (1). В) P2O3 + 4KOH -> 2K2HPO3 + H2O (2). Г) 4P + 3KOH + 3H2O -> 3KH2PO2 + PH3 (4). Ответ: 3, 1, 2, 4.',
    maxScore: 2
  },
  {
    id: 48,
    title: 'Задание 48: Окисление аммиака и оксидов азота',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) NH₃ + O₂ --кат,t-->',
      'Б) NH₃ + H₂O₂ (конц)',
      'В) N₂O + H₂',
      'Г) NH₄NO₃ --t-->'
    ],
    options: [
      { id: 1, text: 'HNO₂' },
      { id: 2, text: 'NO + H₂O' },
      { id: 3, text: 'N₂O + H₂O' },
      { id: 4, text: 'N₂ + H₂O' },
      { id: 5, text: 'HNO₃' },
      { id: 6, text: 'NH₃ + O₂' }
    ],
    correctMatching: [2, 4, 4, 3],
    hint: 'Каталитическое окисление аммиака образует оксид NO, в то время как окисление сильными пероксидами или восстановление N2O водородом приводит к свободному азоту N2.',
    explanation: 'Разбор соответствий: А) 4NH3 + 5O2 --Pt--> 4NO + 6H2O (2). Б) 2NH3 + 3H2O2 -> N2 + 6H2O (4). В) N2O + H2 -> N2 + H2O (4). Г) NH4NO3 --t--> N2O + 2H2O (3). Ответ: 2, 4, 4, 3.',
    maxScore: 2
  },
  {
    id: 49,
    title: 'Задание 49: Реакции меди и ее соединений с окислителями',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Cu + HNO₃ (конц)',
      'Б) CuS + O₂',
      'В) CuO + SO₃',
      'Г) Cu₂O + HNO₃ (конц)'
    ],
    options: [
      { id: 1, text: 'CuSO₄' },
      { id: 2, text: 'CuNO₃ + H₂O' },
      { id: 3, text: 'CuO + SO₂' },
      { id: 4, text: 'Cu(NO₃)₂ + H₂O + NO₂' },
      { id: 5, text: 'CuSO₃' },
      { id: 6, text: 'Cu(NO₃)₂ + H₂O + N₂' }
    ],
    correctMatching: [4, 3, 1, 4],
    hint: 'Обжиг сульфида CuS даёт оксид меди(II) и SO2. Реагируя с концентрированной азотной кислотой, медь и Cu2O дают нитрат меди(II), бурый газ NO2 и воду.',
    explanation: 'Разбор соответствий: А) Cu + 4HNO3(конц) -> Cu(NO3)2 + 2NO2 + 2H2O (4). Б) 2CuS + 3O2 -> 2CuO + 2SO2 (3). В) CuO + SO3 -> CuSO4 (1). Г) Cu2O + 6HNO3(конц) -> 2Cu(NO3)2 + 2NO2 + 3H2O (4). Ответ: 4, 3, 1, 4.',
    maxScore: 2
  },
  {
    id: 50,
    title: 'Задание 50: Продукты разложения нитратов и азотосодержащих веществ',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Легкий',
    taskPrompt: 'Установите соответствие между веществами и продуктами их разложения:',
    matchingLabels: [
      'А) HNO₃ --t-->',
      'Б) NH₄NO₃ --t-->',
      'В) NH₄NO₂ --t-->',
      'Г) Cu(NO₃)₂ --t-->'
    ],
    options: [
      { id: 1, text: 'N₂ + H₂O' },
      { id: 2, text: 'CuO + NO₂ + O₂' },
      { id: 3, text: 'NO₂ + H₂O + O₂' },
      { id: 4, text: 'Cu + NO₂ + O₂' },
      { id: 5, text: 'NO₂ + H₂' },
      { id: 6, text: 'N₂O + H₂O' }
    ],
    correctMatching: [3, 6, 1, 2],
    hint: 'Азотная кислота при нагревании буреет (разлагается на NO2, H2O и O2). Сравнивайте продукты разложения солей аммония и нитратов тяжелоокисляемых металлов.',
    explanation: 'Разбор соответствий: А) 4HNO3 --t--> 4NO2 + 2H2O + O2 (3). Б) NH4NO3 --t--> N2O + 2H2O (6). В) NH4NO2 --t--> N2 + 2H2O (1). Г) 2Cu(NO3)2 --t--> 2CuO + 4NO2 + O2 (2). Ответ: 3, 6, 1, 2.',
    maxScore: 2
  },
  {
    id: 51,
    title: 'Задание 51: Реакции соединений натрия с азотом и его оксидами',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Легкий',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) NaNO₃ --t-->',
      'Б) NaOH + NO₂',
      'В) Na₂O + HNO₃',
      'Г) Na₃N + H₂O'
    ],
    options: [
      { id: 1, text: 'NaNO₃ + H₂O' },
      { id: 2, text: 'NaNO₂ + O₂' },
      { id: 3, text: 'NaNO₃ + NaNO₂ + H₂O' },
      { id: 4, text: 'NaOH + NH₃' },
      { id: 5, text: 'Na₂O + NO₂' },
      { id: 6, text: 'NaNO₂ + H₂O' }
    ],
    correctMatching: [2, 3, 1, 4],
    hint: 'Поглощение NO2 раствором щелочи приводит к диспропорционированию (смесь нитрата и нитрита). Гидролиз нитрида Na3N водой вытесняет газ аммиак.',
    explanation: 'Разбор соответствий: А) 2NaNO3 --t--> 2NaNO2 + O2 (2). Б) 2NaOH + 2NO2 -> NaNO3 + NaNO2 + H2O (3). В) Na2O + 2HNO3 -> 2NaNO3 + H2O (1). Г) Na3N + 3H2O -> 3NaOH + NH3 (4). Ответ: 2, 3, 1, 4.',
    maxScore: 2
  },
  {
    id: 52,
    title: 'Задание 52: Свойства соединений цинка',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Zn(OH)₂ + KOH (р-р)',
      'Б) Zn(NO₃)₂ --t-->',
      'В) Zn + KOH (тв) --t-->',
      'Г) Zn + NO₂ --t-->'
    ],
    options: [
      { id: 1, text: 'K₂ZnO₂ + H₂' },
      { id: 2, text: 'K₂[Zn(OH)₄]' },
      { id: 3, text: 'K₂[Zn(OH)₄] + H₂' },
      { id: 4, text: 'ZnO + NO₂ + O₂' },
      { id: 5, text: 'ZnO + N₂' },
      { id: 6, text: 'Zn(NO₂)₂ + O₂' }
    ],
    correctMatching: [2, 4, 1, 5],
    hint: 'В растворе гидроксид цинка с KOH образует комплексный тетрагидроксоцинкат K2[Zn(OH)4]. Сплавление металического цинка с твердым KOH дает безводный цинкат K2ZnO2 и H2.',
    explanation: 'Разбор соответствий: А) Zn(OH)2 + 2KOH -> K2[Zn(OH)4] (2). Б) 2Zn(NO3)2 --t--> 2ZnO + 4NO2 + O2 (4). В) Zn + 2KOH --t--> K2ZnO2 + H2 (1). Г) 2Zn + 2NO2 --t--> 2ZnO + N2 (5). Ответ: 2, 4, 1, 5.',
    maxScore: 2
  },
  {
    id: 53,
    title: 'Задание 53: Реакции PCl5, K3P, S и NH3',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) PCl₅ + KOH (изб)',
      'Б) K₃P + HCl (р-р)',
      'В) S + HNO₃',
      'Г) NH₃ + SO₂ + H₂O'
    ],
    options: [
      { id: 1, text: 'H₂S + N₂ + H₂O' },
      { id: 2, text: 'H₃PO₄ + KCl' },
      { id: 3, text: 'K₃PO₄ + KCl + H₂O' },
      { id: 4, text: 'PH₃ + KCl' },
      { id: 5, text: 'NH₄HSO₃' },
      { id: 6, text: 'H₂SO₄ + NO' }
    ],
    correctMatching: [3, 4, 6, 5],
    hint: 'Избыток щелочи нейтрализует продукты гидролиза PCl5 до смеси солей K3PO4 и KCl. Сера S с азотной кислотой окисляется до серной кислоты.',
    explanation: 'Разбор соответствий: А) PCl5 + 8KOH -> K3PO4 + 5KCl + 4H2O (3). Б) K3P + 3HCl -> 3KCl + PH3 (4). В) S + 2HNO3 -> H2SO4 + 2NO (6). Г) NH3 + SO2 + H2O -> NH4HSO3 (5). Ответ: 3, 4, 6, 5.',
    maxScore: 2
  },
  {
    id: 54,
    title: 'Задание 54: Взаимодействие серебра и оксида серебра с азотной кислотой',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Ag + HNO₃ (конц)',
      'Б) Ag + HNO₃ (разб)',
      'В) AgNO₃ + KOH',
      'Г) Ag₂O + HNO₃'
    ],
    options: [
      { id: 1, text: 'AgNO₃ + H₂' },
      { id: 2, text: 'AgNO₃ + NO₂ + H₂O' },
      { id: 3, text: 'AgOH + KNO₃' },
      { id: 4, text: 'Ag₂O + H₂O + KNO₃' },
      { id: 5, text: 'AgNO₃ + NO + H₂O' },
      { id: 6, text: 'AgNO₃ + H₂O' }
    ],
    correctMatching: [2, 5, 4, 6],
    hint: 'Серебро с концентрированной HNO3 выделяет бурый газ NO2, с разбавленной — бесцветный NO. Гидроксид серебра AgOH неустойчив и разлагается на оксид Ag2O и воду.',
    explanation: 'Разбор соответствий: А) Ag + 2HNO3(конц) -> AgNO3 + NO2 + H2O (2). Б) 3Ag + 4HNO3(разб) -> 3AgNO3 + NO + 2H2O (5). В) 2AgNO3 + 2KOH -> Ag2O + 2KNO3 + H2O (4). Г) Ag2O + 2HNO3 -> 2AgNO3 + H2O (6). Ответ: 2, 5, 4, 6.',
    maxScore: 2
  },
  {
    id: 55,
    title: 'Задание 55: Реакции солей аммония и аммиака',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) NH₄Br + KOH',
      'Б) K₃N + HBr (изб)',
      'В) NH₃ + H₂SO₄',
      'Г) NH₄HSO₃ --t-->'
    ],
    options: [
      { id: 1, text: 'KBr + NH₃ + H₂O' },
      { id: 2, text: 'N₂ + S + H₂O' },
      { id: 3, text: 'KBr + NH₃' },
      { id: 4, text: 'KBr + NH₄Br' },
      { id: 5, text: 'NH₃ + H₂O + SO₂' },
      { id: 6, text: 'NH₄HSO₄' }
    ],
    correctMatching: [1, 4, 6, 5],
    hint: 'Соль NH4Br со щелочью выделяет газ аммиак NH3 и воду. Соотношение 1:1 между аммиаком и серной кислотой дает кислую соль гидросульфат аммония.',
    explanation: 'Разбор соответствий: А) NH4Br + KOH -> KBr + NH3 + H2O (1). Б) K3N + 4HBr -> 3KBr + NH4Br (4). В) NH3 + H2SO4 -> NH4HSO4 (6). Г) NH4HSO3 --t--> NH3 + SO2 + H2O (5). Ответ: 1, 4, 6, 5.',
    maxScore: 2
  },
  {
    id: 56,
    title: 'Задание 56: Реакции оксидов азота и меди со щелочами и кислотами',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Ca(OH)₂ + N₂O₅',
      'Б) Ca(OH)₂ + NO₂',
      'В) CuS + HNO₃ (конц) --t-->',
      'Г) CuSO₄ + NH₃ (р-р)'
    ],
    options: [
      { id: 1, text: 'H₂S + Cu(NO₃)₂' },
      { id: 2, text: 'Ca(NO₃)₂ + H₂O' },
      { id: 3, text: 'Ca(NO₃)₂ + H₂' },
      { id: 4, text: 'Ca(NO₃)₂ + Ca(NO₂)₂ + H₂O' },
      { id: 5, text: 'CuSO₄ + NO₂ + H₂O' },
      { id: 6, text: 'Cu(OH)₂ + (NH₄)₂SO₄' }
    ],
    correctMatching: [2, 4, 5, 6],
    hint: 'N2O5 является ангидридом азотной кислоты (образует только нитрат). NO2 диспропорционирует в щелочи на нитрат и нитрит. Водный аммиак осаждает Cu(OH)2 из раствора медного купороса.',
    explanation: 'Разбор соответствий: А) Ca(OH)2 + N2O5 -> Ca(NO3)2 + H2O (2). Б) 2Ca(OH)2 + 4NO2 -> Ca(NO3)2 + Ca(NO2)2 + 2H2O (4). В) CuS + 8HNO3(конц) --t--> CuSO4 + 8NO2 + 4H2O (5). Г) CuSO4 + 2(NH3·H2O) -> Cu(OH)2↓ + (NH4)2SO4 (6). Ответ: 2, 4, 5, 6.',
    maxScore: 2
  },
  {
    id: 57,
    title: 'Задание 57: Реакции азотной кислоты с оксидами и металлами',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Cu(NO₃)₂ --t-->',
      'Б) Mg(OH)₂ + HNO₃',
      'В) MgO + HNO₃ (разб)',
      'Г) Cu + HNO₃ (конц)'
    ],
    options: [
      { id: 1, text: 'Cu + NO₂ + O₂' },
      { id: 2, text: 'Mg(NO₃)₂ + H₂O' },
      { id: 3, text: 'Cu(NO₃)₂ + H₂O + NO₂' },
      { id: 4, text: 'CuO + NO₂ + O₂' },
      { id: 5, text: 'CuO + NO + H₂O' },
      { id: 6, text: 'Mg(NO₃)₂ + NO + H₂O' }
    ],
    correctMatching: [4, 2, 2, 3],
    hint: 'Разложение нитратов металлов средней активности даёт оксид металла, NO2 и O2. Оксид и гидроксид магния вступают в реакцию нейтрализации с HNO3 без изменения степеней окисления.',
    explanation: 'Разбор соответствий: А) 2Cu(NO3)2 --t--> 2CuO + 4NO2 + O2 (4). Б) Mg(OH)2 + 2HNO3 -> Mg(NO3)2 + 2H2O (2). В) MgO + 2HNO3 -> Mg(NO3)2 + H2O (2). Г) Cu + 4HNO3(конц) -> Cu(NO3)2 + 2NO2 + 2H2O (3). Ответ: 4, 2, 2, 3.',
    maxScore: 2
  },
  {
    id: 58,
    title: 'Задание 58: Превращения фосфатов и галогенидов фосфора со щелочью',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) Na₃PO₄ + H₃PO₄',
      'Б) NaH₂PO₄ + NaOH',
      'В) PCl₅ + NaOH (изб)',
      'Г) P₂O₅ + NaOH (изб)'
    ],
    options: [
      { id: 1, text: 'Na₃PO₄ + HCl + H₂O' },
      { id: 2, text: 'Na₃PO₄ + H₂O' },
      // Task 58 option 3
      { id: 3, text: 'NaH₂PO₂ + PH₃' },
      { id: 4, text: 'Na₂HPO₄' },
      { id: 5, text: 'Na₃PO₄ + NaCl + H₂O' },
      { id: 6, text: 'H₃PO₄ + NaCl + H₂O' }
    ],
    correctMatching: [4, 2, 5, 2],
    hint: 'Взаимодействие среднего фосфата с фосфорной кислотой приводит к гидрофосфату Na2HPO4. Полный гидролиз PCl5 избытком щелочи образует смесь солей Na3PO4 и NaCl.',
    explanation: 'Разбор соответствий: А) 2Na3PO4 + H3PO4 -> 3Na2HPO4 (4). Б) NaH2PO4 + 2NaOH -> Na3PO4 + 2H2O (2). В) PCl5 + 8NaOH -> Na3PO4 + 5NaCl + 4H2O (5). Г) P2O5 + 6NaOH -> 2Na3PO4 + 3H2O (2). Ответ: 4, 2, 5, 2.',
    maxScore: 2
  },
  {
    id: 59,
    title: 'Задание 59: Окисление и осаждение фосфатов',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) PH₃ + HNO₃ (конц)',
      'Б) P + HNO₃ (конц)',
      'В) K₃PO₄ + Al(NO₃)₃ (р-р)',
      'Г) NH₃ (р-р) + H₃PO₄'
    ],
    options: [
      { id: 1, text: 'NH₃ + H₃PO₄' },
      { id: 2, text: 'AlPO₄ + KNO₃' },
      { id: 3, text: 'Al(OH)₃ + P₂O₅ + KNO₃' },
      { id: 4, text: 'H₃PO₄ + NO₂ + H₂O' },
      { id: 5, text: '(NH₄)₂HPO₄' },
      { id: 6, text: 'HNO₃ + P + H₂O' }
    ],
    correctMatching: [4, 4, 2, 5],
    hint: 'Фосфин PH3 и фосфор P при окислении концентрированной HNO3 образуют H3PO4, бурый газ NO2 и воду. Реакция обмена фосфата калия с нитратом алюминия выпадает в осадок AlPO4.',
    explanation: 'Разбор соответствий: А) PH3 + 8HNO3(конц) -> H3PO4 + 8NO2 + 4H2O (4). Б) P + 5HNO3(конц) -> H3PO4 + 5NO2 + H2O (4). В) K3PO4 + Al(NO3)3 -> AlPO4↓ + 3KNO3 (2). Г) 2NH3 + H3PO4 -> (NH4)2HPO4 (5). Ответ: 4, 4, 2, 5.',
    maxScore: 2
  },
  {
    id: 60,
    title: 'Задание 60: Превращения гидрофосфатов и галогенидов калия',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) K₂HPO₄ + KOH',
      'Б) K₂HPO₄ + H₃PO₄',
      'В) PCl₅ + KOH (изб)',
      'Г) P₄ + KOH (р-р)'
    ],
    options: [
      { id: 1, text: 'K₃PO₄ + HCl + H₂O' },
      { id: 2, text: 'K₃PO₄ + H₂O' },
      { id: 3, text: 'KH₂PO₂ + PH₃' },
      { id: 4, text: 'KH₂PO₄' },
      { id: 5, text: 'K₃PO₄ + KCl + H₂O' },
      { id: 6, text: 'H₃PO₄ + KCl + H₂O' }
    ],
    correctMatching: [2, 4, 5, 3],
    hint: 'Добавление KOH к гидрофосфату K2HPO4 доводит его до среднего фосфата K3PO4. Диспропорционирование фосфора P4 в щелочи даёт гипофосфит KH2PO2 и фосфин PH3.',
    explanation: 'Разбор соответствий: А) K2HPO4 + KOH -> K3PO4 + H2O (2). Б) K2HPO4 + H3PO4 -> 2KH2PO4 (4). В) PCl5 + 8KOH -> K3PO4 + 5KCl + 4H2O (5). Г) P4 + 3KOH + 3H2O -> 3KH2PO2 + PH3 (3). Ответ: 2, 4, 5, 3.',
    maxScore: 2
  },
  {
    id: 61,
    title: 'Задание 61: Реакции соединений алюминия с аммиаком и азотной кислотой',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Средний',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) AlCl₃ + NH₃ · H₂O',
      'Б) Al(OH)₃ + HNO₃ (конц)',
      'В) Al + HNO₃',
      'Г) Al(OH)Cl₂ + HNO₃'
    ],
    options: [
      { id: 1, text: 'Al(NO₃)₃ + Cl₂ + H₂O' },
      { id: 2, text: 'Al(NO₃)₃ + NO + H₂O' },
      { id: 3, text: 'Al(NO₃)₃ + H₂O' },
      { id: 4, text: 'Al(OH)₃ + NH₄Cl' },
      { id: 5, text: 'Al(NO₃)₃ + HCl + H₂O' },
      { id: 6, text: 'Al₂O₃ + NO₂ + H₂O' }
    ],
    correctMatching: [4, 3, 2, 5],
    hint: 'Водный раствор аммиака выделяет белый осадок гидроксида алюминия Al(OH)3. Растворение металлического Al в разбавленной азотной кислоте вытесняет NO.',
    explanation: 'Разбор соответствий: А) AlCl3 + 3(NH3·H2O) -> Al(OH)3↓ + 3NH4Cl (4). Б) Al(OH)3 + 3HNO3 -> Al(NO3)3 + 3H2O (3). В) Al + 4HNO3(разб) -> Al(NO3)3 + NO + 2H2O (2). Г) Al(OH)Cl2 + 2HNO3 -> Al(NO3)3 + 2HCl + H2O (5). Ответ: 4, 3, 2, 5.',
    maxScore: 2
  },
  {
    id: 62,
    title: 'Задание 62: Окислительно-восстановительные реакции хрома и азотной кислоты',
    taskType: 'matching',
    subtopicId: 'matching',
    subtopicTitle: 'Установление соответствия',
    difficulty: 'Сложный',
    taskPrompt: 'Установите соответствие между реагирующими веществами и продуктами их взаимодействия:',
    matchingLabels: [
      'А) KNO₂ + K₂CrO₄ + H₂O',
      'Б) K₂CrO₄ + HNO₃',
      'В) KCrO₂ + HNO₃ (изб.)',
      'Г) K₃[Cr(OH)₆] (р-р) + HNO₃ (изб.)'
    ],
    options: [
      { id: 1, text: 'K₃[Cr(OH)₆] + NO' },
      { id: 2, text: 'KNO₃ + Cr(OH)₃ + KOH' },
      { id: 3, text: 'KNO₃ + Cr(NO₃)₃ + H₂O' },
      { id: 4, text: 'K₂Cr₂O₇ + KNO₃ + H₂O' },
      { id: 5, text: 'KNO₃ + Cr(OH)₃ + H₂O' },
      { id: 6, text: 'KCrO₂ + HNO₂' }
    ],
    correctMatching: [2, 4, 3, 3],
    hint: 'Нитрит калия восстанавливает хромат калия K2CrO4 в щелочной/водной среде до осадка Cr(OH)3. Избыток азотной кислоты разрушает комплексные соли хрома(III) до смеси нитратов.',
    explanation: 'Разбор соответствий: А) 3KNO2 + 2K2CrO4 + 5H2O -> 3KNO3 + 2Cr(OH)3↓ + 4KOH (2). Б) 2K2CrO4 + 2HNO3 -> K2Cr2O7 + 2KNO3 + H2O (4). В) KCrO2 + 4HNO3(изб) -> KNO3 + Cr(NO3)3 + 2H2O (3). Г) K3[Cr(OH)6] + 6HNO3(изб) -> 3KNO3 + Cr(NO3)3 + 6H2O (3). Ответ: 2, 4, 3, 3.',
    maxScore: 2
  }
];
