import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MOLECULES_DATA } from '../../data/molecules';
import type { Molecule, RenderMode } from '../../types';
import { RotateCw, Info, Sparkles, ZoomIn, ZoomOut, Maximize2, Layers, Box, Orbit } from 'lucide-react';
import {
  buildMoleculeSceneGroup,
  ELEMENT_INFO,
  HYBRIDIZATION_INFO,
  detectHybridization,
} from '../../utils/threeMoleculeRenderer';

export interface MoleculeViewer3DProps {
  moleculeIds?: string[];
  initialSelectedId?: string;
  title?: string;
}

const DEFAULT_HOME_MOLECULES = ['h2o', 'benzene', 'ch4', 'caffeine', 'ethanol', 'dopamine', 'gaba', 'glucose'];

export const MoleculeViewer3D: React.FC<MoleculeViewer3DProps> = ({
  moleculeIds,
  initialSelectedId,
}) => {
  const availableMolecules = React.useMemo(() => {
    if (moleculeIds && moleculeIds.length > 0) {
      const filtered = MOLECULES_DATA.filter((m) => moleculeIds.includes(m.id));
      return filtered.length > 0 ? filtered : MOLECULES_DATA;
    }
    return MOLECULES_DATA.filter((m) => DEFAULT_HOME_MOLECULES.includes(m.id));
  }, [moleculeIds]);

  const [selectedId, setSelectedId] = useState<string>(() => {
    if (initialSelectedId && availableMolecules.some((m) => m.id === initialSelectedId)) {
      return initialSelectedId;
    }
    return availableMolecules[0]?.id || 'h2o';
  });

  React.useEffect(() => {
    if (!availableMolecules.some((m) => m.id === selectedId)) {
      if (availableMolecules.length > 0) {
        setSelectedId(availableMolecules[0].id);
      }
    }
  }, [availableMolecules, selectedId]);

  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [renderMode, setRenderMode] = useState<RenderMode>('ball-and-stick');
  const [showHybridization, setShowHybridization] = useState<boolean>(false);

  const autoRotateRef = useRef<boolean>(autoRotate);
  autoRotateRef.current = autoRotate;

  // Transition progress animation state (0 = ball-and-stick, 1 = space-filling)
  const transitionRef = useRef<number>(renderMode === 'space-filling' ? 1.0 : 0.0);
  const targetTransitionRef = useRef<number>(renderMode === 'space-filling' ? 1.0 : 0.0);
  const transitionAnimIdRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const molecule: Molecule = availableMolecules.find((m) => m.id === selectedId) || availableMolecules[0] || MOLECULES_DATA[0];

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const moleculeGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Initialize Three.js Scene, Camera, Renderer and Lighting
  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Lighting Setup
    scene.add(new THREE.AmbientLight(0xffffff, 0.85));

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 0.6);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x10b981, 0.9, 12);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);
    moleculeGroupRef.current = group;

    // Render loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (group && autoRotateRef.current) {
        group.rotation.y += 0.008;
        group.rotation.x += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Mouse Interaction Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !group) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Update target transition progress when render mode changes
  useEffect(() => {
    targetTransitionRef.current = renderMode === 'space-filling' ? 1.0 : 0.0;
  }, [renderMode]);

  // Re-build molecule geometry whenever parameters or animation step changes
  const updateSceneGeometry = (progress: number) => {
    const group = moleculeGroupRef.current;
    if (group) {
      buildMoleculeSceneGroup(group, molecule, {
        renderMode,
        showHybridization,
        transitionProgress: progress,
      });
    }
  };

  // Smooth lerp transition loop between ball-and-stick and space-filling modes
  useEffect(() => {
    const startAnim = () => {
      if (transitionAnimIdRef.current) {
        cancelAnimationFrame(transitionAnimIdRef.current);
      }

      const step = () => {
        const target = targetTransitionRef.current;
        const current = transitionRef.current;
        const diff = target - current;

        if (Math.abs(diff) < 0.005) {
          transitionRef.current = target;
          updateSceneGeometry(target);
          transitionAnimIdRef.current = null;
        } else {
          transitionRef.current += diff * 0.15; // Smooth lerp
          updateSceneGeometry(transitionRef.current);
          transitionAnimIdRef.current = requestAnimationFrame(step);
        }
      };

      step();
    };

    startAnim();
  }, [renderMode, selectedId, showHybridization, molecule]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const factor = direction === 'in' ? 0.8 : 1.25;
    cameraRef.current.position.z = Math.max(3, Math.min(15, cameraRef.current.position.z * factor));
  };

  // Collect hybridization stats for the current molecule
  const moleculeHybridizationSummary = React.useMemo(() => {
    const counts: Record<string, number> = {};
    molecule.atoms.forEach((atom, idx) => {
      const hyb = detectHybridization(idx, molecule);
      if (hyb) {
        const key = `${atom.element}(${hyb})`;
        counts[key] = (counts[key] || 0) + 1;
      }
    });
    return counts;
  }, [molecule]);

  return (
    <div className="w-full glass-card rounded-3xl p-6 relative overflow-hidden border border-slate-200/80 shadow-xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900">{molecule.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                {molecule.category}
              </span>
            </div>
            <p className="text-xs text-slate-600 font-medium tracking-wide mt-0.5">IUPAC: {molecule.iupacName}</p>
          </div>
        </div>

        {/* Controls & Mode Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Display Mode Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setRenderMode('ball-and-stick')}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                renderMode === 'ball-and-stick'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Шарнирно-стержневая модель"
            >
              <Box className="w-3.5 h-3.5 text-emerald-600" />
              <span>Шарики и стержни</span>
            </button>
            <button
              onClick={() => {
                setRenderMode('space-filling');
                setShowHybridization(false);
              }}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                renderMode === 'space-filling'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Пространственная модель (CPK)"
            >
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>Пространственная (CPK)</span>
            </button>
          </div>

          {/* Hybridization Toggle */}
          <button
            onClick={() => {
              if (renderMode === 'space-filling') {
                setRenderMode('ball-and-stick');
                setShowHybridization(true);
              } else {
                setShowHybridization(!showHybridization);
              }
            }}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border transition-all ${
              showHybridization && renderMode === 'ball-and-stick'
                ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-500/20'
                : renderMode === 'space-filling'
                ? 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200 hover:text-slate-700 cursor-pointer'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title={
              renderMode === 'space-filling'
                ? 'Электронные облака доступны в шарнирно-стержневой модели (нажмите для переключения)'
                : 'Отобразить типы гибридизации и электронные облака (sp, sp², sp³)'
            }
          >
            <Orbit className={`w-4 h-4 ${showHybridization && renderMode === 'ball-and-stick' ? 'animate-spin' : ''}`} />
            <span>Электронные облака</span>
            {renderMode === 'space-filling' && (
              <span className="text-[10px] bg-slate-200 text-slate-600 px-1 rounded">off</span>
            )}
          </button>

          {/* Rotation Toggle */}
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition ${
              autoRotate
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title="Вращение"
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Вращается' : 'Пауза'}</span>
          </button>

          {/* Zoom Buttons */}
          <button
            onClick={() => handleZoom('in')}
            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            title="Увеличить"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom('out')}
            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            title="Уменьшить"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Molecule Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {availableMolecules.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedId(m.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedId === m.id
                ? 'bg-slate-900 text-white shadow-md ring-2 ring-slate-900/20'
                : 'bg-white/90 text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {m.formula} ({m.name.split(' ')[0]})
          </button>
        ))}
      </div>

      {/* 3D WebGL Canvas Container */}
      <div className="relative w-full h-[380px] rounded-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border border-slate-700/60 overflow-hidden cursor-grab active:cursor-grabbing shadow-inner">
        <div ref={containerRef} className="w-full h-full" />

        {/* Drag Helper overlay */}
        <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] text-slate-300 shadow-sm flex items-center gap-1.5">
          <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Зажмите левую кнопку мыши для вращения в 3D</span>
        </div>

        {/* Hybridization Legend Overlay (Visible when showHybridization is active) */}
        {showHybridization && (
          <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-purple-500/40 shadow-lg flex flex-col gap-2 max-w-[220px]">
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
              <Orbit className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>Орбитали (Гибридизация)</span>
            </div>

            <div className="flex flex-col gap-1.5 text-[11px]">
              {(['sp', 'sp2', 'sp3'] as const).map((type) => {
                const info = HYBRIDIZATION_INFO[type];
                return (
                  <div key={type} className="flex items-center justify-between gap-2 bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full shadow-sm"
                        style={{ backgroundColor: info.cssColor, boxShadow: `0 0 8px ${info.cssColor}` }}
                      />
                      <span className="font-bold text-white">{info.label}</span>
                    </div>
                    <span className="text-slate-400 text-[10px]">{info.geometryDesc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic Element Legend */}
        <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-700 shadow-sm flex flex-col gap-1.5 text-xs font-medium">
          <span className="text-[10px] uppercase text-slate-400 font-bold mb-0.5">Атомы в молекуле</span>
          {Array.from(new Set(molecule.atoms.map((a) => a.element))).map((elem) => {
            const info = ELEMENT_INFO[elem] || { name: `${elem}`, colorClass: 'bg-slate-400 border-white' };
            return (
              <div key={elem} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full shadow-sm border ${info.colorClass}`} />
                <span className="text-slate-200 font-semibold">{info.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Molecule Details & Hybridization Summary Footer */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 text-xs">
          <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
            <Info className="w-4 h-4 text-emerald-600" />
            <span>Химическое описание</span>
          </div>
          <p className="text-emerald-800 leading-relaxed">{molecule.description}</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs">
          <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Интересный факт</span>
          </div>
          <p className="text-amber-800 leading-relaxed">{molecule.funFact}</p>
        </div>

        <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200/60 text-xs">
          <div className="font-bold text-purple-900 flex items-center gap-1.5 mb-1">
            <Orbit className="w-4 h-4 text-purple-600" />
            <span>Гибридизация атомов в молекуле</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {Object.keys(moleculeHybridizationSummary).length > 0 ? (
              Object.entries(moleculeHybridizationSummary).map(([key, count]) => {
                const typeMatch = key.match(/\((sp\d?)\)/);
                const hybType = typeMatch ? (typeMatch[1] as keyof typeof HYBRIDIZATION_INFO) : 'sp3';
                const hybStyle = HYBRIDIZATION_INFO[hybType] || HYBRIDIZATION_INFO.sp3;
                return (
                  <span
                    key={key}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold border ${hybStyle.bgClass}`}
                  >
                    {key}: {count} шт.
                  </span>
                );
              })
            ) : (
              <span className="text-purple-700 italic">Орбитали 1s (без гибридизации)</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
