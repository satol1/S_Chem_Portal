import React, { useMemo } from 'react';
import { BookOpen, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import type { TaskProgressStatus } from '../../../services/trainerStorage';

interface TaskSidebarProps {
  tasks: Array<{ id: number; title: string }>;
  currentTaskIndex: number;
  progressMap: Record<number, TaskProgressStatus>;
  onSelectTaskIndex: (index: number) => void;
  maxScorePerTask?: number;
}

export const TaskSidebar: React.FC<TaskSidebarProps> = ({
  tasks,
  currentTaskIndex,
  progressMap,
  onSelectTaskIndex,
  maxScorePerTask = 2,
}) => {
  // Compute solution counter breakdown
  const stats = useMemo(() => {
    let fullSolved = 0;
    let partialSolved = 0;
    let unsolved = 0;

    tasks.forEach((t) => {
      const status = progressMap[t.id];
      if (status?.solved || (status?.score || 0) === maxScorePerTask) {
        fullSolved++;
      } else if ((status?.score || 0) > 0) {
        partialSolved++;
      } else {
        unsolved++;
      }
    });

    return { fullSolved, partialSolved, unsolved };
  }, [tasks, progressMap, maxScorePerTask]);

  return (
    <div className="space-y-4 font-body">
      {/* 1. Task Selector Card */}
      <div className="clean-card p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Список ({tasks.length} вариантов)</span>
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            {currentTaskIndex + 1} из {tasks.length}
          </span>
        </div>

        {/* Task Grid Pills */}
        <div className="grid grid-cols-5 gap-2 max-h-[380px] overflow-y-auto pr-1">
          {tasks.map((t, idx) => {
            const status = progressMap[t.id];
            const isActive = idx === currentTaskIndex;
            const isFullSolved = status?.solved || (status?.score || 0) === maxScorePerTask;
            const isPartialSolved = (status?.score || 0) > 0 && !isFullSolved;

            return (
              <button
                key={t.id}
                onClick={() => onSelectTaskIndex(idx)}
                className={`h-11 rounded-xl font-bold text-xs flex flex-col items-center justify-center transition border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-amber-400 ring-offset-2 shadow-md'
                    : isFullSolved
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                    : isPartialSolved
                    ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>#{t.id}</span>
                {status && (
                  <span className="text-[9px] opacity-80 font-mono">
                    {status.score}/{maxScorePerTask}б
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Solution Statistics Breakdown Counter Card */}
      <div className="clean-card p-5 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
        <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center justify-between">
          <span>Счетчик ответов:</span>
          <span className="text-[11px] text-slate-500 font-normal">всего {tasks.length}</span>
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
            <span className="flex items-center gap-2 text-emerald-900 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Решено на {maxScorePerTask}/{maxScorePerTask}</span>
            </span>
            <span className="font-extrabold text-emerald-800 text-sm">{stats.fullSolved}</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/60 border border-amber-200/60">
            <span className="flex items-center gap-2 text-amber-900 font-bold">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Частично верно</span>
            </span>
            <span className="font-extrabold text-amber-800 text-sm">{stats.partialSolved}</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="flex items-center gap-2 text-slate-600 font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>Еще не решено</span>
            </span>
            <span className="font-extrabold text-slate-700 text-sm">{stats.unsolved}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
