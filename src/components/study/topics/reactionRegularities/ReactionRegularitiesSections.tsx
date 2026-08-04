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

export const ReactionRegularitiesSections: React.FC<SectionsProps> = ({
  scrollToNav,
  handleGoToPractice
}) => {
  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 7.1 */}
      <section id="section-energetics" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7.1. Энергетика химических реакций</h2>
              <p className="text-xs sm:text-sm text-slate-500">Тепловой эффект, энтальпия, закон Гесса и критерий возможности процесса</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Любая химическая реакция сопровождается поглощением или выделением теплоты. Тепловой эффект реакции — количество теплоты, которое выделяется или поглощается в ходе реакции. Реакции, идущие с выделением теплоты, называют экзотермическими (<ChemFormula math="\Delta H < 0" className="font-semibold text-slate-900" />, условно «<ChemFormula math="+Q" />»), а с поглощением — эндотермическими (<ChemFormula math="\Delta H > 0" className="font-semibold text-slate-900" />, условно «<ChemFormula math="-Q" />»).
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Энтальпия <ChemFormula math="H" className="font-semibold text-slate-900" /> — теплосодержание системы; её изменение <ChemFormula math="\Delta H" className="font-semibold text-slate-900" /> и есть тепловой эффект реакции при постоянном давлении. Основной закон термохимии — закон Гесса: тепловой эффект реакции зависит только от начального и конечного состояний системы и не зависит от пути процесса. Это позволяет рассчитывать тепловые эффекты любых стадий через теплоты образования веществ.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Критерий принципиальной возможности протекания процесса — энергия Гиббса: процесс самопроизволен, если <ChemFormula math="\Delta G < 0" className="font-semibold text-slate-900" />. Энергетика таким образом отвечает на вопрос «возможна ли реакция», но ничего не говорит о её скорости — это предмет кинетики.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\Delta H < 0\;(+Q)\;\text{— экзотермическая реакция}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\Delta H > 0\;(-Q)\;\text{— эндотермическая реакция}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\Delta G = \Delta H - T\Delta S" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\Delta G < 0 \Rightarrow \text{процесс самопроизволен}" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Экзотермическая реакция</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Эндотермическая реакция</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энтальпия</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Закон Гесса</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энергия Гиббса</span>
        </div>
      </section>

      {/* SECTION 7.2 */}
      <section id="section-kinetics-catalysis" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7.2. Химическая кинетика и катализ</h2>
              <p className="text-xs sm:text-sm text-slate-500">Скорость реакции, факторы влияния и катализаторы</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Скорость химической реакции — изменение концентрации вещества в единицу времени. На скорость влияют: природа реагирующих веществ, концентрация (основной закон действующих масс — скорость пропорциональна произведению концентраций реагентов в степенях их стехиометрических коэффициентов), температура, площадь поверхности соприкосновения фаз (для гетерогенных реакций) и присутствие катализатора.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          При повышении температуры на каждые 10 K скорость реакции возрастает в 2–4 раза (правило Вант-Гоффа); точную температурную зависимость константы скорости описывает уравнение Аррениуса через энергию активации — минимальный избыток энергии, необходимый молекулам для эффективного столкновения.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Катализатор ускоряет реакцию, снижая энергию активации (образуя промежуточные соединения с реагентами), но сам не расходуется и не входит в состав продуктов. Различают гомогенный (катализатор в той же фазе) и гетерогенный (катализатор в другой фазе) катализ; биологические катализаторы белковой природы называют ферментами.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="v = \frac{\Delta c}{\Delta t}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="v = k[A]^a[B]^b\;\text{— закон действующих масс}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="\frac{v_2}{v_1} = \gamma^{\frac{T_2 - T_1}{10}},\;\gamma = 2\text{–}4" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="k = A \cdot e^{-\frac{E_a}{RT}}\;\text{— уравнение Аррениуса}" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Скорость реакции</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Энергия активации</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Катализатор</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Правило Вант-Гоффа</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Ферменты</span>
        </div>
      </section>

      {/* SECTION 7.3 */}
      <section id="section-equilibrium" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7.3. Химическое равновесие</h2>
              <p className="text-xs sm:text-sm text-slate-500">Константа равновесия и принцип Ле Шателье</p>
            </div>
          </div>
          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Большинство химических реакций обратимы: одновременно протекают прямая и обратная реакции. Химическое равновесие — динамическое состояние, при котором скорости прямой и обратной реакций равны, а концентрации всех веществ постоянны. Количественная характеристика равновесия — константа равновесия <ChemFormula math="K" className="font-semibold text-slate-900" />: отношение произведений равновесных концентраций продуктов и исходных веществ, взятых в степенях стехиометрических коэффициентов.
        </p>

        <p className="text-slate-700 leading-relaxed font-normal">
          Направление смещения равновесия при внешних воздействиях предсказывает принцип Ле Шателье: равновесие смещается в сторону, ослабляющую оказанное воздействие. Повышение температуры смещает равновесие в сторону эндотермической реакции; повышение давления (для систем с газами) — в сторону меньшего числа молей газов; повышение концентрации вещества — в сторону его расходования. Катализатор не смещает равновесие, а лишь ускоряет его достижение.
        </p>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Ключевые формулы и уравнения</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula math="K = \frac{[C]^c[D]^d}{[A]^a[B]^b}" /></div>
            <div className="p-2.5 bg-white rounded-lg border border-slate-200"><ChemFormula formula="H2 + I2 <=> 2HI" /></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-slate-400 font-bold">Ключевые термины:</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Константа равновесия</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Принцип Ле Шателье</span>
          <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200">Динамическое равновесие</span>
        </div>
      </section>

      <div className="p-4 sm:p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Каркас темы размечен по подблокам рабочей программы. Подробная теория, таблицы, 2D-схемы и интересные факты будут добавлены на этапе полной разработки темы.
        </p>
      </div>

      <PracticeBanner topicCode="ОХ-07" onGoToPractice={handleGoToPractice} />
    </div>
  );
};
