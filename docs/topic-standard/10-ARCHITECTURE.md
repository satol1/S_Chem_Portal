# 10. Архитектура темы: модульная структура, регистрация, DRY

Фундаментальные архитектурные принципы (DRY, SOLID, KISS, YAGNI). Платформа рассчитана на сотни химических тем. Любое монолитное нагромождение кода или дублирование компонентов категорически запрещено.

---

## 1. Модульная структура темы (обязательный состав файлов)

Запрещено писать всю тему в одном файле-монолите. Каждая тема создаётся в папке `src/components/study/topics/<topicSlug>/` по образцу [`sulfurOxygen/`](../../src/components/study/topics/sulfurOxygen/):

| Файл | Зона ответственности | Ориентир по объёму |
|---|---|---|
| `<Topic>TheoryView.tsx` | Корневой компонент: массив `navItems` (id + label с номером), `useState` активной секции, `scrollToNav()` к `#nav-toc`, переход в практику через `useRouter().openStudyBlock(...)`, обёртка `div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base"` | ~50 строк |
| `<Topic>Header.tsx` | Шапка из 4 блоков ([`30-DESIGN.md`](30-DESIGN.md) §4): карточка темы, ключевая идея, подводные камни ФИПИ, `TopicNavGrid` | ~130 строк |
| `<Topic>Sections.tsx` | Все разделы теории `#section-*`, таблицы, 2D-превью с модалкой, ОВР-карты, `MoleculeViewer3D` в финальном разделе, `PracticeBanner` | до ~900 строк |
| `<Topic>DarkBlocks.tsx` | Тёмные карточки промышленного химизма на `DarkBlockCard` (2–3 шт., распределённые по профильным секциям) | ~150 строк |
| `<Topic>FunFacts.tsx` | Интересные факты через централизованный `TheoryCallout` (≥ 2 шт.) | ~20 строк |
| `<Topic>2DRenders.tsx` | Векторные SVG-схемы темы на примитивах `scientific/svg/*` ([`20-RENDERING.md`](20-RENDERING.md) §2.2) | ~270 строк |
| *Опционально:* `<Topic>Diagrams.tsx`, `<Topic>ReactionMatrix.tsx` | Изолированные tree-диаграммы (аллотропия, цепочки превращений) и сравнительные матрицы реакций | по необходимости |

Плюс обязательный **ре-экспорт** на уровень выше — `src/components/study/topics/<Topic>TheoryView.tsx`:

```tsx
export { SulfurOxygenTheoryView } from './sulfurOxygen/SulfurOxygenTheoryView';
export default SulfurOxygenTheoryView;
```

Именно этот ре-экспорт лениво импортируется страницей [`StudyTopicTheoryPage.tsx`](../../src/components/study/StudyTopicTheoryPage.tsx).

**Требования к коду файлов**:
- Именованный экспорт компонента (`export const <Topic>TheoryView: React.FC = ...`) — страница теории резолвит именованный экспорт через `React.lazy(...).then(m => ({ default: m.<Topic>TheoryView }))`.
- Состояния темы (`activeSection`, `modalDiagram`) живут в корневом `TheoryView`/`Sections` и передаются пропсами; подкомпоненты — максимально чистые (презентационные).
- Данные (научные константы, массивы `specItems`, метаданные схем) объявляются типизированными константами вверху файла или выносятся в `src/data/` — не размазываются по JSX.

## 2. Регистрация темы в системе (обязательные точки интеграции)

