# Паспорт темы: <название темы>

> Паспорт создаётся на шаге 0 конвейера ([`../topic-standard/00-PIPELINE.md`](../topic-standard/00-PIPELINE.md) §2), обновляется на шагах 7/9 и остаётся в репозитории навсегда. При любых правках темы агент сначала читает этот паспорт.

- **Статус**: каркас / наполнена / верифицирована / постпроверка пройдена
- **Дата последнего обновления**: YYYY-MM-DD

## Паспортные данные

| Поле | Значение |
|---|---|
| Название | |
| slug (папка) | `<topicSlug>` |
| id | `<block-specific-id>` |
| Код | ХЭ-NN / ОХ-NN |
| blockId | `elements-chemistry` / `general-chemistry` |
| Семейный профиль | [`topic-types/element-topic.md`](../topic-standard/topic-types/element-topic.md) / [`general-topic.md`](../topic-standard/topic-types/general-topic.md) |
| UI | `src/components/study/topics/<topicSlug>/` + ре-экспорт |

## Структура

- План разделов и их id (сохранять при рефакторинге!): `section-...`, ...
- Quick-nav тройка: `<цель>` → иконка, ...
- Разделов теории: N

## Вещества, 2D и 3D

- Вещества темы: ...
- 2D-схемы (типы рендера): ...
- 3D-модели (id в `molecules.ts`): ... (не добавлять в `DEFAULT_HOME_MOLECULES`)

## Практикум

- `trainerIds`: ...
- Файлы данных: ...

## Осознанные отклонения от стандарта

| Отклонение | Обоснование | Дата |
|---|---|---|
| — | — | — |

## Уроки для будущих тем

- ...

## Отчёты

- Верификация: [`reports/<slug>-verification-report.md`](reports/)
- Постпроверка: [`reports/<slug>-postcheck-report.md`](reports/)
