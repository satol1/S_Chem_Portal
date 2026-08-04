import React from 'react';
import { FlaskConical, BookOpen } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

export const AtomStructureSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 2.1 */}
      <section id="section-atom-models" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2.1. Модели строения атома</h2>
              <p className="text-xs sm:text-sm text-slate-500">От модели Томсона до современной квантово-механической модели</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Представления о строении атома развивались исторически. Модель «пудинг с изюмом» Дж. Томсона (1904 г.) сменила планетарная модель Э. Резерфорда (1911 г.), предложенная на основе опыта рассеяния альфа-частиц на золотой фольге: в центре атома находится массивное положительно заряженное ядро, вокруг которого движутся электроны.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Модель Н. Бора (1913 г.) ввела постулаты о стационарных орбитах: электрон движется по орбитам с определённой энергией без излучения, а излучение или поглощение энергии происходит только при квантовых переходах между орбитами. Современная квантово-механическая модель описывает электрон как электронное облако: орбиталь — это область пространства с наибольшей вероятностью нахождения электрона.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Планетарная модель</strong> — электроны движутся вокруг массивного положительно заряженного ядра</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Постулаты Бора</strong> — стационарные орбиты и квантовые переходы между ними</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Орбиталь</strong> — область пространства с наибольшей вероятностью нахождения электрона</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Планетарная модель</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Постулаты Бора</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электронное облако</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Орбиталь</span>
        </div>
      </section>

      {/* SECTION 2.2 */}
      <section id="section-quantum-numbers" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2.2. Квантовые числа</h2>
              <p className="text-xs sm:text-sm text-slate-500">Четыре квантовых числа — «адрес» электрона в атоме</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Состояние электрона в атоме описывают четыре квантовых числа. Главное квантовое число <ChemFormula math="n" className="font-semibold text-slate-900" /> (от 1 до 7) определяет энергию и размер энергетического уровня; орбитальное квантовое число <ChemFormula math="l" className="font-semibold text-slate-900" /> принимает значения от 0 до <ChemFormula math="n-1" className="font-semibold text-slate-900" /> и задаёт форму орбитали (s-, p-, d- или f-форма); магнитное квантовое число <ChemFormula math="m_l" className="font-semibold text-slate-900" /> принимает значения от <ChemFormula math="-l" className="font-semibold text-slate-900" /> до <ChemFormula math="+l" className="font-semibold text-slate-900" /> и определяет ориентацию орбитали в пространстве; спиновое квантовое число <ChemFormula math="m_s = \pm \tfrac{1}{2}" className="font-semibold text-slate-900" /> характеризует собственный момент вращения электрона.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Число орбиталей на энергетическом уровне равно <ChemFormula math="n^2" className="font-semibold text-slate-900" />, а максимальное число электронов на уровне — <ChemFormula math="2n^2" className="font-semibold text-slate-900" />.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="l = 0,\;1,\;\ldots,\;n-1" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="m_l = -l,\;\ldots,\;0,\;\ldots,\;+l" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="m_s = \pm \dfrac{1}{2}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="N_{\text{орб}} = n^2" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="N_{\max} = 2n^2" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Главное квантовое число</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Орбитальное квантовое число</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Спин</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энергетический уровень</span>
        </div>
      </section>

      {/* SECTION 2.3 */}
      <section id="section-electron-configs" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2.3. Электронные конфигурации</h2>
              <p className="text-xs sm:text-sm text-slate-500">Принцип Паули, правило Клечковского и правило Хунда</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Заполнение орбиталей электронами подчиняется трём правилам. Принцип Паули: на одной орбитали может находиться не более двух электронов с противоположными спинами. Правило Клечковского: подуровни заполняются в порядке возрастания суммы главного и орбитального квантовых чисел (<ChemFormula math="n + l" className="font-semibold text-slate-900" />). Правило Хунда: в пределах подуровня электроны распределяются так, чтобы суммарный спин был максимальным.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Порядок заполнения подуровней: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p… По заполняющемуся подуровню элементы делят на s-, p-, d- и f-элементы. У хрома и меди происходит «провал» электрона: конфигурации <ChemFormula formula="3d^5 4s^1" className="font-semibold text-slate-900" /> и <ChemFormula formula="3d^10 4s^1" className="font-semibold text-slate-900" /> энергетически выгоднее ожидаемых.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^6 4s^2" /> <span className="text-slate-500">— кальций</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2" /> <span className="text-slate-500">— железо</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1" /> <span className="text-slate-500">— хром («провал»)</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="1s^2 2s^2 2p^6 3s^2 3p^6 3d^10 4s^1" /> <span className="text-slate-500">— медь («провал»)</span></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Принцип Паули</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Правило Клечковского</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Правило Хунда</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">s-, p-, d-элементы</span>
        </div>
      </section>

      {/* SECTION 2.4 */}
      <section id="section-nucleus-radioactivity" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2.4. Атомное ядро и радиоактивность. Ядерные реакции</h2>
              <p className="text-xs sm:text-sm text-slate-500">Протоны, нейтроны, виды радиоактивного распада</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Ядро атома состоит из протонов (заряд +1) и нейтронов (заряд 0). Число протонов равно заряду ядра <ChemFormula math="Z" className="font-semibold text-slate-900" />, а массовое число — сумме чисел протонов и нейтронов: <ChemFormula math="A = Z + N" className="font-semibold text-slate-900" />.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Радиоактивность — самопроизвольное превращение нестабильных ядер: при альфа-распаде испускается ядро гелия, при бета-распаде — электрон, гамма-излучение представляет собой электромагнитные кванты. Скорость распада характеризует период полураспада — время, за которое число радиоактивных ядер уменьшается вдвое. Ядерные реакции, в отличие от химических, идут с сохранением суммарного заряда и массового числа.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="A = Z + N" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="^{A}_{Z}X \rightarrow ^{A-4}_{Z-2}Y + ^{4}_{2}He" /> <span className="text-slate-500">— альфа-распад</span></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="^{A}_{Z}X \rightarrow ^{A}_{Z+1}Y + ^{0}_{-1}e" /> <span className="text-slate-500">— бета-распад</span></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Протон</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Нейтрон</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Альфа- и бета-распад</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Период полураспада</span>
        </div>
      </section>

      {/* SECTION 2.5 */}
      <section id="section-periodic-law" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2.5. Периодический закон и периодическая система Д.И. Менделеева</h2>
              <p className="text-xs sm:text-sm text-slate-500">Формулировка закона и структура периодической системы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Периодический закон открыт Д.И. Менделеевым в 1869 г.: свойства элементов находятся в периодической зависимости от заряда ядер их атомов (в исторической формулировке Менделеева — от атомной массы). Графическим выражением закона служит периодическая система элементов.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Структура периодической системы: 7 периодов (малые и большие) и 8 групп (I–VIII), каждая группа делится на главную и побочную подгруппы. Номер периода равен числу энергетических уровней в атоме, а номер группы — числу валентных электронов у элементов главных подгрупп. В атоме нейтрального элемента заряд ядра <ChemFormula math="Z" className="font-semibold text-slate-900" /> равен числу протонов и числу электронов.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="Z = N_p = N_e" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Периодический закон</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Период</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Группа</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Подгруппа</span>
        </div>
      </section>

      {/* SECTION 2.6 */}
      <section id="section-periodic-trends" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2.6. Закономерности периодической системы</h2>
              <p className="text-xs sm:text-sm text-slate-500">Изменение свойств элементов по периодам и группам</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Свойства элементов изменяются закономерно. По периоду слева направо: радиус атома уменьшается, энергия ионизации и электроотрицательность возрастают, металлические свойства ослабевают, а неметаллические усиливаются. По группе сверху вниз: радиус возрастает, энергия ионизации уменьшается, металлические свойства усиливаются.
        </p>
        <p className="text-slate-700 leading-relaxed font-normal">
          Характер высших оксидов и гидроксидов по периоду меняется от основных через амфотерные к кислотным, а в группах сверху вниз основность возрастает.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-700" />
            <span>Ключевые определения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">По периоду (слева направо)</strong> — радиус уменьшается; энергия ионизации и электроотрицательность возрастают; металлические свойства ослабевают</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">По группе (сверху вниз)</strong> — радиус возрастает; металлические свойства усиливаются</div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-700"><strong className="text-slate-900">Характер оксидов и гидроксидов по периоду</strong> — от основных через амфотерные к кислотным</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Атомный радиус</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энергия ионизации</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Электроотрицательность</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Металлические свойства</span>
        </div>
      </section>

      {/* SCAFFOLD STATUS */}
      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-02" onGoToPractice={handleGoToPractice} />

    </div>
  );
};