1. [`src/data/studyBlocksData.ts`](../../src/data/studyBlocksData.ts) — запись темы в блоке семейства (для «Химии элементов» — **`elements-chemistry`**, подгруппа «Неметаллы (неMe)»): уникальный `id` (форматы семейства — см. `topic-types/`), код темы (кириллические серии «ХЭ-NN» / «ОХ-NN»), `targetExam`, `trainerIds` (существующие тренажёры из [`trainersRegistry.ts`](../../src/data/trainersRegistry.ts) либо новые тематические), `theoryLesson`.
2. [`StudyTopicTheoryPage.tsx`](../../src/components/study/StudyTopicTheoryPage.tsx) — lazy-импорт именованного экспорта + условие рендера `topic.id === '<topic-id>'` ДО generic-рендера.
3. [`StudyTopicPracticePage.tsx`](../../src/components/study/StudyTopicPracticePage.tsx) — практикум берёт `trainerIds` автоматически; при создании нового тренажёра зарегистрировать его в `trainersRegistry.ts` и в switch-диспетчеризации страницы.
4. [`src/services/periodicTable/elementStudyService.ts`](../../src/services/periodicTable/elementStudyService.ts) — маппинг химических элементов периодической таблицы на `topicId` новой темы (для тем по элементам).

> [!CAUTION]
> **Корректный blockId**: переход в практику выполняется как `openStudyBlock('<blockId семейства>', '<topic-id>', 'practice')`. Блок обязан реально существовать в `studyBlocksData.ts`. Запрещено использовать несуществующие идентификаторы блоков (известный дефект темы C/Si — вызов с блоком `inorganic-chemistry`, которого нет в данных: кнопка практикума ведёт на «Тема не найдена»). В новых темах не повторять.

## 3. DRY (Don't Repeat Yourself) — единая система централизованных компонентов

**Запрещено** создавать дублирующие макеты страниц или «велосипеды» для типичных элементов. **Обязательно к использованию**:

| Компонент | Путь | Назначение | Ключевые пропсы |
|---|---|---|---|
| `StudyTopicTheoryPage` / `StudyTopicPracticePage` | `src/components/study/` | Каркас страниц теории/практики (не дублировать) | — |
| `SectionBadge` | [`src/components/study/SectionBadge.tsx`](../../src/components/study/SectionBadge.tsx) | Значок заголовка раздела (стрелка `ArrowRight` вместо цифр) | `icon?`, `className?`, `iconClassName?` |
| `ScrollToNavButton` | [`src/components/study/ScrollToNavButton.tsx`](../../src/components/study/ScrollToNavButton.tsx) | Кнопка возврата к содержанию (`#nav-toc`) | `onClick` |
| `TopicNavGrid` | [`src/components/study/TopicNavGrid.tsx`](../../src/components/study/TopicNavGrid.tsx) | Сетка «Содержание» с якорем `id="nav-toc"` | `navItems`, `activeSection`, `onSelectSection`, `title?` |
| `TopicQuickNavTags` | [`src/components/study/TopicQuickNavTags.tsx`](../../src/components/study/TopicQuickNavTags.tsx) | Быстрые теги шапки (клик — плавный скролл к секции) | `tags: QuickNavTag[]`, где `QuickNavTag = { targetId, label, icon: LucideIcon }` |
| `PracticeBanner` | [`src/components/study/PracticeBanner.tsx`](../../src/components/study/PracticeBanner.tsx) | Нижний призыв к практикуму | `topicCode` («ХЭ-NN» / «ОХ-NN»), `onGoToPractice` |
| `TheoryCallout` | [`src/components/study/TheoryCallout.tsx`](../../src/components/study/TheoryCallout.tsx) | Жёлтая скобка: интересные факты, выноски | `title`, `children`, `icon?` (по умолчанию `Lightbulb`), `iconColor?` (по умолчанию `text-amber-600`), `className?` |
| `DarkBlockCard` | [`src/components/study/DarkBlockCard.tsx`](../../src/components/study/DarkBlockCard.tsx) | Тёмная карточка промышленного химизма | `title?`, `subtitle?` (`font-mono` справа), `icon?`, `children`, `className?` |
| `ChemFormula` | [`src/components/scientific/ChemFormula.tsx`](../../src/components/scientific/ChemFormula.tsx) | Рендеринг формул/уравнений через KaTeX | `formula?` (сырая строка), `math?` (готовый LaTeX), `className?`, `displayMode?` |
| `ChemText` | [`src/components/scientific/ChemText.tsx`](../../src/components/scientific/ChemText.tsx) | Смешанный русский текст с вкраплениями формул | `text` (поддерживает инлайн `$LaTeX$`), `className?` |
| `TermTooltip` | [`src/components/scientific/TermTooltip.tsx`](../../src/components/scientific/TermTooltip.tsx) | Интерактивные подсказки к терминам | `term`, `definition`, `className?`, `position?` |
| `MoleculeViewer3D` | [`src/components/interactive/MoleculeViewer3D.tsx`](../../src/components/interactive/MoleculeViewer3D.tsx) | 3D-просмотрщик (Three.js) | `moleculeIds?`, `initialSelectedId?`, `title?` |
| `MoleculeViewer2D` | [`src/components/scientific/MoleculeViewer2D.tsx`](../../src/components/scientific/MoleculeViewer2D.tsx) | Универсальный 2D-просмотрщик ([`20-RENDERING.md`](20-RENDERING.md) §2.1) | см. 20-RENDERING §2.1 |
| `StructuralFormula2D` | [`src/components/scientific/StructuralFormula2D.tsx`](../../src/components/scientific/StructuralFormula2D.tsx) | Структурная формула по SMILES ([`20-RENDERING.md`](20-RENDERING.md) §2.1) | см. 20-RENDERING §2.1 |
| `MolecularDiagram2D` | [`src/components/scientific/svg/MolecularDiagram2D.tsx`](../../src/components/scientific/svg/MolecularDiagram2D.tsx) | Дата-драйвен генератор учебных структурных схем ([`20-RENDERING.md`](20-RENDERING.md) §2.2): авто-обрезка связей у подписей, размерные линии длин, роли цветов | `atoms`, `bonds`, `lengths`, `notes`, `theme` |
| SVG-примитивы | `src/components/scientific/svg/` (`SvgDiagramWrapper`, `SvgAtom`, `SvgTextAtom`, `SvgFunctionalGroup`, `SvgBond`, `SvgBadge`, `SvgAngleArc`, `SvgLengthAnnotation`, `SvgCaption`) | Конструктор векторных схем ([`20-RENDERING.md`](20-RENDERING.md) §2.2) | см. 20-RENDERING §2.2 |

