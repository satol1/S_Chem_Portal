import React, { useLayoutEffect, useRef, useState } from 'react';
import { Layers } from 'lucide-react';
import { LIGHT_PALETTE, uniqueSvgId, getInfoCategoryColor, type InfoCategory, type ThemePalette } from '../../../utils/molecule2DTheme';
import { measureSvgTextWidth } from '../../../utils/measureSvgText';

// ═══════════════════════════════════════
// InfographicFigure — централизованная концептуальная инфографика
//
// Светлые академические схемы НЕмолекулярного содержания: классификации
// (деревья), количественные законы (бары), мини-графики изопроцессов.
// Тема описывает схему ДАННЫМИ (спек), а не ручной отрисовкой.
//
// Компактный формат учебной фигуры: схема встроена в текст темы (figure),
// блоки авторазмеряются по канвас-измерению текста (точная метрика
// фактического шрифта, кириллица включительно), связи обрезаются у
// рассчитанных границ. Справочные данные — в акцентной панели справа от
// схемы (на узких экранах — под ней), ключевой вывод — подпись снизу.
// БЕЗ модальных окон и тёмных плиток-превью.
//
// Палитра — токены LIGHT_PALETTE + цветовые категории InfoCategory
// (molecule2DTheme.ts): приглушённые академические тона, как в светлом
// варианте генератора 2D-структурных формул.
// ═══════════════════════════════════════

/** Семантический тон текстовых надписей */
export type InfoTone = 'accent' | 'ink' | 'muted';

/** Блок (узел) схемы; размер рассчитывается по тексту, width/height — опциональный минимум */
export interface InfoNodeSpec {
  id: string;
  /** Центр блока */
  x: number;
  y: number;
  /** Заголовок блока */
  title?: string;
  /** Строки текста под заголовком */
  lines?: string[];
  /** box — прямоугольник, hub — центральный узел-эллипс */
  shape?: 'box' | 'hub';
  /** Цветовая категория: цветная рамка, тонировка и заголовок; без цвета — нейтральный блок */
  color?: InfoCategory;
  /** Размер шрифта заголовка (default 11) */
  fontSize?: number;
  /** Минимальная ширина/высота */
  width?: number;
  height?: number;
}

/** Связь между узлами (обретается у рассчитанных границ блоков) */
export interface InfoEdgeSpec {
  from: string;
  to: string;
  /** Стрелка у конца */
  arrow?: boolean;
  /** Пунктирная линия */
  dashed?: boolean;
  /** Подпись над серединой линии (с halo цвета фона) */
  label?: string;
}

/** Элемент бара */
export interface InfoBarItem {
  /** Подпись под осью (формула, категория) */
  label: string;
  /** Значение — высота бара */
  value: number;
  /** Дополнительная подпись под лейблом («×2») */
  badge?: string;
  /** Цветовая категория бара (default — нейтральный синий) */
  color?: InfoCategory;
}

/** Бар-чарт (количественное сравнение), центрируется по x = 0 */
export interface InfoBarChartSpec {
  /** Y координаты оси (базы баров) */
  baselineY: number;
  /** Ширина бара (default 32) */
  barWidth?: number;
  /** Зазор между барами (default 20) */
  gap?: number;
  /** Пикселей на единицу значения (default 1.6) */
  unit?: number;
  /** Суффикс подписи значения (« г») */
  valueSuffix?: string;
  items: InfoBarItem[];
}

/** Мини-график зависимости в осях; ширина панели — по тексту заголовка/формулы */
export interface InfoPlotSpec {
  /** Название процесса/закона */
  title: string;
  /** Формула внизу панели */
  formula: string;
  /** Подпись горизонтальной оси */
  xAxis: string;
  /** Подпись вертикальной оси */
  yAxis: string;
  /** hyperbola — обратная пропорция, linear — прямая */
  curve: 'hyperbola' | 'linear';
  /** Цвет заголовка и кривой (default amber) */
  color?: InfoCategory;
  /** Высота панели (default 100) */
  height?: number;
}

/** Группа мини-графиков — раскладывается горизонтально с центровкой по x = 0 */
export interface InfoPlotsGroupSpec {
  /** Y верхнего края панелей */
  y: number;
  /** Зазор между панелями (default 16) */
  gap?: number;
  items: InfoPlotSpec[];
}

/** Свободная текстовая надпись */
export interface InfoNoteSpec {
  x: number;
  y: number;
  text: string;
  tone?: InfoTone;
  anchor?: 'start' | 'middle' | 'end';
  fontSize?: number;
  bold?: boolean;
}

