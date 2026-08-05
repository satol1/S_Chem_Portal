# S_Chem_Portal

Образовательный интерактивный портал по химии: подготовка к ЕГЭ/ОГЭ/ВсОШ/ДВИ МГУ. React + TypeScript + Vite, Tailwind CSS v4, KaTeX, Three.js.

## Документация

- [`QWEN.md`](QWEN.md) — сводка конвенций проекта и маршрутизация по документации (автозагрузка в сессиях ИИ-агентов).
- [`docs/topic-standard/00-PIPELINE.md`](docs/topic-standard/00-PIPELINE.md) — стандарт создания учебных тем: конвейер, архитектура, рендеринг, дизайн.
- [`docs/topic-standard/topic-types/`](docs/topic-standard/topic-types/) — профили семейств тем: «Химия элементов» (ХЭ-NN) и «Общая химия» (ОХ-NN).
- [`docs/topic-passports/`](docs/topic-passports/) — паспорта тем: уникальные детали, отклонения, отчёты верификации.
- [`ARCHITECTURE_AND_ROADMAP.md`](ARCHITECTURE_AND_ROADMAP.md) — архитектура, правила кода и роадмап проекта.

Ролевые агенты конвейера тем: [`.qwen/agents/topic-verifier.md`](.qwen/agents/topic-verifier.md) (научная верификация), [`.qwen/agents/topic-proofreader.md`](.qwen/agents/topic-proofreader.md) (постпроверка).

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
