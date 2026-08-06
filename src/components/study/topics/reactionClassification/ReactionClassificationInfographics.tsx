import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { InfographicFigure, type InfographicSpec } from '../../../scientific/svg/InfographicFigure';
import { getInfoCategoryColor } from '../../../../utils/molecule2DTheme';

// ═══════════════════════════════════════
// Концептуальные инфографики темы ОХ-05 «Классификация химических реакций».
// Схемы описываются данными (спек) и рендерятся централизованным
// InfographicFigure: компактный светлый формат, блоки авторазмеряются
// по тексту, справочные данные — в акцентной панели справа, подпись —
// ключевой вывод. Без модальных окон. Эталон — GeneralBasicsInfographics.tsx.
// ═══════════════════════════════════════

/** 1. Сводное дерево классификационных признаков реакций (секция 5.1) */
const CLASSIFICATION_TREE_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: 0, title: 'Химическая реакция', shape: 'hub', color: 'amber' },
    {
      id: 'number', x: -185, y: -75, title: 'Число и состав', color: 'blue',
      lines: ['соединение, разложение,', 'замещение, обмен'],
    },
    {
      id: 'phase', x: -185, y: 0, title: 'Фазовый состав', color: 'teal',
      lines: ['гомогенные,', 'гетерогенные'],
    },
    {
      id: 'transfer', x: -185, y: 75, title: 'Перенос частиц', color: 'purple',
      lines: ['ОВР, кислотно-основные,', 'ионный обмен'],
    },
    {
      id: 'thermal', x: 185, y: -75, title: 'Тепловой эффект', color: 'red',
      lines: ['экзотермические (+Q),', 'эндотермические (−Q)'],
    },
    {
      id: 'reversibility', x: 185, y: 0, title: 'Обратимость', color: 'green',
      lines: ['обратимые,', 'необратимые'],
    },
    {
      id: 'catalysis', x: 185, y: 75, title: 'Катализ', color: 'ochre',
      lines: ['каталитические,', 'некаталитические'],
    },
  ],
  edges: [
    { from: 'root', to: 'number' },
    { from: 'root', to: 'phase' },
    { from: 'root', to: 'transfer' },
    { from: 'root', to: 'thermal' },
    { from: 'root', to: 'reversibility' },
    { from: 'root', to: 'catalysis' },
  ],
};

export const ReactionsClassificationTreeInfographic: React.FC = () => (
  <InfographicFigure
    title="Сводное дерево классификационных признаков химических реакций"
    spec={CLASSIFICATION_TREE_SPEC}
    legend={[
      { color: getInfoCategoryColor('amber'), label: 'классифицируемый объект' },
      { color: getInfoCategoryColor('blue'), label: 'число и состав' },
      { color: getInfoCategoryColor('teal'), label: 'фазовый состав' },
      { color: getInfoCategoryColor('purple'), label: 'перенос частиц' },
      { color: getInfoCategoryColor('red'), label: 'тепловой эффект' },
      { color: getInfoCategoryColor('green'), label: 'обратимость' },
      { color: getInfoCategoryColor('ochre'), label: 'катализ' },
    ]}
    reference={{
      items: [
        { label: 'Многомерность классификации', value: 'Одна реакция характеризуется сразу всеми независимыми признаками', accent: true },
        { label: 'Пример: синтез аммиака', value: 'N₂ + 3H₂ ⇄ 2NH₃ — соединение, гомогенная, ОВР, экзотермическая, обратимая, каталитическая' },
        { label: 'Независимость признаков', value: 'признаки не выводятся друг из друга: экзотермическая реакция может быть и быстрой, и очень медленной' },
      ],
    }}
    caption={
      <>
        Любая химическая реакция одновременно классифицируется по нескольким независимым критериям:
        составу участников, фазовому состоянию, типу переносимых частиц, тепловому эффекту, обратимости
        и участию катализатора.
      </>
    }
  />
);

/** 2. Фазовый состав: гомогенные и гетерогенные реакции (секция 5.3) */
const PHASE_COMPOSITION_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: -80, title: 'Фазовый состав реакционной смеси', color: 'amber' },
    {
      id: 'homo', x: -125, y: 0, title: 'Гомогенные', color: 'teal',
      lines: ['реагенты в одной фазе:', 'газы или истинные растворы'],
    },
    {
      id: 'hetero', x: 125, y: 0, title: 'Гетерогенные', color: 'ochre',
      lines: ['реагенты в разных фазах:', 'реакция на границе раздела'],
    },
    { id: 'h1', x: -185, y: 75, title: 'газ + газ', color: 'teal' },
    { id: 'h2', x: -70, y: 75, title: 'раствор + раствор', color: 'teal' },
    { id: 'g1', x: 70, y: 75, title: 'твёрдое + газ', color: 'ochre' },
    { id: 'g2', x: 190, y: 75, title: 'твёрдое + раствор', color: 'ochre' },
  ],
  edges: [
    { from: 'root', to: 'homo' },
    { from: 'root', to: 'hetero' },
    { from: 'homo', to: 'h1' },
    { from: 'homo', to: 'h2' },
    { from: 'hetero', to: 'g1' },
    { from: 'hetero', to: 'g2' },
  ],
};

