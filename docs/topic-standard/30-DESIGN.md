# 30. Единообразие визуального стиля и дизайн-системы

Дизайн — академический, современный, динамичный, единый для всех тем. Проект использует **Tailwind CSS v4** (классы `shadow-xs`, `shadow-2xs` валидны).

---

## 1. Типографика и шрифты

Шрифты подключены в [`src/index.css`](../../src/index.css) и [`tailwind.config.js`](../../tailwind.config.js):

| Класс | Гарнитура | Применение в теме |
|---|---|---|
| `font-body` | Golos Text (fallback Manrope) | **Весь контент темы**; задаётся на корневом контейнере `TheoryView` |
| `font-heading` | Outfit | Заголовки `h1`–`h6` — применяется глобальным CSS автоматически, явно указывать не нужно |
| `font-mono` | системный моноширинный | Код темы («ХЭ-06» / «ОХ-01»), номера-чипы подводных камней, числовые данные таблиц (углы, энергии, pKa), бейджи, субтайтлы `DarkBlockCard`, `<code>`, метка «2D-схема» |
| ~~`font-serif`~~ | — | **Запрещён** — в эталонных темах не используется |

- Базовый размер контента: `text-sm sm:text-base`, `leading-relaxed` (корневой контейнер); внутри блоков `text-xs sm:text-sm`.

## 2. Цветовая палитра (роли цветов)

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

## 3. Каркас раздела (секции)

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
- **Вводный абзац обязателен**: каждая секция начинается с 1–2 вводных абзацев теории (контекст, закономерность, «почему это важно») ДО списков реакций, таблиц и схем. Секция из одних формул и реакций с комментариями воспринимается тяжело и запрещена.

## 4. Шапка темы — 4 блока (финальный стандарт)

По образцу [`SulfurOxygenHeader.tsx`](../../src/components/study/topics/sulfurOxygen/SulfurOxygenHeader.tsx):

1. **Карточка темы** `bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4`:
   - Мета-строка: код темы («ХЭ-NN» / «ОХ-NN») в светлом чипе `px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold`, через `<span>•</span>` — название блока и группа (для ХЭ: «Химия элементов» и «VI-A Группа (Подгруппа кислорода)»; для ОХ: «Общая химия» и раздел).
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

## 5. Интересные факты — «жёлтая скобка»

Реализуются **только** через централизованный `TheoryCallout` (файл `<Topic>FunFacts.tsx`):

```tsx
<div className="space-y-4 my-6">
  <TheoryCallout title="Интересный факт: Вулканизация каучука серными мостиками">...</TheoryCallout>
  <TheoryCallout title="Интересный факт: Парамагнетизм жидкого кислорода">...</TheoryCallout>
</div>
```

Классы скобки (внутри компонента): `p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2 shadow-2xs`; иконка `Lightbulb text-amber-600`. Внутри допускаются `<code className="font-mono text-amber-900 font-bold">` и `ChemFormula`. Норма: ≥ 2 факта на тему.

**Правило размещения**: факты распределяются по секциям темы **равномерно и логично** — каждый факт привязан к контексту своей секции (по одному в 2–4 разных секциях). **Запрещено** выстраивать все факты подряд в одном месте темы. Файл `FunFacts` хранит набор фактов; точки вставки выбираются в `Sections` по смысловому соседству.

## 6. Тёмные акцентные блоки (`DarkBlockCard`)

Тёмные блоки акцентируют **любой ключевой контент**: промышленный химизм (типовое наполнение), важные исключения, классификации, исторические справки, сводные карточки. Содержимое не ограничено промышленными процессами.

**Количество и формы** (эталоны — разделы «2. Простые вещества» и «6. Нитриты и минеральные удобрения» темы N/P):
- Всего в теме **2–5 блоков**: **2–3 больших** (полная ширина, многостадийные либо с внутренней сеткой карточек) и **1–2 малых** (половинные или компактные).
- Малые блоки размещаются в `grid grid-cols-1 md:grid-cols-2 gap-5` рядом со светлой карточкой-партнёром; большие — отдельно на полную ширину.
- Блоки распределяются по профильным секциям, а не собираются в одном месте.
- Точное число зависит от объёма информации в теме.

Каркас — централизованный компонент `DarkBlockCard` (файл `<Topic>DarkBlocks.tsx`); ширина и расположение задаются обёрткой/`className`. Внутренние стадии:

- Стадия: `p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2`; название стадии `font-bold text-amber-400 block text-xs sm:text-sm`.
- Уравнение в плашке: `text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm` (альтернативный цвет катализаторов/суммарных уравнений — `text-teal-300`).
- Пояснения: `text-slate-300` / `text-slate-400`; нумерованные шаги — чип `px-1.5 py-0.5 rounded bg-slate-700 text-amber-300 text-xs font-mono font-bold shrink-0`.
- `subtitle` блока — `font-mono` категория («Промышленный химизм • Тройной каталитический цикл»).

## 7. Таблицы

- **Сравнительная «янтарная»**: контейнер `overflow-x-auto border border-amber-200/80 rounded-xl bg-amber-50/40 shadow-xs`; `table className="w-full text-left text-xs sm:text-sm"`; `thead` — `bg-slate-800 text-white text-xs font-semibold tracking-wider`, `th p-3.5`; `tbody` — `divide-y divide-amber-200/60 text-slate-700 bg-amber-50/30`, строки `hover:bg-amber-100/50 transition-colors`, ячейки `p-3.5`.
- **Таблица данных** (например, свойства гидридов): контейнер `overflow-x-auto border border-slate-200 rounded-xl`; `thead` тот же тёмный; `tbody` — `divide-y divide-slate-200 bg-white`, строки `hover:bg-slate-50/80`.
- Числовые значения — `font-mono`; акценты `text-rose-800` (опасно/сильная кислота) и `text-emerald-800` (преимущество); сноска под таблицей `text-xs text-slate-500 italic pt-0.5`.

## 8. Пиктограммы (lucide-react) — канонический набор

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

## 9. Объём теории (ориентиры эталона «Кислород и Сера»)

| Показатель | Эталонное значение |
|---|---|
| Разделов | 8–9 (заключительный — 3D-модели) |
| `ChemFormula` | ~100–135 употреблений (включая `math=` для величин) |
| `TermTooltip` | ~10–12 (1–2 на секцию) |
| Подводных камней в шапке | 4 |
| Интересных фактов | ≥ 2, равномерно по секциям (§5) |
| Dark-блоков | 2–5: 2–3 больших + 1–2 малых (§6) |
| Вводных абзацев | 1–2 в начале каждой секции (§3) |
| Таблиц | ≥ 2 (в сравнительном разделе) |
| 2D-схем (типов рендера) | ≥ 4 |
| 3D-молекул в просмотрщике | 8–9 |

Новая тема не должна быть скуднее эталона по наполнению; «тонкие» темы возвращаются агентом постпроверки на доработку.
