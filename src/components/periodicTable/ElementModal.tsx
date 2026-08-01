import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Layers, Activity, History, Globe } from 'lucide-react';
import type { ChemicalElement } from '../../types/periodicTable';
import { CATEGORIES } from '../../data/periodicTable/categoriesData';
import { BohrModelCanvas } from './BohrModelCanvas';
import { getElementPhaseAtTemp, kelvinToCelsius } from '../../services/periodicTable/temperatureService';
import { ElementTopicButton } from './ElementTopicButton';

interface ElementModalProps {
  element: ChemicalElement | null;
  temperatureKelvin: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

type TabType = 'overview' | 'physical' | 'atomic' | 'history';

export const ElementModal: React.FC<ElementModalProps> = ({
  element,
  temperatureKelvin,
  onClose,
  onPrev,
  onNext,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  // Управление горячими клавишами Escape, Стрелки Влево/Вправо
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!element) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [element, onClose, onPrev, onNext]);

  if (!element) return null;

  const categoryInfo = CATEGORIES[element.category] || CATEGORIES.unknown;
  const currentPhase = getElementPhaseAtTemp(element, temperatureKelvin);

  const phaseLabels: Record<string, string> = {
    solid: 'Твердое тело',
    liquid: 'Жидкость',
    gas: 'Газ',
    synthetic: 'Синтетический элемент',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content glass-modal text-slate-100"
        onClick={(e) => e.stopPropagation()}
        style={{ borderColor: categoryInfo.borderColor }}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-all cursor-pointer"
          title="Закрыть (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Навигация Переключения (Prev / Next) */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80 pr-10">
          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-all flex items-center gap-1 text-xs cursor-pointer"
              title="Предыдущий элемент (Стрелка влево)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Пред.</span>
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-all flex items-center gap-1 text-xs cursor-pointer"
              title="Следующий элемент (Стрелка вправо)"
            >
              <span className="hidden sm:inline">След.</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Бадж Категории */}
          <div
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-md"
            style={{
              backgroundColor: `${categoryInfo.color}20`,
              borderColor: categoryInfo.borderColor,
              color: categoryInfo.color,
            }}
          >
            {categoryInfo.nameRu}
          </div>
        </div>

