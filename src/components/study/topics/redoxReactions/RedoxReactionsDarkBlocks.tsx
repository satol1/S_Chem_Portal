import React from 'react';
import { ListChecks, Factory, History, Sparkles } from 'lucide-react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';

/** Dark Block 1 (большой, 6.4): Ионно-электронный метод — пять шагов */
export const RedoxDarkBlockHalfReactions: React.FC = () => {
  return (
    <DarkBlockCard
      title="Ионно-электронный метод: пять шагов"
      subtitle="Метод полуреакций • Баланс по реальным частицам раствора"
      icon={ListChecks}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Метод полуреакций составляет баланс не по формальным степеням окисления, а по реальным частицам
        раствора с участием <ChemFormula formula="H+" className="text-slate-300" />, <ChemFormula formula="OH-" className="text-slate-300" /> и воды <ChemFormula formula="H2O" className="text-slate-300" />.
        Он корректно отражает механизм реакции в растворе и не требует угадывать формы существования элементов.
      </p>

      <div className="space-y-2 text-xs sm:text-sm">
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
          <span className="font-bold text-amber-400">Шаг 1–2.</span>
          <span className="text-slate-300"> Записать ионную схему реакции и определить среду по реагентам: <ChemFormula formula="H+" className="text-slate-300" /> — кислая, <ChemFormula formula="OH-" className="text-slate-300" /> — щелочная.</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
          <span className="font-bold text-amber-400">Шаг 3–4.</span>
          <span className="text-slate-300"> Уравнять кислород водой (или <ChemFormula formula="OH-" className="text-slate-300" /> в щёлочи), затем водород — ионами <ChemFormula formula="H+" className="text-slate-300" /> или водой.</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
          <span className="font-bold text-amber-400">Шаг 5.</span>
          <span className="text-slate-300"> Уравнять заряд электронами, найти наименьшее общее кратное и сложить полуреакции.</span>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 space-y-1.5 text-xs sm:text-sm">
        <span className="font-bold text-teal-400 block">Пример: восстановление перманганата железом(II) в кислой среде</span>
        <div className="text-teal-300 font-bold"><ChemFormula math="\mathrm{MnO_4^- + 8H^+ + 5e^- \rightarrow Mn^{2+} + 4H_2O}" className="text-teal-300" /></div>
        <div className="text-amber-300 font-bold"><ChemFormula math="\mathrm{Fe^{2+} - e^- \rightarrow Fe^{3+}} \quad (\times 5)" className="text-amber-300" /></div>
        <div className="text-slate-300 font-bold"><ChemFormula math="\mathrm{MnO_4^- + 5Fe^{2+} + 8H^+ \rightarrow Mn^{2+} + 5Fe^{3+} + 4H_2O}" className="text-slate-300" /></div>
      </div>
    </DarkBlockCard>
  );
};

/** Dark Block 2 (большой, 6.8): Процесс Холла–Эру */
export const RedoxDarkBlockHallHeroult: React.FC = () => {
  return (
    <DarkBlockCard
      title="Процесс Холла–Эру: алюминий из глинозёма"
      subtitle="Промышленный электролиз • Единственный способ получения алюминия"
      icon={Factory}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        В 1886 г. Ч. Холл (США) и П. Эру (Франция) независимо запатентовали электролиз оксида алюминия,
        растворённого в расплавленном криолите. До этого алюминий восстанавливали натрием и ценили дороже
        золота; электролиз сделал его массовым конструкционным материалом.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-teal-400 block">Катод (дно ванны)</span>
          <div className="p-2 bg-slate-900/80 rounded-lg text-teal-300 font-bold">
            <ChemFormula math="\mathrm{Al^{3+} + 3e^- \rightarrow Al^0}" />
          </div>
          <p className="text-slate-300">Расплавленный алюминий собирается на дне электролизёра.</p>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block">Анод (графитовый)</span>
          <div className="p-2 bg-slate-900/80 rounded-lg text-amber-300 font-bold">
            <ChemFormula math="\mathrm{2O^{2-} - 4e^- \rightarrow O_2; \quad C + O_2 \rightarrow CO_2}" />
          </div>
          <p className="text-slate-300">Кислород окисляет уголь анода — аноды постепенно сгорают.</p>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 flex items-start justify-between gap-3">
          <div>
            <span className="font-bold text-amber-400 block">Суммарная реакция</span>
          </div>
          <span className="px-2 py-1 bg-amber-900/60 text-amber-300 rounded font-bold whitespace-nowrap">≈ 960 °C</span>
        </div>
        <div className="p-2.5 bg-slate-900/80 rounded-lg text-amber-300 font-bold">
          <ChemFormula math="\mathrm{2Al_2O_3 \xrightarrow{\text{криолит, электролиз}} 4Al + 3O_2\uparrow}" />
        </div>
        <p className="text-slate-400 leading-relaxed">
          Ключевые параметры: глинозём <ChemFormula formula="Al2O3" className="text-slate-400" /> в расплаве криолита <ChemFormula formula="Na3AlF6" className="text-slate-400" />;
          удельный расход электроэнергии ≈ 13–16 кВт·ч на 1 кг алюминия (обычно ≈ 15), поэтому заводы строят рядом с мощными ГЭС.
        </p>
      </div>
    </DarkBlockCard>
  );
};

/** Dark Block 3 (малый, 6.5): Ряд Бекетова */
export const RedoxDarkBlockBeketov: React.FC = () => {
  return (
    <DarkBlockCard
      title="Ряд Бекетова (1865)"
      subtitle="Эмпирика раньше теории"
      icon={History}
    >
      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Н. Н. Бекетов установил ряд активности металлов по способности вытеснять друг друга из растворов
        солей и водород из кислот — исследования 1859–1865 гг., докторская диссертация «Исследования над
        явлениями вытеснения одних металлов другими» (защищена 28 марта 1865 г.). Термодинамическое
        обоснование через электродные потенциалы ряд получил лишь в конце 1880-х гг. (В. Нернст).
      </p>
    </DarkBlockCard>
  );
};

/** Dark Block 4 (малый, 6.8): Гальваника вокруг нас */
export const RedoxDarkBlockElectroplating: React.FC = () => {
  return (
    <DarkBlockCard
      title="Гальваника вокруг нас"
      subtitle="Электролиз с растворимым анодом"
      icon={Sparkles}
    >
      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Хромированные детали автомобилей, никелированные смесители, позолоченные контакты электроники —
        всё это электролиз: покрывающий металл служит анодом и постепенно растворяется, а деталь-катод
        обрастает ровным защитным слоем. Толщину покрытия точно задают зарядом по законам Фарадея.
      </p>
    </DarkBlockCard>
  );
};
