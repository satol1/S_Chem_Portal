import React, { useMemo, useState } from 'react';
import { Layers } from 'lucide-react';
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  Position,
  type Node,
  type Edge,
  type NodeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { LIGHT_PALETTE, getInfoCategoryColor, type InfoCategory } from '../../utils/molecule2DTheme';
import { measureSvgTextWidth } from '../../utils/measureSvgText';
import { InfoReferencePanel, type InfoReferenceItem } from '../scientific/svg/InfographicFigure';

// ═══════════════════════════════════════
// ConceptFlow — централизованные интерактивные концептуальные схемы
// на React Flow (@xyflow/react).
//
// Назначение: концептуальные карты и формульные «хабы», где полезна
// интерактивность (зум, панорамирование, клик по узлу с раскрытием
// формулы/примера). Статические академические фигуры без интерактива —
// это InfographicFigure (20-RENDERING §2.7).
//
// Стиль — светлая академическая палитра LIGHT_PALETTE + цветовые
// категории InfoCategory (molecule2DTheme.ts), единые с InfographicFigure.
// Тема описывает схему ДАННЫМИ (узлы, связи, детали) без ручной разметки:
// координаты рассчитываются автораскладкой «хаб + спутники».
//
// Геометрия связей рассчитывается автоматически: узлы имеют невидимые
// точки соединения со всех четырёх сторон; основные переходы (хаб —
// спутник) идут по прямой навстречу друг другу, вторичные соотношения
// (флаг `ring`) рисуются тонкими пунктирными дугами по периметру —
// сторона соединения выбирается по касательной к эллипсу раскладки.
// ═══════════════════════════════════════

export interface ConceptFlowNodeSpec {
  id: string;
  /** Название величины/понятия */
  label: string;
  /** Короткий символ/подзаголовок («m», «n») */
  sub?: string;
  /** Цветовая категория (default — нейтральный) */
  color?: InfoCategory;
  /** Центральный узел автораскладки */
  hub?: boolean;
  /** Явные координаты центра (перекрывают автораскладку) */
  x?: number;
  y?: number;
}

export interface ConceptFlowEdgeSpec {
  from: string;
  to: string;
  /** Подпись на связи (формула перехода) */
  label?: string;
  /** Вторичное соотношение: тонкая пунктирная линия */
  dashed?: boolean;
  /** Дуговая связь по периметру раскладки (вне hubs-лучей) */
  ring?: boolean;
}

export interface ConceptFlowProps {
  /** Заголовок фигуры */
  title: string;
  nodes: ConceptFlowNodeSpec[];
  edges: ConceptFlowEdgeSpec[];
  /** Раскрываемое содержимое узла (клик) — допускаются ChemFormula/ChemText */
  details?: Record<string, React.ReactNode>;
  /** Справочная панель справа от схемы */
  reference?: { title?: string; items: InfoReferenceItem[] };
  /** Подпись под фигурой (ключевой вывод) */
  caption?: React.ReactNode;
  /** Высота области потока, px (default 250) */
  height?: number;
  /** Максимальная ширина канваса, px (default 620) */
  canvasMaxWidth?: number;
  /** Полуось X эллипса автораскладки (default 170) — для разреженных карт */
  layoutRx?: number;
  /** Полуось Y эллипса автораскладки (default 72) — для разреженных карт */
  layoutRy?: number;
  className?: string;
}

type ConceptNodeData = { label: string; sub?: string; colorHex: string; hub?: boolean };
type ConceptNodeType = Node<ConceptNodeData, 'concept'>;

type HandleSide = 'top' | 'right' | 'bottom' | 'left';

const SIDE_POSITION: Record<HandleSide, Position> = {
  top: Position.Top,
  right: Position.Right,
  bottom: Position.Bottom,
  left: Position.Left,
};

/** Невидимые точки соединения: связи крепятся к любой стороне узла */
const ConceptHandles: React.FC = () => (
  <>
    {(Object.keys(SIDE_POSITION) as HandleSide[]).map((side) => (
      <React.Fragment key={side}>
        <Handle
          id={side}
          type="source"
          position={SIDE_POSITION[side]}
          className="!pointer-events-none !h-px !w-px !min-h-0 !min-w-0 !border-0 !bg-transparent"
        />
        <Handle
          id={side}
          type="target"
          position={SIDE_POSITION[side]}
          className="!pointer-events-none !h-px !w-px !min-h-0 !min-w-0 !border-0 !bg-transparent"
        />
      </React.Fragment>
    ))}
  </>
);

