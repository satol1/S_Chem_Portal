import React from 'react';
import { FlaskConical, Zap, ArrowRight, Lightbulb, AlertTriangle, Atom, TestTube, Orbit } from 'lucide-react';
import { useRouter } from '../../../../routes/router';
import { TopicNavGrid } from '../../TopicNavGrid';
import { TopicQuickNavTags, type QuickNavTag } from '../../TopicQuickNavTags';
import { ChemText } from '../../../scientific/ChemText';

interface HeaderProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export const ChromiumManganeseHeader: React.FC<HeaderProps> = ({ navItems, activeSection, setActiveSection }) => {
  const { openStudyBlock } = useRouter();

  const handleGoToPractice = () => {
    openStudyBlock('elements-chemistry', 'elem-me-cr-mn', 'practice');
  };

  const quickNavTags: QuickNavTag[] = [
    { targetId: 'section-general', label: 'Строение атомов Cr и Mn', icon: Atom },
    { targetId: 'section-permanganates', label: 'Перманганаты и хроматы', icon: TestTube },
    { targetId: 'section-molecules-3d', label: '3D-Модели веществ', icon: Orbit },
  ];

  return (
    <div className="space-y-4">
      {/* 1. Academic Topic Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-900 font-mono font-semibold">
            ХЭ-04
          </span>
          <span>•</span>
          <span>Химия элементов</span>
          <span>•</span>
          <span>Группы VI-B и VII-B (d-элементы)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-slate-800 shrink-0" />
          d-Металлы: хром (Cr) и марганец (Mn)
        </h1>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-4xl">
          Хром и марганец — d-элементы 4-го периода, у которых заполняется предвнешний 3d-подуровень.
          Они демонстрируют весь спектр степеней окисления от +2 до +7: с её ростом основной характер
          оксидов сменяется кислотным, а окислительная способность соединений резко усиливается.
          Хроматы, дихроматы и перманганаты — важнейшие окислители школьного курса и заданий ЕГЭ.
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <TopicQuickNavTags tags={quickNavTags} />
          <button
            onClick={handleGoToPractice}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
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
          <Lightbulb className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900">Ключевая идея темы:</h3>
          <p className="text-slate-600 leading-relaxed font-normal">
            <ChemText text="У хрома наиболее устойчива степень окисления +3 (амфотерные Cr2O3 и Cr(OH)3), у марганца в кислой среде — +2. Соединения высших степеней окисления — Cr(+6) в хроматах и дихроматах и Mn(+7) в перманганатах — сильнейшие окислители, причём продукты восстановления KMnO4 полностью зависят от среды раствора: Mn2+ в кислоте, MnO2 в нейтральной среде и MnO4(2-) в щёлочи." />
          </p>
        </div>
      </div>

      {/* 3. Important Exam Pitfalls Alert Banner */}
      <div className="p-5 rounded-xl bg-slate-50 border-l-4 border-l-amber-500 border-y border-r border-slate-200 text-slate-800 space-y-3 shadow-xs">
        <div className="flex items-center gap-2 border-b border-slate-200/60 pb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h3 className="font-bold text-slate-900">Важные экзаменационные «подводные камни» и тонкости:</h3>
        </div>
        <ol className="space-y-2.5">
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">1</span>
            <span>
              <ChemText text="Концентрированные HNO3 и H2SO4 — окислители: водород с ними не выделяется никогда (у хрома и марганца при нагревании выделяются NO2 или SO2). Пассивируется при комнатной температуре только хром; марганец с концентрированной азотной кислотой бурно реагирует даже без нагревания." />
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">2</span>
            <span>
              <ChemText text="Cr(OH)3 и Cr2O3 амфотерны: растворяются и в кислотах (соли Cr3+), и в щелочах (в растворе — комплекс [Cr(OH)6]3-, при сплавлении — хромиты, например NaCrO2). А вот Mn(OH)2 — основание, и MnO2 с разбавленными щелочами не реагирует." />
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">3</span>
            <span>
              <ChemText text="Продукт восстановления KMnO4 определяет среда: кислота — Mn2+ (обесцвечивание), нейтральная среда — MnO2 (бурый осадок), сильнощелочная — MnO4(2-) (зелёный). Писать MnO2 в кислой среде — ошибка." />
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 text-xs font-mono font-bold shrink-0">4</span>
            <span>
              <ChemText text="Cr3+ окисляется до CrO4(2-) только в щелочной среде (H2O2, Br2, Cl2), а равновесие CrO4(2-) ⇄ Cr2O7(2-) управляется pH: в кислоте — оранжевый дихромат, в щёлочи — жёлтый хромат." />
            </span>
          </li>
        </ol>
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
