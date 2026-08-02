import React, { useState, useCallback } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Info, Sparkles } from 'lucide-react';
import { SulfurOxygen2DRender } from './SulfurOxygen2DRenders';

interface Interactive2DViewerProps {
  type: 'rhombic-sulfur' | 'ozone' | 'h2so4' | 'so2';
}

export const SulfurOxygenInteractive2DViewer: React.FC<Interactive2DViewerProps> = ({ type }) => {
  const [zoom, setZoom] = useState(1);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handleZoomIn = useCallback(() => setZoom((prev) => Math.min(prev + 0.25, 2.25)), []);
  const handleZoomOut = useCallback(() => setZoom((prev) => Math.max(prev - 0.25, 0.75)), []);
  const handleReset = useCallback(() => {
    setZoom(1);
    setSelectedPart(null);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.15, 2.25));
    } else {
      setZoom((prev) => Math.max(prev - 0.15, 0.75));
    }
  };

  const getSpecData = () => {
    switch (type) {
      case 'rhombic-sulfur':
        return {
          title: 'Ромбическая сера (S₈)',
          subtitle: 'Восьмичленный корончатый цикл α-S',
          items: [
            { label: 'Тип решетки', value: 'Молекулярная кристаллическая', highlightKey: 'lattice' },
            { label: 'Гибридизация', value: 'sp³ (неподеленные e⁻ пары)', highlightKey: 'sp3' },
            { label: 'Валентный угол', value: '108° (S-S-S)', highlightKey: 'angle' },
            { label: 'Длина связи S-S', value: '2.06 Å (0.206 нм)', highlightKey: 'bond' },
            { label: 'Тип связей', value: 'Ковалентные неполярные σ-связи', highlightKey: 'bond' },
            { label: 'Устойчивость', value: 'Устойчива при t < 95.6°C', highlightKey: null },
            { label: 'Растворимость', value: 'Не растворима в H₂O, раств. в CS₂', highlightKey: null },
            { label: 'Цвет кристаллов', value: 'Лимонно-желтый', highlightKey: null },
          ],
        };
      case 'ozone':
        return {
          title: 'Озон (O₃)',
          subtitle: 'Изогнутая триатомная структура',
          items: [
            { label: 'Тип решетки', value: 'Молекулярная (в твердом виде)', highlightKey: 'lattice' },
            { label: 'Гибридизация', value: 'sp² (центральный атом O)', highlightKey: 'sp2' },
            { label: 'Валентный угол', value: '116.8° (O-O-O)', highlightKey: 'angle' },
            { label: 'Длина связи O-O', value: '1.278 Å (промежуточная между 1 и 2)', highlightKey: 'bond' },
            { label: 'Электронная система', value: 'Делокализованная 3-центровая 4e⁻ π-связь', highlightKey: 'pi' },
            { label: 'Окислительная сила', value: 'Сильнейший окислитель (O₃ + 2KI + H₂O -> I₂)', highlightKey: null },
            { label: 'Биороль', value: 'Защита биосферы от УФ-излучения', highlightKey: null },
            { label: 'Запах', value: 'Резкий свежий «грозовой» запах', highlightKey: null },
          ],
        };
      case 'h2so4':
        return {
          title: 'Серная кислота (H₂SO₄)',
          subtitle: 'Тетраэдрическая мономерная структура',
          items: [
            { label: 'Степень окисления', value: 'S(+6), O(-2), H(+1)', highlightKey: 's6' },
            { label: 'Гибридизация', value: 'sp³-тетраэдр (атом S)', highlightKey: 'sp3' },
            { label: 'Тип связей', value: '2 двойные S=O (dπ-pπ), 2 одинарные S-OH', highlightKey: 'bonds' },
            { label: 'Основность', value: 'Двухосновная сильная кислота', highlightKey: null },
            { label: 'Физическое состояние', value: 'Тяжелая маслянистая жидкость', highlightKey: null },
            { label: 'Гигроскопичность', value: 'Исключительно высокая (дегидрататор)', highlightKey: null },
            { label: 'Окислительные свойства', value: 'H₂SO₄(конц) окисляет Cu, Ag, C, S, P', highlightKey: null },
            { label: 'Пассивация', value: 'Пассивирует Fe, Cr, Al на холоду', highlightKey: null },
          ],
        };
      case 'so2':
        return {
          title: 'Диоксид серы (SO₂)',
          subtitle: 'Уголковая молекула сернистого газа',
          items: [
            { label: 'Степень окисления', value: 'S(+4), O(-2)', highlightKey: 's4' },
            { label: 'Гибридизация', value: 'sp² (атом серы)', highlightKey: 'sp2' },
            { label: 'Валентный угол', value: '119.5° (O-S-O)', highlightKey: 'angle' },
            { label: 'Электронная пара', value: '1 неподеленная e⁻ пара на атоме S', highlightKey: 'pair' },
            { label: 'ОВР функция', value: 'Двойственная (преобладает восстановитель)', highlightKey: null },
            { label: 'Качественная реакция', value: 'Обесцвечивание Br₂ и KMnO₄', highlightKey: null },
            { label: 'Запах', value: 'Резкий удушливый запах загорающейся спички', highlightKey: null },
            { label: 'Растворимость в H₂O', value: 'Высокая (40 л SO₂ в 1 л H₂O при 20°C)', highlightKey: null },
          ],
        };
    }
  };

  const spec = getSpecData();

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-6 bg-slate-900 rounded-3xl p-6 border border-slate-800 text-white shadow-2xl">
      {/* 2D Interactive Canvas Area */}
      <div className="flex-1 relative flex flex-col items-center justify-center bg-slate-950 rounded-2xl border border-slate-800 p-4 min-h-[320px] overflow-hidden select-none">
        
        {/* Top Floating Control Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <div className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 backdrop-blur text-[11px] font-mono text-amber-400 font-bold shadow">
            Интерактивный 2D-Спектр • Zoom {(zoom * 100).toFixed(0)}%
          </div>

          <div className="flex items-center gap-1.5 pointer-events-auto bg-slate-900/90 border border-slate-700/80 p-1 rounded-xl backdrop-blur shadow">
            <button
              onClick={handleZoomIn}
              title="Приблизить (+)"
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Отдалить (-)"
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              title="Сбросить масштаб"
              className="p-1.5 rounded-lg hover:bg-slate-800 text-amber-400 hover:text-amber-300 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scalable SVG Render */}
        <div
          className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
          style={{ transform: `scale(${zoom})` }}
          onWheel={handleWheel}
        >
          <SulfurOxygen2DRender type={type} isModal={true} />
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-3 left-3 text-[10px] text-slate-400 flex items-center gap-1 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
          <Info className="w-3 h-3 text-amber-400" />
          <span>Используйте колесо мыши или кнопки для зума</span>
        </div>
      </div>

      {/* Side Specification Panel */}
      <div className="w-full lg:w-80 flex flex-col justify-between space-y-4 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <h3 className="text-base font-extrabold text-white">{spec.title}</h3>
          </div>
          <p className="text-xs text-amber-400 font-medium mb-4">{spec.subtitle}</p>

          <div className="space-y-2 text-xs">
            {spec.items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.highlightKey && setSelectedPart(item.highlightKey)}
                className={`p-2.5 rounded-xl border transition-all duration-150 flex items-center justify-between ${
                  selectedPart === item.highlightKey && item.highlightKey
                    ? 'bg-amber-500/10 border-amber-500/50 text-amber-300'
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                } ${item.highlightKey ? 'cursor-pointer' : ''}`}
              >
                <span className="text-slate-400 font-medium">{item.label}:</span>
                <span className="font-bold text-white text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p>
            Все геометрические параметры соответствуют данным <span className="text-amber-400 font-semibold">PubChem</span> и <span className="text-amber-400 font-semibold">IUPAC</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
