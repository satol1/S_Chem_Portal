# Системный промпт и спецификация для создания новых учебных тем по химии (S_Chem_Portal)

> **Назначение документа**: Данный промпт является общеобязательным регламентом и пошаговым руководством для ИИ-агентов (AI Coding Assistants / Vibe Coders) и разработчиков при создании, рефакторинге и интеграции новых академических тем по химии на платформе **S_Chem_Portal**.
>
> Промпт составлен на основе эталонного опыта реализации трёх тем:
> 1. **«Кислород (O) и сера (S)»** (`elem-nonme-so`) — **ФИНАЛЬНЫЙ ЭТАЛОННЫЙ СТАНДАРТ**: самая поздняя тема, в которой закреплены все итоговые исправления дизайна, шапки, модалок, 2D-рендеров и централизованных компонентов.
> 2. **«Углерод (C) и кремний (Si)»** (`elem-nonme-csi`) — эталон модульной файловой структуры темы.
> 3. **«Азот (N) и фосфор (P)»** (`elem-nonme-np`) — эталон объёма теории и тематического практикума.
>
> **Правило приоритета**: при любом расхождении между данным документом, старыми темами (N/P, C/Si) и темой «Кислород и Сера» — приоритет имеет **реализация темы «Кислород и Сера»** и данный документ.

---

## 0. Стандарт темы «на одном экране» (краткая сводка для агента)

