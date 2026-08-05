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
  },
  {
    id: 'co',
    name: 'Монооксид углерода (CO)',
    formula: 'CO',
    iupacName: 'Оксид углерода(II) / Угарный газ',
    category: 'Неорганическая',
    description: 'Бесцветный газ без запаха, несолеобразующий оксид. Содержит тройную связь C≡O, одна из которых образована по донорно-акцепторному механизму.',
    funFact: 'Угарный газ связывается с гемоглобином крови в 200–300 раз прочнее, чем кислород, образуя устойчивый карбоксигемоглобин.',
    atoms: [
      { element: 'C', x: -0.6, y: 0, z: 0, hybridization: 'sp' },
      { element: 'O', x: 0.6, y: 0, z: 0, hybridization: 'sp' }
    ],
    bonds: [
      { source: 0, target: 1, order: 3 }
    ]
  },
  {
    id: 'co2',
    name: 'Диоксид углерода (CO₂)',
    formula: 'CO₂',
    iupacName: 'Оксид углерода(IV) / Углекислый газ',
    category: 'Неорганическая',
    description: 'Линейная молекула с sp-гибридизованным атомом углерода и двумя двойными C=O связями. Угол связи O-C-O равен строго 180°.',
    funFact: 'При атмосферном давлении углекислый газ переходит из твердого состояния ("сухой лед") прямо в газообразное, минуя жидкое (сублимация).',
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0, hybridization: 'sp' },
      { element: 'O', x: -1.16, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.16, y: 0, z: 0, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 }
    ]
  },
  {
    id: 'sio2',
    name: 'Диоксид кремния (SiO₂)',
    formula: 'SiO₂',
    iupacName: 'Оксид кремния(IV) / Кварц / Кремнезем',
    category: 'Неорганическая',
    description: 'Вещество с атомной кристаллической решеткой. Каждая элементарная ячейка состоит из тетраэдров [SiO₄], связанных вершинами через мостиковые атомы кислорода.',
    funFact: 'Кварц обладает пьезоэлектрическими свойствами — при деформации генерирует электрический ток, что используется в кварцевых часах.',
    atoms: [
      { element: 'Si', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.9, y: 0.9, z: 0.9, hybridization: 'sp3' },
      { element: 'O', x: -0.9, y: -0.9, z: 0.9, hybridization: 'sp3' },
      { element: 'O', x: -0.9, y: 0.9, z: -0.9, hybridization: 'sp3' },
      { element: 'O', x: 0.9, y: -0.9, z: -0.9, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'sih4',
    name: 'Силан (SiH₄)',
    formula: 'SiH₄',
    iupacName: 'Моносилан / Кремневодород',
    category: 'Неорганическая',
    description: 'Бесцветный газ с резким неприятным запахом. Молекула имеет форму идеального тетраэдра с sp³-гибридизованным атомом кремния.',
    funFact: 'В отличие от устойчивого метана (CH₄), силан SiH₄ самовоспламеняется на воздухе при комнатной температуре со взрывом!',
    atoms: [
      { element: 'Si', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'H', x: 0.85, y: 0.85, z: 0.85 },
      { element: 'H', x: -0.85, y: -0.85, z: 0.85 },
      { element: 'H', x: -0.85, y: 0.85, z: -0.85 },
      { element: 'H', x: 0.85, y: -0.85, z: -0.85 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'h2co3',
    name: 'Угольная кислота (H₂CO₃)',
    formula: 'H₂CO₃',
    iupacName: 'Угольная кислота',
    category: 'Неорганическая',
    description: 'Слабая двухосновная кислота, существует только в разбавленных водных растворах и находится в равновесии с гидратом диоксида углерода CO₂·H₂O.',
    funFact: 'Угольная кислота поддерживают постоянный pH крови человека (около 7.4) благодаря карбонатной буферной системе.',
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 0, y: 1.22, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.1, y: -0.6, z: 0, hybridization: 'sp3' },
      { element: 'O', x: -1.1, y: -0.6, z: 0, hybridization: 'sp3' },
      { element: 'H', x: 1.7, y: -0.1, z: 0 },
      { element: 'H', x: -1.7, y: -0.1, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 2, target: 4, order: 1 },
      { source: 3, target: 5, order: 1 }
    ]
  },
  {
    id: 'h2sio3',
    name: 'Метакремниевая кислота (H₂SiO₃)',
    formula: 'H₂SiO₃',
    iupacName: 'Метакремниевая кислота',
    category: 'Неорганическая',
    description: 'Очень слабая нерастворимая двухосновная кислота. Выпадает в виде аморфного студенистого геля при подкислении растворов силикатов.',
    funFact: 'Высушенный гель кремниевой кислоты — силикагель — обладает огромной удельной поверхностью и применяется в качестве осушителя и адсорбента.',
    atoms: [
      { element: 'Si', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0, y: 1.35, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.2, y: -0.6, z: 0, hybridization: 'sp3' },
      { element: 'O', x: -1.2, y: -0.6, z: 0, hybridization: 'sp3' },
      { element: 'H', x: 1.8, y: -0.1, z: 0 },
      { element: 'H', x: -1.8, y: -0.1, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 2, target: 4, order: 1 },
      { source: 3, target: 5, order: 1 }
    ]
  },
  {
    id: 'sic',
    name: 'Карбид кремния / Карборунд (SiC)',
    formula: 'SiC',
    iupacName: 'Силиций карбид',
    category: 'Неорганическая',
    description: 'Бинарное соединение кремния и углерода со сверхпрочной тетраэдрической атомной кристаллической решеткой, близкой по твердости к алмазу.',
    funFact: 'Карборунд по твердости уступает лишь алмазу и нитриду бора, поэтому активно используется для создания абразивов, бронепластин и тормозов спорткаров.',
    atoms: [
      { element: 'Si', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'C', x: 0.9, y: 0.9, z: 0.9, hybridization: 'sp3' },
      { element: 'C', x: -0.9, y: -0.9, z: 0.9, hybridization: 'sp3' },
      { element: 'C', x: -0.9, y: 0.9, z: -0.9, hybridization: 'sp3' },
      { element: 'C', x: 0.9, y: -0.9, z: -0.9, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'o2',
    name: 'Дикислород (O₂)',
    formula: 'O₂',
    iupacName: 'Дикислород',
    category: 'Неорганическая',
    description: 'Газ, необходимый для дыхания большинства живых организмов. Молекула дикислорода парамагнитна благодаря наличию двух неспаренных электронов на разрыхляющих π*-орбиталях.',
    funFact: 'Жидкий кислород имеет светло-голубой цвет и втягивается в магнитное поле благодаря парамагнетизму!',
    atoms: [
      { element: 'O', x: -0.6, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 0.6, y: 0, z: 0, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 }
    ]
  },
  {
    id: 'o3',
    name: 'Озон (O₃)',
    formula: 'O₃',
    iupacName: 'Трикислород',
    category: 'Неорганическая',
    description: 'Аллотропная модификация кислорода с резким свежим запахом. Изогнутая молекула с валентным углом 116.8° и делокализованной 3-центровой 4-электронной π-связью.',
    funFact: 'Озоновый слой атмосфера поглощает жесткое ультрафиолетовое излучение Солнца (УФ-B и УФ-C), защищая биосферу Земли.',
    atoms: [
      { element: 'O', x: 0, y: 0.35, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -1.08, y: -0.35, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.08, y: -0.35, z: 0, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 1 }
    ]
  },
  {
    id: 'h2o2',
    name: 'Пероксид водорода (H₂O₂)',
    formula: 'H₂O₂',
    iupacName: 'Диводорода пероксид',
    category: 'Неорганическая',
    description: 'Несимметричная неплоская молекула со связью O-O. Степень окисления кислорода равна -1, что обуславливает двойственную ОВР функцию соединения.',
    funFact: 'Пероксид водорода медленно самопроизвольно разлагается на воду и кислород, а MnO₂ мгновенно ускоряет эту реакцию со вспышкой катализа.',
    atoms: [
      { element: 'O', x: -0.7, y: 0, z: 0.2, hybridization: 'sp3' },
      { element: 'O', x: 0.7, y: 0, z: -0.2, hybridization: 'sp3' },
      { element: 'H', x: -1.1, y: 0.85, z: -0.3 },
      { element: 'H', x: 1.1, y: -0.85, z: 0.3 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 },
      { source: 1, target: 3, order: 1 }
    ]
  },
  {
    id: 'h2s',
    name: 'Сероводород (H₂S)',
    formula: 'H₂S',
    iupacName: 'Сульфан / Сернистый водород',
    category: 'Неорганическая',
    description: 'Бесцветный чрезвычайно токсичный газ с характерным запахом тухлых яиц. Угол связи H-S-H составляет около 92.1°, связи образованы p-орбиталями серы почти без гибридизации.',
    funFact: 'Человеческий нос способен улавливать запах H₂S при ничтожных концентрациях, однако при более высоких концентрациях парализует обонятельный нерв.',
    atoms: [
      { element: 'S', x: 0, y: 0.1, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -0.96, y: -0.7, z: 0 },
      { element: 'H', x: 0.96, y: -0.7, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 }
    ]
  },
  {
    id: 'so2',
    name: 'Оксид серы(IV) / Сернистый газ (SO₂)',
    formula: 'SO₂',
    iupacName: 'Диоксид серы',
    category: 'Неорганическая',
    description: 'Бесцветный газ с резким удушливым запахом загорающейся спички. Уголковая молекула с sp²-гибридизацией центрального атома серы и валентным углом 119.5°.',
    funFact: 'SO₂ используется для консервации сухофруктов и вин благодаря антибактериальным и восстановительным свойствам (пищевая добавка E220).',
    atoms: [
      { element: 'S', x: 0, y: 0.3, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -1.2, y: -0.4, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.2, y: -0.4, z: 0, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 }
    ]
  },
  {
    id: 'so3',
    name: 'Оксид серы(VI) / Серный ангидрид (SO₃)',
    formula: 'SO₃',
    iupacName: 'Триоксид серы',
    category: 'Неорганическая',
    description: 'Плоская тригональная молекула с sp²-гибридизацией атома серы S(+6). Летучая жидкость при комнатной температуре, бурное взаимодействие с водой дает H₂SO₄.',
    funFact: 'SO₃ растворяется в 100% серной кислоте с образованием олеума — тяжелой дымящейся маслянистой жидкости.',
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 0, y: 1.43, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -1.24, y: -0.71, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.24, y: -0.71, z: 0, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 2 }
    ]
  },
  {
    id: 'h2so4',
    name: 'Серная кислота (H₂SO₄)',
    formula: 'H₂SO₄',
    iupacName: 'Серная кислота',
    category: 'Неорганическая',
    description: 'Сильная двухосновная кислота с тетраэдрическим окружением атома серы. Концентрированная кислота — сильнейший водоотнимающий агент и ОВР-окислитель.',
    funFact: 'Серная кислота является самым производимым химическим веществом в мире; объемы ее производства — главный индикатор химической промышленности страны.',
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0, y: 1.3, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 0, y: -1.3, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.2, y: 0, z: 0.7, hybridization: 'sp3' },
      { element: 'O', x: -1.2, y: 0, z: -0.7, hybridization: 'sp3' },
      { element: 'H', x: 1.8, y: 0.5, z: 0.7 },
      { element: 'H', x: -1.8, y: -0.5, z: -0.7 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 },
      { source: 3, target: 5, order: 1 },
      { source: 4, target: 6, order: 1 }
    ]
  },
  {
    id: 's8',
    name: 'Ромбическая сера (S₈)',
    formula: 'S₈',
    iupacName: 'Октасерра',
    category: 'Неорганическая',
    description: 'Восьмичленный корончатый цикл S₈ — наиболее устойчивая аллотропная модификация серы (α-S) при стандартных условиях.',
    funFact: 'Молекула S₈ имеет форму королевской короны (симметрия D₄d) с sp³-гибридизованными атомами серы (валентный угол S-S-S 107.9°, торсионный 98.0°).',
    atoms: [
      { element: 'S', x: 1.4, y: 0.5, z: 0.4, hybridization: 'sp3' },
      { element: 'S', x: 0.9, y: 1.2, z: -0.4, hybridization: 'sp3' },
      { element: 'S', x: -0.3, y: 1.4, z: 0.4, hybridization: 'sp3' },
      { element: 'S', x: -1.2, y: 0.7, z: -0.4, hybridization: 'sp3' },
      { element: 'S', x: -1.4, y: -0.5, z: 0.4, hybridization: 'sp3' },
      { element: 'S', x: -0.9, y: -1.2, z: -0.4, hybridization: 'sp3' },
      { element: 'S', x: 0.3, y: -1.4, z: 0.4, hybridization: 'sp3' },
      { element: 'S', x: 1.2, y: -0.7, z: -0.4, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 1, target: 2, order: 1 },
      { source: 2, target: 3, order: 1 },
      { source: 3, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 },
      { source: 5, target: 6, order: 1 },
      { source: 6, target: 7, order: 1 },
      { source: 7, target: 0, order: 1 }
    ]
  },
  {
    id: 'f2',
    name: 'Фтор (F₂)',
    formula: 'F₂',
    iupacName: 'Дифтор',
    category: 'Неорганическая',
    description: 'Бледно-жёлтый газ, самый сильный окислитель среди простых веществ. Связь F–F аномально слабая (158 кДж/моль) из-за отталкивания неподелённых электронных пар компактных атомов.',
    funFact: 'Фтор окисляет даже воду: 2F₂ + 2H₂O → 4HF + O₂. Его свободное получение стало возможно лишь в 1886 году (электролиз, Анри Муассан).',
    atoms: [
      { element: 'F', x: -0.706, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'F', x: 0.706, y: 0, z: 0, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 }
    ]
  },
  {
    id: 'cl2',
    name: 'Хлор (Cl₂)',
    formula: 'Cl₂',
    iupacName: 'Дихлор',
    category: 'Неорганическая',
    description: 'Жёлто-зелёный газ с резким удушливым запахом. Молекула Cl₂ (d = 1.988 Å) — важнейший промышленный реагент: хлорирование, отбеливание, производство ПВХ и соляной кислоты.',
    funFact: 'Хлор открыт Карлом Шееле в 1774 году при действии соляной кислоты на пиролюзит MnO₂; элементная природа хлора доказана Г. Дэви в 1810 году.',
    atoms: [
      { element: 'Cl', x: -0.994, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'Cl', x: 0.994, y: 0, z: 0, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 }
    ]
  },
  {
    id: 'br2',
    name: 'Бром (Br₂)',
    formula: 'Br₂',
    iupacName: 'Дибром',
    category: 'Неорганическая',
    description: 'Единственный неметалл — жидкость при комнатной температуре: тяжёлая красно-бурая летучая жидкость (ρ = 3.10 г/см³, tкип = 58.8 °C). Длина связи Br–Br 2.284 Å.',
    funFact: 'Название происходит от греческого βρῶμος — «зловонный»: пары брома имеют резкий неприятный запах и токсичны. Открыт А. Баларом в 1826 году.',
    atoms: [
      { element: 'Br', x: -1.142, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'Br', x: 1.142, y: 0, z: 0, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 }
    ]
  },
  {
    id: 'i2',
    name: 'Иод (I₂)',
    formula: 'I₂',
    iupacName: 'Дииод',
    category: 'Неорганическая',
    description: 'Тёмно-фиолетовые кристаллы с металлическим блеском, возгоняются с образованием фиолетовых паров. Самая длинная и слабая связь среди галогенов (2.666 Å, 151 кДж/моль).',
    funFact: 'Иод легко возгоняется, минуя жидкую фазу, а его пары в смеси с крахмалом дают знаменитое синее окрашивание — сверхчувствительную качественную реакцию.',
    atoms: [
      { element: 'I', x: -1.333, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'I', x: 1.333, y: 0, z: 0, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 }
    ]
  },
  {
    id: 'hcl',
    name: 'Хлороводород (HCl)',
    formula: 'HCl',
    iupacName: 'Хлороводород',
    category: 'Неорганическая',
    description: 'Полярная двухатомная молекула (d = 1.275 Å, μ = 1.08 D). Водный раствор — соляная кислота, одна из важнейших сильных кислот.',
    funFact: 'При 0 °C один объём воды растворяет около 500 объёмов хлороводорода — рекордная растворимость среди газов.',
    atoms: [
      { element: 'Cl', x: 0.638, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -0.638, y: 0, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 }
    ]
  },
  {
    id: 'hf',
    name: 'Фтороводород (HF)',
    formula: 'HF',
    iupacName: 'Фтороводород',
    category: 'Неорганическая',
    description: 'Самая прочная связь H–X (565 кДж/моль, d = 0.917 Å). Благодаря водородным связям HF — жидкость с аномально высокой температурой кипения +19.5 °C.',
    funFact: 'Плавиковая кислота HF травит стекло: SiO₂ + 4HF → SiF₄↑ + 2H₂O, поэтому её хранят в полиэтиленовой таре.',
    atoms: [
      { element: 'F', x: 0.459, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -0.459, y: 0, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 }
    ]
  },
  {
    id: 'hclo',
    name: 'Хлорноватистая кислота (HClO)',
    formula: 'HClO',
    iupacName: 'Гипохлорит водорода / Хлорноватистая кислота',
    category: 'Неорганическая',
    description: 'Неустойчивая слабая кислота (существует только в разбавленном растворе), хлор в степени окисления +1. Строение H–O–Cl: кислород в центре молекулы, угол ≈ 111°.',
    funFact: 'Именно HClO (а не сам хлор) отвечает за бактерицидное и отбеливающее действие хлорной воды, разлагаясь на свету с выделением атомарного кислорода.',
    atoms: [
      { element: 'O', x: 0, y: 0.2, z: 0, hybridization: 'sp3' },
      { element: 'Cl', x: 1.389, y: -0.763, z: 0, hybridization: 'sp3' },
      { element: 'H', x: -0.797, y: -0.352, z: 0 }
    ],
    bonds: [
      { source: 0, target: 1, order: 1 },
      { source: 0, target: 2, order: 1 }
    ]
  },
  {
    id: 'hclo3',
    name: 'Хлорноватая кислота (HClO₃)',
    formula: 'HClO₃',
    iupacName: 'Хлорноватая кислота',
    category: 'Неорганическая',
    description: 'Сильная кислота, существует только в водном растворе; хлор в степени окисления +5. Тетраэдрическое окружение Cl(+5): три связи Cl=O и одна группа Cl–OH.',
    funFact: 'Соли хлорноватой кислоты — хлораты; самая известная — бертолетова соль KClO₃, применявшаяся в спичечной промышленности и лабораторном получении кислорода.',
    atoms: [
      { element: 'Cl', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.814, y: 0.814, z: 0.814, hybridization: 'sp2' },
      { element: 'O', x: 0.814, y: -0.814, z: -0.814, hybridization: 'sp2' },
      { element: 'O', x: -0.814, y: 0.814, z: -0.814, hybridization: 'sp2' },
      { element: 'O', x: -0.946, y: -0.946, z: 0.946, hybridization: 'sp3' },
      { element: 'H', x: -1.506, y: -1.506, z: 1.506 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 2 },
      { source: 0, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 }
    ]
  },
  {
    id: 'hclo4',
    name: 'Хлорная кислота (HClO₄)',
    formula: 'HClO₄',
    iupacName: 'Хлорная кислота',
    category: 'Неорганическая',
    description: 'Одна из сильнейших неорганических кислот; хлор в высшей степени окисления +7. Искажённый тетраэдр ClO₃(OH): три короткие связи Cl=O (≈1.41 Å) и связь Cl–OH (≈1.64 Å).',
    funFact: 'В ряду HClO → HClO₂ → HClO₃ → HClO₄ сила и термическая устойчивость кислот растут, а окислительная способность падает.',
    atoms: [
      { element: 'Cl', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.814, y: 0.814, z: 0.814, hybridization: 'sp2' },
      { element: 'O', x: 0.814, y: -0.814, z: -0.814, hybridization: 'sp2' },
      { element: 'O', x: -0.814, y: 0.814, z: -0.814, hybridization: 'sp2' },
      { element: 'O', x: -0.946, y: -0.946, z: 0.946, hybridization: 'sp3' },
      { element: 'H', x: -1.506, y: -1.506, z: 1.506 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 2 },
      { source: 0, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 }
    ]
  },
  {
    id: 'cro3',
    name: 'Оксид хрома(VI) (CrO₃)',
    formula: 'CrO₃',
    iupacName: 'Оксид хрома(VI) / Хромовый ангидрид',
    category: 'Неорганическая',
    description: 'Мономер CrO₃ — плоская треугольная молекула O=Cr(=O)=O (аналог SO₃); в твёрдом состоянии CrO₃ образует полимерные цепочки из тетраэдров CrO₄. Тёмно-красные («вишнёвые») кристаллы, кислотный оксид, сильный окислитель, токсичен.',
    funFact: 'CrO₃ воспламеняет этанол при контакте — зрелищная демонстрация «огонь без спички», основанная на окислении спирта до ацетальдегида и уксусной кислоты.',
    atoms: [
      { element: 'Cr', x: 0, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: 1.57, y: 0, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -0.785, y: 1.36, z: 0, hybridization: 'sp2' },
      { element: 'O', x: -0.785, y: -1.36, z: 0, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 2 }
    ]
  },
  {
    id: 'cro4',
    name: 'Хромат-ион (CrO₄²⁻)',
    formula: 'CrO₄²⁻',
    iupacName: 'Хромат-ион',
    category: 'Неорганическая',
    description: 'Правильный тетраэдр (углы O–Cr–O ≈ 109.5°) с эквивалентными связями Cr–O ≈ 1.65 Å. Хроматы жёлтого цвета, устойчивы в щелочной и нейтральной среде.',
    funFact: 'Подкисление жёлтого раствора хромата мгновенно даёт оранжевый дихромат Cr₂O₇²⁻ — одно из самых наглядных равновесий неорганической химии.',
    atoms: [
      { element: 'Cr', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.953, y: 0.953, z: 0.953, hybridization: 'sp2' },
      { element: 'O', x: 0.953, y: -0.953, z: -0.953, hybridization: 'sp2' },
      { element: 'O', x: -0.953, y: 0.953, z: -0.953, hybridization: 'sp3' },
      { element: 'O', x: -0.953, y: -0.953, z: 0.953, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'cr2o7',
    name: 'Дихромат-ион (Cr₂O₇²⁻)',
    formula: 'Cr₂O₇²⁻',
    iupacName: 'Дихромат-ион',
    category: 'Неорганическая',
    description: 'Два тетраэдра CrO₄ с общей вершиной: мостик Cr–O–Cr ≈ 126° (d ≈ 1.79 Å), терминальные связи Cr=O короче (≈1.60 Å). Ионы оранжевого цвета, сильные окислители в кислой среде.',
    funFact: 'Окисление этанола дихроматом (оранжевый → зелёный Cr³⁺) лежало в основе первых алкометров для водителей.',
    atoms: [
      { element: 'O', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'Cr', x: -1.595, y: -0.813, z: 0, hybridization: 'sp3' },
      { element: 'Cr', x: 1.595, y: -0.813, z: 0, hybridization: 'sp3' },
      { element: 'O', x: -2.07, y: -1.055, z: 1.509, hybridization: 'sp2' },
      { element: 'O', x: -1.477, y: -2.219, z: -0.754, hybridization: 'sp2' },
      { element: 'O', x: -2.663, y: 0.109, z: -0.754, hybridization: 'sp3' },
      { element: 'O', x: 2.07, y: -1.055, z: 1.509, hybridization: 'sp2' },
      { element: 'O', x: 1.477, y: -2.219, z: -0.754, hybridization: 'sp2' },
      { element: 'O', x: 2.663, y: 0.109, z: -0.754, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 1, target: 0, order: 1 },
      { source: 2, target: 0, order: 1 },
      { source: 1, target: 3, order: 2 },
      { source: 1, target: 4, order: 2 },
      { source: 1, target: 5, order: 1 },
      { source: 2, target: 6, order: 2 },
      { source: 2, target: 7, order: 2 },
      { source: 2, target: 8, order: 1 }
    ]
  },
  {
    id: 'cro2cl2',
    name: 'Хлорид хромоила (CrO₂Cl₂)',
    formula: 'CrO₂Cl₂',
    iupacName: 'Дихлорид диоксида хрома / Хлористый хромоил',
    category: 'Неорганическая',
    description: 'Тетраэдрическая молекула хрома(+6): две короткие связи Cr=O (≈1.57 Å) и две связи Cr–Cl (≈2.12 Å). Тёмно-красная дымящая на воздухе жидкость.',
    funFact: 'Проба «хлорид хромоила»: при нагревании хлорида с K₂Cr₂O₇ и конц. H₂SO₄ выделяются красные пары CrO₂Cl₂ — качественная реакция на хлорид-ионы.',
    atoms: [
      { element: 'Cr', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.906, y: 0.906, z: 0.906, hybridization: 'sp2' },
      { element: 'O', x: 0.906, y: -0.906, z: -0.906, hybridization: 'sp2' },
      { element: 'Cl', x: -1.224, y: 1.224, z: -1.224, hybridization: 'sp3' },
      { element: 'Cl', x: -1.224, y: -1.224, z: 1.224, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'mno4',
    name: 'Перманганат-ион (MnO₄⁻)',
    formula: 'MnO₄⁻',
    iupacName: 'Перманганат-ион',
    category: 'Неорганическая',
    description: 'Правильный тетраэдр с d(Mn–O) ≈ 1.63 Å. Интенсивно фиолетовая окраска растворов KMnO₄ заметна даже при очень малых концентрациях.',
    funFact: '«Марганцовка» — раствор KMnO₄ — применяется как антисептик с конца XIX века; твёрдый KMnO₄ при нагревании разлагается с выделением кислорода.',
    atoms: [
      { element: 'Mn', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.941, y: 0.941, z: 0.941, hybridization: 'sp2' },
      { element: 'O', x: 0.941, y: -0.941, z: -0.941, hybridization: 'sp2' },
      { element: 'O', x: -0.941, y: 0.941, z: -0.941, hybridization: 'sp2' },
      { element: 'O', x: -0.941, y: -0.941, z: 0.941, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 2 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'mno42',
    name: 'Манганат-ион (MnO₄²⁻)',
    formula: 'MnO₄²⁻',
    iupacName: 'Манганат-ион',
    category: 'Неорганическая',
    description: 'Тетраэдрический ион марганца(+6) зелёного цвета. Устойчив только в сильнощелочных растворах; при разбавлении водой или подкислении диспропорционирует.',
    funFact: 'Зелёный расплав K₂MnO₄ — первая стадия промышленного получения «марганцовки» KMnO₄ из пиролюзита MnO₂.',
    atoms: [
      { element: 'Mn', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.958, y: 0.958, z: 0.958, hybridization: 'sp2' },
      { element: 'O', x: 0.958, y: -0.958, z: -0.958, hybridization: 'sp2' },
      { element: 'O', x: -0.958, y: 0.958, z: -0.958, hybridization: 'sp3' },
      { element: 'O', x: -0.958, y: -0.958, z: 0.958, hybridization: 'sp3' }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 1 },
      { source: 0, target: 4, order: 1 }
    ]
  },
  {
    id: 'mn2o7',
    name: 'Оксид марганца(VII) (Mn₂O₇)',
    formula: 'Mn₂O₇',
    iupacName: 'Оксид марганца(VII) / Марганцевый ангидрид',
    category: 'Неорганическая',
    description: 'Два тетраэдра MnO₄ с общей вершиной: угол Mn–O–Mn ≈ 120.7°, d(Mn=O) ≈ 1.585 Å, d(Mn–O мост.) ≈ 1.77 Å. Тёмно-зелёная маслянистая жидкость, кислотный оксид.',
    funFact: 'Mn₂O₇ — один из самых опасных оксидов: взрывается при нагревании и воспламеняет органические вещества при контакте.',
    atoms: [
      { element: 'O', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'Mn', x: -1.538, y: -0.876, z: 0, hybridization: 'sp3' },
      { element: 'Mn', x: 1.538, y: -0.876, z: 0, hybridization: 'sp3' },
      { element: 'O', x: -1.998, y: -1.137, z: 1.494, hybridization: 'sp2' },
      { element: 'O', x: -1.357, y: -2.262, z: -0.747, hybridization: 'sp2' },
      { element: 'O', x: -2.638, y: -0.012, z: -0.747, hybridization: 'sp2' },
      { element: 'O', x: 1.998, y: -1.137, z: 1.494, hybridization: 'sp2' },
      { element: 'O', x: 1.357, y: -2.262, z: -0.747, hybridization: 'sp2' },
      { element: 'O', x: 2.638, y: -0.012, z: -0.747, hybridization: 'sp2' }
    ],
    bonds: [
      { source: 1, target: 0, order: 1 },
      { source: 2, target: 0, order: 1 },
      { source: 1, target: 3, order: 2 },
      { source: 1, target: 4, order: 2 },
      { source: 1, target: 5, order: 2 },
      { source: 2, target: 6, order: 2 },
      { source: 2, target: 7, order: 2 },
      { source: 2, target: 8, order: 2 }
    ]
  },
  {
    id: 'hmno4',
    name: 'Пермангановая кислота (HMnO₄)',
    formula: 'HMnO₄',
    iupacName: 'Пермангановая кислота',
    category: 'Неорганическая',
    description: 'Тетраэдрическое окружение Mn(+7): три связи Mn=O и одна группа Mn–OH. Сильная кислота, существует только в разбавленных водных растворах.',
    funFact: 'Пермангановая кислота — одна из немногих сильных кислот, соли которой окрашены: фиолетовый цвет её ионов узнаваем с первого взгляда.',
    atoms: [
      { element: 'Mn', x: 0, y: 0, z: 0, hybridization: 'sp3' },
      { element: 'O', x: 0.915, y: 0.915, z: 0.915, hybridization: 'sp2' },
      { element: 'O', x: 0.915, y: -0.915, z: -0.915, hybridization: 'sp2' },
      { element: 'O', x: -0.915, y: 0.915, z: -0.915, hybridization: 'sp2' },
      { element: 'O', x: -0.947, y: -0.947, z: 0.947, hybridization: 'sp3' },
      { element: 'H', x: -1.507, y: -1.507, z: 1.507 }
    ],
    bonds: [
      { source: 0, target: 1, order: 2 },
      { source: 0, target: 2, order: 2 },
      { source: 0, target: 3, order: 2 },
      { source: 0, target: 4, order: 1 },
      { source: 4, target: 5, order: 1 }
    ]
  }
];


