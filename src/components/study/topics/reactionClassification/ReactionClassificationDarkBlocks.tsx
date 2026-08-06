import React from 'react';
import { Flame, Zap, Factory } from 'lucide-react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';

/** Dark Block 1: Цепные свободнорадикальные реакции и теория Семенова */
export const ReactionClassificationDarkBlock1: React.FC = () => {
  return (
    <DarkBlockCard
      title="Цепные свободнорадикальные реакции: открытие Н. Н. Семёнова"
      subtitle="Механизмы реакций • Нобелевская премия 1956 года"
      icon={Flame}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Многие реакции с участием свободных радикалов (хлорирование метана, горение, взрыв водородно-кислородных смесей)
        протекают по цепному механизму. Учение о разветвлённых цепных реакциях создал академик Н. Н. Семёнов.
      </p>

      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия I: Зарождение цепи (инициирование)
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Под действием кванта света <ChemFormula math="h\nu" className="text-slate-300" /> или нагревания молекула гомолитически распадается с образованием свободных радикалов с неспаренным электроном:
          </p>
          <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-amber-300 font-bold text-xs sm:text-sm">
            <ChemFormula math="Cl_2 \xrightarrow{h\nu} 2Cl^\bullet" className="text-amber-300" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия II: Продолжение и разветвление цепи
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Активный радикал атакует нейтральную молекулу, образуя продукт и новый радикал. В разветвлённых цепях один радикал порождает сразу 2-3 новых активных центра:
          </p>
          <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-amber-300 font-bold text-xs sm:text-sm space-y-1">
            <div><ChemFormula math="Cl^\bullet + CH_4 \rightarrow HCl + CH_3^\bullet" className="text-amber-300" /></div>
            <div><ChemFormula math="CH_3^\bullet + Cl_2 \rightarrow CH_3Cl + Cl^\bullet" className="text-teal-300" /></div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия III: Обрыв цепи (рекомбинация)
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            При столкновении двух радикалов между собой или со стенкой сосуда цепь рекомбинирует и гаснет:
          </p>
          <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-amber-300 font-bold text-xs sm:text-sm">
            <ChemFormula math="Cl^\bullet + Cl^\bullet \rightarrow Cl_2, \quad CH_3^\bullet + Cl^\bullet \rightarrow CH_3Cl" className="text-amber-300" />
          </div>
        </div>
      </div>
    </DarkBlockCard>
  );
};

/** Dark Block 2: Катализ и снижение энергии активации */
export const ReactionClassificationDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Катализ: как меняется энергетический маршрут реакции"
      subtitle="Кинетика и катализаторы • Гомогенный и гетерогенный катализ"
      icon={Zap}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Катализатор — это вещество, которое ускоряет химическую реакцию, участвуя в промежуточных стадиях,
        но к концу реакции восстанавливает свой химический состав и количество.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-teal-400 block">Гомогенный катализ</span>
          <p className="text-slate-300 leading-relaxed">
            Катализатор и реагенты находятся в одной фазе (жидкой или газовой). Пример: разложение пероксида водорода в присутствии ионов <ChemFormula formula="I-" />, гидролиз сложных эфиров в присутствии <ChemFormula formula="H+" />.
          </p>
          <div className="p-2 bg-slate-900/80 rounded-lg text-teal-300 font-bold">
            <ChemFormula math="2H_2O_2 \xrightarrow{I^-} 2H_2O + O_2\uparrow" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block">Гетерогенный катализ</span>
          <p className="text-slate-300 leading-relaxed">
            Катализатор образует самостоятельную фазу (обычно твёрдое вещество). Реагенты сорбируются на активных центрах поверхности. Пример: синтез <ChemFormula formula="NH3" /> на железе, окисление <ChemFormula formula="SO2" /> на <ChemFormula formula="V2O5" />.
          </p>
          <div className="p-2 bg-slate-900/80 rounded-lg text-amber-300 font-bold">
            <ChemFormula math="2SO_2 + O_2 \xrightarrow{V_2O_5} 2SO_3" />
          </div>
        </div>
      </div>
    </DarkBlockCard>
  );
};

/** Dark Block 3: Промышленный термохимический баланс */
export const ReactionClassificationDarkBlock3: React.FC = () => {
  return (
    <DarkBlockCard
      title="Промышленный термохимический баланс"
      subtitle="Химическая технология • Экзо- и эндотермические стадии"
      icon={Factory}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        В крупнотоннажной химической промышленности выделяющееся в экзотермических реакциях тепло
        утилизируют в котлах-утилизаторах и направляют на проведение эндотермических стадий.
      </p>

      <div className="space-y-2 text-xs">
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-start justify-between gap-3">
          <div>
            <span className="font-bold text-amber-400 block">Конверсия метана водяным паром (эндотермическая)</span>
            <p className="text-slate-300">Требует подвода тепла и катализатора Ni (температура около 800 °C):</p>
          </div>
          <span className="px-2 py-1 bg-rose-900/60 text-rose-300 rounded font-bold whitespace-nowrap">-Q (ΔH &gt; 0)</span>
        </div>
        <div className="p-2.5 bg-slate-900/80 rounded-lg text-amber-300 font-bold text-xs">
          <ChemFormula math="CH_4 + H_2O \xrightleftharpoons{Ni, t^\circ} CO + 3H_2 - 206 \text{ кДж}" />
        </div>

        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-start justify-between gap-3 pt-2">
          <div>
            <span className="font-bold text-emerald-400 block">Синтез аммиака (экзотермическая)</span>
            <p className="text-slate-300">Выделяющееся тепло подогревает поступающую азотоводородную смесь:</p>
          </div>
          <span className="px-2 py-1 bg-emerald-900/60 text-emerald-300 rounded font-bold whitespace-nowrap">+Q (ΔH &lt; 0)</span>
        </div>
        <div className="p-2.5 bg-slate-900/80 rounded-lg text-emerald-300 font-bold text-xs">
          <ChemFormula math="N_2 + 3H_2 \xrightleftharpoons{Fe, t^\circ, p} 2NH_3 + 92.2 \text{ кДж}" />
        </div>
      </div>
    </DarkBlockCard>
  );
};
