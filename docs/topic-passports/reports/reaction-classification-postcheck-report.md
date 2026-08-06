# Отчёт агента постпроверки — тема ОХ-05 «Классификация химических реакций»

**Дата**: 2026-08-07 (полная перепроверка; предыдущая версия отчёта признана фиктивной и перезаписана)
**Регламент**: `.qwen/agents/topic-proofreader.md`
**Объект**: `src/components/study/topics/reactionClassification/` (7 файлов: TheoryView, Header, Sections, DarkBlocks, FunFacts, Infographics, ConceptFlow), ре-экспорт `topics/ReactionClassificationTheoryView.tsx`, `src/data/reactionClassificationTestTasks.ts`, `src/components/trainers/ReactionClassificationTestTrainer.tsx`, регистрации (`studyBlocksData.ts`, `trainersRegistry.ts`, `StudyTopicTheoryPage.tsx`, `StudyTopicPracticePage.tsx`), централизованные компоненты `InfographicFigure.tsx` / `ConceptFlow.tsx`, паспорт `docs/topic-passports/reaction-classification.md`.
**Научная верификация**: вне зоны данного отчёта (закрыта отдельно, VERIFIED).

## Вердикт: FAIL (условно) — 0 critical / 3 minor

Тема готова к коммиту после закрытия (исправление либо мотивированное отклонение в паспорте) трёх minor-замечаний. Критических дефектов нет.

## Таблица замечаний

| № | Файл:строка | Категория | Уровень | Суть замечания | Требуемое исправление |
|---|---|---|---|---|---|
| 1 | `reactionClassification/ReactionClassificationHeader.tsx:23–24` | стиль | minor | Quick-nav теги используют иконки `FlaskConical` и `Flame`; каноническая тройка quick-nav по 30-DESIGN §8 — `Atom` / `TestTube` / `Orbit` (строка таблицы пиктограмм «Ровно 3 quick-nav тега шапки»). Все 11 остальных тем проекта соблюдают тройку; отклонение не заявлено в паспорте в таблице «Осознанные отклонения». | Заменить на `Atom`/`TestTube`/`Orbit` (напр., «Типы реакций» → `TestTube`, «Тепловой эффект» → `Atom`) либо внести отклонение в паспорт с обоснованием. |
| 2 | `reactionClassification/ReactionClassificationDarkBlocks.tsx:118` | стиль | minor | Чип «-Q (ΔH > 0)» оформлен классами `bg-red-900/60 text-red-300` — цвет `red` вне разрешённой палитры (30-DESIGN §2: slate/amber/rose/emerald/teal/sky/indigo/purple). | Заменить на `rose` (`bg-rose-900/60 text-rose-300`). |
| 3 | `docs/topic-passports/reaction-classification.md` (§Практикум) ↔ `src/data/studyBlocksData.ts:286` | код | minor | Паспорт заявляет `trainerIds: rc-test-01 + np-test-14-1`, в коде — `['rc-test-01', 'reactions-np', 'np-test-14-1']` (все три существуют в `trainersRegistry.ts`, рендер корректен). Расхождение документации и кода. | Либо дополнить паспорт (`reactions-np`), либо убрать лишний id из кода. |

## Audit trail

### 1. Орфография и язык

| Проверка | Паттерн / команда | Результат |
|---|---|---|
| 1.1 Заглавные названия элементов в середине предложения | `rg "[а-яё][а-яё ,.\-]*(Углерод\|Кремний\|Азот\|…\|Марганец)"` по папке темы (инструмент работает в режиме ignore-case: просмотрены все 13 совпадений вручную) | ✅ Все вхождения — строчные написания («азота», «кислородом», «хлор», «фтора», «водорода» и т. п.) либо первые слова заголовков («Горение…» в `TheoryCallout`). Заглавных названий элементов в середине предложений нет. |
| 1.2 100% русский язык графики | Полное чтение `ReactionClassificationInfographics.tsx` (5 спеков) и `ReactionClassificationConceptFlow.tsx`; просмотр всех `title`/`lines`/`legend`/`reference`/`caption`/`xAxis`/`yAxis` | ✅ Все надписи русские; латиницей только химические символы и формулы (`Ea`, `ΔH`, `K`, `v(прям.) = v(обр.)`, формулы веществ). Английских слов в легендах/подписях нет. |
| 1.3 Запрет номеров заданий в теории | `rg "Схема \d\|задани\|№"` по папке темы | ✅ 0 совпадений. Упоминание «ЕГЭ/ОГЭ» в `Sections.tsx:291` — название панели «Важные исключения для экзаменов (ЕГЭ/ОГЭ)», без номеров заданий (допустимо). |
| 1.4 Единообразие терминологии | Полное чтение файлов темы | ✅ Терминология российской школы: «гомогенная/гетерогенная», «протолитические», «гомолитический/гетеролитический», «тепловой эффект», «экзо-/эндотермические»; смешений с переводной нет. |

