# Профиль семейства «Химия элементов» (ХЭ-NN)

Профиль применяется к темам о химических элементах и их подгруппах. Общие нормы — в модулях [`../10-ARCHITECTURE.md`](../10-ARCHITECTURE.md), [`../20-RENDERING.md`](../20-RENDERING.md), [`../30-DESIGN.md`](../30-DESIGN.md); данный файл фиксирует только семейные особенности.

## Идентификация

- Блок в [`studyBlocksData.ts`](../../../src/data/studyBlocksData.ts): **`elements-chemistry`** («Химия элементов (Неорганика)»).
- Формат id: `elem-<подгруппа>-<slug>` — **`elem-nonme-*`** (неметаллы) и **`elem-me-*`** (металлы). Примеры: `elem-nonme-so`, `elem-nonme-halogens`, `elem-me-cr-mn`.
- Код темы: **`ХЭ-NN`** (кириллица «ХЭ» + порядковый номер).
- Поле `subgroup`: «Металлы (Me)» либо «Неметаллы (неMe)».

## Состав и обязательные элементы

- Полный модульный состав файлов — [`../10-ARCHITECTURE.md`](../10-ARCHITECTURE.md) §1 (TheoryView, Header, Sections, DarkBlocks, FunFacts, 2DRenders + ре-экспорт).
- **Обязателен** заключительный 3D-раздел `section-molecules-3d` с 8–9 моделями ([`../20-RENDERING.md`](../20-RENDERING.md) §3).
- `DarkBlockCard` 2–3 шт. (промышленный химизм), `TheoryCallout` ≥ 2 шт.
- Объём теории — не скуднее эталона ([`../30-DESIGN.md`](../30-DESIGN.md) §9).
- Заголовки секций и quick-nav — по общему стандарту; типичная quick-nav тройка: аллотропия/строение → `Atom`, ключевой класс соединений → `TestTube`, 3D-модели → `Orbit`.

## Регистрация и практика

- Переход в практику: `openStudyBlock('elements-chemistry', '<topic-id>', 'practice')` — блок обязан существовать ([`../10-ARCHITECTURE.md`](../10-ARCHITECTURE.md) §2, CAUTION про blockId).
- Типовые `trainerIds` (из [`trainersRegistry.ts`](../../../src/data/trainersRegistry.ts)): `ovr-29` (ОВР), `inorg-31-np` (неорганика), `reactions-np` (цепочки), `np-test-14-1` (тесты); `practiceTypes`: `'reactions' | 'ovr' | 'tests'`.
- Маппинг элементов периодической таблицы на `topicId` — в [`elementStudyService.ts`](../../../src/services/periodicTable/elementStudyService.ts) (порядковые номера элементов темы).
- `targetExam` в данных может содержать номера заданий ЕГЭ — это допустимо только в данных; в theory-компонентах номера заданий запрещены ([`../30-DESIGN.md`](../30-DESIGN.md) §4).

## Реестр тем семейства

| Код | id | Тема | Статус UI |
|---|---|---|---|
| ХЭ-01 | `elem-me-alkali` | Щелочные и щелочноземельные металлы | только данные |
| ХЭ-02 | `elem-me-amphoteric` | Амфотерные металлы: алюминий и цинк | только данные |
| ХЭ-03 | `elem-me-fe-cu` | Медь и железо | только данные |
| ХЭ-04 | `elem-me-cr-mn` | d-Металлы: хром и марганец | реализована (2026-08-05) |
| ХЭ-05 | `elem-nonme-halogens` | Галогены (F, Cl, Br, I) | реализована (2026-08-05) |
| ХЭ-06 | `elem-nonme-so` | Сера и кислород | реализована — **эталон дизайна** |
| ХЭ-07 | `elem-nonme-np` | Азот и фосфор | реализована — эталон объёма и светлых панелей |
| ХЭ-08 | `elem-nonme-csi` | Углерод и кремний | реализована — эталон модульной структуры (исторический дефект blockId исправлен) |
