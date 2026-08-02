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
            Контактный способ — современный химико-технологический процесс получения серной кислоты высшей чистоты. Производство основано на последовательном осуществлении трех непрерывных гетерогенных и гомогенных стадий:
          </p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <span className="font-bold text-amber-400 block">
                Стадия I: Получение и очистка обжигового газа SO₂ (Печь в кипящем слое)
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Обжиг измельченного колчедана (пирита FeS₂) производят в печи «кипящего слоя» продувкой воздуха снизу (принцип противотока). Температура процесса 800–900°C:
              </p>
              <div className="font-mono text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700">
                <ChemFormula formula="4FeS2 + 11O2 -t-> 2Fe2O3 + 8SO2^ + Q" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Обжиговый газ очищают от пыли Fe₂O₃ в циклонном сепараторе и электрофильтре, промывают и осушают концентрированной серной кислотой в сушильной башне от влаги и каталитических ядов (As₂O₃, SeO₂).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <span className="font-bold text-amber-400 block">
                Стадия II: Очистка и каталитическое окисление SO₂ в SO₃ (Контактный аппарат)
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Экзотермическая обратимая реакция протекает на ванадиевом катализаторе (V₂O₅ с добавкой K₂O в качестве промотора) при 450–500°C:
              </p>
              <div className="font-mono text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700">
                <ChemFormula formula="2SO2 + O2 <=(V2O5, t=450°C)=> 2SO3 + Q" />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                В контактном аппарате применяется принцип теплообмена: выходящий из каталитических слоев горячий газ подогревает поступающую смесь SO₂ и O₂, что обеспечивает автотермичность процесса без внешнего обогрева.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
              <span className="font-bold text-amber-400 block">
                Стадия III: Абсорбция SO₃ концентрированной H₂SO₄ (Поглотительная башня)
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Оксид серы(VI) поглощают 98.3%-ной серной кислотой (а не водой, так как при взаимодействии с водой образуется мелкий сернокислотный туман, не конденсирующийся в башне). Насыщение кислоты оксидом SO₃ приводит к образованию олеума:
              </p>
              <div className="font-mono text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 space-y-1">
                <div><ChemFormula formula="SO3 + H2SO4(98.3%) -> H2S2O7 (олеум)" /></div>
                <div><ChemFormula formula="H2S2O7 + H2O -> 2H2SO4" /></div>
              </div>
            </div>
          </div>
        </div>
      </DarkBlockCard>

      {/* Dark Block 2: Claus Process */}
      <DarkBlockCard
        subtitle="ПРОМЫШЛЕННЫЙ ПРОЦЕСС #2"
        title="Процесс Клаусса (Claus Process) — Обезвреживание H₂S и получение элементной серы"
      >
        <div className="space-y-3 text-xs sm:text-sm text-slate-300">
          <p>
            Процесс Клаусса — ключевой экологический и химический процесс на нефтеперерабатывающих заводах (НПЗ) и газоперерабатывающих комплексах. Он позволяет утилизировать токсичный сероводород H₂S из попутного нефтяного и природного газа с получением чистовой элементной серы:
          </p>

          <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2.5 font-mono text-amber-300">
            <div>
              <span className="text-slate-400 text-xs block font-sans">1) Термическая стадия (1000–1400°C, сжигание 1/3 сероводорода):</span>
              <ChemFormula formula="2H2S + 3O2 -> 2SO2 + 2H2O + Q" />
            </div>
            <div>
              <span className="text-slate-400 text-xs block font-sans">2) Каталитическая стадия (200–350°C, катализатор Al₂O₃ или TiO₂):</span>
              <ChemFormula formula="2H2S + SO2 -(Al2O3)-> 3Sv + 2H2O + Q" />
            </div>
            <div className="pt-1 text-teal-300 text-xs font-sans font-medium">
              Суммарный баланс процесса Клаусса: <ChemFormula formula="2H2S + O2 -> 2Sv + 2H2O" />
            </div>
          </div>
        </div>
      </DarkBlockCard>

      {/* Dark Block 3: Frasch Process */}
      <DarkBlockCard
        subtitle="ПРОМЫШЛЕННЫЙ ПРОЦЕСС #3"
        title="Процесс Фраша (Frasch Process) — Промысловая подземная добыча серы"
      >
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p>
            Метод Германа Фраша применяется для извлечения элементной серы из глубоких подземных месторождений (соляных куполов) без шахтной проходки. В скважину опускают три концентрические трубы:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
            <li>По внешней трубе нагнетают перегретую воду под давлением (160°C, 1.6 МПа), плавятся пласты серы (температура плавления 119°C).</li>
            <li>По центральной внутренней трубе подают горячий сжимаемый воздух.</li>
            <li>По средней трубе под давлением воздуха эмульгированная жидкая сера поднимается на поверхность.</li>
          </ul>
        </div>
      </DarkBlockCard>
    </div>
  );
};
