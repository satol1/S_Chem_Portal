import React, { useState } from 'react';
import { 
  TrendingUp, Layers, Award, Globe, Compass, ArrowRight
} from 'lucide-react';
import { ChemFormula } from '../scientific/ChemFormula';

type ReferenceTab = 'trends' | 'blocks' | 'records' | 'abundance';

export const PeriodicTableReference: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ReferenceTab>('trends');

  return (
    <div className="w-full">
      <div className="glass-panel p-5 space-y-5 border-sky-500/30 bg-slate-900/80">
        
        {/* Заголовок справочного блока */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-extrabold text-sky-400 tracking-wider bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded-md">
                  Стандарты IUPAC / ФИПИ
                </span>
              </div>
              <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                Научный справочник и закономерности Периодической системы
              </h3>
            </div>
          </div>

          {/* Переключатель Вкладок Справочника */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800 overflow-x-auto w-full sm:w-auto">
            {[
              { id: 'trends', label: 'Закономерности', icon: TrendingUp },
              { id: 'blocks', label: 'Электронные блоки', icon: Layers },
              { id: 'records', label: 'Рекорды IUPAC', icon: Award },
              { id: 'abundance', label: 'Распространенность', icon: Globe },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ReferenceTab)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ВКЛАДКА 1: ПЕРИОДИЧЕСКИЕ ЗАКОНОМЕРНОСТИ */}
        {activeTab === 'trends' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Карточка 1: Атомный радиус */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">
                  Атомный радиус (r_ат)
                </span>
                <span className="text-[10px] font-mono text-slate-400">пм / нм</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • <b>По периоду (слева ➔ направо):</b> Уменьшается из-за роста эффективного заряда ядра (<ChemFormula math="Z_{\text{эфф}}" />) и притяжения электронов.
                <br />
                • <b>По группе (сверху ➔ вниз):</b> Увеличивается из-за появления новых электронных слоев.
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-amber-300 flex items-center justify-between">
                <span>Мин: F (0.064 нм)</span>
                <span>Макс: Cs / Fr (0.267 нм)</span>
              </div>
            </div>

            {/* Карточка 2: Электроотрицательность */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                  Электроотрицательность (ЭО)
                </span>
                <span className="text-[10px] font-mono text-slate-400">Шкала Полинга</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • <b>По периоду (слева ➔ направо):</b> Увеличивается, способность притягивать общеэлектронные пары возрастает.
                <br />
                • <b>По группе (сверху ➔ вниз):</b> Убывает по мере удаления внешнего уровня от ядра.
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-amber-300 flex items-center justify-between">
                <span>Наибольшая: F (3.98)</span>
                <span>Наименьшая: Cs/Fr (0.7)</span>
              </div>
            </div>

            {/* Карточка 3: Энергия ионизации */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-purple-400 tracking-wider">
                  Энергия ионизации (I_1)
                </span>
                <span className="text-[10px] font-mono text-slate-400">кДж/моль</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • <b>По периоду (слева ➔ направо):</b> Возрастает (для отрыва валентного электрона требуется всё больше энергии).
                <br />
                • <b>По группе (сверху ➔ вниз):</b> Убывает, внешние электроны отрываются легче.
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-purple-300 flex items-center justify-between">
                <span>Макс: He (2372 кДж/моль)</span>
                <span>Мин: Cs (375 кДж/моль)</span>
              </div>
            </div>

            {/* Карточка 4: Окислительно- восстановительные свойства */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">
                  ОВР свойства просты веществ
                </span>
                <span className="text-[10px] font-mono text-slate-400">Металлы / Неметаллы</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • <b>Окислительные (неметаллические) свойства:</b> Усиливаются к правому верхнему углу (<ChemFormula formula="F2" className="font-bold text-emerald-300" /> — сильнейший окислитель).
                <br />
                • <b>Восстановительные (металлические) свойства:</b> Усиливаются к левому нижнему углу (Cs, Fr).
              </p>
            </div>

            {/* Карточка 5: Кислотно-основные свойства оксидов */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2 md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-rose-400 tracking-wider">
                  Кислотно-основный характер высших оксидов и гидроксидов
                </span>
                <span className="text-[10px] font-mono text-slate-400">Слева ➔ Направо</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                По периоду высшие оксиды и их гидраты закономерно меняют свойства от <b>основных</b> через <b>амфотерные</b> к <b>кислотным</b>:
              </p>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Na2O (Основный)</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">Al2O3 (Амфотерный)</span>
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">SiO2 ➔ SO3 ➔ Cl2O7 (Кислотные)</span>
              </div>
            </div>

          </div>
        )}

        {/* ВКЛАДКА 2: ЭЛЕКТРОННЫЕ БЛОКИ (s, p, d, f) */}
        {activeTab === 'blocks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* s-блок */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-rose-500/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-rose-400 tracking-wider">
                  s-Блок (20 элементов)
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold">
                  ns¹ - ns²
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Группы 1 (IA) и 2 (IIA), а также <b>H</b> и <b>He</b>. Заполняется внешняя s-орбиталь.
              </p>
              <div className="text-[11px] font-semibold text-rose-200 bg-rose-950/40 p-2 rounded-xl border border-rose-900/50">
                Щелочные и щелочноземельные металлы. Сильные восстановители.
              </div>
            </div>

            {/* p-блок */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-emerald-500/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-emerald-400 tracking-wider">
                  p-Блок (37 элементов)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  ns² np¹⁻⁶
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Группы 13–18 (IIIA–VIIIA). Заполняется внешний p-подуровень.
              </p>
              <div className="text-[11px] font-semibold text-emerald-200 bg-emerald-950/40 p-2 rounded-xl border border-emerald-900/50">
                Все неметаллы, галогены, благородные газы, полуметаллы и постпереходные металлы.
              </div>
            </div>

            {/* d-блок */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-sky-500/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-sky-400 tracking-wider">
                  d-Блок (38 элементов)
                </span>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold">
                  (n-1)d¹⁻¹⁰ ns¹⁻²
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Группы 3–12 (переходные металлы). Заполняется предвнешний d-подуровень.
              </p>
              <div className="text-[11px] font-semibold text-sky-200 bg-sky-950/40 p-2 rounded-xl border border-sky-900/50">
                Переменные степени окисления, цветные ионы в растворах, отличные катализаторы.
              </div>
            </div>

            {/* f-блок */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-purple-500/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-purple-400 tracking-wider">
                  f-Блок (28 элементов)
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold">
                  (n-2)f¹⁻¹⁴ ns²
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Семейства Лантаноидов (4f) и Актиноидов (5f).
              </p>
              <div className="text-[11px] font-semibold text-purple-200 bg-purple-950/40 p-2 rounded-xl border border-purple-900/50">
                Редкоземельные и радиоактивные элементы, близкие по химическим свойствам.
              </div>
            </div>

          </div>
        )}

        {/* ВКЛАДКА 3: РЕКОРДЫ IUPAC */}
        {activeTab === 'records' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="block text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">
                Самая высокая плотность
              </span>
              <h4 className="text-sm font-bold text-white">Осмий (Os) & Иридий (Ir)</h4>
              <p className="text-xs font-mono text-amber-300">
                22.59 г/см³ (Os) / 22.56 г/см³ (Ir)
              </p>
              <p className="text-[11px] text-slate-400">В 2 раза тяжелее свинца</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="block text-[10px] font-extrabold uppercase text-rose-400 tracking-wider">
                Самый тугоплавкий металл
              </span>
              <h4 className="text-sm font-bold text-white">Вольфрам (W)</h4>
              <p className="text-xs font-mono text-rose-300">
                t_пл = 3422 °C (3695 K)
              </p>
              <p className="text-[11px] text-slate-400">Применяется в нитях накала и нитридах</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="block text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider">
                Жидкие простые вещества (20 °C)
              </span>
              <h4 className="text-sm font-bold text-white">Ртуть (Hg) & Бром (Br₂)</h4>
              <p className="text-xs font-mono text-emerald-300">
                Hg (металл, -38.8 °C) / Br₂ (неметалл, -7.2 °C)
              </p>
              <p className="text-[11px] text-slate-400">Единственные 2 жидких элемента при 293 K</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="block text-[10px] font-extrabold uppercase text-sky-400 tracking-wider">
                Лучшая электро- и теплопроводность
              </span>
              <h4 className="text-sm font-bold text-white">Серебро (Ag) & Медь (Cu)</h4>
              <p className="text-xs font-mono text-sky-300">
                Ag (63 × 10⁶ См/м) / Cu (59.6 × 10⁶ См/м)
              </p>
              <p className="text-[11px] text-slate-400">Абсолютные лидеры проводимости</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="block text-[10px] font-extrabold uppercase text-purple-400 tracking-wider">
                Самый твердый элемент
              </span>
              <h4 className="text-sm font-bold text-white">Углерод (C - Алмаз)</h4>
              <p className="text-xs font-mono text-purple-300">
                10 по шкале Мооса (sp³-гибридизация)
              </p>
              <p className="text-[11px] text-slate-400">Твердейшее природное вещество</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <span className="block text-[10px] font-extrabold uppercase text-indigo-400 tracking-wider">
                Наибольшая электроотрицательность
              </span>
              <h4 className="text-sm font-bold text-white">Фтор (F)</h4>
              <p className="text-xs font-mono text-indigo-300">
                3.98 по шкале Полинга
              </p>
              <p className="text-[11px] text-slate-400">Сильнейший окислитель среди элементов</p>
            </div>

          </div>
        )}

        {/* ВКЛАДКА 4: РАСПРОСТРАНЕННОСТЬ В ПРИРОДЕ */}
        {activeTab === 'abundance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Кларки элементов в Земной коре */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                Содержание в земной коре (Кларки элементов, % по массе)
              </h4>
              <div className="space-y-2">
                {[
                  { name: 'Кислород (O)', percent: '46.6%', width: 'w-[93%]', color: 'bg-emerald-500' },
                  { name: 'Кремний (Si)', percent: '27.7%', width: 'w-[55%]', color: 'bg-sky-500' },
                  { name: 'Алюминий (Al)', percent: '8.1%', width: 'w-[20%]', color: 'bg-amber-500' },
                  { name: 'Железо (Fe)', percent: '5.0%', width: 'w-[14%]', color: 'bg-rose-500' },
                  { name: 'Кальций (Ca)', percent: '3.6%', width: 'w-[10%]', color: 'bg-purple-500' },
                  { name: 'Натрий (Na)', percent: '2.8%', width: 'w-[8%]', color: 'bg-indigo-500' },
                ].map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="font-bold text-white">{item.percent}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color} ${item.width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Распространенность во Вселенной */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase text-sky-400 tracking-wider">
                Содержание во Вселенной (% атомов)
              </h4>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-sky-300">Водород (H)</span>
                    <span className="font-extrabold text-white">~ 75%</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Основной строительный блок звезд и межзвездного газа.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-purple-300">Гелий (He)</span>
                    <span className="font-extrabold text-white">~ 23%</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Продукт термоядерного синтеза в недрах звезд.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-amber-300">Все остальные 116 элементов</span>
                    <span className="font-extrabold text-white">~ 2%</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Синтезированы в процессе эволюции звезд и вспышек сверхновых.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
