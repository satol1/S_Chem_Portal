# 00. Конвейер создания новой учебной темы (S_Chem_Portal)

> **Назначение модуля**: данный документ является общеобязательным регламентом и пошаговым руководством для ИИ-агентов (AI Coding Assistants / Vibe Coders) и разработчиков при создании, рефакторинге и интеграции новых академических тем по химии на платформе **S_Chem_Portal**.
>
> Стандарт составлен на основе эталонного опыта реализации трёх тем:
> 1. **«Кислород (O) и сера (S)»** (`elem-nonme-so`) — **ФИНАЛЬНЫЙ ЭТАЛОННЫЙ СТАНДАРТ**: самая поздняя тема, в которой закреплены все итоговые исправления дизайна, шапки, модалок, 2D-рендеров и централизованных компонентов.
> 2. **«Углерод (C) и кремний (Si)»** (`elem-nonme-csi`) — эталон модульной файловой структуры темы.
> 3. **«Азот (N) и фосфор (P)»** (`elem-nonme-np`) — эталон объёма теории и тематического практикума.
>
> **Правило приоритета**: при любом расхождении между данным стандартом, старыми темами (N/P, C/Si) и темой «Кислород и Сера» — приоритет имеет **реализация темы «Кислород и Сера»** и данный стандарт.

## Состав стандарта создания тем

| Модуль | Содержание |
|---|---|
| [`00-PIPELINE.md`](00-PIPELINE.md) | Конвейер: роли агентов, пошаговый чек-лист, эталонные реализации |
| [`10-ARCHITECTURE.md`](10-ARCHITECTURE.md) | Модульная структура темы, точки регистрации, DRY-каталог компонентов, чистота кода |
| [`20-RENDERING.md`](20-RENDERING.md) | Научный рендеринг: формулы (KaTeX), 2D-схемы, 3D-модели |
| [`30-DESIGN.md`](30-DESIGN.md) | Дизайн-система: типографика, палитра, каркасы секций, шапка, таблицы, иконки, объёмы |
| [`topic-types/element-topic.md`](topic-types/element-topic.md) | Профиль семейства «Химия элементов» (ХЭ-NN) |
| [`topic-types/general-topic.md`](topic-types/general-topic.md) | Профиль семейства «Общая химия» (ОХ-NN) |
| [`../../.qwen/agents/topic-verifier.md`](../../.qwen/agents/topic-verifier.md) | Ролевой агент научной верификации |
| [`../../.qwen/agents/topic-proofreader.md`](../../.qwen/agents/topic-proofreader.md) | Ролевой агент постпроверки (Proofreading & Style QA) |
| [`../topic-passports/`](../topic-passports/) | Паспорта тем: уникальные детали, отклонения, уроки |
| [`../../QWEN.md`](../../QWEN.md) | Сводка стандарта «на одном экране» (не норма) |

---

## 1. Конвейер производства темы: три обязательные роли

Каждая новая тема проходит через **три независимые роли**. Пропуск любой из них запрещён.

| Роль | Назначение | Когда подключается | Регламент |
|---|---|---|---|
| **Агент-разработчик** | Сборка данных, кода, 2D/3D, регистрации | Весь цикл | [`10-ARCHITECTURE.md`](10-ARCHITECTURE.md), [`20-RENDERING.md`](20-RENDERING.md), [`30-DESIGN.md`](30-DESIGN.md), §2 настоящего модуля |
| **Агент научной верификации** | Проверка КАЖДОГО факта, уравнения, константы и признака по российским и международным научным источникам | ДО начала разработки (черновик теории) и выборочно в процессе | [`../../.qwen/agents/topic-verifier.md`](../../.qwen/agents/topic-verifier.md) |
| **Агент постпроверки (Proofreading & Style QA)** | Орфография (строчные названия элементов), полнота KaTeX-рендеринга, единообразие шрифтов/цветов/компонентов, чистота кода | ПОСЛЕ реализации, перед коммитом | [`../../.qwen/agents/topic-proofreader.md`](../../.qwen/agents/topic-proofreader.md) |

