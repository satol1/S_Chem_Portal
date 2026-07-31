import React, { useState } from 'react';
import { ROADMAP_DATA } from '../../data/roadmap';
import type { SkillNode } from '../../types';
import { CheckCircle, BookOpen, MapPin, Sparkles, Trophy } from 'lucide-react';

export const SkillRoadmap: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>(ROADMAP_DATA[0].id);

  const activeNode: SkillNode = ROADMAP_DATA.find((n) => n.id === activeNodeId) || ROADMAP_DATA[0];

  return (
    <div className="w-full glass-card rounded-3xl p-6 border border-slate-200/80 shadow-xl">
      {/* Header */}
      <div className="mb-6 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Образовательный трек Школы</span>
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">Карта развития умений ученика</h3>
        <p className="text-sm text-slate-600 mt-1">
          Пошаговая траектория превращения школьника в уверенного эксперта по химии с высоким результатом ОГЭ/ЕГЭ и олимпиадными льготами.
        </p>
      </div>

      {/* Timeline Steps Bar */}
      <div className="relative mb-8 pt-4">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-4 right-4 h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
          {ROADMAP_DATA.map((step, idx) => {
            const isActive = step.id === activeNodeId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveNodeId(step.id)}
                className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs mb-1.5 ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  0{idx + 1}
                </div>
                <span className="text-xs font-bold line-clamp-1">{step.grade}</span>
                <span className={`text-[10px] ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {step.level}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 border border-slate-200/80 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200/60">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
              {activeNode.grade} • Уровень: {activeNode.level}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>{activeNode.title}</span>
            </h4>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Цель этапа: Высокий балл и ВУЗ</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {activeNode.description}
        </p>

        {/* Topics Grid */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Осваиваемые темы и практические навыки:</span>
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeNode.topics.map((topic, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/70 shadow-sm text-xs font-medium text-slate-800">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
