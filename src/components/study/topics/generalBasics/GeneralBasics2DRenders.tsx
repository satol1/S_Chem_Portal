import React from 'react';
import { SvgDiagramWrapper, type SvgSpecItem } from '../../../scientific/svg/SvgDiagramWrapper';
import { getThemePalette } from '../../../../utils/molecule2DTheme';

export interface GeneralBasics2DProps {
  type: 'mixtures-classification' | 'multiple-proportions' | 'mole-hub' | 'gas-laws';
  className?: string;
  isModal?: boolean;
}

/** Токены централизованной тёмной палитры (академический стиль) */
const P = getThemePalette('dark');

/** Цвета ролей схем темы */
const COL = {
  root: P.highlight,
  box: P.backgroundAlt,
  boxBorder: P.panelBorder,
  text: P.textSecondary,
  muted: P.textMuted,
  accent: P.highlight,
  line: P.bondSecondary,
  series: [P.atomN.fill, P.atomO.fill, P.atomS.fill, P.atomCl.fill, P.atomBr.fill],
};

interface DiagramMeta {
  title: string;
  specTitle: string;
  specItems: SvgSpecItem[];
}

/** Метаданные схем: заголовки и верифицированные параметры панели спецификаций */
const DIAGRAM_META: Record<GeneralBasics2DProps['type'], DiagramMeta> = {
  'mixtures-classification': {
    title: 'Вещества и смеси: классификация и способы разделения',
    specTitle: 'Справочные данные:',
    specItems: [
      { label: 'Воздух (объёмные доли)', value: 'N₂ ≈ 78 %, O₂ ≈ 21 %, Ar ≈ 0.93 %, CO₂ ≈ 0.04 %', color: COL.accent },
      { label: 'Основа дистилляции', value: 'различие температур кипения (вода: 100 °C при 101.325 кПа)', color: COL.text },
      { label: 'Хроматография', value: 'М. С. Цвет, 1903 г. — разделение по сорбируемости', color: COL.text },
      { label: 'Методы разделения', value: 'фильтрация, отстаивание, дистилляция, кристаллизация, хроматография, магнит', color: COL.muted },
    ],
  },
  'multiple-proportions': {
    title: 'Закон кратных отношений: оксиды азота (масса O на 14 г N)',
    specTitle: 'Справочные данные:',
    specItems: [
      { label: 'Закон', value: 'кратных отношений — Дж. Дальтон, 1803 г.', color: COL.accent },
      { label: 'Массы O на 14 г N', value: 'N₂O — 8; NO — 16; N₂O₃ — 24; NO₂ — 32; N₂O₅ — 40 г', color: COL.text },
      { label: 'Отношение кислорода', value: '1 : 2 : 3 : 4 : 5 — небольшие целые числа', color: COL.accent },
      { label: 'Формулировка', value: 'массы одного элемента, приходящиеся на одну и ту же массу другого, относятся как небольшие целые числа', color: COL.muted },
    ],
  },
  'mole-hub': {
    title: 'Моль — узел количественных расчётов',
    specTitle: 'Справочные данные:',
    specItems: [
      { label: 'Число Авогадро', value: 'Nₐ = 6.02·10²³ моль⁻¹ (точно 6.02214076·10²³, СИ 2019)', color: COL.accent },
      { label: 'Молярный объём', value: 'Vm = 22.4 л/моль (газы, н. у.: 0 °C, 101.325 кПа)', color: COL.text },
      { label: 'Молярная масса', value: 'M численно равна Mr, г/моль; M(H₂O) = 18 г/моль', color: COL.text },
      { label: 'Связь величин', value: 'n = m/M = N/Nₐ = V/Vm', color: COL.muted },
    ],
  },
  'gas-laws': {
    title: 'Газовые законы: изопроцессы идеального газа',
    specTitle: 'Справочные данные:',
    specItems: [
      { label: 'Газовая постоянная', value: 'R = 8.314 Дж/(моль·К) = 0.08206 л·атм/(моль·К)', color: COL.accent },
      { label: 'Нормальные условия', value: '0 °C (273.15 К), 101.325 кПа (1 атм = 760 мм рт. ст.)', color: COL.text },
      { label: 'Молярный объём', value: 'Vm = 22.4 л/моль при н. у.', color: COL.text },
      { label: 'Авторы законов', value: 'Бойль (1662) и Мариотт (1676); Гей-Люссак (1802); Шарль (1787); Клапейрон (1834); Менделеев (1874)', color: COL.muted },
    ],
  },
};

