import React from 'react';

interface Render2DProps {
  type: 'rhombic-sulfur' | 'ozone' | 'h2so4' | 'so2';
  className?: string;
}

/**
 * Справочные векторные 2D-схемы пространственного строения соединений серы и кислорода
 * на 100% русском языке в едином стиле академической платформы S_Chem_Portal.
 */
export const SulfurOxygen2DRender: React.FC<Render2DProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'rhombic-sulfur':
      return (
        <svg viewBox="0 0 750 400" className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-sulfur-s8" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-sulfur-s8)" opacity="0.4" />

          {/* Header Title */}
          <text x="375" y="36" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
            Ромбическая сера — Восьмичленный корончатый цикл S₈ (α-S)
          </text>

          {/* Crown S8 Diagram */}
          <g transform="translate(375, 200)">
            {/* Crown Bonds */}
            <line x1="-120" y1="-35" x2="-65" y2="-80" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="-65" y1="-80" x2="0" y2="-35" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="0" y1="-35" x2="65" y2="-80" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="65" y1="-80" x2="120" y2="-35" stroke="#f59e0b" strokeWidth="3.5" />

            <line x1="120" y1="-35" x2="85" y2="55" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="85" y1="55" x2="0" y2="80" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="0" y1="80" x2="-85" y2="55" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="-85" y1="55" x2="-120" y2="-35" stroke="#f59e0b" strokeWidth="3.5" />

            {/* Angle Arc Indicator */}
            <path d="M -90 -60 A 25 25 0 0 1 -40 -60" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="-65" y="-95" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Валентный угол S-S-S = 108°
            </text>

            {/* Bond Length Dimension Line */}
            <line x1="0" y1="-35" x2="65" y2="-80" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="40" y="-45" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              d(S-S) = 2.06 Å
            </text>

            {/* Sulfur Atoms (Yellow / Amber Circles) */}
            <circle cx="-120" cy="-35" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="-120" y="-30" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="-65" cy="-80" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="-65" y="-75" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="0" cy="-35" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="0" y="-30" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="65" cy="-80" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="65" y="-75" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="120" cy="-35" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="120" y="-30" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="85" cy="55" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="85" y="60" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="0" cy="80" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="0" y="85" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="-85" cy="55" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="-85" y="60" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">S</text>
          </g>

          {/* Reference Specification Legend */}
          <g transform="translate(40, 335)">
            <rect x="0" y="0" width="670" height="50" fill="#0f172a" rx="8" stroke="#334155" />
            <circle cx="25" cy="25" r="7" fill="#fbbf24" />
            <text x="42" y="29" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Атомы серы в sp³-гибридизации (цикл S₈)
            </text>
            <text x="320" y="29" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
              • Длина связи S-S: 2.06 Å • Угол S-S-S: 108° • Корончатая пространственная форма
            </text>
          </g>
        </svg>
      );

    case 'ozone':
      return (
        <svg viewBox="0 0 750 400" className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-ozone" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-ozone)" opacity="0.4" />

          {/* Header Title */}
          <text x="375" y="36" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
            Молекула озона (O₃) — Изогнутая структура с делокализованной π-связью
          </text>

          <g transform="translate(375, 190)">
            {/* Double / Resonance Bonds */}
            <line x1="0" y1="-50" x2="-95" y2="45" stroke="#38bdf8" strokeWidth="4.5" />
            <line x1="-6" y1="-42" x2="-101" y2="53" stroke="#38bdf8" strokeWidth="3" opacity="0.7" />
            
            <line x1="0" y1="-50" x2="95" y2="45" stroke="#38bdf8" strokeWidth="3.5" strokeDasharray="7 4" />

            {/* Angle Arc Indicator */}
            <path d="M -38 -12 A 40 40 0 0 0 38 -12" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="0" y="15" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Валентный угол O-O-O = 116.8°
            </text>

            {/* Central Oxygen Atom */}
            <circle cx="0" cy="-50" r="18" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
            <text x="0" y="-45" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="extrabold" fontFamily="sans-serif">O</text>
            <text x="22" y="-60" fill="#f43f5e" fontSize="12" fontWeight="bold" fontFamily="sans-serif">+</text>

            {/* Terminal Oxygens */}
            <circle cx="-95" cy="45" r="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="-95" y="50" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="95" cy="45" r="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="95" y="50" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">O</text>
            <text x="114" y="35" fill="#f43f5e" fontSize="12" fontWeight="bold" fontFamily="sans-serif">-</text>
          </g>

          {/* Reference Specification Legend */}
          <g transform="translate(40, 335)">
            <rect x="0" y="0" width="670" height="50" fill="#0f172a" rx="8" stroke="#334155" />
            <circle cx="25" cy="25" r="7" fill="#38bdf8" />
            <text x="42" y="29" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Центральный атом кислорода в sp²-гибридизации
            </text>
            <text x="360" y="29" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
              • Длина связи O-O: 1.278 Å • Делокализованная 3-центровая 4e⁻ π-связь
            </text>
          </g>
        </svg>
      );

    case 'h2so4':
      return (
        <svg viewBox="0 0 750 400" className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-h2so4" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-h2so4)" opacity="0.4" />

          {/* Header Title */}
          <text x="375" y="36" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
            Серная кислота (H₂SO₄) — Тетраэдрическая структура с sp³-гибридизацией S(+6)
          </text>

          <g transform="translate(375, 190)">
            {/* Double S=O Bonds */}
            <line x1="0" y1="0" x2="0" y2="-75" stroke="#f59e0b" strokeWidth="4.5" />
            <line x1="8" y1="0" x2="8" y2="-75" stroke="#f59e0b" strokeWidth="3" />

            <line x1="0" y1="0" x2="0" y2="75" stroke="#f59e0b" strokeWidth="4.5" />
            <line x1="-8" y1="0" x2="-8" y2="75" stroke="#f59e0b" strokeWidth="3" />

            {/* Single S-OH Bonds */}
            <line x1="0" y1="0" x2="-85" y2="0" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="-85" y1="0" x2="-130" y2="30" stroke="#e2e8f0" strokeWidth="2.5" />

            <line x1="0" y1="0" x2="85" y2="0" stroke="#f59e0b" strokeWidth="3.5" />
            <line x1="85" y1="0" x2="130" y2="-30" stroke="#e2e8f0" strokeWidth="2.5" />

            {/* Central Sulfur S */}
            <circle cx="0" cy="0" r="19" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="0" y="5" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            {/* Oxygen Atoms */}
            <circle cx="0" cy="-75" r="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="0" y="-70" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="0" cy="75" r="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="0" y="80" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="-85" cy="0" r="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="-85" y="5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="85" cy="0" r="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="85" y="5" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            {/* Hydrogens */}
            <circle cx="-130" cy="30" r="10" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
            <text x="-130" y="34" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">H</text>

            <circle cx="130" cy="-30" r="10" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
            <text x="130" y="-26" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold" fontFamily="sans-serif">H</text>
          </g>

          {/* Reference Specification Legend */}
          <g transform="translate(40, 335)">
            <rect x="0" y="0" width="670" height="50" fill="#0f172a" rx="8" stroke="#334155" />
            <circle cx="25" cy="25" r="7" fill="#fbbf24" />
            <text x="42" y="29" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Центральный атом S(+6) в sp³-гибридизации
            </text>
            <text x="330" y="29" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
              • 2 двойные связи S=O (dπ-pπ) • 2 гидроксильные группы -OH • Тетраэдрический угол 109.5°
            </text>
          </g>
        </svg>
      );

    case 'so2':
      return (
        <svg viewBox="0 0 750 400" className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-so2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-so2)" opacity="0.4" />

          {/* Header Title */}
          <text x="375" y="36" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
            Диоксид серы (SO₂) — Уголковая структура с неподеленной электронной парой
          </text>

          <g transform="translate(375, 190)">
            {/* Double S=O Bonds */}
            <line x1="0" y1="-35" x2="-90" y2="45" stroke="#f59e0b" strokeWidth="4.5" />
            <line x1="-7" y1="-27" x2="-97" y2="53" stroke="#f59e0b" strokeWidth="3" opacity="0.8" />

            <line x1="0" y1="-35" x2="90" y2="45" stroke="#f59e0b" strokeWidth="4.5" />
            <line x1="7" y1="-27" x2="97" y2="53" stroke="#f59e0b" strokeWidth="3" opacity="0.8" />

            {/* Angle Arc Indicator */}
            <path d="M -35 3 A 40 40 0 0 0 35 3" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="0" y="26" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Валентный угол O-S-O = 119.5°
            </text>

            {/* Lone Pair on S */}
            <ellipse cx="0" cy="-70" rx="12" ry="7" fill="#38bdf8" opacity="0.5" />
            <circle cx="-5" cy="-70" r="3" fill="#f8fafc" />
            <circle cx="5" cy="-70" r="3" fill="#f8fafc" />

            {/* Central Sulfur S */}
            <circle cx="0" cy="-35" r="18" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
            <text x="0" y="-30" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            {/* Terminal Oxygens */}
            <circle cx="-90" cy="45" r="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="-90" y="50" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="90" cy="45" r="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="90" y="50" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="extrabold" fontFamily="sans-serif">O</text>
          </g>

          {/* Reference Specification Legend */}
          <g transform="translate(40, 335)">
            <rect x="0" y="0" width="670" height="50" fill="#0f172a" rx="8" stroke="#334155" />
            <circle cx="25" cy="25" r="7" fill="#fbbf24" />
            <text x="42" y="29" fill="#f8fafc" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
              Центральный атом S(+4) в sp²-гибридизации
            </text>
            <text x="330" y="29" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">
              • 1 неподеленная e⁻ пара • Угол O-S-O равен 119.5° • Резонансная двойная связь S=O
            </text>
          </g>
        </svg>
      );

    default:
      return null;
  }
};
