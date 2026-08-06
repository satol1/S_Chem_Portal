import * as THREE from 'three';
import type { Molecule, HybridizationType, RenderOptions } from '../types';

export const ELEMENT_INFO: Record<
  string,
  { name: string; colorClass: string; hexColor: number; radius: number; vdwRadius: number }
> = {
  H: { name: 'Водород (H)', colorClass: 'bg-slate-200 border-slate-300', hexColor: 0xf8fafc, radius: 0.28, vdwRadius: 0.70 },
  C: { name: 'Углерод (C)', colorClass: 'bg-slate-700 border-white', hexColor: 0x334155, radius: 0.45, vdwRadius: 1.05 },
  O: { name: 'Кислород (O)', colorClass: 'bg-red-500 border-white', hexColor: 0xef4444, radius: 0.42, vdwRadius: 0.95 },
  N: { name: 'Азот (N)', colorClass: 'bg-blue-500 border-white', hexColor: 0x3b82f6, radius: 0.43, vdwRadius: 0.98 },
  P: { name: 'Фосфор (P)', colorClass: 'bg-orange-500 border-white', hexColor: 0xf97316, radius: 0.52, vdwRadius: 1.15 },
  F: { name: 'Фтор (F)', colorClass: 'bg-emerald-400 border-white', hexColor: 0x10b981, radius: 0.40, vdwRadius: 0.90 },
  Cl: { name: 'Хлор (Cl)', colorClass: 'bg-emerald-500 border-white', hexColor: 0x22c55e, radius: 0.50, vdwRadius: 1.10 },
  Br: { name: 'Бром (Br)', colorClass: 'bg-rose-800 border-white', hexColor: 0x991b1b, radius: 0.55, vdwRadius: 1.18 },
  I: { name: 'Иод (I)', colorClass: 'bg-purple-700 border-white', hexColor: 0x6b21a8, radius: 0.60, vdwRadius: 1.28 },
  Cr: { name: 'Хром (Cr)', colorClass: 'bg-indigo-400 border-white', hexColor: 0x8a99c7, radius: 0.52, vdwRadius: 1.20 },
  Mn: { name: 'Марганец (Mn)', colorClass: 'bg-purple-400 border-white', hexColor: 0x9c7ac7, radius: 0.52, vdwRadius: 1.20 },
};

export const HYBRIDIZATION_INFO: Record<
  HybridizationType,
  { label: string; name: string; geometryDesc: string; hexColor: number; cssColor: string; bgClass: string }
> = {
  sp: {
    label: 'sp',
    name: 'sp-Гибридизация',
    geometryDesc: 'Линейная (180°)',
    hexColor: 0x00f0ff,
    cssColor: '#00f0ff',
    bgClass: 'bg-cyan-500/10 text-cyan-700 border-cyan-300',
  },
  sp2: {
    label: 'sp²',
    name: 'sp²-Гибридизация',
    geometryDesc: 'Тригональная плоская (120°)',
    hexColor: 0xa855f7,
    cssColor: '#a855f7',
    bgClass: 'bg-purple-500/10 text-purple-700 border-purple-300',
  },
  sp3: {
    label: 'sp³',
    name: 'sp³-Гибридизация',
    geometryDesc: 'Тетраэдрическая (109.5°)',
    hexColor: 0x10b981,
    cssColor: '#10b981',
    bgClass: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
  },
};

/**
 * Detects atom hybridization based on explicit metadata or chemical connectivity & bond orders.
 */
