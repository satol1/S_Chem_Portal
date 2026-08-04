import React, { useState, useEffect, useRef } from 'react';
import {
  projectMolecule2D,
  calculateBondOffsets,
  getLewisDots,
  renderSMILESToSVG,
  type Render2DMode,
} from '../../utils/molecule2DRenderer';
import { MOLECULES_DATA } from '../../data/molecules';
import type { Molecule } from '../../types';
import type { Molecule2DTheme } from '../../utils/molecule2DTheme';
import { getThemePalette } from '../../utils/molecule2DTheme';
import {
  Maximize2,
  Sparkles,
  Download,
  Layers,
  Search,
  Check,
  Zap
} from 'lucide-react';
import { CarbonSilicon2DRender } from '../study/topics/carbonSilicon/CarbonSilicon2DRenders';
import { SulfurOxygen2DRender } from '../study/topics/sulfurOxygen/SulfurOxygen2DRenders';

export type Allotrope2DType =
  | 'diamond'
  | 'graphite'
  | 'fullerene'
  | 'silicon'
  | 'rhombic-sulfur'
  | 'ozone'
  | 'so2'
  | 'h2so4';

export interface MoleculeViewer2DProps {
  molecule?: Molecule;
  moleculeId?: string;
  smiles?: string;
  allotropeType?: Allotrope2DType;
  initialMode?: Render2DMode;
  theme?: Molecule2DTheme;
  showControls?: boolean;
  className?: string;
  isModal?: boolean;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  onOpenModal?: () => void;
}

