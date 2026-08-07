import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { InfographicFigure, type InfographicSpec } from '../../../scientific/svg/InfographicFigure';
import { getInfoCategoryColor } from '../../../../utils/molecule2DTheme';

// ═══════════════════════════════════════
// Концептуальные инфографики темы ОХ-06 «Окислительно-восстановительные
// реакции». Схемы описываются данными (спек) и рендерятся централизованным
// InfographicFigure: компактный светлый формат, блоки авторазмеряются
// по тексту, справочные данные — в акцентной панели справа, подпись —
// ключевой вывод. Без модальных окон. Эталон — ReactionClassificationInfographics.tsx.
// ═══════════════════════════════════════

/** 1. Продукты восстановления KMnO4 в зависимости от среды (секция 6.2) */
const KMNO4_MEDIA_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: 0, title: 'MnO₄⁻ • марганец +7', shape: 'hub', color: 'purple', lines: ['фиолетовый раствор'] },
    {
      id: 'acid', x: -195, y: -85, title: 'Кислая среда (H⁺)', color: 'red',
      lines: ['продукт: Mn²⁺ (+2)', 'бесцветный (бледно-розовый)', 'принимает 5 e⁻'],
    },
    {
      id: 'neutral', x: 195, y: -85, title: 'Нейтральная среда', color: 'teal',
      lines: ['продукт: MnO₂ (+4)', 'бурый осадок', 'принимает 3 e⁻'],
    },
    {
      id: 'alkali', x: 0, y: 110, title: 'Сильнощелочная среда (OH⁻)', color: 'green',
      lines: ['продукт: MnO₄²⁻ (+6)', 'зелёный раствор', 'принимает 1 e⁻'],
    },
  ],
  edges: [
    { from: 'root', to: 'acid', arrow: true, label: '+5e⁻' },
    { from: 'root', to: 'neutral', arrow: true, label: '+3e⁻' },
    { from: 'root', to: 'alkali', arrow: true, label: '+1e⁻' },
  ],
};

export const PermanganateMediaInfographic: React.FC = () => (
  <InfographicFigure
    title="Продукты восстановления перманганата калия в зависимости от среды"
    spec={KMNO4_MEDIA_SPEC}
    legend={[
      { color: getInfoCategoryColor('purple'), label: 'перманганат-ион (Mn⁺⁷)' },
      { color: getInfoCategoryColor('red'), label: 'кислая среда' },
      { color: getInfoCategoryColor('teal'), label: 'нейтральная среда' },
      { color: getInfoCategoryColor('green'), label: 'щелочная среда' },
    ]}
    reference={{
      title: 'Индикаторные превращения',
      items: [
        { label: 'Глубина восстановления', value: 'чем кислее среда, тем больше электронов принимает марганец: +7 → +2 → +4 → +6', accent: true },
        { label: 'Кислая среда', value: <ChemFormula math="\mathrm{MnO_4^- + 8H^+ + 5e^- \rightarrow Mn^{2+} + 4H_2O}" /> },
        { label: 'Нейтральная среда', value: <ChemFormula math="\mathrm{MnO_4^- + 2H_2O + 3e^- \rightarrow MnO_2\downarrow + 4OH^-}" /> },
        { label: 'Щелочная среда', value: <ChemFormula math="\mathrm{MnO_4^- + e^- \rightarrow MnO_4^{2-}}" /> },
      ],
    }}
    caption={
      <>
        Перманганат калия — «химический хамелеон»: окраска раствора при восстановлении меняется
        от фиолетовой к бледно-розовой (кислота), бурой (нейтральная среда) или зелёной (щёлочь).
      </>
    }
  />
);