export function detectHybridization(atomIndex: number, molecule: Molecule): HybridizationType | null {
  const atom = molecule.atoms[atomIndex];
  if (!atom) return null;
  if (atom.hybridization) return atom.hybridization;

  // Hydrogen atoms only have a 1s orbital (no hybridization)
  if (atom.element === 'H') return null;

  const attachedBonds = molecule.bonds.filter((b) => b.source === atomIndex || b.target === atomIndex);
  if (attachedBonds.length === 0) return null;

  let doubleBonds = 0;
  let tripleBonds = 0;

  attachedBonds.forEach((b) => {
    if (b.order === 2) doubleBonds++;
    if (b.order === 3) tripleBonds++;
  });

  if (tripleBonds > 0 || doubleBonds >= 2) return 'sp';
  if (doubleBonds === 1) return 'sp2';

  if (['C', 'N', 'O', 'S', 'P'].includes(atom.element)) {
    return 'sp3';
  }

  return null;
}

/**
 * Creates a single high-quality teardrop orbital lobe mesh with glowing emissive material.
 */
/**
 * Creates a scientifically accurate hybrid orbital lobe mesh containing:
 * - A large elongated Major Lobe pointing forward along +Y (primary bonding site)
 * - A smaller secondary Minor Lobe (back-lobe / tail) pointing backward along -Y
 */
function createOrbitalLobeMesh(colorHex: number, scale: number = 0.7): THREE.Mesh {
  const points: THREE.Vector2[] = [];

  // 1. Minor Back-lobe (Tail) along -Y (from -0.3 to 0)
  const minorSegments = 8;
  for (let i = 0; i <= minorSegments; i++) {
    const t = i / minorSegments; // 0 to 1
    const y = -0.28 * (1 - t) * scale;
    const radius = Math.sin(t * Math.PI) * 0.14 * scale;
    points.push(new THREE.Vector2(radius, y));
  }

  // 2. Major Lobe along +Y (from 0 to 1.15)
  const majorSegments = 24;
  for (let i = 0; i <= majorSegments; i++) {
    const t = i / majorSegments; // 0 to 1
    const y = t * 1.15 * scale;
    // Asymmetric teardrop profile curve
    const radius = Math.sin(t * Math.PI) * Math.pow(t, 0.45) * 0.42 * scale;
    points.push(new THREE.Vector2(radius, y));
  }

  const geometry = new THREE.LatheGeometry(points, 24);

  const material = new THREE.MeshStandardMaterial({
    color: colorHex,
    emissive: colorHex,
    emissiveIntensity: 0.75,
    roughness: 0.15,
    metalness: 0.1,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.NormalBlending,
  });

  return new THREE.Mesh(geometry, material);
}

/**
 * Computes direction vectors for orbital lobes based on hybridization type and actual bond directions to neighbors.
 * Ensures bonded lobes align EXACTLY with bond cylinders, while non-bonding lone pairs complete the geometry.
 */
