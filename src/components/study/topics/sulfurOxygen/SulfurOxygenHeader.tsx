import React from 'react';
import { 
  Zap, ArrowRight, Lightbulb, AlertTriangle, 
  FlaskConical, Atom, TestTube, Orbit 
} from 'lucide-react';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { TopicNavGrid } from '../../TopicNavGrid';
import { TopicQuickNavTags, type QuickNavTag } from '../../TopicQuickNavTags';
import { useRouter } from '../../../../routes/router';

interface HeaderProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const SulfurOxygenHeader: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  setActiveSection
}) => {
  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-allotropes', label: 'Аллотропия S₈ и O₃', icon: Atom },
    { targetId: 'section-h2so4', label: 'Серная кислота и ОВР', icon: TestTube },
    { targetId: 'section-molecules-3d', label: '3D-Модели веществ', icon: Orbit },
  ];
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('elements-chemistry', 'elem-nonme-so', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      
      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ХЭ-06
          </span>
          <span>•</span>
          <span>Химия элементов</span>
          <span>•</span>
          <span>VI-A Группа (Подгруппа кислорода)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          <span>Химия серы (S) и кислорода (O)</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Халькогены, аллотропия (S₈, O₃), пероксид водорода H₂O₂, сульфиды, оксиды SO₂, SO₃, концентрированная серная кислота H₂SO₄ (олеум), контактный способ производства и 3D-модели веществ.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
          <TopicQuickNavTags tags={quickNavTags} />

          <button
            onClick={handleGoToPractice}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Перейти к практикуму темы</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Key Idea Lightbulb Banner */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-start gap-3.5 shadow-xs">
        <div className="p-2.5 rounded-lg bg-slate-200 text-slate-800 shrink-0">
          <Lightbulb className="w-5 h-5 text-slate-700" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm">
          <h3 className="font-bold text-slate-900">
            Ключевая идея темы:
          </h3>
          <p className="text-slate-600 leading-relaxed font-normal">
            Кислород — второй по электроотрицательности элемент (после фтора), ограничен валентностью II из-за отсутствия d-орбиталей на 2-м периоде. Сера за счет доступных 3d-орбиталей расширяет валентную оболочку до VI и образует степени окисления -2, 0, +2, +4, +6. Концентрированная <ChemFormula formula="H2SO4" className="font-semibold text-slate-900" /> — мощнейший ОВР-окислитель и дегидрататор, <TermTooltip term="пассивирующий" definition="Образующий тонкий защитный оксидный слой на поверхности металлов (Fe, Cr, Al) при 20°C, прекращающий дальнейшую реакцию." /> Fe, Cr, Al без нагревания (при комнатной температуре).
          </p>
        </div>
      </div>

      {/* 3. Important Exam Pitfalls Alert Banner */}
      <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base border-b border-slate-200/60 pb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Важные экзаменационные «подводные камни» и тонкости:</span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">1</span>
            <div>
              <strong>Концентрированная <ChemFormula formula="H2SO4" /> с металлами</strong>: РЕАКЦИЯ ИДЕТ БЕЗ ВЫДЕЛЕНИЯ ВОДОРОДА (<ChemFormula formula="H2" />)! Газообразным продуктом является <ChemFormula formula="SO2" />, элементная сера <ChemFormula formula="S" /> или сероводород <ChemFormula formula="H2S" /> в зависимости от активности металла.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <div>
              <strong><TermTooltip term="Пассивация" definition="Образование на поверхности металлов (Fe, Cr, Al) защитной оксидной пленки, предотвращающей дальнейшую реакцию с концентрированной H₂SO₄ при 20°C." /> без нагревания (при 20 °C)</strong>: Железо (<ChemFormula formula="Fe" />), хром (<ChemFormula formula="Cr" />) и алюминий (<ChemFormula formula="Al" />) НЕ РЕАГИРУЮТ с концентрированной <ChemFormula formula="H2SO4" /> при 20°C! Для снятия <TermTooltip term="пассивирующей пленки" definition="Тонкий прочный оксидный слой (Fe₂O₃, Al₂O₃, Cr₂O₃), физически изолирующий металл от взаимодействия с кислотой." /> необходим нагрев.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <div>
              <strong>Нерастворимость сульфидов в сильных кислотах</strong>: Сульфиды меди (<ChemFormula formula="CuS" />), свинца (<ChemFormula formula="PbS" />), серебра (<ChemFormula formula="Ag2S" />) и ртути (<ChemFormula formula="HgS" />) НЕ растворяются в разбавленных неокисляющих кислотах (<ChemFormula formula="HCl" />, <ChemFormula formula="H2SO4(разб)" />).
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <div>
              <strong><TermTooltip term="Совместный (взаимный) гидролиз солей" definition="Взаимно усиливающийся необратимый гидролиз солей слабых кислот и слабых оснований с выпадением осадка гидроксида и выделением H2S." /></strong>: При смешивании солей <ChemFormula formula="Al(3+)" /> или <ChemFormula formula="Cr(3+)" /> с сульфидами происходит взаимный гидролиз с выпадением осадка гидроксида и выделением газа <ChemFormula formula="H2S^" />.
            </div>
          </li>
        </ul>
      </div>

      {/* 4. Table of Contents Navigation Grid */}
      <TopicNavGrid
        navItems={navItems}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
      />

    </div>
  );
};