### 2. Научный рендеринг (KaTeX)

| Проверка | Паттерн / команда | Результат |
|---|---|---|
| 2.1 Сырые формулы в JSX | `rg ">[^<>{}]*[A-Z][a-z]?[0-9][^<>]*<"` по папке темы | ✅ 0 совпадений. Юникод-индексы (`F₂`, `H₂O₂`, `Hb + O₂ ⇄ HbO₂`) в тексте — разрешённая конвенция (20-RENDERING §1.1, строки 78/95: юникод `→`/`⇄` и формульные упоминания в тексте допустимы; эталоны N/P, S/O используют её же). |
| 2.1б Запрет mhchem и сырого LaTeX | `rg "\\ce\{"` и `rg '\$\\(rightarrow\|rightleftharpoons\|xrightarrow)'` по `src/**/*.tsx` | ✅ `\ce{` — только в guards парсера `ChemFormula.tsx:142` (не тема). `$\rightarrow` найден в `carbonSilicon/CarbonSiliconReactionMatrix.tsx:37` — вне объекта аудита (известный legacy, вне зоны). В теме `$...$` встречается 2 раза — оба внутри пропа `text=` компонента `ChemText` (`Sections.tsx:278`, `Sections.tsx:371`), что разрешено. |
| 2.2 Поддерживаемые стрелки | `rg "<-\|<==\|-->"` по папке темы | ✅ 0 совпадений. Используются только `->`, `<=>`, `<=(...)=> `, `-(...)->`, `-t->` — все из поддерживаемого набора. |
| 2.3 Константы через проп `math` | Полное чтение файлов | ✅ `hν`, `E_a`, `ΔH < 0`, `K = …` — через `math=`; условия в `math` с `\xrightarrow{...}`/`\xrightleftharpoons{...}` (DarkBlocks). |
| 2.4 `katex-error` в собранной странице | `node scripts/audit-formulas.mjs` | ✅ Секция `KATEX/PARSER ERRORS (0)` пуста. |
| 2.5 Кириллические условия над стрелкой через `formula` | `rg "-\(\|<=\(\|<-\("` по папке темы | ✅ 5 совпадений — все условия латинские/формульные: `<=(V2O5)=>` (×2), `<=(t>2000°C)=>`, `-(MnO2)->`, `<=(Fe, t, p)=>`. Кириллицы над стрелкой в пропе `formula` нет. Фазовые метки — русские `(г)/(р-р)/(тв)/(ж)`; латинских `(g)/(s)/(l)/(aq)` нет (`rg "\((g\|s\|l\|aq\|a)\)"` — 0 совпадений). |
| 2.6 Аудит рендера: SUSPICIOUS по теме | `node scripts/audit-formulas.mjs` → grep `reactionClassification` по выводу | ✅ Единственное совпадение: `Sections.tsx:298` — `(NH4)2Cr2O7 -t-> N2^ + Cr2O3 + 4H2O^`; латекс `\mathrm{(NH_{4})_{2}Cr_{2}O_{7}} \xrightarrow{t^{\circ}} …` — корректно (заряды/индексы верны, ложное срабатывание на `t^{\circ}`, как заявлено координатором). Индексы многоатомных ионов внизу (`SO_{4}^{2-}` и т. п. в данных практикума) — корректны. |

### 3. Единообразие стиля

