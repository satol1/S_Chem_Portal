import React from 'react';
import {
  type DiagramRole,
  type Molecule2DTheme,
  getDiagramRoleColor,
  getThemePalette,
} from '../../../utils/molecule2DTheme';
import { SvgBond, type BondType } from './SvgBond';
import { SvgTextAtom } from './SvgAtom';
import { SvgLengthAnnotation } from './SvgBadge';

export type { DiagramRole };

// ═══════════════════════════════════════
// MolecularDiagram2D — централизованный дата-драйвен генератор
// учебных структурных схем (стиль научных публикаций).
//
// Темы описывают схему ДАННЫМИ (атомы + связи + аннотации), а не ручной
// отрисовкой: билдер сам обрезает связи у границ подписей атомов,
// раскладывает размерные линии длин связей и дуги углов вне каркаса
// и применяет академическую палитру темы. Новые темы НЕ дублируют логику.
//
// MolecularDiagramBody — тот же контент без собственного <svg>:
// встраивается в SvgDiagramWrapper (модалки с панелью спецификаций).
// ═══════════════════════════════════════

export interface DiagramAtomSpec {
  id: string;
  /** Подпись: "P", "O", "OH", "HO", "+" ... */
  label: string;
  x: number;
  y: number;
  role?: DiagramRole;
  /** Явный цвет (перекрывает роль) — только токены палитры темы */
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  opacity?: number;
}

export interface DiagramBondSpec {
  from: string;
  to: string;
  type?: BondType;
  role?: DiagramRole;
  /** Явный цвет (перекрывает роль) — только токены палитры темы */
  color?: string;
  /** Расстояние между линиями двойной связи */
  offset?: number;
  strokeWidth?: number;
  opacity?: number;
}

export interface DiagramLengthSpec {
  from: string;
  to: string;
  /** Подпись: "152 pm" */
  label: string;
  /** Сторона размерной линии относительно связи (1 / -1) */
  side?: 1 | -1;
  /** Отступ размерной линии от связи */
  distance?: number;
  role?: DiagramRole;
  color?: string;
}

export interface DiagramAngleSpec {
  /** id атома в вершине угла */
  vertex: string;
  /** id атома первого луча */
  a: string;
  /** id атома второго луча */
  b: string;
  /** Подпись: "109°28'" */
  label: string;
  radius?: number;
  labelOffset?: number;
  role?: DiagramRole;
  color?: string;
}

export interface DiagramLineSpec {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Пунктир, напр. "3 3" */
  dash?: string;
  role?: DiagramRole;
  color?: string;
  opacity?: number;
}

export interface DiagramNoteSpec {
  x: number;
  y: number;
  text: string;
  role?: DiagramRole;
  color?: string;
  anchor?: 'start' | 'middle' | 'end';
  fontSize?: number;
}

export interface MolecularDiagramBodyProps {
  atoms: DiagramAtomSpec[];
  bonds?: DiagramBondSpec[];
  lengths?: DiagramLengthSpec[];
  angles?: DiagramAngleSpec[];
  lines?: DiagramLineSpec[];
  notes?: DiagramNoteSpec[];
  theme?: Molecule2DTheme;
}

export interface MolecularDiagram2DProps extends MolecularDiagramBodyProps {
  /** viewBox при autoFit=false */
  viewBox?: string;
  /** Центр системы координат схемы внутри viewBox */
  centerX?: number;
  centerY?: number;
  className?: string;
  /** Автоподбор viewBox под габариты контента (default true): схема заполняет блок без лишних полей */
  autoFit?: boolean;
  /** Поле вокруг контента при автоподборе */
  fitPadding?: number;
}