/** Прямоугольный блок схемы с заголовком и строками */
const SchemeBox: React.FC<{
  x: number;
  y: number;
  width: number;
  height: number;
  title?: string;
  lines?: string[];
  accent?: boolean;
  titleColor?: string;
  fontSize?: number;
}> = ({ x, y, width, height, title, lines = [], accent = false, titleColor, fontSize = 12 }) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={8}
      fill={COL.box}
      stroke={accent ? COL.accent : COL.boxBorder}
      strokeWidth={accent ? 1.6 : 1}
    />
    {title && (
      <text
        x={x + width / 2}
        y={y + (lines.length > 0 ? 18 : height / 2 + 4)}
        textAnchor="middle"
        fill={titleColor || COL.accent}
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        {title}
      </text>
    )}
    {lines.map((line, i) => (
      <text
        key={i}
        x={x + width / 2}
        y={y + (title ? 34 : 18) + i * 15}
        textAnchor="middle"
        fill={COL.text}
        fontSize={11}
        fontFamily="sans-serif"
      >
        {line}
      </text>
    ))}
  </g>
);

/** Линия-ветвь между блоками */
const Branch: React.FC<{ x1: number; y1: number; x2: number; y2: number }> = ({ x1, y1, x2, y2 }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={COL.line} strokeWidth={1.5} />
);

/** Классификация веществ и смесей */
const MixturesClassificationDiagram: React.FC = () => (
  <g>
    <SchemeBox x={-70} y={-105} width={140} height={34} title="Материя: вещества и смеси" accent fontSize={12} />
    <Branch x1={-20} y1={-71} x2={-110} y2={-40} />
    <Branch x1={20} y1={-71} x2={110} y2={-40} />

    <SchemeBox
      x={-190}
      y={-40}
      width={160}
      height={52}
      title="Чистое вещество"
      lines={['постоянный состав', 'и свойства']}
    />
    <SchemeBox
      x={40}
      y={-40}
      width={160}
      height={52}
      title="Смесь (2+ компонента)"
      lines={['каждый компонент', 'сохраняет свои свойства']}
    />

    <Branch x1={-110} y1={12} x2={-110} y2={42} />
    <SchemeBox
      x={-195}
      y={42}
      width={170}
      height={52}
      title="Примеры"
      lines={['вода H₂O, медь Cu,', 'кислород O₂, NaCl']}
      titleColor={COL.text}
    />

    <Branch x1={90} y1={12} x2={30} y2={42} />
    <Branch x1={140} y1={12} x2={205} y2={42} />
    <SchemeBox
      x={-55}
      y={42}
      width={165}
      height={52}
      title="Однородные (гомогенные)"
      lines={['воздух, растворы,', 'сплавы']}
      fontSize={11}
    />
    <SchemeBox
      x={125}
      y={42}
      width={165}
      height={52}
      title="Неоднородные (гетерогенные)"
      lines={['песок + вода,', 'масло + вода, гранит']}
      fontSize={11}
    />

    <text x={0} y={120} textAnchor="middle" fill={COL.muted} fontSize={11} fontFamily="sans-serif">
      Компоненты смесей разделяют физическими методами: фильтрация, отстаивание, дистилляция, хроматография
    </text>
  </g>
);

/** Данные баров: масса кислорода на 14 г азота в оксидах (верифицировано) */
const NITROGEN_OXIDES = [
  { formula: 'N₂O', mass: 8, ratio: '1' },
  { formula: 'NO', mass: 16, ratio: '2' },
  { formula: 'N₂O₃', mass: 24, ratio: '3' },
  { formula: 'NO₂', mass: 32, ratio: '4' },
  { formula: 'N₂O₅', mass: 40, ratio: '5' },
];