/** 2. Электрохимический ряд активности металлов (секция 6.5) */
const ACTIVITY_SERIES_SPEC: InfographicSpec = {
  nodes: [
    { id: 'li', x: -165, y: -80, title: 'Li', color: 'teal', lines: ['−3.04'] },
    { id: 'k', x: -110, y: -80, title: 'K', color: 'teal', lines: ['−2.93'] },
    { id: 'ba', x: -55, y: -80, title: 'Ba', color: 'teal', lines: ['−2.91'] },
    { id: 'ca', x: 0, y: -80, title: 'Ca', color: 'teal', lines: ['−2.87'] },
    { id: 'na', x: 55, y: -80, title: 'Na', color: 'teal', lines: ['−2.71'] },
    { id: 'mg', x: 110, y: -80, title: 'Mg', color: 'teal', lines: ['−2.37'] },
    { id: 'al', x: 165, y: -80, title: 'Al', color: 'teal', lines: ['−1.66'] },
    { id: 'mn', x: -196, y: 0, title: 'Mn', color: 'blue', lines: ['−1.18'] },
    { id: 'zn', x: -140, y: 0, title: 'Zn', color: 'blue', lines: ['−0.76'] },
    { id: 'cr', x: -84, y: 0, title: 'Cr', color: 'blue', lines: ['−0.74'] },
    { id: 'fe', x: -28, y: 0, title: 'Fe', color: 'blue', lines: ['−0.44'] },
    { id: 'ni', x: 28, y: 0, title: 'Ni', color: 'blue', lines: ['−0.26'] },
    { id: 'sn', x: 84, y: 0, title: 'Sn', color: 'blue', lines: ['−0.14'] },
    { id: 'pb', x: 140, y: 0, title: 'Pb', color: 'blue', lines: ['−0.13'] },
    { id: 'h2', x: 196, y: 0, title: 'H₂', color: 'red', lines: ['0.00'] },
    { id: 'cu', x: -112, y: 80, title: 'Cu', color: 'amber', lines: ['+0.34'] },
    { id: 'hg', x: -56, y: 80, title: 'Hg', color: 'amber', lines: ['+0.85'] },
    { id: 'ag', x: 0, y: 80, title: 'Ag', color: 'amber', lines: ['+0.80'] },
    { id: 'pt', x: 56, y: 80, title: 'Pt', color: 'amber', lines: ['+1.19'] },
    { id: 'au', x: 112, y: 80, title: 'Au', color: 'amber', lines: ['+1.50'] },
  ],
  edges: [
    { from: 'li', to: 'k' }, { from: 'k', to: 'ba' }, { from: 'ba', to: 'ca' },
    { from: 'ca', to: 'na' }, { from: 'na', to: 'mg' }, { from: 'mg', to: 'al' },
    { from: 'al', to: 'mn', dashed: true },
    { from: 'mn', to: 'zn' }, { from: 'zn', to: 'cr' }, { from: 'cr', to: 'fe' },
    { from: 'fe', to: 'ni' }, { from: 'ni', to: 'sn' }, { from: 'sn', to: 'pb' },
    { from: 'pb', to: 'h2' },
    { from: 'h2', to: 'cu', dashed: true },
    { from: 'cu', to: 'hg' }, { from: 'hg', to: 'ag' }, { from: 'ag', to: 'pt' },
    { from: 'pt', to: 'au' },
  ],
  notes: [
    { x: 0, y: -130, text: 'восстановительная способность металлов убывает →', tone: 'accent', bold: true, fontSize: 11 },
    { x: 196, y: 42, text: 'эталон: водородный электрод', tone: 'muted', fontSize: 9 },
  ],
};

export const ActivitySeriesInfographic: React.FC = () => (
  <InfographicFigure
    title="Электрохимический ряд активности металлов (значения E°, В)"
    spec={ACTIVITY_SERIES_SPEC}
    legend={[
      { color: getInfoCategoryColor('teal'), label: 'активные металлы (Li–Al)' },
      { color: getInfoCategoryColor('blue'), label: 'металлы средней активности (Mn–Pb)' },
      { color: getInfoCategoryColor('red'), label: 'водород — точка отсчёта' },
      { color: getInfoCategoryColor('amber'), label: 'благородные металлы (Cu–Au)' },
    ]}
    reference={{
      title: 'Следствия ряда',
      items: [
        { label: 'Вытеснение водорода', value: 'металлы левее H₂ вытесняют его из разбавленных растворов кислот; правее H₂ — не вытесняют', accent: true },
        { label: 'Вытеснение металлов', value: 'более активный металл (левее) вытесняет менее активный из раствора его соли' },
        { label: 'Порядок Cu–Hg–Ag', value: 'школьная запись ряда Бекетова; строго по E° серебро (+0.80 В) стоит перед ртутью (+0.85 В)' },
      ],
    }}
    caption={
      <>
        Ряд составлен по возрастанию стандартных электродных потенциалов E°(Mⁿ⁺/M):
        слева направо металлы всё слабее отдают электроны, а их ионы всё легче восстанавливаются.
      </>
    }
  />
);

/** 3. Схема электролизёра (секция 6.6) */
const ELECTROLYZER_SPEC: InfographicSpec = {
  nodes: [
    { id: 'source', x: 0, y: -110, title: 'Источник постоянного тока', shape: 'hub', color: 'amber' },
    {
      id: 'cathode', x: -175, y: -10, title: 'Катод (−)', color: 'teal',
      lines: ['восстановление', 'катионы принимают e⁻'],
    },
    {
      id: 'anode', x: 175, y: -10, title: 'Анод (+)', color: 'red',
      lines: ['окисление', 'анионы отдают e⁻'],
    },
    {
      id: 'cations', x: -175, y: 95, title: 'Катионы Meⁿ⁺, H⁺', color: 'blue',
      lines: ['мигрируют к катоду'],
    },
    {
      id: 'anions', x: 175, y: 95, title: 'Анионы кислотных остатков, OH⁻', color: 'purple',
      lines: ['мигрируют к аноду'],
    },
  ],
  edges: [
    { from: 'source', to: 'cathode', label: '−' },
    { from: 'source', to: 'anode', label: '+' },
    { from: 'cations', to: 'cathode', arrow: true, label: 'разряд' },
    { from: 'anions', to: 'anode', arrow: true, label: 'разряд' },
  ],
};

