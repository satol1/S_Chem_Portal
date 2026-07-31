import React from 'react';
import { ChemFormula } from '../../../components/scientific/ChemFormula';
import { isCoefCorrect } from '../../chemistry/equationEvaluator';

export interface EquationParticipant {
  formula: string;
  correctCoef: number;
}

export interface InteractiveEquationFormProps {
  reactants: EquationParticipant[];
  products: EquationParticipant[];
  reactantCoefs: Record<string, string>;
  productCoefs: Record<string, string>;
  onReactantCoefChange: (formula: string, value: string) => void;
  onProductCoefChange: (formula: string, value: string) => void;
  isSubmitted: boolean;
  mode?: 'practice' | 'exam';
  unbalancedEquation?: string;
  stepNumber?: number;
  label?: string;
  className?: string;
}

export const InteractiveEquationForm: React.FC<InteractiveEquationFormProps> = ({
  reactants,
  products,
  reactantCoefs,
  productCoefs,
  onReactantCoefChange,
  onProductCoefChange,
  isSubmitted,
  mode = 'practice',
  unbalancedEquation,
  stepNumber,
  label,
  className = '',
}) => {
  const isExam = mode === 'exam';

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Optional Step Header */}
      {label && (
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-2">
          {stepNumber !== undefined && (
            <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px]">
              {stepNumber}
            </span>
          )}
          <span>{label}</span>
        </h3>
      )}

      {/* Optional Unbalanced Equation Preview */}
      {unbalancedEquation && (
        <div className="p-4 rounded-2xl bg-slate-900 text-white overflow-x-auto shadow-inner flex items-center justify-center min-h-[72px]">
          <div className="text-lg sm:text-xl tracking-wide font-mono text-amber-300">
            <ChemFormula formula={unbalancedEquation} displayMode className="text-white" />
          </div>
        </div>
      )}

      {/* Coefficient Constructor Row */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-3 text-slate-900 font-bold text-sm sm:text-base leading-loose overflow-x-auto shadow-sm">
        {/* Reactants */}
        {reactants.map((r, i) => {
          const val = reactantCoefs[r.formula] || '';
          const isCorrect = !isExam && isSubmitted && isCoefCorrect(r.formula, val, reactants);
          const isWrong = !isExam && isSubmitted && !isCorrect;
          const isDisabled = isSubmitted && isExam;

          return (
            <React.Fragment key={`r-${r.formula}`}>
              {i > 0 && <span className="text-slate-400 font-extrabold">+</span>}
              <div className="inline-flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-300 shadow-sm">
                <input
                  type="number"
                  min="1"
                  max="99"
                  placeholder="1"
                  value={val}
                  disabled={isDisabled}
                  onChange={(e) => onReactantCoefChange(r.formula, e.target.value)}
                  className={`w-12 h-9 text-center font-mono text-sm font-extrabold rounded-lg border outline-none transition ${
                    isCorrect
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40'
                      : isWrong
                      ? 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40'
                      : isDisabled
                      ? 'border-slate-200 bg-slate-100 text-slate-700 cursor-not-allowed'
                      : 'border-slate-300 focus:border-amber-500 bg-white text-slate-900'
                  }`}
                />
                <ChemFormula formula={r.formula} className="pr-1 text-slate-900 font-bold" />
              </div>
            </React.Fragment>
          );
        })}

        <span className="text-amber-600 font-extrabold text-lg px-1">=</span>

        {/* Products */}
        {products.map((p, i) => {
          const val = productCoefs[p.formula] || '';
          const isCorrect = !isExam && isSubmitted && isCoefCorrect(p.formula, val, products);
          const isWrong = !isExam && isSubmitted && !isCorrect;
          const isDisabled = isSubmitted && isExam;

          return (
            <React.Fragment key={`p-${p.formula}`}>
              {i > 0 && <span className="text-slate-400 font-extrabold">+</span>}
              <div className="inline-flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-300 shadow-sm">
                <input
                  type="number"
                  min="1"
                  max="99"
                  placeholder="1"
                  value={val}
                  disabled={isDisabled}
                  onChange={(e) => onProductCoefChange(p.formula, e.target.value)}
                  className={`w-12 h-9 text-center font-mono text-sm font-extrabold rounded-lg border outline-none transition ${
                    isCorrect
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40'
                      : isWrong
                      ? 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40'
                      : isDisabled
                      ? 'border-slate-200 bg-slate-100 text-slate-700 cursor-not-allowed'
                      : 'border-slate-300 focus:border-amber-500 bg-white text-slate-900'
                  }`}
                />
                <ChemFormula formula={p.formula} className="pr-1 text-slate-900 font-bold" />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
