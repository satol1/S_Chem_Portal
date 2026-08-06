# Паспорт темы: «Строение атома и Периодический закон»

> Паспорт создан на шаге 0 конвейера ([`../topic-standard/00-PIPELINE.md`](../topic-standard/00-PIPELINE.md) §2). Тема развивается из лёгкого каркаса ОХ-02 в первую полную тему семейства «Общая химия».

- **Статус**: каркас существует; в работе — полное наполнение (по решению пользователя 2026-08-06: полный уровень, как в ХЭ, с 3D-разделом)
- **Дата последнего обновления**: 2026-08-06

## Паспортные данные

| Поле | Значение |
|---|---|
| Название | Строение атома и Периодический закон |
| slug (папка) | `atomStructure` |
| id | `gen-atom-structure` |
| Код | ОХ-02 |
| blockId | `general-chemistry` |
| Семейный профиль | [`topic-types/general-topic.md`](../topic-standard/topic-types/general-topic.md) (обновляется по «Правилу развития семейства») |
| UI | `src/components/study/topics/atomStructure/` (TheoryView, Header, Sections, DarkBlocks, FunFacts, 2DRenders) + ре-экспорт `topics/AtomStructureTheoryView.tsx` |

## Структура

Id секций (сохранять при рефакторинге!):

```
section-atom-models            2.1. Модели строения атома (Томсон, Резерфорд, Бор, квантово-механическая)
section-quantum-numbers        2.2. Квантовые числа (n, l, ml, ms)
section-orbitals               2.3. Атомные орбитали: формы и энергия (s, p, d)
section-electron-configs       2.4. Электронные конфигурации (Паули, Клечковский, Хунд, «провал»)
section-nucleus-radioactivity  2.5. Атомное ядро, изотопы и радиоактивность
section-periodic-law           2.6. Периодический закон и периодическая система
section-periodic-trends        2.7. Периодические закономерности свойств
section-molecules-3d           2.8. 3D-модели простых молекул (геометрия и гибридизация)
```

- Quick-nav тройка: квантовые числа → `Atom`, электронные конфигурации → `TestTube`, 3D-модели → `Orbit`.
- Разделов теории: 8 (заключительный — 3D). Каркас имел 6 секций; добавлены `section-orbitals` и `section-molecules-3d`, нумерация 2.1–2.8.

## Вещества, 2D и 3D

- Вещества темы: простые молекулы для демонстрации геометрии/гибридизации (H₂O, NH₃, CH₄, CO₂, CO, O₂, H₂O₂, HF, HCl).
- 2D-схемы (план, типы рендера `AtomStructure2DRender`): `rutherford` (опыт Резерфорда), `bohr-model` (электронные слои атома натрия), `orbital-shapes` (формы s- и p-орбиталей), `klechkovsky` (порядок заполнения подуровней), `decay-modes` (α- и β-распад), `periodic-trends` (стрелки закономерностей радиуса/ЭО).
- 3D-модели (id в `molecules.ts`, все уже зарегистрированы — новые не добавляются): `ch4, nh3, h2o, co2, co, o2, h2o2, hf, hcl` (9 моделей; не добавлять в `DEFAULT_HOME_MOLECULES`).

## Практикум

- `trainerIds`: `np-test-14-1` (общий тестовый тренажёр семейства ОХ; тематические тренажёры не создаются).
- Переход: `openStudyBlock('general-chemistry', 'gen-atom-structure', 'practice')`.

## Осознанные отклонения от стандарта

| Отклонение | Обоснование | Дата |
|---|---|---|
| Первая полная ОХ-тема: DarkBlocks/FunFacts/2DRenders/3D-раздел в семействе ОХ | Решение пользователя 2026-08-06; профиль `general-topic.md` обновлён по «Правилу развития семейства» | 2026-08-06 |
| 3D-модели — уже существующие id, новые не регистрируются | Тема о строении атома; простые молекулы иллюстрируют геометрию и гибридизацию | 2026-08-06 |

## Уроки для будущих тем

- (заполняется на шагах 7/9)

## Отчёты

- Верификация: [`reports/atom-structure-verification-report.md`](reports/atom-structure-verification-report.md)
- Постпроверка: [`reports/atom-structure-postcheck-report.md`](reports/atom-structure-postcheck-report.md)