export const PhaseCompositionInfographic: React.FC = () => (
  <InfographicFigure
    title="Гомогенные и гетерогенные реакции"
    spec={PHASE_COMPOSITION_SPEC}
    legend={[
      { color: getInfoCategoryColor('amber'), label: 'классификационный признак' },
      { color: getInfoCategoryColor('teal'), label: 'гомогенная система' },
      { color: getInfoCategoryColor('ochre'), label: 'гетерогенная система' },
    ]}
    reference={{
      items: [
        {
          label: 'Пример гомогенной',
          value: <ChemFormula formula="2SO2(г) + O2(г) <=(V2O5)=> 2SO3(г)" className="font-semibold" />,
          accent: true,
        },
        {
          label: 'Пример гетерогенной',
          value: <ChemFormula formula="Zn(тв) + 2HCl(р-р) -> ZnCl2(р-р) + H2^" className="font-semibold" />,
          accent: true,
        },
        { label: 'Фаза', value: 'однородная часть системы с одинаковыми свойствами, отделённая поверхностью раздела' },
        { label: 'Место протекания', value: 'гомогенные — во всём объёме фазы; гетерогенные — на границе раздела фаз' },
      ],
    }}
    caption={
      <>
        Гомогенность определяется агрегатным состоянием и взаимной растворимостью реагентов: так, окисление
        SO₂ на твёрдом катализаторе V₂O₅ формально сочетает признаки — газовая фаза реагирует на поверхности
        твёрдого катализатора (гетерогенный катализ при гомогенной газовой фазе).
      </>
    }
  />
);

/** 3. Классификация по типу переносимых частиц (секция 5.4) */
const PARTICLE_TRANSFER_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: -85, title: 'Тип переносимых частиц', color: 'amber' },
    {
      id: 'redox', x: -165, y: 10, title: 'ОВР', color: 'red',
      lines: ['перенос электронов;', 'степени окисления изменяются:', 'Zn + CuSO₄ → ZnSO₄ + Cu'],
    },
    {
      id: 'acidbase', x: 0, y: 10, title: 'Кислотно-основные', color: 'blue',
      lines: ['перенос протона H⁺', '(Брёнстед — Лоури):', 'HCl + NaOH → NaCl + H₂O'],
    },
    {
      id: 'exchange', x: 165, y: 10, title: 'Ионный обмен (РИО)', color: 'green',
      lines: ['обмен ионами без изменения', 'степеней окисления:', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃'],
    },
  ],
  edges: [
    { from: 'root', to: 'redox', arrow: true },
    { from: 'root', to: 'acidbase', arrow: true },
    { from: 'root', to: 'exchange', arrow: true },
  ],
};

export const ParticleTransferInfographic: React.FC = () => (
  <InfographicFigure
    title="Классификация реакций по типу переносимых частиц"
    spec={PARTICLE_TRANSFER_SPEC}
    legend={[
      { color: getInfoCategoryColor('red'), label: 'перенос электронов' },
      { color: getInfoCategoryColor('blue'), label: 'перенос протона' },
      { color: getInfoCategoryColor('green'), label: 'обмен ионами' },
    ]}
    reference={{
      items: [
        { label: 'ОВР', value: 'окислитель принимает электроны, восстановитель отдаёт', accent: true },
        { label: 'Протолитическая теория', value: 'Брёнстед и Лоури, 1923 г.: кислота — донор H⁺, основание — акцептор H⁺' },
        { label: 'Условия полноты РИО', value: 'осадок ↓, газ ↑ или малодиссоциирующее вещество (H₂O)' },
        { label: 'Разграничение', value: 'реакции обмена идут без изменения степеней окисления и к ОВР не относятся' },
      ],
    }}
    caption={
      <>
        Природа элементарного акта переноса определяет класс реакции: перенос электрона — окислительно-восстановительные
        процессы, перенос протона — кислотно-основные, обмен ионами без изменения степеней окисления — реакции ионного обмена.
      </>
    }
  />
);

