import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';

export const CarbonSiliconDarkBlock1: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 rounded-xl bg-slate-900 text-white space-y-3.5 text-xs sm:text-sm border border-slate-800">
      <div className="font-semibold text-white text-sm sm:text-base flex items-center justify-between border-b border-slate-800 pb-2">
        <span>Промышленный доменный процесс и Синтез-газ</span>
        <span className="text-xs font-mono text-slate-400">Доменная печь • Задание 25</span>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal">
        В доменной печи при выплавке чугуна происходит ступенчатое восстановление железной руды (<ChemFormula formula="Fe2O3" className="text-amber-300 font-medium" />) угарным газом <ChemFormula formula="CO" className="text-amber-300 font-medium" />:
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5 font-mono text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Ступенчатое восстановление железа (t = 400–900°C):</div>
        <div className="text-amber-300 font-semibold space-y-1">
          <div>1) <ChemFormula formula="3Fe2O3 + CO -t-> 2Fe3O4 + CO2^" className="text-amber-300" /></div>
          <div>2) <ChemFormula formula="Fe3O4 + CO -t-> 3FeO + CO2^" className="text-amber-300" /></div>
          <div>3) <ChemFormula formula="FeO + CO -t-> Fe + CO2^" className="text-amber-300" /></div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal">
        <strong>Синтез-газ (<ChemFormula formula="CO + H2" className="text-amber-300 font-medium" />):</strong> Получают высокотемпературной паровой конверсией метана <span className="whitespace-nowrap">(<ChemFormula formula="CH4 + H2O -t,cat-> CO + 3H2" className="text-amber-300 font-medium" />)</span>. Он является универсальным сырьем для синтеза метанола <ChemFormula formula="CH3OH" className="text-amber-300 font-medium" /> и искусственных моторных топлив по методу Фишера-Тропша.
      </p>
    </div>
  );
};

export const CarbonSiliconDarkBlock2: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 rounded-xl bg-slate-900 text-white space-y-3.5 text-xs sm:text-sm border border-slate-800">
      <div className="font-semibold text-white text-sm sm:text-base flex items-center justify-between border-b border-slate-800 pb-2">
        <span>Синтез полупроводникового кремния высокой чистоты</span>
        <span className="text-xs font-mono text-slate-400">Микроэлектроника • 99.9999999% Si</span>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal">
        Для интегральных микросхем, солнечных батарей и процессоров требуется полупроводниковый кремний высшей степени чистоты («девять девяток» — 99.9999999% Si):
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5 font-mono text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Технологический цикл производства электронного кремния:</div>
        <div className="text-teal-300 font-semibold space-y-1">
          <div>1) Восстановление кварца углем в дуговой печи: <ChemFormula formula="SiO2 + 2C -t-> Si + 2CO^" className="text-teal-300" /></div>
          <div>2) Хлорирование до легкокипящего трихлорсилана: <ChemFormula formula="Si + 3HCl -> SiHCl3 + H2^" className="text-teal-300" /></div>
          <div>3) Водородное восстановление ректифицированного SiHCl₃: <ChemFormula formula="SiHCl3 + H2 -t-> Si + 3HCl" className="text-teal-300" /></div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal">
        Полученный поликристаллический кремний вытягивают по методу Чохральского в гигантские одиночные монокристаллы, из которых алмазными пилами вырезают кремниевые пластины для нанесения транзисторов.
      </p>
    </div>
  );
};
