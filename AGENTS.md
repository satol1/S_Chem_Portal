# AGENTS.md — S_Chem_Portal

Шим для инструментов, читающих стандарт AGENTS.md (Kimi CLI, Codex, Cursor, Cline, OpenCode и др.). Контекстный файл проекта — [`QWEN.md`](QWEN.md): прочитай его и соблюдай полностью (маршрутизация по задачам, сводка стандарта тем, жёсткие запреты). Данный файл — только шим автозагрузки и норм не содержит.

- Новая учебная тема: [`TOPIC_CREATION_PROMPT.md`](TOPIC_CREATION_PROMPT.md) → конвейер [`docs/topic-standard/00-PIPELINE.md`](docs/topic-standard/00-PIPELINE.md).
- Запуск конвейера вне Qwen Code: [`docs/topic-standard/90-OTHER-AGENTS.md`](docs/topic-standard/90-OTHER-AGENTS.md).
- Команды: сборка `npm run build`, линтер `npm run lint`, аудит формул `node scripts/audit-formulas.mjs`.