/** Дата-спек инфографики */
export interface InfographicSpec {
  nodes?: InfoNodeSpec[];
  edges?: InfoEdgeSpec[];
  bars?: InfoBarChartSpec;
  plots?: InfoPlotsGroupSpec;
  notes?: InfoNoteSpec[];
}

export interface InfoLegendItem {
  color: string;
  label: string;
}

/** Элемент справочной панели */
export interface InfoReferenceItem {
  /** Короткое название данных */
  label: string;
  /** Значение (допускается ReactNode — ChemFormula) */
  value: React.ReactNode;
  /** Янтарный акцент (ключевые данные) */
  accent?: boolean;
}

export interface InfographicFigureProps {
  /** Заголовок инфографики */
  title: string;
  /** Дата-спек схемы */
  spec: InfographicSpec;
  /** Справочная панель справа от схемы */
  reference?: { title?: string; items: InfoReferenceItem[] };
  /** Подпись под фигурой (ключевой вывод) — HTML: допускаются ChemFormula/ChemText */
  caption?: React.ReactNode;
  /** Легенда цветов */
  legend?: InfoLegendItem[];
  className?: string;
}

// ─── Измерение текста и константы компактной геометрии ────────────────────

/** Поля блоков */
const PAD_X = 11;
const PAD_Y = 7;
/** Шаг строк текста */
const LINE_H = 14;
/** Размер шрифта строк */
const LINE_FONT = 10;

/** Высота строки заголовка */
function titleLineHeight(fontSize: number): number {
  return fontSize + 6;
}

/** Цвет тона надписи */
function toneColor(tone: InfoTone, p: ThemePalette): string {
  if (tone === 'accent') return p.highlight;
  if (tone === 'muted') return p.textMuted;
  return p.textPrimary;
}

/** Рассчитанный габарит узла */
interface NodeLayout {
  cx: number;
  cy: number;
  w: number;
  h: number;
  shape: 'box' | 'hub';
}

/** Авто-расчёт габаритов узла по тексту */
function layoutNode(node: InfoNodeSpec): NodeLayout {
  const fs = node.fontSize ?? 11;
  const lines = node.lines ?? [];
  const widths: number[] = [];
  if (node.title) widths.push(measureSvgTextWidth(node.title, fs, true));
  for (const line of lines) widths.push(measureSvgTextWidth(line, LINE_FONT));
  const maxW = widths.length > 0 ? Math.max(...widths) : 32;
  const contentH = (node.title ? titleLineHeight(fs) : 0) + lines.length * LINE_H;
  if (node.shape === 'hub') {
    return { cx: node.x, cy: node.y, w: maxW + 34, h: contentH + 18, shape: 'hub' };
  }
  return {
    cx: node.x,
    cy: node.y,
    w: Math.max(node.width ?? 0, maxW + 2 * PAD_X),
    h: Math.max(node.height ?? 0, contentH + 2 * PAD_Y),
    shape: 'box',
  };
}

/** Точка на рассчитанной границе узла в направлении (tx, ty) */
function layoutBorderPoint(l: NodeLayout, tx: number, ty: number, pad: number) {
  const dx = tx - l.cx;
  const dy = ty - l.cy;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  if (l.shape === 'hub') {
    const rx = l.w / 2;
    const ry = l.h / 2;
    const t = 1 / Math.sqrt((ux * ux) / (rx * rx) + (uy * uy) / (ry * ry));
    return { x: l.cx + ux * (t + pad), y: l.cy + uy * (t + pad) };
  }
  const hw = l.w / 2;
  const hh = l.h / 2;
  const m = Math.max(Math.abs(ux) / hw, Math.abs(uy) / hh) || 1;
  const t = 1 / m;
  return { x: l.cx + ux * (t + pad), y: l.cy + uy * (t + pad) };
}

/** Рассчитанная ширина панели мини-графика */
function plotPanelWidth(plot: InfoPlotSpec): number {
  const titleW = measureSvgTextWidth(plot.title, 10, true);
  const formulaW = measureSvgTextWidth(plot.formula, 10, true);
  return Math.max(titleW, formulaW, 58) + 32;
}

// ─── Примитивы рендера ─────────────────────────────────────────────────────