**Правила конвейера**:
1. Вердикт агента верификации и агента постпроверки является **блокирующим**: тема не коммитится, пока остаются неисправленные замечания уровня `critical`.
2. Агенты верификации и постпроверки независимы от агента-разработчика: они не «доверяют» написанному, а перепроверяют его по источникам (регламент `topic-verifier.md`) и по формальным критериям (регламент `topic-proofreader.md`) соответственно.
3. Итогом работы каждого агента является письменный отчёт (форматы в `topic-verifier.md` «Формат верификационного отчёта» и `topic-proofreader.md` «Формат отчёта агента постпроверки»), прикладываемый к описанию коммита/PR.

---

## 2. Пошаговый чек-лист генерации новой темы (конвейер)

```
[Шаг 0] Паспорт темы
   └─ slug, id, код, список веществ, план разделов (8–9),
      quick-nav тройка, план 2D-схем (≥ 4) и 3D-молекул (8–9).
      Семейный профиль: topic-types/element-topic.md либо topic-types/general-topic.md.

[Шаг 1] Черновик теории + АГЕНТ НАУЧНОЙ ВЕРИФИКАЦИИ (topic-verifier.md)
   └─ Изучение темы по Некрасову, Третьякову, ФИПИ, xumuk.ru, chem.msu.su,
      IUPAC Gold Book, PubChem, NIST WebBook, CRC Handbook.
   └─ Каждое утверждение — ≥ 2 источника (RU + международный).
   └─ Верификационный отчёт: 0 блокирующих расхождений.

[Шаг 2] Регистрация 3D-молекул в src/data/molecules.ts
   └─ Интерфейс Molecule (atoms с x/y/z и гибридизацией, bonds с order).
   └─ НЕ добавлять в DEFAULT_HOME_MOLECULES! (20-RENDERING.md §3.2)

[Шаг 3] Практикум
   └─ Либо переиспользование существующих тренажёров через trainerIds,
      либо новые данные в src/data/<topicSlug>Tasks.ts по типам src/types/trainer.ts
      + регистрация в trainersRegistry.ts.

[Шаг 4] 2D-рендеры и схемы
   └─ <Topic>2DRenders.tsx на примитивах scientific/svg/* (API type/className/isModal)
      и/или MoleculeViewer2D / StructuralFormula2D (20-RENDERING.md §2.1).
   └─ specItems — только верифицированные параметры (topic-verifier.md).
   └─ Язык: 100% русские надписи (без англицизмов) (20-RENDERING.md §2.5).

[Шаг 5] Модульная структура в src/components/study/topics/<topicSlug>/
   └─ <Topic>TheoryView.tsx (navItems section-*, scrollToNav, openStudyBlock с blockId семейства).
   └─ <Topic>Header.tsx (4 блока: карточка, ключевая идея, подводные камни ФИПИ, TopicNavGrid).
   └─ <Topic>Sections.tsx (каркас 30-DESIGN.md §3, 2D-превью 20-RENDERING.md §2.4,
      таблицы 30-DESIGN.md §7, MoleculeViewer3D в финале, PracticeBanner).
   └─ <Topic>DarkBlocks.tsx (DarkBlockCard), <Topic>FunFacts.tsx (TheoryCallout).
   └─ TermTooltip (1–2 на секцию), ChemFormula/ChemText для 100% формул.
   └─ Уравнения с кириллическими условиями НАД стрелкой (электролиз, сплавление и т.п.) —
      только через проп `math` с `\xrightarrow{\text{...}}` (20-RENDERING.md §1.2, правило 3).
   └─ Ре-экспорт topics/<Topic>TheoryView.tsx.

[Шаг 6] Регистрация темы
   └─ studyBlocksData.ts (блок семейства), StudyTopicTheoryPage.tsx
      (lazy + именованный экспорт), elementStudyService.ts (маппинг элементов).

[Шаг 7] АГЕНТ ПОСТПРОВЕРКИ (topic-proofreader.md)
   └─ Орфография (строчные элементы), KaTeX-полнота, единообразие стиля, чистота кода.
   └─ Аудит рендера формул: node scripts/audit-formulas.mjs — 0 ошибок,
      SUSPICIOUS-список просмотрен (20-RENDERING.md §1.8).
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

## 3. Эталонные реализации (Reference Implementations)

**Первичный эталон (финальный стандарт дизайна и компонентов):**

1. Тема «Кислород и Сера»: [`src/components/study/topics/sulfurOxygen/`](../../src/components/study/topics/sulfurOxygen/) — `SulfurOxygenTheoryView.tsx`, `SulfurOxygenHeader.tsx`, `SulfurOxygenSections.tsx`, `SulfurOxygenDarkBlocks.tsx`, `SulfurOxygenFunFacts.tsx`, `SulfurOxygen2DRenders.tsx`; ре-экспорт [`SulfurOxygenTheoryView.tsx`](../../src/components/study/topics/SulfurOxygenTheoryView.tsx).

**Вторичные эталоны (структура, объём, практикум):**

2. Модульная тема «Углерод и Кремний»: [`CarbonSiliconTheoryView.tsx`](../../src/components/study/topics/CarbonSiliconTheoryView.tsx) и [`carbonSilicon/`](../../src/components/study/topics/carbonSilicon/).
3. Тема «Азот и Фосфор» (объём теории, 2D-схемы кислот на светлой теме, практикум): [`NitrogenPhosphorusTheoryView.tsx`](../../src/components/study/topics/NitrogenPhosphorusTheoryView.tsx) и [`nitrogenPhosphorus/PhosphorusAcids2DRenders.tsx`](../../src/components/study/topics/nitrogenPhosphorus/PhosphorusAcids2DRenders.tsx).

**Централизованные компоненты и данные** (полный каталог с пропсами — [`10-ARCHITECTURE.md`](10-ARCHITECTURE.md) §3):

4. Научный рендеринг: [`ChemFormula.tsx`](../../src/components/scientific/ChemFormula.tsx), [`ChemText.tsx`](../../src/components/scientific/ChemText.tsx), [`TermTooltip.tsx`](../../src/components/scientific/TermTooltip.tsx).
5. 2D-модуль: [`MoleculeViewer2D.tsx`](../../src/components/scientific/MoleculeViewer2D.tsx), [`StructuralFormula2D.tsx`](../../src/components/scientific/StructuralFormula2D.tsx), [`src/components/scientific/svg/`](../../src/components/scientific/svg/), [`utils/molecule2DRenderer.ts`](../../src/utils/molecule2DRenderer.ts), [`utils/molecule2DTheme.ts`](../../src/utils/molecule2DTheme.ts).
6. Каркасные компоненты: [`SectionBadge`](../../src/components/study/SectionBadge.tsx), [`ScrollToNavButton`](../../src/components/study/ScrollToNavButton.tsx), [`TopicNavGrid`](../../src/components/study/TopicNavGrid.tsx), [`PracticeBanner`](../../src/components/study/PracticeBanner.tsx), [`TheoryCallout`](../../src/components/study/TheoryCallout.tsx), [`DarkBlockCard`](../../src/components/study/DarkBlockCard.tsx), [`TopicQuickNavTags`](../../src/components/study/TopicQuickNavTags.tsx).
7. 3D-модели: [`src/data/molecules.ts`](../../src/data/molecules.ts).
8. Регистрация темы: [`StudyTopicTheoryPage.tsx`](../../src/components/study/StudyTopicTheoryPage.tsx), [`StudyTopicPracticePage.tsx`](../../src/components/study/StudyTopicPracticePage.tsx), [`src/data/studyBlocksData.ts`](../../src/data/studyBlocksData.ts), [`src/data/trainersRegistry.ts`](../../src/data/trainersRegistry.ts), [`elementStudyService.ts`](../../src/services/periodicTable/elementStudyService.ts).
9. Данные практикума: [`src/data/nitrogenPhosphorusTasks/`](../../src/data/nitrogenPhosphorusTasks/), [`reactionsNPTasks.ts`](../../src/data/reactionsNPTasks.ts), [`ovrTasks.ts`](../../src/data/ovrTasks.ts), [`inorganic31Tasks.ts`](../../src/data/inorganic31Tasks.ts).
10. Архитектура и правила кода проекта: [`ARCHITECTURE_AND_ROADMAP.md`](../../ARCHITECTURE_AND_ROADMAP.md).
