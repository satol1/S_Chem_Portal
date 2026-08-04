import React, { useState, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Info, Sparkles } from 'lucide-react';

interface Interactive2DViewerProps {
  type: 'diamond' | 'graphite' | 'fullerene' | 'silicon';
}

export const CarbonSiliconInteractive2DViewer: React.FC<Interactive2DViewerProps> = ({ type }) => {
  const [zoom, setZoom] = useState(1);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  // Optimized zoom handlers
  const handleZoomIn = useCallback(() => setZoom((prev) => Math.min(prev + 0.25, 2.25)), []);
  const handleZoomOut = useCallback(() => setZoom((prev) => Math.max(prev - 0.25, 0.75)), []);
  const handleReset = useCallback(() => {
    setZoom(1);
    setSelectedPart(null);
  }, []);

  // Wheel zoom handler
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.15, 2.25));
    } else {
      setZoom((prev) => Math.max(prev - 0.15, 0.75));
    }
  };

  // Specification data per allotrope
  const getSpecData = () => {
    switch (type) {
      case 'diamond':
        return {
          title: 'Алмаз (C)',
          subtitle: 'Тетраэдрическая атомная решетка',
          items: [
            { label: 'Тип решетки', value: 'Атомная трехмерная сеть', highlightKey: 'lattice' },
            { label: 'Гибридизация', value: 'sp³-тетраэдр', highlightKey: 'sp3' },
            { label: 'Валентный угол', value: '109°28\' (109.47°)', highlightKey: 'angle' },
            { label: 'Длина связи C-C', value: '1.54 Å (0.154 нм)', highlightKey: 'bond' },
            { label: 'Тип связей', value: 'Прочные ковалентные σ-связи', highlightKey: 'bond' },
            { label: 'Твердость', value: '10 по шкале Мооса (максимальная)', highlightKey: null },
            { label: 'Проводимость', value: 'Идеальный диэлектрик (нет e⁻)', highlightKey: null },
            { label: 'Теплопроводность', value: 'Рекордно высокая (до 2200 Вт/м·К)', highlightKey: null },
          ],
        };
      case 'graphite':
        return {
          title: 'Графит (C)',
          subtitle: 'Слоистая гексагональная структура',
          items: [
            { label: 'Тип решетки', value: 'Слоистая атомно-молекулярная', highlightKey: 'lattice' },
            { label: 'Гибридизация', value: 'sp²-плоские слои (графен)', highlightKey: 'layer' },
            { label: 'Связи C-C в слое', value: '1.42 Å (0.142 нм)', highlightKey: 'layer' },
            { label: 'Межслойный зазор', value: '3.35 Å (0.335 нм)', highlightKey: 'vdw' },
            { label: 'Межслойные связи', value: 'Слабые Ван-дер-Ваальсовы', highlightKey: 'vdw' },
            { label: 'Электроны', value: 'Делокализованная π-система', highlightKey: 'pi' },
            { label: 'Проводимость', value: 'Электропроводник (полуметалл)', highlightKey: 'pi' },
            { label: 'Свойства', value: 'Чешуйчатый, жирный на ощупь', highlightKey: null },
          ],
        };
      case 'fullerene':
        return {
          title: 'Фуллерен C₆₀',
          subtitle: 'Сферический молекулярный кластер',
          items: [
            { label: 'Тип решетки', value: 'Молекулярная кристаллическая', highlightKey: 'lattice' },
            { label: 'Форма молекулы', value: 'Усеченный икосаэдр (бакибол)', highlightKey: 'bucky' },
            { label: 'Пятиугольники', value: '12 пентагонов (изолированных)', highlightKey: 'pentagon' },
            { label: 'Шестиугольники', value: '20 гексагонов', highlightKey: 'hexagon' },
            { label: 'Диаметр C₆₀', value: '≈ 7.1 Å (0.71 нм)', highlightKey: 'bucky' },
            { label: 'Гибридизация C', value: 'Искривленная sp²-гибридизация', highlightKey: 'sp2' },
            { label: 'Растворимость', value: 'Растворим в толуоле/бензоле', highlightKey: null },
            { label: 'Цвет растворов', value: 'Красно-фиолетовый', highlightKey: null },
          ],
        };
      case 'silicon':
        return {
          title: 'Кремний (Si)',
          subtitle: 'Кубическая решетка типа алмаза',
          items: [
            { label: 'Тип решетки', value: 'Кубическая алмазоподобная', highlightKey: 'lattice' },
            { label: 'Гибридизация Si', value: 'sp³-тетраэдр кремния', highlightKey: 'sp3' },
            { label: 'Длина связи Si-Si', value: '2.35 Å (0.235 нм)', highlightKey: 'bond' },
            { label: 'Энергия связи', value: '222 кДж/моль (слабее C-C)', highlightKey: 'bond' },
            { label: 'Запрещенная зона', value: 'Eg = 1.12 эВ (при 300 К)', highlightKey: 'semi' },
            { label: 'Проводимость', value: 'Собственный полупроводник', highlightKey: 'semi' },
            { label: 'Твердость', value: '7 по шкале Мооса (хрупкий)', highlightKey: null },
            { label: 'Применение', value: 'Микроэлектроника, процессоры', highlightKey: null },
          ],
        };
    }
  };

  const specData = getSpecData();

  // Selected details comment text
  const getSelectedComment = () => {
    if (!selectedPart) return null;
    switch (selectedPart) {
      case 'center_c':
      case 'sp3':
        return 'Выбран атом углерода/кремния (sp³-гибридизация). 4 валентных электрона образуют прочные σ-связи.';
      case 'angle':
        return 'Выбран валентный угол 109°28\' (тетраэдрический угол между связями C-C).';
      case 'bond':
        return 'Выбрана ковалентная связь C-C / Si-Si. Длина связи определяет механическую прочность решетки.';
      case 'layer':
        return 'Выбран графеновый слой. Атомы C связаны в плоские шестиугольники с прочными связями 1.42 Å.';
      case 'vdw':
        return 'Выбрано межслойное пространство (3.35 Å). Слабые силы Ван-дер-Ваальса позволяют слоям легко скользить.';
      case 'pi':
        return 'Выбрана делокализованная π-система. Негибридные p-электроны свободно перемещаются по слою.';
      case 'pentagon':
        return 'Выбран пятиугольник (пентагон). В молекуле C₆₀ ровно 12 пятиугольников, обеспечивающих сферический изгиб.';
      case 'hexagon':
        return 'Выбран шестиугольник (гексагон). В молекуле C₆₀ содержится 20 гексагонов.';
      case 'bucky':
        return 'Выбрана сферическая оболочка C₆₀ диаметром 7.1 Å (молекулярный каркас Бакминстерфуллерена).';
      case 'semi':
        return 'Выбраны полупроводниковые свойства Si. Ширина запрещенной зоны 1.12 эВ позволяет создавать транзисторы.';
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full h-full font-sans text-slate-100 select-none">
      
      {/* LEFT: Optimized SVG Canvas Container */}
      <div 
        onWheel={handleWheel}
        className={`
          relative flex-1 bg-slate-950 rounded-xl border border-slate-800 
          overflow-hidden flex items-center justify-center 
          min-h-[300px] sm:min-h-[360px]
        `}
      >
        {/* Floating Zoom Controls Toolbar */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur border border-slate-700/80 p-1.5 rounded-xl shadow-lg">
          <button
            onClick={handleZoomIn}
            title="Приблизить (+)"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition active:scale-95"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            title="Отдалить (-)"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition active:scale-95"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-slate-400 px-1 font-semibold">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleReset}
            title="Сбросить масштаб"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition border-l border-slate-800 ml-0.5 active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tip Badge */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none text-[10px] sm:text-xs font-mono text-slate-400 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Кликните на атомы/связи для подсветки • Колесо мыши — масштаб</span>
        </div>

        {/* Smooth Scaled SVG Container (hardware accelerated) */}
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
          }}
          className="w-full h-full flex items-center justify-center p-4"
        >
          {type === 'diamond' && (
            <svg viewBox="0 0 400 320" className="w-full max-w-[380px] h-auto">
              {/* Bonds */}
              <line 
                x1="200" y1="160" x2="100" y2="250" 
                stroke={selectedPart === 'bond' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth={selectedPart === 'bond' ? '5' : '3.5'} 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />
              <line 
                x1="200" y1="160" x2="310" y2="235" 
                stroke={selectedPart === 'bond' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth={selectedPart === 'bond' ? '5' : '3.5'} 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />
              <line 
                x1="200" y1="160" x2="200" y2="45" 
                stroke={selectedPart === 'bond' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth={selectedPart === 'bond' ? '5' : '3.5'} 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />
              <line 
                x1="200" y1="160" x2="160" y2="130" 
                stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="4 3" 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />

              {/* Angle Arc */}
              <path 
                d="M 170 190 A 35 35 0 0 0 235 185" 
                fill="none" 
                stroke={selectedPart === 'angle' ? '#fbbf24' : '#e2e8f0'} 
                strokeWidth={selectedPart === 'angle' ? '3' : '1.5'} 
                strokeDasharray="3 2"
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('angle')}
              />
              <text 
                x="205" y="215" textAnchor="middle" 
                fill={selectedPart === 'angle' ? '#fbbf24' : '#f59e0b'} 
                fontSize="13" fontWeight="bold" 
                className="cursor-pointer"
                onClick={() => setSelectedPart('angle')}
              >
                109°28'
              </text>

              {/* Central Atom */}
              <circle 
                cx="200" cy="160" r={selectedPart === 'center_c' || selectedPart === 'sp3' ? '20' : '17'} 
                fill={selectedPart === 'center_c' || selectedPart === 'sp3' ? '#fbbf24' : '#38bdf8'} 
                stroke="#0284c7" strokeWidth="3" 
                className="cursor-pointer transition-all duration-150 hover:scale-110"
                onClick={() => setSelectedPart('center_c')}
              />
              <text x="200" y="165" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" pointerEvents="none">C</text>

              {/* Vertex Atoms */}
              <circle cx="100" cy="250" r="14" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" className="cursor-pointer hover:fill-amber-300 transition-all duration-150" onClick={() => setSelectedPart('sp3')} />
              <circle cx="310" cy="235" r="14" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" className="cursor-pointer hover:fill-amber-300 transition-all duration-150" onClick={() => setSelectedPart('sp3')} />
              <circle cx="200" cy="45" r="14" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" className="cursor-pointer hover:fill-amber-300 transition-all duration-150" onClick={() => setSelectedPart('sp3')} />
              <circle cx="160" cy="130" r="11" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" className="cursor-pointer hover:fill-amber-300 transition-all duration-150" onClick={() => setSelectedPart('sp3')} />
            </svg>
          )}

          {type === 'graphite' && (
            <svg viewBox="0 0 400 320" className="w-full max-w-[380px] h-auto">
              {/* Layer 1 Top */}
              <g transform="translate(200, 90)">
                <polygon 
                  points="-120,-30 -55,-50 55,-50 120,-30 55,-10 -55,-10" 
                  fill={selectedPart === 'layer' ? '#0369a1' : '#1e293b'} 
                  fillOpacity="0.7" 
                  stroke={selectedPart === 'layer' ? '#fbbf24' : '#38bdf8'} 
                  strokeWidth={selectedPart === 'layer' ? '3' : '2'}
                  className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                  onClick={() => setSelectedPart('layer')}
                />
                <circle cx="-120" cy="-30" r="6" fill="#38bdf8" />
                <circle cx="-55" cy="-50" r="6" fill="#38bdf8" />
                <circle cx="55" cy="-50" r="6" fill="#38bdf8" />
                <circle cx="120" cy="-30" r="6" fill="#38bdf8" />
                <circle cx="55" cy="-10" r="6" fill="#38bdf8" />
                <circle cx="-55" cy="-10" r="6" fill="#38bdf8" />
              </g>

              {/* Van der Waals Dashed Lines */}
              <line 
                x1="80" y1="60" x2="80" y2="190" 
                stroke={selectedPart === 'vdw' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth={selectedPart === 'vdw' ? '3' : '1.5'} 
                strokeDasharray="4 3" 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('vdw')}
              />
              <line 
                x1="255" y1="80" x2="255" y2="210" 
                stroke={selectedPart === 'vdw' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth={selectedPart === 'vdw' ? '3' : '1.5'} 
                strokeDasharray="4 3" 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('vdw')}
              />
              <line 
                x1="320" y1="60" x2="320" y2="190" 
                stroke={selectedPart === 'vdw' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth={selectedPart === 'vdw' ? '3' : '1.5'} 
                strokeDasharray="4 3" 
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('vdw')}
              />

              {/* Layer 2 Bottom */}
              <g transform="translate(200, 220)">
                <polygon 
                  points="-120,-30 -55,-50 55,-50 120,-30 55,-10 -55,-10" 
                  fill={selectedPart === 'layer' ? '#0369a1' : '#0f172a'} 
                  fillOpacity="0.8" 
                  stroke={selectedPart === 'layer' ? '#fbbf24' : '#94a3b8'} 
                  strokeWidth={selectedPart === 'layer' ? '3' : '2'}
                  className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                  onClick={() => setSelectedPart('layer')}
                />
                <circle cx="-120" cy="-30" r="6" fill="#cbd5e1" />
                <circle cx="-55" cy="-50" r="6" fill="#cbd5e1" />
                <circle cx="55" cy="-50" r="6" fill="#cbd5e1" />
                <circle cx="120" cy="-30" r="6" fill="#cbd5e1" />
                <circle cx="55" cy="-10" r="6" fill="#cbd5e1" />
                <circle cx="-55" cy="-10" r="6" fill="#cbd5e1" />
              </g>
            </svg>
          )}

          {type === 'fullerene' && (
            <svg viewBox="0 0 400 320" className="w-full max-w-[380px] h-auto">
              <circle 
                cx="200" cy="160" r="100" 
                fill="none" 
                stroke={selectedPart === 'bucky' ? '#fbbf24' : '#334155'} 
                strokeWidth={selectedPart === 'bucky' ? '3' : '1.5'} 
                strokeDasharray="4 4"
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('bucky')}
              />

              {/* Pentagon */}
              <polygon 
                points="200,120 238,146 224,190 176,190 162,146" 
                fill={selectedPart === 'pentagon' ? '#d97706' : '#1e293b'} 
                stroke={selectedPart === 'pentagon' ? '#fbbf24' : '#f59e0b'} 
                strokeWidth="3"
                className="cursor-pointer hover:fill-amber-600 transition-colors duration-150"
                onClick={() => setSelectedPart('pentagon')}
              />

              {/* Hexagon Polylines */}
              <polyline 
                points="200,120 200,80 148,92 162,146" 
                fill={selectedPart === 'hexagon' ? '#0284c7' : 'none'} 
                stroke={selectedPart === 'hexagon' ? '#fbbf24' : '#38bdf8'} 
                strokeWidth="2.5"
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('hexagon')}
              />
              <polyline 
                points="200,120 200,80 252,92 238,146" 
                fill={selectedPart === 'hexagon' ? '#0284c7' : 'none'} 
                stroke={selectedPart === 'hexagon' ? '#fbbf24' : '#38bdf8'} 
                strokeWidth="2.5"
                className="cursor-pointer hover:stroke-amber-400 transition-all duration-150"
                onClick={() => setSelectedPart('hexagon')}
              />

              {/* Nodes */}
              <circle cx="200" cy="120" r="5" fill="#fbbf24" />
              <circle cx="238" cy="146" r="5" fill="#fbbf24" />
              <circle cx="224" cy="190" r="5" fill="#fbbf24" />
              <circle cx="176" cy="190" r="5" fill="#fbbf24" />
              <circle cx="162" cy="146" r="5" fill="#fbbf24" />
            </svg>
          )}

          {type === 'silicon' && (
            <svg viewBox="0 0 400 320" className="w-full max-w-[380px] h-auto">
              <rect x="110" y="70" width="180" height="180" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Bonds */}
              <line 
                x1="200" y1="160" x2="140" y2="220" 
                stroke={selectedPart === 'bond' ? '#fbbf24' : '#14b8a6'} 
                strokeWidth={selectedPart === 'bond' ? '5' : '3.5'} 
                className="cursor-pointer hover:stroke-teal-300 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />
              <line 
                x1="200" y1="160" x2="270" y2="210" 
                stroke={selectedPart === 'bond' ? '#fbbf24' : '#14b8a6'} 
                strokeWidth={selectedPart === 'bond' ? '5' : '3.5'} 
                className="cursor-pointer hover:stroke-teal-300 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />
              <line 
                x1="200" y1="160" x2="200" y2="90" 
                stroke={selectedPart === 'bond' ? '#fbbf24' : '#14b8a6'} 
                strokeWidth={selectedPart === 'bond' ? '5' : '3.5'} 
                className="cursor-pointer hover:stroke-teal-300 transition-all duration-150"
                onClick={() => setSelectedPart('bond')}
              />

              {/* Silicon Node */}
              <circle 
                cx="200" cy="160" r={selectedPart === 'semi' || selectedPart === 'sp3' ? '20' : '17'} 
                fill={selectedPart === 'semi' || selectedPart === 'sp3' ? '#fbbf24' : '#2dd4bf'} 
                stroke="#0f766e" strokeWidth="3" 
                className="cursor-pointer hover:scale-110 transition-transform duration-150"
                onClick={() => setSelectedPart('semi')}
              />
              <text x="200" y="165" textAnchor="middle" fill="#042f2e" fontSize="12" fontWeight="extrabold" pointerEvents="none">Si</text>

              <circle cx="140" cy="220" r="13" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" className="cursor-pointer hover:fill-teal-200 transition-all duration-150" onClick={() => setSelectedPart('bond')} />
              <circle cx="270" cy="210" r="13" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" className="cursor-pointer hover:fill-teal-200 transition-all duration-150" onClick={() => setSelectedPart('bond')} />
              <circle cx="200" cy="90" r="13" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" className="cursor-pointer hover:fill-teal-200 transition-all duration-150" onClick={() => setSelectedPart('bond')} />
            </svg>
          )}
        </div>
      </div>

      {/* RIGHT: HTML Specifications Panel */}
      <div className="w-full lg:w-[320px] shrink-0 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-inner space-y-4 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="border-b border-slate-800 pb-2.5 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <Info className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{specData.title}</span>
              </h4>
              <p className="text-xs text-slate-400 font-sans mt-0.5">{specData.subtitle}</p>
            </div>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              2D-модель
            </span>
          </div>

          {/* Interactive comment if part selected */}
          {selectedPart && getSelectedComment() && (
            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed font-sans animate-in fade-in duration-150">
              <span className="font-bold">Элемент выделен:</span> {getSelectedComment()}
            </div>
          )}

          {/* Structured Key-Value Specification List */}
          <div className="space-y-2">
            {specData.items.map((item, idx) => {
              const isHighlighted = selectedPart && item.highlightKey === selectedPart;
              return (
                <div
                  key={idx}
                  onClick={() => item.highlightKey && setSelectedPart(item.highlightKey)}
                  className={`
                    p-2 rounded-lg border text-xs sm:text-sm transition-all duration-150 cursor-pointer flex items-center justify-between gap-2
                    ${
                      isHighlighted
                        ? 'bg-amber-500/15 border-amber-500/50 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                    }
                  `}
                >
                  <span className="text-slate-400 font-medium shrink-0">{item.label}:</span>
                  <span className="font-semibold text-right font-sans text-slate-100 break-words">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Справочные данные</span>
          <button
            onClick={handleReset}
            className="text-sky-400 hover:text-sky-300 hover:underline transition cursor-pointer"
          >
            Сбросить выбор
          </button>
        </div>
      </div>

    </div>
  );
};