/** Прямоугольный блок или центральный узел-эллипс (размер — из layout) */
const InfoNode: React.FC<{ node: InfoNodeSpec; layout: NodeLayout; palette: ThemePalette }> = ({
  node,
  layout,
  palette: p,
}) => {
  const fs = node.fontSize ?? 11;
  const lines = node.lines ?? [];
  const hasTitle = Boolean(node.title);
  const color = node.color ? getInfoCategoryColor(node.color, p) : null;
  const contentH = (hasTitle ? titleLineHeight(fs) : 0) + lines.length * LINE_H;
  const startY = layout.cy - contentH / 2;
  const titleCy = startY + (hasTitle ? titleLineHeight(fs) / 2 : 0);

  const body = (
    <>
      {hasTitle && (
        <text
          x={layout.cx}
          y={titleCy}
          textAnchor="middle"
          dy="0.35em"
          fill={color ?? p.textPrimary}
          fontSize={fs}
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          {node.title}
        </text>
      )}
      {lines.map((line, i) => (
        <text
          key={i}
          x={layout.cx}
          y={startY + (hasTitle ? titleLineHeight(fs) : 0) + LINE_H * (i + 0.5)}
          textAnchor="middle"
          dy="0.35em"
          fill={p.textSecondary}
          fontSize={LINE_FONT}
          fontFamily="sans-serif"
        >
          {line}
        </text>
      ))}
    </>
  );

  if (layout.shape === 'hub') {
    return (
      <g>
        <ellipse cx={layout.cx} cy={layout.cy} rx={layout.w / 2} ry={layout.h / 2} fill={p.background} stroke={color ?? p.highlight} strokeWidth={1.6} />
        {body}
      </g>
    );
  }

  const x = layout.cx - layout.w / 2;
  const y = layout.cy - layout.h / 2;
  return (
    <g>
      {color ? (
        <>
          <rect x={x} y={y} width={layout.w} height={layout.h} rx={8} fill={p.background} />
          <rect x={x} y={y} width={layout.w} height={layout.h} rx={8} fill={color} opacity={0.13} />
          <rect x={x} y={y} width={layout.w} height={layout.h} rx={8} fill="none" stroke={color} strokeWidth={1.3} />
        </>
      ) : (
        <rect x={x} y={y} width={layout.w} height={layout.h} rx={8} fill={p.panelBg} stroke={p.panelBorder} strokeWidth={1} />
      )}
      {body}
    </g>
  );
};

/** Связь между узлами, обрезанная у рассчитанных границ */
const InfoEdge: React.FC<{
  edge: InfoEdgeSpec;
  layouts: Map<string, NodeLayout>;
  palette: ThemePalette;
  markerId: string;
}> = ({ edge, layouts, palette: p, markerId }) => {
  const a = layouts.get(edge.from);
  const b = layouts.get(edge.to);
  if (!a || !b) return null;
  const p1 = layoutBorderPoint(a, b.cx, b.cy, 2);
  const p2 = layoutBorderPoint(b, a.cx, a.cy, edge.arrow ? 5 : 2);
  return (
    <g>
      <line
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        stroke={p.bondSecondary}
        strokeWidth={1.3}
        strokeDasharray={edge.dashed ? '5 4' : undefined}
        markerEnd={edge.arrow ? `url(#${markerId})` : undefined}
      />
      {edge.label && (
        <text
          x={(p1.x + p2.x) / 2}
          y={(p1.y + p2.y) / 2 - 5}
          textAnchor="middle"
          fill={p.textMuted}
          stroke={p.background}
          strokeWidth={3}
          strokeLinejoin="round"
          paintOrder="stroke"
          fontSize={LINE_FONT}
          fontWeight={600}
          fontFamily="sans-serif"
        >
          {edge.label}
        </text>
      )}
    </g>
  );
};

