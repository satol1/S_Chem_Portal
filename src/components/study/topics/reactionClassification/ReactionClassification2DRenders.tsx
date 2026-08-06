import React from 'react';
import SvgElectronArrow from '../../../scientific/svg/SvgElectronArrow';
import { LIGHT_PALETTE, getInfoCategoryColor } from '../../../../utils/molecule2DTheme';

// ═══════════════════════════════════════
// Тематические 2D-схемы ОХ-05 на централизованных примитивах
// (scientific/svg/). Светлая академическая панель, 100% русские подписи.
// Эталон идиома — InorganicClasses2DRenders.tsx (tree-панели §2.6).
// ═══════════════════════════════════════

export interface ReactionClassification2DProps {
  type: 'bond-cleavage';
  className?: string;
  isModal?: boolean;
}

const P = LIGHT_PALETTE;
const C_HOMOLYSIS = getInfoCategoryColor('purple');
const C_HETERO_II = getInfoCategoryColor('green');
const C_HETERO_III = getInfoCategoryColor('red');

/** Молекула метана со связующей парой, обведённой овалом; y — базовая линия ряда */
const MethaneMolecule: React.FC<{ y: number; accent: string }> = ({ y, accent }) => (
  <g>
    <text x={95} y={y + 6} textAnchor="end" fill={P.textPrimary} fontSize={17} fontWeight="bold" fontFamily="sans-serif">
      H₃C
    </text>
    <line x1={103} y1={y} x2={147} y2={y} stroke={P.textPrimary} strokeWidth={2} />
    <text x={155} y={y + 6} fill={P.textPrimary} fontSize={17} fontWeight="bold" fontFamily="sans-serif">
      H
    </text>
    {/* Связующая электронная пара, выделенная овалом; цвет точек = цвет стрелок переноса */}
    <ellipse cx={125} cy={y} rx={11} ry={7} fill="none" stroke={accent} strokeWidth={1.4} />
    <circle cx={121} cy={y} r={1.8} fill={accent} />
    <circle cx={129} cy={y} r={1.8} fill={accent} />
  </g>
);

/** Стрелка химического превращения с условием */
const ReactionArrow: React.FC<{ y: number; condition?: string; color?: string }> = ({ y, condition, color }) => (
  <g>
    <line x1={205} y1={y} x2={262} y2={y} stroke={color ?? P.textPrimary} strokeWidth={1.6} />
    <path d={`M 255 ${y - 5} L 264 ${y} L 255 ${y + 5}`} fill="none" stroke={color ?? P.textPrimary} strokeWidth={1.6} />
    {condition && (
      <text x={234} y={y - 9} textAnchor="middle" fill={color ?? P.textMuted} fontSize={10} fontWeight="bold" fontFamily="sans-serif">
        {condition}
      </text>
    )}
  </g>
);