function getHybridizationDirections(hybType: HybridizationType, neighbors: THREE.Vector3[]): THREE.Vector3[] {
  const dirs: THREE.Vector3[] = [];
  const normNeighbors = neighbors.map((n) => n.clone().normalize());

  if (hybType === 'sp') {
    if (normNeighbors.length >= 2) {
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[1].clone());
    } else if (normNeighbors.length === 1) {
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[0].clone().negate());
    } else {
      dirs.push(new THREE.Vector3(1, 0, 0));
      dirs.push(new THREE.Vector3(-1, 0, 0));
    }
  } else if (hybType === 'sp2') {
    if (normNeighbors.length >= 3) {
      // 3 bonded neighbors: each lobe points directly along the bond vector
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[1].clone());
      dirs.push(normNeighbors[2].clone());
    } else if (normNeighbors.length === 2) {
      // 2 bonded neighbors + 1 lone pair (trigonal planar)
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[1].clone());
      const sum = new THREE.Vector3().addVectors(normNeighbors[0], normNeighbors[1]);
      if (sum.lengthSq() > 1e-4) {
        dirs.push(sum.normalize().negate());
      } else {
        const perp = new THREE.Vector3(-normNeighbors[0].y, normNeighbors[0].x, 0).normalize();
        dirs.push(perp);
      }
    } else if (normNeighbors.length === 1) {
      dirs.push(normNeighbors[0].clone());
      const v0 = normNeighbors[0];
      const temp = Math.abs(v0.z) < 0.9 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
      const normal = new THREE.Vector3().crossVectors(v0, temp).normalize();
      const rot120 = new THREE.Quaternion().setFromAxisAngle(normal, (2 * Math.PI) / 3);
      const rot240 = new THREE.Quaternion().setFromAxisAngle(normal, (4 * Math.PI) / 3);
      dirs.push(v0.clone().applyQuaternion(rot120));
      dirs.push(v0.clone().applyQuaternion(rot240));
    } else {
      dirs.push(new THREE.Vector3(0, 1, 0));
      dirs.push(new THREE.Vector3(Math.sqrt(3) / 2, -0.5, 0));
      dirs.push(new THREE.Vector3(-Math.sqrt(3) / 2, -0.5, 0));
    }
  } else if (hybType === 'sp3') {
    if (normNeighbors.length >= 4) {
      // 4 bonded neighbors (e.g. C in CH4, Alkanes, Glucose): each lobe points EXACTLY along its bond rod!
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[1].clone());
      dirs.push(normNeighbors[2].clone());
      dirs.push(normNeighbors[3].clone());
    } else if (normNeighbors.length === 3) {
      // 3 bonded neighbors + 1 lone pair (e.g. N in amines)
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[1].clone());
      dirs.push(normNeighbors[2].clone());
      const sum = new THREE.Vector3()
        .add(normNeighbors[0])
        .add(normNeighbors[1])
        .add(normNeighbors[2]);
      if (sum.lengthSq() > 1e-4) {
        dirs.push(sum.normalize().negate());
      } else {
        dirs.push(new THREE.Vector3(0, 0, 1));
      }
    } else if (normNeighbors.length === 2) {
      // 2 bonded neighbors + 2 lone pairs (e.g. O in H2O, Alcohols, Ethers)
      dirs.push(normNeighbors[0].clone());
      dirs.push(normNeighbors[1].clone());
      const sum = new THREE.Vector3().addVectors(normNeighbors[0], normNeighbors[1]);
      const cross = new THREE.Vector3().crossVectors(normNeighbors[0], normNeighbors[1]);

      const backDir = sum.lengthSq() > 1e-4 ? sum.normalize().negate() : new THREE.Vector3(0, 0, -1);
      const normDir = cross.lengthSq() > 1e-4 ? cross.normalize() : new THREE.Vector3(0, 1, 0);

      // Tetrahedral angle ~ 54.7 deg from bisector
      const cosA = Math.cos((54.7 * Math.PI) / 180);
      const sinA = Math.sin((54.7 * Math.PI) / 180);

      const lp1 = new THREE.Vector3()
        .addScaledVector(backDir, cosA)
        .addScaledVector(normDir, sinA)
        .normalize();

      const lp2 = new THREE.Vector3()
        .addScaledVector(backDir, cosA)
        .addScaledVector(normDir, -sinA)
        .normalize();

      dirs.push(lp1);
      dirs.push(lp2);
    } else if (normNeighbors.length === 1) {
      dirs.push(normNeighbors[0].clone());
      const v0 = normNeighbors[0];
      const baseTetra: THREE.Vector3[] = [
        new THREE.Vector3(1, 1, 1).normalize(),
        new THREE.Vector3(1, -1, -1).normalize(),
        new THREE.Vector3(-1, 1, -1).normalize(),
        new THREE.Vector3(-1, -1, 1).normalize(),
      ];
      const q = new THREE.Quaternion().setFromUnitVectors(baseTetra[0], v0);
      dirs.push(baseTetra[1].clone().applyQuaternion(q));
      dirs.push(baseTetra[2].clone().applyQuaternion(q));
      dirs.push(baseTetra[3].clone().applyQuaternion(q));
    } else {
      dirs.push(new THREE.Vector3(1, 1, 1).normalize());
      dirs.push(new THREE.Vector3(1, -1, -1).normalize());
      dirs.push(new THREE.Vector3(-1, 1, -1).normalize());
      dirs.push(new THREE.Vector3(-1, -1, 1).normalize());
    }
  }

  return dirs;
}