export const MoleculeViewer2D: React.FC<MoleculeViewer2DProps> = ({
  molecule: customMolecule,
  moleculeId,
  smiles: customSmiles,
  allotropeType,
  initialMode = 'structural',
  theme = 'dark',
  showControls = true,
  className = '',
  isModal = false,
  title,
  description,
  width = 400,
  height = 300,
  onOpenModal,
}) => {
  const palette = getThemePalette(theme);
  // Resolve molecule
  const molecule = React.useMemo(() => {
    if (customMolecule) return customMolecule;
    if (moleculeId) return MOLECULES_DATA.find((m) => m.id === moleculeId);
    return MOLECULES_DATA[0];
  }, [customMolecule, moleculeId]);

  const [mode, setMode] = useState<Render2DMode>(
    allotropeType ? 'allotrope' : customSmiles ? 'smiles' : initialMode
  );
  const [showHybridization, setShowHybridization] = useState(true);
  const [showLonePairs, setShowLonePairs] = useState(true);
  const [smilesInput, setSmilesInput] = useState(customSmiles || 'CC(=O)O');
  const [activeSmiles, setActiveSmiles] = useState(customSmiles || 'CC(=O)O');
  const [smilesError, setSmilesError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const smilesSvgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Render SMILES when activeSmiles or mode changes
  useEffect(() => {
    if (mode === 'smiles' && smilesSvgRef.current && activeSmiles) {
      setSmilesError(null);
      renderSMILESToSVG(activeSmiles, smilesSvgRef.current, {
        width: 380,
        height: 260,
        theme,
      }).catch((err) => {
        setSmilesError('Ошибка синтаксиса SMILES формулы');
        console.warn('SmilesDrawer error:', err);
      });
    }
  }, [mode, activeSmiles]);

  // Projected 2D Geometry
  const projected = React.useMemo(() => {
    if (!molecule) return { atoms: [], bonds: [] };
    return projectMolecule2D(molecule, width, height, 45);
  }, [molecule, width, height]);

  // Export SVG handler
  const handleExportSVG = () => {
    if (!containerRef.current) return;
    const svgEl = containerRef.current.querySelector('svg');
    if (!svgEl) return;

    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${molecule?.id || allotropeType || 'molecule'}-2d.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col rounded-xl overflow-hidden shadow-xl transition-all ${palette.containerClass} ${className}`}
      style={{ borderColor: palette.panelBorder, backgroundColor: palette.background }}
    >
      {/* Header Toolbar */}
      {showControls && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 border-b backdrop-blur-md"
          style={{ backgroundColor: palette.toolbarClass.includes('bg-') ? undefined : palette.backgroundAlt, borderColor: palette.panelBorder }}
        >
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg border" style={{ backgroundColor: palette.highlight + '20', color: palette.highlight, borderColor: palette.highlight + '40' }}>
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold leading-none" style={{ color: palette.textPrimary }}>
                {title || molecule?.name || '2D-Модель Молекулы'}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                {molecule?.formula || activeSmiles}
              </p>
            </div>
          </div>

          {/* Mode Selector Buttons */}
          <div className="flex items-center gap-1 p-1 rounded-lg border"
            style={{ backgroundColor: palette.background, borderColor: palette.panelBorder }}>
            {!allotropeType && (
              <>
                <button
                  onClick={() => setMode('skeletal')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'skeletal'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  title="Скелетная химическая формула"
                >
                  Скелетная
                </button>
                <button
                  onClick={() => setMode('structural')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'structural'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  title="Развернутая структурная формула"
                >
                  Структурная
                </button>
                <button
                  onClick={() => setMode('lewis')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'lewis'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  title="Электронная формула Льюиса"
                >
                  Льюис ⚡
                </button>
                <button
                  onClick={() => setMode('ball-and-stick')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'ball-and-stick'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  title="2D Шаростержневая модель CPK"
                >
                  2D-Шары ⚪
                </button>
                <button
                  onClick={() => setMode('smiles')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                    mode === 'smiles'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  title="SMILES Движок"
                >
                  SMILES
                </button>
              </>
            )}
          </div>

          {/* Quick Action Toggles */}
          <div className="flex items-center gap-1">
            {mode === 'lewis' && (
              <button
                onClick={() => setShowLonePairs(!showLonePairs)}
                className={`p-1.5 rounded-lg text-xs border transition-all ${
                  showLonePairs
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                    : 'bg-slate-800/40 text-slate-400 border-slate-700/50'
                }`}
                title="Переключить неспаренные электронные пары"
              >
                <Zap className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={() => setShowHybridization(!showHybridization)}
              className={`p-1.5 rounded-lg text-xs border transition-all ${
                showHybridization
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  : 'bg-slate-800/40 text-slate-400 border-slate-700/50'
              }`}
              title="Переключить гибридизацию (sp, sp2, sp3)"
            >
              <Layers className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleExportSVG}
              className="p-1.5 rounded-lg text-xs bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 border border-slate-700/60 transition-all"
              title="Скачать SVG векторное изображение"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
            </button>
            {onOpenModal && (
              <button
                onClick={onOpenModal}
                className="p-1.5 rounded-lg text-xs bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 transition-all"
                title="Открыть в полноэкранном режиме"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* SMILES Interactive Search Input Bar */}
      {mode === 'smiles' && showControls && (
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800/80 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={smilesInput}
              onChange={(e) => setSmilesInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setActiveSmiles(smilesInput)}
              placeholder="Введите SMILES строку (напр. c1ccccc1, CC(=O)O)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs font-mono text-emerald-400 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <button
            onClick={() => setActiveSmiles(smilesInput)}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all"
          >
            <Search className="w-3.5 h-3.5" />
            Отрисовать
          </button>
        </div>
      )}

      {/* Main Canvas View Area */}
      <div className="relative flex-1 w-full flex items-center justify-center p-4 min-h-[240px]"
        style={{ backgroundColor: palette.backgroundAlt }}>
        {/* Background Grid Accent */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(${palette.gridColor} 1px, transparent 1px)`, backgroundSize: '16px 16px', opacity: palette.gridOpacity }} />

        {/* SMILES Mode View */}
        {mode === 'smiles' ? (
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {smilesError && (
              <div className="absolute top-2 text-xs px-3 py-1 rounded-md border"
                style={{ color: palette.ohGroup, backgroundColor: palette.ohGroup + '20', borderColor: palette.ohGroup + '40' }}>
                {smilesError}
              </div>
            )}
            <svg ref={smilesSvgRef} className="w-full h-full max-w-[420px] max-h-[300px]" />
          </div>
        ) : allotropeType ? (
          // Allotrope Special SVG View
          <AllotropeSVGView allotropeType={allotropeType} isModal={isModal} />
        ) : (
          // Dynamic Projected Molecule 2D SVG
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-full max-w-full max-h-full drop-shadow-lg"
          >
            <defs>
              {/* CPK Radial Gradients for 2D Ball-and-Stick */}
              {projected.atoms.map((atom) => (
                <radialGradient
                  key={`cpk-grad-${atom.index}`}
                  id={`cpk-grad-${atom.index}`}
                  cx="35%"
                  cy="35%"
                  r="65%"
                >
                  <stop offset="0%" stopColor={atom.cpk.color} />
                  <stop offset="60%" stopColor={atom.cpk.darkColor} />
                </radialGradient>
              ))}
            </defs>

            {/* 1. Render Bonds */}
            <g className="bonds-layer">
              {projected.bonds.map((bond, bIdx) => {
                const lines = calculateBondOffsets(bond, mode === 'ball-and-stick' ? 3.5 : 3);
                return (
                  <g key={`bond-${bIdx}`}>
                    {lines.map((line, lIdx) => (
                      <line
                        key={`bond-${bIdx}-line-${lIdx}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={mode === 'ball-and-stick' ? '#475569' : '#94A3B8'}
                        strokeWidth={mode === 'ball-and-stick' ? 4 : mode === 'skeletal' ? 2.5 : 2}
                        strokeLinecap="round"
                      />
                    ))}
                  </g>
                );
              })}
            </g>

            {/* 2. Render Atoms */}
            <g className="atoms-layer">
              {projected.atoms.map((atom) => {
                const showSymbol =
                  mode !== 'skeletal' ||
                  !atom.isCarbon ||
                  atom.isTerminal ||
                  atom.connectedCount === 0;

                // Lewis dots
                const lewisDots =
                  mode === 'lewis' && showLonePairs
                    ? getLewisDots(
                        atom,
                        projected.bonds.filter(
                          (b) => b.source === atom.index || b.target === atom.index
                        )
                      )
                    : [];

                return (
                  <g key={`atom-${atom.index}`} transform={`translate(${atom.x}, ${atom.y})`}>
                    {/* Ball-and-Stick CPK Circle */}
                    {mode === 'ball-and-stick' && (
                      <circle
                        r={atom.cpk.radius}
                        fill={`url(#cpk-grad-${atom.index})`}
                        stroke={atom.cpk.darkColor}
                        strokeWidth={1.5}
                      />
                    )}

                    {/* Structural / Skeletal background mask circle */}
                    {mode !== 'ball-and-stick' && showSymbol && (
                      <circle
                        r={atom.cpk.radius * 0.85}
                        fill="#020617"
                        stroke={atom.cpk.color}
                        strokeWidth={1}
                        opacity={0.9}
                      />
                    )}

                    {/* Element Symbol */}
                    {showSymbol && (
                      <text
                        textAnchor="middle"
                        dy="0.35em"
                        fill={mode === 'ball-and-stick' ? atom.cpk.textColor : atom.cpk.color}
                        fontSize={atom.cpk.radius * (mode === 'ball-and-stick' ? 0.9 : 0.85)}
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        {atom.element}
                      </text>
                    )}

                    {/* Lewis Lone Pair Dots */}
                    {mode === 'lewis' &&
                      lewisDots.map((dot, dIdx) => (
                        <g key={`lewis-dot-${dIdx}`} transform={`translate(${-atom.x}, ${-atom.y})`}>
                          <circle cx={dot.x1} cy={dot.y1} r={2} fill="#38BDF8" />
                          <circle cx={dot.x2} cy={dot.y2} r={2} fill="#38BDF8" />
                        </g>
                      ))}

                    {/* Hybridization Badge */}
                    {showHybridization && atom.hybridization && (
                      <g transform={`translate(${atom.cpk.radius * 0.7}, ${-atom.cpk.radius * 0.7})`}>
                        <rect
                          x={-10}
                          y={-7}
                          width={20}
                          height={14}
                          rx={3}
                          fill="#0F172A"
                          stroke="#F59E0B"
                          strokeWidth={1}
                        />
                        <text
                          textAnchor="middle"
                          dy="0.3em"
                          fill="#FBBF24"
                          fontSize={8}
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          {atom.hybridization}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>
        )}
      </div>

      {/* Description / Caption Footer */}
      {description && (
        <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400">
          {description}
        </div>
      )}
    </div>
  );
};

/**
 * Allotrope SVG View supporting Diamond, Graphite, Fullerene, Silicon, S8, Ozone, SO2, H2SO4
 * Delegates to scientifically verified CarbonSilicon2DRender and SulfurOxygen2DRender.
 */
const AllotropeSVGView: React.FC<{ allotropeType: Allotrope2DType; isModal?: boolean }> = ({
  allotropeType,
  isModal = false,
}) => {
  if (
    allotropeType === 'diamond' ||
    allotropeType === 'graphite' ||
    allotropeType === 'fullerene' ||
    allotropeType === 'silicon'
  ) {
    return <CarbonSilicon2DRender type={allotropeType} isModal={isModal} />;
  }

  if (
    allotropeType === 'rhombic-sulfur' ||
    allotropeType === 'ozone' ||
    allotropeType === 'so2' ||
    allotropeType === 'h2so4'
  ) {
    return <SulfurOxygen2DRender type={allotropeType} isModal={isModal} />;
  }

  return null;
};
