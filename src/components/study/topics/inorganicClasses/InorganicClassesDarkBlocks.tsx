import React from 'react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';

/**
 * Dark Block 1: Контактный способ производства H₂SO₄ и каталитическое окисление SO₂
 * Размещается в разделе «Кислоты» (section-acids)
 */
export const InorganicClassesDarkBlock1: React.FC = () => {
  return (
    <DarkBlockCard
      title="Контактный способ производства серной кислоты (H₂SO₄)"
      subtitle="Промышленный химизм • Трёхстадийный цикл"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Серная кислота — важнейший продукт основной химической промышленности. Современный контактный способ основан на трёх последовательных стадиях:
      </p>

      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия I: Обжиг пирита — получение SO₂
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Обжиг измельчённого пирита в печи «кипящего слоя» при t = 800–900 °C:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="4FeS2 + 11O2 -(t=800-900°C)-> 2Fe2O3 + 8SO2^ + Q" className="text-amber-300 font-bold" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия II: Каталитическое окисление SO₂ → SO₃
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Обратимая экзотермическая реакция на ванадиевом катализаторе (<ChemFormula formula="V2O5" className="text-teal-300 font-medium" />) при t = 450–500 °C:
          </p>
          <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm">
            <ChemFormula formula="2SO2 + O2 <=(V2O5, t=450-500°C)=> 2SO3 + Q" className="text-teal-300 font-bold" />
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия III: Абсорбция SO₃ концентрированной H₂SO₄
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            SO₃ поглощают 98.3%-ной H₂SO₄ (не водой — иначе образуется трудноуловимый сернокислотный туман). Образуется олеум, который затем разбавляют до товарной кислоты:
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
 * Dark Block 2: Классификация солей — углублённый разбор с примерами
 * Размещается в разделе «Соли» (section-salts)
 */
export const InorganicClassesDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Типы солей: от средних до комплексных — полная классификация"
      subtitle="Классификация и номенклатура солей"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Соли — наиболее многочисленный класс неорганических соединений. По составу и строению выделяют пять типов, каждый со своими правилами номенклатуры и химическими особенностями:
      </p>

      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Средние (нормальные) соли — продукт полного замещения H⁺ кислоты на металл
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="NaCl" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">хлорид натрия</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="Ca3(PO4)2" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">ортофосфат кальция</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="CuSO4" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">сульфат меди(II)</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="Fe(NO3)3" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">нитрат железа(III)</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Кислые соли — продукт неполного замещения H⁺ многоосновной кислоты
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="NaHCO3" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">гидрокарбонат натрия (питьевая сода)</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="Ca(H2PO4)2" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">дигидроортофосфат кальция</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="NaHSO4" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">гидросульфат натрия</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="Ca(HCO3)2" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">гидрокарбонат кальция</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Основные соли — содержат гидроксогруппы OH⁻
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="(CuOH)2CO3" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">карбонат гидроксомеди(II) (малахит)</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="MgOHCl" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">хлорид гидроксомагния</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Двойные и комплексные соли
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="KAl(SO4)2" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">сульфат алюминия-калия (квасцы)</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="Na[Al(OH)4]" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">тетрагидроксоалюминат натрия</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="[Ag(NH3)2]Cl" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">хлорид диамминсеребра(I)</span>
            </div>
            <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
              <ChemFormula formula="K3[Fe(CN)6]" className="text-teal-300 font-bold" />
              <span className="text-slate-400 block mt-0.5">гексацианоферрат(III) калия</span>
            </div>
          </div>
        </div>
      </div>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 3 (компактный): Амфотерность — две схемы растворения в щёлочи
 * Размещается в разделе «Амфотерные гидроксиды» (section-amphoteric) в гриде со светлой карточкой
 */
export const InorganicClassesDarkBlock3: React.FC = () => {
  return (
    <DarkBlockCard
      title="Две схемы растворения амфотерного гидроксида в щёлочи"
      subtitle="Реакции в водном растворе и при сплавлении"
    >
      <div className="space-y-3">
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5">
          <span className="font-bold text-amber-400 block text-xs">В растворе (t ≈ 20 °C):</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Образуется <TermTooltip term="комплексная соль" definition="Соль, содержащая комплексный ион — центральный атом металла, связанный с лигандами (OH⁻, NH₃, CN⁻ и др.) координационными связями." /> — гидроксокомплекс:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs">
            <ChemFormula formula="Al(OH)3 + NaOH -> Na[Al(OH)4]" className="text-amber-300 font-bold" />
          </div>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs">
            <ChemFormula formula="Zn(OH)2 + 2NaOH -> Na2[Zn(OH)4]" className="text-amber-300 font-bold" />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1.5">
          <span className="font-bold text-teal-300 block text-xs">При сплавлении (t &gt; 300 °C):</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Образуется <TermTooltip term="средняя соль" definition="Продукт полного замещения атомов водорода кислоты на металл; не содержит ни H⁺, ни OH⁻." /> — алюминат или цинкат:
          </p>
          <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs">
            <ChemFormula math="\mathrm{Al(OH)_3} + \mathrm{NaOH} \xrightarrow{\text{сплавление}} \mathrm{NaAlO_2} + 2\mathrm{H_2O}" className="text-teal-300 font-bold" />
          </div>
          <div className="text-teal-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs">
            <ChemFormula math="\mathrm{Zn(OH)_2} + 2\mathrm{NaOH} \xrightarrow{\text{сплавление}} \mathrm{Na_2ZnO_2} + 2\mathrm{H_2O}" className="text-teal-300 font-bold" />
          </div>
        </div>
      </div>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 4 (компактный): Несолеобразующие оксиды — исключения, которые нужно знать
 * Размещается в разделе «Оксиды» (section-oxides)
 */
export const InorganicClassesDarkBlock4: React.FC = () => {
  return (
    <DarkBlockCard
      title="Несолеобразующие оксиды: исключения из реакций солеобразования"
      subtitle="Не реагируют ни с кислотами, ни со щелочами"
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Особый класс бинарных соединений с кислородом, которые <strong className="text-amber-400">не образуют солей</strong> при взаимодействии ни с кислотами, ни со щелочами. Их нужно знать «в лицо» — на экзамене их часто путают с кислотными:
      </p>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
          <ChemFormula formula="CO" className="text-teal-300 font-bold" />
          <span className="text-slate-400 block mt-0.5 text-xs">угарный газ, с.о. углерода: +2</span>
        </div>
        <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
          <ChemFormula formula="NO" className="text-teal-300 font-bold" />
          <span className="text-slate-400 block mt-0.5 text-xs">оксид азота(II), бесцветный газ</span>
        </div>
        <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
          <ChemFormula formula="N2O" className="text-teal-300 font-bold" />
          <span className="text-slate-400 block mt-0.5 text-xs">оксид азота(I), «веселящий газ»</span>
        </div>
        <div className="p-2 bg-slate-900/80 rounded-lg border border-slate-700">
          <ChemFormula formula="SiO" className="text-teal-300 font-bold" />
          <span className="text-slate-400 block mt-0.5 text-xs">оксид кремния(II), неустойчив</span>
        </div>
      </div>

      <p className="text-slate-400 leading-relaxed font-normal text-xs sm:text-sm mt-2">
        <strong className="text-rose-400">Важно:</strong> в цепочках превращений несолеобразующие оксиды не участвуют в реакциях солеобразования — их нельзя «провести» через кислоту или щёлочь для получения соли.
      </p>
    </DarkBlockCard>
  );
};