/** Закон кратных отношений: бары массы кислорода */
const MultipleProportionsDiagram: React.FC = () => {
  const barWidth = 42;
  const gap = 22;
  const baseY = 55;
  const totalW = NITROGEN_OXIDES.length * barWidth + (NITROGEN_OXIDES.length - 1) * gap;
  const startX = -totalW / 2;

  return (
    <g>
      <text x={0} y={-98} textAnchor="middle" fill={COL.text} fontSize={12} fontWeight="bold" fontFamily="sans-serif">
        Масса кислорода, приходящаяся на 14 г азота
      </text>
      <line x1={startX - 14} y1={baseY} x2={startX + totalW + 14} y2={baseY} stroke={COL.line} strokeWidth={1.5} />
      {NITROGEN_OXIDES.map((oxide, i) => {
        const x = startX + i * (barWidth + gap);
        const barH = oxide.mass * 2.4;
        return (
          <g key={oxide.formula}>
            <rect
              x={x}
              y={baseY - barH}
              width={barWidth}
              height={barH}
              rx={4}
              fill={COL.series[i]}
              opacity={0.9}
            />
            <text
              x={x + barWidth / 2}
              y={baseY - barH - 8}
              textAnchor="middle"
              fill={COL.accent}
              fontSize={12}
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              {oxide.mass} г
            </text>
            <text
              x={x + barWidth / 2}
              y={baseY + 18}
              textAnchor="middle"
              fill={COL.text}
              fontSize={12}
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              {oxide.formula}
            </text>
            <text
              x={x + barWidth / 2}
              y={baseY + 36}
              textAnchor="middle"
              fill={COL.muted}
              fontSize={11}
              fontFamily="sans-serif"
            >
              ×{oxide.ratio}
            </text>
          </g>
        );
      })}
      <text x={0} y={baseY + 58} textAnchor="middle" fill={COL.accent} fontSize={12} fontWeight="bold" fontFamily="sans-serif">
        Отношение масс кислорода: 1 : 2 : 3 : 4 : 5 — небольшие целые числа
      </text>
    </g>
  );
};

/** Моль как узел количественных расчётов */
const MoleHubDiagram: React.FC = () => (
  <g>
    <circle cx={0} cy={0} r={38} fill={COL.box} stroke={COL.accent} strokeWidth={1.8} />
    <text x={0} y={-4} textAnchor="middle" fill={COL.accent} fontSize={15} fontWeight="bold" fontFamily="sans-serif">
      моль
    </text>
    <text x={0} y={14} textAnchor="middle" fill={COL.text} fontSize={12} fontFamily="sans-serif">
      n
    </text>

    <Branch x1={-30} y1={-26} x2={-88} y2={-58} />
    <Branch x1={30} y1={-26} x2={88} y2={-58} />
    <Branch x1={-30} y1={26} x2={-88} y2={58} />
    <Branch x1={30} y1={26} x2={88} y2={58} />

    <SchemeBox x={-208} y={-96} width={130} height={44} title="Масса m" lines={['n = m / M']} titleColor={COL.text} />
    <SchemeBox x={78} y={-96} width={130} height={44} title="Частицы N" lines={['n = N / Nₐ']} titleColor={COL.text} />
    <SchemeBox x={-208} y={52} width={130} height={44} title="Объём газа V" lines={['n = V / Vm']} titleColor={COL.text} />
    <SchemeBox x={78} y={52} width={130} height={44} title="Молярная масса" lines={['M = Mr, г/моль']} titleColor={COL.text} />

    <text x={0} y={122} textAnchor="middle" fill={COL.muted} fontSize={11} fontFamily="sans-serif">
      n = m/M = N/Nₐ = V/Vm — переходы между массой, числом частиц и объёмом газа
    </text>
  </g>
);

