import React from 'react';
import { Thermometer, Zap } from 'lucide-react';
import { kelvinToCelsius } from '../../services/periodicTable/temperatureService';

interface TemperatureControllerProps {
  temperatureKelvin: number;
  onTemperatureChange: (temp: number) => void;
}

const PRESETS = [
  { label: 'Абс. ноль (0 K)', temp: 0 },
  { label: 'Жидкий N₂ (77 K)', temp: 77.36 },
  { label: 'Лёд (273 K)', temp: 273.15 },
  { label: 'Комнатная (298 K)', temp: 298.15 },
  { label: 'Кипение H₂O (373 K)', temp: 373.15 },
  { label: 'Плавление Fe (1811 K)', temp: 1811 },
  { label: 'Поверхность Солнца (5778 K)', temp: 5778 },
];

export const TemperatureController: React.FC<TemperatureControllerProps> = ({
  temperatureKelvin,
  onTemperatureChange,
}) => {
  const celsius = kelvinToCelsius(temperatureKelvin);

  return (
    <div className="w-full">
      <div className="glass-panel p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Индикатор температуры */}
        <div className="flex items-center gap-3 min-w-[240px]">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Thermometer className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Симуляция Температуры:
            </div>
            <div className="text-lg font-mono font-bold text-amber-300 flex items-baseline gap-2">
              <span>{Math.round(temperatureKelvin)} K</span>
              <span className="text-xs text-slate-400">({celsius > 0 ? `+${celsius}` : celsius} °C)</span>
            </div>
          </div>
        </div>

        {/* Слайдер температуры */}
        <div className="w-full max-w-xl flex flex-col gap-1.5">
          <input
            type="range"
            min={0}
            max={6000}
            step={10}
            value={temperatureKelvin}
            onChange={(e) => onTemperatureChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>0 K (-273°C)</span>
            <span>1000 K</span>
            <span>3000 K</span>
            <span>6000 K</span>
          </div>
        </div>

        {/* Быстрые пресеты */}
        <div className="flex flex-wrap items-center gap-1.5 justify-end">
          <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1 mr-1">
            <Zap className="w-3 h-3 text-amber-400" /> Точки:
          </span>
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => onTemperatureChange(p.temp)}
              className={`px-2 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                Math.abs(temperatureKelvin - p.temp) < 2
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
