/**
 * Storage Service for handling trainer progress persistence in LocalStorage.
 * Follows SRP (Single Responsibility Principle) & DRY.
 */

export interface TaskProgressStatus {
  solved: boolean;
  score: number;
  maxScore?: number;
  details?: unknown;
}

export class TrainerStorageService {
  /**
   * Load progress map from LocalStorage for a given storage key.
   */
  static loadProgress<T extends TaskProgressStatus = TaskProgressStatus>(
    storageKey: string
  ): Record<number, T> {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return {};
      const parsed = JSON.parse(saved);
      const result: Record<number, T> = {};
      Object.keys(parsed).forEach((k) => {
        result[Number(k)] = parsed[k];
      });
      return result;
    } catch (e) {
      console.error(`[TrainerStorageService] Failed to load key "${storageKey}":`, e);
      return {};
    }
  }

  /**
   * Save progress map to LocalStorage for a given storage key.
   */
  static saveProgress<T extends TaskProgressStatus = TaskProgressStatus>(
    storageKey: string,
    progressMap: Record<number, T>
  ): void {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progressMap));
    } catch (e) {
      console.error(`[TrainerStorageService] Failed to save key "${storageKey}":`, e);
    }
  }

  /**
   * Reset progress for a given storage key.
   */
  static resetProgress(storageKey: string): void {
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      console.error(`[TrainerStorageService] Failed to reset key "${storageKey}":`, e);
    }
  }

  /**
   * Calculate total score and total solved count from progress map.
   */
  static getStats<T extends TaskProgressStatus = TaskProgressStatus>(
    progressMap: Record<number, T>
  ) {
    const values = Object.values(progressMap);
    const totalScore = values.reduce((acc, curr) => acc + (curr?.score || 0), 0);
    const solvedCount = values.filter((curr) => curr?.solved).length;
    return { totalScore, solvedCount };
  }
}