/** Мини-график изопроцесса в осях с подписью */
const IsoprocessPanel: React.FC<{
  x: number;
  axes: { horizontal: string; vertical: string };
  law: string;
  formula: string;
  curve: 'hyperbola' | 'linear';
}> = ({ x, axes, law, formula, curve }) => {
  const axX = x + 14;
  const axY = 62;
  const axW = 76;
  const axH = 52;
  return (
    <g>
      <rect x={x} y={-30} width={104} height={130} rx={8} fill={COL.box} stroke={COL.boxBorder} strokeWidth={1} />
      <text x={x + 52} y={-12} textAnchor="middle" fill={COL.accent} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
        {law}
      </text>
      {/* Оси */}
      <line x1={axX} y1={axY} x2={axX} y2={axY - axH} stroke={COL.muted} strokeWidth={1.2} />
      <line x1={axX} y1={axY} x2={axX + axW} y2={axY} stroke={COL.muted} strokeWidth={1.2} />
      {curve === 'hyperbola' ? (
        <path
          d={`M ${axX + 6} ${axY - axH + 8} Q ${axX + 22} ${axY - 12} ${axX + axW - 6} ${axY - 7}`}
          fill="none"
          stroke={COL.accent}
          strokeWidth={2}
        />
      ) : (
        <line
          x1={axX + 4}
          y1={axY - 4}
          x2={axX + axW - 8}
          y2={axY - axH + 10}
          stroke={COL.accent}
          strokeWidth={2}
        />
      )}
      <text x={axX + axW / 2} y={axY + 14} textAnchor="middle" fill={COL.muted} fontSize={10} fontFamily="sans-serif">
        {axes.horizontal}
      </text>
      <text x={axX + 2} y={axY - axH - 4} fill={COL.muted} fontSize={10} fontFamily="sans-serif">
        {axes.vertical}
      </text>
      <text x={x + 52} y={88} textAnchor="middle" fill={COL.text} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
        {formula}
      </text>
    </g>
  );
};

/** Газовые законы: изопроцессы идеального газа */
const GasLawsDiagram: React.FC = () => (
  <g>
    <IsoprocessPanel
      x={-166}
      axes={{ horizontal: 'V', vertical: 'p' }}
      law="Бойль — Мариотт"
      formula="pV = const (T)"
      curve="hyperbola"
    />
    <IsoprocessPanel
      x={-52}
      axes={{ horizontal: 'T', vertical: 'V' }}
      law="Гей-Люссак"
      formula="V/T = const (p)"
      curve="linear"
    />
    <IsoprocessPanel
      x={62}
      axes={{ horizontal: 'T', vertical: 'p' }}
      law="Шарль"
      formula="p/T = const (V)"
      curve="linear"
    />
    <SchemeBox x={-120} y={118} width={240} height={38} title="Уравнение Клапейрона — Менделеева: pV = nRT" accent fontSize={11} />
  </g>
);

/**
 * Концептуальные 2D-схемы темы ОХ-01: классификация веществ и смесей,
 * закон кратных отношений, формульный узел «моль», газовые законы.
 * Каркас (фон, сетка, заголовок, панель спецификаций в модалке) — централизованный
 * SvgDiagramWrapper; компактное превью автоподбирает viewBox под габариты схемы.
 */
export const GeneralBasics2DRender: React.FC<GeneralBasics2DProps> = ({
  type,
  className = '',
  isModal = false,
}) => {
  const meta = DIAGRAM_META[type];

  return (
    <SvgDiagramWrapper
      theme="dark"
      isModal={isModal}
      className={`text-slate-100 ${className}`}
      title={meta.title}
      specTitle={meta.specTitle}
      specItems={meta.specItems}
    >
      {type === 'mixtures-classification' && <MixturesClassificationDiagram />}
      {type === 'multiple-proportions' && <MultipleProportionsDiagram />}
      {type === 'mole-hub' && <MoleHubDiagram />}
      {type === 'gas-laws' && <GasLawsDiagram />}
    </SvgDiagramWrapper>
  );
};
