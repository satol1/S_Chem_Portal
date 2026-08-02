import React from 'react';

interface Render2DProps {
  type: 'rhombic-sulfur' | 'ozone' | 'h2so4' | 'so2';
  className?: string;
  isModal?: boolean;
}

/**
 * Векторные 2D-схемы пространственной структуры соединений серы и кислорода
 * с безупречным выравниванием текста и проверенной русской научной терминологией.
 */
export const SulfurOxygen2DRender: React.FC<Render2DProps> = ({ type, className = '', isModal = false }) => {
  const viewBox = isModal ? "0 0 750 420" : "0 0 300 200";

  switch (type) {
    case 'rhombic-sulfur':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-sulfur-s8" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-sulfur-s8)" opacity="0.4" />

          {/* Modal Header */}
          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Ромбическая сера — Восьмичленный корончатый цикл S₈ (α-S)
            </text>
          )}

          {/* Crown S8 Diagram */}
          <g transform={isModal ? "translate(375, 230)" : "translate(150, 105)"}>
            {/* Crown Bonds */}
            <line x1="-90" y1="-30" x2="-50" y2="-60" stroke="#f59e0b" strokeWidth="3" />
            <line x1="-50" y1="-60" x2="0" y2="-30" stroke="#f59e0b" strokeWidth="3" />
            <line x1="0" y1="-30" x2="50" y2="-60" stroke="#f59e0b" strokeWidth="3" />
            <line x1="50" y1="-60" x2="90" y2="-30" stroke="#f59e0b" strokeWidth="3" />

            <line x1="90" y1="-30" x2="65" y2="40" stroke="#f59e0b" strokeWidth="3" />
            <line x1="65" y1="40" x2="0" y2="60" stroke="#f59e0b" strokeWidth="3" />
            <line x1="0" y1="60" x2="-65" y2="40" stroke="#f59e0b" strokeWidth="3" />
            <line x1="-65" y1="40" x2="-90" y2="-30" stroke="#f59e0b" strokeWidth="3" />

            {/* Angle Indicator */}
            <path d="M -68 -47 A 20 20 0 0 1 -32 -47" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="-50" y="-72" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              108°
            </text>

            {/* Sulfur Atoms (Yellow/Amber) */}
            <circle cx="-90" cy="-30" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="-90" y="-26" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="-50" cy="-60" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="-50" y="-56" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="0" cy="-30" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="0" y="-26" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="50" cy="-60" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="50" y="-56" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="90" cy="-30" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="90" y="-26" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="65" cy="40" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="65" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="0" cy="60" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="0" y="64" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            <circle cx="-65" cy="40" r="13" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="-65" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">S</text>
          </g>

          {/* Key Legend Labels for Modal */}
          {isModal ? (
            <g transform="translate(40, 340)">
              <rect x="0" y="0" width="670" height="60" fill="#0f172a" rx="8" stroke="#334155" />
              <circle cx="30" cy="30" r="8" fill="#fbbf24" />
              <text x="50" y="34" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Атомы серы в sp³-гибридизации (цикл S₈)
              </text>
              <text x="320" y="34" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">
                • Длина связи S-S: 2.06 Å • Угол связи S-S-S: 108° • Форма: Корончатая (crown)
              </text>
            </g>
          ) : (
            <text x="150" y="185" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              Корончатый цикл S₈ (Ромбическая сера α-S)
            </text>
          )}
        </svg>
      );

    case 'ozone':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-ozone" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-ozone)" opacity="0.4" />

          {/* Modal Header */}
          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Молекула озона (O₃) — Изогнутая структура с делокализованной π-связью
            </text>
          )}

          <g transform={isModal ? "translate(375, 210)" : "translate(150, 95)"}>
            {/* Bonds */}
            <line x1="0" y1="-45" x2="-75" y2="35" stroke="#38bdf8" strokeWidth="4" />
            <line x1="-5" y1="-38" x2="-80" y2="42" stroke="#38bdf8" strokeWidth="2.5" opacity="0.7" />
            
            <line x1="0" y1="-45" x2="75" y2="35" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 3" />

            {/* Angle Arc */}
            <path d="M -30 -13 A 35 35 0 0 0 30 -13" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="0" y="10" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              116.8°
            </text>

            {/* Atoms */}
            <circle cx="0" cy="-45" r="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="0" y="-40" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">O</text>
            <text x="18" y="-55" fill="#f43f5e" fontSize="11" fontWeight="bold" fontFamily="sans-serif">+</text>

            <circle cx="-75" cy="35" r="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="-75" y="39" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="75" cy="35" r="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="75" y="39" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">O</text>
            <text x="92" y="25" fill="#f43f5e" fontSize="11" fontWeight="bold" fontFamily="sans-serif">-</text>
          </g>

          {/* Key Legend Labels */}
          {isModal ? (
            <g transform="translate(40, 340)">
              <rect x="0" y="0" width="670" height="60" fill="#0f172a" rx="8" stroke="#334155" />
              <circle cx="30" cy="30" r="8" fill="#38bdf8" />
              <text x="50" y="34" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Центральный атом кислорода O в sp²-гибридизации
              </text>
              <text x="360" y="34" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">
                • Длина связи O-O: 1.278 Å • Делокализованная 3-центровая 4-электронная π-система
              </text>
            </g>
          ) : (
            <text x="150" y="185" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              Озон O₃ (Изогнутая структура, 116.8°)
            </text>
          )}
        </svg>
      );

    case 'h2so4':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-h2so4" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-h2so4)" opacity="0.4" />

          {/* Modal Header */}
          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Серная кислота (H₂SO₄) — Тетраэдрическая структура с sp³-гибридизацией S(+6)
            </text>
          )}

          <g transform={isModal ? "translate(375, 210)" : "translate(150, 95)"}>
            {/* Double S=O Bonds */}
            <line x1="0" y1="0" x2="0" y2="-65" stroke="#f59e0b" strokeWidth="4" />
            <line x1="7" y1="0" x2="7" y2="-65" stroke="#f59e0b" strokeWidth="2.5" />

            <line x1="0" y1="0" x2="0" y2="65" stroke="#f59e0b" strokeWidth="4" />
            <line x1="-7" y1="0" x2="-7" y2="65" stroke="#f59e0b" strokeWidth="2.5" />

            {/* Single S-OH Bonds */}
            <line x1="0" y1="0" x2="-75" y2="0" stroke="#f59e0b" strokeWidth="3" />
            <line x1="-75" y1="0" x2="-115" y2="25" stroke="#e2e8f0" strokeWidth="2" />

            <line x1="0" y1="0" x2="75" y2="0" stroke="#f59e0b" strokeWidth="3" />
            <line x1="75" y1="0" x2="115" y2="-25" stroke="#e2e8f0" strokeWidth="2" />

            {/* Central Sulfur S */}
            <circle cx="0" cy="0" r="17" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="0" y="4" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            {/* Oxygen Atoms */}
            <circle cx="0" cy="-65" r="13" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="0" y="-61" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="0" cy="65" r="13" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="0" y="69" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="-75" cy="0" r="13" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="-75" y="4" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="75" cy="0" r="13" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="75" y="4" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            {/* Hydrogens */}
            <circle cx="-115" cy="25" r="9" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
            <text x="-115" y="28" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold" fontFamily="sans-serif">H</text>

            <circle cx="115" cy="-25" r="9" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" />
            <text x="115" y="-22" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold" fontFamily="sans-serif">H</text>
          </g>

          {/* Key Legend Labels */}
          {isModal ? (
            <g transform="translate(40, 340)">
              <rect x="0" y="0" width="670" height="60" fill="#0f172a" rx="8" stroke="#334155" />
              <circle cx="30" cy="30" r="8" fill="#fbbf24" />
              <text x="50" y="34" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Центральный атом S(+6) в sp³-гибридизации
              </text>
              <text x="330" y="34" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">
                • 2 двойные связи S=O (dπ-pπ) • 2 гидроксильные группы -OH • Идеальный тетраэдр
              </text>
            </g>
          ) : (
            <text x="150" y="185" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              Серная кислота H₂SO₄ (Тетраэдр S(+6))
            </text>
          )}
        </svg>
      );

    case 'so2':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-so2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-so2)" opacity="0.4" />

          {/* Modal Header */}
          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Диоксид серы (SO₂) — Уголковая структура с неподеленной электронной парой
            </text>
          )}

          <g transform={isModal ? "translate(375, 210)" : "translate(150, 95)"}>
            {/* Double S=O Bonds */}
            <line x1="0" y1="-30" x2="-75" y2="40" stroke="#f59e0b" strokeWidth="4" />
            <line x1="-6" y1="-23" x2="-81" y2="47" stroke="#f59e0b" strokeWidth="2.5" opacity="0.8" />

            <line x1="0" y1="-30" x2="75" y2="40" stroke="#f59e0b" strokeWidth="4" />
            <line x1="6" y1="-23" x2="81" y2="47" stroke="#f59e0b" strokeWidth="2.5" opacity="0.8" />

            {/* Angle Indicator */}
            <path d="M -30 2 A 35 35 0 0 0 30 2" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="0" y="24" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              119.5°
            </text>

            {/* Lone Pair on S */}
            <ellipse cx="0" cy="-62" rx="10" ry="6" fill="#38bdf8" opacity="0.5" />
            <circle cx="-4" cy="-62" r="2.5" fill="#f8fafc" />
            <circle cx="4" cy="-62" r="2.5" fill="#f8fafc" />

            {/* Central Sulfur S */}
            <circle cx="0" cy="-30" r="16" fill="#fbbf24" stroke="#d97706" strokeWidth="2.5" />
            <text x="0" y="-26" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="extrabold" fontFamily="sans-serif">S</text>

            {/* Oxygens */}
            <circle cx="-75" cy="40" r="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="-75" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">O</text>

            <circle cx="75" cy="40" r="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <text x="75" y="44" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">O</text>
          </g>

          {/* Key Legend Labels */}
          {isModal ? (
            <g transform="translate(40, 340)">
              <rect x="0" y="0" width="670" height="60" fill="#0f172a" rx="8" stroke="#334155" />
              <circle cx="30" cy="30" r="8" fill="#fbbf24" />
              <text x="50" y="34" fill="#f8fafc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Центральный атом S(+4) в sp²-гибридизации
              </text>
              <text x="330" y="34" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">
                • 1 неподеленная e⁻ пара • Угол O-S-O равен 119.5° • Резонансная двойная связь S=O
              </text>
            </g>
          ) : (
            <text x="150" y="185" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">
              Диоксид серы SO₂ (Уголковая структура, 119.5°)
            </text>
          )}
        </svg>
      );

    default:
      return null;
  }
};
