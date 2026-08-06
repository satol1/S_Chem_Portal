import React from 'react';
import { Flame, Atom, Sparkles } from 'lucide-react';
import { DarkBlockCard } from '../../DarkBlockCard';
import { ChemFormula } from '../../../scientific/ChemFormula';

/**
 * Dark Block 1 (большой): Ломоносов и Лавуазье — закон сохранения массы.
 * Размещается в секции 1.3 (section-conservation).
 */
export const GeneralBasicsDarkBlock1: React.FC = () => {
  return (
    <DarkBlockCard
      title="Ломоносов и Лавуазье: как взвесили химию"
      subtitle="История открытия • Закон сохранения массы"
      icon={Flame}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Закон сохранения массы стал первым количественным законом химии: он превратил её из описательного
        ремесла в точную науку. К закону независимо пришли два учёных — русский и французский.
      </p>

      <div className="space-y-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия I: М. В. Ломоносов, 1748 г. — формулировка закона
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            В письме Л. Эйлеру от 5 июля 1748 г. Ломоносов сформулировал всеобщий закон природы:
            «…все перемены, в натуре случающиеся, такого суть состояния, что сколько чего у одного тела
            отнимется, столько присовокупится к другому…». Применение закона к химии означало: масса
            веществ, вступивших в реакцию, равна массе продуктов.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия II: опыты Ломоносова в запаянных сосудах, 1756 г.
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            «Для точного познания» Ломоносов нагревал металлы «в герметически закупоренных стеклянных
            сосудах» и взвешивал сосуды до и после прокаливания: масса оставалась неизменной —
            прибавка массы металла в точности компенсировалась убылью воздуха.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">
            Стадия III: А. Лавуазье, 1774–1777 гг. — ретортный опыт с ртутью
          </span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Лавуазье около 12 дней нагревал ртуть в запаянной реторте. Масса сосуда с воздухом не
            изменилась, на поверхности ртути образовалась красная «земля» — оксид ртути(II), а объём
            воздуха уменьшился примерно на 1/5:
          </p>
          <div className="text-amber-300 font-bold p-2 bg-slate-900/80 rounded-lg border border-slate-700 text-xs sm:text-sm space-y-1">
            <div><ChemFormula math="2Hg + O_2 \rightarrow 2HgO" className="text-amber-300 font-bold" /></div>
            <div><ChemFormula math="2HgO \rightarrow 2Hg + O_2\uparrow" className="text-teal-300 font-bold" /></div>
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Итог: теория флогистона — невесомой «огненной материи», якобы выделяющейся при горении, — была
        опровергнута; горение оказалось соединением с кислородом. В 1789 г. Лавуазье включил закон
        сохранения массы в «Элементарный курс химии» как аксиому, и с этого момента все расчёты по
        уравнениям реакций опираются именно на него.
      </p>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 2 (большой): Карлсруэ-конгресс 1860 г.
 * БОЛЬШОЙ блок (30-DESIGN §6): полная ширина, внутренняя сетка карточек-стадий.
 * Размещается в секции 1.5 (section-molecules-theory).
 */
export const GeneralBasicsDarkBlock2: React.FC = () => {
  return (
    <DarkBlockCard
      title="Карлсруэ, 1860: как химики договорились, что такое атом"
      subtitle="История понятий • Атом, молекула, эквивалент"
      icon={Atom}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        К середине XIX века химия говорила на разных языках: в Европе действовали несовместимые системы
        атомных масс и формул — воду записывали и как HO, и как H₂O. Понятия «атом», «молекула» и
        «эквивалент» смешивались, и без единой системы не могло быть ни точных формул, ни периодического
        закона.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">Стадия 1. Повестка конгресса</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            3–5 сентября 1860 г. в Карлсруэ собрался первый международный химический конгресс — около 140
            химиков из разных стран. Цель — согласовать определения атома, молекулы и эквивалента,
            химические обозначения и систему атомных масс.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">Стадия 2. Памфлет Канниццаро</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Решающую роль сыграло изложение работы С. Канниццаро «Очерк курса химической философии»
            (1858): метод определения атомных масс по закону Авогадро — через сравнение плотностей
            газообразных веществ. В последний день конгресса памфлет раздали участникам.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
          <span className="font-bold text-amber-400 block text-xs sm:text-sm">Стадия 3. Последствия для химии</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            В конгрессе участвовал 26-летний Д. И. Менделеев. Согласование атомных масс стало одной из
            предпосылок открытия Периодического закона (1869): система элементов строится только на
            единой шкале атомных масс.
          </p>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed font-normal text-xs sm:text-sm">
        Молекулярная гипотеза Авогадро, полвека остававшаяся непризнанной, после Карлсруэ стала общепринятой:
        газы состоят из молекул, молекулы простых газов могут содержать несколько атомов (H₂, O₂, N₂),
        а атом и молекула — разные частицы.
      </p>
    </DarkBlockCard>
  );
};

/**
 * Dark Block 3 (малый): измерение числа Авогадро.
 * МАЛЫЙ блок (30-DESIGN §6): размещается в сетке grid-cols-2 рядом со светлой
 * карточкой-партнёром (следствия закона Авогадро) в секции 1.7 (section-avogadro).
 */
export const GeneralBasicsDarkBlock3: React.FC = () => {
  return (
    <DarkBlockCard
      title="Как измерили число Авогадро"
      subtitle="История константы • Nₐ"
      icon={Sparkles}
    >
      <p className="text-slate-300 leading-relaxed font-normal">
        Сам Авогадро не знал численного значения своей константы — гипотеза 1811 г. говорила лишь о
        равенстве числа молекул в равных объёмах газов.
      </p>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
          <span className="font-bold text-amber-400 block">1865 г. — Й. Лошмидт</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal mt-1">
            Первым оценил число молекул в единице объёма газа: ≈ 2.69·10¹⁹ молекул в 1 см³ при н. у.
            (число Лошмидта).
          </p>
        </div>
        <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
          <span className="font-bold text-teal-300 block">1909 г. — Ж. Перрен</span>
          <p className="text-slate-300 text-xs leading-relaxed font-normal mt-1">
            Измерил число Авогадро по броуновскому движению и ввёл сам термин «число Авогадро»; в 1926 г.
            получил Нобелевскую премию «за работы по прерывистому строению материи и особенно за
            открытие седиментационного равновесия».
          </p>
        </div>
      </div>
    </DarkBlockCard>
  );
};