/** Схема: два типа разрыва ковалентной связи на примере метана (три уравнения) */
const BondCleavageDiagram: React.FC = () => (
  <svg viewBox="0 0 760 300" className="w-full h-auto" role="img" aria-label="Два типа разрыва ковалентной связи">
    {/* Ряд I: гомолитический разрыв */}
    <text x={20} y={28} fill={C_HOMOLYSIS} fontSize={12} fontWeight="bold" fontFamily="sans-serif">
      I. Гомолитический разрыв: пара делится поровну
    </text>
    <MethaneMolecule y={62} accent={C_HOMOLYSIS} />
    {/* Фишхуки: каждый электрон — к своему атому; остриё у атома-приёмника */}
    <SvgElectronArrow x1={120} y1={56} x2={98} y2={48} bend={4} half color={C_HOMOLYSIS} />
    <SvgElectronArrow x1={130} y1={56} x2={152} y2={48} bend={-4} half color={C_HOMOLYSIS} />
    <ReactionArrow y={62} condition="hν / t°" color={C_HOMOLYSIS} />
    <text x={285} y={68} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      H₃C<tspan fill={C_HOMOLYSIS}>•</tspan>
    </text>
    <text x={345} y={68} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      +
    </text>
    <text x={370} y={68} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      H<tspan fill={C_HOMOLYSIS}>•</tspan>
    </text>
    <text x={285} y={88} fill={P.textMuted} fontSize={10} fontFamily="sans-serif">
      метил-радикал
    </text>
    <text x={370} y={88} fill={P.textMuted} fontSize={10} fontFamily="sans-serif">
      атомарный водород
    </text>
    <text x={560} y={68} fill={C_HOMOLYSIS} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
      продукты — радикалы:
    </text>
    <text x={560} y={84} fill={C_HOMOLYSIS} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
      у каждого атома по одному электрону (•)
    </text>

    {/* Ряд II: гетеролитический разрыв, пара к водороду */}
    <text x={20} y={128} fill={C_HETERO_II} fontSize={12} fontWeight="bold" fontFamily="sans-serif">
      II. Гетеролитический разрыв: пара уходит к водороду
    </text>
    <MethaneMolecule y={162} accent={C_HETERO_II} />
    <SvgElectronArrow x1={132} y1={158} x2={153} y2={152} bend={-5} color={C_HETERO_II} />
    <ReactionArrow y={162} color={C_HETERO_II} />
    <text x={285} y={168} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      H₃C⁺
    </text>
    <text x={345} y={168} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      +
    </text>
    <text x={370} y={168} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      <tspan fill={C_HETERO_II}>:</tspan>H⁻
    </text>
    <text x={285} y={188} fill={P.textMuted} fontSize={10} fontFamily="sans-serif">
      метил-катион
    </text>
    <text x={370} y={188} fill={P.textMuted} fontSize={10} fontFamily="sans-serif">
      гидрид-ион
    </text>
    <text x={560} y={168} fill={C_HETERO_II} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
      оба электрона пары — у водорода:
    </text>
    <text x={560} y={184} fill={C_HETERO_II} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
      анион с парой (:), катион без неё
    </text>

    {/* Ряд III: гетеролитический разрыв, пара к углероду */}
    <text x={20} y={228} fill={C_HETERO_III} fontSize={12} fontWeight="bold" fontFamily="sans-serif">
      III. Гетеролитический разрыв: пара уходит к углероду
    </text>
    <MethaneMolecule y={262} accent={C_HETERO_III} />
    <SvgElectronArrow x1={118} y1={258} x2={97} y2={252} bend={5} color={C_HETERO_III} />
    <ReactionArrow y={262} color={C_HETERO_III} />
    <text x={285} y={268} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      H₃C<tspan fill={C_HETERO_III}>:</tspan>⁻
    </text>
    <text x={352} y={268} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      +
    </text>
    <text x={377} y={268} fill={P.textPrimary} fontSize={16} fontWeight="bold" fontFamily="sans-serif">
      H⁺
    </text>
    <text x={285} y={288} fill={P.textMuted} fontSize={10} fontFamily="sans-serif">
      метил-анион
    </text>
    <text x={377} y={288} fill={P.textMuted} fontSize={10} fontFamily="sans-serif">
      протон
    </text>
    <text x={560} y={268} fill={C_HETERO_III} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
      оба электрона пары — у углерода:
    </text>
    <text x={560} y={284} fill={C_HETERO_III} fontSize={11} fontWeight="bold" fontFamily="sans-serif">
      анион H₃C:⁻ и протон H⁺
    </text>
  </svg>
);

/** Светлая панель «Два типа разрыва ковалентной связи» (секция 5.8) */
const BondCleavagePanel: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`p-6 bg-slate-50/70 rounded-2xl border border-slate-200 shadow-sm space-y-4 font-body ${className ?? ''}`}>
    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
      <h4 className="font-bold text-slate-900 text-sm sm:text-base">Два типа разрыва ковалентной связи</h4>
      <span className="text-xs text-slate-500">Механизмы: радикальный и ионный</span>
    </div>

    <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-4 overflow-x-auto">
      <div className="min-w-[680px]">
        <BondCleavageDiagram />
      </div>
    </div>

    <p className="text-xs text-slate-500 leading-relaxed">
      Стрелка показывает перенос одного электрона, фигурная стрелка с полной
      головкой — перенос электронной пары; овалом выделена связующая пара электронов, остриё стрелки указывает
      атом, к которому переходят электроны. Цвет точек в овале, стрелок и электронов у продуктов одинаков —
      так видно, куда именно ушла пара.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
        <span className="font-bold text-slate-900">Свободный радикал</span> — частица с неспаренным электроном (Cl•, H₃C•); высокореакционна.
      </div>
      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
        <span className="font-bold" style={{ color: C_HOMOLYSIS }}>Условия гомолиза</span> — свет (hν), высокая температура, газовая фаза, неполярные среды.
      </div>
      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
        <span className="font-bold" style={{ color: C_HETERO_II }}>Условия гетеролиза</span> — полярные растворители и растворы электролитов.
      </div>
    </div>
  </div>
);

export const ReactionClassification2DRenders: React.FC<ReactionClassification2DProps> = ({ type, className }) => {
  switch (type) {
    case 'bond-cleavage':
      return <BondCleavagePanel className={className} />;
  }
};

export default ReactionClassification2DRenders;