export const ElectrolyzerInfographic: React.FC = () => (
  <InfographicFigure
    title="Устройство электролизёра: электроды и миграция ионов"
    spec={ELECTROLYZER_SPEC}
    legend={[
      { color: getInfoCategoryColor('amber'), label: 'источник тока' },
      { color: getInfoCategoryColor('teal'), label: 'катод — восстановление' },
      { color: getInfoCategoryColor('red'), label: 'анод — окисление' },
    ]}
    reference={{
      title: 'Пример: расплав NaCl',
      items: [
        { label: 'Катод', value: <ChemFormula math="\mathrm{Na^+ + e^- \rightarrow Na^0}" /> },
        { label: 'Анод', value: <ChemFormula math="\mathrm{2Cl^- - 2e^- \rightarrow Cl_2\uparrow}" /> },
        { label: 'Суммарно', value: <ChemFormula math="\mathrm{2NaCl \xrightarrow{\text{электролиз}} 2Na + Cl_2\uparrow}" />, accent: true },
      ],
    }}
    caption={
      <>
        Электролиз — окислительно-восстановительная реакция, идущая под действием электрического тока:
        катионы восстанавливаются на катоде, анионы окисляются на аноде.
      </>
    }
  />
);

/** 4. Дерево выбора процессов на электродах в водных растворах (секция 6.7) */
const ELECTROLYSIS_SOLUTIONS_TREE_SPEC: InfographicSpec = {
  nodes: [
    { id: 'root', x: 0, y: -125, title: 'Электролиз водного раствора (инертные электроды)', shape: 'hub', color: 'amber' },
    { id: 'cathode', x: -240, y: -30, title: 'Катод (−): восстановление', color: 'teal' },
    { id: 'anode', x: 205, y: -30, title: 'Анод (+): окисление', color: 'red' },
    {
      id: 'c-noble', x: -395, y: 85, title: 'Me правее H₂', color: 'teal',
      lines: ['ион восстанавливается:', 'Cu²⁺, Hg²⁺, Ag⁺ → Me⁰'],
    },
    {
      id: 'c-middle', x: -240, y: 85, title: 'Me от Mn до Pb', color: 'teal',
      lines: ['одновременно', 'Me⁰ и H₂'],
    },
    {
      id: 'c-active', x: -80, y: 85, title: 'Me левее Al (Li–Al)', color: 'teal',
      lines: ['восстанавливается вода:', '2H₂O + 2e⁻ → H₂ + 2OH⁻'],
    },
    {
      id: 'a-halide', x: 115, y: 85, title: 'Cl⁻, Br⁻, I⁻, S²⁻', color: 'red',
      lines: ['окисляется анион:', '2Cl⁻ − 2e⁻ → Cl₂'],
    },
    {
      id: 'a-oxyanion', x: 300, y: 85, title: 'SO₄²⁻, NO₃⁻, PO₄³⁻, F⁻', color: 'red',
      lines: ['окисляется вода:', '2H₂O − 4e⁻ → O₂ + 4H⁺'],
    },
  ],
  edges: [
    { from: 'root', to: 'cathode', arrow: true },
    { from: 'root', to: 'anode', arrow: true },
    { from: 'cathode', to: 'c-noble', arrow: true },
    { from: 'cathode', to: 'c-middle', arrow: true },
    { from: 'cathode', to: 'c-active', arrow: true },
    { from: 'anode', to: 'a-halide', arrow: true },
    { from: 'anode', to: 'a-oxyanion', arrow: true },
  ],
  notes: [
    { x: -240, y: 180, text: 'правило катода: положение металла в ряду активности', tone: 'muted', fontSize: 9 },
    { x: 205, y: 180, text: 'кислородсодержащие анионы и F⁻ не окисляются', tone: 'muted', fontSize: 9 },
  ],
};

export const ElectrolysisSolutionsTreeInfographic: React.FC = () => (
  <InfographicFigure
    title="Выбор процессов на катоде и аноде при электролизе водных растворов"
    spec={ELECTROLYSIS_SOLUTIONS_TREE_SPEC}
    legend={[
      { color: getInfoCategoryColor('amber'), label: 'исходные условия' },
      { color: getInfoCategoryColor('teal'), label: 'катодные процессы' },
      { color: getInfoCategoryColor('red'), label: 'анодные процессы' },
    ]}
    reference={{
      title: 'Примеры',
      items: [
        { label: 'Раствор CuSO₄', value: 'катод: Cu²⁺ → Cu⁰; анод: вода → O₂ (сульфат не окисляется)', accent: true },
        { label: 'Раствор NaCl', value: 'катод: вода → H₂ + OH⁻; анод: Cl⁻ → Cl₂; в растворе накапливается NaOH' },
        { label: 'Раствор Na₂SO₄', value: 'фактически электролиз воды: H₂ на катоде и O₂ на аноде' },
      ],
    }}
    caption={
      <>
        В водном растворе за разряд конкурируют ионы электролита и молекулы воды:
        на катоде исход определяет положение металла в ряду активности, на инертном аноде — природа аниона.
      </>
    }
  />
);
