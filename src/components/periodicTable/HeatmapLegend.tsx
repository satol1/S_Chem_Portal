import React from 'react';
import type { HeatmapProperty } from '../../types/periodicTable';
import { HEATMAP_PROPERTIES } from '../../services/periodicTable/heatmapService';
import { Flame, Info } from 'lucide-react';

interface HeatmapLegendProps {
  property: HeatmapProperty;
}

export const HeatmapLegend: React.FC<HeatmapLegendProps> = ({ property }) => {
  if (property === 'none') return null;

  const propInfo = HEATMAP_PROPERTIES[property];
  if (!propInfo) return null;

  return (
    <div className="w-full">
      <div className="glass-panel p-4 flex flex-col md:flex-row items-center justify-between gap-4 border-amber-500/30 bg-amber-950/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-amber-200">
                Режим Теплокарты: {propInfo.labelRu}
              </h4>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                {propInfo.unit}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              {propInfo.description}
            </p>
          </div>
        </div>

        {/* Шкала Градиента */}
        <div className="w-full md:w-80 flex flex-col gap-1.5">
          <div className="h-3.5 w-full rounded-full overflow-hidden shadow-inner border border-white/20 bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600" />
          <div className="flex justify-between text-xs font-mono font-bold text-slate-300">
            <span>Низкое: {propInfo.min} {propInfo.unit}</span>
            <span>Высокое: {propInfo.max} {propInfo.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
