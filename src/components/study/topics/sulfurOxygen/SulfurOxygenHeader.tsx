import React from 'react';
import { Lightbulb, Zap, ArrowRight, ShieldAlert, Sparkles, Atom, Flame, FlaskConical, Layers, Factory, Box } from 'lucide-react';
import { TopicQuickNavTags, type QuickNavTag } from '../../TopicQuickNavTags';
import { TopicNavGrid } from '../../TopicNavGrid';

interface HeaderProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  setActiveSection: (id: string) => void;
  handleGoToPractice: () => void;
}

export const SulfurOxygenHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection,
  handleGoToPractice
}) => {
  const quickNavTags: QuickNavTag[] = [
    { label: 'Строение S и O', targetId: 'section-general', icon: Atom },
    { label: 'Аллотропия S₈ и O₃', targetId: 'section-allotropes', icon: Layers },
    { label: 'Пероксид H₂O₂', targetId: 'section-peroxide', icon: FlaskConical },
    { label: 'H₂S и Сульфиды', targetId: 'section-sulfides', icon: Flame },
    { label: 'Оксиды SO₂ и SO₃', targetId: 'section-oxides', icon: Sparkles },
    { label: 'Серная кислота (H₂SO₄)', targetId: 'section-h2so4', icon: FlaskConical },
    { label: 'Сульфаты и Олеум', targetId: 'section-salts', icon: Layers },
    { label: 'Контактный способ', targetId: 'section-industry', icon: Factory },
    { label: '3D-Модели', targetId: 'section-molecules-3d', icon: Box },
  ];

  return (
    <div className="space-y-6">
      {/* Main Topic Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-amber-400">
            ХЭ-06
          </span>
          <span className="text-xs font-bold text-slate-500">
            Химия элементов (Неорганика)
          </span>
          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
            ЕГЭ / ДВИ / Всерос
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Сера (S) и кислород (O)
        </h1>

        <p className="text-sm font-semibold text-amber-800">
          Халькогены, аллотропия (S₈, O₃), пероксид водорода H₂O₂, сульфиды, олеум, контактный способ производства H₂SO₄ и специфические ОВР
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Фундаментальный академический конспект по элементам VI-A группы. Положение в ПСХО, квантовые ограничения валентности кислорода (до II), валентные возможности серы (II, IV, VI), свойства O₂, O₃, H₂O₂, H₂S, SO₂, SO₃, концентрированной серной кислоты H₂SO₄, промышленный контактный способ и разбор критериев ФИПИ.
        </p>

        {/* Quick Nav Tags Component */}
        <div className="pt-2">
          <TopicQuickNavTags tags={quickNavTags} />
        </div>

        {/* Quick Action Button to Practice */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-medium">
            Академический конспект по кодификатору ФИПИ 2026 года
          </span>

          <button
            onClick={handleGoToPractice}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow transition flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>Перейти к практикуму и тренажерам</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Key Idea Lightbulb Banner */}
      <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-amber-950 flex items-start gap-4 shadow-sm">
        <div className="p-3 rounded-2xl bg-amber-500 text-slate-950 shrink-0">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-base font-extrabold text-amber-950 mb-1">
            Ключевая идея темы:
          </h3>
          <p className="text-xs sm:text-sm font-medium text-amber-900 leading-relaxed">
            Кислород — второй по электроотрицательности элемент (после фтора), ограничен валентностью II из-за отсутствия d-орбиталей на 2-м периоде. Сера за счет доступных 3d-орбиталей расширяет валентную оболочку до VI и образует степени окисления -2, 0, +2, +4, +6. Концентрированная H₂SO₄ — мощнейший ОВР-окислитель и дегидрататор, пассивирующий Fe, Cr, Al на холоду.
          </p>
        </div>
      </div>

      {/* FIPI Pitfalls Alert Callout */}
      <div className="p-6 rounded-3xl bg-rose-50 border border-rose-200 text-rose-950 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-rose-900 font-extrabold text-sm">
          <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
          <span>Важные экзаменационные подводные камни ФИПИ (Задания 8, 9, 29, 31):</span>
        </div>
        <ul className="space-y-2 pl-5 list-disc text-xs sm:text-sm text-rose-900 font-medium leading-relaxed">
          <li>
            <strong>Концентрированная H₂SO₄ с металлами:</strong> РЕАКЦИЯ ИДЕТ БЕЗ ВЫДЕЛЕНИЯ ВОДОРОДА (H₂)! Газом-продуктом восстановлена сера: SO₂, S или H₂S.
          </li>
          <li>
            <strong>Пассивация на холоду:</strong> Железо (Fe), хром (Cr) и алюминий (Al) НЕ РЕАГИРУЮТ с концентрированной H₂SO₄ при 20°C! Для проведения реакции необходим нагрев.
          </li>
          <li>
            <strong>Нерастворимость сульфидов:</strong> Сульфиды меди (CuS), свинца (PbS), серебра (Ag₂S) и ртути (HgS) НЕ растворяются в разбавленных неокисляющих кислотах (HCl, H₂SO₄ разб).
          </li>
          <li>
            <strong>Необратимый совместный гидролиз:</strong> При смешивании солей Al³⁺ или Cr³⁺ с сульфидами S²⁻ в растворе образуется осадок гидроксида Al(OH)₃/Cr(OH)₃ и выделяется газ H₂S!
          </li>
          <li>
            <strong>Качественная реакция на SO₄²⁻:</strong> Образование белого мелкокристаллического осадка BaSO₄, нерастворимого ни в H₂O, ни в концентрированных HNO₃/HCl.
          </li>
        </ul>
      </div>

      {/* Navigation TOC Grid (#nav-toc) */}
      <div id="nav-toc">
        <TopicNavGrid
          navItems={navItems}
          activeSection={activeSection}
          onSelectSection={setActiveSection}
        />
      </div>
    </div>
  );
};
