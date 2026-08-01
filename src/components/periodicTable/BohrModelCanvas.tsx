import React, { useEffect, useRef } from 'react';
import type { ChemicalElement } from '../../types/periodicTable';
import { CATEGORIES } from '../../data/periodicTable/categoriesData';

interface BohrModelCanvasProps {
  element: ChemicalElement;
}

export const BohrModelCanvas: React.FC<BohrModelCanvasProps> = ({ element }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const categoryInfo = CATEGORIES[element.category] || CATEGORIES.unknown;
    const electronColor = categoryInfo.color;
    const shells = element.shells.length > 0 ? element.shells : [1];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(centerX, centerY) - 20;

      // 1. Рисуем ядро атома
      const nucleusRadius = 24;
      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);
      ctx.fillStyle = categoryInfo.color;
      ctx.shadowColor = categoryInfo.glowColor;
      ctx.shadowBlur = 15;
      ctx.fill();

      // Текст внутри ядра (Символ и №)
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(element.symbol, centerX, centerY - 2);

      ctx.font = '9px JetBrains Mono, monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillText(`Z=${element.number}`, centerX, centerY + 10);

      // 2. Рисуем электронные орбиты
      const stepRadius = (maxRadius - nucleusRadius - 10) / shells.length;

      shells.forEach((electronCount, shellIndex) => {
        const radius = nucleusRadius + 15 + shellIndex * stepRadius;

        // Линия орбиты
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Рисуем электроны на этой орбите
        const speedMultiplier = (shellIndex % 2 === 0 ? 1 : -1) * (1 / (shellIndex + 1));
        const shellAngleOffset = angle * speedMultiplier;

        for (let i = 0; i < electronCount; i++) {
          const electronAngle = shellAngleOffset + (i * 2 * Math.PI) / electronCount;
          const ex = centerX + radius * Math.cos(electronAngle);
          const ey = centerY + radius * Math.sin(electronAngle);

          // Электрон
          ctx.beginPath();
          ctx.arc(ex, ey, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = electronColor;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      angle += 0.015;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [element]);

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-slate-950/60 rounded-2xl border border-slate-800/80">
      <canvas
        ref={canvasRef}
        width={260}
        height={260}
        className="w-[260px] h-[260px] max-w-full"
      />
      <div className="mt-2 text-[11px] font-mono text-slate-400 text-center">
        <span>Боровская модель атома ({element.shells.join(' - ')} e⁻)</span>
      </div>
    </div>
  );
};
