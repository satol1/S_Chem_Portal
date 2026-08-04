import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { DarkBlockCard } from '../../DarkBlockCard';

export const CarbonSiliconDarkBlock1: React.FC = () => {
  return (
    <DarkBlockCard
      title="Промышленный доменный процесс и Синтез-газ"
      subtitle="Доменная печь • Промышленный химизм"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        В доменной печи при выплавке чугуна происходит ступенчатое восстановление железной руды (<ChemFormula formula="Fe2O3" className="text-amber-300 font-medium" />) угарным газом <ChemFormula formula="CO" className="text-amber-300 font-medium" />:
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5 text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Ступенчатое восстановление железа (t = 400–900°C):</div>
        <div className="text-amber-300 font-semibold space-y-1">
          <div>1) <ChemFormula formula="3Fe2O3 + CO -t-> 2Fe3O4 + CO2^" className="text-amber-300" /></div>
          <div>2) <ChemFormula formula="Fe3O4 + CO -t-> 3FeO + CO2^" className="text-amber-300" /></div>
          <div>3) <ChemFormula formula="FeO + CO -t-> Fe + CO2^" className="text-amber-300" /></div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal">
        <strong><TermTooltip term="Синтез-газ" definition="Смесь монооксида углерода CO и водорода H₂ в различных соотношениях. Получают паровой конверсией метана или газификацией угля. Универсальное сырьё для синтеза метанола, аммиака и углеводородов." /> (<ChemFormula formula="CO + H2" className="text-amber-300 font-medium" />):</strong> Получают высокотемпературной паровой конверсией метана <span className="whitespace-nowrap">(<ChemFormula formula="CH4 + H2O -t,cat-> CO + 3H2" className="text-amber-300 font-medium" />)</span>. Он является универсальным сырьем для синтеза метанола <ChemFormula formula="CH3OH" className="text-amber-300 font-medium" /> и искусственных моторных топлив по методу Фишера-Тропша.
      </p>
    </DarkBlockCard>
  );
};

export const CarbonSiliconDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Синтез полупроводникового кремния высокой чистоты"
      subtitle="Микроэлектроника • 99.9999999% Si"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Для интегральных микросхем, солнечных батарей и процессоров требуется полупроводниковый кремний высшей степени чистоты («девять девяток» — 99.9999999% Si):
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5 text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Технологический цикл производства электронного кремния:</div>
        <div className="text-teal-300 font-semibold space-y-1">
          <div>1) <TermTooltip term="Карботермическое восстановление" definition="Высокотемпературный промышленный процесс восстановления оксидов металлов и неметаллов углеродом (коксом) при t > 1900°C." /> кварца: <ChemFormula formula="SiO2 + 2C -t-> Si + 2CO^" className="text-teal-300" /></div>
          <div>2) Хлорирование до легкокипящего <TermTooltip term="трихлорсилана" definition="Легколетучая кремнийорганическая жидкость SiHCl₃ (t_кип = 31.8°C), хорошо очищаемая ректификацией от микропримесей." />: <ChemFormula formula="Si + 3HCl -> SiHCl3 + H2^" className="text-teal-300" /></div>
          <div>3) Водородное восстановление ректифицированного SiHCl₃: <ChemFormula formula="SiHCl3 + H2 -t-> Si + 3HCl" className="text-teal-300" /></div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal">
        Полученный поликристаллический кремний вытягивают по методу Чохральского в гигантские одиночные монокристаллы, из которых алмазными пилами вырезают кремниевые пластины для нанесения транзисторов.
      </p>
    </DarkBlockCard>
  );
};