/** Габаритный бокс контента схемы (атомы, аннотации, надписи) в локальных координатах */
function computeContentBBox(p: MolecularDiagramBodyProps, pad: number) {
  const byId = new Map(p.atoms.map((a) => [a.id, a]));
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  const add = (x: number, y: number) => {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  };

  for (const a of p.atoms) {
    const e = labelHalfExtents(a.label, a.fontSize ?? 14);
    add(a.x - e.hw - 2, a.y - e.hh - 2);
    add(a.x + e.hw + 2, a.y + e.hh + 2);
  }

  for (const n of p.notes ?? []) {
    const fs = n.fontSize ?? 10;
    const w = n.text.length * fs * 0.62;
    const x1 = n.anchor === 'start' ? n.x : n.anchor === 'end' ? n.x - w : n.x - w / 2;
    add(x1, n.y - fs * 0.8);
    add(x1 + w, n.y + fs * 0.6);
  }

  for (const ln of p.lengths ?? []) {
    const a = byId.get(ln.from);
    const b = byId.get(ln.to);
    if (!a || !b) continue;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const L = Math.sqrt(dx * dx + dy * dy) || 1;
    const side = ln.side ?? 1;
    const nx = (-dy / L) * side;
    const ny = (dx / L) * side;
    const d = ln.distance ?? 14;
    add(a.x + nx * d, a.y + ny * d);
    add(b.x + nx * d, b.y + ny * d);
    const mx = (a.x + b.x) / 2 + nx * (d + 11);
    const my = (a.y + b.y) / 2 + ny * (d + 11);
    const lw = (ln.label.length * 10 * 0.62) / 2;
    add(mx - lw, my - 8);
    add(mx + lw, my + 8);
  }

  for (const ang of p.angles ?? []) {
    const v = byId.get(ang.vertex);
    const a = byId.get(ang.a);
    const b = byId.get(ang.b);
    if (!v || !a || !b) continue;
    const r = ang.radius ?? 24;
    add(v.x - r, v.y - r);
    add(v.x + r, v.y + r);
    const la = Math.hypot(a.x - v.x, a.y - v.y) || 1;
    const lb = Math.hypot(b.x - v.x, b.y - v.y) || 1;
    let bx = (a.x - v.x) / la + (b.x - v.x) / lb;
    let by = (a.y - v.y) / la + (b.y - v.y) / lb;
    const bl = Math.sqrt(bx * bx + by * by) || 1;
    bx /= bl;
    by /= bl;
    const off = r + (ang.labelOffset ?? 14) + 8;
    add(v.x + bx * off - 20, v.y + by * off - 8);
    add(v.x + bx * off + 20, v.y + by * off + 8);
  }

  return {
    x: minX - pad,
    y: minY - pad,
    w: maxX - minX + 2 * pad,
    h: maxY - minY + 2 * pad,
  };
}

/** Полуразмеры габаритного бокса текстовой подписи (bold sans-serif) */
function labelHalfExtents(label: string, fontSize: number) {
  return {
    hw: label.length * fontSize * 0.36 + 1.5,
    hh: fontSize * 0.68,
  };
}

/**
 * Точка на луче из центра подписи, лежащая на границе её бокса + зазор.
 * Гарантирует академический просвет между связью и буквами.
 */
function labelEdgePoint(
  cx: number, cy: number,
  ux: number, uy: number,
  hw: number, hh: number,
  pad: number
) {
  const m = Math.max(Math.abs(ux) / hw, Math.abs(uy) / hh) || 1;
  const t = 1 / m;
  return { x: cx + ux * (t + pad), y: cy + uy * (t + pad) };
}

const LABEL_PAD = 1.5;

