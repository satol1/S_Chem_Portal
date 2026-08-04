import React from 'react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';

/**
 * Dark Block 1: Contact Process for H2SO4 Production
 * Placed in Section 8 (Industrial Chemistry / Contact Process)
 */
export const SulfurOxygenDarkBlock1: React.FC = () => {
  return (
    <DarkBlockCard
      title="Контактный способ производства серной кислоты (H₂SO₄)"
      subtitle="Промышленный химизм • Тройной каталитический цикл"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Контактный способ — современный химико-технологический процесс получения серной кислоты высшей чистоты. Производство основано на последовательном осуществлении трех непрерывных гетерогенных и гомогенных стадий:
      </p>

      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия I: Получение и очистка обжигового газа SO₂ (Печь в кипящем слое)
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Обжиг измельченного пирита <ChemFormula formula="FeS2" className="text-amber-300 font-medium" /> производят в печи «кипящего слоя» продувкой воздуха снизу (принцип противотока) при t = 800–900 °C:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="4FeS2 + 11O2 -(t=800-900°C)-> 2Fe2O3 + 8SO2^ + Q" className="text-amber-300 font-bold" />
          </div>
          <p className="text-slate-400 text-xs leading-relaxed font-normal">
            Обжиговый газ очищают от пыли <ChemFormula formula="Fe2O3" className="text-slate-300" /> в циклонном сепараторе и электрофильтре, промывают и осушают концентрированной серной кислотой от влаги и каталитических ядов (<ChemFormula formula="As2O3" className="text-slate-300" />, <ChemFormula formula="SeO2" className="text-slate-300" />).
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия II: Очистка и каталитическое окисление SO₂ в SO₃ (Контактный аппарат)
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Экзотермическая обратимая реакция протекает на ванадиевом катализаторе (<ChemFormula formula="V2O5" className="text-teal-300 font-medium" /> с добавкой <ChemFormula formula="K2O" className="text-teal-300 font-medium" /> в качестве промотора) при t = 450–500 °C:
          </p>
          <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="2SO2 + O2 <=(V2O5, t=450-500°C)=> 2SO3 + Q" className="text-teal-300 font-bold" />
          </div>
          <p className="text-slate-400 text-xs leading-relaxed font-normal">
            В контактном аппарате применяется принцип теплообмена: выходящий из каталитических слоев горячий газ подогревает поступающую смесь <ChemFormula formula="SO2" /> и <ChemFormula formula="O2" />, что обеспечивает автотермичность процесса без внешнего обогрева.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия III: Абсорбция SO₃ концентрированной H₂SO₄ (Поглотительная башня)
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Оксид серы(VI) поглощают 98.3%-ной серной кислотой (а не водой, так как при взаимодействии с водой образуется мелкий сернокислотный туман, не конденсирующийся в башне). Насыщение кислоты оксидом <ChemFormula formula="SO3" /> приводит к образованию олеума:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm space-y-1">
            <div><ChemFormula formula="SO3 + H2SO4(98.3%) -> H2S2O7 (олеум)" className="text-amber-300 font-bold" /></div>
            <div><ChemFormula formula="H2S2O7 + H2O -> 2H2SO4" className="text-amber-300 font-bold" /></div>
          </div>
        </div>
      </div>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 2: Claus Process (H2S Abatement & Sulfur Recovery)
 * Placed in Section 4 (Hydrogen Compounds / H2S & Sulfides)
 */
export const SulfurOxygenDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Процесс Клаусса (Claus Process) — Обезвреживание H₂S и получение элементной серы"
      subtitle="Экологический химизм • НПЗ и Газопереработка"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Процесс Клаусса — ключевой экологический и химический процесс на нефтеперерабатывающих заводах (НПЗ) и газоперерабатывающих комплексах. Он позволяет утилизировать токсичный сероводород <ChemFormula formula="H2S" className="text-amber-300 font-medium" /> из попутного нефтяного и природного газа с получением чистовой элементной серы:
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2 text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Двухстадийный реакционный цикл утилизации H₂S:</div>
        <div className="text-amber-300 font-semibold space-y-2">
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">1) Термическая стадия (t = 1000–1400 °C, сжигание 1/3 сероводорода):</span>
            <ChemFormula formula="2H2S + 3O2 -(t=1000-1400°C)-> 2SO2 + 2H2O + Q" className="text-amber-300 font-bold" />
          </div>
          <div>
            <span className="text-slate-400 text-xs block font-sans font-normal">2) Каталитическая стадия (t = 200–350 °C, катализатор Al₂O₃ или TiO₂):</span>
            <ChemFormula formula="2H2S + SO2 -(Al2O3, t=200-350°C)-> 3Sv + 2H2O + Q" className="text-amber-300 font-bold" />
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Суммарный экологический баланс процесса Клаусса: <span className="whitespace-nowrap font-bold text-teal-300"><ChemFormula formula="2H2S + O2 -> 2Sv + 2H2O" className="text-teal-300 font-bold" /></span> (превращение высокотоксичного газа в ценное твердое химическое сырье).
      </p>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 3: Frasch Process (Underground Sulfur Mining)
 * Placed in Section 2 (Allotropes & Elemental Sulfur)
 */
export const SulfurOxygenDarkBlock3: React.FC = () => {
  return (
    <DarkBlockCard
      title="Процесс Фраша (Frasch Process) — Промысловая подземная добыча серы"
      subtitle="Промысловая геология • Соляные купола"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Метод Германа Фраша применяется для извлечения элементной серы из глубоких подземных месторождений (соляных куполов) без шахтной проходки. В скважину опускают три концентрические трубы:
      </p>

      <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2 text-xs sm:text-sm">
        <div className="text-slate-400 font-medium text-xs">Технологическая схема подземного плавления серы:</div>
        <div className="text-amber-300 font-semibold space-y-1.5">
          <div className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-700 text-amber-300 text-xs font-mono font-bold shrink-0">1</span>
            <div className="text-slate-200 font-normal">
              <strong>Внешняя труба:</strong> Нагнетают перегретую воду под давлением (160 °C, 1.6 МПа), плавятся подземные пласты серы (<TermTooltip term="Температура плавления серы" definition="Ромбическая сера плавится при 112.8°C, образуя подвижный желтый расплав." /> 112.8–119 °C).
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-700 text-amber-300 text-xs font-mono font-bold shrink-0">2</span>
            <div className="text-slate-200 font-normal">
              <strong>Внутренняя труба:</strong> Подают горячий сжатый воздух для эмульгирования расплава.
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-700 text-amber-300 text-xs font-mono font-bold shrink-0">3</span>
            <div className="text-slate-200 font-normal">
              <strong>Средняя труба:</strong> Эмульгированная жидкая сера под давлением воздуха поднимается на поверхность.
            </div>
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        На поверхности расплавленная сера сливается в приёмные резервуары-определители и кристаллизуется в блоки чистотой 99.5–99.9%, не требующие дополнительной очистки.
      </p>
    </DarkBlockCard>
  );
};