        {/* Главный карточный блок заголовка элемента */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
          <div className="md:col-span-8 flex items-center gap-5">
            <div
              className="w-24 h-28 rounded-2xl flex flex-col justify-between p-3 border shadow-xl flex-shrink-0"
              style={{
                backgroundColor: `${categoryInfo.color}25`,
                borderColor: categoryInfo.borderColor,
                boxShadow: `0 10px 25px -5px ${categoryInfo.glowColor}`,
              }}
            >
              <div className="flex justify-between text-xs font-mono font-bold" style={{ color: categoryInfo.color }}>
                <span>#{element.number}</span>
                <span className="text-[10px] text-slate-300 font-sans">{element.block}-блок</span>
              </div>
              <div className="text-center">
                <span className="text-4xl font-extrabold font-heading text-white tracking-tight">
                  {element.symbol}
                </span>
              </div>
              <div className="text-center font-mono text-[10px] text-slate-300 truncate">
                {typeof element.atomicMass === 'number' ? element.atomicMass.toFixed(3) : element.atomicMass}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold font-heading text-white">
                {element.nameRu}
              </h2>
              <p className="text-sm font-mono text-slate-400 mt-0.5">
                {element.nameEn} ({element.latinName})
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
                <span className="px-2.5 py-0.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-mono">
                  Период: <b className="text-white">{element.period}</b>
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 font-mono">
                  Группа: <b className="text-white">{element.group ?? 'Лантаноид/Актиноид'}</b>
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-slate-900/80 border border-slate-800 text-amber-300 font-mono">
                  Фаза при {Math.round(temperatureKelvin)} K: <b className="text-amber-200">{phaseLabels[currentPhase]}</b>
                </span>
              </div>
            </div>
          </div>

          {/* Интерактивная 2D Боровская модель в заголовке */}
          <div className="md:col-span-4 flex justify-center">
            <BohrModelCanvas element={element} />
          </div>
        </div>

        {/* Переключатель Вкладок */}
        <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 mb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Обзор', icon: Sparkles },
            { id: 'physical', label: 'Физические свойства', icon: Activity },
            { id: 'atomic', label: 'Атомная структура', icon: Layers },
            { id: 'history', label: 'История и применение', icon: History },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Контент Вкладок */}
        <div className="min-h-[220px]">
          {/* ВКЛАДКА 1: ОБЗОР */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Компактный информационный плашка-баннер темы */}
              <ElementTopicButton
                atomicNumber={element.number}
                onNavigate={onClose}
                variant="banner"
              />

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <h4 className="text-xs uppercase font-bold text-sky-400 tracking-wider mb-2">
                  Описание элемента
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {element.summaryRu}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <span className="block text-[10px] text-slate-400">Атомный номер</span>
                  <span className="text-lg font-bold text-white">{element.number}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <span className="block text-[10px] text-slate-400">Атомная масса</span>
                  <span className="text-lg font-bold text-sky-300">{element.atomicMass}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <span className="block text-[10px] text-slate-400">Конфигурация</span>
                  <span className="text-sm font-bold text-purple-300">{element.electronConfiguration}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <span className="block text-[10px] text-slate-400">Электроны</span>
                  <span className="text-sm font-bold text-amber-300">{element.shells.join(', ')}</span>
                </div>
              </div>
            </div>
          )}

          {/* ВКЛАДКА 2: ФИЗИЧЕСКИЕ СВОЙСТВА */}
          {activeTab === 'physical' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Термические параметры
                </h4>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Температура плавления:</span>
                  <span className="font-mono font-bold text-white">
                    {element.meltingPoint ? `${element.meltingPoint} K (${kelvinToCelsius(element.meltingPoint)} °C)` : '—'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Температура кипения:</span>
                  <span className="font-mono font-bold text-white">
                    {element.boilingPoint ? `${element.boilingPoint} K (${kelvinToCelsius(element.boilingPoint)} °C)` : '—'}
                  </span>
                </div>
                <div className="flex justify-between py-1 text-xs">
                  <span className="text-slate-400">Состояние при 25 °C (298 K):</span>
                  <span className="font-mono font-bold text-amber-300 uppercase">
                    {phaseLabels[element.phaseAtSTP]}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Плотность и структура
                </h4>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Плотность (при 20 °C):</span>
                  <span className="font-mono font-bold text-white">
                    {element.density !== null ? `${element.density} г/см³` : '—'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Кристаллическая решетка:</span>
                  <span className="font-mono font-bold text-white">
                    {element.crystalStructure || '—'}
                  </span>
                </div>
                <div className="flex justify-between py-1 text-xs">
                  <span className="text-slate-400">Распространенность в коре:</span>
                  <span className="font-mono font-bold text-emerald-300">
                    {element.abundanceEarthCrust || '—'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ВКЛАДКА 3: АТОМНАЯ СТРУКТУРА */}
          {activeTab === 'atomic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Электронное строение
                </h4>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Электронная формула:</span>
                  <span className="font-mono font-bold text-purple-200">{element.electronConfiguration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Электронов по оболочкам:</span>
                  <span className="font-mono font-bold text-white">{element.shells.join(' - ')}</span>
                </div>
                <div className="flex justify-between py-1 text-xs">
                  <span className="text-slate-400">Степени окисления:</span>
                  <span className="font-mono font-bold text-amber-300">{element.oxidationStates || '—'}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                  Квантовые и энергетические свойства
                </h4>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Электроотрицательность (Полинг):</span>
                  <span className="font-mono font-bold text-white">
                    {element.electronegativity !== null ? element.electronegativity : '—'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800 text-xs">
                  <span className="text-slate-400">Энергия 1-й ионизации:</span>
                  <span className="font-mono font-bold text-white">
                    {element.ionizationEnergy ? `${element.ionizationEnergy} кДж/моль` : '—'}
                  </span>
                </div>
                <div className="flex justify-between py-1 text-xs">
                  <span className="text-slate-400">Атомный радиус:</span>
                  <span className="font-mono font-bold text-white">
                    {element.atomicRadius ? `${element.atomicRadius} пм` : '—'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ВКЛАДКА 4: ИСТОРИЯ И ПРИМЕНЕНИЕ */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Открытие элемента
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1">
                    Год открытия: {element.discoveredYear} г.
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Открыватели: {element.discoverer}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> Практическое применение
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  {element.applicationsRu.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60 text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
