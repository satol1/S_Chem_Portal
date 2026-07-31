import React from 'react';
import { Lightbulb } from 'lucide-react';

interface FunFactProps {
  title: string;
  description: React.ReactNode;
}

export const CarbonSiliconFunFact: React.FC<FunFactProps> = ({ title, description }) => {
  return (
    <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-2 shadow-2xs">
      <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm sm:text-base">
        <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
        {description}
      </div>
    </div>
  );
};
