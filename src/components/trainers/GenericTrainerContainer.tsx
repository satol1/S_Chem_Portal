import React, { useState, useMemo } from 'react';
import { type TaskProgressStatus } from '../../services/trainerStorage';
import { useUserProgress } from '../../context/UserProgressContext';
import { TrainerHeader } from './common/TrainerHeader';
import { SubtopicFilterBar } from './common/SubtopicFilterBar';
import { TaskSidebar } from './common/TaskSidebar';
import type { SubtopicFilterOption } from '../../types/trainer';

export interface BaseTaskItem {
  id: number;
  title: string;
  subtopicId?: string;
}

interface GenericTrainerContainerProps<T extends BaseTaskItem> {
  storageKey: string;
  badgeText: string;
  moduleCategoryText: string;
  title: string;
  tasks: T[];
  subtopics: SubtopicFilterOption[];
  maxScorePerTask: number;
  onBackToCatalog?: () => void;
  renderTaskAdapter: (props: {
    task: T;
    mode: 'practice' | 'exam';
    initialStatus?: TaskProgressStatus;
    onSaveProgress: (solved: boolean, score: number, details?: unknown) => void;
    onPrevTask: () => void;
    onNextTask: () => void;
    hasPrev: boolean;
    hasNext: boolean;
  }) => React.ReactNode;
}

export function GenericTrainerContainer<T extends BaseTaskItem>({
  storageKey,
  badgeText,
  moduleCategoryText,
  title,
  tasks,
  subtopics,
  maxScorePerTask,
  onBackToCatalog,
  renderTaskAdapter,
}: GenericTrainerContainerProps<T>) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('all');
  const [mode, setMode] = useState<'practice' | 'exam'>('practice');

  // Progress from UserProgressContext
  const { getTrainerProgress, saveTaskProgress, resetTrainerProgress, getTrainerStats } = useUserProgress();
  const progressMap = getTrainerProgress(storageKey);

  // Filter tasks by selected subtopic
  const filteredTasks = useMemo(() => {
    if (selectedSubtopic === 'all') return tasks;
    return tasks.filter((t) => t.subtopicId === selectedSubtopic);
  }, [tasks, selectedSubtopic]);

  const currentTask = useMemo(() => {
    return filteredTasks[currentTaskIndex] || filteredTasks[0] || tasks[0];
  }, [filteredTasks, currentTaskIndex, tasks]);

  const { totalScore, solvedCount } = useMemo(() => {
    return getTrainerStats(storageKey);
  }, [getTrainerStats, storageKey]);

  const handleSaveProgress = (solved: boolean, score: number, details?: unknown) => {
    saveTaskProgress(storageKey, currentTask.id, solved, score, details);
  };

  const handleModeChange = (newMode: 'practice' | 'exam') => {
    if (newMode === mode) return;

    if (mode === 'exam' && newMode === 'practice') {
      const confirmed = window.confirm(
        'Внимание! Переключение с режима Экзамена на режим Тренировки сбросит весь текущий прогресс прохождения экзамена и набранные баллы. Переключиться со сбросом результатов?'
      );
      if (!confirmed) return;
      resetTrainerProgress(storageKey);
      setCurrentTaskIndex(0);
    } else if (mode === 'practice' && newMode === 'exam') {
      const confirmed = window.confirm(
        'Начать режим Экзамена? Весь предыдущий прогресс по этому тренажеру будет сброшен для чистого прохождения экзамена.'
      );
      if (!confirmed) return;
      resetTrainerProgress(storageKey);
      setCurrentTaskIndex(0);
    }

    setMode(newMode);
  };

  const handleResetProgress = () => {
    if (window.confirm('Сбросить весь сохраненный прогресс и набранные баллы по этому тренажеру?')) {
      resetTrainerProgress(storageKey);
      setCurrentTaskIndex(0);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in font-body selection:bg-amber-400 selection:text-slate-950">
      
      {/* 1. Header Control Bar */}
      <TrainerHeader
        badgeText={badgeText}
        moduleCategoryText={moduleCategoryText}
        title={title}
        totalScore={totalScore}
        maxPossibleScore={tasks.length * maxScorePerTask}
        solvedCount={solvedCount}
        totalTaskCount={tasks.length}
        mode={mode}
        onModeChange={handleModeChange}
        onResetProgress={handleResetProgress}
        onBackToCatalog={onBackToCatalog}
      />

      {/* 2. Subtopic Filter Bar */}
      <SubtopicFilterBar
        subtopics={subtopics}
        selectedSubtopic={selectedSubtopic}
        filteredCount={filteredTasks.length}
        onSelectSubtopic={(stId) => {
          setSelectedSubtopic(stId);
          setCurrentTaskIndex(0);
        }}
      />

      {/* 3. Main 12-Column Grid: Sidebar Matrix (4 cols) + Task Adapter (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Sidebar Task Navigation Matrix */}
        <div className="lg:col-span-4 space-y-4">
          <TaskSidebar
            tasks={filteredTasks}
            currentTaskIndex={currentTaskIndex}
            progressMap={progressMap}
            onSelectTaskIndex={setCurrentTaskIndex}
            maxScorePerTask={maxScorePerTask}
          />
        </div>

        {/* Right Column: Active Task Interactive View Adapter */}
        <div className="lg:col-span-8 space-y-6">
          {renderTaskAdapter({
            task: currentTask,
            mode,
            initialStatus: progressMap[currentTask.id],
            onSaveProgress: handleSaveProgress,
            onPrevTask: () => setCurrentTaskIndex((prev) => Math.max(0, prev - 1)),
            onNextTask: () => setCurrentTaskIndex((prev) => Math.min(filteredTasks.length - 1, prev + 1)),
            hasPrev: currentTaskIndex > 0,
            hasNext: currentTaskIndex < filteredTasks.length - 1,
          })}
        </div>

      </div>
    </div>
  );
}