/** Контент схемы (без собственного <svg>) — слои в академическом порядке */
export const MolecularDiagramBody: React.FC<MolecularDiagramBodyProps> = ({
  atoms,
  bonds = [],
  lengths = [],
  angles = [],
  lines = [],
  notes = [],
  theme = 'light',
}) => {
  const palette = getThemePalette(theme);
  const byId = new Map(atoms.map((a) => [a.id, a]));

  const resolve = (role: DiagramRole | undefined, color: string | undefined) =>
    color ?? getDiagramRoleColor(role ?? 'ink', palette);

  // Обрезанные концы связи между двумя подписями атомов
  const trimmedBond = (fromId: string, toId: string) => {
    const a = byId.get(fromId);
    const b = byId.get(toId);
    if (!a || !b) return null;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const ea = labelHalfExtents(a.label, a.fontSize ?? 14);
    const eb = labelHalfExtents(b.label, b.fontSize ?? 14);
    const p1 = labelEdgePoint(a.x, a.y, ux, uy, ea.hw, ea.hh, LABEL_PAD);
    const p2 = labelEdgePoint(b.x, b.y, -ux, -uy, eb.hw, eb.hh, LABEL_PAD);
    return { p1, p2, ux, uy };
  };

  return (
    <>
      {/* 0. Направляющие (плоскости, оси) */}
      {lines.map((ln, idx) => (
        <line
          key={`line-${idx}`}
          x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2}
          stroke={resolve(ln.role, ln.color)}
          strokeWidth={1}
          strokeDasharray={ln.dash}
          opacity={ln.opacity ?? 0.5}
        />
      ))}

      {/* 1. Связи (обрезаны у границ подписей) */}
      {bonds.map((bond, idx) => {
        const t = trimmedBond(bond.from, bond.to);
        if (!t) return null;
        return (
          <SvgBond
            key={`bond-${idx}`}
            x1={t.p1.x} y1={t.p1.y} x2={t.p2.x} y2={t.p2.y}
            type={bond.type ?? 'single'}
            theme={theme}
            customColor={resolve(bond.role, bond.color)}
            offset={bond.offset}
            strokeWidth={bond.strokeWidth}
            opacity={bond.opacity}
          />
        );
      })}

      {/* 2. Размерные линии длин связей (параллельно связи, вне каркаса) */}
      {lengths.map((ln, idx) => {
        const t = trimmedBond(ln.from, ln.to);
        if (!t) return null;
        const side = ln.side ?? 1;
        const dist = ln.distance ?? 14;
        const nx = -t.uy * side;
        const ny = t.ux * side;
        return (
          <SvgLengthAnnotation
            key={`len-${idx}`}
            x1={t.p1.x + nx * dist} y1={t.p1.y + ny * dist}
            x2={t.p2.x + nx * dist} y2={t.p2.y + ny * dist}
            label={ln.label}
            theme={theme}
            customColor={resolve(ln.role ?? 'annotation', ln.color)}
          />
        );
      })}

      {/* 3. Дуги валентных углов с подписью на биссектрисе */}
      {angles.map((ang, idx) => {
        const v = byId.get(ang.vertex);
        const a = byId.get(ang.a);
        const b = byId.get(ang.b);
        if (!v || !a || !b) return null;
        const r = ang.radius ?? 24;
        const dax = a.x - v.x;
        const day = a.y - v.y;
        const la = Math.sqrt(dax * dax + day * day) || 1;
        const ua = { x: dax / la, y: day / la };
        const dbx = b.x - v.x;
        const dby = b.y - v.y;
        const lb = Math.sqrt(dbx * dbx + dby * dby) || 1;
        const ub = { x: dbx / lb, y: dby / lb };
        const p1 = { x: v.x + ua.x * r, y: v.y + ua.y * r };
        const p2 = { x: v.x + ub.x * r, y: v.y + ub.y * r };
        const crossZ = ua.x * ub.y - ua.y * ub.x;
        const sweep = crossZ > 0 ? 1 : 0;
        // Подпись — на биссектрисе внутри угла
        let bx = ua.x + ub.x;
        let by = ua.y + ub.y;
        const bl = Math.sqrt(bx * bx + by * by) || 1;
        bx /= bl;
        by /= bl;
        const off = ang.labelOffset ?? 14;
        const lx = v.x + bx * (r + off);
        const ly = v.y + by * (r + off);
        const color = resolve(ang.role, ang.color);
        return (
          <g key={`angle-${idx}`}>
            <path
              d={`M ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweep} ${p2.x} ${p2.y}`}
              fill="none"
              stroke={color}
              strokeWidth={1.2}
              strokeDasharray="3 2"
            />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dy="0.35em"
              fill={color}
              stroke={palette.background}
              strokeWidth={3}
              strokeLinejoin="round"
              paintOrder="stroke"
              fontSize={10}
              fontWeight={600}
              fontFamily="sans-serif"
              style={{ pointerEvents: 'none', userSelect: 'none' }}
            >
              {ang.label}
            </text>
          </g>
        );
      })}

      {/* 4. Подписи атомов (поверх связей, с halo) */}
      {atoms.map((a) => (
        <SvgTextAtom
          key={a.id}
          label={a.label}
          cx={a.x}
          cy={a.y}
          theme={theme}
          fontSize={a.fontSize ?? 14}
          fontWeight={a.fontWeight ?? 'bold'}
          customColor={resolve(a.role, a.color)}
          opacity={a.opacity}
        />
      ))}

      {/* 5. Свободные пояснительные надписи */}
      {notes.map((n, idx) => (
        <text
          key={`note-${idx}`}
          x={n.x}
          y={n.y}
          textAnchor={n.anchor ?? 'middle'}
          fill={resolve(n.role ?? 'muted', n.color)}
          stroke={palette.background}
          strokeWidth={3}
          strokeLinejoin="round"
          paintOrder="stroke"
          fontSize={n.fontSize ?? 10}
          fontWeight={600}
          fontFamily="sans-serif"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {n.text}
        </text>
      ))}
    </>
  );
};

/** Самостоятельная SVG-схема (компактный режим, превью-плитки) */
export const MolecularDiagram2D: React.FC<MolecularDiagram2DProps> = ({
  viewBox = '0 0 420 250',
  centerX = 210,
  centerY = 125,
  className = '',
  autoFit = true,
  fitPadding = 10,
  ...body
}) => {
  const bbox = autoFit ? computeContentBBox(body, fitPadding) : null;
  const usedViewBox = bbox
    ? `${centerX + bbox.x} ${centerY + bbox.y} ${bbox.w} ${bbox.h}`
    : viewBox;

  return (
    <svg viewBox={usedViewBox} className={`w-full h-full ${className}`}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <MolecularDiagramBody {...body} />
      </g>
    </svg>
  );
};