/** Академическая карточка-узел */
const ConceptCardNode: React.FC<NodeProps<ConceptNodeType>> = ({ data, selected }) => {
  const { label, sub, colorHex, hub } = data;
  return (
    <div
      className={`rounded-xl bg-white text-center shadow-2xs transition-shadow ${hub ? 'px-4 py-2' : 'px-3 py-1.5'}`}
      style={{
        border: `${hub ? 2 : 1.4}px solid ${colorHex}`,
        minWidth: hub ? 92 : 76,
        boxShadow: selected ? `0 0 0 3px ${colorHex}33, 0 1px 2px rgb(2 6 23 / 0.05)` : undefined,
      }}
    >
      <div className={`font-bold leading-tight ${hub ? 'text-xs' : 'text-[11px]'}`} style={{ color: colorHex }}>
        {label}
      </div>
      {sub && <div className="text-[10px] text-slate-500 leading-tight font-mono">{sub}</div>}
      <ConceptHandles />
    </div>
  );
};

const nodeTypes = { concept: ConceptCardNode };

/** Параметры автораскладки «хаб + спутники» */
const HUB_RX = 170;
const HUB_RY = 72;

/** Автораскладка «хаб в центре, спутники по эллипсу» */
function computePositions(nodes: ConceptFlowNodeSpec[], rx: number, ry: number) {
  const satellites = nodes.filter((n) => !n.hub && (n.x === undefined || n.y === undefined));
  const positions = new Map<string, { x: number; y: number }>();
  satellites.forEach((node, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / Math.max(satellites.length, 1);
    positions.set(node.id, { x: rx * Math.cos(angle), y: ry * Math.sin(angle) });
  });
  return positions;
}

/** Реальные полугабариты карточки узла (по измеренной ширине заголовка) */
function nodeHalfSize(node: ConceptFlowNodeSpec) {
  const pad = node.hub ? 40 : 28;
  const hw = (measureSvgTextWidth(node.label, node.hub ? 12 : 11, true) + pad) / 2;
  const hh = node.hub ? 24 : 21;
  return { hw, hh };
}

/** Сторона узла, ближайшая к направлению (угол в градусах, экранные координаты) */
function sideFromAngle(deg: number): HandleSide {
  const a = ((deg % 360) + 360) % 360;
  if (a < 45 || a >= 315) return 'right';
  if (a < 135) return 'bottom';
  if (a < 225) return 'left';
  return 'top';
}

/** Нормализация разности углов в (-180, 180] */
function angleDelta(from: number, to: number): number {
  let d = to - from;
  while (d <= -180) d += 360;
  while (d > 180) d -= 360;
  return d;
}

/**
 * Интерактивная концептуальная схема: светлая академическая фигура
 * (заголовок, канвас React Flow с зумом и панорамированием, раскрываемые
 * детали узлов, справочная панель справа, подпись). Встраивается в секцию
 * без модальных окон.
 */
