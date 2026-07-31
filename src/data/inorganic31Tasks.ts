import type { Inorganic31Task, SubtopicFilterOption } from '../types/trainer';

export const INORGANIC_31_SUBTOPICS: SubtopicFilterOption[] = [
  { id: 'all', title: 'Все подтемы (63 варианта)' },
  { id: 'nitrates-decomposition', title: 'Разложение нитратов и солей аммония (Варианты 1-15)' },
  { id: 'nitric-acid-reactions', title: 'Реакции с HNO₃ и оксидами азота (Варианты 16-30)' },
  { id: 'phosphorus-production', title: 'Получение фосфора из апатитов и фосфоритов (Варианты 31-45)' },
  { id: 'phosphides-phosphates', title: 'Фосфиды, фосфин и фосфорсодержащие кислоты (Варианты 46-63)' },
];

export const INORGANIC_31_TASKS: Inorganic31Task[] = [
  // -------------------------------------------------------------
  // Раздел 1: Разложение нитратов и солей аммония (1-15)
  // -------------------------------------------------------------
  {
    id: 1,
    title: 'Вариант 1: Разложение нитрата натрия и реакции иодидов с марганцовкой',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Термическое разложение нитрата натрия дает нитрит и кислород. 2) Разложение нитрита аммония (при реакции со смесью солей) выделяет свободный азот. 3) Иодид-ион окисляется перманганатом калия до свободного иода. 4) Диспропорционирование иода в горячей щелочи образует иодид и иодат калия.',
    equations: [
      {
        id: 1,
        unbalanced: 'NaNO3 ➔ NaNO2 + O2',
        balanced: '2NaNO3 = 2NaNO2 + O2',
        katex: '\\ce{2NaNO3 ->[t^\\circ] 2NaNO2 + O2\\uparrow}',
        condition: 'нагревание',
        reactants: [{ formula: 'NaNO3', correctCoef: 2 }],
        products: [{ formula: 'NaNO2', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Нитрат натрия разлагается до нитрита натрия и кислорода.'
      },
      {
        id: 2,
        unbalanced: 'NaNO2 + NH4I ➔ N2 + NaI + H2O',
        balanced: 'NaNO2 + NH4I = N2 + NaI + 2H2O',
        katex: '\\ce{NaNO2 + NH4I ->[t^\\circ] N2\\uparrow + NaI + 2H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'NaNO2', correctCoef: 1 }, { formula: 'NH4I', correctCoef: 1 }],
        products: [{ formula: 'N2', correctCoef: 1 }, { formula: 'NaI', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Внутримолекулярное ОВР: нитрит аммония разлагается с выделением газа N₂.'
      },
      {
        id: 3,
        unbalanced: 'NaI + KMnO4 ➔ I2 + Na2MnO4 + K2MnO4',
        balanced: '2NaI + 2KMnO4 = I2 + Na2MnO4 + K2MnO4',
        katex: '\\ce{2NaI + 2KMnO4 -> I2 + Na2MnO4 + K2MnO4}',
        condition: 'нейтральная/щелочная среда',
        reactants: [{ formula: 'NaI', correctCoef: 2 }, { formula: 'KMnO4', correctCoef: 2 }],
        products: [{ formula: 'I2', correctCoef: 1 }, { formula: 'Na2MnO4', correctCoef: 1 }, { formula: 'K2MnO4', correctCoef: 1 }],
        hint: 'Иодид-ион окисляется до молекулярного иода I₂.'
      },
      {
        id: 4,
        unbalanced: 'I2 + KOH ➔ KI + KIO3 + H2O',
        balanced: '3I2 + 6KOH = 5KI + KIO3 + 3H2O',
        katex: '\\ce{3I2 + 6KOH ->[t^\\circ] 5KI + KIO3 + 3H2O}',
        condition: 'горячий раствор щелочи',
        reactants: [{ formula: 'I2', correctCoef: 3 }, { formula: 'KOH', correctCoef: 6 }],
        products: [{ formula: 'KI', correctCoef: 5 }, { formula: 'KIO3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 3 }],
        hint: 'Диспропорционирование галогена в горячей щелочи.'
      }
    ]
  },
  {
    id: 2,
    title: 'Вариант 2: Нитриты в углекислом газе, железная окалина и совместный гидролиз',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Нитрит натрия вытесняется углекислым газом. 2) Горение железа в кислороде дает окалину Fe₃O₄. 3) Растворение окалины в концентрированной HNO₃ дает нитрат железа(III) и NO₂. 4) Совместный гидролиз солей железа(III) и карбонатов приводит к выпадению Fe(OH)₃ и выделению CO₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'NaNO2 + CO2 ➔ Na2CO3 + NO2 + NO',
        balanced: '2NaNO2 + 2CO2 = 2Na2CO3 + O2',
        katex: '\\ce{2NaNO2 + 2CO2 -> 2Na2CO3 + O2\\uparrow}',
        condition: 'высокая температура',
        reactants: [{ formula: 'NaNO2', correctCoef: 2 }, { formula: 'CO2', correctCoef: 2 }],
        products: [{ formula: 'Na2CO3', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Взаимодействие нитритов с оксидами углерода при нагревании.'
      },
      {
        id: 2,
        unbalanced: 'Fe + O2 ➔ Fe3O4',
        balanced: '3Fe + 2O2 = Fe3O4',
        katex: '\\ce{3Fe + 2O2 ->[t^\\circ] Fe3O4}',
        condition: 'горение',
        reactants: [{ formula: 'Fe', correctCoef: 3 }, { formula: 'O2', correctCoef: 2 }],
        products: [{ formula: 'Fe3O4', correctCoef: 1 }],
        hint: 'Образование железной окалины Fe₃O₄.'
      },
      {
        id: 3,
        unbalanced: 'Fe3O4 + HNO3 ➔ Fe(NO3)3 + NO2 + H2O',
        balanced: 'Fe3O4 + 10HNO3 = 3Fe(NO3)3 + NO2 + 5H2O',
        katex: '\\ce{Fe3O4 + 10HNO3 -> 3Fe(NO3)3 + NO2\\uparrow + 5H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'Fe3O4', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 10 }],
        products: [{ formula: 'Fe(NO3)3', correctCoef: 3 }, { formula: 'NO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 5 }],
        hint: 'HNO₃ окисляет катион Fe²⁺ в составе окалины до Fe³⁺.'
      },
      {
        id: 4,
        unbalanced: 'Fe(NO3)3 + K2CO3 + H2O ➔ Fe(OH)3 + CO2 + KNO3',
        balanced: '2Fe(NO3)3 + 3K2CO3 + 3H2O = 2Fe(OH)3 + 3CO2 + 6KNO3',
        katex: '\\ce{2Fe(NO3)3 + 3K2CO3 + 3H2O -> 2Fe(OH)3v + 3CO2^ + 6KNO3}',
        condition: 'водный раствор',
        reactants: [{ formula: 'Fe(NO3)3', correctCoef: 2 }, { formula: 'K2CO3', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'Fe(OH)3', correctCoef: 2 }, { formula: 'CO2', correctCoef: 3 }, { formula: 'KNO3', correctCoef: 6 }],
        hint: 'Взаимное усиление гидролиза (совместный гидролиз).'
      }
    ]
  },
  {
    id: 3,
    title: 'Вариант 3: Аммиак из солей аммония, восстановление оксида меди и электролиз',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Получение аммиака из щелочи и хлорида аммония. 2) Аммиак восстанавливает оксид меди(II) до свободной меди. 3) Медь растворяется в разбавленной азотной кислоте с выделением NO. 4) Электролиз раствора нитрата меди(II) дает меди, кислород и азотную кислоту.',
    equations: [
      {
        id: 1,
        unbalanced: 'NH4Cl + Ca(OH)2 ➔ NH3 + H2O + CaCl2',
        balanced: '2NH4Cl + Ca(OH)2 = 2NH3 + 2H2O + CaCl2',
        katex: '\\ce{2NH4Cl + Ca(OH)2 ->[t^\\circ] 2NH3\\uparrow + 2H2O + CaCl2}',
        condition: 'нагревание',
        reactants: [{ formula: 'NH4Cl', correctCoef: 2 }, { formula: 'Ca(OH)2', correctCoef: 1 }],
        products: [{ formula: 'NH3', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }, { formula: 'CaCl2', correctCoef: 1 }],
        hint: 'Качественная реакция на ион аммония.'
      },
      {
        id: 2,
        unbalanced: 'NH3 + CuO ➔ Cu + N2 + H2O',
        balanced: '2NH3 + 3CuO = 3Cu + N2 + 3H2O',
        katex: '\\ce{2NH3 + 3CuO ->[t^\\circ] 3Cu + N2\\uparrow + 3H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'NH3', correctCoef: 2 }, { formula: 'CuO', correctCoef: 3 }],
        products: [{ formula: 'Cu', correctCoef: 3 }, { formula: 'N2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 3 }],
        hint: 'Восстановительные свойства аммиака.'
      },
      {
        id: 3,
        unbalanced: 'Cu + HNO3 ➔ Cu(NO3)2 + NO + H2O',
        balanced: '3Cu + 8HNO3 = 3Cu(NO3)2 + 2NO + 4H2O',
        katex: '\\ce{3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO\\uparrow + 4H2O}',
        condition: 'разбавленная кислота',
        reactants: [{ formula: 'Cu', correctCoef: 3 }, { formula: 'HNO3', correctCoef: 8 }],
        products: [{ formula: 'Cu(NO3)2', correctCoef: 3 }, { formula: 'NO', correctCoef: 2 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Растворение меди в разбавленной азотной кислоте.'
      },
      {
        id: 4,
        unbalanced: 'Cu(NO3)2 + H2O ➔ Cu + O2 + HNO3',
        balanced: '2Cu(NO3)2 + 2H2O = 2Cu + O2 + 4HNO3',
        katex: '\\ce{2Cu(NO3)2 + 2H2O ->[электролиз] 2Cu + O2\\uparrow + 4HNO3}',
        condition: 'электролиз раствора',
        reactants: [{ formula: 'Cu(NO3)2', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        products: [{ formula: 'Cu', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 4 }],
        hint: 'Электролиз нитрата меди(II) на инертных электродах.'
      }
    ]
  },
  {
    id: 4,
    title: 'Вариант 4: Сульфид меди и растворение сульфидов в концентрированной HNO₃',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Сложный',
    explanation: '1) Основный оксид с кислотой дает соль. 2) Совместный гидролиз сульфида алюминия. 3) Сероводород с сульфатом меди дает осадок CuS. 4) Сульфид меди(II) растворяется только в концентрированной HNO₃ с образованием сульфата и NO₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'CuO + H2SO4 ➔ CuSO4 + H2O',
        balanced: 'CuO + H2SO4 = CuSO4 + H2O',
        katex: '\\ce{CuO + H2SO4 -> CuSO4 + H2O}',
        condition: 'комнатная температура',
        reactants: [{ formula: 'CuO', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 1 }],
        products: [{ formula: 'CuSO4', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Реакция нейтрализации основного оксида.'
      },
      {
        id: 2,
        unbalanced: 'AlCl3 + Na2S + H2O ➔ Al(OH)3 + H2S + NaCl',
        balanced: '2AlCl3 + 3Na2S + 6H2O = 2Al(OH)3 + 3H2S + 6NaCl',
        katex: '\\ce{2AlCl3 + 3Na2S + 6H2O -> 2Al(OH)3v + 3H2S^ + 6NaCl}',
        condition: 'водный раствор',
        reactants: [{ formula: 'AlCl3', correctCoef: 2 }, { formula: 'Na2S', correctCoef: 3 }, { formula: 'H2O', correctCoef: 6 }],
        products: [{ formula: 'Al(OH)3', correctCoef: 2 }, { formula: 'H2S', correctCoef: 3 }, { formula: 'NaCl', correctCoef: 6 }],
        hint: 'Полный взаимный гидролиз солей.'
      },
      {
        id: 3,
        unbalanced: 'CuSO4 + H2S ➔ CuS + H2SO4',
        balanced: 'CuSO4 + H2S = CuS + H2SO4',
        katex: '\\ce{CuSO4 + H2S -> CuSv + H2SO4}',
        condition: 'выпадение осадка',
        reactants: [{ formula: 'CuSO4', correctCoef: 1 }, { formula: 'H2S', correctCoef: 1 }],
        products: [{ formula: 'CuS', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 1 }],
        hint: 'Образование нерастворимого в разбавленных кислотах CuS.'
      },
      {
        id: 4,
        unbalanced: 'CuS + HNO3 ➔ CuSO4 + NO2 + H2O',
        balanced: 'CuS + 8HNO3 = CuSO4 + 8NO2 + 4H2O',
        katex: '\\ce{CuS + 8HNO3 -> CuSO4 + 8NO2\\uparrow + 4H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'CuS', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 8 }],
        products: [{ formula: 'CuSO4', correctCoef: 1 }, { formula: 'NO2', correctCoef: 8 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Окисление сульфидной серы концентрированной азотной кислотой.'
      }
    ]
  },
  {
    id: 5,
    title: 'Вариант 5: Печный метод получения фосфора и его хлориды',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Сложный',
    explanation: '1) Восстановление фосфорита песком и коксом в электропечи дает белый фосфор. 2) Горение фосфора в избытке хлора образует PCl₅. 3) Гидролиз PCl₅ щелочью дает фосфат и хлорид. 4) Фосфат калия с гидроксидом лития дает осадок Li₃PO₄.',
    equations: [
      {
        id: 1,
        unbalanced: 'Ca3(PO4)2 + C + SiO2 ➔ P + CO + CaSiO3',
        balanced: 'Ca3(PO4)2 + 5C + 3SiO2 = 2P + 5CO + 3CaSiO3',
        katex: '\\ce{Ca3(PO4)2 + 5C + 3SiO2 ->[t^\\circ] 2P + 5CO\\uparrow + 3CaSiO3}',
        condition: 'электропечь',
        reactants: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'C', correctCoef: 5 }, { formula: 'SiO2', correctCoef: 3 }],
        products: [{ formula: 'P', correctCoef: 2 }, { formula: 'CO', correctCoef: 5 }, { formula: 'CaSiO3', correctCoef: 3 }],
        hint: 'Промышленный способ получения элементарного фосфора.'
      },
      {
        id: 2,
        unbalanced: 'P + Cl2 ➔ PCl5',
        balanced: '2P + 5Cl2 = 2PCl5',
        katex: '\\ce{2P + 5Cl2 -> 2PCl5}',
        condition: 'избыток хлора',
        reactants: [{ formula: 'P', correctCoef: 2 }, { formula: 'Cl2', correctCoef: 5 }],
        products: [{ formula: 'PCl5', correctCoef: 2 }],
        hint: 'Образование пентахлорида фосфора.'
      },
      {
        id: 3,
        unbalanced: 'PCl5 + KOH ➔ K3PO4 + KCl + H2O',
        balanced: 'PCl5 + 8KOH = K3PO4 + 5KCl + 4H2O',
        katex: '\\ce{PCl5 + 8KOH -> K3PO4 + 5KCl + 4H2O}',
        condition: 'избыток щелочи',
        reactants: [{ formula: 'PCl5', correctCoef: 1 }, { formula: 'KOH', correctCoef: 8 }],
        products: [{ formula: 'K3PO4', correctCoef: 1 }, { formula: 'KCl', correctCoef: 5 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Полный гидролиз галогенангидрида в щелочной среде.'
      },
      {
        id: 4,
        unbalanced: 'K3PO4 + LiOH ➔ Li3PO4 + KOH',
        balanced: 'K3PO4 + 3LiOH = Li3PO4 + 3KOH',
        katex: '\\ce{K3PO4 + 3LiOH -> Li3PO4v + 3KOH}',
        condition: 'раствор',
        reactants: [{ formula: 'K3PO4', correctCoef: 1 }, { formula: 'LiOH', correctCoef: 3 }],
        products: [{ formula: 'Li3PO4', correctCoef: 1 }, { formula: 'KOH', correctCoef: 3 }],
        hint: 'Малорастворимый фосфат лития выпадает в осадок.'
      }
    ]
  },
  {
    id: 6,
    title: 'Вариант 6: Нитрит калия и его окисление перманганатом',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Выпадение сульфата бария. 2) Серебро растворяется в концентрированной HNO₃. 3) Диспропорционирование NO₂ в щелочи дает нитрит и нитрат. 4) Нитрит калия окисляется KMnO₄ в нейтральной среде до нитрата.',
    equations: [
      {
        id: 1,
        unbalanced: 'K2SO4 + Ba(OH)2 ➔ BaSO4 + KOH',
        balanced: 'K2SO4 + Ba(OH)2 = BaSO4 + 2KOH',
        katex: '\\ce{K2SO4 + Ba(OH)2 -> BaSO4v + 2KOH}',
        condition: 'раствор',
        reactants: [{ formula: 'K2SO4', correctCoef: 1 }, { formula: 'Ba(OH)2', correctCoef: 1 }],
        products: [{ formula: 'BaSO4', correctCoef: 1 }, { formula: 'KOH', correctCoef: 2 }],
        hint: 'Качественная реакция на сульфат-ион.'
      },
      {
        id: 2,
        unbalanced: 'Ag + HNO3 ➔ AgNO3 + NO2 + H2O',
        balanced: 'Ag + 2HNO3 = AgNO3 + NO2 + H2O',
        katex: '\\ce{Ag + 2HNO3 -> AgNO3 + NO2\\uparrow + H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'Ag', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 2 }],
        products: [{ formula: 'AgNO3', correctCoef: 1 }, { formula: 'NO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Растворение серебра в концентрированной азотной кислоте.'
      },
      {
        id: 3,
        unbalanced: 'NO2 + KOH ➔ KNO2 + KNO3 + H2O',
        balanced: '2NO2 + 2KOH = KNO2 + KNO3 + H2O',
        katex: '\\ce{2NO2 + 2KOH -> KNO2 + KNO3 + H2O}',
        condition: 'охлаждение',
        reactants: [{ formula: 'NO2', correctCoef: 2 }, { formula: 'KOH', correctCoef: 2 }],
        products: [{ formula: 'KNO2', correctCoef: 1 }, { formula: 'KNO3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Поглощение оксида азота(IV) щелочью.'
      },
      {
        id: 4,
        unbalanced: 'KNO2 + KMnO4 + H2O ➔ KNO3 + MnO2 + KOH',
        balanced: '3KNO2 + 2KMnO4 + H2O = 3KNO3 + 2MnO2 + 2KOH',
        katex: '\\ce{3KNO2 + 2KMnO4 + H2O -> 3KNO3 + 2MnO2v + 2KOH}',
        condition: 'нейтральная среда',
        reactants: [{ formula: 'KNO2', correctCoef: 3 }, { formula: 'KMnO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 1 }],
        products: [{ formula: 'KNO3', correctCoef: 3 }, { formula: 'MnO2', correctCoef: 2 }, { formula: 'KOH', correctCoef: 2 }],
        hint: 'Окисление нитрита до нитрата в нейтральной среде.'
      }
    ]
  },
  {
    id: 7,
    title: 'Вариант 7: Термическое разложение нитрата меди(II) и окисление FeO',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Сложный',
    explanation: '1) Нитрат меди(II) разлагается на CuO, NO₂ и O₂. 2) Смесь NO₂ и O₂ с водой образует азотную кислоту. 3) Оксид железа(II) растворяется в HNO₃ с окислением до Fe³⁺. 4) Совместный гидролиз нитрата железа(III) с карбонатом калия.',
    equations: [
      {
        id: 1,
        unbalanced: 'Cu(NO3)2 ➔ CuO + NO2 + O2',
        balanced: '2Cu(NO3)2 = 2CuO + 4NO2 + O2',
        katex: '\\ce{2Cu(NO3)2 ->[t^\\circ] 2CuO + 4NO2\\uparrow + O2\\uparrow}',
        condition: 'нагревание',
        reactants: [{ formula: 'Cu(NO3)2', correctCoef: 2 }],
        products: [{ formula: 'CuO', correctCoef: 2 }, { formula: 'NO2', correctCoef: 4 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Разложение нитрата тяжелого металла.'
      },
      {
        id: 2,
        unbalanced: 'NO2 + O2 + H2O ➔ HNO3',
        balanced: '4NO2 + O2 + 2H2O = 4HNO3',
        katex: '\\ce{4NO2 + O2 + 2H2O -> 4HNO3}',
        condition: 'пропускание кислорода',
        reactants: [{ formula: 'NO2', correctCoef: 4 }, { formula: 'O2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        products: [{ formula: 'HNO3', correctCoef: 4 }],
        hint: 'Синтез азотной кислоты из оксида азота(IV) и кислорода.'
      },
      {
        id: 3,
        unbalanced: 'FeO + HNO3 ➔ Fe(NO3)3 + NO2 + H2O',
        balanced: 'FeO + 4HNO3 = Fe(NO3)3 + NO2 + 2H2O',
        katex: '\\ce{FeO + 4HNO3 ->[t^\\circ] Fe(NO3)3 + NO2\\uparrow + 2H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'FeO', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 4 }],
        products: [{ formula: 'Fe(NO3)3', correctCoef: 1 }, { formula: 'NO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Железо(II) окисляется азотной кислотой до железа(III).'
      },
      {
        id: 4,
        unbalanced: 'Fe(NO3)3 + K2CO3 + H2O ➔ Fe(OH)3 + CO2 + KNO3',
        balanced: '2Fe(NO3)3 + 3K2CO3 + 3H2O = 2Fe(OH)3 + 3CO2 + 6KNO3',
        katex: '\\ce{2Fe(NO3)3 + 3K2CO3 + 3H2O -> 2Fe(OH)3v + 3CO2^ + 6KNO3}',
        condition: 'водный раствор',
        reactants: [{ formula: 'Fe(NO3)3', correctCoef: 2 }, { formula: 'K2CO3', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'Fe(OH)3', correctCoef: 2 }, { formula: 'CO2', correctCoef: 3 }, { formula: 'KNO3', correctCoef: 6 }],
        hint: 'Взаимное усиление гидролиза.'
      }
    ]
  },
  {
    id: 8,
    title: 'Вариант 8: Фосфид калия и глубокая ОВР с серной кислотой',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Гидролиз фосфида калия дает фосфин PH₃. 2) Иодид калия с концентрированной серной кислотой окисляется до иода с выделением сероводорода H₂S. 3) H₂S нейтрализуется щелочью. 4) Совместный гидролиз сульфата алюминия и сульфида калия.',
    equations: [
      {
        id: 1,
        unbalanced: 'K3P + H2O ➔ KOH + PH3',
        balanced: 'K3P + 3H2O = 3KOH + PH3',
        katex: '\\ce{K3P + 3H2O -> 3KOH + PH3\\uparrow}',
        condition: 'гидролиз',
        reactants: [{ formula: 'K3P', correctCoef: 1 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'KOH', correctCoef: 3 }, { formula: 'PH3', correctCoef: 1 }],
        hint: 'Необратимый гидролиз бинарного соединения.'
      },
      {
        id: 2,
        unbalanced: 'KI + H2SO4 ➔ I2 + H2S + KHSO4 + H2O',
        balanced: '8KI + 9H2SO4 = 4I2 + H2S + 8KHSO4 + 4H2O',
        katex: '\\ce{8KI + 9H2SO4 -> 4I2 + H2S\\uparrow + 8KHSO4 + 4H2O}',
        condition: 'концентрированная H₂SO₄',
        reactants: [{ formula: 'KI', correctCoef: 8 }, { formula: 'H2SO4', correctCoef: 9 }],
        products: [{ formula: 'I2', correctCoef: 4 }, { formula: 'H2S', correctCoef: 1 }, { formula: 'KHSO4', correctCoef: 8 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Иодид-ионы восстановят H₂SO₄ до сероводорода.'
      },
      {
        id: 3,
        unbalanced: 'H2S + KOH ➔ K2S + H2O',
        balanced: 'H2S + 2KOH = K2S + 2H2O',
        katex: '\\ce{H2S + 2KOH -> K2S + 2H2O}',
        condition: 'избыток щелочи',
        reactants: [{ formula: 'H2S', correctCoef: 1 }, { formula: 'KOH', correctCoef: 2 }],
        products: [{ formula: 'K2S', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Нейтрализация сероводородной кислоты.'
      },
      {
        id: 4,
        unbalanced: 'K2S + Al2(SO4)3 + H2O ➔ Al(OH)3 + H2S + K2SO4',
        balanced: '3K2S + Al2(SO4)3 + 6H2O = 2Al(OH)3 + 3H2S + 3K2SO4',
        katex: '\\ce{3K2S + Al2(SO4)3 + 6H2O -> 2Al(OH)3v + 3H2S^ + 3K2SO4}',
        condition: 'водный раствор',
        reactants: [{ formula: 'K2S', correctCoef: 3 }, { formula: 'Al2(SO4)3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 6 }],
        products: [{ formula: 'Al(OH)3', correctCoef: 2 }, { formula: 'H2S', correctCoef: 3 }, { formula: 'K2SO4', correctCoef: 3 }],
        hint: 'Полный гидролиз солей.'
      }
    ]
  },
  {
    id: 9,
    title: 'Вариант 9: Каталитическое разложение перекиси водорода и азотная кислота',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Каталитическое разложение H₂O₂ дает кислород. 2) Горение железа в кислороде дает Fe₃O₄. 3) Окалина с концентрированной HNO₃ выделяет NO₂. 4) Взаимный гидролиз нитрата железа(III) с карбонатом калия.',
    equations: [
      {
        id: 1,
        unbalanced: 'H2O2 ➔ H2O + O2',
        balanced: '2H2O2 = 2H2O + O2',
        katex: '\\ce{2H2O2 ->[MnO2] 2H2O + O2\\uparrow}',
        condition: 'в присутствии MnO₂',
        reactants: [{ formula: 'H2O2', correctCoef: 2 }],
        products: [{ formula: 'H2O', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Диспропорционирование пероксида водорода.'
      },
      {
        id: 2,
        unbalanced: 'Fe + O2 ➔ Fe3O4',
        balanced: '3Fe + 2O2 = Fe3O4',
        katex: '\\ce{3Fe + 2O2 ->[t^\\circ] Fe3O4}',
        condition: 'горение',
        reactants: [{ formula: 'Fe', correctCoef: 3 }, { formula: 'O2', correctCoef: 2 }],
        products: [{ formula: 'Fe3O4', correctCoef: 1 }],
        hint: 'Образование окалины.'
      },
      {
        id: 3,
        unbalanced: 'Fe3O4 + HNO3 ➔ Fe(NO3)3 + NO2 + H2O',
        balanced: 'Fe3O4 + 10HNO3 = 3Fe(NO3)3 + NO2 + 5H2O',
        katex: '\\ce{Fe3O4 + 10HNO3 -> 3Fe(NO3)3 + NO2\\uparrow + 5H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'Fe3O4', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 10 }],
        products: [{ formula: 'Fe(NO3)3', correctCoef: 3 }, { formula: 'NO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 5 }],
        hint: 'HNO₃ окисляет катион Fe²⁺.'
      },
      {
        id: 4,
        unbalanced: 'Fe(NO3)3 + K2CO3 + H2O ➔ Fe(OH)3 + CO2 + KNO3',
        balanced: '2Fe(NO3)3 + 3K2CO3 + 3H2O = 2Fe(OH)3 + 3CO2 + 6KNO3',
        katex: '\\ce{2Fe(NO3)3 + 3K2CO3 + 3H2O -> 2Fe(OH)3v + 3CO2^ + 6KNO3}',
        condition: 'водный раствор',
        reactants: [{ formula: 'Fe(NO3)3', correctCoef: 2 }, { formula: 'K2CO3', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'Fe(OH)3', correctCoef: 2 }, { formula: 'CO2', correctCoef: 3 }, { formula: 'KNO3', correctCoef: 6 }],
        hint: 'Совместный гидролиз солей.'
      }
    ]
  },
  {
    id: 10,
    title: 'Вариант 10: Разложение кремневой кислоты и гидролиз PCl₅ в щелочи бария',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Сложный',
    explanation: '1) Термическое разложение кремневой кислоты дает оксид кремния(IV). 2) Печный метод восстановления фосфата кальция. 3) Хлорирование фосфора до PCl₅. 4) Полный гидролиз PCl₅ гидроксидом бария с выпадением фосфата бария.',
    equations: [
      {
        id: 1,
        unbalanced: 'H2SiO3 ➔ SiO2 + H2O',
        balanced: 'H2SiO3 = SiO2 + H2O',
        katex: '\\ce{H2SiO3 ->[t^\\circ] SiO2 + H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'H2SiO3', correctCoef: 1 }],
        products: [{ formula: 'SiO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Термический распад нерастворимой кислоты.'
      },
      {
        id: 2,
        unbalanced: 'Ca3(PO4)2 + SiO2 + C ➔ P + CO + CaSiO3',
        balanced: 'Ca3(PO4)2 + 3SiO2 + 5C = 2P + 5CO + 3CaSiO3',
        katex: '\\ce{Ca3(PO4)2 + 3SiO2 + 5C ->[t^\\circ] 2P + 5CO\\uparrow + 3CaSiO3}',
        condition: 'высокая температура',
        reactants: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'SiO2', correctCoef: 3 }, { formula: 'C', correctCoef: 5 }],
        products: [{ formula: 'P', correctCoef: 2 }, { formula: 'CO', correctCoef: 5 }, { formula: 'CaSiO3', correctCoef: 3 }],
        hint: 'Печный метод получения фосфора.'
      },
      {
        id: 3,
        unbalanced: 'P + Cl2 ➔ PCl5',
        balanced: '2P + 5Cl2 = 2PCl5',
        katex: '\\ce{2P + 5Cl2 -> 2PCl5}',
        condition: 'избыток хлора',
        reactants: [{ formula: 'P', correctCoef: 2 }, { formula: 'Cl2', correctCoef: 5 }],
        products: [{ formula: 'PCl5', correctCoef: 2 }],
        hint: 'Образование пентахлорида.'
      },
      {
        id: 4,
        unbalanced: 'PCl5 + Ba(OH)2 ➔ Ba3(PO4)2 + BaCl2 + H2O',
        balanced: '2PCl5 + 8Ba(OH)2 = Ba3(PO4)2 + 5BaCl2 + 8H2O',
        katex: '\\ce{2PCl5 + 8Ba(OH)2 -> Ba3(PO4)2v + 5BaCl2 + 8H2O}',
        condition: 'избыток щелочи бария',
        reactants: [{ formula: 'PCl5', correctCoef: 2 }, { formula: 'Ba(OH)2', correctCoef: 8 }],
        products: [{ formula: 'Ba3(PO4)2', correctCoef: 1 }, { formula: 'BaCl2', correctCoef: 5 }, { formula: 'H2O', correctCoef: 8 }],
        hint: 'Фосфат бария выпадает в осадок.'
      }
    ]
  },
  {
    id: 11,
    title: 'Вариант 11: Нитрат калия, бромиды и диспропорционирование брома',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Разложение нитрата калия. 2) Синтез N₂ из нитрита и бромида аммония. 3) Окисление KBr концентрированной H₂SO₄ с выделением Br₂ и SO₂. 4) Диспропорционирование брома в холодном растворе NaOH.',
    equations: [
      {
        id: 1,
        unbalanced: 'KNO3 ➔ KNO2 + O2',
        balanced: '2KNO3 = 2KNO2 + O2',
        katex: '\\ce{2KNO3 ->[t^\\circ] 2KNO2 + O2\\uparrow}',
        condition: 'нагревание',
        reactants: [{ formula: 'KNO3', correctCoef: 2 }],
        products: [{ formula: 'KNO2', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Термическое разложение нитрата калия.'
      },
      {
        id: 2,
        unbalanced: 'KNO2 + NH4Br ➔ N2 + KBr + H2O',
        balanced: 'KNO2 + NH4Br = N2 + KBr + 2H2O',
        katex: '\\ce{KNO2 + NH4Br ->[t^\\circ] N2\\uparrow + KBr + 2H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'KNO2', correctCoef: 1 }, { formula: 'NH4Br', correctCoef: 1 }],
        products: [{ formula: 'N2', correctCoef: 1 }, { formula: 'KBr', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Разложение нитрита аммония.'
      },
      {
        id: 3,
        unbalanced: 'KBr + H2SO4 ➔ Br2 + SO2 + KHSO4 + H2O',
        balanced: '2KBr + 3H2SO4 = Br2 + SO2 + 2KHSO4 + 2H2O',
        katex: '\\ce{2KBr + 3H2SO4 -> Br2 + SO2\\uparrow + 2KHSO4 + 2H2O}',
        condition: 'концентрированная H₂SO₄',
        reactants: [{ formula: 'KBr', correctCoef: 2 }, { formula: 'H2SO4', correctCoef: 3 }],
        products: [{ formula: 'Br2', correctCoef: 1 }, { formula: 'SO2', correctCoef: 1 }, { formula: 'KHSO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Бромид-ион восстанавливает серную кислоту до SO₂.'
      },
      {
        id: 4,
        unbalanced: 'Br2 + NaOH ➔ NaBr + NaBrO + H2O',
        balanced: 'Br2 + 2NaOH = NaBr + NaBrO + H2O',
        katex: '\\ce{Br2 + 2NaOH -> NaBr + NaBrO + H2O}',
        condition: 'без нагревания (при охлаждении)',
        reactants: [{ formula: 'Br2', correctCoef: 1 }, { formula: 'NaOH', correctCoef: 2 }],
        products: [{ formula: 'NaBr', correctCoef: 1 }, { formula: 'NaBrO', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Образование гипобромита в холодной щелочи.'
      }
    ]
  },
  {
    id: 12,
    title: 'Вариант 12: Каталитическое окисление аммиака и реакция с щелочами',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Каталитическое окисление аммиака на платине дает NO. 2) Окисление NO кислородом до NO₂. 3) Диспропорционирование NO₂ в щелочи при охлаждении дает нитрит и нитрат. 4) Нитрит натрия окисляется перманганатом калия в щелочной среде до нитрата.',
    equations: [
      {
        id: 1,
        unbalanced: 'NH3 + O2 ➔ NO + H2O',
        balanced: '4NH3 + 5O2 = 4NO + 6H2O',
        katex: '\\ce{4NH3 + 5O2 ->[Pt, t^\\circ] 4NO + 6H2O}',
        condition: 'катализатор Pt, t°',
        reactants: [{ formula: 'NH3', correctCoef: 4 }, { formula: 'O2', correctCoef: 5 }],
        products: [{ formula: 'NO', correctCoef: 4 }, { formula: 'H2O', correctCoef: 6 }],
        hint: 'Промышленный этап производства азотной кислоты.'
      },
      {
        id: 2,
        unbalanced: 'NO + O2 ➔ NO2',
        balanced: '2NO + O2 = 2NO2',
        katex: '\\ce{2NO + O2 -> 2NO2}',
        condition: 'комнатная температура',
        reactants: [{ formula: 'NO', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        products: [{ formula: 'NO2', correctCoef: 2 }],
        hint: 'Окисление бесцветного NO до бурого NO₂.'
      },
      {
        id: 3,
        unbalanced: 'NO2 + NaOH ➔ NaNO2 + NaNO3 + H2O',
        balanced: '2NO2 + 2NaOH = NaNO2 + NaNO3 + H2O',
        katex: '\\ce{2NO2 + 2NaOH -> NaNO2 + NaNO3 + H2O}',
        condition: 'при охлаждении',
        reactants: [{ formula: 'NO2', correctCoef: 2 }, { formula: 'NaOH', correctCoef: 2 }],
        products: [{ formula: 'NaNO2', correctCoef: 1 }, { formula: 'NaNO3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Образование смеси нитрита и нитрата.'
      },
      {
        id: 4,
        unbalanced: 'NaNO2 + KMnO4 + KOH ➔ NaNO3 + K2MnO4 + H2O',
        balanced: 'NaNO2 + 2KMnO4 + 2KOH = NaNO3 + 2K2MnO4 + H2O',
        katex: '\\ce{NaNO2 + 2KMnO4 + 2KOH -> NaNO3 + 2K2MnO4 + H2O}',
        condition: 'щелочная среда',
        reactants: [{ formula: 'NaNO2', correctCoef: 1 }, { formula: 'KMnO4', correctCoef: 2 }, { formula: 'KOH', correctCoef: 2 }],
        products: [{ formula: 'NaNO3', correctCoef: 1 }, { formula: 'K2MnO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Перманганат в щелочной среде восстанавливается до манганата (зеленого).'
      }
    ]
  },
  {
    id: 13,
    title: 'Вариант 13: Нитрат серебра и получение хлора из диоксида марганца',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Средний',
    explanation: '1) Качественная реакция на ион хлорида с нитратом серебра. 2) Разложение нитрата натрия. 3) Нитрит натрия с KMnO₄ в нейтральной среде выпадает в виде MnO₂. 4) MnO₂ растворяется в концентрированной HCl с выделением Cl₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'AgNO3 + NaCl ➔ AgCl + NaNO3',
        balanced: 'AgNO3 + NaCl = AgCl + NaNO3',
        katex: '\\ce{AgNO3 + NaCl -> AgClv + NaNO3}',
        condition: 'выпадение осадка',
        reactants: [{ formula: 'AgNO3', correctCoef: 1 }, { formula: 'NaCl', correctCoef: 1 }],
        products: [{ formula: 'AgCl', correctCoef: 1 }, { formula: 'NaNO3', correctCoef: 1 }],
        hint: 'Образование творожистого осадка AgCl.'
      },
      {
        id: 2,
        unbalanced: 'NaNO3 ➔ NaNO2 + O2',
        balanced: '2NaNO3 = 2NaNO2 + O2',
        katex: '\\ce{2NaNO3 ->[t^\\circ] 2NaNO2 + O2\\uparrow}',
        condition: 'нагревание',
        reactants: [{ formula: 'NaNO3', correctCoef: 2 }],
        products: [{ formula: 'NaNO2', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Разложение нитрата натрия.'
      },
      {
        id: 3,
        unbalanced: 'NaNO2 + KMnO4 + H2O ➔ NaNO3 + MnO2 + KOH',
        balanced: '3NaNO2 + 2KMnO4 + H2O = 3NaNO3 + 2MnO2 + 2KOH',
        katex: '\\ce{3NaNO2 + 2KMnO4 + H2O -> 3NaNO3 + 2MnO2v + 2KOH}',
        condition: 'нейтральная среда',
        reactants: [{ formula: 'NaNO2', correctCoef: 3 }, { formula: 'KMnO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 1 }],
        products: [{ formula: 'NaNO3', correctCoef: 3 }, { formula: 'MnO2', correctCoef: 2 }, { formula: 'KOH', correctCoef: 2 }],
        hint: 'Выпадение бурого осадка MnO₂.'
      },
      {
        id: 4,
        unbalanced: 'MnO2 + HCl ➔ MnCl2 + Cl2 + H2O',
        balanced: 'MnO2 + 4HCl = MnCl2 + Cl2 + 2H2O',
        katex: '\\ce{MnO2 + 4HCl ->[t^\\circ] MnCl2 + Cl2\\uparrow + 2H2O}',
        condition: 'концентрированная HCl, t°',
        reactants: [{ formula: 'MnO2', correctCoef: 1 }, { formula: 'HCl', correctCoef: 4 }],
        products: [{ formula: 'MnCl2', correctCoef: 1 }, { formula: 'Cl2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Лабораторный способ получения хлора.'
      }
    ]
  },
  {
    id: 14,
    title: 'Вариант 14: Восстановление фосфора и осаждение фосфата кальция',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'Сложный',
    explanation: '1) Получение фосфора в электропечи. 2) Взаимодействие фосфора с избытком хлора. 3) Гидролиз PCl₅ в щелочи. 4) Фосфат калия с известковой водой дает фосфат кальция.',
    equations: [
      {
        id: 1,
        unbalanced: 'Ca3(PO4)2 + C + SiO2 ➔ P + CO + CaSiO3',
        balanced: 'Ca3(PO4)2 + 5C + 3SiO2 = 2P + 5CO + 3CaSiO3',
        katex: '\\ce{Ca3(PO4)2 + 5C + 3SiO2 ->[t^\\circ] 2P + 5CO\\uparrow + 3CaSiO3}',
        condition: 'электропечь',
        reactants: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'C', correctCoef: 5 }, { formula: 'SiO2', correctCoef: 3 }],
        products: [{ formula: 'P', correctCoef: 2 }, { formula: 'CO', correctCoef: 5 }, { formula: 'CaSiO3', correctCoef: 3 }],
        hint: 'Восстановление фосфора.'
      },
      {
        id: 2,
        unbalanced: 'P + Cl2 ➔ PCl5',
        balanced: '2P + 5Cl2 = 2PCl5',
        katex: '\\ce{2P + 5Cl2 -> 2PCl5}',
        condition: 'избыток хлора',
        reactants: [{ formula: 'P', correctCoef: 2 }, { formula: 'Cl2', correctCoef: 5 }],
        products: [{ formula: 'PCl5', correctCoef: 2 }],
        hint: 'Образование пентахлорида.'
      },
      {
        id: 3,
        unbalanced: 'PCl5 + KOH ➔ K3PO4 + KCl + H2O',
        balanced: 'PCl5 + 8KOH = K3PO4 + 5KCl + 4H2O',
        katex: '\\ce{PCl5 + 8KOH -> K3PO4 + 5KCl + 4H2O}',
        condition: 'избыток щелочи',
        reactants: [{ formula: 'PCl5', correctCoef: 1 }, { formula: 'KOH', correctCoef: 8 }],
        products: [{ formula: 'K3PO4', correctCoef: 1 }, { formula: 'KCl', correctCoef: 5 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Полный гидролиз PCl₅.'
      },
      {
        id: 4,
        unbalanced: 'K3PO4 + Ca(OH)2 ➔ Ca3(PO4)2 + KOH',
        balanced: '2K3PO4 + 3Ca(OH)2 = Ca3(PO4)2 + 6KOH',
        katex: '\\ce{2K3PO4 + 3Ca(OH)2 -> Ca3(PO4)2v + 6KOH}',
        condition: 'водный раствор',
        reactants: [{ formula: 'K3PO4', correctCoef: 2 }, { formula: 'Ca(OH)2', correctCoef: 3 }],
        products: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'KOH', correctCoef: 6 }],
        hint: 'Выпадение белого осадка Ca₃(PO₄)₂.'
      }
    ]
  },
  {
    id: 15,
    title: 'Вариант 15: Восстановление CuO аммиаком и качественная реакция иодида меди',
    subtopicId: 'nitrates-decomposition',
    subtopicTitle: 'Разложение нитратов и солей аммония',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Аммиак восстанавливает оксид меди(II) до меди. 2) Медь растворяется в концентрированной H₂SO₄. 3) Сульфат меди(II) с хлоридом бария дает осадок. 4) Хлорид меди(II) с иодидом калия образует иодид меди(I) CuI и свободный иод I₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'CuO + NH3 ➔ Cu + N2 + H2O',
        balanced: '3CuO + 2NH3 = 3Cu + N2 + 3H2O',
        katex: '\\ce{3CuO + 2NH3 ->[t^\\circ] 3Cu + N2\\uparrow + 3H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'CuO', correctCoef: 3 }, { formula: 'NH3', correctCoef: 2 }],
        products: [{ formula: 'Cu', correctCoef: 3 }, { formula: 'N2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 3 }],
        hint: 'Восстановление меди из оксида.'
      },
      {
        id: 2,
        unbalanced: 'Cu + H2SO4 ➔ CuSO4 + SO2 + H2O',
        balanced: 'Cu + 2H2SO4 = CuSO4 + SO2 + 2H2O',
        katex: '\\ce{Cu + 2H2SO4 ->[t^\\circ] CuSO4 + SO2\\uparrow + 2H2O}',
        condition: 'концентрированная H₂SO₄',
        reactants: [{ formula: 'Cu', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 2 }],
        products: [{ formula: 'CuSO4', correctCoef: 1 }, { formula: 'SO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Растворение меди в серной кислоте.'
      },
      {
        id: 3,
        unbalanced: 'CuSO4 + BaCl2 ➔ BaSO4 + CuCl2',
        balanced: 'CuSO4 + BaCl2 = BaSO4 + CuCl2',
        katex: '\\ce{CuSO4 + BaCl2 -> BaSO4v + CuCl2}',
        condition: 'выпадение осадка',
        reactants: [{ formula: 'CuSO4', correctCoef: 1 }, { formula: 'BaCl2', correctCoef: 1 }],
        products: [{ formula: 'BaSO4', correctCoef: 1 }, { formula: 'CuCl2', correctCoef: 1 }],
        hint: 'Осаждение сульфата бария.'
      },
      {
        id: 4,
        unbalanced: 'CuCl2 + KI ➔ CuI + I2 + KCl',
        balanced: '2CuCl2 + 4KI = 2CuI + I2 + 4KCl',
        katex: '\\ce{2CuCl2 + 4KI -> 2CuIv + I2 + 4KCl}',
        condition: 'ОВР солями меди(II)',
        reactants: [{ formula: 'CuCl2', correctCoef: 2 }, { formula: 'KI', correctCoef: 4 }],
        products: [{ formula: 'CuI', correctCoef: 2 }, { formula: 'I2', correctCoef: 1 }, { formula: 'KCl', correctCoef: 4 }],
        hint: 'Медь(II) восстанавливается иодид-ионом до иодида меди(I).'
      }
    ]
  },

  // -------------------------------------------------------------
  // Раздел 2: Реакции с азотной кислотой и оксидами азота (16-30)
  // -------------------------------------------------------------
  {
    id: 16,
    title: 'Вариант 16: Окисление KI перекисью водорода и диспропорционирование иода',
    subtopicId: 'nitric-acid-reactions',
    subtopicTitle: 'Реакции с HNO₃ и оксидами азота',
    difficulty: 'Средний',
    explanation: '1) Разложение нитрата калия. 2) Взаимодействие нитрита и иодида аммония. 3) Перекись водорода окисляет KI в кислой среде до иода. 4) Превращение иода в гидроксиде натрия при нагревании.',
    equations: [
      {
        id: 1,
        unbalanced: 'KNO3 ➔ KNO2 + O2',
        balanced: '2KNO3 = 2KNO2 + O2',
        katex: '\\ce{2KNO3 ->[t^\\circ] 2KNO2 + O2\\uparrow}',
        condition: 'нагревание',
        reactants: [{ formula: 'KNO3', correctCoef: 2 }],
        products: [{ formula: 'KNO2', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Разложение нитрата.'
      },
      {
        id: 2,
        unbalanced: 'KNO2 + NH4I ➔ N2 + KI + H2O',
        balanced: 'KNO2 + NH4I = N2 + KI + 2H2O',
        katex: '\\ce{KNO2 + NH4I ->[t^\\circ] N2\\uparrow + KI + 2H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'KNO2', correctCoef: 1 }, { formula: 'NH4I', correctCoef: 1 }],
        products: [{ formula: 'N2', correctCoef: 1 }, { formula: 'KI', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Выделение свободного азота.'
      },
      {
        id: 3,
        unbalanced: 'KI + H2O2 + H2SO4 ➔ I2 + K2SO4 + H2O',
        balanced: '2KI + H2O2 + H2SO4 = I2 + K2SO4 + 2H2O',
        katex: '\\ce{2KI + H2O2 + H2SO4 -> I2 + K2SO4 + 2H2O}',
        condition: 'кислая среда',
        reactants: [{ formula: 'KI', correctCoef: 2 }, { formula: 'H2O2', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 1 }],
        products: [{ formula: 'I2', correctCoef: 1 }, { formula: 'K2SO4', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Пероксид водорода — окислитель.'
      },
      {
        id: 4,
        unbalanced: 'I2 + NaOH ➔ NaI + NaIO3 + H2O',
        balanced: '3I2 + 6NaOH = 5NaI + NaIO3 + 3H2O',
        katex: '\\ce{3I2 + 6NaOH ->[t^\\circ] 5NaI + NaIO3 + 3H2O}',
        condition: 'горячий раствор',
        reactants: [{ formula: 'I2', correctCoef: 3 }, { formula: 'NaOH', correctCoef: 6 }],
        products: [{ formula: 'NaI', correctCoef: 5 }, { formula: 'NaIO3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 3 }],
        hint: 'Образование иодата натрия в горячей щелочи.'
      }
    ]
  },
  {
    id: 17,
    title: 'Вариант 17: Горение натрия до пероксида и растворение окалины в HNO₃',
    subtopicId: 'nitric-acid-reactions',
    subtopicTitle: 'Реакции с HNO₃ и оксидами азота',
    difficulty: 'Средний',
    explanation: '1) Натрий при горении образует пероксид Na₂O₂. 2) Пероксид натрия с углекислым газом вытесняет O₂. 3) Железо с кислородом дает Fe₃O₄. 4) Растворение Fe₃O₄ в HNO₃ дает нитрат железа(III) и NO₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'Na + O2 ➔ Na2O2',
        balanced: '2Na + O2 = Na2O2',
        katex: '\\ce{2Na + O2 ->[t^\\circ] Na2O2}',
        condition: 'горение на воздухе',
        reactants: [{ formula: 'Na', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        products: [{ formula: 'Na2O2', correctCoef: 1 }],
        hint: 'Щелочной металл образует пероксид.'
      },
      {
        id: 2,
        unbalanced: 'Na2O2 + CO2 ➔ Na2CO3 + O2',
        balanced: '2Na2O2 + 2CO2 = 2Na2CO3 + O2',
        katex: '\\ce{2Na2O2 + 2CO2 -> 2Na2CO3 + O2\\uparrow}',
        condition: 'поглощение углекислого газа',
        reactants: [{ formula: 'Na2O2', correctCoef: 2 }, { formula: 'CO2', correctCoef: 2 }],
        products: [{ formula: 'Na2CO3', correctCoef: 2 }, { formula: 'O2', correctCoef: 1 }],
        hint: 'Регенерация кислорода в изолирующих дыхательных аппаратах.'
      },
      {
        id: 3,
        unbalanced: 'Fe + O2 ➔ Fe3O4',
        balanced: '3Fe + 2O2 = Fe3O4',
        katex: '\\ce{3Fe + 2O2 ->[t^\\circ] Fe3O4}',
        condition: 'нагревание',
        reactants: [{ formula: 'Fe', correctCoef: 3 }, { formula: 'O2', correctCoef: 2 }],
        products: [{ formula: 'Fe3O4', correctCoef: 1 }],
        hint: 'Образование железной окалины.'
      },
      {
        id: 4,
        unbalanced: 'Fe3O4 + HNO3 ➔ Fe(NO3)3 + NO2 + H2O',
        balanced: 'Fe3O4 + 10HNO3 = 3Fe(NO3)3 + NO2 + 5H2O',
        katex: '\\ce{Fe3O4 + 10HNO3 -> 3Fe(NO3)3 + NO2\\uparrow + 5H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'Fe3O4', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 10 }],
        products: [{ formula: 'Fe(NO3)3', correctCoef: 3 }, { formula: 'NO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 5 }],
        hint: 'Окисление Fe²⁺ в составе окалины.'
      }
    ]
  },
  {
    id: 18,
    title: 'Вариант 18: Окисление серы азотной кислотой и восстановление NO₂ медью',
    subtopicId: 'nitric-acid-reactions',
    subtopicTitle: 'Реакции с HNO₃ и оксидами азота',
    difficulty: 'Сложный',
    explanation: '1) Сера при кипячении с концентрированной HNO₃ окисляется до H₂SO₄ с выделением NO₂. 2) Раскаленная медь реагирует с NO₂ образуя CuO и N₂. 3) Оксид меди растворяется в HCl. 4) CuCl₂ с KI образует CuI и I₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'S + HNO3 ➔ H2SO4 + NO2 + H2O',
        balanced: 'S + 6HNO3 = H2SO4 + 6NO2 + 2H2O',
        katex: '\\ce{S + 6HNO3 ->[t^\\circ] H2SO4 + 6NO2\\uparrow + 2H2O}',
        condition: 'концентрированная кислота, t°',
        reactants: [{ formula: 'S', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 6 }],
        products: [{ formula: 'H2SO4', correctCoef: 1 }, { formula: 'NO2', correctCoef: 6 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Сера окисляется до серной кислоты.'
      },
      {
        id: 2,
        unbalanced: 'Cu + NO2 ➔ CuO + N2',
        balanced: '4Cu + 2NO2 = 4CuO + N2',
        katex: '\\ce{4Cu + 2NO2 ->[t^\\circ] 4CuO + N2\\uparrow}',
        condition: 'высокая температура',
        reactants: [{ formula: 'Cu', correctCoef: 4 }, { formula: 'NO2', correctCoef: 2 }],
        products: [{ formula: 'CuO', correctCoef: 4 }, { formula: 'N2', correctCoef: 1 }],
        hint: 'Оксид азота(IV) как окислитель металлов.'
      },
      {
        id: 3,
        unbalanced: 'CuO + HCl ➔ CuCl2 + H2O',
        balanced: 'CuO + 2HCl = CuCl2 + H2O',
        katex: '\\ce{CuO + 2HCl -> CuCl2 + H2O}',
        condition: 'растворение',
        reactants: [{ formula: 'CuO', correctCoef: 1 }, { formula: 'HCl', correctCoef: 2 }],
        products: [{ formula: 'CuCl2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Образование хлорида меди(II).'
      },
      {
        id: 4,
        unbalanced: 'CuCl2 + KI ➔ CuI + I2 + KCl',
        balanced: '2CuCl2 + 4KI = 2CuI + I2 + 4KCl',
        katex: '\\ce{2CuCl2 + 4KI -> 2CuIv + I2 + 4KCl}',
        condition: 'ОВР',
        reactants: [{ formula: 'CuCl2', correctCoef: 2 }, { formula: 'KI', correctCoef: 4 }],
        products: [{ formula: 'CuI', correctCoef: 2 }, { formula: 'I2', correctCoef: 1 }, { formula: 'KCl', correctCoef: 4 }],
        hint: 'Выпадение осадка иодида меди(I).'
      }
    ]
  },
  {
    id: 19,
    title: 'Вариант 19: Гидрат аммиака с хлоридом железа(III) и восстановление сернистым газом',
    subtopicId: 'nitric-acid-reactions',
    subtopicTitle: 'Реакции с HNO₃ и оксидами азота',
    difficulty: 'Сложный',
    explanation: '1) Получение аммиака. 2) Гидрат аммиака осаждает гидроксид железа(III). 3) Растворение Fe(OH)₃ в серной кислоте. 4) Сульфат железа(III) восстанавливается диоксидом серы SO₂ до сульфата железа(II).',
    equations: [
      {
        id: 1,
        unbalanced: 'NH4Cl + Ca(OH)2 ➔ NH3 + H2O + CaCl2',
        balanced: '2NH4Cl + Ca(OH)2 = 2NH3 + 2H2O + CaCl2',
        katex: '\\ce{2NH4Cl + Ca(OH)2 ->[t^\\circ] 2NH3\\uparrow + 2H2O + CaCl2}',
        condition: 'нагревание',
        reactants: [{ formula: 'NH4Cl', correctCoef: 2 }, { formula: 'Ca(OH)2', correctCoef: 1 }],
        products: [{ formula: 'NH3', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }, { formula: 'CaCl2', correctCoef: 1 }],
        hint: 'Выделение газообразного аммиака.'
      },
      {
        id: 2,
        unbalanced: 'NH3 + H2O + FeCl3 ➔ Fe(OH)3 + NH4Cl',
        balanced: '3NH3 + 3H2O + FeCl3 = Fe(OH)3 + 3NH4Cl',
        katex: '\\ce{3NH3 + 3H2O + FeCl3 -> Fe(OH)3v + 3NH4Cl}',
        condition: 'водный раствор',
        reactants: [{ formula: 'NH3', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }, { formula: 'FeCl3', correctCoef: 1 }],
        products: [{ formula: 'Fe(OH)3', correctCoef: 1 }, { formula: 'NH4Cl', correctCoef: 3 }],
        hint: 'Гидратированный аммиак создает щелочную среду.'
      },
      {
        id: 3,
        unbalanced: 'Fe(OH)3 + H2SO4 ➔ Fe2(SO4)3 + H2O',
        balanced: '2Fe(OH)3 + 3H2SO4 = Fe2(SO4)3 + 6H2O',
        katex: '\\ce{2Fe(OH)3 + 3H2SO4 -> Fe2(SO4)3 + 6H2O}',
        condition: 'нейтрализация',
        reactants: [{ formula: 'Fe(OH)3', correctCoef: 2 }, { formula: 'H2SO4', correctCoef: 3 }],
        products: [{ formula: 'Fe2(SO4)3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 6 }],
        hint: 'Образование сульфата железа(III).'
      },
      {
        id: 4,
        unbalanced: 'Fe2(SO4)3 + SO2 + H2O ➔ FeSO4 + H2SO4',
        balanced: 'Fe2(SO4)3 + SO2 + 2H2O = 2FeSO4 + 2H2SO4',
        katex: '\\ce{Fe2(SO4)3 + SO2 + 2H2O -> 2FeSO4 + 2H2SO4}',
        condition: 'пропускание SO₂',
        reactants: [{ formula: 'Fe2(SO4)3', correctCoef: 1 }, { formula: 'SO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        products: [{ formula: 'FeSO4', correctCoef: 2 }, { formula: 'H2SO4', correctCoef: 2 }],
        hint: 'SO₂ как восстановитель переводит Fe³⁺ в Fe²⁺.'
      }
    ]
  },
  {
    id: 20,
    title: 'Вариант 20: Электролиз бромида натрия и горение водорода с CuO',
    subtopicId: 'nitric-acid-reactions',
    subtopicTitle: 'Реакции с HNO₃ и оксидами азота',
    difficulty: 'Средний',
    explanation: '1) Бромоводород с содой дает NaBr и CO₂. 2) Электролиз раствора NaBr образует H₂, Br₂ и NaOH. 3) Водород восстанавливает CuO до меди. 4) Медь растворяется в концентрированной HNO₃ с выделением NO₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'HBr + Na2CO3 ➔ NaBr + CO2 + H2O',
        balanced: '2HBr + Na2CO3 = 2NaBr + CO2 + H2O',
        katex: '\\ce{2HBr + Na2CO3 -> 2NaBr + CO2\\uparrow + H2O}',
        condition: 'выделение газа',
        reactants: [{ formula: 'HBr', correctCoef: 2 }, { formula: 'Na2CO3', correctCoef: 1 }],
        products: [{ formula: 'NaBr', correctCoef: 2 }, { formula: 'CO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Вытеснение более слабой угольной кислоты.'
      },
      {
        id: 2,
        unbalanced: 'NaBr + H2O ➔ H2 + Br2 + NaOH',
        balanced: '2NaBr + 2H2O = H2 + Br2 + 2NaOH',
        katex: '\\ce{2NaBr + 2H2O ->[электролиз] H2\\uparrow + Br2 + 2NaOH}',
        condition: 'электролиз раствора',
        reactants: [{ formula: 'NaBr', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        products: [{ formula: 'H2', correctCoef: 1 }, { formula: 'Br2', correctCoef: 1 }, { formula: 'NaOH', correctCoef: 2 }],
        hint: 'На катоде выделяется H₂, на аноде — Br₂.'
      },
      {
        id: 3,
        unbalanced: 'CuO + H2 ➔ Cu + H2O',
        balanced: 'CuO + H2 = Cu + H2O',
        katex: '\\ce{CuO + H2 ->[t^\\circ] Cu + H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'CuO', correctCoef: 1 }, { formula: 'H2', correctCoef: 1 }],
        products: [{ formula: 'Cu', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Восстановление меди водородом.'
      },
      {
        id: 4,
        unbalanced: 'Cu + HNO3 ➔ Cu(NO3)2 + NO2 + H2O',
        balanced: 'Cu + 4HNO3 = Cu(NO3)2 + 2NO2 + 2H2O',
        katex: '\\ce{Cu + 4HNO3 -> Cu(NO3)2 + 2NO2\\uparrow + 2H2O}',
        condition: 'концентрированная HNO₃',
        reactants: [{ formula: 'Cu', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 4 }],
        products: [{ formula: 'Cu(NO3)2', correctCoef: 1 }, { formula: 'NO2', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Растворение меди в концентрированной азотной кислоте.'
      }
    ]
  },

  // -------------------------------------------------------------
  // Раздел 3: Получение фосфора из апатитов и фосфоритов (31-45)
  // -------------------------------------------------------------
  {
    id: 31,
    title: 'Вариант 31: Сульфат железа(II) с гидратом аммиака и совместный гидролиз',
    subtopicId: 'phosphorus-production',
    subtopicTitle: 'Получение фосфора из апатитов и фосфоритов',
    difficulty: 'Сложный',
    explanation: '1) Гидрат аммиака осаждает гидроксид железа(II). 2) Азотная кислота окисляет Fe(OH)₂ до нитрата железа(III). 3) Взаимный гидролиз нитрата железа(III) с карбонатом калия. 4) Поглощение NO₂ известковым молоком при охлаждении.',
    equations: [
      {
        id: 1,
        unbalanced: 'FeSO4 + NH3 + H2O ➔ Fe(OH)2 + (NH4)2SO4',
        balanced: 'FeSO4 + 2NH3 + 2H2O = Fe(OH)2 + (NH4)2SO4',
        katex: '\\ce{FeSO4 + 2NH3 + 2H2O -> Fe(OH)2v + (NH4)2SO4}',
        condition: 'водный раствор аммиака',
        reactants: [{ formula: 'FeSO4', correctCoef: 1 }, { formula: 'NH3', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        products: [{ formula: 'Fe(OH)2', correctCoef: 1 }, { formula: '(NH4)2SO4', correctCoef: 1 }],
        hint: 'Выпадение серо-зеленого осадка Fe(OH)₂.'
      },
      {
        id: 2,
        unbalanced: 'Fe(OH)2 + HNO3 ➔ Fe(NO3)3 + NO2 + H2O',
        balanced: 'Fe(OH)2 + 4HNO3 = Fe(NO3)3 + NO2 + 3H2O',
        katex: '\\ce{Fe(OH)2 + 4HNO3 -> Fe(NO3)3 + NO2\\uparrow + 3H2O}',
        condition: 'концентрированная кислота',
        reactants: [{ formula: 'Fe(OH)2', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 4 }],
        products: [{ formula: 'Fe(NO3)3', correctCoef: 1 }, { formula: 'NO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 3 }],
        hint: 'Окисление железа(II) до железа(III) азотной кислотой.'
      },
      {
        id: 3,
        unbalanced: 'Fe(NO3)3 + K2CO3 + H2O ➔ Fe(OH)3 + CO2 + KNO3',
        balanced: '2Fe(NO3)3 + 3K2CO3 + 3H2O = 2Fe(OH)3 + 3CO2 + 6KNO3',
        katex: '\\ce{2Fe(NO3)3 + 3K2CO3 + 3H2O -> 2Fe(OH)3v + 3CO2^ + 6KNO3}',
        condition: 'водный раствор',
        reactants: [{ formula: 'Fe(NO3)3', correctCoef: 2 }, { formula: 'K2CO3', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'Fe(OH)3', correctCoef: 2 }, { formula: 'CO2', correctCoef: 3 }, { formula: 'KNO3', correctCoef: 6 }],
        hint: 'Совместный гидролиз солей.'
      },
      {
        id: 4,
        unbalanced: 'NO2 + Ca(OH)2 ➔ Ca(NO2)2 + Ca(NO3)2 + H2O',
        balanced: '4NO2 + 2Ca(OH)2 = Ca(NO2)2 + Ca(NO3)2 + 2H2O',
        katex: '\\ce{4NO2 + 2Ca(OH)2 -> Ca(NO2)2 + Ca(NO3)2 + 2H2O}',
        condition: 'поглощение щелочью',
        reactants: [{ formula: 'NO2', correctCoef: 4 }, { formula: 'Ca(OH)2', correctCoef: 2 }],
        products: [{ formula: 'Ca(NO2)2', correctCoef: 1 }, { formula: 'Ca(NO3)2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Образование смеси нитрита и нитрата кальция.'
      }
    ]
  },
  {
    id: 33,
    title: 'Вариант 33: Получение хлороводорода из соли и сопропорционирование N₂',
    subtopicId: 'phosphorus-production',
    subtopicTitle: 'Получение фосфора из апатитов и фосфоритов',
    difficulty: 'Средний',
    explanation: '1) Кипячение сульфата аммония со щелочью выделяет аммиак. 2) Твердая соль с концентрированной H₂SO₄ вытесняет HCl. 3) Солеобразование NH₃ с HCl дает NH₄Cl. 4) Нитрит аммония (NH₄Cl + NaNO₂) при нагревании даёт свободный N₂.',
    equations: [
      {
        id: 1,
        unbalanced: '(NH4)2SO4 + KOH ➔ NH3 + H2O + K2SO4',
        balanced: '(NH4)2SO4 + 2KOH = 2NH3 + 2H2O + K2SO4',
        katex: '\\ce{(NH4)2SO4 + 2KOH ->[t^\\circ] 2NH3\\uparrow + 2H2O + K2SO4}',
        condition: 'нагревание',
        reactants: [{ formula: '(NH4)2SO4', correctCoef: 1 }, { formula: 'KOH', correctCoef: 2 }],
        products: [{ formula: 'NH3', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }, { formula: 'K2SO4', correctCoef: 1 }],
        hint: 'Качественная реакция на ион аммония.'
      },
      {
        id: 2,
        unbalanced: 'NaCl + H2SO4 ➔ NaHSO4 + HCl',
        balanced: 'NaCl + H2SO4 = NaHSO4 + HCl',
        katex: '\\ce{NaCl + H2SO4 -> NaHSO4 + HCl\\uparrow}',
        condition: 'концентрированная H₂SO₄, твердая соль',
        reactants: [{ formula: 'NaCl', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 1 }],
        products: [{ formula: 'NaHSO4', correctCoef: 1 }, { formula: 'HCl', correctCoef: 1 }],
        hint: 'Лабораторное получение HCl.'
      },
      {
        id: 3,
        unbalanced: 'NH3 + HCl ➔ NH4Cl',
        balanced: 'NH3 + HCl = NH4Cl',
        katex: '\\ce{NH3 + HCl -> NH4Cl}',
        condition: 'белый дым солей',
        reactants: [{ formula: 'NH3', correctCoef: 1 }, { formula: 'HCl', correctCoef: 1 }],
        products: [{ formula: 'NH4Cl', correctCoef: 1 }],
        hint: 'Реакция соединения двух газов.'
      },
      {
        id: 4,
        unbalanced: 'NH4Cl + NaNO2 ➔ N2 + H2O + NaCl',
        balanced: 'NH4Cl + NaNO2 = N2 + 2H2O + NaCl',
        katex: '\\ce{NH4Cl + NaNO2 ->[t^\\circ] N2\\uparrow + 2H2O + NaCl}',
        condition: 'нагревание раствора',
        reactants: [{ formula: 'NH4Cl', correctCoef: 1 }, { formula: 'NaNO2', correctCoef: 1 }],
        products: [{ formula: 'N2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }, { formula: 'NaCl', correctCoef: 1 }],
        hint: 'Разложение нитрита аммония.'
      }
    ]
  },
  {
    id: 40,
    title: 'Вариант 40: Нитрид магния, гидроксид хрома(III) и окисление перекисью водорода',
    subtopicId: 'phosphorus-production',
    subtopicTitle: 'Получение фосфора из апатитов и фосфоритов',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Магний горит в азоте образуя нитрид Mg₃N₂. 2) Гидролиз Mg₃N₂ дает гидроксид магния и аммиак. 3) Раствор аммиака осаждает Cr(OH)₃ из сульфата хрома(III). 4) Окисление Cr(OH)₃ перекисью водорода в щелочной среде дает хромат калия K₂CrO₄ (желтый раствор).',
    equations: [
      {
        id: 1,
        unbalanced: 'Mg + N2 ➔ Mg3N2',
        balanced: '3Mg + N2 = Mg3N2',
        katex: '\\ce{3Mg + N2 ->[t^\\circ] Mg3N2}',
        condition: 'горение',
        reactants: [{ formula: 'Mg', correctCoef: 3 }, { formula: 'N2', correctCoef: 1 }],
        products: [{ formula: 'Mg3N2', correctCoef: 1 }],
        hint: 'Образование нитрида магния.'
      },
      {
        id: 2,
        unbalanced: 'Mg3N2 + H2O ➔ Mg(OH)2 + NH3',
        balanced: 'Mg3N2 + 6H2O = 3Mg(OH)2 + 2NH3',
        katex: '\\ce{Mg3N2 + 6H2O -> 3Mg(OH)2v + 2NH3\\uparrow}',
        condition: 'необратимый гидролиз',
        reactants: [{ formula: 'Mg3N2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 6 }],
        products: [{ formula: 'Mg(OH)2', correctCoef: 3 }, { formula: 'NH3', correctCoef: 2 }],
        hint: 'Разложение нитрида водой.'
      },
      {
        id: 3,
        unbalanced: 'NH3 + H2O + Cr2(SO4)3 ➔ Cr(OH)3 + (NH4)2SO4',
        balanced: '6NH3 + 6H2O + Cr2(SO4)3 = 2Cr(OH)3 + 3(NH4)2SO4',
        katex: '\\ce{6NH3 + 6H2O + Cr2(SO4)3 -> 2Cr(OH)3v + 3(NH4)2SO4}',
        condition: 'водный раствор аммиака',
        reactants: [{ formula: 'NH3', correctCoef: 6 }, { formula: 'H2O', correctCoef: 6 }, { formula: 'Cr2(SO4)3', correctCoef: 1 }],
        products: [{ formula: 'Cr(OH)3', correctCoef: 2 }, { formula: '(NH4)2SO4', correctCoef: 3 }],
        hint: 'Осаждение серо-зеленого гидрата оксида хрома(III).'
      },
      {
        id: 4,
        unbalanced: 'Cr(OH)3 + H2O2 + KOH ➔ K2CrO4 + H2O',
        balanced: '2Cr(OH)3 + 3H2O2 + 4KOH = 2K2CrO4 + 8H2O',
        katex: '\\ce{2Cr(OH)3 + 3H2O2 + 4KOH ->[t^\\circ] 2K2CrO4 + 8H2O}',
        condition: 'щелочная среда, t°',
        reactants: [{ formula: 'Cr(OH)3', correctCoef: 2 }, { formula: 'H2O2', correctCoef: 3 }, { formula: 'KOH', correctCoef: 4 }],
        products: [{ formula: 'K2CrO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 8 }],
        hint: 'Окисление хрома(III) в хромат(VI) желтого цвета.'
      }
    ]
  },
  {
    id: 42,
    title: 'Вариант 42: Синтез PCl₅ и реакции фосфорной кислоты',
    subtopicId: 'phosphorus-production',
    subtopicTitle: 'Получение фосфора из апатитов и фосфоритов',
    difficulty: 'Сложный',
    explanation: '1) Горение фосфора в избытке хлора образует PCl₅. 2) Гидролиз PCl₅ щелочью NaOH дает фосфат натрия и NaCl. 3) Фосфат натрия с CaCl₂ осаждает фосфат кальция. 4) Растворение фосфата кальция в серной кислоте вытесняет фосфорную кислоту H₃PO₄.',
    equations: [
      {
        id: 1,
        unbalanced: 'P + Cl2 ➔ PCl5',
        balanced: '2P + 5Cl2 = 2PCl5',
        katex: '\\ce{2P + 5Cl2 ->[t^\\circ] 2PCl5}',
        condition: 'избыток хлора',
        reactants: [{ formula: 'P', correctCoef: 2 }, { formula: 'Cl2', correctCoef: 5 }],
        products: [{ formula: 'PCl5', correctCoef: 2 }],
        hint: 'Образование пентахлорида фосфора.'
      },
      {
        id: 2,
        unbalanced: 'PCl5 + NaOH ➔ Na3PO4 + NaCl + H2O',
        balanced: 'PCl5 + 8NaOH = Na3PO4 + 5NaCl + 4H2O',
        katex: '\\ce{PCl5 + 8NaOH -> Na3PO4 + 5NaCl + 4H2O}',
        condition: 'избыток щелочи',
        reactants: [{ formula: 'PCl5', correctCoef: 1 }, { formula: 'NaOH', correctCoef: 8 }],
        products: [{ formula: 'Na3PO4', correctCoef: 1 }, { formula: 'NaCl', correctCoef: 5 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Необратимый щелочной гидролиз PCl₅.'
      },
      {
        id: 3,
        unbalanced: 'Na3PO4 + CaCl2 ➔ Ca3(PO4)2 + NaCl',
        balanced: '2Na3PO4 + 3CaCl2 = Ca3(PO4)2 + 6NaCl',
        katex: '\\ce{2Na3PO4 + 3CaCl2 -> Ca3(PO4)2v + 6NaCl}',
        condition: 'выпадение осадка',
        reactants: [{ formula: 'Na3PO4', correctCoef: 2 }, { formula: 'CaCl2', correctCoef: 3 }],
        products: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'NaCl', correctCoef: 6 }],
        hint: 'Качественная реакция на фосфат-ион.'
      },
      {
        id: 4,
        unbalanced: 'Ca3(PO4)2 + H2SO4 ➔ CaSO4 + H3PO4',
        balanced: 'Ca3(PO4)2 + 3H2SO4 = 3CaSO4 + 2H3PO4',
        katex: '\\ce{Ca3(PO4)2 + 3H2SO4 ->[t^\\circ] 3CaSO4v + 2H3PO4}',
        condition: 'экстракционный способ',
        reactants: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 3 }],
        products: [{ formula: 'CaSO4', correctCoef: 3 }, { formula: 'H3PO4', correctCoef: 2 }],
        hint: 'Промышленный способ получения H₃PO₄.'
      }
    ]
  },

  // -------------------------------------------------------------
  // Раздел 4: Фосфиды, фосфин и фосфорсодержащие кислоты (46-63)
  // -------------------------------------------------------------
  {
    id: 51,
    title: 'Вариант 51: Промышленный синтез фосфора и окисление P₂O₃ азотной кислотой',
    subtopicId: 'phosphides-phosphates',
    subtopicTitle: 'Фосфиды, фосфин и фосфорсодержащие кислоты',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Получение фосфора из фосфорита кальция. 2) Горение фосфора при недостатке кислорода дает оксид фосфора(III) P₂O₃. 3) P₂O₃ окисляется азотной кислотой до ортофосфорной кислоты H₃PO₄ с выделением NO₂. 4) Поглощение NO₂ известковым молоком с кислородом дает нитрат кальция.',
    equations: [
      {
        id: 1,
        unbalanced: 'Ca3(PO4)2 + SiO2 + C ➔ CaSiO3 + P + CO',
        balanced: 'Ca3(PO4)2 + 3SiO2 + 5C = 3CaSiO3 + 2P + 5CO',
        katex: '\\ce{Ca3(PO4)2 + 3SiO2 + 5C ->[t^\\circ] 3CaSiO3 + 2P + 5CO\\uparrow}',
        condition: 'электропечь',
        reactants: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'SiO2', correctCoef: 3 }, { formula: 'C', correctCoef: 5 }],
        products: [{ formula: 'CaSiO3', correctCoef: 3 }, { formula: 'P', correctCoef: 2 }, { formula: 'CO', correctCoef: 5 }],
        hint: 'Восстановление фосфора коксами.'
      },
      {
        id: 2,
        unbalanced: 'P + O2 ➔ P2O3',
        balanced: '4P + 3O2 = 2P2O3',
        katex: '\\ce{4P + 3O2 ->[недостаток O2] 2P2O3}',
        condition: 'недостаток кислорода',
        reactants: [{ formula: 'P', correctCoef: 4 }, { formula: 'O2', correctCoef: 3 }],
        products: [{ formula: 'P2O3', correctCoef: 2 }],
        hint: 'Образование оксида фосфора(III).'
      },
      {
        id: 3,
        unbalanced: 'P2O3 + HNO3 + H2O ➔ H3PO4 + NO2',
        balanced: 'P2O3 + 4HNO3 + H2O = 2H3PO4 + 4NO2',
        katex: '\\ce{P2O3 + 4HNO3 + H2O -> 2H3PO4 + 4NO2\\uparrow}',
        condition: 'окисление кислотой',
        reactants: [{ formula: 'P2O3', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 4 }, { formula: 'H2O', correctCoef: 1 }],
        products: [{ formula: 'H3PO4', correctCoef: 2 }, { formula: 'NO2', correctCoef: 4 }],
        hint: 'Фосфор(III) окисляется до фосфора(V).'
      },
      {
        id: 4,
        unbalanced: 'NO2 + O2 + Ba(OH)2 ➔ Ba(NO3)2 + H2O',
        balanced: '4NO2 + O2 + 2Ba(OH)2 = 2Ba(NO3)2 + 2H2O',
        katex: '\\ce{4NO2 + O2 + 2Ba(OH)2 -> 2Ba(NO3)2 + 2H2O}',
        condition: 'присутствие кислорода',
        reactants: [{ formula: 'NO2', correctCoef: 4 }, { formula: 'O2', correctCoef: 1 }, { formula: 'Ba(OH)2', correctCoef: 2 }],
        products: [{ formula: 'Ba(NO3)2', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        hint: 'Образование чистой соли нитрата бария.'
      }
    ]
  },
  {
    id: 53,
    title: 'Вариант 53: Диспропорционирование фосфора в щелочи и получением фосфина',
    subtopicId: 'phosphides-phosphates',
    subtopicTitle: 'Фосфиды, фосфин и фосфорсодержащие кислоты',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Углекислый газ вытесняет кремневую кислоту. 2) Термическое разложение кремневой кислоты. 3) Восстановление фосфора из апатита. 4) Белый фосфор реагирует с кипящим раствором щелочи с образованием фосфина PH₃ и гипофосфита калия KH₂PO₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'Na2SiO3 + H2O + CO2 ➔ H2SiO3 + NaHCO3',
        balanced: 'Na2SiO3 + 2H2O + 2CO2 = H2SiO3 + 2NaHCO3',
        katex: '\\ce{Na2SiO3 + 2H2O + 2CO2 -> H2SiO3v + 2NaHCO3}',
        condition: 'избыток CO₂',
        reactants: [{ formula: 'Na2SiO3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 2 }, { formula: 'CO2', correctCoef: 2 }],
        products: [{ formula: 'H2SiO3', correctCoef: 1 }, { formula: 'NaHCO3', correctCoef: 2 }],
        hint: 'Выпадение студенистого осадка H₂SiO₃.'
      },
      {
        id: 2,
        unbalanced: 'H2SiO3 ➔ SiO2 + H2O',
        balanced: 'H2SiO3 = SiO2 + H2O',
        katex: '\\ce{H2SiO3 ->[t^\\circ] SiO2 + H2O}',
        condition: 'нагревание',
        reactants: [{ formula: 'H2SiO3', correctCoef: 1 }],
        products: [{ formula: 'SiO2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Получение чистого оксида кремния.'
      },
      {
        id: 3,
        unbalanced: 'Ca3(PO4)2 + SiO2 + C ➔ CaSiO3 + P + CO',
        balanced: 'Ca3(PO4)2 + 3SiO2 + 5C = 3CaSiO3 + 2P + 5CO',
        katex: '\\ce{Ca3(PO4)2 + 3SiO2 + 5C ->[t^\\circ] 3CaSiO3 + 2P + 5CO\\uparrow}',
        condition: 'электропечь',
        reactants: [{ formula: 'Ca3(PO4)2', correctCoef: 1 }, { formula: 'SiO2', correctCoef: 3 }, { formula: 'C', correctCoef: 5 }],
        products: [{ formula: 'CaSiO3', correctCoef: 3 }, { formula: 'P', correctCoef: 2 }, { formula: 'CO', correctCoef: 5 }],
        hint: 'Печный способ получения фосфора.'
      },
      {
        id: 4,
        unbalanced: 'P + KOH + H2O ➔ PH3 + KH2PO2',
        balanced: '4P + 3KOH + 3H2O = PH3 + 3KH2PO2',
        katex: '\\ce{4P + 3KOH + 3H2O ->[t^\\circ] PH3\\uparrow + 3KH2PO2}',
        condition: 'кипячение белого фосфора в щелочи',
        reactants: [{ formula: 'P', correctCoef: 4 }, { formula: 'KOH', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'PH3', correctCoef: 1 }, { formula: 'KH2PO2', correctCoef: 3 }],
        hint: 'Диспропорционирование фосфора до PH₃ и гипофосфита.'
      }
    ]
  },
  {
    id: 56,
    title: 'Вариант 56: Гидролиз фосфида цинка и окисление фосфина азотной кислотой',
    subtopicId: 'phosphides-phosphates',
    subtopicTitle: 'Фосфиды, фосфин и фосфорсодержащие кислоты',
    difficulty: 'Сложный',
    explanation: '1) Растворение фосфида цинка Zn₃P₂ в соляной кислоте дает ZnCl₂ и PH₃. 2) Фосфин окисляется концентрированной HNO₃ до ортофосфорной кислоты H₃PO₄ и NO₂. 3) Диспропорционирование NO₂ в щелочи. 4) Окисление нитрита натрия дихроматом в кислой среде.',
    equations: [
      {
        id: 1,
        unbalanced: 'Zn3P2 + HCl ➔ ZnCl2 + PH3',
        balanced: 'Zn3P2 + 6HCl = 3ZnCl2 + 2PH3',
        katex: '\\ce{Zn3P2 + 6HCl -> 3ZnCl2 + 2PH3\\uparrow}',
        condition: 'кислотный гидролиз',
        reactants: [{ formula: 'Zn3P2', correctCoef: 1 }, { formula: 'HCl', correctCoef: 6 }],
        products: [{ formula: 'ZnCl2', correctCoef: 3 }, { formula: 'PH3', correctCoef: 2 }],
        hint: 'Выделение самовоспламеняющегося фосфина.'
      },
      {
        id: 2,
        unbalanced: 'PH3 + HNO3 ➔ H3PO4 + NO2 + H2O',
        balanced: 'PH3 + 8HNO3 = H3PO4 + 8NO2 + 4H2O',
        katex: '\\ce{PH3 + 8HNO3 -> H3PO4 + 8NO2\\uparrow + 4H2O}',
        condition: 'концентрированная HNO₃',
        reactants: [{ formula: 'PH3', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 8 }],
        products: [{ formula: 'H3PO4', correctCoef: 1 }, { formula: 'NO2', correctCoef: 8 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Глубокое окисление фосфина до H₃PO₄.'
      },
      {
        id: 3,
        unbalanced: 'NO2 + NaOH ➔ NaNO2 + NaNO3 + H2O',
        balanced: '2NO2 + 2NaOH = NaNO2 + NaNO3 + H2O',
        katex: '\\ce{2NO2 + 2NaOH -> NaNO2 + NaNO3 + H2O}',
        condition: 'поглощение щелочью',
        reactants: [{ formula: 'NO2', correctCoef: 2 }, { formula: 'NaOH', correctCoef: 2 }],
        products: [{ formula: 'NaNO2', correctCoef: 1 }, { formula: 'NaNO3', correctCoef: 1 }, { formula: 'H2O', correctCoef: 1 }],
        hint: 'Смесь нитрита и нитрата.'
      },
      {
        id: 4,
        unbalanced: 'NaNO2 + Na2Cr2O7 + H2SO4 ➔ NaNO3 + Cr2(SO4)3 + Na2SO4 + H2O',
        balanced: '3NaNO2 + Na2Cr2O7 + 4H2SO4 = 3NaNO3 + Cr2(SO4)3 + Na2SO4 + 4H2O',
        katex: '\\ce{3NaNO2 + Na2Cr2O7 + 4H2SO4 -> 3NaNO3 + Cr2(SO4)3 + Na2SO4 + 4H2O}',
        condition: 'кислая среда',
        reactants: [{ formula: 'NaNO2', correctCoef: 3 }, { formula: 'Na2Cr2O7', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 4 }],
        products: [{ formula: 'NaNO3', correctCoef: 3 }, { formula: 'Cr2(SO4)3', correctCoef: 1 }, { formula: 'Na2SO4', correctCoef: 1 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Оранжвый дихромат восстанавливается до зеленого сульфата хрома(III).'
      }
    ]
  },
  {
    id: 60,
    title: 'Вариант 60: Разложение дихромата аммония и реакции хрома(VI) с HBr',
    subtopicId: 'phosphides-phosphates',
    subtopicTitle: 'Фосфиды, фосфин и фосфорсодержащие кислоты',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Внутримолекулярное ОВР: разложение дихромата аммония («вулканчик»). 2) Окисление Cr₂O₃ перекисью водорода в щелочи дает хромат калия K₂CrO₄. 3) Хромат калия окисляет бромоводородную кислоту HBr до свободного брома Br₂. 4) Совместный гидролиз бромида хрома(III) с карбонатом калия.',
    equations: [
      {
        id: 1,
        unbalanced: '(NH4)2Cr2O7 ➔ Cr2O3 + N2 + H2O',
        balanced: '(NH4)2Cr2O7 = Cr2O3 + N2 + 4H2O',
        katex: '\\ce{(NH4)2Cr2O7 ->[t^\\circ] Cr2O3 + N2\\uparrow + 4H2O}',
        condition: 'нагревание ("химический вулкан")',
        reactants: [{ formula: '(NH4)2Cr2O7', correctCoef: 1 }],
        products: [{ formula: 'Cr2O3', correctCoef: 1 }, { formula: 'N2', correctCoef: 1 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Внутримолекулярное окисление-восстановление.'
      },
      {
        id: 2,
        unbalanced: 'Cr2O3 + H2O2 + KOH ➔ K2CrO4 + H2O',
        balanced: 'Cr2O3 + 3H2O2 + 4KOH = 2K2CrO4 + 5H2O',
        katex: '\\ce{Cr2O3 + 3H2O2 + 4KOH -> 2K2CrO4 + 5H2O}',
        condition: 'щелочной раствор',
        reactants: [{ formula: 'Cr2O3', correctCoef: 1 }, { formula: 'H2O2', correctCoef: 3 }, { formula: 'KOH', correctCoef: 4 }],
        products: [{ formula: 'K2CrO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 5 }],
        hint: 'Образование хромата калия.'
      },
      {
        id: 3,
        unbalanced: 'K2CrO4 + HBr ➔ CrBr3 + Br2 + KBr + H2O',
        balanced: '2K2CrO4 + 16HBr = 2CrBr3 + 3Br2 + 4KBr + 8H2O',
        katex: '\\ce{2K2CrO4 + 16HBr -> 2CrBr3 + 3Br2 + 4KBr + 8H2O}',
        condition: 'концентрированная HBr',
        reactants: [{ formula: 'K2CrO4', correctCoef: 2 }, { formula: 'HBr', correctCoef: 16 }],
        products: [{ formula: 'CrBr3', correctCoef: 2 }, { formula: 'Br2', correctCoef: 3 }, { formula: 'KBr', correctCoef: 4 }, { formula: 'H2O', correctCoef: 8 }],
        hint: 'Хромат окисляет бромид-ионы до молекулярного брома.'
      },
      {
        id: 4,
        unbalanced: 'CrBr3 + K2CO3 + H2O ➔ Cr(OH)3 + CO2 + KBr',
        balanced: '2CrBr3 + 3K2CO3 + 3H2O = 2Cr(OH)3 + 3CO2 + 6KBr',
        katex: '\\ce{2CrBr3 + 3K2CO3 + 3H2O -> 2Cr(OH)3v + 3CO2^ + 6KBr}',
        condition: 'водный раствор',
        reactants: [{ formula: 'CrBr3', correctCoef: 2 }, { formula: 'K2CO3', correctCoef: 3 }, { formula: 'H2O', correctCoef: 3 }],
        products: [{ formula: 'Cr(OH)3', correctCoef: 2 }, { formula: 'CO2', correctCoef: 3 }, { formula: 'KBr', correctCoef: 6 }],
        hint: 'Совместный гидролиз солей хрома(III).'
      }
    ]
  },
  {
    id: 63,
    title: 'Вариант 63: Окисление сернистого газа азотной кислотой и реакция NO₂ с аммиаком',
    subtopicId: 'phosphides-phosphates',
    subtopicTitle: 'Фосфиды, фосфин и фосфорсодержащие кислоты',
    difficulty: 'ЕГЭ Высокий',
    explanation: '1) Обжиг сульфида цинка ZnS с серной кислотой или кислородом дает SO₂. 2) SO₂ окисляется перманганатом калия в водном растворе. 3) SO₂ реагирует с концентрированной HNO₃ с образованием H₂SO₄ и NO₂. 4) Оксид азота(IV) NO₂ при взаимодействии с аммиаком при нагревании окисляет его до азота N₂.',
    equations: [
      {
        id: 1,
        unbalanced: 'ZnS + H2SO4 ➔ ZnSO4 + SO2 + H2O',
        balanced: 'ZnS + 4H2SO4 = ZnSO4 + 4SO2 + 4H2O',
        katex: '\\ce{ZnS + 4H2SO4 ->[t^\\circ] ZnSO4 + 4SO2\\uparrow + 4H2O}',
        condition: 'концентрированная H₂SO₄',
        reactants: [{ formula: 'ZnS', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 4 }],
        products: [{ formula: 'ZnSO4', correctCoef: 1 }, { formula: 'SO2', correctCoef: 4 }, { formula: 'H2O', correctCoef: 4 }],
        hint: 'Окисление сульфидной серы концентрированной серной кислотой.'
      },
      {
        id: 2,
        unbalanced: 'SO2 + KMnO4 + H2O ➔ MnSO4 + K2SO4 + H2SO4',
        balanced: '5SO2 + 2KMnO4 + 2H2O = 2MnSO4 + K2SO4 + 2H2SO4',
        katex: '\\ce{5SO2 + 2KMnO4 + 2H2O -> 2MnSO4 + K2SO4 + 2H2SO4}',
        condition: 'водный раствор',
        reactants: [{ formula: 'SO2', correctCoef: 5 }, { formula: 'KMnO4', correctCoef: 2 }, { formula: 'H2O', correctCoef: 2 }],
        products: [{ formula: 'MnSO4', correctCoef: 2 }, { formula: 'K2SO4', correctCoef: 1 }, { formula: 'H2SO4', correctCoef: 2 }],
        hint: 'Обесцвечивание раствора марганцовки сернистым газом.'
      },
      {
        id: 3,
        unbalanced: 'SO2 + HNO3 ➔ H2SO4 + NO2',
        balanced: 'SO2 + 2HNO3 = H2SO4 + 2NO2',
        katex: '\\ce{SO2 + 2HNO3 -> H2SO4 + 2NO2\\uparrow}',
        condition: 'концентрированная HNO₃',
        reactants: [{ formula: 'SO2', correctCoef: 1 }, { formula: 'HNO3', correctCoef: 2 }],
        products: [{ formula: 'H2SO4', correctCoef: 1 }, { formula: 'NO2', correctCoef: 2 }],
        hint: 'SO₂ окисляется до серной кислоты.'
      },
      {
        id: 4,
        unbalanced: 'NO2 + NH3 ➔ N2 + H2O',
        balanced: '6NO2 + 8NH3 = 7N2 + 12H2O',
        katex: '\\ce{6NO2 + 8NH3 ->[t^\\circ] 7N2\\uparrow + 12H2O}',
        condition: 'высокая температура',
        reactants: [{ formula: 'NO2', correctCoef: 6 }, { formula: 'NH3', correctCoef: 8 }],
        products: [{ formula: 'N2', correctCoef: 7 }, { formula: 'H2O', correctCoef: 12 }],
        hint: 'Взаимодействие двух газообразных оксидов/гидридов с восстановлением до N₂.'
      }
    ]
  }
];
