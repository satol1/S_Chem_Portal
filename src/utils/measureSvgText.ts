// ═══════════════════════════════════════
// measureSvgText — точное измерение ширины текста фактическим шрифтом
// SVG-схем (sans-serif). Канвас-контекст даёт честную метрику кириллицы,
// в отличие от оценки «символы × коэффициент». Используется
// InfographicFigure (авторазмеры блоков) и ConceptFlow (контроль
// непопадания подписей связей на блоки).
// ═══════════════════════════════════════

let measureCtx: CanvasRenderingContext2D | null | undefined;

export function measureSvgTextWidth(text: string, fontSize: number, bold = false): number {
  if (measureCtx === undefined) {
    measureCtx = typeof document !== 'undefined' ? document.createElement('canvas').getContext('2d') : null;
  }
  if (!measureCtx) return text.length * fontSize * 0.68;
  measureCtx.font = `${bold ? 'bold ' : ''}${fontSize}px sans-serif`;
  return measureCtx.measureText(text).width;
}
