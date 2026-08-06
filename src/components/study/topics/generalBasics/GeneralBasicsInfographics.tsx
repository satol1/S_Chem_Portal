import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { InfographicFigure, type InfographicSpec } from '../../../scientific/svg/InfographicFigure';
import { getInfoCategoryColor } from '../../../../utils/molecule2DTheme';

// ═══════════════════════════════════════
// Концептуальные инфографики темы ОХ-01 «Основные понятия и законы химии».
// Схемы описываются данными (спек) и рендерятся централизованным
// InfographicFigure: компактный светлый формат, блоки авторазмеряются
// по тексту, справочные данные — в акцентной панели справа, подпись —
// ключевой вывод. Без модальных окон.
// ═══════════════════════════════════════

/** Классификация веществ и смесей (секция 1.1) */
const MIXTURES_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: -50, title: 'Вещества и смеси', color: 'amber' },
    { id: 'pure', x: -95, y: 0, title: 'Чистое вещество', color: 'blue' },
    { id: 'mixture', x: 85, y: 0, title: 'Смесь (2+ компонента)', color: 'ochre' },
    { id: 'homo', x: -15, y: 50, title: 'Однородные (гомогенные)', color: 'green' },
    { id: 'hetero', x: 215, y: 50, title: 'Неоднородные (гетерогенные)', color: 'red' },
  ],
  edges: [
    { from: 'root', to: 'pure' },
    { from: 'root', to: 'mixture' },
    { from: 'mixture', to: 'homo' },
    { from: 'mixture', to: 'hetero' },
  ],
};

export const MixturesClassificationInfographic: React.FC = () => (
  <InfographicFigure
    title="Классификация веществ и смесей"
    spec={MIXTURES_SPEC}
    legend={[
      { color: getInfoCategoryColor('blue'), label: 'чистое вещество' },
      { color: getInfoCategoryColor('ochre'), label: 'смесь' },
      { color: getInfoCategoryColor('green'), label: 'гомогенная' },
      { color: getInfoCategoryColor('red'), label: 'гетерогенная' },
    ]}
    reference={{
      items: [
        { label: 'Состав воздуха', value: 'N₂ ≈ 78 %, O₂ ≈ 21 %, Ar ≈ 0.93 %, CO₂ ≈ 0.04 % по объёму', accent: true },
        { label: 'Критерий чистого вещества', value: 'постоянный состав и свойства; вода кипит при 100 °C строго при 101.325 кПа' },
        { label: 'Примеры чистых веществ', value: 'вода H₂O, медь Cu, кислород O₂, NaCl' },
        { label: 'Хроматография', value: 'М. С. Цвет, 1903 г. — разделение по сорбируемости' },
      ],
    }}
    caption={
      <>
        Компоненты смесей не связаны химически и сохраняют свои свойства, поэтому их разделяют физическими
        методами: фильтрацией, отстаиванием, дистилляцией, кристаллизацией, хроматографией и действием магнита.
      </>
    }
  />
);

/** Закон кратных отношений: бары массы кислорода в оксидах азота (секция 1.6) */
const MULTIPLE_PROPORTIONS_SPEC: InfographicSpec = {
  bars: {
    baselineY: 8,
    barWidth: 32,
    gap: 20,
    unit: 1.6,
    valueSuffix: ' г',
    items: [
      { label: 'N₂O', value: 8, badge: '×1', color: 'blue' },
      { label: 'NO', value: 16, badge: '×2', color: 'teal' },
      { label: 'N₂O₃', value: 24, badge: '×3', color: 'ochre' },
      { label: 'NO₂', value: 32, badge: '×4', color: 'orange' },
      { label: 'N₂O₅', value: 40, badge: '×5', color: 'red' },
    ],
  },
  notes: [
    { x: 0, y: -84, text: 'Масса кислорода, приходящаяся на 14 г азота', tone: 'ink', fontSize: 11, bold: true },
    { x: 0, y: 60, text: 'Отношение масс кислорода: 1 : 2 : 3 : 4 : 5', tone: 'accent', fontSize: 10, bold: true },
  ],
};

export const MultipleProportionsInfographic: React.FC = () => (
  <InfographicFigure
    title="Закон кратных отношений: оксиды азота"
    spec={MULTIPLE_PROPORTIONS_SPEC}
    reference={{
      items: [
        { label: 'Закон', value: 'кратных отношений — Дж. Дальтон, 1803 г.', accent: true },
        { label: 'Массы O на 14 г N', value: '8, 16, 24, 32, 40 г для N₂O, NO, N₂O₃, NO₂, N₂O₅' },
        { label: 'Отношение кислорода', value: '1 : 2 : 3 : 4 : 5 — небольшие целые числа', accent: true },
        { label: 'Формулировка', value: 'массы одного элемента, приходящиеся на одну и ту же массу другого, относятся как небольшие целые числа' },
      ],
    }}
    caption={
      <>
        Отношение масс кислорода в ряду оксидов — 1 : 2 : 3 : 4 : 5, небольшие целые числа: прямое следствие
        дискретности атомов.
      </>
    }
  />
);

/** Газовые законы: изопроцессы идеального газа (секция 1.10) */
const GAS_LAWS_SPEC: InfographicSpec = {
  plots: {
    y: -52,
    gap: 16,
    items: [
      { title: 'Бойль — Мариотт', formula: 'pV = const (T)', xAxis: 'V', yAxis: 'p', curve: 'hyperbola', color: 'blue' },
      { title: 'Гей-Люссак', formula: 'V/T = const (p)', xAxis: 'T', yAxis: 'V', curve: 'linear', color: 'green' },
      { title: 'Шарль', formula: 'p/T = const (V)', xAxis: 'T', yAxis: 'p', curve: 'linear', color: 'red' },
    ],
  },
  nodes: [
    {
      id: 'cm',
      x: 0,
      y: 80,
      title: 'Уравнение Клапейрона — Менделеева',
      lines: ['pV = nRT'],
      color: 'amber',
    },
  ],
};

export const GasLawsInfographic: React.FC = () => (
  <InfographicFigure
    title="Газовые законы: изопроцессы идеального газа"
    spec={GAS_LAWS_SPEC}
    reference={{
      items: [
        { label: 'Газовая постоянная', value: 'R = 8.314 Дж/(моль·К) = 0.08206 л·атм/(моль·К)', accent: true },
        { label: 'Нормальные условия', value: '0 °C (273.15 К), 101.325 кПа (1 атм = 760 мм рт. ст.)' },
        { label: 'Молярный объём', value: 'Vm = 22.4 л/моль при н. у.' },
        { label: 'Авторы законов', value: 'Бойль (1662), Мариотт (1676); Гей-Люссак (1802); Шарль (1787); Клапейрон (1834); Менделеев (1874)' },
      ],
    }}
    caption={
      <>
        При фиксации одного из параметров уравнение состояния идеального газа вырождается в частный закон:
        изотерму Бойля — Мариотта (<ChemFormula math="T = \text{const}" className="font-semibold" />),
        изобару Гей-Люссака (<ChemFormula math="p = \text{const}" className="font-semibold" />) или
        изохору Шарля (<ChemFormula math="V = \text{const}" className="font-semibold" />).
      </>
    }
  />
);