> [!IMPORTANT]
> **Правило упреждающей централизации**: если при разработке новой темы требуется элемент UI, макет карточки, выноска или интерактивный блок, ранее не встречавшийся в существующих темах, **запрещено дублировать его локально в коде темы**. Такой компонент **сразу создаётся как централизованный модуль** в `src/components/study/` или `src/components/scientific/`, чтобы последующие темы переиспользовали его без копирования.

## 4. Чистота кода и современные принципы (SOLID, KISS, YAGNI)

1. **TypeScript без послаблений**: запрещены `any` и нетипизированные данные; union-типы для перечислений (см. `type: 'rhombic-sulfur' | 'ozone' | ...` в 2D-рендерах); интерфейсы пропсов объявляются рядом с компонентом.
2. **SRP**: UI-компоненты темы отвечают только за рендеринг; данные и научные константы — в типизированных константах/`src/data/`; навигационное состояние — в корневом `TheoryView`.
3. **Запрет мёртвого кода**: каждый экспорт темы должен иметь хотя бы один импорт. Устаревшие интерактивные «просмотрщики» не консервировать — эталон показывает удаление `*Interactive2DViewer` в пользу статической модалки ([`20-RENDERING.md`](20-RENDERING.md) §2.4).
4. **OCP для расширяемости**: новый тип аллотропной схемы добавляется расширением union-типа `Allotrope2DType` и switch-делегирования в `MoleculeViewer2D`, а не копированием рендера.
5. **Линтер и сборка**: конфигурация [`/.oxlintrc.json`](../../.oxlintrc.json) (`react/rules-of-hooks`, `react/only-export-components` с `allowConstantExport`); сборка `npm run build` (= `tsc -b && vite build`) обязана проходить без ошибок на каждом этапе.
6. **KISS/YAGNI**: не вводить сторонние стейт-менеджеры, новые UI-библиотеки или зависимости без явной необходимости; анимации — только там, где они уже используются (framer-motion в существующих модулях).
