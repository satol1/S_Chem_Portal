# Системный промпт и спецификация для создания новых учебных тем по химии (S_Chem_Portal)

> **Назначение документа**: Данный промпт является общеобязательным регламентом и пошаговым руководством для ИИ-агентов (AI Coding Assistants / Vibe Coders) и разработчиков при создании, рефакторинге и интеграции новых академических тем по химии на платформе **S_Chem_Portal**.
> 
> Промпт составлен на основе эталонного опыта реализации тем **«Химия азота (N) и фосфора (P)»** (`elem-nonme-np`) и **«Углерод (C) и кремний (Si)»** (`elem-nonme-csi`).

---

## 1. Фундаментальные архитектурные принципы и модульность (DRY, SOLID, KISS)

Платформа рассчитана на сотни химических тем. Любое монолитное нагромождение кода или дублирование компонентов категорически запрещено.

### 1.1. Модульная структура темы (Подкомпоненты)
Запрещено писать всю теорию в одном огромном файле-монолите (более 400–500 строк). Каждая новая тема с уникальным UI должна быть разбита на модули в папке `src/components/study/topics/<topicSlug>/`:

1. `<Topic>Header.tsx` — Академическая шапка (код темы `ХЭ-XX`, целевой экзамен `ЕГЭ / ДВИ`), интерактивные быстрые навигационные теги [`TopicQuickNavTags`](file:///f:/S_Chem_Portal/src/components/study/TopicQuickNavTags.tsx) для мгновенного перехода к ключевым подразделам, ключевая идея темы (Lightbulb callout), экзаменационные подводные камни ФИПИ (Alert callout) и навигационная сетка Содержания темы (`#nav-toc`).
2. `<Topic>Sections.tsx` — Основные разделы темы (#01–#09). Каждый раздел включает централизованный значок раздела [`SectionBadge`](file:///f:/S_Chem_Portal/src/components/study/SectionBadge.tsx) (со стилизованной стрелкой `ArrowRight` вместо дублирующих цифр), заголовок, кнопку возврата наверх (`ArrowUp` -> `#nav-toc`), химические акценты, формулы, 2D-превью слева от текста и 3D-просмотрщик в разделе #09.
3. `<Topic>DarkBlocks.tsx` — Переиспользуемые темные карточки (`bg-slate-900 border border-slate-800 rounded-xl`) для промышленного химизма, доменных процессов и углубленных заметок.
4. `<Topic>FunFacts.tsx` — Переиспользуемые акцентные блоки с желтой скобкой (`bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 rounded-xl`) с иконкой `Lightbulb` цвета `text-amber-600` для интересных фактов.
5. `<Topic>Diagrams.tsx` / `<Topic>ReactionMatrix.tsx` — Изолированные SVG-схемы аллотропии и сравнительные матрицы реакций.
6. `<Topic>TheoryView.tsx` — Главный связующий компонент представления темы.

### 1.2. DRY (Don't Repeat Yourself) — Единая система модулей
- **Запрещено**: Создавать дублирующие макеты страниц роутинга или велосипеды для типичных элементов.
- **Обязательно к использованию**:
  - Централизованный компонент [`StudyTopicTheoryPage`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicTheoryPage.tsx).
  - Централизованный компонент [`StudyTopicPracticePage`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicPracticePage.tsx).
  - Для научных формул **всегда** использовать [`ChemFormula`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx).
  - Для 3D-моделирования **всегда** использовать [`MoleculeViewer3D`](file:///f:/S_Chem_Portal/src/components/interactive/MoleculeViewer3D.tsx).
  - Для интерактивных подсказок к терминам **всегда** использовать [`TermTooltip`](file:///f:/S_Chem_Portal/src/components/scientific/TermTooltip.tsx).
  - Для значка в заголовках разделов **всегда** использовать централизованный компонент [`SectionBadge`](file:///f:/S_Chem_Portal/src/components/study/SectionBadge.tsx).
  - Для кнопки возврата к содержанию в заголовке раздела **всегда** использовать [`ScrollToNavButton`](file:///f:/S_Chem_Portal/src/components/study/ScrollToNavButton.tsx).
  - Для сетки Содержания раздела (`#nav-toc`) **всегда** использовать [`TopicNavGrid`](file:///f:/S_Chem_Portal/src/components/study/TopicNavGrid.tsx).
  - Для нижнего призыва к практике **всегда** использовать [`PracticeBanner`](file:///f:/S_Chem_Portal/src/components/study/PracticeBanner.tsx).
  - Для акцентных выносок и интересных фактов **всегда** использовать [`TheoryCallout`](file:///f:/S_Chem_Portal/src/components/study/TheoryCallout.tsx).
  - Для темных карточек промышленного химизма **всегда** использовать [`DarkBlockCard`](file:///f:/S_Chem_Portal/src/components/study/DarkBlockCard.tsx).
  - Для быстрых навигационных тегов в шапке темы **всегда** использовать [`TopicQuickNavTags`](file:///f:/S_Chem_Portal/src/components/study/TopicQuickNavTags.tsx) (с эффектом `hover:opacity-70 transition cursor-pointer` и плавным скроллом к целевым секциям).

> [!IMPORTANT]
> **Правило упреждающей централизации новых компонентов**: Если при разработке новой темы требуется ввести элемент UI, макет карточки, выноску или интерактивный блок, ранее не встречавшийся в существующих темах, **запрещено дублировать его локально в коде темы**. Такой компонент **сразу должен создаваться как централизованный модуль** (в папке `src/components/study/` или `src/components/scientific/`), чтобы любой последующий ИИ-агент или разработчик мог сразу использовать его в будущем без дублирования кода.

---

## 2. Научный рендеринг формул, терминов и орфографические стандарты

Все химические формулы, уравнения реакций, электронные конфигурации, орбитали, двойные/тройные связи, ионы и терминальные тексты **должны рендериться со 100% академической точностью**.

### 2.1. Использование компонента `ChemFormula`
- **Запрещено**: Выводить химические формулы открытым текстом в JSX без парсера (например, `HNO3`, `NH4+`, `C=C`, `C#N`).
- **Обязательно**:
  ```tsx
  <ChemFormula formula="4NH3 + 5O2 -(Pt/Rh)-> 4NO^ + 6H2O" />
  ```

### 2.2. Стандарты обработки синтаксиса `ChemFormula`:
1. **Электронные конфигурации орбиталей (`ns^2`, `np^2`, `1s^2`, `2p^6`, `3d^10`)**:
   - Должны конвертироваться в `\mathrm{ns}^{2} \mathrm{np}^{2}` без искажения верхних индексов в нижние (избегать ложного вывода `\mathrm{ns^_{2}}`).
2. **Двойные и тройные связи (`C=C`, `C=O`, `C#N`, `C#O`, `:C#O:`, `O=C=O`)**:
   - Символ `#` в KaTeX является символом аргумента макроса и вызывает ошибку синтаксиса. Парсер `ChemFormula` автоматически преобразует `#` и `≡` в `\equiv`, а `=` в химическое равенство:
     - `C=C` $\rightarrow$ `\mathrm{C}=\mathrm{C}`
     - `C#N` $\rightarrow$ `\mathrm{C}\equiv\mathrm{N}`
     - `:C#O:` $\rightarrow$ `:\!\mathrm{C}\equiv\mathrm{O}\!:`
3. **Кристаллогидраты и двойные оксиды (`Na2O*CaO*6SiO2`, `CuSO4*5H2O`)**:
   - Знаки `*` и `·` преобразуются в `\cdot`.
4. **Запрет сырых LaTeX-строк в обычном JSX-тексте**:
   - Категорически запрещено оставлять в обычном текстовом JSX незакодированные строки вида `$\rightarrow$` или `$\rightleftharpoons$`. В тексте следует использовать Юникод `→` или оборачивать выражение в `<ChemFormula formula="..." />`.

### 2.3. Правило орфографии русского языка: Строчные буквы для названий элементов
- **Строгое правило**: В русском языке и отечественной академической химической школе названия химических элементов (*углерод, кремний, азот, фосфор, кислород, водород, сера, хлор, фтор, бром, иод, натрий, железо, медь* и т.д.) являются нарицательными существительными.
- **Обязательное требование**: Внутри предложений, в заголовках, подзаголовках, кнопках, вкладках, ячейках таблиц, подсказках и пояснениях названия элементов пишутся со **строчной (маленькой) буквы** (за исключением случаев, когда элемент является самым первым словом предложения или заголовка).
  - ❌ *Неправильно*: `5. Оксиды Углерода: CO`, `Химия Азота (N) и Фосфора (P)`, `Аллотропия Углерода и Кремния`, `Химические свойства Кремния (Si)`.
  - ✅ *Правильно*: `5. Оксиды углерода: CO (угарный газ) и CO₂ (углекислый газ)`, `Химия азота (N) и фосфора (P)`, `Аллотропия углерода и кремния`, `Химические свойства кремния (Si)`.
  - ✅ *С большой буквы — ТОЛЬКО если слово первое в заголовке или предложении*: `Углерод и кремний — элементы IV-A группы`, `Азот находится во 2-м периоде`.
- **Буквенные химические символы в скобках** сохраняют стандартное заглавное написание: `(C)`, `(Si)`, `(N)`, `(P)`.

### 2.4. Интерактивные терминологические подсказки (`TermTooltip`)
- **Компонент**: Использовать [`TermTooltip`](file:///f:/S_Chem_Portal/src/components/scientific/TermTooltip.tsx) для разъяснения сложных, специальных или современных научных терминов (например, *«Диспропорционирование»*, *«Пассивация»*, *«Карботермическое восстановление»*, *«Совместный гидролиз»*, *«Трихлорсилан»*).
- **Умеренность и баланс**: Подсказки добавляются **точечно** на ключевые термины (примерно 2–4 подсказки на раздел), чтобы улучшать понимание, но не перегружать визуальное восприятие текста.
- **Пример применения**:
  ```tsx
  <TermTooltip term="Пассивация" definition="Образование на поверхности элемента защитной оксидной пленки, предотвращающей дальнейшую реакцию при 20°C." />
  ```

---

## 3. Стандарты 2D-Рендеров, Схем и Модальных окон

Для аллотропных модификаций, кристаллической решетки и материалов используются 2D-рендеры и графические схемы.

### 3.1. Размещение и пропорции 2D-рендеров
- **Категорически запрещено**: Использовать `object-cover` с фиксированным `aspect-ratio` для научных схем и рендеров (это приводит к обрезанию текста и граней рисунка).
- **Обязательно**:
  1. **Компоновка карточки**: Картинка-превью располагается **слева от текста** (`flex flex-col sm:flex-row gap-4 items-center sm:items-start`).
  2. **Контейнер превью**: Фиксированный компактный блок (`w-32 sm:w-36 h-32 sm:h-36 bg-slate-950 rounded-xl border border-slate-800 p-1.5 flex items-center justify-center shrink-0`).
  3. **Свойства изображения**: `className="max-h-full max-w-full object-contain"`.
  4. **Иконка при наведении**: Кнопка превью имеет оверлей с иконкой `ZoomIn` для указания на возможность клика.

### 3.2. Требование к языку и терминологии 2D-схем и рендеров (Российская научная школа)
- **100% Русский язык**: Любая графическая схема, 2D-рендер, иллюстративный SVG-чертеж или векторное изображение кристаллической структуры ДОЛЖНЫ содержать надписи, подписи связей, легенду и заголовки **строго на русском языке** в соответствии с терминологией российской академической школы.
- **Запрет англицизмов на графике**: Категорически запрещены английские надписи на картинках рендеров (*«GRAPHITE CRYSTAL STRUCTURE»*, *«Graphene Layer»*, *«INTERLAYER SPACING»*, *«van der Waals WEAK BONDS»*, *«FULLERENE C60 BUCKYBALL»*, *«CRYSTALLINE SILICON»*).
- **Эталонные русские термины для рендеров**:
  - `Graphene Layer` $\rightarrow$ `Графеновый слой (плоские сетки)`
  - `Interlayer Spacing (3.35 Å)` $\rightarrow$ `Межслойное расстояние 3.35 Å`
  - `van der Waals Weak Bonds` $\rightarrow$ `Слабые связи Ван-дер-Ваальса (d = 3.35 Å)`
  - `Delocalized π-electrons` $\rightarrow$ `Делокализованные π-электроны (p-орбитали)`
  - `Buckyball / Truncated Icosahedron` $\rightarrow$ `Усеченный икосаэдр (бакибол)`
  - `Diamond Cubic Lattice Unit Cell` $\rightarrow$ `Элементарная кубическая ячейка типа алмаза`
  - `Silicon Atom (Si)` $\rightarrow$ `Атом кремния (Si)`

### 3.3. Полноэкранное Модальное Окно
При клике на любое 2D-превью открывается модальное окно:
- Контейнер: `fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6`.
- Шапка с полным названием схемы на русском языке и кнопкой закрытия `X`.
- Изображение с `max-h-[70vh] object-contain` без единого обрезания.

### 3.4. КРИТИЧЕСКОЕ ПРАВИЛО: Импорт изображений через ES-модули (Совместимость с хостингами)
> [!CAUTION]
> **Запрещено использовать абсолютные строковые пути**: Использование абсолютных путей вида `src="/images/allotropes/diamond.jpg"` приводит к ошибке **404** при деплое на статические хостинги (GitHub Pages, Vercel, Netlify, подпапки сервера), поскольку проект использует относительно скомпилированный базовый путь (`base: './'` в `vite.config.ts`).
> 
> **Обязательный стандарт**: Все локальные изображения схем, 2D-моделей и иллюстраций должны располагаться в папке `src/assets/images/` и импортироваться напрямую в TSX-файлы компонента:
> ```tsx
> import diamondImg from '../../../../assets/images/allotropes/diamond.jpg';
> 
> <img src={diamondImg} alt="2D структура алмаза" />
> ```
> В этом случае сборщик Vite автоматически оптимизирует изображение, сгенерирует хеш в `dist/assets/` и сформирует правильный относительный URL для любых систем развертывания.

---

## 4. Регламент 3D-Моделирования (Three.js / MoleculeViewer3D)

3D-визуализация молекул — ключевой интерактивный элемент платформы.

### 4.1. Создание и регистрация 3D-моделей
- Каждая новая тема должна содержать комплект тематических 3D-моделей веществ (в среднем от 4 до 8 молекул).
- Все модели регистрируются в файле [`src/data/molecules.ts`](file:///f:/S_Chem_Portal/src/data/molecules.ts) по интерфейсу `Molecule`:
  - `id`: уникальный строковый идентификатор в нижнем регистре (например, `co`, `co2`, `sio2`, `sih4`, `sic`).
  - `atoms`: массив атомов с 3D-координатами $(x, y, z)$ и гибридизацией (`sp`, `sp2`, `sp3`).
  - `bonds`: массив связей с порядком (`order: 1 | 2 | 3`).

### 4.2. КРИТИЧЕСКОЕ ОГРАНИЧЕНИЕ: Изоляция от главной страницы
> [!CAUTION]
> Тематические 3D-модели новых соединений НЕ ДОЛЖНЫ добавляться в массив `DEFAULT_HOME_MOLECULES` в файле [`src/components/interactive/MoleculeViewer3D.tsx`](file:///f:/S_Chem_Portal/src/components/interactive/MoleculeViewer3D.tsx).
> На главной странице портала отображаются только базовые демо-молекулы.

### 4.3. Размещение 3D-просмотрщика в теме
- **Строго Раздел #09**: 3D-просмотрщик располагается в самом последнем разделе теории (#09) непосредственно перед нижним призывом к действию:
  ```tsx
  <MoleculeViewer3D 
    moleculeIds={['co', 'co2', 'ch4', 'sio2', 'sih4', 'h2co3', 'h2sio3', 'sic']} 
    initialSelectedId="co2"
    title="Интерактивные 3D-модели соединений углерода и кремния"
  />
  ```

---

## 5. Протокол научной верификации данных (Scientific Verification Protocol)

Любая генерируемая или обновляемая тема должна быть строго верифицирована. **Образовательные ошибки, устаревшие представления или химические галлюцинации недопустимы.**

### 5.1. Расширенный перечень авторитетных источников для сверки

При формировании теории, уравнений реакций, качественных признаков, физических констант и практических заданий обязательна перекрестная проверка по следующим источникам:

#### 1. Российские академические учебники и монографии:
- **Некрасов Б.В.** — *«Основы общей химии»* (в 2-х томах). Фундаментальное руководство по химизму элементов и промышленным процессам.
- **Третьяков Ю.Д. (ред.)** — *«Неорганическая химия»* (в 3-х томах, Химический факультет МГУ).
- **Реутов О.А., Курц А.Л., Бутина К.П.** — *«Органическая химия»* (в 4-х томах, МГУ).
- **Степенин В.Д., Пашкова Л.И.** — *«Курс неорганической химии»*.
- **Пилипенко А.Т., Сухан В.В.** — *«Справочник по химии»*.
- **Потапов В.М., Хомченко Г.П.** — *«Химия»* (Справочное пособие для поступающих в ВУЗы).

#### 2. Официальные материалы ФИПИ и олимпиадные базы:
- **Кодификатор и спецификация ЕГЭ/ОГЭ по химии** текущего года.
- **Официальный банк заданий ФИПИ** (критерии оценивания заданий №29 ОВР, №30 ИОР, №31 Неорганическая цепочка, №32 Органический синтез, №33 Расчетная задача).
- **Материалы ДВИ МГУ по химии** и задания **Всероссийской олимпиады школьников (ВсОШ)**.

#### 3. Международные академические и физико-химические базы:
- **IUPAC Gold Book** (https://goldbook.iupac.org/) — номенклатура ИЮПАК, терминология, определения.
- **PubChem Database** (https://pubchem.ncbi.nlm.nih.gov/) — 3D-структуры, CAS-номера, константы диссоциации ($pK_a$), растворимость, изомерные SMILES.
- **ChEMBL Database** — биологическая активность, фармакофорные свойства и молекулярные механизмы.
- **CRC Handbook of Chemistry and Physics** — точные термодинамические величины ($\Delta H^\circ, \Delta S^\circ, \Delta G^\circ$), стандартные электродные потенциалы ($E^\circ$), произведение растворимости ($K_{sp}$).
- **NIST Chemistry WebBook** (https://webbook.nist.gov/) — ИК-, УФ- и масс-спектрометрические данные, термохимия.
- **Inorganic Syntheses** (Wiley) — препаративные лабораторные методики синтеза неорганических соединений.
- **Greenwood N.N., Earnshaw A.** — *«Chemistry of the Elements»* (Butterworth-Heinemann).
- **Cotton F.A., Wilkinson G.** — *«Advanced Inorganic Chemistry»* (John Wiley & Sons).

#### 4. Международные рецензируемые научные журналы:
- **ACS Publications** (*Journal of the American Chemical Society*, *Inorganic Chemistry*, *The Journal of Organic Chemistry*, *Chemical Reviews*).
- **Royal Society of Chemistry (RSC)** (*Chemical Science*, *Dalton Transactions*, *Organic & Biomolecular Chemistry*).
- **Nature Publishing Group** (*Nature Chemistry*, *Nature Materials*, *Nature Reviews Chemistry*).
- **ScienceDirect / Elsevier** (*Tetrahedron*, *Polyhedron*, *Inorganica Chimica Acta*).
- **OpenAlex & Europe PMC** — полнотекстовый поиск академических публикаций по DOI и цитированиям.
- **arXiv / bioRxiv** — препринты химической физики, теоретической химии и структурного анализа.

---

## 6. Единообразие визуального стиля и дизайн-системы

Дизайн должен быть академическим, современным, динамичным и соответствовать единому стилю платформы.

### 6.1. Цветовая палитра Tailwind CSS
- **Основной фон и текстовые блоки**: Палитра `Slate` (`bg-slate-50`, `bg-white`, `text-slate-900`, `border-slate-200`).
- **Акценты и важные элементы**: Палитра `Amber` / `Orange` (`bg-amber-500`, `text-amber-900`, `border-amber-200`).
- **Экзаменационные предупреждения и ошибки**: Палитра `Rose` / `Red` (`bg-rose-50`, `border-rose-200`, `text-rose-950`).
- **Успешные статусы и каталитические процессы**: Палитра `Emerald` / `Teal` (`bg-emerald-50`, `border-emerald-200`).

### 6.2. Типографика
- `font-sans`: Основной текст конспекта (Inter / system-ui).
- `font-mono`: Химические формулы, уравнения, коды тем (`elem-nonme-csi`), номера реакций.
- `font-serif`: Нумерация и названия академических схем (*«Схема 12. Разновидности аллотропии C и Si»*).

### 6.3. Стилистика выносок и блоков:
1. **Темные блоки (`<Topic>DarkBlocks.tsx`)**:
   - Контейнер: `p-5 sm:p-6 rounded-xl bg-slate-900 text-white space-y-3.5 text-xs sm:text-sm border border-slate-800`.
   - Шапка: Заголовок `font-semibold text-white text-base` и моноширинный бейдж `text-xs font-mono text-slate-400` с подчеркиванием `border-b border-slate-800 pb-2`.
   - Внутренние блоки реакций: `p-3.5 rounded-xl bg-slate-800 border border-slate-700 font-mono text-amber-300` или `text-teal-300`.
2. **Желтые блоки с фактами (`<Topic>FunFacts.tsx`)**:
   - Контейнер: `p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2`.
   - Иконка: `Lightbulb` цвета `text-amber-600`.
3. **Заголовки разделов**:
   - В начале каждого раздела **строго используется** централизованный компонент [`SectionBadge`](file:///f:/S_Chem_Portal/src/components/study/SectionBadge.tsx) (`w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0` со стилизованной стрелкой `ArrowRight`), заменяющий дублирующие цифры (`01`, `02`).
   - Рядом с ним размещается заголовок `<h2>` с номером раздела (например, `1. Сравнительный анализ...`) и кнопка возврата к содержанию `ArrowUp`.
   - Раздельные фильтры в заголовках — лишние, их добавлять не нужно.

---

## 7. Пошаговый чек-лист генерации новой темы для ИИ-агента

```
[Шаг 1] Сбор данных и научная верификация
   └─ Изучение темы по Некрасову, Третьякову, PubChem, IUPAC и Кодификатору ФИПИ.
   └─ Проверка орфографии: элементы пишутся со строчной буквы в заголовках и тексте!

[Шаг 2] Регистрация 3D-моделей в src/data/molecules.ts
ыд   └─ Расчет 3D-координат атомов и связей. Не добавлять в DEFAULT_HOME_MOLECULES!

[Шаг 3] Формирование набора практических задач в src/data/<topicSlug>Tasks.ts
   └─ Создание вопросов, вариантов ответов, развернутых решений и критериев ФИПИ.

[Шаг 4] Подготовка 2D-рендеров и схем в src/assets/images/
   └─ Проверка языка: 100% русские надписи по российской научной школе (без англицизмов).

[Шаг 5] Создание модульной структуры в src/components/study/topics/<topicSlug>/
   └─ <Topic>Header.tsx (Шапка, Key Idea, FIPI Pitfalls, TOC #nav-toc).
   └─ <Topic>DarkBlocks.tsx (bg-slate-900 карточки процессов).
   └─ <Topic>FunFacts.tsx (Желтые блоки border-l-amber-500).
   └─ <Topic>Sections.tsx (Разделы #01-#09, 2D рендеры слева от текста + модалка, 3DViewer в #09).
   └─ Использование TermTooltip для сложной терминологии.
   └─ <Topic>TheoryView.tsx (Главный связующий компонент).

[Шаг 6] Регистрация темы и Практикума в роутинге
   └─ Интеграция в StudyTopicTheoryPage.tsx, StudyTopicPracticePage.tsx и studyBlocksData.ts.

[Шаг 7] Проверка сборки, линтинга и запуск тестов
   └─ Выполнение `npx tsc --noEmit`
   └─ Выполнение `npm run build`

[Шаг 8] Сохранение результатов в системе контроля версий Git
   └─ Выполнение `git add .`
   └─ Выполнение `git commit -m "..."`
   └─ Выполнение `git push origin main`
```

---

## 8. Эталонные реализации темы (Reference Implementations)

В качестве образца использовать:
1. Тема Азот и Фосфор: [`src/components/study/topics/NitrogenPhosphorusTheoryView.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/NitrogenPhosphorusTheoryView.tsx)
2. Модульная тема Углерод и Кремний: [`src/components/study/topics/CarbonSiliconTheoryView.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/CarbonSiliconTheoryView.tsx) и подкомпоненты в [`src/components/study/topics/carbonSilicon/`](file:///f:/S_Chem_Portal/src/components/study/topics/carbonSilicon/)
3. Массив задач практикума: [`src/data/nitrogenPhosphorusTasks.ts`](file:///f:/S_Chem_Portal/src/data/nitrogenPhosphorusTasks.ts)
4. Форматирование формул: [`src/components/scientific/ChemFormula.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx)
5. Всплывающие подсказки к терминам: [`src/components/scientific/TermTooltip.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/TermTooltip.tsx)
6. Значок заголовков разделов: [`src/components/study/SectionBadge.tsx`](file:///f:/S_Chem_Portal/src/components/study/SectionBadge.tsx)
7. Кнопка возврата к содержанию: [`src/components/study/ScrollToNavButton.tsx`](file:///f:/S_Chem_Portal/src/components/study/ScrollToNavButton.tsx)
8. Сетка Содержания раздела (`#nav-toc`): [`src/components/study/TopicNavGrid.tsx`](file:///f:/S_Chem_Portal/src/components/study/TopicNavGrid.tsx)
9. Баннер перехода к практикуму: [`src/components/study/PracticeBanner.tsx`](file:///f:/S_Chem_Portal/src/components/study/PracticeBanner.tsx)
10. Выноски и интересные факты: [`src/components/study/TheoryCallout.tsx`](file:///f:/S_Chem_Portal/src/components/study/TheoryCallout.tsx)
11. Темные блоки процессов: [`src/components/study/DarkBlockCard.tsx`](file:///f:/S_Chem_Portal/src/components/study/DarkBlockCard.tsx)
12. Быстрые навигационные теги шапки: [`src/components/study/TopicQuickNavTags.tsx`](file:///f:/S_Chem_Portal/src/components/study/TopicQuickNavTags.tsx)
13. 3D-Модели: [`src/data/molecules.ts`](file:///f:/S_Chem_Portal/src/data/molecules.ts)
