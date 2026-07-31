import React from 'react';
import { ChemFormula } from '../../../scientific/ChemFormula';

export const CarbonSiliconReactionMatrix: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
            Матрица сравнительных свойств соединений Углерода и Кремния
          </h4>
          <p className="text-xs text-slate-500 font-normal">
            Свойства оксидов, кислот и солей C и Si для ЕГЭ (Задания 8, 9, 24, 31)
          </p>
        </div>
        <span className="text-xs font-mono text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 font-bold">
          C (+2, +4) vs Si (+4)
        </span>
      </div>

      <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-2xs">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
            <tr>
              <th className="p-3 border-b border-slate-800">Соединение</th>
              <th className="p-3 border-b border-slate-800">Класс & Решетка</th>
              <th className="p-3 border-b border-slate-800">Отношение к H₂O</th>
              <th className="p-3 border-b border-slate-800">Взаимодействие со щелочами</th>
              <th className="p-3 border-b border-slate-800">Специфические реакции</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="p-3 font-mono font-bold text-slate-900">CO (угарный газ)</td>
              <td className="p-3 text-slate-600">Несолеобразующий оксид, газ</td>
              <td className="p-3 text-slate-500">Не реагирует и не растворяется</td>
              <td className="p-3 text-slate-500">Не реагирует при н.у. (при t, p $\rightarrow$ формиаты)</td>
              <td className="p-3 font-mono">
                <ChemFormula formula="CO + CuO -t-> Cu + CO2^" className="font-semibold text-slate-900" />
              </td>
            </tr>
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="p-3 font-mono font-bold text-slate-900">CO₂ (углекислый газ)</td>
              <td className="p-3 text-slate-600">Кислотный оксид, Молекулярная</td>
              <td className="p-3 text-emerald-700 font-semibold">Образует неустойчивую H₂CO₃</td>
              <td className="p-3 font-mono space-y-1">
                <ChemFormula formula="CO2 + 2NaOH -> Na2CO3 + H2O" className="font-semibold text-slate-900" /><br />
                <ChemFormula formula="CO2 + NaOH -> NaHCO3" className="font-semibold text-slate-900" />
              </td>
              <td className="p-3">
                Помутнение известковой воды:<br />
                <ChemFormula formula="Ca(OH)2 + CO2 -> CaCO3v + H2O" className="font-mono font-semibold text-slate-900" />
              </td>
            </tr>
            <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
              <td className="p-3 font-mono font-bold text-slate-900">SiO₂ (кремнезем, кварц)</td>
              <td className="p-3 text-slate-600">Кислотный оксид, <span className="font-bold text-slate-900">Атомная</span></td>
              <td className="p-3 text-rose-700 font-bold">НЕ реагирует с H₂O!</td>
              <td className="p-3 font-mono">
                Сплавление:<br />
                <ChemFormula formula="SiO2 + 2NaOH -t-> Na2SiO3 + H2O" className="font-semibold text-slate-900" />
              </td>
              <td className="p-3 font-mono">
                Травление стекла:<br />
                <ChemFormula formula="SiO2 + 4HF -> SiF4^ + 2H2O" className="font-semibold text-slate-900" />
              </td>
            </tr>
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="p-3 font-mono font-bold text-slate-900">H₂CO₃ (угольная к-та)</td>
              <td className="p-3 text-slate-600">Слабая двухосновная кислота</td>
              <td className="p-3 text-slate-600">Растворима (в равновесии с CO₂)</td>
              <td className="p-3">Нейтрализация → карбонаты / гидрокарбонаты</td>
              <td className="p-3 font-mono">
                <ChemFormula formula="H2CO3 <-> CO2^ + H2O" className="font-semibold text-slate-900" />
              </td>
            </tr>
            <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/30">
              <td className="p-3 font-mono font-bold text-slate-900">H₂SiO₃ (кремниевая к-та)</td>
              <td className="p-3 text-slate-600">Очень слабая нерастворимая к-та</td>
              <td className="p-3 text-rose-700 font-bold">Выпадает в виде студенистого геля</td>
              <td className="p-3 font-mono">
                <ChemFormula formula="H2SiO3 + 2NaOH -> Na2SiO3 + 2H2O" className="font-semibold text-slate-900" />
              </td>
              <td className="p-3 font-mono">
                Вытеснение:<br />
                <ChemFormula formula="Na2SiO3 + CO2 + H2O -> H2SiO3v + Na2CO3" className="font-semibold text-slate-900" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
