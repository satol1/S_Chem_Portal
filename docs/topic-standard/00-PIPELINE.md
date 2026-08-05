# 00. Конвейер создания новой учебной темы (S_Chem_Portal)

> **Назначение модуля**: данный документ является общеобязательным регламентом и пошаговым руководством для ИИ-агентов (AI Coding Assistants / Vibe Coders) и разработчиков при создании, рефакторинге и интеграции новых академических тем по химии на платформе **S_Chem_Portal**.
>
> Стандарт составлен на основе опыта реализации **13 тем двух семейств**: «Химия элементов» (ХЭ-01…ХЭ-08, из них 5 с полным UI: Cr/Mn, галогены, S/O, N/P, C/Si) и «Общая химия» (ОХ-01…ОХ-08, каркасы), и развивается после каждой новой темы. Семейные особенности закреплены в профилях [`topic-types/`](topic-types/element-topic.md); уникальные детали отдельных тем — в [`../topic-passports/`](../topic-passports/).
>
> **Правило приоритета**: при любом расхождении между данным стандартом и реализацией тем приоритет имеет **данный стандарт и эталонная тема соответствующего семейства по реестру ниже (§3)**. Известные дефекты старых тем (например, вызов практикума с несуществующим blockId в теме C/Si — исправлен) не повторять.

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
   └─ Создать docs/topic-passports/<slug>.md по шаблону _TEMPLATE.md:
      slug, id, код, blockId семейства, список веществ, план разделов (8–9),
      quick-nav тройка, план 2D-схем (≥ 4) и 3D-молекул (8–9).
      Семейный профиль: topic-types/element-topic.md либо topic-types/general-topic.md.
      Паспорт обновляется на шагах 7/9 и остаётся в репозитории навсегда.

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
   └─ Каждая секция начинается вводным абзацем теории (30-DESIGN §3).
   └─ Интересные факты распределяются равномерно по секциям (30-DESIGN §5).
   └─ Dark-блоки 2–5: 2–3 больших + 1–2 малых, разнообразное содержание и формы,
      малые — в гриде со светлой карточкой (30-DESIGN §6).
   └─ Плотная сводная информация — tree-диаграмма без номера схемы (20-RENDERING §2.6);
      ≥ 3 структурных формул в разделе — светлая панель (20-RENDERING §2.4).
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

## 3. Эталонные реализации и реестр эталонов

**Реестр эталонов по аспектам** (обновляется после каждой новой темы):

| Аспект | Эталонная тема | Примечание |
|---|---|---|
| Дизайн, шапка, модалки, каркасы (семейство ХЭ) | «Сера и кислород» ХЭ-06 ([`sulfurOxygen/`](../../src/components/study/topics/sulfurOxygen/)) | финальный стандарт дизайна |
| Светлые панели нескольких формул | «Азот и фосфор» ХЭ-07 (фосфорные кислоты) + «Галогены» ХЭ-05 (панель X₂) | паттерн закреплён после S/O |
| Модульная файловая структура | «Углерод и кремний» ХЭ-08 ([`carbonSilicon/`](../../src/components/study/topics/carbonSilicon/)) | исторический дефект blockId исправлен |
| Объём теории и тематический практикум | «Азот и фосфор» ХЭ-07 ([`nitrogenPhosphorus/`](../../src/components/study/topics/nitrogenPhosphorus/)) | также эталон разнообразных dark-блоков (разделы «Простые вещества», «Нитриты и удобрения») и tree-диаграммы разложения солей аммония — воспроизводить без номера схемы и без `font-serif` |
| Новейшие полные темы ХЭ | «Галогены» ХЭ-05, «d-Металлы: хром и марганец» ХЭ-04 | автозамены катализаторов FeBr₃/AlBr₃ в парсере, элементы F/Br/I в `ELEMENT_INFO` |
| Семейство ОХ | каркасы ОХ-01…ОХ-08 | профиль: [`topic-types/general-topic.md`](topic-types/general-topic.md) |

**Точки входа в код** (каталог компонентов с пропсами — [`10-ARCHITECTURE.md`](10-ARCHITECTURE.md) §3; точки регистрации — §2 того же модуля):

- Научный рендеринг: [`ChemFormula.tsx`](../../src/components/scientific/ChemFormula.tsx), [`ChemText.tsx`](../../src/components/scientific/ChemText.tsx), 2D-модуль [`src/components/scientific/svg/`](../../src/components/scientific/svg/), 3D-модели [`src/data/molecules.ts`](../../src/data/molecules.ts).
- Данные практикума: [`src/data/nitrogenPhosphorusTasks/`](../../src/data/nitrogenPhosphorusTasks/), [`reactionsNPTasks.ts`](../../src/data/reactionsNPTasks.ts), [`ovrTasks.ts`](../../src/data/ovrTasks.ts), [`inorganic31Tasks.ts`](../../src/data/inorganic31Tasks.ts).
- Архитектура и правила кода проекта: [`ARCHITECTURE_AND_ROADMAP.md`](../../ARCHITECTURE_AND_ROADMAP.md).