| Проверка | Паттерн / команда | Результат |
|---|---|---|
| 3.1 Шрифты | `rg "font-serif\|object-cover"` по папке темы; чтение корневых контейнеров | ✅ 0 совпадений. Корневые контейнеры TheoryView/Header/Sections: `font-body text-slate-800 leading-relaxed text-sm sm:text-base`. Чипы, коды (`ОХ-05`), общие схемы (`A + B → AB`), подписи стадий — `font-mono`. |
| 3.2 Палитра | `rg "red-\|blue-\|green-\|yellow-\|orange-\|gray-\|violet-\|fuchsia\|cyan-\|lime-\|pink-"` по папке темы | ⚠️ 1 совпадение — замечание №2 (`red-900/red-300`). Прочее — slate/amber/teal/emerald/rose/purple; цвета категорий SVG (`blue`, `green`, `red`, `ochre`) идут через `getInfoCategoryColor`/`LIGHT_PALETTE` — академическая палитра 2D-модуля, разрешена (20-RENDERING §2.2). |
| 3.3 Каркас секций | Чтение `Sections.tsx` (все 9 секций) | ✅ Каждая секция: `SectionBadge` + h2 + подзаголовок + `ScrollToNavButton`; `id="section-*"` + `scroll-mt-6`; id секций = `navItems` (TheoryView) = `targetId` quick-nav (все 3 существуют). |
| 3.4 Компоненты-дубликаты | Полное чтение + grep экспортов/импортов | ✅ Факты — `TheoryCallout` (×3), тёмные блоки — `DarkBlockCard` (×3), шапка — 4 блока (карточка, «Ключевая идея», «Подводные камни» ×4, `TopicNavGrid`); модалок нет (инфографика через `InfographicFigure`, концепт-карта через `ConceptFlow`); quick-nav — ровно 3 тега (замечание №1 — только об иконках). Локальных дублей централизованных компонентов нет. |
| 3.5 Бейдж экзамена и номера заданий в шапке | Чтение `Header.tsx` | ✅ Мета-строка: `ОХ-05 • Общая химия • Раздел 5 • Классификация реакций`; бейджа `targetExam` и номеров заданий нет. |
| 3.6 2D-превью | — | N/A: тема не содержит 2D-плиток (осознанное отклонение, зафиксировано в паспорте, решение 2026-08-07). Мёртвых ссылок на удалённый `ReactionClassification2DRenders.tsx` нет — см. 4.2. |
| 3.7 Объём теории | Чтение: 9 секций, 4 инфографики-дерева/профиля, концепт-карта, 3 dark-блока, 3 факта, 2 таблицы/панели | ✅ Не скуднее эталона `generalBasics`. |
| 3.8 Наполнение секций | Чтение | ✅ Каждая секция имеет вводный абзац теории до реакций/таблиц. Интересные факты (3 ≥ 2) распределены: 5.1, 5.7, 5.6 — не подряд. Dark-блоков 3 (в пределах 2–5), все «большие» формы (многостадийные / с внутренней сеткой), распределены по секциям 5.8/5.7/5.5; содержание не только промышленное (цепные реакции/Нобелевская премия, катализ, термохимический баланс). |
| 3.9 Схемы и панели | `rg "Схема \d"` по папке темы; чтение | ✅ 0 совпадений (нумерации схем нет). Сводные разделы дополнены tree-диаграммами (`ReactionsClassificationTreeInfographic` в 5.1, `PhaseCompositionInfographic` в 5.3, `ParticleTransferInfographic` в 5.4); ≥ 3 структурных формул в разделе нет (тема без 2D-рендеров) — светлые панели не требуются. `font-serif` в схемах отсутствует. |

### 4. Код и интеграция

