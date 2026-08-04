import SmilesDrawer from 'smiles-drawer';
import type { Molecule, HybridizationType } from '../types';
import type { Molecule2DTheme } from './molecule2DTheme';

export type Render2DMode = 'skeletal' | 'structural' | 'lewis' | 'ball-and-stick' | 'allotrope' | 'smiles';

export interface Molecule2DRenderOptions {
  mode?: Render2DMode;
  showHybridization?: boolean;
  showLonePairs?: boolean;
  showAtomIndices?: boolean;
  theme?: Molecule2DTheme;
  width?: number;
  height?: number;
  allotropeType?: 'diamond' | 'graphite' | 'fullerene' | 'silicon' | 'rhombic-sulfur' | 'ozone' | 'so2' | 'h2so4';
}

export interface ElementCPK {
  color: string;
  darkColor: string;
  textColor: string;
  radius: number;
  valency: number;
  lonePairs: number;
}

export const CPK_COLORS: Record<string, ElementCPK> = {
  H: { color: '#F8FAFC', darkColor: '#CBD5E1', textColor: '#0F172A', radius: 10, valency: 1, lonePairs: 0 },
  C: { color: '#475569', darkColor: '#1E293B', textColor: '#F8FAFC', radius: 18, valency: 4, lonePairs: 0 },
  N: { color: '#3B82F6', darkColor: '#1D4ED8', textColor: '#FFFFFF', radius: 17, valency: 3, lonePairs: 1 },
  O: { color: '#EF4444', darkColor: '#B91C1C', textColor: '#FFFFFF', radius: 16, valency: 2, lonePairs: 2 },
  F: { color: '#10B981', darkColor: '#047857', textColor: '#FFFFFF', radius: 14, valency: 1, lonePairs: 3 },
  CL: { color: '#22C55E', darkColor: '#15803D', textColor: '#FFFFFF', radius: 20, valency: 1, lonePairs: 3 },
  BR: { color: '#991B1B', darkColor: '#7F1D1D', textColor: '#FFFFFF', radius: 22, valency: 1, lonePairs: 3 },
  I: { color: '#6B21A8', darkColor: '#581C87', textColor: '#FFFFFF', radius: 24, valency: 1, lonePairs: 3 },
  P: { color: '#F97316', darkColor: '#C2410C', textColor: '#FFFFFF', radius: 20, valency: 3, lonePairs: 1 },
  S: { color: '#EAB308', darkColor: '#A16207', textColor: '#0F172A', radius: 21, valency: 2, lonePairs: 2 },
  SI: { color: '#06B6D4', darkColor: '#0E7490', textColor: '#FFFFFF', radius: 22, valency: 4, lonePairs: 0 },
};

export function getCPK(elementSymbol: string): ElementCPK {
  const sym = elementSymbol.toUpperCase();
  return CPK_COLORS[sym] || {
    color: '#94A3B8',
    darkColor: '#475569',
    textColor: '#FFFFFF',
    radius: 16,
    valency: 2,
    lonePairs: 0
  };
}

/**
 * Опции рендеринга SMILES в SVG.
 */
export interface SmilesRenderOptions {
  /** Тема: 'dark' (неоновая, для тёмного фона) или 'light' (классическая учебная, для светлого фона) */
  theme?: Molecule2DTheme;
  width?: number;
  height?: number;
  /** Толщина линий связей (по умолчанию 2) */
  bondThickness?: number;
  /** Внутренний отступ диаграммы */
  padding?: number;
  /** Компактная раскладка (меньше воздуха) */
  compactDrawing?: boolean;
  /** Показывать явные водороды (P-H, O-H и т.д.) */
  explicitHydrogens?: boolean;
}

/**
 * Render a SMILES string to an SVG element using SmilesDrawer.
 * Тема 'light' даёт классические научные схемы формул на светлом фоне
 * (чёрные связи, цветные гетероатомы — стиль учебника).
 */