| Аспект | Требование финального стандарта |
|---|---|
| Структура кода | Модульная папка `src/components/study/topics/<topicSlug>/` (6+ файлов), файлы как правило ≤ 400–500 строк (`Sections` — до ~900) |
| Агенты | Три роли: разработка → **научная верификация** (§7) → **постпроверка орфографии и стиля** (§8) |
| Формулы | Только [`ChemFormula`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx) (KaTeX) / [`ChemText`](file:///f:/S_Chem_Portal/src/components/scientific/ChemText.tsx); константы через проп `math` |
| Орфография | Названия элементов — со **строчной** буквы внутри предложений (§3.7) |
| Интересные факты | Жёлтая скобка через [`TheoryCallout`](file:///f:/S_Chem_Portal/src/components/study/TheoryCallout.tsx) (`border-l-4 border-l-amber-500`) |
| 2D-схемы | Векторные SVG на примитивах `scientific/svg/*` либо универсальные `MoleculeViewer2D` / `StructuralFormula2D` (§4) |
| 2D-превью | Кнопка-плитка с живым SVG + оверлей `ZoomIn` → **статическая** модалка с `isModal={true}` |
| 3D | Заключительный раздел `section-molecules-3d`, [`MoleculeViewer3D`](file:///f:/S_Chem_Portal/src/components/interactive/MoleculeViewer3D.tsx), модели в [`molecules.ts`](file:///f:/S_Chem_Portal/src/data/molecules.ts) |
| Шрифты | `font-body` (Golos Text) — контент, `font-heading` (Outfit) — заголовки (глобально), `font-mono` — данные/коды; **`font-serif` запрещён** |
| Палитра | `slate` (каркас), `amber` (акцент/экзамен), `rose` (опасность), `emerald` (преимущество), `teal`/`sky`/`indigo` (категории) |
| Шапка | 4 блока: карточка темы, «Ключевая идея», «Подводные камни ФИПИ», `TopicNavGrid`; **без** бейджа экзамена и номеров заданий |
| Quick-nav | Ровно **3** тега с иконками `Atom` / `TestTube` / `Orbit` |
| Пиктограммы | Только канонический набор lucide-react (§6.8), значения иконок едины во всех темах |

---

## 1. Конвейер производства темы: три обязательные роли агентов

Каждая новая тема проходит через **три независимые роли**. Пропуск любой из них запрещён.

| Роль | Назначение | Когда подключается | Регламент |
|---|---|---|---|
| **Агент-разработчик** | Сборка данных, кода, 2D/3D, регистрации | Весь цикл | §2–§6, §9 |
| **Агент научной верификации** | Проверка КАЖДОГО факта, уравнения, константы и признака по российским и международным научным источникам | ДО начала разработки (черновик теории) и выборочно в процессе | §7 |
| **Агент постпроверки (Proofreading & Style QA)** | Орфография (строчные названия элементов), полнота KaTeX-рендеринга, единообразие шрифтов/цветов/компонентов, чистота кода | ПОСЛЕ реализации, перед коммитом | §8 |

**Правила конвейера**:
1. Вердикт агента верификации и агента постпроверки является **блокирующим**: тема не коммитится, пока остаются неисправленные замечания уровня `critical`.
2. Агенты верификации и постпроверки независимы от агента-разработчика: они не «доверяют» написанному, а перепроверяют его по источникам (§7) и по формальным критериям (§8) соответственно.
3. Итогом работы каждого агента является письменный отчёт (форматы в §7.5 и §8.6), прикладываемый к описанию коммита/PR.

---

## 2. Фундаментальные архитектурные принципы (DRY, SOLID, KISS, YAGNI)

Платформа рассчитана на сотни химических тем. Любое монолитное нагромождение кода или дублирование компонентов категорически запрещено.

### 2.1. Модульная структура темы (обязательный состав файлов)

Запрещено писать всю тему в одном файле-монолите. Каждая тема создаётся в папке `src/components/study/topics/<topicSlug>/` по образцу [`sulfurOxygen/`](file:///f:/S_Chem_Portal/src/components/study/topics/sulfurOxygen/):

| Файл | Зона ответственности | Ориентир по объёму |
|---|---|---|
| `<Topic>TheoryView.tsx` | Корневой компонент: массив `navItems` (id + label с номером), `useState` активной секции, `scrollToNav()` к `#nav-toc`, переход в практику через `useRouter().openStudyBlock(...)`, обёртка `div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base"` | ~50 строк |
| `<Topic>Header.tsx` | Шапка из 4 блоков (§6.4): карточка темы, ключевая идея, подводные камни ФИПИ, `TopicNavGrid` | ~130 строк |
| `<Topic>Sections.tsx` | Все разделы теории `#section-*`, таблицы, 2D-превью с модалкой, ОВР-карты, `MoleculeViewer3D` в финальном разделе, `PracticeBanner` | до ~900 строк |
| `<Topic>DarkBlocks.tsx` | Тёмные карточки промышленного химизма на `DarkBlockCard` (2–3 шт., распределённые по профильным секциям) | ~150 строк |
| `<Topic>FunFacts.tsx` | Интересные факты через централизованный `TheoryCallout` (≥ 2 шт.) | ~20 строк |
| `<Topic>2DRenders.tsx` | Векторные SVG-схемы темы на примитивах `scientific/svg/*` (§4.3) | ~270 строк |
| *Опционально:* `<Topic>Diagrams.tsx`, `<Topic>ReactionMatrix.tsx` | Изолированные tree-диаграммы (аллотропия, цепочки превращений) и сравнительные матрицы реакций | по необходимости |

Плюс обязательный **ре-экспорт** на уровень выше — `src/components/study/topics/<Topic>TheoryView.tsx`:

```tsx
export { SulfurOxygenTheoryView } from './sulfurOxygen/SulfurOxygenTheoryView';
export default SulfurOxygenTheoryView;
```

Именно этот ре-экспорт лениво импортируется страницей [`StudyTopicTheoryPage.tsx`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicTheoryPage.tsx).

**Требования к коду файлов**:
- Именованный экспорт компонента (`export const <Topic>TheoryView: React.FC = ...`) — страница теории резолвит именованный экспорт через `React.lazy(...).then(m => ({ default: m.<Topic>TheoryView }))`.
- Состояния темы (`activeSection`, `modalDiagram`) живут в корневом `TheoryView`/`Sections` и передаются пропсами; подкомпоненты — максимально чистые (презентационные).
- Данные (научные константы, массивы `specItems`, метаданные схем) объявляются типизированными константами вверху файла или выносятся в `src/data/` — не размазываются по JSX.

### 2.2. Регистрация темы в системе (обязательные точки интеграции)

1. [`src/data/studyBlocksData.ts`](file:///f:/S_Chem_Portal/src/data/studyBlocksData.ts) — запись темы в блоке **`elements-chemistry`**, подгруппа «Неметаллы (неMe)»: уникальный `id` формата `elem-nonme-<slug>`, код `ХЭ-NN` (кириллица «ХЭ» + порядковый номер), `targetExam`, `trainerIds` (существующие тренажёры из [`trainersRegistry.ts`](file:///f:/S_Chem_Portal/src/data/trainersRegistry.ts) либо новые тематические), `theoryLesson`.
2. [`StudyTopicTheoryPage.tsx`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicTheoryPage.tsx) — lazy-импорт именованного экспорта + условие рендера `topic.id === '<topic-id>'` ДО generic-рендера.
3. [`StudyTopicPracticePage.tsx`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicPracticePage.tsx) — практикум берёт `trainerIds` автоматически; при создании нового тренажёра зарегистрировать его в `trainersRegistry.ts` и в switch-диспетчеризации страницы.
4. [`src/services/periodicTable/elementStudyService.ts`](file:///f:/S_Chem_Portal/src/services/periodicTable/elementStudyService.ts) — маппинг химических элементов периодической таблицы на `topicId` новой темы.

> [!CAUTION]
> **Корректный blockId**: переход в практику выполняется как `openStudyBlock('elements-chemistry', '<topic-id>', 'practice')`. Блок обязан реально существовать в `studyBlocksData.ts`. Запрещено использовать несуществующие идентификаторы блоков (известный дефект темы C/Si — вызов с блоком `inorganic-chemistry`, которого нет в данных: кнопка практикума ведёт на «Тема не найдена»). В новых темах не повторять.

### 2.3. DRY (Don't Repeat Yourself) — единая система централизованных компонентов

**Запрещено** создавать дублирующие макеты страниц или «велосипеды» для типичных элементов. **Обязательно к использованию**:

| Компонент | Путь | Назначение | Ключевые пропсы |
|---|---|---|---|
| `StudyTopicTheoryPage` / `StudyTopicPracticePage` | `src/components/study/` | Каркас страниц теории/практики (не дублировать) | — |
| `SectionBadge` | [`src/components/study/SectionBadge.tsx`](file:///f:/S_Chem_Portal/src/components/study/SectionBadge.tsx) | Значок заголовка раздела (стрелка `ArrowRight` вместо цифр) | `icon?`, `className?`, `iconClassName?` |
| `ScrollToNavButton` | [`src/components/study/ScrollToNavButton.tsx`](file:///f:/S_Chem_Portal/src/components/study/ScrollToNavButton.tsx) | Кнопка возврата к содержанию (`#nav-toc`) | `onClick` |
| `TopicNavGrid` | [`src/components/study/TopicNavGrid.tsx`](file:///f:/S_Chem_Portal/src/components/study/TopicNavGrid.tsx) | Сетка «Содержание» с якорем `id="nav-toc"` | `navItems`, `activeSection`, `onSelectSection`, `title?` |
| `TopicQuickNavTags` | [`src/components/study/TopicQuickNavTags.tsx`](file:///f:/S_Chem_Portal/src/components/study/TopicQuickNavTags.tsx) | Быстрые теги шапки (клик — плавный скролл к секции) | `tags: QuickNavTag[]`, где `QuickNavTag = { targetId, label, icon: LucideIcon }` |
| `PracticeBanner` | [`src/components/study/PracticeBanner.tsx`](file:///f:/S_Chem_Portal/src/components/study/PracticeBanner.tsx) | Нижний призыв к практикуму | `topicCode` (`ХЭ-NN`), `onGoToPractice` |
| `TheoryCallout` | [`src/components/study/TheoryCallout.tsx`](file:///f:/S_Chem_Portal/src/components/study/TheoryCallout.tsx) | Жёлтая скобка: интересные факты, выноски | `title`, `children`, `icon?` (по умолчанию `Lightbulb`), `iconColor?` (по умолчанию `text-amber-600`), `className?` |
| `DarkBlockCard` | [`src/components/study/DarkBlockCard.tsx`](file:///f:/S_Chem_Portal/src/components/study/DarkBlockCard.tsx) | Тёмная карточка промышленного химизма | `title?`, `subtitle?` (`font-mono` справа), `icon?`, `children`, `className?` |
| `ChemFormula` | [`src/components/scientific/ChemFormula.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx) | Рендеринг формул/уравнений через KaTeX | `formula?` (сырая строка), `math?` (готовый LaTeX), `className?`, `displayMode?` |
| `ChemText` | [`src/components/scientific/ChemText.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemText.tsx) | Смешанный русский текст с вкраплениями формул | `text` (поддерживает инлайн `$LaTeX$`), `className?` |
| `TermTooltip` | [`src/components/scientific/TermTooltip.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/TermTooltip.tsx) | Интерактивные подсказки к терминам | `term`, `definition`, `className?`, `position?` |
| `MoleculeViewer3D` | [`src/components/interactive/MoleculeViewer3D.tsx`](file:///f:/S_Chem_Portal/src/components/interactive/MoleculeViewer3D.tsx) | 3D-просмотрщик (Three.js) | `moleculeIds?`, `initialSelectedId?`, `title?` |
| `MoleculeViewer2D` | [`src/components/scientific/MoleculeViewer2D.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/MoleculeViewer2D.tsx) | Универсальный 2D-просмотрщик (§4.1) | см. §4.1 |
| `StructuralFormula2D` | [`src/components/scientific/StructuralFormula2D.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/StructuralFormula2D.tsx) | Структурная формула по SMILES (§4.1) | см. §4.1 |
| `MolecularDiagram2D` | [`src/components/scientific/svg/MolecularDiagram2D.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/svg/MolecularDiagram2D.tsx) | Дата-драйвен генератор учебных структурных схем (§4.2): авто-обрезка связей у подписей, размерные линии длин, роли цветов | `atoms`, `bonds`, `lengths`, `notes`, `theme` |
| SVG-примитивы | `src/components/scientific/svg/` (`SvgDiagramWrapper`, `SvgAtom`, `SvgTextAtom`, `SvgFunctionalGroup`, `SvgBond`, `SvgBadge`, `SvgAngleArc`, `SvgLengthAnnotation`, `SvgCaption`) | Конструктор векторных схем (§4.3) | см. §4.3 |

> [!IMPORTANT]
> **Правило упреждающей централизации**: если при разработке новой темы требуется элемент UI, макет карточки, выноска или интерактивный блок, ранее не встречавшийся в существующих темах, **запрещено дублировать его локально в коде темы**. Такой компонент **сразу создаётся как централизованный модуль** в `src/components/study/` или `src/components/scientific/`, чтобы последующие темы переиспользовали его без копирования.

### 2.4. Чистота кода и современные принципы (SOLID, KISS, YAGNI)

1. **TypeScript без послаблений**: запрещены `any` и нетипизированные данные; union-типы для перечислений (см. `type: 'rhombic-sulfur' | 'ozone' | ...` в 2D-рендерах); интерфейсы пропсов объявляются рядом с компонентом.
2. **SRP**: UI-компоненты темы отвечают только за рендеринг; данные и научные константы — в типизированных константах/`src/data/`; навигационное состояние — в корневом `TheoryView`.
3. **Запрет мёртвого кода**: каждый экспорт темы должен иметь хотя бы один импорт. Устаревшие интерактивные «просмотрщики» не консервировать — эталон показывает удаление `*Interactive2DViewer` в пользу статической модалки (§4.2).
4. **OCP для расширяемости**: новый тип аллотропной схемы добавляется расширением union-типа `Allotrope2DType` и switch-делегирования в `MoleculeViewer2D`, а не копированием рендера.
5. **Линтер и сборка**: конфигурация [`/.oxlintrc.json`](file:///f:/S_Chem_Portal/.oxlintrc.json) (`react/rules-of-hooks`, `react/only-export-components` с `allowConstantExport`); сборка `npm run build` (= `tsc -b && vite build`) обязана проходить без ошибок на каждом этапе.
6. **KISS/YAGNI**: не вводить сторонние стейт-менеджеры, новые UI-библиотеки или зависимости без явной необходимости; анимации — только там, где они уже используются (framer-motion в существующих модулях).

---

## 3. Научный рендеринг формул, констант и терминов

Все химические формулы, уравнения реакций, электронные конфигурации, орбитали, кратные связи, ионы, термодинамические и кинетические константы **должны рендериться со 100% академической точностью** научными библиотеками проекта.

### 3.1. Компонент `ChemFormula` — единая точка входа

- **Запрещено**: выводить химические формулы открытым текстом в JSX (`HNO3`, `NH4+`, `C=C`, `C#N`, `H2SO4`).
- **Пропсы**: `formula` (сырая химическая строка — прогоняется через внутренний парсер → KaTeX), `math` (готовый KaTeX-LaTeX, передаётся как есть), `className` (цвет задаётся **только** Tailwind-классом `text-*`; пропсов `size`/`color` у компонента нет), `displayMode`.
- **Важно**: в проекте KaTeX используется напрямую; расширения `mhchem` **нет** — синтаксис `\ce{...}` не отрисуется и запрещён.

```tsx
<ChemFormula formula="4NH3 + 5O2 -(Pt/Rh)-> 4NO^ + 6H2O" />
<ChemFormula formula="2SO2 + O2 <=(V2O5, t=450-500°C)=> 2SO3 + Q" className="font-bold text-slate-900" />
<ChemFormula math="I_1 = 1314\,\text{кДж/моль}" />
```

### 3.2. Синтаксис, поддерживаемый парсером `ChemFormula`

| Конструкция | Пример входа | Результат рендера |
|---|---|---|
| Нижние индексы (авто) | `NH4`, `Fe(OH)2`, `Al2(SO4)3` | индексы через `_{}` |
| Ионы и заряды | `NH4+`, `OH-`, `NO3-`, `Cu2+`, `Fe3+`, `PO4(3-)`, `MnO4(-)`, `N(+5)`, `P(0)` | у многоатомных ионов индекс остаётся нижним, а знак — заряд ±1 (`NH4+` → NH₄⁺, `NO3-` → NO₃⁻); у одноатомных `цифра+знак` — заряд (`Cu2+` → Cu²⁺); многоразрядные заряды и степени окисления — в скобках (`PO4(3-)`, `N(+5)`, `P(0)`); форма без скобок `PO43-` **запрещена** |
| Электронные конфигурации | `1s^2`, `2p^6`, `3d^10`, `ns^2 np^2` | `\mathrm{ns}^{2}\mathrm{np}^{2}` — без искажения верхних индексов в нижние |
| Кратные связи | `C=C`, `C=O`, `O=C=O`, `C#N`, `:C#O:` | `=`, `#`/`≡` → `\equiv`, электронные точки сохраняются |
| Обычная стрелка | `->`, `→` | `\rightarrow` |
| Условия НАД стрелкой | `-t->`, `-(Pt/Rh)->`, `-(MnO2, t)->`, `-(t=800-900°C)->`, `-cat->` | `\xrightarrow{...}` |
| **Кириллические** условия НАД стрелкой | `-(электролиз)->`, `-(сплавление)->`, `-(прокаливание)->` | ⚠️ **не поддерживается парсером**: сырая кириллица в `\xrightarrow{...}` даёт красный KaTeX-error — такие уравнения пишутся через проп `math` с `\xrightarrow{\text{...}}` (правило 3 ниже) |
| Обратимая реакция | `<=(V2O5, t=450-500°C)=>`, `<=(конц)=>`, `<-(условие)->` | `\xrightleftharpoons{...}` |
| Равновесие без условий | `<=>`, `⇄` | `\rightleftharpoons` |
| Скобочные пометки | `HNO3(конц)`, `(разб)`, `(олеум)`, `(98.3%)`, `(газ)`, `(тв)`, `(водн)` | `\text{\,\scriptsize{(конц)}}`, в т.ч. приклеенные к формуле |
| Кристаллогидраты, двойные соли | `CuSO4*5H2O`, `Na2O·CaO·6SiO2` | `\cdot` |
| Газ / осадок | `CO2^`, `CO2↑`, `Sv`, `S↓` | `\uparrow` / `\downarrow` |
| ОВР-токены | `-5e-`, `+1e-`, `ē` | `\bar{e}` |
| Русские слова | `t, кат.`, раствор | `\text{...}` |
| Готовый LaTeX (pass-through) | строки, уже содержащие `\mathrm`, `\xrightarrow`, `\xrightleftharpoons` | передаются в KaTeX без повторного парсинга (используйте проп `math`) |

**Правила обработки условий реакций (традиции российской школы и ФИПИ)**:
- **Категорический запрет на разрыв стрелки**: температура ($t$, $t^\circ$, интервалы $t=450\text{--}500^\circ\text{C}$), катализаторы ($\mathrm{V_2O_5}$, $\mathrm{MnO_2}$, $\mathrm{Al_2O_3}$, $\mathrm{TiO_2}$, $\mathrm{H_2SO_4}$, `Pt/Rh`, `кат.`), квант света ($h\nu$) и прочие условия располагаются **строго НАД стрелкой**. Запрещено писать `+ t ->` или разрывать стрелку на фрагменты вида `<= условие =>` текстом.
- Автозамены катализаторов в условиях: `V2O5`, `MnO2`, `Al2O3`, `TiO2`, `H2SO4`, `Fe2O3`, `Pt/Rh`, `Pt`, `Fe`, `cat|кат|к` → корректный LaTeX (`\text{кат.}` и формулы с индексами).
- **Кириллические условия НАД стрелкой — только через проп `math`**: `formatConditionLatex` в [`ChemFormula.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx) оборачивает в `\text{...}` **только** автозамены из пункта выше; произвольные кириллические слова (`электролиз`, `сплавление`, `прокаливание`) попадают в `\xrightarrow{...}` сырыми символами в math-режиме KaTeX и рендерятся красным `katex-error`. Поэтому такие уравнения оформляются готовым LaTeX:

  ```tsx
  <ChemFormula math="2H_2O \xrightarrow{\text{электролиз}} 2H_2\uparrow + O_2\uparrow" />
  <ChemFormula math="2NaCl \xrightarrow{\text{электролиз}} 2Na + Cl_2\uparrow" />
  ```

  Централизованное решение — расширить `formatConditionLatex`, чтобы оборачивать в `\text{...}` любые кириллические токены условий; **до внесения этой правки в парсер вариант с `math` обязателен** и проверяется агентом постпроверки (§8.2, пункт 5).

### 3.3. Константы и физические величины — только через KaTeX

Числовые научные данные (энергии ионизации, энергии связей, pKa/pKb, стандартные потенциалы $E^\circ$, $K_{sp}$, длины связей в Å/пм, валентные углы, температуры фазовых переходов, плотности) рендерятся через проп `math`, например:

```tsx
<ChemFormula math="E^\circ(\mathrm{SO_4^{2-}/SO_2}) = +0{,}17\,\text{В}" />
<ChemFormula math="\Delta H^\circ_{298} = -98{,}3\,\text{кДж/моль}" />
```

Числовые значения в таблицах допускается набирать `font-mono`-текстом, но формульные выражения — только KaTeX.

### 3.4. Инлайн-текст с формулами — `ChemText`

Для абзацев, где формулы вплетены в русский текст:

```tsx
<ChemText text="При действии концентрированной H2SO4 на медь выделяется SO2, а не H2." />
<ChemText text="Энергия связи $E_{\mathrm{N \equiv N}} = 945$ кДж/моль." />
```

### 3.5. Запрет сырого LaTeX и «плоских» формул в JSX

- Запрещено оставлять в обычном текстовом JSX незакодированные строки вида `$\rightarrow$`, `$\rightleftharpoons$`, `\xrightarrow{...}` — используйте Юникод `→`/`⇄` либо `<ChemFormula .../>` / `<ChemText .../>`.
- Запрещено рендерить формулы самодельными `<sub>`/`<sup>`-конструкциями.

### 3.6. Интерактивные терминологические подсказки (`TermTooltip`)

- Разъясняются сложные, специальные и современные термины (*«Диспропорционирование»*, *«Пассивация»*, *«Катенация»*, *«Совместный гидролиз»*, *«Олеум»*).
- **Умеренность**: 1–2 подсказки на секцию (эталон «Кислород и Сера» — 12 использований на тему).

```tsx
<TermTooltip term="Пассивация" definition="Образование на поверхности металла защитной оксидной плёнки, предотвращающей дальнейшую реакцию при 20 °C." />
```

### 3.7. Орфография русского языка: строчные буквы для названий элементов

- **Строгое правило**: в русском языке названия химических элементов (*углерод, кремний, азот, фосфор, кислород, сера, водород, хлор, фтор, бром, иод, натрий, железо, медь* и т. д.) — нарицательные существительные.
- **Обязательное требование**: внутри предложений, в заголовках, подзаголовках, кнопках, вкладках, ячейках таблиц, подсказках, легендах схем и пояснениях названия элементов пишутся со **строчной буквы** (исключение — элемент является первым словом предложения/заголовка).
  - ❌ *Неправильно*: `5. Оксиды Углерода: CO`, `Химия Азота (N) и Фосфора (P)`, `Аллотропия Углерода и Кремния`, `Химические свойства Кремния (Si)`.
  - ✅ *Правильно*: `5. Оксиды углерода: CO (угарный газ) и CO₂ (углекислый газ)`, `Химия азота (N) и фосфора (P)`, `Аллотропия углерода и кремния`, `Химические свойства кремния (Si)`.
  - ✅ *С большой буквы — только первое слово*: `Углерод и кремний — элементы IV-A группы`, `Азот находится во 2-м периоде`.
- **Буквенные химические символы** в скобках сохраняют заглавное написание: `(C)`, `(Si)`, `(N)`, `(P)`.
- Проверка выполнения — обязанность агента постпроверки (§8.1).

### 3.8. Обязательная проверка формул В РЕНДЕРЕ (аудит)

Парсер `ChemFormula` — эвристический, поэтому **достоверность формулы определяется только по отрендеренному результату**, а не по исходной строке. Любая новая или изменённая формула/уравнение темы обязана пройти проверку рендера ДО коммита:

1. Запустить аудит: `node scripts/audit-formulas.mjs`. Скрипт собирает все строки `formula=` / `math=` / `caption=`, массивы `formulae:` и локальные константы (`formula:`, `shortFormula:`, `bond:`) из `src/components/study/topics/**` и `src/data/studyBlocksData.ts`, прогоняет их через реальный парсер + KaTeX и печатает два списка.
2. Секция `KATEX/PARSER ERRORS` обязана быть пустой (иначе в UI — красный `katex-error`).
3. Секцию `SUSPICIOUS ^{digit...}` просмотреть **вручную построчно**: допустимы только осмысленные верхние индексы — заряды одноатомных ионов (`Cu^{2+}`), степени окисления (`N^{+5}`), орбитали с главным квантовым числом (`3d^{5}`), порядки величин (`10^{23}`). Если цифра должна быть нижним индексом, а оказалась вверху (исторические дефекты: `NH4+` → NH⁴⁺, `S8` → S⁸, `P4` → P⁴) — это блокирующий дефект: правится строка данных либо (если дефект системный) парсер в [`ChemFormula.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx) с последующим повторным прогоном аудита.
4. Визуально убедиться в UI: индексы внизу, заряды и степени окисления вверху, условия над стрелкой, конфигурации с номерами уровней (`1s² 2s² 2p⁶`, а не `s² s² p⁶`).

Аудит также запускает агент постпроверки (§8.2, пункт 6); результат прикладывается к отчёту.

---

## 4. Стандарт 2D-рендеров, схем и модальных окон

Для аллотропных модификаций, молекулярных структур, кристаллических решёток и механизмов используются 2D-рендеры. **Модуль 2D-рендеринга готов к использованию** и развивается централизованно — новые темы обязаны строить графику на нём, а не на локальных самописных SVG.

### 4.1. Уровень 1 — универсальные компоненты (использовать в первую очередь)

**[`MoleculeViewer2D`](file:///f:/S_Chem_Portal/src/components/scientific/MoleculeViewer2D.tsx)** — интерактивный просмотрщик 2D-представлений:

```tsx
interface MoleculeViewer2DProps {
  molecule?: Molecule;          // свой объект молекулы (приоритет 1)
  moleculeId?: string;          // поиск в MOLECULES_DATA по id (приоритет 2)
  smiles?: string;              // свой SMILES → старт в режиме 'smiles'
  allotropeType?: Allotrope2DType; // старт в режиме 'allotrope'
  initialMode?: Render2DMode;   // default: 'structural'
  theme?: Molecule2DTheme;      // 'dark' | 'light' (default 'dark')
  showControls?: boolean;       // default: true
  isModal?: boolean;            // прокидывается в аллотропные рендеры
  title?: string; description?: string;
  width?: number; height?: number; // default 400×300 (viewBox проекции)
  onOpenModal?: () => void;     // добавляет кнопку «развернуть»
  className?: string;
}
// Render2DMode = 'skeletal' | 'structural' | 'lewis' | 'ball-and-stick' | 'allotrope' | 'smiles'
// Allotrope2DType = 'diamond' | 'graphite' | 'fullerene' | 'silicon'
//                 | 'rhombic-sulfur' | 'ozone' | 'so2' | 'h2so4'
```

Примеры:

```tsx
<MoleculeViewer2D moleculeId="h2so4" theme="dark" title="Структура серной кислоты" description="..." />
<MoleculeViewer2D allotropeType="graphite" isModal={modalOpen} />
<MoleculeViewer2D smiles="CC(=O)O" theme="light" />
```

**[`StructuralFormula2D`](file:///f:/S_Chem_Portal/src/components/scientific/StructuralFormula2D.tsx)** — единая точка входа для научных структурных схем по SMILES (раскладка выполняется библиотекой `smiles-drawer`):

```tsx
interface StructuralFormula2DProps {
  smiles: string;               // например "O=P(O)(O)O" для H3PO4
  theme?: Molecule2DTheme;      // default 'light' — классический учебный стиль на белом фоне
  width?: number; height?: number; // default 420×240
  caption?: string;             // подпись под схемой — рендерится через ChemFormula
  bondThickness?: number;       // default 1.6
  className?: string;
}
```

```tsx
<StructuralFormula2D smiles="O=P(O)(O)O" theme="light" caption="H3PO4" />
```

**Правило расширения**: новый тип аллотропной/опорной схемы добавляется расширением `Allotrope2DType` и делегирования в `MoleculeViewer2D` централизованно; копирование рендеров между темами запрещено.

### 4.2. Уровень 2 — тематические векторные схемы `<Topic>2DRenders.tsx`

Если универсальных компонентов недостаточно (кристаллическая решётка, цикл S₈, угловая геометрия с аннотациями), тема получает собственный файл `<Topic>2DRenders.tsx`, собранный **исключительно из централизованных примитивов** `src/components/scientific/svg/`:

| Примитив | Назначение | Ключевые пропсы |
|---|---|---|
| `SvgDiagramWrapper` | Готовый SVG-каркас: фон, сетка, заголовок (в модалке), правая панель спецификаций (в модалке), подпись (в компактном режиме) | `theme?`, `isModal?`, `title?`, `subtitle?`, `specTitle?`, `specItems?: {label, value, color?}[]`, `viewBox?` (авто: `0 0 300 200` / модалка `0 0 760 430`), `diagramTransform?`, `showGrid?` |
| `SvgAtom` | Атом-круг с символом | `element`, `cx`, `cy`, `r?`, `customFill?` (в т.ч. `url(#gradient)`), `customStroke?`, `customTextColor?`, `strokeWidth?`, `fontSize?`, `labelSuffix?`, `showLabel?` |
| `SvgTextAtom` | Атом-буква без круга (учебный стиль) | `label` (`"O"`, `"OH"`, `"N⁺"`), `cx`, `cy`, `fontSize?`, `customColor?` |
| `SvgFunctionalGroup` | Прямоугольный бейдж функциональной группы | `label`, `cx`, `cy`, `width?`, `height?` |
| `SvgBond` | Связь: `'single' \| 'double' \| 'triple' \| 'dashed' \| 'wedge' \| 'hashed-wedge' \| 'resonance'` | `x1, y1, x2, y2`, `type?`, `offset?`, `customColor?`, `strokeWidth?` |
| `SvgBadge` | Бейдж данных (`"152 pm"`, `"109°28'"`) | `label`, `cx`, `cy`, `width?`, `fontSize?`, `customColor/customBorder/customBg?` |
| `SvgAngleArc` | Дуга валентного угла с подписью | `cx`, `cy`, `startAngle`, `endAngle`, `radius?`, `label` |
| `SvgLengthAnnotation` | Тонкая размерная линия с открытыми стрелками и подписью сбоку | `x1, y1, x2, y2`, `label` |
| `SvgCaption` | Легенда схемы | `items: {color, label}[]`, `metaText?` |

**Дата-драйвен структурные схемы — `MolecularDiagram2D`** (эталон — фосфорные кислоты в [`PhosphorusAcids2DRenders.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/nitrogenPhosphorus/PhosphorusAcids2DRenders.tsx)):

Учебные структурные формулы с буквенными подписями (кислоты, молекулы с аннотациями длин связей) описываются **данными**, а не ручной отрисовкой. Билдер [`MolecularDiagram2D`](file:///f:/S_Chem_Portal/src/components/scientific/svg/MolecularDiagram2D.tsx) гарантирует эталонный вид «как в научных изданиях»:

- связи **автоматически обрезаются у границ подписей атомов** (линии не наползают на буквы);
- подписи атомов рендерятся с halo цвета фона (даже проходящая графика не пересекает текст);
- размерные линии длин связей раскладываются **параллельно связи вне каркаса**, стрелки — тонкие открытые V, подпись — сбоку от линии;
- дуги валентных углов — спек `angles` (`vertex`/`a`/`b` — id атомов): дуга между лучами, подпись на биссектрисе внутри угла; направляющие/плоскости — спек `lines`;
- стереосвязи (wedge / hashed-wedge) — узкие, академических пропорций;
- цвета задаются **ролями** `ink | oh | ph | muted | annotation` или токенами палитры через `color` (напр. `palette.atomS.fill`) — единый источник правды (`molecule2DTheme.ts`);
- `viewBox` **автоподбирается под габариты контента** (`autoFit` = true по умолчанию, поле `fitPadding`): схема заполняет отведённый блок без ручных полей и не выглядит мелкой. Фиксированный `viewBox` — только при `autoFit={false}`.

`MolecularDiagramBody` — тот же контент без собственного `<svg>`: встраивается в `SvgDiagramWrapper` для модалок с панелью спецификаций. Эталон тёмной темы генератора — [`SulfurOxygen2DRenders.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/sulfurOxygen/SulfurOxygen2DRenders.tsx) (схемы описаны данными `SO_DIAGRAMS`), светлой — фосфорные кислоты в N/P.

```tsx
<MolecularDiagram2D
  theme="light"
  centerX={210} centerY={128}
  atoms={[
    { id: 'P', label: 'P', x: 0, y: 0, role: 'ink', fontSize: 17, fontWeight: 'extrabold' },
    { id: 'OH', label: 'OH', x: 82, y: 28, role: 'oh', fontSize: 14 },
  ]}
  bonds={[{ from: 'P', to: 'OH', role: 'oh' }]}
  lengths={[{ from: 'P', to: 'OH', label: '157 pm', side: 1, distance: 14 }]}
/>
```

**Запрещено** в новых темах: вручную подгонять концы связей под подписи, рисовать стрелки длин поверх связей, задавать яркие hex-цвета напрямую (см. правило палитр ниже).

**Обязательный API тематического рендера** (по образцу [`SulfurOxygen2DRenders.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/sulfurOxygen/SulfurOxygen2DRenders.tsx)):

```tsx
export interface <Topic>2DProps {
  type: '<diagram-1>' | '<diagram-2>' | ...;  // union всех схем темы
  className?: string;
  isModal?: boolean; // default false — компактный режим; true — модалка с панелью спецификаций
}
// внутри — switch(type): по одному SvgDiagramWrapper на тип
```

**Требования к содержанию схем**:
- Тема схем по умолчанию `dark` (эталон); `light` — для «учебных» схем на белом фоне (образец — фосфорные кислоты в N/P).
- Панель `specItems` заполняется **только верифицированными** научными параметрами (валентные углы, длины связей в Å/пм, гибридизация, плотности) — см. протокол верификации §7. Заголовок панели — справочный, без рекламных эпитетов: «Молекулярные параметры:» / «Кристаллографические данные:» / «Параметры:» (запрещено: «Научно-верифицированные …», «Эталонные …» и т.п.). Длинные значения панель переносит автоматически.
- **Модалка укрупняет схему централизованно** (`SvgDiagramWrapper` применяет `scale(1.45)` к `diagramTransform`, проп `modalScale`): в темах НЕ нужно вручную увеличивать координаты под модальный режим.
- Цвета элементов — из CPK-палитры [`molecule2DRenderer.ts`](file:///f:/S_Chem_Portal/src/utils/molecule2DRenderer.ts) (`getCPK`) / тем [`molecule2DTheme.ts`](file:///f:/S_Chem_Portal/src/utils/molecule2DTheme.ts) (`getThemePalette`); локальная тематическая палитра допускается (образец — константа `C` в S/O), но в границах дизайн-системы (§6.2).
- **Правило академической палитры**: обе темы (`LIGHT_PALETTE` / `DARK_PALETTE`) и любые локальные палитры используют **приглушённые, десатурированные тона** в духе научных публикаций (IUPAC/ACS): чернильный каркас, мягкие элементные цвета, без неоновых акцентов. Запрещены яркие hex напрямую в схемах: `#1d4ed8`, `#dc2626`, `#fbbf24`, `#f59e0b`, `#38bdf8`, `#7c3aed` и т.п. — вместо них роли `MolecularDiagram2D` или токены палитры (`ohGroup`, `phBond`, `lengthArrow`, `highlight`).

### 4.3. Уровень 3 — растровые изображения (только там, где вектор невозможен)

> [!CAUTION]
> **Импорт изображений — только через ES-модули.** Запрещено использовать абсолютные строковые пути вида `src="/images/allotropes/diamond.jpg"` — это даёт **404** на статических хостингах (GitHub Pages, Vercel, Netlify), поскольку проект собирается с относительным базовым путём (`base: './'` в [`vite.config.ts`](file:///f:/S_Chem_Portal/vite.config.ts)).
>
> Все локальные изображения располагаются в `src/assets/images/` и импортируются в TSX:
> ```tsx
> import diamondImg from '../../../../assets/images/allotropes/diamond.jpg';
> <img src={diamondImg} alt="2D структура алмаза" className="max-h-full max-w-full object-contain" />
> ```

### 4.4. 2D-превью в секциях и модальное окно (финальный стандарт)

- **Категорически запрещено**: `object-cover` с фиксированным `aspect-ratio` для научных схем (обрезание текста и граней).
- **Стандарт превью** (эталон S/O): квадратная кнопка-плитка с **живым SVG-рендером** слева от текста, оверлей `ZoomIn` при наведении и угловая метка «2D-схема»:

```tsx
<button onClick={() => setModalDiagram({ type: 'so2', title: 'Молекула SO₂ ...' })}
  className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
  title="Нажмите для открытия справочной 2D-схемы">
  <SulfurOxygen2DRender type="so2" />
  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
  </div>
  <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">2D-схема</div>
</button>
```

- **Статическая модалка** (без внешних библиотек и без отдельных интерактивных «viewer»-компонентов — они удалены из эталона как избыточные):
  - Состояние: `useState<{ type: <union>; title: string } | null>(null)`.
  - Оверлей: `fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6`.
  - Панель: `bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-5 sm:p-6 space-y-4 shadow-2xl relative`; шапка с полным русским названием схемы и кнопкой `X` (`p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white`).
  - Область рендера: `flex items-center justify-center bg-slate-950 rounded-xl p-4 border border-slate-800 min-h-[320px]` с `<Topic2DRender type={modalDiagram.type} isModal={true} />`.
  - Кнопка «Закрыть»: `px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl`.

### 4.5. Язык и терминология схем (российская научная школа)

- **100% русский язык**: любая схема, 2D-рендер, SVG-чертёж, легенда, подписи связей и заголовки — строго на русском языке.
- **Запрет англицизмов на графике**: *«GRAPHITE CRYSTAL STRUCTURE»*, *«Graphene Layer»*, *«INTERLAYER SPACING»*, *«van der Waals WEAK BONDS»*, *«FULLERENE C60 BUCKYBALL»*, *«CRYSTALLINE SILICON»* — запрещены.
- **Эталонные русские формулировки**:
  - `Graphene Layer` → `Графеновый слой (плоские сетки)`
  - `Interlayer Spacing (3.35 Å)` → `Межслойное расстояние 3.35 Å`
  - `van der Waals Weak Bonds` → `Слабые связи Ван-дер-Ваальса (d = 3.35 Å)`
  - `Delocalized π-electrons` → `Делокализованные π-электроны (p-орбитали)`
  - `Buckyball / Truncated Icosahedron` → `Усечённый икосаэдр (бакибол)`
  - `Diamond Cubic Lattice Unit Cell` → `Элементарная кубическая ячейка типа алмаза`
  - `Silicon Atom (Si)` → `Атом кремния (Si)`

---

## 5. Регламент 3D-моделирования (Three.js / MoleculeViewer3D)

3D-визуализация молекул — ключевой интерактивный элемент платформы.

### 5.1. Создание и регистрация 3D-моделей

- Каждая новая тема содержит комплект тематических 3D-молекул (эталон: 8–9 моделей).
- Модели регистрируются в [`src/data/molecules.ts`](file:///f:/S_Chem_Portal/src/data/molecules.ts) строго по интерфейсу `Molecule` (`src/types/index.ts`):

```ts
interface Molecule {
  id: string;            // нижний регистр: 'so2', 'h2so4', 'sic'
  name: string;          // 'Сернистый газ (SO₂)'
  formula: string;       // Юникод: 'SO₂'
  iupacName: string;
  category: 'Органическая' | 'Неорганическая' | 'Биохимия' | 'Простая';
  description: string;
  atoms: AtomData[];     // { element, x, y, z, hybridization?: 'sp'|'sp2'|'sp3' }
  bonds: BondData[];     // { source, target, order: 1 | 2 | 3 }
  funFact: string;
}
```

- **Отдельного поля «2D-описание» не существует**: проекции `MoleculeViewer2D` строятся из тех же массивов `atoms`/`bonds` (координаты x/y, z игнорируется). Корректные 3D-координаты автоматически дают корректный 2D-рендер.

### 5.2. КРИТИЧЕСКОЕ ОГРАНИЧЕНИЕ: изоляция от главной страницы

> [!CAUTION]
> Тематические 3D-модели новых соединений НЕ ДОЛЖНЫ добавляться в массив `DEFAULT_HOME_MOLECULES` в [`MoleculeViewer3D.tsx`](file:///f:/S_Chem_Portal/src/components/interactive/MoleculeViewer3D.tsx). На главной странице портала отображаются только базовые демо-молекулы.

### 5.3. Размещение 3D-просмотрщика в теме

- **Строго финальный раздел** (`section-molecules-3d`), непосредственно перед `PracticeBanner`:

```tsx
<MoleculeViewer3D
  moleculeIds={['o2', 'o3', 'h2o', 'h2o2', 'h2s', 'so2', 'so3', 'h2so4', 's8']}
  initialSelectedId="so2"
  title="Интерактивные 3D-модели соединений серы и кислорода"
/>
```

---

## 6. Единообразие визуального стиля и дизайн-системы

Дизайн — академический, современный, динамичный, единый для всех тем. Проект использует **Tailwind CSS v4** (классы `shadow-xs`, `shadow-2xs` валидны).

### 6.1. Типографика и шрифты

Шрифты подключены в [`src/index.css`](file:///f:/S_Chem_Portal/src/index.css) и [`tailwind.config.js`](file:///f:/S_Chem_Portal/tailwind.config.js):

| Класс | Гарнитура | Применение в теме |
|---|---|---|
| `font-body` | Golos Text (fallback Manrope) | **Весь контент темы**; задаётся на корневом контейнере `TheoryView` |
| `font-heading` | Outfit | Заголовки `h1`–`h6` — применяется глобальным CSS автоматически, явно указывать не нужно |
| `font-mono` | системный моноширинный | Код темы (`ХЭ-06`), номера-чипы подводных камней, числовые данные таблиц (углы, энергии, pKa), бейджи, субтайтлы `DarkBlockCard`, `<code>`, метка «2D-схема» |
| ~~`font-serif`~~ | — | **Запрещён** — в эталонных темах не используется |

- Базовый размер контента: `text-sm sm:text-base`, `leading-relaxed` (корневой контейнер); внутри блоков `text-xs sm:text-sm`.

### 6.2. Цветовая палитра (роли цветов)

| Палитра | Роль в теме | Типовое применение |
|---|---|---|
| `slate` | Нейтральный каркас | Белые карточки `bg-white border-slate-200`, фон `bg-slate-50`, тёмные поверхности `bg-slate-900/950`, текст `text-slate-900/700/600/500` |
| `amber` | Акцент экзамена и «химического золота» | Жёлтая скобка `border-l-amber-500`, `AlertTriangle text-amber-600`, CTA `bg-amber-500`, уравнения в dark-блоках `text-amber-300`, «янтарные» таблицы `border-amber-200/80 bg-amber-50/40` |
| `rose` | Опасность, сила кислоты, запреты | `text-rose-800` в таблицах, бейджи `bg-rose-100 text-rose-900`, hover ветвей `hover:border-rose-400` |
| `emerald` | Преимущество, прочность, активность | `text-emerald-800`, бейджи `bg-emerald-100 text-emerald-900` |
| `teal` | Восстановители, катализаторы | `text-teal-900`, `text-teal-300` в dark-блоках |
| `sky` | Кислород/озон, газовые продукты | Бейджи `bg-sky-100 text-sky-900`, SVG-заполнение кислорода `#38bdf8` |
| `indigo` / `purple` | Дополнительные категории (4-я ветвь ОВР-карты, гидролизующиеся соли) | `bg-indigo-100 text-indigo-900`, `text-purple-800` |

Запрещено вводить цвета вне этих палитр без обоснования в рамках дизайн-системы.

### 6.3. Каркас раздела (секции)

```tsx
<section id="section-<slug>" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
  <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
    <div className="flex items-center gap-3">
      <SectionBadge />
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Сравнительный анализ ...</h2>
        <p className="text-xs sm:text-sm text-slate-500">Подзаголовок раздела</p>
      </div>
    </div>
    <ScrollToNavButton onClick={scrollToNav} />
  </div>
  {/* контент */}
</section>
```

- Якоря секций — в едином формате `section-<slug>` (эталон S/O); совпадают с `navItems` и `targetId` quick-nav тегов.
- `SectionBadge` используется без пропсов (стрелка `ArrowRight` по умолчанию); фильтры в заголовках разделов не добавляются.
- Внутренние подблоки: серые карточки `p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3` с `h4 font-bold text-slate-900 text-sm flex items-center gap-2` + иконка; вложенные плашки `p-3 bg-white rounded-lg border border-slate-200`.
- Списки реакций — абзацы с маркером «• » и `<br />`, уравнения через `<ChemFormula className="font-bold text-slate-900" />`.

### 6.4. Шапка темы — 4 блока (финальный стандарт)

По образцу [`SulfurOxygenHeader.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/sulfurOxygen/SulfurOxygenHeader.tsx):

1. **Карточка темы** `bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4`:
   - Мета-строка: код темы `ХЭ-NN` в светлом чипе `px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold`, через `<span>•</span>` — «Химия элементов» и группа («VI-A Группа (Подгруппа кислорода)»).
   - H1: `text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3` с иконкой `FlaskConical w-8 h-8 text-slate-800 shrink-0`.
   - Описание: `text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl`.
   - Нижняя панель (`pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4`): слева `TopicQuickNavTags`, справа тёмная кнопка практикума `px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-2` с `Zap w-4 h-4 text-amber-400 fill-amber-400` и `ArrowRight`.
2. **Ключевая идея темы** (нейтральная серая плашка): `p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-start gap-3.5 shadow-xs`; иконка `Lightbulb` в квадрате `p-2.5 rounded-lg bg-slate-200 text-slate-800 shrink-0`; заголовок `font-bold text-slate-900` «Ключевая идея темы:»; текст `text-slate-600 leading-relaxed font-normal`.
3. **Подводные камни ФИПИ** (жёлтая скобка с нумерованным списком): `p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-3 shadow-xs`; заголовок с `AlertTriangle w-5 h-5 text-amber-600` «Важные экзаменационные „подводные камни“ и тонкости:», отделён `border-b border-slate-200/60 pb-2`; 4 пункта `<li className="flex items-start gap-2">` с номером-чипом `px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0`.
4. **Содержание**: `<TopicNavGrid navItems={navItems} activeSection={activeSection} onSelectSection={setActiveSection} />` (контейнер `id="nav-toc"`).

**Запрещено в шапке нового стандарта** (признаки устаревшего стиля):
- бейдж целевого экзамена и строки вида «Академический конспект по программе 20XX года»;
- **любые упоминания номеров заданий ЕГЭ/ОГЭ** («Задания 8, 9, 29, 31, 33») — номера заданий допустимы только в данных практикума;
- янтарная плашка ключевой идеи `bg-amber-50`, розовые камни `bg-rose-50` с emoji ⚠️, `rounded-3xl p-8 sm:p-10`.

### 6.5. Интересные факты — «жёлтая скобка»

Реализуются **только** через централизованный `TheoryCallout` (файл `<Topic>FunFacts.tsx`):

```tsx
<div className="space-y-4 my-6">
  <TheoryCallout title="Интересный факт: Вулканизация каучука серными мостиками">...</TheoryCallout>
  <TheoryCallout title="Интересный факт: Парамагнетизм жидкого кислорода">...</TheoryCallout>
</div>
```

Классы скобки (внутри компонента): `p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2 shadow-2xs`; иконка `Lightbulb text-amber-600`. Внутри допускаются `<code className="font-mono text-amber-900 font-bold">` и `ChemFormula`. Норма: ≥ 2 факта на тему.

### 6.6. Тёмные блоки промышленного химизма

Каркас — `DarkBlockCard` (файл `<Topic>DarkBlocks.tsx`), внутренние стадии:

- Стадия: `p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2`; название стадии `font-bold text-amber-400 block text-xs sm:text-sm`.
- Уравнение в плашке: `text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm` (альтернативный цвет катализаторов/суммарных уравнений — `text-teal-300`).
- Пояснения: `text-slate-300` / `text-slate-400`; нумерованные шаги — чип `px-1.5 py-0.5 rounded bg-slate-700 text-amber-300 text-xs font-mono font-bold shrink-0`.
- `subtitle` блока — `font-mono` категория («Промышленный химизм • Тройной каталитический цикл»). Норма: 2–3 блока, распределённых по профильным секциям.

### 6.7. Таблицы

- **Сравнительная «янтарная»**: контейнер `overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs`; `table className="w-full text-left text-xs sm:text-sm"`; `thead` — `bg-slate-800 text-white text-xs font-semibold tracking-wider`, `th p-3.5`; `tbody` — `divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30`, строки `hover:bg-amber-100/50 transition-colors`, ячейки `p-3.5`.
- **Таблица данных** (например, свойства гидридов): контейнер `overflow-x-auto border border-slate-200 rounded-xl`; `thead` тот же тёмный; `tbody` — `divide-y divide-slate-200 bg-white`, строки `hover:bg-slate-50/80`.
- Числовые значения — `font-mono`; акценты `text-rose-800` (опасно/сильная кислота) и `text-emerald-800` (преимущество); сноска под таблицей `text-xs text-slate-500 italic pt-0.5`.

### 6.8. Пиктограммы (lucide-react) — канонический набор

Иконки несут **единые смысловые роли во всех темах**; произвольные иконки «под настроение» запрещены:

| Иконка | Роль |
|---|---|
| `FlaskConical` | Иконка заголовка H1 темы |
| `Zap` + `ArrowRight` | Кнопка практикума в шапке и `PracticeBanner` |
| `Lightbulb` | Ключевая идея, интересные факты (дефолт `TheoryCallout`) |
| `AlertTriangle` | Подводные камни ФИПИ, предупреждения |
| `Atom` / `TestTube` / `Orbit` | Ровно 3 quick-nav тега шапки («три кита» темы) |
| `BookOpen` | Содержание (`TopicNavGrid`) |
| `ZoomIn` / `X` | 2D-превью и модальные окна |
| `Factory` | Промышленный химизм, `DarkBlockCard` |
| `ShieldAlert` | Категоричные экзаменные запреты («Водород НЕ выделяется!») |
| `CheckCircle2` | Маркированные списки преимуществ/признаков |
| `Flame` | Реакции горения |
| `Layers`, `Gem`, `Sparkles` | Аллотропия, кристаллические структуры, схемы-диаграммы |

Quick-nav теги — ровно **три** (`QuickNavTag = { targetId, label, icon }`), ведут на концептуально главные секции (образец: аллотропия → `Atom`, ключевой класс соединений → `TestTube`, 3D-модели → `Orbit`).

### 6.9. Объём теории (ориентиры эталона «Кислород и Сера»)

| Показатель | Эталонное значение |
|---|---|
| Разделов | 8–9 (заключительный — 3D-модели) |
| `ChemFormula` | ~100–135 употреблений (включая `math=` для величин) |
| `TermTooltip` | ~10–12 (1–2 на секцию) |
| Подводных камней в шапке | 4 |
| Интересных фактов | ≥ 2 |
| Dark-блоков | 2–3 |
| Таблиц | ≥ 2 (в сравнительном разделе) |
| 2D-схем (типов рендера) | ≥ 4 |
| 3D-молекул в просмотрщике | 8–9 |

Новая тема не должна быть скуднее эталона по наполнению; «тонкие» темы возвращаются агентом постпроверки на доработку.

---

## 7. Агент научной верификации (Scientific Verification Agent)

**Образовательные ошибки, устаревшие представления и химические галлюцинации недопустимы.** Каждая новая тема до попадания в UI проходит независимую верификацию отдельным агентом.

### 7.1. Мандат агента

1. Агент получает черновик теории темы (конспект, уравнения, таблицы, константы, `specItems` схем, интересные факты, задачи практикума).
2. Проверяет **каждое** фактическое утверждение по источникам §7.3 — российским и международным.
3. Возвращает верификационный отчёт (§7.5) и список исправлений; исправляет черновик либо возвращает его разработчику.
4. Повторный прогон после исправлений обязателен до статуса «0 критичных расхождений».

### 7.2. Что подлежит обязательной сверке

- Уравнения реакций: стехиометрия, продукты, условия (катализатор, температурный интервал), обратимость, признаки (газ, осадок, окраска).
- Качественные реакции и их признаки; исключения («водород с конц. серной кислотой не выделяется», пассивация Fe/Cr/Al).
- Физические и химические константы: энергии связей и ионизации, pKa/pKb, $E^\circ$, $K_{sp}$, температуры плавления/кипения/фазовых переходов, плотности, длины связей и валентные углы (в т.ч. в `specItems` 2D-схем).
- Научные факты в `TheoryCallout` и `funFact` 3D-молекул.
- Формулировки терминов в `TermTooltip` (соответствие IUPAC Gold Book и российской школе).
- Задачи практикума (корректность эталонов ответов и критериев).

### 7.3. Авторитетные источники

#### 1. Российские академические учебники и монографии
- **Некрасов Б.В.** — *«Основы общей химии»* (в 2-х томах).
- **Третьяков Ю.Д. (ред.)** — *«Неорганическая химия»* (в 3-х томах, химфак МГУ).
- **Реутов О.А., Курц А.Л., Бутина К.П.** — *«Органическая химия»* (в 4-х томах, МГУ).
- **Степенин В.Д., Пашкова Л.И.** — *«Курс неорганической химии»*.
- **Пилипенко А.Т., Сухан В.В.** — *«Справочник по химии»*.
- **Потапов В.М., Хомченко Г.П.** — *«Химия»* (справочное пособие для поступающих в ВУЗы).

#### 2. Официальные материалы ФИПИ и олимпиадные базы
- Кодификатор и спецификация ЕГЭ/ОГЭ по химии текущего года.
- Официальный банк заданий ФИПИ (критерии оценивания).
- Материалы ДВИ МГУ по химии и задания Всероссийской олимпиады школьников (ВсОШ).

#### 3. Российские научные интернет-источники (обязательная часть проверки)
- **ФИПИ** — [fipi.ru](https://fipi.ru/) (открытый банк заданий, кодификаторы, методические материалы).
- **Химический факультет МГУ** — [chem.msu.su](http://www.chem.msu.su/) (учебно-методические материалы, электронные ресурсы факультета).
- **Химическая энциклопедия** — [xumuk.ru](http://www.xumuk.ru/) (статьи по элементам, соединениям, процессам).
- **chem21.info** — энциклопедический справочник по химии и промышленным процессам.
- Материалы ВсОШ — [vos.olimpiada.ru](https://vos.olimpiada.ru/) (разборы заданий и эталоны).

#### 4. Международные базы и интернет-источники (обязательная часть проверки)
- **IUPAC Gold Book** — [goldbook.iupac.org](https://goldbook.iupac.org/) (номенклатура, терминология, определения).
- **PubChem** — [pubchem.ncbi.nlm.nih.gov](https://pubchem.ncbi.nlm.nih.gov/) (структуры, CAS-номера, $pK_a$, растворимость).
- **NIST Chemistry WebBook** — [webbook.nist.gov](https://webbook.nist.gov/) (термохимия, спектры).
- **ChEBI** — [ebi.ac.uk/chebi](https://www.ebi.ac.uk/chebi/) (идентификация и свойства соединений).
- **Периодическая таблица RSC** — [rsc.org/periodic-table](https://www.rsc.org/periodic-table/) (свойства элементов).
- **CRC Handbook of Chemistry and Physics** — точные $\Delta H^\circ, \Delta S^\circ, \Delta G^\circ$, $E^\circ$, $K_{sp}$.
- **Inorganic Syntheses** (Wiley) — препаративные методики синтеза.
- **Greenwood N.N., Earnshaw A.** — *«Chemistry of the Elements»*; **Cotton F.A., Wilkinson G.** — *«Advanced Inorganic Chemistry»*.

#### 5. Международные рецензируемые журналы
- **ACS** (*JACS*, *Inorganic Chemistry*, *J. Org. Chem.*, *Chemical Reviews*), **RSC** (*Chemical Science*, *Dalton Transactions*), **Nature** (*Nature Chemistry*, *Nature Materials*, *Nature Reviews Chemistry*), **Elsevier/ScienceDirect** (*Tetrahedron*, *Polyhedron*, *Inorganica Chimica Acta*), **OpenAlex & Europe PMC**, препринты **arXiv / bioRxiv**.

> Примечание: Википедия (RU/EN) допускается только как первичная наводка; каждое взятое из неё утверждение подтверждается источником из списков выше.

### 7.4. Правила верификации

1. **Минимум два независимых источника** на каждое фактическое утверждение: не менее одного российского и не менее одного международного.
2. **Количественные константы** сверяются до точности, указанной в источнике; при расхождении приоритет: CRC Handbook → NIST → PubChem → учебники.
3. Уравнения, отсутствующие в кодификаторе/учебниках или идущие вразрез с ним, помечаются и исключаются.
4. Утверждения без подтверждающего источника (потенциальные галлюцинации) удаляются либо заменяются верифицированными.

### 7.5. Формат верификационного отчёта

| № | Утверждение / уравнение / константа | Значение в теме | Источник 1 (RU) | Источник 2 (INT) | Статус | Комментарий |
|---|---|---|---|---|---|---|
| 1 | Угол S–S–S в S₈ | 107.9° | xumuk.ru | PubChem/CRC | ✅ | — |
| 2 | ... | ... | ... | ... | ⚠️/❌ | требуемое исправление |

Статусы: ✅ подтверждено; ⚠️ требует уточнения формулировки; ❌ не подтверждено/ошибочно (блокирующий).

---

## 8. Агент постпроверки (Proofreading & Style QA Agent)

Независимый агент, запускаемый **после реализации темы и перед коммитом**. Его вердикт блокирующий: наличие неисправленных замечаний уровня `critical` запрещает коммит.

### 8.1. Проверка орфографии и языка

1. **Строчные названия элементов** (§3.7): поиск заглавных написаний (`Углерод|Кремний|Азот|Фосфор|Кислород|Сера|Водород|...`) внутри предложений — в тексте, заголовках, кнопках, вкладках, таблицах, `title`/`alt`, легендах схем. Допустимо только первое слово предложения/заголовка.
2. **100% русский язык графики** (§4.5): ни одной английской надписи в SVG-схемах, подписях, легендах, `specItems`.
3. **Запрет номеров заданий**: в theory-компонентах темы не должно быть упоминаний «Задания 8/9/29/31/33», «№ 29» и т. п.
4. Единообразие терминологии российской академической школы: названия классов соединений, процессов и номенклатурные формы — в формулировках кодификатора ФИПИ и учебников из §7.3 (без смешения школьной и «переводной» терминологии в пределах одной темы).

### 8.2. Проверка научного рендеринга (KaTeX)

1. **Нет «сырых» формул в JSX**: поиск по файлам темы шаблонов вида `[A-Z][a-z]?\d` (`H2SO4`, `CO2`, `NH3`) вне `ChemFormula`/`ChemText`, стрелок `->` в обычном тексте, инлайн-LaTeX `$...$` вне `ChemText`, а также `\ce{` (mhchem не установлен — не отрисуется).
2. Все уравнения отрендерены через `ChemFormula`; условия реакций — над стрелкой (`-(...)->`, `<=(...)=>`), без разрыва стрелки.
3. Константы и физические величины — через проп `math` (§3.3).
4. В собранной странице нет артефактов падения KaTeX (красный текст ошибки `katex-error`).
5. **Кириллические условия над стрелкой оформлены через `math`** (§3.2, правило 3): grep по файлам темы на `-(электролиз)->`, `-(сплав)->`, `-(прокал)->` и любые `-\([а-яё...]+\)->` — совпадений быть не должно; такие уравнения обязаны использовать `\xrightarrow{\text{...}}` в пропе `math`, иначе KaTeX отрендерит красный `katex-error`.
6. **Аудит рендера формул** (§3.8): `node scripts/audit-formulas.mjs` — секция `KATEX/PARSER ERRORS` пуста; секция `SUSPICIOUS ^{digit...}` просмотрена построчно: индексы многоатомных ионов внизу (`NH₄⁺`, `NO₃⁻`, `SO₄²⁻`), заряды одноатомных вверху (`Cu²⁺`), орбитали с главным квантовым числом (`3d⁵`). Несоответствие — уровень `critical`.

### 8.3. Проверка единообразия стиля

1. **Шрифты**: корневой контейнер темы — `font-body text-slate-800 leading-relaxed text-sm sm:text-base`; `font-serif` отсутствует; числовые данные и коды — `font-mono`.
2. **Палитра**: только роли из §6.2 (slate/amber/rose/emerald/teal/sky/indigo/purple); без произвольных hex/Tailwind-цветов вне SVG-палитр 2D-модуля.
3. **Каркас секций** (§6.3): у каждой секции `SectionBadge` + заголовок + `ScrollToNavButton`; якоря `section-*`; `scroll-mt-6`.
4. **Компоненты-дубликаты отсутствуют**: факты — `TheoryCallout`, тёмные блоки — `DarkBlockCard`, шапка — 4 блока (§6.4), модалка — статическая (§4.4), quick-nav — ровно 3 тега.
5. Бейдж экзамена и номера заданий в шапке отсутствуют (§6.4).

### 8.4. Проверка кода и интеграции

1. `npm run build` (включает `tsc -b`) и `npm run lint` проходят без ошибок.
2. Нет мёртвого кода: каждый экспорт темы импортируется; нет неиспользуемых компонентов-«просмотрщиков».
3. Регистрация полная и корректная: `studyBlocksData.ts` (существующий блок `elements-chemistry`, уникальный `id`, код `ХЭ-NN`), lazy-импорт и условие в `StudyTopicTheoryPage.tsx`, маппинг в `elementStudyService.ts`, `trainerIds` существуют в реестре тренажёров.
4. Изображения — только ES-импорты из `src/assets/` (§4.3).
5. 3D-модели зарегистрированы в `molecules.ts` и НЕ добавлены в `DEFAULT_HOME_MOLECULES`.

### 8.5. Чек-лист типовых grep-проверок агента

```
# строчность элементов в тексте темы: ищем ЗАГЛАВНЫЕ написания в середине строки (после строчной буквы/пробела) —
# каждое вхождение проверить вручную: допустимо только первое слово предложения/заголовка
grep -rnE "[а-яё][а-яё ,.\-]*(Углерод|Кремний|Азот|Фосфор|Кислород|Сера|Водород|Хлор|Фтор|Бром|Иод|Натрий|Железо|Медь|Цинк|Алюминий|Кальций|Магний|Барий|Свинец|Ртуть|Серебро)" --include="*.tsx" <папка темы>

# сырые формулы вне ChemFormula
grep -rnE "\b[A-Z][a-z]?\d" --include="*.tsx" <папка темы>

# запрещённый mhchem и сырой LaTeX
grep -rn "\\\\ce{" --include="*.tsx" src/
grep -rnE '\$\\(rightarrow|rightleftharpoons|xrightarrow)' --include="*.tsx" src/

# номера заданий в теории
grep -rniE "задани[яе]\s*(№\s*)?\d|№\s*(29|30|31|32|33)" --include="*.tsx" src/components/study/topics/

# мёртвые экспорты
grep -rn "export const" <папка темы> && grep -rn "<ИмяЭкспорта>" src/   # каждый экспорт имеет импорт

# font-serif и object-cover
grep -rn "font-serif\|object-cover" src/components/study/topics/
```

### 8.6. Формат отчёта агента постпроверки

| № | Файл:строка | Категория (орфография / рендеринг / стиль / код) | Уровень (critical / minor) | Суть замечания | Требуемое исправление |
|---|---|---|---|---|---|

Тема считается готовой, когда в отчёте **0 замечаний уровня critical** и все minor исправлены либо мотивированно отклонены.

---

## 9. Пошаговый чек-лист генерации новой темы (конвейер)

```
[Шаг 0] Паспорт темы
   └─ slug, id (elem-nonme-*), код ХЭ-NN, список веществ, план разделов (8–9),
      quick-nav тройка, план 2D-схем (≥ 4) и 3D-молекул (8–9).

[Шаг 1] Черновик теории + АГЕНТ НАУЧНОЙ ВЕРИФИКАЦИИ (§7)
   └─ Изучение темы по Некрасову, Третьякову, ФИПИ, xumuk.ru, chem.msu.su,
      IUPAC Gold Book, PubChem, NIST WebBook, CRC Handbook.
   └─ Каждое утверждение — ≥ 2 источника (RU + международный).
   └─ Верификационный отчёт: 0 блокирующих расхождений.

[Шаг 2] Регистрация 3D-моделей в src/data/molecules.ts
   └─ Интерфейс Molecule (atoms с x/y/z и гибридизацией, bonds с order).
   └─ НЕ добавлять в DEFAULT_HOME_MOLECULES!

[Шаг 3] Практикум
   └─ Либо переиспользование существующих тренажёров через trainerIds,
      либо новые данные в src/data/<topicSlug>Tasks.ts по типам src/types/trainer.ts
      + регистрация в trainersRegistry.ts.

[Шаг 4] 2D-рендеры и схемы
   └─ <Topic>2DRenders.tsx на примитивах scientific/svg/* (API type/className/isModal)
      и/или MoleculeViewer2D / StructuralFormula2D (§4.1).
   └─ specItems — только верифицированные параметры (§7).
   └─ Язык: 100% русские надписи (без англицизмов).

[Шаг 5] Модульная структура в src/components/study/topics/<topicSlug>/
   └─ <Topic>TheoryView.tsx (navItems section-*, scrollToNav, openStudyBlock('elements-chemistry', ...)).
   └─ <Topic>Header.tsx (4 блока: карточка, ключевая идея, подводные камни ФИПИ, TopicNavGrid).
   └─ <Topic>Sections.tsx (каркас §6.3, 2D-превью §4.4, таблицы §6.7, MoleculeViewer3D в финале, PracticeBanner).
   └─ <Topic>DarkBlocks.tsx (DarkBlockCard), <Topic>FunFacts.tsx (TheoryCallout).
   └─ TermTooltip (1–2 на секцию), ChemFormula/ChemText для 100% формул.
   └─ Уравнения с кириллическими условиями НАД стрелкой (электролиз, сплавление и т.п.) — только через проп `math` с `\xrightarrow{\text{...}}` (§3.2).
   └─ Ре-экспорт topics/<Topic>TheoryView.tsx.

[Шаг 6] Регистрация темы
   └─ studyBlocksData.ts (блок elements-chemistry), StudyTopicTheoryPage.tsx
      (lazy + именованный экспорт), elementStudyService.ts (маппинг элементов).

[Шаг 7] АГЕНТ ПОСТПРОВЕРКИ (§8)
   └─ Орфография (строчные элементы), KaTeX-полнота, единообразие стиля, чистота кода.
   └─ Аудит рендера формул: node scripts/audit-formulas.mjs — 0 ошибок, SUSPICIOUS-список просмотрен (§3.8).
   └─ Итерации до 0 critical-замечаний.

[Шаг 8] Контроль сборки
   └─ npm run build   (= tsc -b && vite build)
   └─ npm run lint    (oxlint)

[Шаг 9] Сохранение в Git
   └─ git add .
   └─ git commit -m "feat(study): add <Тема> topic with modular architecture, ..."
      (в сообщении — ссылки на верификационный отчёт и отчёт постпроверки)
   └─ git push origin main
```

---

## 10. Эталонные реализации (Reference Implementations)

**Первичный эталон (финальный стандарт дизайна и компонентов):**

1. Тема «Кислород и Сера»: [`src/components/study/topics/sulfurOxygen/`](file:///f:/S_Chem_Portal/src/components/study/topics/sulfurOxygen/) — `SulfurOxygenTheoryView.tsx`, `SulfurOxygenHeader.tsx`, `SulfurOxygenSections.tsx`, `SulfurOxygenDarkBlocks.tsx`, `SulfurOxygenFunFacts.tsx`, `SulfurOxygen2DRenders.tsx`; ре-экспорт [`SulfurOxygenTheoryView.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/SulfurOxygenTheoryView.tsx).

**Вторичные эталоны (структура, объём, практикум):**

2. Модульная тема «Углерод и Кремний»: [`CarbonSiliconTheoryView.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/CarbonSiliconTheoryView.tsx) и [`carbonSilicon/`](file:///f:/S_Chem_Portal/src/components/study/topics/carbonSilicon/).
3. Тема «Азот и Фосфор» (объём теории, 2D-схемы кислот на светлой теме, практикум): [`NitrogenPhosphorusTheoryView.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/NitrogenPhosphorusTheoryView.tsx) и [`nitrogenPhosphorus/PhosphorusAcids2DRenders.tsx`](file:///f:/S_Chem_Portal/src/components/study/topics/nitrogenPhosphorus/PhosphorusAcids2DRenders.tsx).

**Централизованные компоненты и данные:**

4. Научный рендеринг: [`ChemFormula.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemFormula.tsx), [`ChemText.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/ChemText.tsx), [`TermTooltip.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/TermTooltip.tsx).
5. 2D-модуль: [`MoleculeViewer2D.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/MoleculeViewer2D.tsx), [`StructuralFormula2D.tsx`](file:///f:/S_Chem_Portal/src/components/scientific/StructuralFormula2D.tsx), [`src/components/scientific/svg/`](file:///f:/S_Chem_Portal/src/components/scientific/svg/), [`utils/molecule2DRenderer.ts`](file:///f:/S_Chem_Portal/src/utils/molecule2DRenderer.ts), [`utils/molecule2DTheme.ts`](file:///f:/S_Chem_Portal/src/utils/molecule2DTheme.ts).
6. Каркасные компоненты: [`SectionBadge`](file:///f:/S_Chem_Portal/src/components/study/SectionBadge.tsx), [`ScrollToNavButton`](file:///f:/S_Chem_Portal/src/components/study/ScrollToNavButton.tsx), [`TopicNavGrid`](file:///f:/S_Chem_Portal/src/components/study/TopicNavGrid.tsx), [`PracticeBanner`](file:///f:/S_Chem_Portal/src/components/study/PracticeBanner.tsx), [`TheoryCallout`](file:///f:/S_Chem_Portal/src/components/study/TheoryCallout.tsx), [`DarkBlockCard`](file:///f:/S_Chem_Portal/src/components/study/DarkBlockCard.tsx), [`TopicQuickNavTags`](file:///f:/S_Chem_Portal/src/components/study/TopicQuickNavTags.tsx).
7. 3D-модели: [`src/data/molecules.ts`](file:///f:/S_Chem_Portal/src/data/molecules.ts).
8. Регистрация темы: [`StudyTopicTheoryPage.tsx`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicTheoryPage.tsx), [`StudyTopicPracticePage.tsx`](file:///f:/S_Chem_Portal/src/components/study/StudyTopicPracticePage.tsx), [`src/data/studyBlocksData.ts`](file:///f:/S_Chem_Portal/src/data/studyBlocksData.ts), [`src/data/trainersRegistry.ts`](file:///f:/S_Chem_Portal/src/data/trainersRegistry.ts), [`elementStudyService.ts`](file:///f:/S_Chem_Portal/src/services/periodicTable/elementStudyService.ts).
9. Данные практикума: [`src/data/nitrogenPhosphorusTasks/`](file:///f:/S_Chem_Portal/src/data/nitrogenPhosphorusTasks/), [`reactionsNPTasks.ts`](file:///f:/S_Chem_Portal/src/data/reactionsNPTasks.ts), [`ovrTasks.ts`](file:///f:/S_Chem_Portal/src/data/ovrTasks.ts), [`inorganic31Tasks.ts`](file:///f:/S_Chem_Portal/src/data/inorganic31Tasks.ts).
10. Архитектура и правила кода проекта: [`ARCHITECTURE_AND_ROADMAP.md`](file:///f:/S_Chem_Portal/ARCHITECTURE_AND_ROADMAP.md).
