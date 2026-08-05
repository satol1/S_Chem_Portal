# Паспорт темы: «Сера (S) и кислород (O)»

- **Статус**: реализована и принята; **эталон дизайна** семейства ХЭ (реестр: [`../topic-standard/00-PIPELINE.md`](../topic-standard/00-PIPELINE.md) §3)
- **Дата последнего обновления**: 2026-08-05

## Паспортные данные

| Поле | Значение |
|---|---|
| Название | Сера (S) и кислород (O) |
| slug (папка) | `sulfurOxygen` |
| id | `elem-nonme-so` |
| Код | ХЭ-06 |
| blockId | `elements-chemistry` (подгруппа «Неметаллы (неMe)») |
| Семейный профиль | [`topic-types/element-topic.md`](../topic-standard/topic-types/element-topic.md) |
| UI | `src/components/study/topics/sulfurOxygen/` (TheoryView, Header, Sections, DarkBlocks, FunFacts, 2DRenders) + ре-экспорт `topics/SulfurOxygenTheoryView.tsx` |

## Структура

Id секций (сохранять при рефакторинге!):

```
section-general      1. Свойства элементов VI-A
section-allotropes   2. Аллотропия S₈ и O₃
section-peroxide     3. Пероксид H₂O₂
section-sulfides     4. H₂S и сульфиды
section-oxides       5. Оксиды SO₂ и SO₃
section-h2so4        6. Серная кислота
section-salts        7. Сульфаты и олеум
section-industry     8. Контактный способ
section-molecules-3d 9. 3D-модели веществ
```

- Quick-nav тройка: `Atom` / `TestTube` / `Orbit` (цели — в `SulfurOxygenHeader.tsx`).
- Разделов теории: 9 (заключительный — 3D).

## Вещества, 2D и 3D

- 2D-схемы: тёмные плитки на `SO_DIAGRAMS` (`SulfurOxygen2DRenders.tsx`) — эталон тёмной темы `MolecularDiagram2D`.
- 3D-модели (id в `molecules.ts`): `o2, o3, h2o, h2o2, h2s, so2, so3, h2so4, s8` (9 моделей; не добавлять в `DEFAULT_HOME_MOLECULES`).

## Практикум

- `trainerIds`: `ovr-29`, `inorg-31-np`, `reactions-np`.
- Переход: `openStudyBlock('elements-chemistry', 'elem-nonme-so', 'practice')`.

## Осознанные отклонения от стандарта

| Отклонение | Обоснование | Дата |
|---|---|---|
| — (тема сама является эталоном стандарта) | — | — |

## Уроки для будущих тем

- Тема-эталон финального стандарта дизайна: шапка 4 блока, статическая модалка, живые SVG-превью, `TheoryCallout`, `DarkBlockCard`.
- Id секций закреплены в стандарте (`section-molecules-3d` для финального 3D-раздела).

## Отчёты

- Тема создана до введения формата отчётов в репозитории; вердикты конвейера зафиксированы в истории коммитов.
