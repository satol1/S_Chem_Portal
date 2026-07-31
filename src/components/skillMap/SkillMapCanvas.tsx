import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  ZoomIn, ZoomOut, RotateCcw, Move, MousePointer 
} from 'lucide-react';
import type { SkillNode } from '../../types/skillMap';
import { GradeLevels, SKILL_BRANCHES } from '../../data/skillsData';

interface Props {
  skills: SkillNode[];
  allSkills: SkillNode[];
  zoomLevel: number;
  panPosition: { x: number; y: number };
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onPanChange: (pan: { x: number; y: number }) => void;
  onZoomChange: (zoom: number) => void;
  onSelectSkill: (skillId: string) => void;
  onUpdateNodePosition: (skillId: string, deltaX: number, deltaY: number) => void;
}

const NODE_WIDTH = 270;
const NODE_HEIGHT = 160;

export const SkillMapCanvas: React.FC<Props> = ({
  skills,
  allSkills,
  zoomLevel,
  panPosition,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  onPanChange,
  onZoomChange,
  onSelectSkill,
  onUpdateNodePosition,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomLevelRef = useRef<number>(zoomLevel);
  zoomLevelRef.current = zoomLevel;

  // Interaction State
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [draggedNodeId, setDraggedNodeId] = useState<string | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Optimized Wheel Zoom Listener without constant re-registration
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.08 : -0.08;
      const nextZoom = Math.max(0.45, Math.min(1.8, zoomLevelRef.current + delta));
      onZoomChange(nextZoom);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [onZoomChange]);

  // Handle Pointer Drag for Canvas Panning and Node Moving
  const handlePointerDownBackground = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsPanning(true);
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerDownNode = (e: React.PointerEvent, skillId: string) => {
    e.stopPropagation();
    if (e.button !== 0) return;
    setDraggedNodeId(skillId);
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const dx = (e.clientX - pointerStartRef.current.x) / zoomLevel;
    const dy = (e.clientY - pointerStartRef.current.y) / zoomLevel;

    if (draggedNodeId) {
      onUpdateNodePosition(draggedNodeId, dx, dy);
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
    } else if (isPanning) {
      onPanChange({
        x: panPosition.x + (e.clientX - pointerStartRef.current.x),
        y: panPosition.y + (e.clientY - pointerStartRef.current.y),
      });
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsPanning(false);
    setDraggedNodeId(null);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore release pointer errors
    }
  };

  // Compute SVG Connection Lines with anchor sockets (filtering-bug proof!)
  const edges = useMemo(() => {
    const edgeList: {
      id: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      isHighlighted: boolean;
    }[] = [];

    // Set of currently visible skill IDs
    const visibleSkillIds = new Set(skills.map(s => s.id));

    skills.forEach(fromNode => {
      fromNode.nextSkills.forEach(targetId => {
        // Fix: Only draw edge if BOTH source and target nodes are currently visible!
        if (visibleSkillIds.has(targetId)) {
          const toNode = allSkills.find(n => n.id === targetId);
          if (toNode) {
            const isHighlighted = 
              hoveredSkillId === fromNode.id || hoveredSkillId === toNode.id;
            
            const x1 = fromNode.position.x + NODE_WIDTH;
            const y1 = fromNode.position.y + NODE_HEIGHT / 2;
            const x2 = toNode.position.x;
            const y2 = toNode.position.y + NODE_HEIGHT / 2;

            edgeList.push({
              id: `${fromNode.id}->${toNode.id}`,
              x1,
              y1,
              x2,
              y2,
              isHighlighted,
            });
          }
        }
      });
    });

    return edgeList;
  }, [skills, allSkills, hoveredSkillId]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDownBackground}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`relative w-full h-[760px] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl select-none ${
        isPanning ? 'cursor-grabbing' : draggedNodeId ? 'cursor-move' : 'cursor-grab'
      }`}
    >
      
      {/* Grid Matrix Background */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(20, 184, 166, 0.5) 1.5px, transparent 0)`,
          backgroundSize: `${32 * zoomLevel}px ${32 * zoomLevel}px`,
          backgroundPosition: `${panPosition.x}px ${panPosition.y}px`
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Header */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900/90 border-b border-slate-800/80 z-20 flex items-center justify-between px-8 text-xs font-black text-slate-300 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Move className="w-4 h-4 text-teal-400" />
          <span>Бесшовный интерактивный граф умений (Miro / Figma Canvas)</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <MousePointer className="w-3.5 h-3.5 text-teal-400" />
          <span>Перетягивайте узлы мышью • Колесико — масштаб</span>
        </div>
      </div>

      {/* Main Canvas Infinite Transform Viewport */}
      <div
        className="w-full h-full relative"
        style={{
          transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
          transformOrigin: '0 0',
          transition: isPanning || draggedNodeId ? 'none' : 'transform 0.15s ease-out',
        }}
      >
        <div className="relative min-w-[2600px] min-h-[1400px]">
          
          {/* Grade Level Swimlanes */}
          <div className="absolute inset-0 pointer-events-none flex">
            {GradeLevels.map((grade, idx) => (
              <div
                key={grade.id}
                style={{ left: `${idx * 380 + 40}px`, width: '340px' }}
                className="absolute top-16 bottom-16 border-l border-r border-slate-800/30 bg-slate-900/10 rounded-3xl p-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-teal-300 text-xs font-black">
                  <span>{grade.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* SVG Cubic Bezier Connection Lines Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {edges.map(edge => {
              const dx = Math.abs(edge.x2 - edge.x1) * 0.55;
              const pathD = `M ${edge.x1} ${edge.y1} C ${edge.x1 + dx} ${edge.y1}, ${edge.x2 - dx} ${edge.y2}, ${edge.x2} ${edge.y2}`;

              return (
                <g key={edge.id}>
                  {edge.isHighlighted && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth={8}
                      opacity={0.3}
                      filter="url(#glow)"
                    />
                  )}

                  <path
                    d={pathD}
                    fill="none"
                    stroke={edge.isHighlighted ? 'url(#activeGradient)' : 'url(#defaultGradient)'}
                    strokeWidth={edge.isHighlighted ? 3.5 : 2}
                    strokeDasharray={edge.isHighlighted ? '8,8' : 'none'}
                    className={edge.isHighlighted ? 'animate-pulse' : ''}
                  />

                  {edge.isHighlighted && (
                    <circle
                      cx={(edge.x1 + edge.x2) / 2}
                      cy={(edge.y1 + edge.y2) / 2}
                      r="4"
                      fill="#14b8a6"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Interactive Skill Nodes */}
          <div className="relative z-10 w-full h-full">
            {skills.map(skill => {
              const branchMeta = SKILL_BRANCHES.find(b => b.id === skill.branch);
              const isHovered = hoveredSkillId === skill.id;

              return (
                <div
                  key={skill.id}
                  onPointerDown={(e) => handlePointerDownNode(e, skill.id)}
                  onMouseEnter={() => setHoveredSkillId(skill.id)}
                  onMouseLeave={() => setHoveredSkillId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSkill(skill.id);
                  }}
                  style={{
                    left: `${skill.position.x}px`,
                    top: `${skill.position.y}px`,
                    width: `${NODE_WIDTH}px`,
                    height: `${NODE_HEIGHT}px`,
                  }}
                  className={`absolute rounded-2xl p-4 border transition-shadow duration-200 cursor-pointer backdrop-blur-xl flex flex-col justify-between group shadow-xl bg-slate-900/90 border-slate-800 hover:border-teal-400 text-white ${
                    isHovered || draggedNodeId === skill.id
                      ? 'ring-2 ring-teal-400 scale-102 z-30 shadow-2xl shadow-teal-500/30 border-teal-400'
                      : 'z-10 hover:z-20'
                  }`}
                >
                  {/* Socket Anchor Dot Left (Input) */}
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  </div>

                  {/* Socket Anchor Dot Right (Output) */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  </div>

                  {/* Top Card Row */}
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono text-[10px] font-black text-teal-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {skill.code}
                    </span>

                    {skill.fipiExamTarget && (
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 rounded">
                        {skill.fipiExamTarget}
                      </span>
                    )}
                  </div>

                  {/* Middle Title & Subtitle */}
                  <div>
                    <h4 className="text-xs font-black text-white leading-snug line-clamp-2 group-hover:text-teal-300 transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-[10px] text-teal-400/90 font-medium line-clamp-1 mt-0.5">
                      {skill.subtitle}
                    </p>
                  </div>

                  {/* Bottom Metadata */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                    <span className="text-slate-400 font-semibold truncate">{branchMeta?.name}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Floating Bottom Control Dock Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl">
        <button
          onClick={onZoomOut}
          className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-teal-500 hover:text-slate-950 transition"
          title="Отдалить карту (-)"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 px-2">
          <input
            type="range"
            min="0.45"
            max="1.8"
            step="0.05"
            value={zoomLevel}
            onChange={(e) => onZoomChange(parseFloat(e.target.value))}
            className="w-24 accent-teal-400 cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-teal-400 w-10 text-right">
            {Math.round(zoomLevel * 100)}%
          </span>
        </div>

        <button
          onClick={onZoomIn}
          className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-teal-500 hover:text-slate-950 transition"
          title="Приблизить карту (+)"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <div className="h-4 w-px bg-slate-700 mx-1" />

        <button
          onClick={onZoomReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
          title="Сбросить позицию и масштаб"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>По центру</span>
        </button>
      </div>

    </div>
  );
};