/**
 * Builds the 3D glowing orbital cloud group for a specific atom.
 */
function buildHybridizationGroup(
  atomPos: THREE.Vector3,
  neighbors: THREE.Vector3[],
  hybType: HybridizationType,
  atomRadius: number,
  cloudOpacityFactor: number = 1.0
): THREE.Group {
  const group = new THREE.Group();
  group.position.copy(atomPos);

  const info = HYBRIDIZATION_INFO[hybType];
  const colorHex = info.hexColor;
  const lobeScale = 0.75 + atomRadius * 0.3;

  const dirs = getHybridizationDirections(hybType, neighbors);

  dirs.forEach((dir) => {
    const lobeMesh = createOrbitalLobeMesh(colorHex, lobeScale);

    if (cloudOpacityFactor < 1.0) {
      const mat = lobeMesh.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.55 * cloudOpacityFactor;
    }

    // Lathe mesh extends along Y axis (0, 1, 0)
    const defaultY = new THREE.Vector3(0, 1, 0);
    const quat = new THREE.Quaternion().setFromUnitVectors(defaultY, dir.clone().normalize());
    lobeMesh.setRotationFromQuaternion(quat);

    // Offset slightly outward along direction vector
    lobeMesh.position.copy(dir.clone().normalize().multiplyScalar(atomRadius * 0.15));

    group.add(lobeMesh);
  });

  return group;
}

/**
 * Builds or updates the 3D scene group for a molecule supporting ball-and-stick / CPK space-filling models
 * and electron hybridization clouds visualization.
 */
