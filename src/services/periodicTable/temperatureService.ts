import type { ChemicalElement, MatterState } from '../../types/periodicTable';

/**
 * Определяет фазовое состояние элемента при заданной температуре в Кельвинах.
 * 
 * @param element Химический элемент
 * @param tempKelvin Температура в Кельвинах (по умолчанию 298.15 K = 25 °C)
 */
export function getElementPhaseAtTemp(element: ChemicalElement, tempKelvin: number): MatterState {
  if (element.phaseAtSTP === 'synthetic') {
    return 'synthetic';
  }

  const melt = element.meltingPoint;
  const boil = element.boilingPoint;

  if (melt === null && boil === null) {
    return element.phaseAtSTP;
  }

  if (melt !== null && tempKelvin < melt) {
    return 'solid';
  }

  if (boil !== null && tempKelvin > boil) {
    return 'gas';
  }

  if (melt !== null && boil !== null && tempKelvin >= melt && tempKelvin <= boil) {
    return 'liquid';
  }

  if (melt !== null && tempKelvin >= melt && boil === null) {
    return 'liquid';
  }

  return element.phaseAtSTP;
}

export function celsiusToKelvin(celsius: number): number {
  return celsius + 273.15;
}

export function kelvinToCelsius(kelvin: number): number {
  return Math.round((kelvin - 273.15) * 10) / 10;
}