export const ConceptFlow: React.FC<ConceptFlowProps> = ({
  title,
  nodes,
  edges,
  details,
  reference,
  caption,
  height = 250,
  canvasMaxWidth = 620,
  layoutRx = HUB_RX,
  layoutRy = HUB_RY,
  className = '',
}) => {
  const p = LIGHT_PALETTE;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Центры узлов: явные координаты либо автораскладка
  const centers = useMemo(() => {
    const auto = computePositions(nodes, layoutRx, layoutRy);
    const map = new Map<string, { x: number; y: number }>();
    for (const node of nodes) {
      const explicit = node.x !== undefined && node.y !== undefined;
      map.set(node.id, explicit ? { x: node.x!, y: node.y! } : auto.get(node.id) ?? { x: 0, y: 0 });
    }
    return map;
  }, [nodes, layoutRx, layoutRy]);

  const hubCenter = useMemo(() => {
    const hub = nodes.find((n) => n.hub);
    return hub ? centers.get(hub.id)! : { x: 0, y: 0 };
  }, [nodes, centers]);

  const nodesById = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  const rfNodes: ConceptNodeType[] = useMemo(
    () =>
      nodes.map((node) => {
        const colorHex = node.color ? getInfoCategoryColor(node.color, p) : p.panelBorder;
        const center = centers.get(node.id)!;
        const { hw, hh } = nodeHalfSize(node);
        return {
          id: node.id,
          type: 'concept' as const,
          position: { x: center.x - hw, y: center.y - hh },
          data: { label: node.label, sub: node.sub, colorHex, hub: node.hub },
        };
      }),
    [nodes, centers, p]
  );

  const rfEdges: Edge[] = useMemo(
    () =>
      edges.map((edge, i) => {
        const s = centers.get(edge.from);
        const t = centers.get(edge.to);
        let sourceHandle: string | undefined;
        let targetHandle: string | undefined;
        if (s && t) {
          if (edge.ring) {
            // Дуга по периметру: стороны соединения — по касательной к эллипсу
            const thS = (Math.atan2(s.y - hubCenter.y, s.x - hubCenter.x) * 180) / Math.PI;
            const thT = (Math.atan2(t.y - hubCenter.y, t.x - hubCenter.x) * 180) / Math.PI;
            const sign = angleDelta(thS, thT) >= 0 ? 1 : -1;
            sourceHandle = sideFromAngle(thS + sign * 90);
            targetHandle = sideFromAngle(thT - sign * 90);
          } else {
            // Основная связь: стороны навстречу друг другу
            const ang = (Math.atan2(t.y - s.y, t.x - s.x) * 180) / Math.PI;
            sourceHandle = sideFromAngle(ang);
            targetHandle = sideFromAngle(ang + 180);
          }
        }
        // Контроль подписей: если подпись шире свободного зазора между
        // блоками, она смещается по диагонали в свободную зону между
        // «лучами» раскладки (вверх для верхней полуплоскости, вниз для
        // нижней) — без наложений на блоки
        let labelX = 0;
        let labelY = 0;
        if (edge.label && s && t) {
          const dist = Math.hypot(t.x - s.x, t.y - s.y) || 1;
          const ux = (t.x - s.x) / dist;
          const uy = (t.y - s.y) / dist;
          const ns = nodesById.get(edge.from);
          const nt = nodesById.get(edge.to);
          if (ns && nt && Math.abs(ux) >= Math.abs(uy)) {
            const es = nodeHalfSize(ns);
            const et = nodeHalfSize(nt);
            const gap =
              dist -
              (es.hw * Math.abs(ux) + es.hh * Math.abs(uy)) -
              (et.hw * Math.abs(ux) + et.hh * Math.abs(uy));
            const labelW = measureSvgTextWidth(edge.label, 10, true) + 18;
            if (labelW > gap - 4) {
              const below = (s.y + t.y) / 2 > hubCenter.y;
              labelY = below ? 40 : -40;
              labelX = -20;
            }
          }
        }
        return {
          id: `ce-${i}`,
          source: edge.from,
          target: edge.to,
          sourceHandle,
          targetHandle,
          label: edge.label,
          labelX,
          labelY,
          type: 'default',
          style: {
            stroke: p.bondSecondary,
            strokeWidth: edge.dashed ? 1.1 : 1.4,
            strokeDasharray: edge.dashed ? '4 4' : undefined,
            opacity: edge.dashed ? 0.8 : 1,
          },
          markerStart: {
            type: MarkerType.ArrowClosed,
            color: p.bondSecondary,
            width: edge.dashed ? 11 : 13,
            height: edge.dashed ? 11 : 13,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: p.bondSecondary,
            width: edge.dashed ? 11 : 13,
            height: edge.dashed ? 11 : 13,
          },
          labelStyle: { fill: p.textMuted, fontSize: 10, fontWeight: 600 },
          labelBgStyle: { fill: p.background, opacity: 0.92 },
          labelBgPadding: [5, 3] as [number, number],
          labelBgBorderRadius: 4,
        };
      }),
    [edges, centers, hubCenter, nodesById, p]
  );

  const hasDetails = Boolean(details && Object.keys(details).length > 0);

  return (
    <figure className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${className}`}>
      <div className="px-5 sm:px-6 pt-4 pb-1 flex items-start gap-2.5">
        <Layers className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{title}</h4>
      </div>

      <div className="px-4 sm:px-5 pb-4 pt-2 flex flex-col lg:flex-row gap-4 items-center lg:items-stretch">
        <div className="min-w-0 flex-1 w-full flex flex-col justify-center">
          <div
            className="rounded-xl border border-slate-200 overflow-hidden bg-white w-full mx-auto"
            style={{ height, maxWidth: canvasMaxWidth }}
          >
            <ReactFlow
              nodes={rfNodes}
              edges={rfEdges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.08 }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable
              zoomOnScroll
              minZoom={0.6}
              maxZoom={1.5}
              onNodeClick={(_, node) => hasDetails && setSelectedId(node.id)}
              onPaneClick={() => setSelectedId(null)}
            >
              <Background variant={BackgroundVariant.Dots} gap={16} size={1} color={p.gridColor} />
              <Controls position="bottom-right" showInteractive={false} />
            </ReactFlow>
          </div>

          {hasDetails && (
            <div className="mt-3 rounded-xl bg-amber-50/50 border border-amber-200/70 px-4 py-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedId && details?.[selectedId] ? (
                details[selectedId]
              ) : (
                <span className="text-slate-500">Нажмите на блок схемы, чтобы увидеть формулу перехода и пример расчёта.</span>
              )}
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