export function buildMoleculeSceneGroup(group: THREE.Group, molecule: Molecule, options: RenderOptions = {}) {
  const { renderMode = 'ball-and-stick', showHybridization = false, transitionProgress } = options;

  // Clear previous children
  while (group.children.length > 0) {
    const obj = group.children[0];
    group.remove(obj);
  }

  // Determine interpolation factor t (0 = ball-and-stick, 1 = space-filling)
  let t = 0;
  if (typeof transitionProgress === 'number') {
    t = Math.max(0, Math.min(1, transitionProgress));
  } else {
    t = renderMode === 'space-filling' ? 1.0 : 0.0;
  }

  // Calculate center of mass to center the molecule
  let cx = 0,
    cy = 0,
    cz = 0;
  molecule.atoms.forEach((atom) => {
    cx += atom.x;
    cy += atom.y;
    cz += atom.z;
  });
  const count = molecule.atoms.length || 1;
  cx /= count;
  cy /= count;
  cz /= count;

  const atomPositions: THREE.Vector3[] = molecule.atoms.map(
    (atom) => new THREE.Vector3(atom.x - cx, atom.y - cy, atom.z - cz)
  );

  // 1. Render Atoms (Spheres)
  molecule.atoms.forEach((atom, idx) => {
    const info = ELEMENT_INFO[atom.element] || {
      hexColor: 0x94a3b8,
      radius: 0.4,
      vdwRadius: 0.9,
    };

    // Interpolate radius between ball-and-stick (covalent) and space-filling (VdW)
    const currentRadius = info.radius + (info.vdwRadius - info.radius) * t;

    const geometry = new THREE.SphereGeometry(currentRadius, 36, 36);
    const material = new THREE.MeshStandardMaterial({
      color: info.hexColor,
      roughness: 0.25,
      metalness: 0.1,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(atomPositions[idx]);
    mesh.userData = { atomIndex: idx, element: atom.element };
    group.add(mesh);
  });

  // 2. Render Bonds (Cylinders)
  // Multiple bonds are drawn as parallel rods (standard ball-and-stick convention):
  // order 2 -> two rods side by side, order 3 -> three rods in a triangular arrangement.
  const bondScale = 1.0 - t;
  if (bondScale > 0.01) {
    const MULTI_BOND_OFFSET = 0.11;

    molecule.bonds.forEach((bond) => {
      const posA = atomPositions[bond.source];
      const posB = atomPositions[bond.target];
      if (!posA || !posB) return;

      const distance = posA.distanceTo(posB);
      const order = bond.order ?? 1;
      const bondRadius = (order > 1 ? 0.065 : 0.08) * bondScale;

      // Rod offsets in the plane perpendicular to the bond axis
      const offsets: THREE.Vector3[] = [];
      if (order === 1) {
        offsets.push(new THREE.Vector3(0, 0, 0));
      } else {
        const bondDir = new THREE.Vector3().subVectors(posB, posA).normalize();
        const refAxis = Math.abs(bondDir.y) < 0.9 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
        const perp1 = new THREE.Vector3().crossVectors(bondDir, refAxis).normalize();
        const perp2 = new THREE.Vector3().crossVectors(bondDir, perp1).normalize();

        if (order === 2) {
          offsets.push(perp1.clone().multiplyScalar(MULTI_BOND_OFFSET));
          offsets.push(perp1.clone().multiplyScalar(-MULTI_BOND_OFFSET));
        } else {
          // Triple bond: three rods at 120° around the bond axis
          for (let i = 0; i < 3; i++) {
            const angle = (i * 2 * Math.PI) / 3;
            offsets.push(
              new THREE.Vector3()
                .addScaledVector(perp1, Math.cos(angle))
                .addScaledVector(perp2, Math.sin(angle))
                .multiplyScalar(MULTI_BOND_OFFSET)
            );
          }
        }
      }

      const orientation = new THREE.Matrix4();
      orientation.lookAt(posA, posB, new THREE.Vector3(0, 1, 0));

      offsets.forEach((offset) => {
        const bondGeometry = new THREE.CylinderGeometry(bondRadius, bondRadius, distance, 16);
        const bondMaterial = new THREE.MeshStandardMaterial({
          color: 0xcbd5e1,
          roughness: 0.3,
          transparent: t > 0,
          opacity: bondScale,
        });

        const bondMesh = new THREE.Mesh(bondGeometry, bondMaterial);
        const midpoint = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5).add(offset);
        bondMesh.position.copy(midpoint);

        bondMesh.setRotationFromMatrix(orientation);
        bondMesh.rotateX(Math.PI / 2);

        group.add(bondMesh);
      });
    });
  }

  // 3. Render Hybridization Orbital Clouds (Only active in Ball-and-Stick mode; fades out during transition)
  const cloudOpacityFactor = 1.0 - t;
  if (showHybridization && cloudOpacityFactor > 0.01) {
    molecule.atoms.forEach((atom, idx) => {
      const hybType = detectHybridization(idx, molecule);
      if (!hybType) return;

      const atomPos = atomPositions[idx];
      const info = ELEMENT_INFO[atom.element] || { radius: 0.4, vdwRadius: 0.9 };
      const currentRadius = info.radius + (info.vdwRadius - info.radius) * t;

      // Find neighbor positions relative to atomPos
      const neighborPositions: THREE.Vector3[] = [];
      molecule.bonds.forEach((b) => {
        if (b.source === idx && atomPositions[b.target]) {
          neighborPositions.push(new THREE.Vector3().subVectors(atomPositions[b.target], atomPos));
        } else if (b.target === idx && atomPositions[b.source]) {
          neighborPositions.push(new THREE.Vector3().subVectors(atomPositions[b.source], atomPos));
        }
      });

      const hybGroup = buildHybridizationGroup(
        atomPos,
        neighborPositions,
        hybType,
        currentRadius,
        cloudOpacityFactor
      );
      group.add(hybGroup);
    });
  }
}