export function renderSMILESToSVG(
  smiles: string,
  svgTarget: SVGSVGElement,
  options: SmilesRenderOptions = {}
): Promise<void> {
  const theme = options.theme || 'dark';

  return new Promise((resolve, reject) => {
    try {
      const cleanSmiles = SmilesDrawer.clean(smiles);
      SmilesDrawer.parse(
        cleanSmiles,
        (tree) => {
          try {
            const drawer = new SmilesDrawer.SvgDrawer({
              width: options.width || 400,
              height: options.height || 300,
              bondThickness: options.bondThickness ?? 2,
              padding: options.padding ?? 20,
              compactDrawing: options.compactDrawing ?? true,
              explicitHydrogens: options.explicitHydrogens ?? true,
            });
            drawer.draw(tree, svgTarget, theme);
            resolve();
          } catch (err) {
            reject(err);
          }
        },
        (error) => {
          reject(error);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Render a Molecule object (atoms & bonds) into 2D SVG components data
 */
export interface ProjectedAtom2D {
  index: number;
  element: string;
  x: number;
  y: number;
  z: number;
  cpk: ElementCPK;
  hybridization?: HybridizationType;
  isCarbon: boolean;
  isTerminal: boolean;
  connectedCount: number;
}

export interface ProjectedBond2D {
  source: number;
  target: number;
  order: 1 | 2 | 3;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  length: number;
}

export function projectMolecule2D(
  molecule: Molecule,
  width: number = 400,
  height: number = 300,
  padding: number = 50
) {
  const rawAtoms = molecule.atoms;
  const rawBonds = molecule.bonds;

  if (!rawAtoms || rawAtoms.length === 0) {
    return { atoms: [], bonds: [], bounds: { minX: 0, maxX: width, minY: 0, maxY: height } };
  }

  // 1. Calculate bounding box of 3D/2D coordinates
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  rawAtoms.forEach((a) => {
    if (a.x < minX) minX = a.x;
    if (a.x > maxX) maxX = a.x;
    if (a.y < minY) minY = a.y;
    if (a.y > maxY) maxY = a.y;
  });

  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;

  const drawableWidth = width - padding * 2;
  const drawableHeight = height - padding * 2;

  const scale = Math.min(drawableWidth / rangeX, drawableHeight / rangeY);

  const offsetX = (width - rangeX * scale) / 2 - minX * scale;
  const offsetY = (height - rangeY * scale) / 2 - minY * scale;

  // 2. Project Atoms
  const atoms: ProjectedAtom2D[] = rawAtoms.map((a, idx) => {
    const px = a.x * scale + offsetX;
    // Invert Y for screen SVG coordinates
    const py = height - (a.y * scale + offsetY);

    const connectedBonds = rawBonds.filter((b) => b.source === idx || b.target === idx);
    const element = a.element;
    const isCarbon = element === 'C';

    return {
      index: idx,
      element,
      x: px,
      y: py,
      z: a.z,
      cpk: getCPK(element),
      hybridization: a.hybridization,
      isCarbon,
      isTerminal: connectedBonds.length <= 1,
      connectedCount: connectedBonds.length,
    };
  });

  // 3. Project Bonds
  const bonds: ProjectedBond2D[] = rawBonds.map((b) => {
    const sAtom = atoms[b.source];
    const tAtom = atoms[b.target];

    const dx = tAtom.x - sAtom.x;
    const dy = tAtom.y - sAtom.y;
    const length = Math.sqrt(dx * dx + dy * dy);

    return {
      source: b.source,
      target: b.target,
      order: b.order,
      x1: sAtom.x,
      y1: sAtom.y,
      x2: tAtom.x,
      y2: tAtom.y,
      length,
    };
  });

  return { atoms, bonds, bounds: { minX, maxX, minY, maxY } };
}

/**
 * Generate SVG paths for bond lines (single, double, triple, wedge/dash)
 */
export function calculateBondOffsets(
  b: ProjectedBond2D,
  offsetDistance: number = 4
) {
  const dx = b.x2 - b.x1;
  const dy = b.y2 - b.y1;
  const len = b.length || 1;

  // Perpendicular vector
  const nx = -dy / len;
  const ny = dx / len;

  if (b.order === 1) {
    return [
      { x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2 }
    ];
  } else if (b.order === 2) {
    return [
      {
        x1: b.x1 + nx * offsetDistance,
        y1: b.y1 + ny * offsetDistance,
        x2: b.x2 + nx * offsetDistance,
        y2: b.y2 + ny * offsetDistance,
      },
      {
        x1: b.x1 - nx * offsetDistance,
        y1: b.y1 - ny * offsetDistance,
        x2: b.x2 - nx * offsetDistance,
        y2: b.y2 - ny * offsetDistance,
      },
    ];
  } else if (b.order === 3) {
    return [
      { x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2 },
      {
        x1: b.x1 + nx * (offsetDistance * 1.5),
        y1: b.y1 + ny * (offsetDistance * 1.5),
        x2: b.x2 + nx * (offsetDistance * 1.5),
        y2: b.y2 + ny * (offsetDistance * 1.5),
      },
      {
        x1: b.x1 - nx * (offsetDistance * 1.5),
        y1: b.y1 - ny * (offsetDistance * 1.5),
        x2: b.x2 - nx * (offsetDistance * 1.5),
        y2: b.y2 - ny * (offsetDistance * 1.5),
      },
    ];
  }

  return [{ x1: b.x1, y1: b.y1, x2: b.x2, y2: b.y2 }];
}

/**
 * Generate Lewis electron lone pair dot positions around an atom
 */
export function getLewisDots(
  atom: ProjectedAtom2D,
  connectedBonds: ProjectedBond2D[]
) {
  const lonePairsCount = atom.cpk.lonePairs;
  if (lonePairsCount <= 0) return [];

  // Find angles of connected bonds to avoid overlap
  const usedAngles: number[] = [];
  connectedBonds.forEach((b) => {
    const isSource = b.source === atom.index;
    const ox = isSource ? b.x2 - b.x1 : b.x1 - b.x2;
    const oy = isSource ? b.y2 - b.y1 : b.y1 - b.y2;
    usedAngles.push(Math.atan2(oy, ox));
  });

  // Default placement directions: 0 (right), PI/2 (down), PI (left), -PI/2 (up)
  const candidateAngles = [0, Math.PI / 2, Math.PI, -Math.PI / 2];
  
  // Pick angles furthest from connected bonds
  const bestAngles = candidateAngles
    .map((ang) => {
      let minDiff = Infinity;
      usedAngles.forEach((ua) => {
        let diff = Math.abs(ang - ua);
        while (diff > Math.PI) diff -= 2 * Math.PI;
        diff = Math.abs(diff);
        if (diff < minDiff) minDiff = diff;
      });
      return { angle: ang, minDiff };
    })
    .sort((a, b) => b.minDiff - a.minDiff)
    .slice(0, lonePairsCount)
    .map((item) => item.angle);

  const dots: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const dist = atom.cpk.radius + 6;

  bestAngles.forEach((ang) => {
    const cx = atom.x + Math.cos(ang) * dist;
    const cy = atom.y + Math.sin(ang) * dist;

    // A lone pair consists of 2 dots separated by 4px perpendicular to angle
    const perpAng = ang + Math.PI / 2;
    dots.push({
      x1: cx + Math.cos(perpAng) * 2.5,
      y1: cy + Math.sin(perpAng) * 2.5,
      x2: cx - Math.cos(perpAng) * 2.5,
      y2: cy - Math.sin(perpAng) * 2.5,
    });
  });

  return dots;
}
