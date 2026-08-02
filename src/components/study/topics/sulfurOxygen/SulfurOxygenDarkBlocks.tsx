import React from 'react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';

export const SulfurOxygenDarkBlocks: React.FC = () => {
  return (
    <div className="space-y-6 my-8">
      {/* Dark Block 1: Contact Process for H2SO4 */}
      <DarkBlockCard
        subtitle="ПРОМЫШЛЕННЫЙ ПРОЦЕСС #1"
        title="Контактный способ производства серной кислоты (H₂SO₄)"
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <p>
            Контактный способ — главный промышленный метод получения серной кислоты. Процесс включает 3 непрерывные стадии:
          </p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="font-bold text-amber-400 block mb-1">
                Стадия I: Получение сернистого газа SO₂ (Печь в кипящем слое)
              </span>
              <p className="text-slate-300 text-xs mb-2">
                Обжиг колчедана (пирита FeS₂) или сжигание измельченной серы в токе кислорода:
              </p>
              <div className="font-mono text-amber-300 font-bold">
                <ChemFormula formula="4FeS2 + 11O2 -t-> 2Fe2O3 + 8SO2^ + Q" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="font-bold text-amber-400 block mb-1">
                Стадия II: Очистка и каталитическое окисление SO₂ в SO₃ (Контактный аппарат)
              </span>
              <p className="text-slate-300 text-xs mb-2">
                Экзотермическая обратимая реакция на оксидно-ванадиевом катализаторе (V₂O₅, 450–500°C):
              </p>
              <div className="font-mono text-teal-300 font-bold">
                <ChemFormula formula="2SO2 + O2 <=(V2O5, t=450°C)=> 2SO3 + Q" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
              <span className="font-bold text-amber-400 block mb-1">
                Стадия III: Абсорбция SO₃ концентрированной H₂SO₄ (Поглотительная башня)
              </span>
              <p className="text-slate-300 text-xs mb-2">
                Поглощение SO₃ ведут 98.3% серной кислотой для предотвращения образования кислотного тумана; образуется олеум (H₂SO₄·nSO₃):
              </p>
              <div className="font-mono text-amber-300 font-bold">
                <ChemFormula formula="SO3 + H2SO4(98.3%) -> H2S2O7 (олеум)" />
              </div>
            </div>
          </div>
        </div>
      </DarkBlockCard>

      {/* Dark Block 2: Claus Process */}
      <DarkBlockCard
        subtitle="ПРОМЫШЛЕННЫЙ ПРОЦЕСС #2"
        title="Процесс Клаусса (Claus Process) — Извлечение элементной серы из H₂S"
      >
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            Процесс Клаусса применяется на нефте- и газоперерабатывающих заводах для обезвреживания сероводорода H₂S и получения товарной серы высшей чистоты:
          </p>

          <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2 font-mono text-amber-300">
            <div>1) Термическая стадия (1000–1400°C): <ChemFormula formula="2H2S + 3O2 -> 2SO2 + 2H2O" /></div>
            <div>2) Каталитическая стадия (200–350°C, Al₂O₃/TiO₂): <ChemFormula formula="2H2S + SO2 -(Al2O3)-> 3Sv + 2H2O" /></div>
          </div>
        </div>
      </DarkBlockCard>
    </div>
  );
};
