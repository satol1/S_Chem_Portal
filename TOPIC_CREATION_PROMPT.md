# TOPIC_CREATION_PROMPT — DEPRECATED (перенесён в модульный стандарт)

> **Статус**: файл устарел и оставлен как указатель на один цикл разработки. Содержимое разнесено по модулям стандарта создания тем — они являются единственным источником норм.

## Куда переехал стандарт

| Модуль | Содержание (бывшие разделы монолита) |
|---|---|
| [`docs/topic-standard/00-PIPELINE.md`](docs/topic-standard/00-PIPELINE.md) | Конвейер: три роли агентов, пошаговый чек-лист, эталонные реализации (бывш. §1, §9, §10) |
| [`docs/topic-standard/10-ARCHITECTURE.md`](docs/topic-standard/10-ARCHITECTURE.md) | Модульная структура темы, регистрация, DRY-каталог, чистота кода (бывш. §2) |
| [`docs/topic-standard/20-RENDERING.md`](docs/topic-standard/20-RENDERING.md) | Формулы KaTeX/ChemFormula, 2D-схемы, 3D-модели (бывш. §3, §4, §5) |
| [`docs/topic-standard/30-DESIGN.md`](docs/topic-standard/30-DESIGN.md) | Дизайн-система: шрифты, палитра, каркасы, шапка, таблицы, иконки, объёмы (бывш. §6) |
| [`docs/topic-standard/topic-types/`](docs/topic-standard/topic-types/) | Семейные профили тем: «Химия элементов» (ХЭ-NN), «Общая химия» (ОХ-NN) |
| [`.qwen/agents/topic-verifier.md`](.qwen/agents/topic-verifier.md) | Ролевой агент научной верификации (бывш. §7) |
| [`.qwen/agents/topic-proofreader.md`](.qwen/agents/topic-proofreader.md) | Ролевой агент постпроверки (бывш. §8) |
| [`QWEN.md`](QWEN.md) | Сводка стандарта «на одном экране» (бывш. §0) |
| [`docs/topic-passports/`](docs/topic-passports/) | Паспорта тем: уникальные детали, отклонения, уроки, отчёты |

Новые темы создаются по [`docs/topic-standard/00-PIPELINE.md`](docs/topic-standard/00-PIPELINE.md). Данный файл будет удалён после завершения следующего цикла создания темы.
