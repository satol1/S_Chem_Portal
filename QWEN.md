# QWEN.md — S_Chem_Portal

Образовательный интерактивный портал по химии (ЕГЭ/ОГЭ/ВсОШ/ДВИ МГУ). Стек: React 19 + TypeScript + Vite, Tailwind CSS v4, KaTeX, Three.js, lucide-react, framer-motion. Сборка: `npm run build` (= `tsc -b && vite build`), линтер: `npm run lint` (oxlint), аудит формул: `node scripts/audit-formulas.mjs`.

## Маршрутизация по задачам

| Задача | Что читать |
|---|---|
| Создание новой учебной темы | [`docs/topic-standard/00-PIPELINE.md`](docs/topic-standard/00-PIPELINE.md) — конвейер, затем модули стандарта |
| Профиль семейства темы | [`docs/topic-standard/topic-types/`](docs/topic-standard/topic-types/) — ХЭ-NN (`element-topic.md`) / ОХ-NN (`general-topic.md`) |
| Уникальные детали конкретной темы | [`docs/topic-passports/<slug>.md`](docs/topic-passports/) — читать ДО правок темы |
| Формулы, 2D-схемы, 3D-модели | [`docs/topic-standard/20-RENDERING.md`](docs/topic-standard/20-RENDERING.md) |
| Дизайн, шапка, таблицы, иконки | [`docs/topic-standard/30-DESIGN.md`](docs/topic-standard/30-DESIGN.md) |
| Структура файлов, регистрация, компоненты | [`docs/topic-standard/10-ARCHITECTURE.md`](docs/topic-standard/10-ARCHITECTURE.md) |
| Архитектура проекта в целом | [`ARCHITECTURE_AND_ROADMAP.md`](ARCHITECTURE_AND_ROADMAP.md) |

Ролевые агенты конвейера (вердикты блокирующие): научная верификация — [`.qwen/agents/topic-verifier.md`](.qwen/agents/topic-verifier.md); постпроверка — [`.qwen/agents/topic-proofreader.md`](.qwen/agents/topic-proofreader.md).

## Сводка стандарта тем «на одном экране»

> Сводка, не норма: полная формулировка — в модулях `docs/topic-standard/`.

| Аспект | Требование |
|---|---|
| Структура кода | Модульная папка `src/components/study/topics/<topicSlug>/`; семейный состав — в `topic-types/` |
| Конвейер | Разработка → научная верификация → постпроверка; пропуск роли запрещён |
| Формулы | Только `ChemFormula`/`ChemText` (KaTeX); mhchem `\ce{}` отсутствует и запрещён; константы через проп `math` |
| Орфография | Названия элементов — со строчной буквы внутри предложений |
| Язык графики | 100% русский, без англицизмов в SVG/подписях/легендах |
| Интересные факты | Жёлтая скобка `TheoryCallout` |
| 2D-превью | Плитка с живым SVG + оверлей `ZoomIn` → статическая модалка; компактное превью читаемо, без микротекста |
| Инфографика | Концептуальные схемы — централизованный `InfographicFigure` (светлая тема, без модалок, справочная панель справа); интерактивные концепт-карты — `ConceptFlow` (React Flow); только там, где необходима (20-RENDERING §2.7–2.8) |
| 3D | Заключительный раздел `section-molecules-3d`, `MoleculeViewer3D`, модели в `src/data/molecules.ts` |
| Шрифты | `font-body` (контент), `font-heading` (заголовки), `font-mono` (данные); **`font-serif` запрещён** |
| Палитра | `slate` (каркас), `amber` (акцент/экзамен), `rose` (опасность), `emerald` (преимущество), `teal`/`sky`/`indigo` (категории) |
| Шапка | 4 блока: карточка, «Ключевая идея», «Подводные камни ФИПИ», `TopicNavGrid`; без бейджа экзамена и номеров заданий |
| Quick-nav | Ровно 3 тега с иконками `Atom` / `TestTube` / `Orbit` |
| Пиктограммы | Только канонический набор lucide-react (30-DESIGN §8) |

## Жёсткие запреты (действуют всегда)

- Запуск ролевых и объёмных задач форками, наследующими тяжёлый родительский контекст, — только самостоятельные субагенты с самодостаточными промптами (00-PIPELINE §1, «Токен-дисциплина запуска агентов»).
- Сырые формулы в JSX (`H2SO4`, `NH4+`) и самодельные `<sub>`/`<sup>` — только `ChemFormula`/`ChemText`.
- Кириллические условия над стрелкой через проп `formula` — только `math` с `\xrightarrow{\text{...}}` (20-RENDERING §1.2, правило 3).
- Тематические 3D-модели в `DEFAULT_HOME_MOLECULES` — запрещено (20-RENDERING §3.2).
- Концептуальная инфографика на `SvgDiagramWrapper`/молекулярных примитивах или в плиточно-модальном паттерне — только `InfographicFigure`/`ConceptFlow` (20-RENDERING §2.7–2.8).
- Абсолютные строковые пути изображений (`src="/images/..."`) — только ES-импорты из `src/assets/` (20-RENDERING §2.3).
- Номера заданий ЕГЭ/ОГЭ в theory-компонентах (допустимы только в данных практикума).
- Локальные дубли централизованных компонентов — новый UI сразу централизуется (10-ARCHITECTURE §3).
