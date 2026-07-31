import type { Molecule } from '../types';

export const MOLECULES_DATA: Molecule[] = [
  {
    id: 'h2o',
    name: 'Вода (H₂O)',
    formula: 'H₂O',
    iupacName: 'Оксидан / Дигидрогена монооксид',
    category: 'Неорганическая',
    description: 'Уникальное вещество, являющееся универсальным растворителем и основой жизни на Земле. Угол связи H-O-H составляет 104.5°.',
    funFact: 'Благодаря водородным связям вода имеет невероятно высокую теплоемкость и расширяется при замерзании.',
    atoms: [
      { element: 'O', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -0.85, y: 0.6, z: 0 },
      { element: 'H', x: 0.85, y: 0.6, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 }
    ]
  },
  {
    id: 'benzene',
    name: 'Бензол (C₆H₆)',
    formula: 'C₆H₆',
    iupacName: 'Циклогекса-1,3,5-триен',
    category: 'Органическая',
    description: 'Простейшее ароматическое соединение с залокализированной единой π-электронной системой над и под плоскостью кольца.',
    funFact: 'Открытие единого ароматического сопряженного кольца немецким химиком Августом Кекуле считается одним из самых красивых в истории науки.',
    atoms: [
      // Carbon Ring (sp2)
      { element: 'C', x: 1.2, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'C', x: 0.6, y: 1.04, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -0.6, y: 1.04, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -1.2, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -0.6, y: -1.04, z: 0, hybridization: 'sp2' },
      { element: 'C', x: 0.6, y: -1.04, z: 0, hybridization: 'sp2' },
      // Hydrogens
      { element: 'H', x: 2.1, y: 0, z: 0 },
      { element: 'H', x: 1.05, y: 1.82, z: 0 },
      { element: 'H', x: -1.05, y: 1.82, z: 0 },
      { element: 'H', x: -2.1, y: 0, z: 0 },
      { element: 'H', x: -1.05, y: -1.82, z: 0 },
      { element: 'H', x: 1.05, y: -1.82, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 1, target: 2, order: 1 },
      { source: 2, target: 3, order: 2 },
      { source: 3, target: 4, order: 1 },
      { source: 4, target: 5, order: 2 },
      { source: 5, target: 0, order: 1 },
      // C-H bonds
      { source: 0, target: 6, order: 1 },
      { source: 1, target: 7, order: 1 },
      { source: 2, target: 8, order: 1 },
      { source: 3, target: 9, order: 1 },
      { source: 4, target: 10, order: 1 },
      { source: 5, target: 11, order: 1 }
    ]
  },
  {
    id: 'ch4',
    name: 'Метан (CH₄)',
    formula: 'CH₄',
    iupacName: 'Метан',
    category: 'Органическая',
    description: 'Простейший предельный углеводород (алкан). Тетраэдрическая молекула с sp³-гибридизацией центрального атома углерода.',
    funFact: 'Угол между любыми двумя связями C-H равен точно 109.5° — классический тетраэдр в пространстве.',
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'H', x: 0.63, y: 0.63, z: 0.63 },
      { element: 'H', x: -0.63, y: -0.63, z: 0.63 },
      { element: 'H', x: -0.63, y: 0.63, z: -0.63 },
      { element: 'H', x: 0.63, y: -0.63, z: -0.63 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'caffeine',
    name: 'Кофеин (C₈H₁₀N₄O₂)',
    formula: 'C₈H₁₀N₄O₂',
    iupacName: '1,3,7-Триметилксантин',
    category: 'Биохимия',
    description: 'Алкалоид пуринового ряда, психостимулятор центральной нервной системы. Блокирует аденозиновые рецепторы.',
    funFact: 'Кофеин содержится не только в кофейных зернах, но и в чае, какао, мате и более чем в 60 видах других растений.',
    atoms: [
      { element: 'C', x: 0, y: 1.1, z: 0, hybridization: 'sp2' },
      { element: 'N', x: 1.1, y: 0.4, z: 0, hybridization: 'sp2' },
      { element: 'C', x: 1.0, y: -0.9, z: 0, hybridization: 'sp2' },
      { element: 'N', x: -0.2, y: -1.4, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -1.2, y: -0.6, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -1.1, y: 0.7, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -2.1, y: 1.3, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 2.0, y: -1.6, z: 0, hybridization: 'sp2' },
      { element: 'N', x: -2.3, y: -1.2, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -3.0, y: -0.2, z: 0, hybridization: 'sp2' },
      { element: 'N', x: -2.3, y: 0.9, z: 0, hybridization: 'sp2' },
      { element: 'H', x: -3.9, y: -0.1, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 1, target: 2, order: 1 },
      { source: 2, target: 3, order: 1 },
      { source: 3, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 },
      { source: 5, target: 0, order: 1 },
      { source: 5, target: 6, order: 2 },
      { source: 2, target: 7, order: 2 },
      { source: 4, target: 8, order: 1 },
      { source: 8, target: 9, order: 1 },
      { source: 9, target: 10, order: 2 },
      { source: 10, target: 5, order: 1 },
      { source: 9, target: 11, order: 1 }
    ]
  },
  {
    id: 'ethanol',
    name: 'Этанол (C₂H₅OH)',
    formula: 'C₂H₅OH',
    iupacName: 'Этанол',
    category: 'Органическая',
    description: 'Одноатомный спирт. Важнейший органический растворитель и сырье для фарминдустрии.',
    funFact: 'Этанол — одно из первых веществ, синтезированных человеком с помощью биохимического брожения ещё в древности.',
    atoms: [
      { element: 'C', x: -0.8, y: -0.2, z: 0, hybridization: 'sp3' },
      { element: 'C', x: 0.5, y: 0.4, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 1.5, y: -0.4, z: 0, hybridization: 'sp3' },
      { element: 'H', x: 2.3, y: 0.1, z: 0 },
      { element: 'H', x: -0.9, y: -1.2, z: 0.3 },
      { element: 'H', x: -1.6, y: 0.4, z: 0.3 },
      { element: 'H', x: -0.8, y: -0.2, z: -1.1 },
      { element: 'H', x: 0.6, y: 1.4, z: 0.3 },
      { element: 'H', x: 0.6, y: 0.4, z: -1.1 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 1, target: 2, order: 1 },
      { source: 2, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 },
      { source: 0, target: 5, order: 1 },
      { source: 0, target: 6, order: 1 },
      { source: 1, target: 7, order: 1 },
      { source: 1, target: 8, order: 1 }
    ]
  },
  {
    id: 'dopamine',
    name: 'Дофамин (C₈H₁₁NO₂)',
    formula: 'C₈H₁₁NO₂',
    iupacName: '4-(2-Аминоэтил)бензол-1,2-диол',
    category: 'Биохимия',
    description: 'Ключевой нейромедиатор и гормон, активирующий систему вознаграждения, чувство удовлетворения и мотивированное поведение в ЦНС.',
    funFact: 'Дофамин выделяется не только при получении награды, но и на этапе предвкушения — именно он вызывает вдохновение и азарт!',
    atoms: [
      { element: 'C', x: 1.2, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'C', x: 0.6, y: 1.04, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -0.6, y: 1.04, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -1.2, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'C', x: -0.6, y: -1.04, z: 0, hybridization: 'sp2' },
      { element: 'C', x: 0.6, y: -1.04, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -1.3, y: 2.1, z: 0, hybridization: 'sp3' },
      { element: 'O', x: -2.4, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'C', x: 2.5, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'C', x: 3.2, y: 1.2, z: 0.4, hybridization: 'sp3' },
      { element: 'N', x: 4.5, y: 1.0, z: 0.2, hybridization: 'sp3' },
      { element: 'H', x: 1.05, y: 1.82, z: 0 },
      { element: 'H', x: -1.05, y: -1.82, z: 0 },
      { element: 'H', x: 1.05, y: -1.82, z: 0 },
      { element: 'H', x: -0.9, y: 2.8, z: 0 },
      { element: 'H', x: -2.8, y: -0.8, z: 0 },
      { element: 'H', x: 2.6, y: -0.6, z: 0.8 },
      { element: 'H', x: 2.6, y: -0.6, z: -0.8 },
      { element: 'H', x: 3.1, y: 1.8, z: -0.4 },
      { element: 'H', x: 3.1, y: 1.8, z: 1.2 },
      { element: 'H', x: 5.0, y: 1.7, z: 0.5 },
      { element: 'H', x: 4.9, y: 0.2, z: -0.3 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 1, target: 2, order: 1 },
      { source: 2, target: 3, order: 2 },
      { source: 3, target: 4, order: 1 },
      { source: 4, target: 5, order: 2 },
      { source: 5, target: 0, order: 1 },
      { source: 2, target: 6, order: 1 },
      { source: 6, target: 14, order: 1 },
      { source: 3, target: 7, order: 1 },
      { source: 7, target: 15, order: 1 },
      { source: 1, target: 11, order: 1 },
      { source: 4, target: 12, order: 1 },
      { source: 5, target: 13, order: 1 },
      { source: 0, target: 8, order: 1 },
      { source: 8, target: 9, order: 1 },
      { source: 9, target: 10, order: 1 },
      { source: 8, target: 16, order: 1 },
      { source: 8, target: 17, order: 1 },
      { source: 9, target: 18, order: 1 },
      { source: 9, target: 19, order: 1 },
      { source: 10, target: 20, order: 1 },
      { source: 10, target: 21, order: 1 }
    ]
  },
  {
    id: 'gaba',
    name: 'ГАМК (C₄H₉NO₂)',
    formula: 'C₄H₉NO₂',
    iupacName: '4-Аминобутановая кислота',
    category: 'Биохимия',
    description: 'Главный тормозной нейромедиатор центральной нервной системы. Снижает гиперактивность нейронов и обеспечивает психоэмоциональный баланс.',
    funFact: 'ГАМК синтезируется в нейронах непосредственно из глутамата — главного возбуждающего нейромедиатора, создавая инь и ян нервной системы.',
    atoms: [
      { element: 'C', x: -1.8, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -2.2, y: 1.1, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -2.6, y: -1.0, z: 0, hybridization: 'sp3' },
      { element: 'C', x: -0.3, y: -0.2, z: 0.3, hybridization: 'sp3' },
      { element: 'C', x: 0.6, y: 0.9, z: -0.2, hybridization: 'sp3' },
      { element: 'C', x: 2.0, y: 0.6, z: 0.3, hybridization: 'sp3' },
      { element: 'N', x: 2.8, y: 1.7, z: -0.2, hybridization: 'sp3' },
      { element: 'H', x: -3.4, y: -0.8, z: 0 },
      { element: 'H', x: -0.3, y: -0.4, z: 1.3 },
      { element: 'H', x: -0.1, y: -1.1, z: -0.3 },
      { element: 'H', x: 0.6, y: 1.1, z: -1.2 },
      { element: 'H', x: 0.4, y: 1.8, z: 0.4 },
      { element: 'H', x: 2.0, y: 0.4, z: 1.3 },
      { element: 'H', x: 2.3, y: -0.3, z: -0.2 },
      { element: 'H', x: 3.7, y: 1.5, z: 0.1 },
      { element: 'H', x: 2.8, y: 2.5, z: 0.3 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 1 },
      { source: 2, target: 7, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 3, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 },
      { source: 5, target: 6, order: 1 },
      { source: 3, target: 8, order: 1 },
      { source: 3, target: 9, order: 1 },
      { source: 4, target: 10, order: 1 },
      { source: 4, target: 11, order: 1 },
      { source: 5, target: 12, order: 1 },
      { source: 5, target: 13, order: 1 },
      { source: 6, target: 14, order: 1 },
      { source: 6, target: 15, order: 1 }
    ]
  },
  {
    id: 'glucose',
    name: 'Глюкоза (C₆H₁₂O₆)',
    formula: 'C₆H₁₂O₆',
    iupacName: '(2R,3S,4R,5R)-6-(Гидроксиметил)оксан-2,3,4,5-тетраол',
    category: 'Биохимия',
    description: 'Основной энергетический субстрат клеток. При полностью кислородном расщеплении одной молекулы глюкозы синтезируется до 38 молекул АТФ.',
    funFact: 'Человеческий мозг весит всего 2% от массы тела, но потребляет свыше 20% всей поступающей в организм глюкозы!',
    atoms: [
      { element: 'O', x: 0, y: 1.2, z: 0.2, hybridization: 'sp3' },
      { element: 'C', x: 1.1, y: 0.5, z: -0.3, hybridization: 'sp3' },
      { element: 'C', x: 1.1, y: -0.9, z: 0.3, hybridization: 'sp3' },
      { element: 'C', x: -0.1, y: -1.5, z: -0.3, hybridization: 'sp3' },
      { element: 'C', x: -1.3, y: -0.7, z: 0.3, hybridization: 'sp3' },
      { element: 'C', x: -1.1, y: 0.7, z: -0.3, hybridization: 'sp3' },
      { element: 'C', x: -2.3, y: 1.4, z: 0.3, hybridization: 'sp3' },
      { element: 'O', x: 2.2, y: 1.1, z: 0.3, hybridization: 'sp3' },
      { element: 'O', x: 2.2, y: -1.5, z: -0.3, hybridization: 'sp3' },
      { element: 'O', x: -0.1, y: -2.8, z: 0.3, hybridization: 'sp3' },
      { element: 'O', x: -2.4, y: -1.3, z: -0.3, hybridization: 'sp3' },
      { element: 'O', x: -3.4, y: 0.7, z: -0.3, hybridization: 'sp3' },
      { element: 'H', x: 1.2, y: 0.5, z: -1.3 },
      { element: 'H', x: 1.1, y: -0.9, z: 1.3 },
      { element: 'H', x: -0.1, y: -1.5, z: -1.3 },
      { element: 'H', x: -1.3, y: -0.7, z: 1.3 },
      { element: 'H', x: -1.1, y: 0.7, z: -1.3 },
      { element: 'H', x: -2.5, y: 1.4, z: 1.3 },
      { element: 'H', x: -2.1, y: 2.4, z: 0.0 },
      { element: 'H', x: 2.9, y: 0.6, z: 0.3 },
      { element: 'H', x: 2.9, y: -1.0, z: -0.3 },
      { element: 'H', x: -0.8, y: -3.2, z: 0.3 },
      { element: 'H', x: -3.1, y: -0.8, z: -0.3 },
      { element: 'H', x: -4.1, y: 1.1, z: -0.3 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 1, target: 2, order: 1 },
      { source: 2, target: 3, order: 1 },
      { source: 3, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 },
      { source: 5, target: 0, order: 1 },
      { source: 1, target: 7, order: 1 },
      { source: 2, target: 8, order: 1 },
      { source: 3, target: 9, order: 1 },
      { source: 4, target: 10, order: 1 },
      { source: 5, target: 6, order: 1 },
      { source: 6, target: 11, order: 1 },
      { source: 1, target: 12, order: 1 },
      { source: 2, target: 13, order: 1 },
      { source: 3, target: 14, order: 1 },
      { source: 4, target: 15, order: 1 },
      { source: 5, target: 16, order: 1 },
      { source: 6, target: 17, order: 1 },
      { source: 6, target: 18, order: 1 },
      { source: 7, target: 19, order: 1 },
      { source: 8, target: 20, order: 1 },
      { source: 9, target: 21, order: 1 },
      { source: 10, target: 22, order: 1 },
      { source: 11, target: 23, order: 1 }
    ]
  },
  {
    id: 'nh3',
    name: 'Аммиак (NH₃)',
    formula: 'NH₃',
    iupacName: 'Азан / Аммиак',
    category: 'Неорганическая',
    description: 'Бесцветный газ с резким характерным запахом. Молекула имеет форму тригональной пирамиды с sp³-гибридизованным атомом азота и одной неподеленной электронной парой.',
    funFact: 'Процесс Габера-Боша по синтезу аммиака из N₂ и H₂ кормит более половины населения Земли за счет производства азотных удобрений.',
    atoms: [
      { element: 'N', x: 0, y: 0.2, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -0.94, y: -0.27, z: 0 },
      { element: 'H', x: 0.47, y: -0.27, z: 0.81 },
      { element: 'H', x: 0.47, y: -0.27, z: -0.81 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 }
    ]
  },
  {
    id: 'ph3',
    name: 'Фосфин (PH₃)',
    formula: 'PH₃',
    iupacName: 'Фосфан / Фосфористый водород',
    category: 'Неорганическая',
    description: 'Чрезвычайно токсичный бесцветный газ с запахом тухлой рыбы. В отличие от аммиака, практически не проявляет основных свойств в воде.',
    funFact: 'Легенды о «блуждающих огоньках» на болотах связаны с самовоспламенением примесей дифосфина P₂H₄ в выделяющемся фосфине PH₃.',
    atoms: [
      { element: 'P', x: 0, y: 0.3, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -1.1, y: -0.4, z: 0 },
      { element: 'H', x: 0.55, y: -0.4, z: 0.95 },
      { element: 'H', x: 0.55, y: -0.4, z: -0.95 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 }
    ]
  },
  {
    id: 'hno3',
    name: 'Азотная кислота (HNO₃)',
    formula: 'HNO₃',
    iupacName: 'Нитратная кислота',
    category: 'Неорганическая',
    description: 'Сильная одноосновная кислота и мощнейший окислитель. Атом азота находится в sp²-гибридизации, максимальная валентность азота равна 4.',
    funFact: 'При взаимодействии азотной кислоты с белками кожи происходит ксантопротеиновая реакция — кожа окрашивается в ярко-желтый цвет!',
    atoms: [
      { element: 'N', x: 0, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 0, y: 1.2, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.1, y: -0.6, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -1.1, y: -0.6, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -1.7, y: -0.1, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 3, target: 4, order: 1 }
    ]
  },
  {
    id: 'h3po4',
    name: 'Ортофосфорная кислота (H₃PO₄)',
    formula: 'H₃PO₄',
    iupacName: 'Ортофосфорная кислота',
    category: 'Неорганическая',
    description: 'Трехосновная кислота средней силы. Образует 3 ряда солей: дигидрофосфаты, гидрофосфаты и средние ортофосфаты.',
    funFact: 'Ортофосфорная кислота используется в пищевой промышленности как пищевая добавка E338 для придания кислинки в напитках (например, Coca-Cola).',
    atoms: [
      { element: 'P', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0, y: 1.3, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.2, y: -0.4, z: 0, hybridization: 'sp3' },
      { element: 'O', x: -0.6, y: -0.4, z: 1.0, hybridization: 'sp3' },
      { element: 'O', x: -0.6, y: -0.4, z: -1.0, hybridization: 'sp3' },
      { element: 'H', x: 1.8, y: -0.1, z: 0 },
      { element: 'H', x: -0.9, y: -1.0, z: 1.3 },
      { element: 'H', x: -0.9, y: -1.0, z: -1.3 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 },
      { source: 2, target: 5, order: 1 },
      { source: 3, target: 6, order: 1 },
      { source: 4, target: 7, order: 1 }
    ]
  },
  {
    id: 'p4',
    name: 'Белый фосфор (P₄)',
    formula: 'P₄',
    iupacName: 'Тетрафосфор',
    category: 'Неорганическая',
    description: 'Молекулярная аллотропная модификация фосфора. Правильный тетраэдр P₄ со напряженными углами 60°. Крайне ядовит и огнеопасен.',
    funFact: 'Белый фосфор светится в темноте зеленоватым светом благодаря медленному окислению парами кислорода на поверхности.',
    atoms: [
      { element: 'P', x: 0, y: 1.15, z: 0, hybridization: 'sp3' },
      { element: 'P', x: 1.09, y: -0.38, z: 0, hybridization: 'sp3' },
      { element: 'P', x: -0.54, y: -0.38, z: 0.94, hybridization: 'sp3' },
      { element: 'P', x: -0.54, y: -0.38, z: -0.94, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 1, target: 2, order: 1 },
      { source: 1, target: 3, order: 1 },
      { source: 2, target: 3, order: 1 }
    ]
  }
];
