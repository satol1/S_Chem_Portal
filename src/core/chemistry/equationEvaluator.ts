/**
 * Helper utilities for evaluating chemical equations, parsing coefficients,
 * and validating reactant/product matches.
 */

/**
 * Parses user input coefficient string to a number.
 * Empty string or invalid number defaults to 1.
 */
export const parseCoef = (val?: string): number => {
  if (!val || val.trim() === '') return 1;
  const num = parseInt(val.trim(), 10);
  return isNaN(num) ? 1 : num;
};

/**
 * Parses multiplier input (e.g., in electronic balance).
 * Empty string or invalid number defaults to 0.
 */
export const parseMultiplier = (val?: string): number => {
  if (!val || val.trim() === '') return 0;
  const num = parseInt(val.trim(), 10);
  return isNaN(num) ? 0 : num;
};

/**
 * Normalizes chemical formula strings by converting unicode subscript numbers to ASCII
 * and stripping unnecessary spaces.
 */
export const normalizeFormula = (formula: string): string => {
  if (!formula) return '';
  return formula
    .trim()
    .replaceAll('₀', '0')
    .replaceAll('₁', '1')
    .replaceAll('₂', '2')
    .replaceAll('₃', '3')
    .replaceAll('₄', '4')
    .replaceAll('₅', '5')
    .replaceAll('₆', '6')
    .replaceAll('₇', '7')
    .replaceAll('₈', '8')
    .replaceAll('₉', '9')
    .replaceAll(/\s+/g, '');
};

/**
 * Checks if a specific coefficient input matches the target formula's correct coefficient.
 */
export const isCoefCorrect = (
  formula: string,
  val: string,
  targetList: { formula: string; correctCoef: number }[]
): boolean => {
  const userVal = parseCoef(val);
  const normF = normalizeFormula(formula);
  const target = targetList.find((item) => normalizeFormula(item.formula) === normF);
  return target ? target.correctCoef === userVal : false;
};

export interface EquationEvaluationResult {
  isEquationBalanced: boolean;
  allReactantsCorrect: boolean;
  allProductsCorrect: boolean;
}

/**
 * Evaluates whether all reactant and product coefficients for an equation match targets.
 */
export const evaluateEquationCoefficients = (
  reactantCoefs: Record<string, string>,
  productCoefs: Record<string, string>,
  targetReactants: { formula: string; correctCoef: number }[],
  targetProducts: { formula: string; correctCoef: number }[]
): EquationEvaluationResult => {
  const allReactantsCorrect = targetReactants.every((r) => {
    const normTarget = normalizeFormula(r.formula);
    const userEntry = Object.entries(reactantCoefs).find(
      ([key]) => normalizeFormula(key) === normTarget
    );
    const userVal = parseCoef(userEntry ? userEntry[1] : reactantCoefs[r.formula]);
    return userVal === r.correctCoef;
  });

  const allProductsCorrect = targetProducts.every((p) => {
    const normTarget = normalizeFormula(p.formula);
    const userEntry = Object.entries(productCoefs).find(
      ([key]) => normalizeFormula(key) === normTarget
    );
    const userVal = parseCoef(userEntry ? userEntry[1] : productCoefs[p.formula]);
    return userVal === p.correctCoef;
  });

  return {
    isEquationBalanced: allReactantsCorrect && allProductsCorrect,
    allReactantsCorrect,
    allProductsCorrect,
  };
};

export interface SlotEvaluationResult {
  allCorrect: boolean;
  reactantsOk: boolean;
  productsOk: boolean;
  evalErrors: {
    reactants: boolean[];
    products: boolean[];
  };
}

/**
 * Order-independent slot matching evaluation for dynamic formula reaction builders.
 */
export const evaluateReactionSlots = (
  userReactants: { coef: string; formula: string }[],
  userProducts: { coef: string; formula: string }[],
  targetReactants: { formula: string; correctCoef: number }[],
  targetProducts: { formula: string; correctCoef: number }[]
): SlotEvaluationResult => {
  const normalizeSet = (items: { coef: string; formula: string }[]) => {
    return items
      .filter((item) => item.formula.trim() !== '')
      .map((item) => ({
        coef: parseCoef(item.coef),
        formula: normalizeFormula(item.formula),
      }));
  };

  const normUserR = normalizeSet(userReactants);
  const normUserP = normalizeSet(userProducts);

  const normTargetR = targetReactants.map((r) => ({
    coef: r.correctCoef,
    formula: normalizeFormula(r.formula),
  }));

  const normTargetP = targetProducts.map((p) => ({
    coef: p.correctCoef,
    formula: normalizeFormula(p.formula),
  }));

  const areSetsEqual = (
    userList: { coef: number; formula: string }[],
    targetList: { coef: number; formula: string }[]
  ) => {
    if (userList.length !== targetList.length) return false;
    const matched = new Array(targetList.length).fill(false);

    for (const u of userList) {
      const idx = targetList.findIndex(
        (t, i) => !matched[i] && t.coef === u.coef && t.formula.toLowerCase() === u.formula.toLowerCase()
      );
      if (idx === -1) return false;
      matched[idx] = true;
    }
    return true;
  };

  const reactantsOk = areSetsEqual(normUserR, normTargetR);
  const productsOk = areSetsEqual(normUserP, normTargetP);
  const allCorrect = reactantsOk && productsOk;

  const rErrors = userReactants.map((r) => {
    if (!r.formula.trim()) return true;
    const normF = normalizeFormula(r.formula).toLowerCase();
    const coef = parseCoef(r.coef);
    return !normTargetR.some((t) => t.formula.toLowerCase() === normF && t.coef === coef);
  });

  const pErrors = userProducts.map((p) => {
    if (!p.formula.trim()) return true;
    const normF = normalizeFormula(p.formula).toLowerCase();
    const coef = parseCoef(p.coef);
    return !normTargetP.some((t) => t.formula.toLowerCase() === normF && t.coef === coef);
  });

  return {
    allCorrect,
    reactantsOk,
    productsOk,
    evalErrors: {
      reactants: rErrors,
      products: pErrors,
    },
  };
};