/** Бар-чарт с прямыми подписями значений */
const InfoBarChart: React.FC<{ spec: InfoBarChartSpec; palette: ThemePalette }> = ({ spec, palette: p }) => {
  const barWidth = spec.barWidth ?? 32;
  const gap = spec.gap ?? 20;
  const unit = spec.unit ?? 1.6;
  const n = spec.items.length;
  const totalW = n * barWidth + (n - 1) * gap;
  const startX = -totalW / 2;

  return (
    <g>
      <line
        x1={startX - 12}
        y1={spec.baselineY}
        x2={startX + totalW + 12}
        y2={spec.baselineY}
        stroke={p.bondSecondary}
        strokeWidth={1.1}
      />
      {spec.items.map((item, i) => {
        const x = startX + i * (barWidth + gap);
        const barH = item.value * unit;
        const cx = x + barWidth / 2;
        const fill = item.color ? getInfoCategoryColor(item.color, p) : p.atomN.fill;
        return (
          <g key={item.label}>
            <rect
              x={x}
              y={spec.baselineY - barH}
              width={barWidth}
              height={barH}
              rx={3}
              fill={fill}
              opacity={0.9}
            />
            <text
              x={cx}
              y={spec.baselineY - barH - 6}
              textAnchor="middle"
              fill={p.textPrimary}
              fontSize={11}
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              {item.value}{spec.valueSuffix ?? ''}
            </text>
            <text
              x={cx}
              y={spec.baselineY + 16}
              textAnchor="middle"
              fill={p.textSecondary}
              fontSize={LINE_FONT}
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              {item.label}
            </text>
            {item.badge && (
              <text
                x={cx}
                y={spec.baselineY + 30}
                textAnchor="middle"
                fill={fill}
                fontSize={LINE_FONT}
                fontWeight={600}
                fontFamily="sans-serif"
              >
                {item.badge}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
};

/** Панель мини-графика с осями и кривой (геометрия рассчитана) */
const InfoPlotPanel: React.FC<{ spec: InfoPlotSpec; x: number; y: number; width: number; palette: ThemePalette }> = ({
  spec,
  x,
  y,
  width,
  palette: p,
}) => {
  const h = spec.height ?? 100;
  const color = spec.color ? getInfoCategoryColor(spec.color, p) : p.highlight;
  const axX = x + 16;
  const axY = y + h - 34;
  const axW = width - 32;
  const axH = h - 60;

  return (
    <g>
      <rect x={x} y={y} width={width} height={h} rx={8} fill={p.panelBg} stroke={p.panelBorder} strokeWidth={1} />
      <text
        x={x + width / 2}
        y={y + 15}
        textAnchor="middle"
        fill={color}
        fontSize={10}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        {spec.title}
      </text>
      {/* Оси */}
      <line x1={axX} y1={axY} x2={axX} y2={axY - axH} stroke={p.textMuted} strokeWidth={1.1} />
      <line x1={axX} y1={axY} x2={axX + axW} y2={axY} stroke={p.textMuted} strokeWidth={1.1} />
      {spec.curve === 'hyperbola' ? (
        <path
          d={`M ${axX + 4} ${axY - axH + 5} Q ${axX + axW * 0.22} ${axY - axH * 0.15} ${axX + axW - 4} ${axY - axH * 0.09}`}
          fill="none"
          stroke={color}
          strokeWidth={1.8}
        />
      ) : (
        <line
          x1={axX + 3}
          y1={axY - 3}
          x2={axX + axW - 6}
          y2={axY - axH + 6}
          stroke={color}
          strokeWidth={1.8}
        />
      )}
      <text x={axX + axW / 2} y={axY + 13} textAnchor="middle" fill={p.textMuted} fontSize={10} fontFamily="sans-serif">
        {spec.xAxis}
      </text>
      <text x={axX - 5} y={axY - axH + 4} textAnchor="end" fill={p.textMuted} fontSize={10} fontFamily="sans-serif">
        {spec.yAxis}
      </text>
      <text
        x={x + width / 2}
        y={y + h - 8}
        textAnchor="middle"
        fill={p.textSecondary}
        fontSize={10}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        {spec.formula}
      </text>
    </g>
  );
};

/** Свободная надпись схемы */
const InfoNote: React.FC<{ spec: InfoNoteSpec; palette: ThemePalette }> = ({ spec, palette: p }) => (
  <text
    x={spec.x}
    y={spec.y}
    textAnchor={spec.anchor ?? 'middle'}
    fill={toneColor(spec.tone ?? 'muted', p)}
    fontSize={spec.fontSize ?? 10}
    fontWeight={spec.bold ? 'bold' : 600}
    fontFamily="sans-serif"
  >
    {spec.text}
  </text>
);

/** Справочная панель с акцентами */
export const InfoReferencePanel: React.FC<{ reference: NonNullable<InfographicFigureProps['reference']> }> = ({ reference }) => (
  <aside className="w-full lg:w-64 shrink-0 rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-2.5">
    <div className="border-l-2 border-amber-500 pl-2 text-[11px] font-bold uppercase tracking-wider text-slate-900">
      {reference.title ?? 'Справочные данные'}
    </div>
    {reference.items.map((item, i) => (
      <div
        key={i}
        className={item.accent ? 'rounded-lg bg-amber-50/80 border border-amber-200/80 px-2.5 py-1.5' : 'px-0.5'}
      >
        <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{item.label}</div>
        <div className={item.accent ? 'text-xs font-bold text-amber-900 leading-snug' : 'text-xs font-medium text-slate-600 leading-snug'}>
          {item.value}
        </div>
      </div>
    ))}
  </aside>
);

// ─── Фигура ────────────────────────────────────────────────────────────────

/** Допустимое укрупнение схемы относительно рассчитанных габаритов:
 * убирает пустые поля вокруг контента, текст остаётся чётким (вектор) */
const INFO_MAX_SCALE = 1.4;

/**
 * Централизованная концептуальная инфографика: компактная светлая фигура,
 * встроенная в текст темы. Слева — схема (авторазмеры блоков, viewBox
 * автоподбирается, масштаб не выше 1:1), справа — акцентная справочная
 * панель, снизу — легенда и поясняющая подпись. Без модальных окон.
 */
export const InfographicFigure: React.FC<InfographicFigureProps> = ({
  title,
  spec,
  reference,
  caption,
  legend,
  className = '',
}) => {
  const p = LIGHT_PALETTE;
  const markerId = uniqueSvgId('info-arrow');
  const contentRef = useRef<SVGGElement | null>(null);
  const [fitViewBox, setFitViewBox] = useState<string | null>(null);

  // Автоподбор viewBox под реальные габариты контента
  useLayoutEffect(() => {
    const g = contentRef.current;
    if (!g) return;
    const b = g.getBBox();
    if (b.width < 1 || b.height < 1) return;
    const pad = 10;
    const next = `${b.x - pad} ${b.y - pad} ${b.width + 2 * pad} ${b.height + 2 * pad}`;
    setFitViewBox((prev) => (prev === next ? prev : next));
  }, [spec]);

  // Рассчитанная геометрия узлов — единая для блоков и связей
  const layouts = new Map((spec.nodes ?? []).map((node) => [node.id, layoutNode(node)]));

  // Автораскладка панелей мини-графиков (центрирование группы по x = 0)
  const plotPanels = (spec.plots?.items ?? []).map((plot) => ({ plot, width: plotPanelWidth(plot) }));
  const plotsGap = spec.plots?.gap ?? 16;
  const plotsTotalW = plotPanels.reduce((acc, item) => acc + item.width, 0) + plotsGap * Math.max(plotPanels.length - 1, 0);
  let plotCursor = -plotsTotalW / 2;
  const plotPositions = plotPanels.map((item) => {
    const x = plotCursor;
    plotCursor += item.width + plotsGap;
    return x;
  });

  // Масштаб схемы ограничен рассчитанными габаритами × INFO_MAX_SCALE:
  // контент заполняет колонку без лишней пустоты, но не раздувается чрезмерно
  const contentWidth = fitViewBox ? Number.parseFloat(fitViewBox.split(' ')[2]) * INFO_MAX_SCALE : undefined;

  return (
    <figure className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
      <div className="px-5 sm:px-6 pt-4 pb-1 flex items-start gap-2.5">
        <Layers className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{title}</h4>
      </div>

      <div className="px-4 sm:px-5 pb-4 pt-2 flex flex-col lg:flex-row gap-4 items-center lg:items-stretch">
        <div className="min-w-0 flex-1 w-full flex flex-col justify-center gap-2">
          <svg
            viewBox={fitViewBox ?? '0 0 300 150'}
            className="w-full h-auto mx-auto"
            style={contentWidth ? { maxWidth: `${Math.ceil(contentWidth)}px` } : undefined}
            role="img"
            aria-label={title}
          >
            <defs>
              <marker id={markerId} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M 1 1 L 7 4.5 L 1 8" fill="none" stroke={p.bondSecondary} strokeWidth="1.4" />
              </marker>
            </defs>
            <g ref={contentRef}>
              {spec.edges?.map((edge, i) => (
                <InfoEdge key={`edge-${i}`} edge={edge} layouts={layouts} palette={p} markerId={markerId} />
              ))}
              {spec.bars && <InfoBarChart spec={spec.bars} palette={p} />}
              {spec.plots &&
                spec.plots.items.map((plot, i) => (
                  <InfoPlotPanel
                    key={`plot-${i}`}
                    spec={plot}
                    x={plotPositions[i]}
                    y={spec.plots!.y}
                    width={plotPanels[i].width}
                    palette={p}
                  />
                ))}
              {spec.nodes?.map((node) => (
                <InfoNode key={node.id} node={node} layout={layouts.get(node.id)!} palette={p} />
              ))}
              {spec.notes?.map((note, i) => (
                <InfoNote key={`note-${i}`} spec={note} palette={p} />
              ))}
            </g>
          </svg>
          {legend && legend.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {legend.map((item) => (
                <span key={item.label} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
        {reference && <InfoReferencePanel reference={reference} />}
      </div>

      {caption && (
        <figcaption className="px-5 sm:px-6 py-3 border-t border-slate-100 text-xs sm:text-sm text-slate-500 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
