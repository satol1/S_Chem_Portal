import { useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

export interface BaseTaskAdapterProps<TTask> {
  task: TTask;
  mode: 'practice' | 'exam';
  initialStatus?: { solved: boolean; score: number; details?: unknown };
  onSaveProgress: (solved: boolean, score: number, details?: unknown) => void;
  onPrevTask: () => void;
  onNextTask: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export interface UseTaskStateReturn {
  showSolution: boolean;
  setShowSolution: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSolution: () => void;
  showHint: boolean;
  setShowHint: React.Dispatch<React.SetStateAction<boolean>>;
  toggleHint: () => void;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  triggerSuccessConfetti: () => void;
  saveTaskProgress: (isSolved: boolean, score: number, details?: unknown) => void;
  resetBaseState: () => void;
}

/**
 * Common hook for managing trainer task state, solutions, hints, scoring, and progress saving.
 */
export function useTaskState<TTask>(
  props: BaseTaskAdapterProps<TTask>
): UseTaskStateReturn {
  const { onSaveProgress } = props;

  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const toggleSolution = useCallback(() => {
    setShowSolution((prev) => !prev);
  }, []);

  const toggleHint = useCallback(() => {
    setShowHint((prev) => !prev);
  }, []);

  const triggerSuccessConfetti = useCallback(() => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  const saveTaskProgress = useCallback(
    (isSolved: boolean, calculatedScore: number, details?: unknown) => {
      setSubmitted(true);
      setScore(calculatedScore);
      onSaveProgress(isSolved, calculatedScore, details);
    },
    [onSaveProgress]
  );

  const resetBaseState = useCallback(() => {
    setShowSolution(false);
    setShowHint(false);
    setSubmitted(false);
    setScore(0);
  }, []);

  return {
    showSolution,
    setShowSolution,
    toggleSolution,
    showHint,
    setShowHint,
    toggleHint,
    submitted,
    setSubmitted,
    score,
    setScore,
    triggerSuccessConfetti,
    saveTaskProgress,
    resetBaseState,
  };
}
