import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { TrainerStorageService, type TaskProgressStatus } from '../services/trainerStorage';

// Known storage keys across all trainers
export const KNOWN_STORAGE_KEYS = [
  'ovr_trainer_progress',
  'inorg_31_trainer_progress',
  'reactions_np_trainer_progress',
] as const;

export type StorageKey = (typeof KNOWN_STORAGE_KEYS)[number] | string;

export interface OverallStats {
  totalScore: number;
  solvedCount: number;
}

interface UserProgressContextType {
  /**
   * Progress map dictionary keyed by storageKey, containing task id -> progress status
   */
  progressData: Record<string, Record<number, TaskProgressStatus>>;

  /**
   * Save progress for a specific task under a storage key
   */
  saveTaskProgress: (
    storageKey: string,
    taskId: number,
    solved: boolean,
    score: number,
    details?: unknown
  ) => void;

  /**
   * Reset all progress under a storage key
   */
  resetTrainerProgress: (storageKey: string) => void;

  /**
   * Get progress map for a specific storage key
   */
  getTrainerProgress: (storageKey: string) => Record<number, TaskProgressStatus>;

  /**
   * Get total score and solved count for a specific storage key
   */
  getTrainerStats: (storageKey: string) => OverallStats;

  /**
   * Aggregated stats across all known trainers in the portal
   */
  overallStats: OverallStats;
}

const UserProgressContext = createContext<UserProgressContextType | null>(null);

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize progress data for all known storage keys
  const [progressData, setProgressData] = useState<Record<string, Record<number, TaskProgressStatus>>>(() => {
    const initial: Record<string, Record<number, TaskProgressStatus>> = {};
    KNOWN_STORAGE_KEYS.forEach((key) => {
      initial[key] = TrainerStorageService.loadProgress(key);
    });
    return initial;
  });

  const saveTaskProgress = useCallback(
    (storageKey: string, taskId: number, solved: boolean, score: number, details?: unknown) => {
      setProgressData((prev) => {
        const currentTrainerMap = prev[storageKey] || {};
        const updatedTrainerMap = {
          ...currentTrainerMap,
          [taskId]: {
            solved,
            score,
            details,
          },
        };

        // Persist to LocalStorage using TrainerStorageService
        TrainerStorageService.saveProgress(storageKey, updatedTrainerMap);

        return {
          ...prev,
          [storageKey]: updatedTrainerMap,
        };
      });
    },
    []
  );

  const resetTrainerProgress = useCallback((storageKey: string) => {
    TrainerStorageService.resetProgress(storageKey);
    setProgressData((prev) => ({
      ...prev,
      [storageKey]: {},
    }));
  }, []);

  const getTrainerProgress = useCallback(
    (storageKey: string): Record<number, TaskProgressStatus> => {
      return progressData[storageKey] || {};
    },
    [progressData]
  );

  const getTrainerStats = useCallback(
    (storageKey: string): OverallStats => {
      const map = progressData[storageKey] || {};
      return TrainerStorageService.getStats(map);
    },
    [progressData]
  );

  const overallStats = useMemo<OverallStats>(() => {
    let totalScore = 0;
    let solvedCount = 0;

    Object.values(progressData).forEach((trainerMap) => {
      const stats = TrainerStorageService.getStats(trainerMap);
      totalScore += stats.totalScore;
      solvedCount += stats.solvedCount;
    });

    return { totalScore, solvedCount };
  }, [progressData]);

  const value = useMemo(
    () => ({
      progressData,
      saveTaskProgress,
      resetTrainerProgress,
      getTrainerProgress,
      getTrainerStats,
      overallStats,
    }),
    [progressData, saveTaskProgress, resetTrainerProgress, getTrainerProgress, getTrainerStats, overallStats]
  );

  return (
    <UserProgressContext.Provider value={value}>
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = (): UserProgressContextType => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