/** 4. Энергетические профили экзо- и эндотермических реакций (секция 5.5) */
const ENERGY_PROFILE_SPEC: InfographicSpec = {
  plots: {
    y: 0,
    gap: 24,
    items: [
      {
        title: 'Экзотермическая реакция',
        formula: '2H₂ + O₂ → 2H₂O + Q',
        xAxis: 'координата реакции',
        yAxis: 'энергия',
        curve: 'energy',
        profile: 'exo',
        color: 'green',
        height: 128,
      },
      {
        title: 'Эндотермическая реакция',
        formula: 'N₂ + O₂ ⇄ 2NO − Q',
        xAxis: 'координата реакции',
        yAxis: 'энергия',
        curve: 'energy',
        profile: 'endo',
        color: 'red',
        height: 128,
      },
    ],
  },
};

export const ThermalEffectsEnergyProfileInfographic: React.FC = () => (
  <InfographicFigure
    title="Энергетические профили реакций: энергия активации и тепловой эффект"
    spec={ENERGY_PROFILE_SPEC}
    legend={[
      { color: getInfoCategoryColor('green'), label: 'экзотермическая (+Q, ΔH < 0)' },
      { color: getInfoCategoryColor('red'), label: 'эндотермическая (−Q, ΔH > 0)' },
    ]}
    reference={{
      items: [
        { label: 'Связь Q и ΔH', value: 'Q = −ΔH: тепло выделяется при ΔH < 0 и поглощается при ΔH > 0', accent: true },
        { label: 'Энергия активации Ea', value: 'минимальная энергия, необходимая для преодоления барьера и разрыва связей реагентов' },
        { label: 'Исключение: эндотермическое соединение', value: 'N₂ + O₂ ⇄ 2NO − Q (≈ 181 кДж) — идёт только при очень высокой температуре' },
        { label: 'Исключение: экзотермическое разложение', value: '(NH₄)₂Cr₂O₇ → N₂ + Cr₂O₃ + 4H₂O + Q («химический вулкан»)' },
      ],
    }}
    caption={
      <>
        В экзотермических реакциях энергия продуктов ниже энергии реагентов (<ChemFormula math="\Delta H < 0" className="font-semibold" />,
        тепло выделяется), в эндотермических — выше (<ChemFormula math="\Delta H > 0" className="font-semibold" />,
        тепло поглощается); высота барьера определяет энергию активации <ChemFormula math="E_a" className="font-semibold" />.
      </>
    }
  />
);

/** 5. Механизмы разрыва ковалентной связи: гомолиз и гетеролиз (секция 5.8) */
const BOND_CLEAVAGE_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: -80, title: 'Разрыв ковалентной связи A:B', color: 'amber' },
    {
      id: 'homo', x: -125, y: 0, title: 'Гомолиз (радикальный)', color: 'red',
      lines: ['электронная пара делится поровну:', 'A:B → A• + B•'],
    },
    {
      id: 'hetero', x: 125, y: 0, title: 'Гетеролиз (ионный)', color: 'blue',
      lines: ['пара уходит к более', 'электроотрицательному атому:', 'A:B → A⁺ + :B⁻'],
    },
    {
      id: 'homo_ex', x: -125, y: 75, title: 'пример: CH₄ + Cl₂ →(hν) CH₃Cl + HCl', color: 'red',
    },
    {
      id: 'hetero_ex', x: 125, y: 75, title: 'пример: ионные реакции в растворах', color: 'blue',
    },
  ],
  edges: [
    { from: 'root', to: 'homo' },
    { from: 'root', to: 'hetero' },
    { from: 'homo', to: 'homo_ex', dashed: true },
    { from: 'hetero', to: 'hetero_ex', dashed: true },
  ],
};

export const BondCleavageMechanismInfographic: React.FC = () => (
  <InfographicFigure
    title="Механизмы разрыва ковалентной связи"
    spec={BOND_CLEAVAGE_SPEC}
    legend={[
      { color: getInfoCategoryColor('red'), label: 'радикальный (гомолитический) путь' },
      { color: getInfoCategoryColor('blue'), label: 'ионный (гетеролитический) путь' },
    ]}
    reference={{
      items: [
        { label: 'Свободный радикал', value: 'частица с неспаренным электроном (Cl•, CH₃•); высокореакционна', accent: true },
        { label: 'Условия гомолиза', value: 'свет (hν), высокая температура, газовая фаза, неполярные среды' },
        { label: 'Условия гетеролиза', value: 'полярные растворители, растворы электролитов' },
        { label: 'Цепные реакции', value: 'Н. Н. Семёнов, теория разветвлённых цепных реакций — Нобелевская премия 1956 г.' },
      ],
    }}
    caption={
      <>
        Гомолитический разрыв даёт свободные радикалы и характерен для реакций при облучении и нагревании
        (хлорирование метана), гетеролитический — даёт ионы и преобладает в растворах электролитов.
      </>
    }
  />
);
