# Паспорт темы: «Галогены (F, Cl, Br, I)»

- **Статус**: реализована, верифицирована, постпроверка пройдена (0 critical / 0 minor)
- **Дата последнего обновления**: 2026-08-05

## Паспортные данные

| Поле | Значение |
|---|---|
| Название | Галогены (F, Cl, Br, I) |
| slug (папка) | `halogens` |
| id | `elem-nonme-halogens` |
| Код | ХЭ-05 |
| blockId | `elements-chemistry` (подгруппа «Неметаллы (неMe)») |
| Семейный профиль | [`topic-types/element-topic.md`](../topic-standard/topic-types/element-topic.md) |
| UI | `src/components/study/topics/halogens/` (TheoryView, Header, Sections, DarkBlocks, FunFacts, 2DRenders) + ре-экспорт `topics/HalogensTheoryView.tsx` |

## Структура

Id секций (сохранять при рефакторинге!):

```
section-general        Общая характеристика подгруппы
section-simple         Простые вещества X₂
section-hx             Галогеноводороды HX
section-halides        Галогениды
section-redox          ОВР-свойства, диспропорционирование
section-oxyacids       Кислородсодержащие кислоты
section-fluorine       Особые свойства фтора
section-industry       Промышленный химизм
section-molecules-3d   3D-модели веществ
```

- Quick-nav тройка: `Atom` / `TestTube` / `Orbit`.
- Разделов теории: 9 (заключительный — 3D).

## Вещества, 2D и 3D

- 2D-схемы: тёмные плитки X₂/HX/кислот + **светлая панель X₂** (`HalogensX2LightPanel` в `Halogens2DRenders.tsx`) — один из двух эталонов светлых панелей стандарта (`20-RENDERING.md` §2.4).
- 3D-модели (id в `molecules.ts`): `f2, cl2, br2, i2, hcl, hf, hclo, hclo3, hclo4` (9 моделей; не добавлять в `DEFAULT_HOME_MOLECULES`).

## Практикум

- `trainerIds`: `reactions-np`, `inorg-31-np`, `ovr-29`.
- Переход: `openStudyBlock('elements-chemistry', 'elem-nonme-halogens', 'practice')`.

## Осознанные отклонения от стандарта

| Отклонение | Обоснование | Дата |
|---|---|---|
| — | — | — |

## Уроки для будущих тем

- Верификация: 90 ✅ / 7 ⚠️ / 1 ❌. Блокирующий ❌ (с.о. иода в H₅IO₆/IO₄⁻ — должно быть **+7**, а не +5) находился только в черновике, в код не попал. Применена поправка tкип Br₂ 58.6 → 58.8 °C; угол HClO ≈ 111° подтверждён 3D-конформером PubChem (CID 24341, 110.4°).
- Технические следствия (уже в коде): в `threeMoleculeRenderer.ts` добавлены F/Br/I в `ELEMENT_INFO`; в парсер `ChemFormula.tsx` добавлены автозамены катализаторов FeBr₃/AlBr₃.
- Светлая панель X₂ закреплена в стандарте как паттерн «несколько формул в одном блоке».
- Урок по коммитам: сопутствующая работа, переплетённая через общие файлы (molecules.ts, StudyTopicTheoryPage.tsx, ChemFormula.tsx, threeMoleculeRenderer.ts), требует точечного staging — `git add` только файлов темы.

## Отчёты

- Верификация: [`reports/halogens-verification-report.md`](reports/halogens-verification-report.md)
- Постпроверка: [`reports/halogens-postcheck-report.md`](reports/halogens-postcheck-report.md) (0 critical / 0 minor; build, lint, `scripts/audit-formulas.mjs` — 0 ошибок)