| Проверка | Команда | Результат |
|---|---|---|
| 4.1 Сборка | `npm run build` | ✅ Exit code 0 (`tsc -b && vite build`, 2128 модулей, чанк `ReactionClassificationTheoryView-*.js` собран). |
| 4.1б Линтер | `npm run lint` | ✅ Exit code 0: 13 warnings / 0 errors; все warnings — pre-existing legacy (`MoleculeViewer3D`, `UserProgressContext`, `router`, `DifficultyBadge`, `ChemFormula`, `MoleculeViewer2D`), ни одного в файлах темы или в расширенных компонентах. |
| 4.1в Аудит формул | `node scripts/audit-formulas.mjs` | ✅ Exit code 0; `KATEX/PARSER ERRORS (0)`; итого 970 строк, clean 796. |
| 4.2 Мёртвый код / удалённый 2D-рендер | `rg "ReactionClassification2DRenders\|2DRenders"` по `src/`; `rg "export const"` по папке темы и сверка импортов | ✅ `ReactionClassification2DRenders` не упоминается нигде в `src/` (упоминаются только 2D-файлы других тем). Каждый экспорт темы импортируется: 5 инфографик + ConceptFlow — в `Sections.tsx`; DarkBlock1–3, FunFact1–3 — в `Sections.tsx`; Header/Sections — в TheoryView; ре-экспорт используется в `StudyTopicTheoryPage.tsx:19`. |
| 4.3 Регистрация | Чтение `studyBlocksData.ts:279–320`, `trainersRegistry.ts:69–80`, `StudyTopicTheoryPage.tsx:89–90`, `StudyTopicPracticePage.tsx:66–67` | ✅ Блок `gen-reaction-classification` (код ОХ-05) в существующем блоке семейства `general-chemistry`; lazy-импорт и условие до generic-рендера; маппинг `rc-test-01 → ReactionClassificationTestTrainer`; `trainerIds` `rc-test-01`/`reactions-np`/`np-test-14-1` все существуют в реестре; `openStudyBlock('general-chemistry', 'gen-reaction-classification', 'practice')` — сигнатура и blockId корректны (`router.tsx:31`, `studyBlocksData.ts:45`). Маппинг элементов в `elementStudyService.ts` не требуется (тема ОХ, сервис содержит только ХЭ-маппинги). Замечание №3 — расхождение паспорта по составу trainerIds. |
| 4.4 Изображения | `rg "assets\|src=\|/images/"` по папке темы | ✅ 0 совпадений — тема не использует растровых изображений. |
| 4.5 3D-модели | `rg "h2\|o2\|n2\|h2o\|co2\|nh3\|ch4\|so2\|so3"` по `molecules.ts`; `rg "DEFAULT_HOME_MOLECULES"` по `src/` | ✅ Все 9 id (`h2:1187, o2:576, n2:1203, h2o:5, co2:444, nh3:315, ch4:63, so2:648, so3:666`) зарегистрированы. `DEFAULT_HOME_MOLECULES` (`MoleculeViewer3D.tsx:19`) = h2o/benzene/ch4/caffeine/ethanol/dopamine/gaba/glucose — тематические модели (h2, n2, o2, so2, so3) туда НЕ добавлены (h2o/ch4 — общие home-модели, существовавшие до темы). |
| 4.6 Консистентность с паспортом | Чтение `docs/topic-passports/reaction-classification.md` и сверка | ✅ id секций (9 шт.), список 3D-молекул, отсутствие 2D-рендеров, расширения InfographicFigure/ConceptFlow — соответствуют коду. ⚠️ Замечание №3 (trainerIds). Иконки quick-nav в паспорте описаны, но не вынесены в таблицу отклонений (замечание №1). |

### Расширенные централизованные компоненты (регрессия эталона ОХ-01)

| Проверка | Результат |
|---|---|
| `InfographicFigure.tsx`: кривая `energy` (`profile: 'exo'/'endo'`, стрелки Ea/ΔH), повёрнутая подпись оси Y | ✅ Типы согласованы (`InfoPlotSpec.curve: 'hyperbola'\|'linear'\|'energy'`); подпись Y вращается внутри панели (`rotate(-90 …)`), не выходит за габариты. Эталон `generalBasics` использует `hyperbola`/`linear` — ветки не затронуты; сборка (`tsc -b`) подтверждает совместимость всех потребителей. |
| `ConceptFlow.tsx`: пропы `layoutRx/layoutRy` (опциональные, default 170/72), измерение узлов `nodeHalfSize` по ширине текста, диагональное смещение невмещающихся подписей рёбер | ✅ Новые пропы опциональны — существующие вызовы (эталон ОХ-01 `generalBasics`) не меняют поведения; сборка и линтер без ошибок в компоненте. |

### Вне объекта (зафиксировано, действий не требует)

- `carbonSilicon/CarbonSiliconReactionMatrix.tsx:37` — инлайн `$\rightarrow$` в обычном JSX (известный legacy-дефект C/Si, вне зоны данной постпроверки).

## Итог

**0 critical / 3 minor.** Тема условно готова: после закрытия minor-замечаний №1–№3 (исправление или мотивированное отклонение, зафиксированное в паспорте) статус меняется на PASS без повторной полной проверки.
