import React from 'react';

interface Render2DProps {
  type: 'diamond' | 'graphite' | 'fullerene' | 'silicon';
  className?: string;
  isModal?: boolean;
}

/**
 * Векторные 2D-схемы кристаллической структуры аллотропных модификаций
 * с безупречным выравниванием текста и проверенной русской научной терминологией.
 */
export const CarbonSilicon2DRender: React.FC<Render2DProps> = ({ type, className = '', isModal = false }) => {
  const viewBox = isModal ? "0 0 750 420" : "0 0 300 200";

  switch (type) {
    case 'diamond':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          
          <defs>
            <pattern id="grid-diamond-v2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-diamond-v2)" opacity="0.4" />

          {/* Modal Header */}
          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Алмаз — Тетраэдрическая атомная кристаллическая решетка (sp³)
            </text>
          )}

          {/* Left Diagram Box */}
          <g transform={isModal ? "translate(220, 220)" : "translate(150, 100)"}>
            {/* Bonds */}
            <line x1="0" y1="0" x2="-65" y2="65" stroke="#f59e0b" strokeWidth="3" />
            <line x1="0" y1="0" x2="75" y2="55" stroke="#f59e0b" strokeWidth="3" />
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#f59e0b" strokeWidth="3" />
            <line x1="0" y1="0" x2="-30" y2="-25" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="4 3" />

            {/* Extension lines */}
            <line x1="-65" y1="65" x2="-95" y2="95" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
            <line x1="75" y1="55" x2="110" y2="80" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
            <line x1="0" y1="-80" x2="0" y2="-110" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />

            {/* Angle Indicator */}
            <path d="M -22 22 A 30 30 0 0 0 28 20" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="3" y="42" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              109°28'
            </text>

            {/* Atoms */}
            <circle cx="0" cy="0" r="15" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" />
            <text x="0" y="4" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">C</text>

            <circle cx="-65" cy="65" r="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
            <circle cx="75" cy="55" r="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
            <circle cx="0" cy="-80" r="12" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
            <circle cx="-30" cy="-25" r="10" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
          </g>

          {/* Modal Right Side Specification Panel */}
          {isModal ? (
            <g transform="translate(460, 70)">
              <rect width="260" height="310" fill="#0f172a" rx="10" stroke="#334155" strokeWidth="1" />
              
              <text x="20" y="32" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Кристаллографические данные:
              </text>
              <line x1="20" y1="42" x2="240" y2="42" stroke="#1e293b" strokeWidth="1" />

              <text x="20" y="70" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#f59e0b">Тип решетки:</tspan> Атомная 3D-сеть
              </text>
              <text x="20" y="100" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#f59e0b">Гибридизация C:</tspan> sp³-тетраэдр
              </text>
              <text x="20" y="130" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Валентный угол:</tspan> 109°28'
              </text>
              <text x="20" y="160" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Длина связи C-C:</tspan> 1.54 Å (0.154 нм)
              </text>
              <text x="20" y="190" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Тип связи:</tspan> Прочные σ-связи
              </text>
              <text x="20" y="220" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Твердость по Моосу:</tspan> 10 (эталон)
              </text>
              <text x="20" y="250" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Проводимость:</tspan> Диэлектрик
              </text>
              <text x="20" y="280" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Показатель преломл.:</tspan> 2.42
              </text>
            </g>
          ) : (
            <text x="150" y="188" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              Алмаз: Тетраэдр C (sp³, 1.54 Å, 109°28')
            </text>
          )}
        </svg>
      );

    case 'graphite':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          <rect width="100%" height="100%" fill="url(#grid-diamond-v2)" opacity="0.4" />

          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Графит — Слоистая гексагональная кристаллическая решетка (sp²)
            </text>
          )}

          {/* Left Diagram */}
          <g transform={isModal ? "translate(220, 210)" : "translate(150, 100)"}>
            {/* Layer 1 (Top) */}
            <g transform="translate(0, -45)">
              <polygon points="-100,-22 -45,-38 45,-38 100,-22 45,-6 -45,-6" fill="#1e293b" fillOpacity="0.7" stroke="#38bdf8" strokeWidth="2" />
              <line x1="-45" y1="-38" x2="-45" y2="-6" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="45" y1="-38" x2="45" y2="-6" stroke="#38bdf8" strokeWidth="1.5" />

              <circle cx="-100" cy="-22" r="5" fill="#38bdf8" />
              <circle cx="-45" cy="-38" r="5" fill="#38bdf8" />
              <circle cx="45" cy="-38" r="5" fill="#38bdf8" />
              <circle cx="100" cy="-22" r="5" fill="#38bdf8" />
              <circle cx="45" cy="-6" r="5" fill="#38bdf8" />
              <circle cx="-45" cy="-6" r="5" fill="#38bdf8" />
            </g>

            {/* Van der Waals Forces */}
            <line x1="-100" y1="-67" x2="-100" y2="23" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="45" y1="-51" x2="45" y2="39" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="100" y1="-67" x2="100" y2="23" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Layer 2 (Bottom) */}
            <g transform="translate(0, 45)">
              <polygon points="-100,-22 -45,-38 45,-38 100,-22 45,-6 -45,-6" fill="#0f172a" fillOpacity="0.8" stroke="#94a3b8" strokeWidth="2" />
              <line x1="-45" y1="-38" x2="-45" y2="-6" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="45" y1="-38" x2="45" y2="-6" stroke="#94a3b8" strokeWidth="1.5" />

              <circle cx="-100" cy="-22" r="5" fill="#cbd5e1" />
              <circle cx="-45" cy="-38" r="5" fill="#cbd5e1" />
              <circle cx="45" cy="-38" r="5" fill="#cbd5e1" />
              <circle cx="100" cy="-22" r="5" fill="#cbd5e1" />
              <circle cx="45" cy="-6" r="5" fill="#cbd5e1" />
              <circle cx="-45" cy="-6" r="5" fill="#cbd5e1" />
            </g>
          </g>

          {/* Modal Right Side Specification Panel */}
          {isModal ? (
            <g transform="translate(460, 70)">
              <rect width="260" height="310" fill="#0f172a" rx="10" stroke="#334155" strokeWidth="1" />
              
              <text x="20" y="32" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Кристаллографические данные:
              </text>
              <line x1="20" y1="42" x2="240" y2="42" stroke="#1e293b" strokeWidth="1" />

              <text x="20" y="70" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Тип решетки:</tspan> Слоистая гексагональная
              </text>
              <text x="20" y="100" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Гибридизация C:</tspan> sp²-слой (графен)
              </text>
              <text x="20" y="130" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Связи C-C в слое:</tspan> 1.42 Å (0.142 нм)
              </text>
              <text x="20" y="160" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Межслойный зазор:</tspan> 3.35 Å (0.335 нм)
              </text>
              <text x="20" y="190" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#f59e0b">Межслойные связи:</tspan> Ван-дер-Ваальсовы
              </text>
              <text x="20" y="220" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Электроны:</tspan> Делокализованная π-система
              </text>
              <text x="20" y="250" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Проводимость:</tspan> Электропроводник
              </text>
              <text x="20" y="280" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Свойства:</tspan> Чешуйчатость, мягкость
              </text>
            </g>
          ) : (
            <text x="150" y="188" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              Графит: Графеновые слои (sp², 1.42 Å, межслойное 3.35 Å)
            </text>
          )}
        </svg>
      );

    case 'fullerene':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          <rect width="100%" height="100%" fill="url(#grid-diamond-v2)" opacity="0.4" />

          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Фуллерен C₆₀ — Сферический молекулярный кластер (усеченный икосаэдр)
            </text>
          )}

          {/* Left Diagram */}
          <g transform={isModal ? "translate(220, 210) scale(1.1)" : "translate(150, 100) scale(0.85)"}>
            <circle cx="0" cy="0" r="70" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Central Pentagon */}
            <polygon points="0,-28 26,-9 16,22 -16,22 -26,-9" fill="#1e293b" stroke="#fbbf24" strokeWidth="2.5" />

            {/* Surrounding Hexagons */}
            <polyline points="0,-28 0,-56 -36,-48 -26,-9" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <polyline points="0,-28 0,-56 36,-48 26,-9" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <polyline points="26,-9 56,-16 52,16 16,22" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <polyline points="16,22 32,52 -6,58 -16,22" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <polyline points="-16,22 -32,52 6,58 16,22" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <polyline points="-26,-9 -56,-16 -52,16 -16,22" fill="none" stroke="#38bdf8" strokeWidth="2" />

            {/* Nodes */}
            <circle cx="0" cy="-28" r="4.5" fill="#fbbf24" />
            <circle cx="26" cy="-9" r="4.5" fill="#fbbf24" />
            <circle cx="16" cy="22" r="4.5" fill="#fbbf24" />
            <circle cx="-16" cy="22" r="4.5" fill="#fbbf24" />
            <circle cx="-26" cy="-9" r="4.5" fill="#fbbf24" />

            <circle cx="0" cy="-56" r="4" fill="#38bdf8" />
            <circle cx="36" cy="-48" r="4" fill="#38bdf8" />
            <circle cx="56" cy="-16" r="4" fill="#38bdf8" />
            <circle cx="52" cy="16" r="4" fill="#38bdf8" />
            <circle cx="32" cy="52" r="4" fill="#38bdf8" />
            <circle cx="-32" cy="52" r="4" fill="#38bdf8" />
          </g>

          {/* Modal Right Side Specification Panel */}
          {isModal ? (
            <g transform="translate(460, 70)">
              <rect width="260" height="310" fill="#0f172a" rx="10" stroke="#334155" strokeWidth="1" />
              
              <text x="20" y="32" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Молекулярные данные C₆₀:
              </text>
              <line x1="20" y1="42" x2="240" y2="42" stroke="#1e293b" strokeWidth="1" />

              <text x="20" y="70" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Тип решетки:</tspan> Молекулярная
              </text>
              <text x="20" y="100" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Форма:</tspan> Усеченный икосаэдр
              </text>
              <text x="20" y="130" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Состав гибридов:</tspan> 12 пентагонов
              </text>
              <text x="20" y="160" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Шестиугольники:</tspan> 20 гексагонов
              </text>
              <text x="20" y="190" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#f59e0b">Диаметр молекулы:</tspan> ≈ 7.1 Å (0.71 нм)
              </text>
              <text x="20" y="220" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Гибридизация C:</tspan> Искривленная sp²
              </text>
              <text x="20" y="250" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Растворимость:</tspan> В неполярных орг. р-рах
              </text>
              <text x="20" y="280" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Вид вещества:</tspan> Темные кристаллы
              </text>
            </g>
          ) : (
            <text x="150" y="188" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              Фуллерен C₆₀: Замкнутый сферический кластер (7.1 Å)
            </text>
          )}
        </svg>
      );

    case 'silicon':
      return (
        <svg viewBox={viewBox} className={`w-full h-full text-slate-100 ${className}`}>
          <rect width="100%" height="100%" fill="#020617" rx="12" />
          <rect width="100%" height="100%" fill="url(#grid-diamond-v2)" opacity="0.4" />

          {isModal && (
            <text x="375" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
              Кристаллический Кремний — Кубическая решетка типа алмаза (Si)
            </text>
          )}

          {/* Left Diagram */}
          <g transform={isModal ? "translate(220, 220)" : "translate(150, 100)"}>
            {/* Wireframe Box */}
            <rect x="-60" y="-60" width="120" height="120" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M -60 -60 L -30 -85 L 90 -85 L 60 -60 M 90 -85 L 90 35 L 60 60 M 90 -85 L 90 35" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Bonds */}
            <line x1="0" y1="0" x2="-40" y2="40" stroke="#14b8a6" strokeWidth="3" />
            <line x1="0" y1="0" x2="50" y2="35" stroke="#14b8a6" strokeWidth="3" />
            <line x1="0" y1="0" x2="0" y2="-50" stroke="#14b8a6" strokeWidth="3" />
            <line x1="0" y1="0" x2="-22" y2="-18" stroke="#0d9488" strokeWidth="2" strokeDasharray="3 2" />

            {/* Silicon Nodes */}
            <circle cx="0" cy="0" r="15" fill="#2dd4bf" stroke="#0f766e" strokeWidth="2.5" />
            <text x="0" y="4" textAnchor="middle" fill="#042f2e" fontSize="11" fontWeight="extrabold" fontFamily="sans-serif">Si</text>

            <circle cx="-40" cy="40" r="11" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" />
            <circle cx="50" cy="35" r="11" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" />
            <circle cx="0" cy="-50" r="11" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" />
            <circle cx="-22" cy="-18" r="9" fill="#5eead4" stroke="#0f766e" strokeWidth="1.5" />
          </g>

          {/* Modal Right Side Specification Panel */}
          {isModal ? (
            <g transform="translate(460, 70)">
              <rect width="260" height="310" fill="#0f172a" rx="10" stroke="#334155" strokeWidth="1" />
              
              <text x="20" y="32" fill="#2dd4bf" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                Кристаллографические данные Si:
              </text>
              <line x1="20" y1="42" x2="240" y2="42" stroke="#1e293b" strokeWidth="1" />

              <text x="20" y="70" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#2dd4bf">Тип решетки:</tspan> Кубическая типа алмаза
              </text>
              <text x="20" y="100" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#2dd4bf">Гибридизация Si:</tspan> sp³-тетраэдр
              </text>
              <text x="20" y="130" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Длина связи Si-Si:</tspan> 2.35 Å (0.235 нм)
              </text>
              <text x="20" y="160" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#fbbf24">Запрещенная зона:</tspan> Eg = 1.12 эВ
              </text>
              <text x="20" y="190" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Электропроводность:</tspan> Полупроводник
              </text>
              <text x="20" y="220" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#38bdf8">Твердость по Моосу:</tspan> 7 (хрупкий)
              </text>
              <text x="20" y="250" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Внешний вид:</tspan> Тёмно-серые кристаллы
              </text>
              <text x="20" y="280" fill="#e2e8f0" fontSize="12" fontFamily="sans-serif">
                • <tspan fontWeight="bold" fill="#94a3b8">Применение:</tspan> Электроника, процессоры
              </text>
            </g>
          ) : (
            <text x="150" y="188" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              Кремний Si: Решетка типа алмаза (2.35 Å, E_g = 1.12 эВ)
            </text>
          )}
        </svg>
      );
  }
};
