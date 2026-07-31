import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Zap } from 'lucide-react';
import { useSkillMap } from '../../hooks/useSkillMap';
import { useRouter } from '../../routes/router';
import { SkillStatsHeader } from './SkillStatsHeader';
import { SkillFiltersToolbar } from './SkillFiltersToolbar';
import { SkillMapCanvas } from './SkillMapCanvas';
import { SkillNodeCard } from './SkillNodeCard';
import { SkillTimelineView } from './SkillTimelineView';
import { SkillMatrixView } from './SkillMatrixView';
import { SkillDetailModal } from './SkillDetailModal';

interface Props {
  onBackToHome?: () => void;
  onOpenTrainers?: () => void;
  onOpenSpecificTrainer?: (topicId: string) => void;
  initialSkillId?: string;
}

export const SkillMapPage: React.FC<Props> = ({
  onBackToHome,
  onOpenTrainers,
  onOpenSpecificTrainer,
  initialSkillId,
}) => {
  const { match, goHome, openTrainersCatalog, openTrainerTopic, openSkillMap } = useRouter();

  const handleBackToHome = onBackToHome || goHome;
  const handleOpenTrainers = onOpenTrainers || openTrainersCatalog;
  const handleOpenSpecificTrainer = onOpenSpecificTrainer || openTrainerTopic;

  const {
    allSkills,
    filteredSkills,
    stats,
    filterState,
    viewMode,
    selectedSkillNode,
    zoomLevel,
    panPosition,
    setViewMode,
    setSelectedSkillId,
    updateNodePosition,
    setSearchQuery,
    setGradeFilter,
    setBranchFilter,
    setBloomFilter,
    resetFilters,
    handleZoomIn,
    handleZoomOut,
    handleZoomReset,
    setPanPosition,
    setZoomLevel,
  } = useSkillMap();

  // Sync route skillId to state
  const targetSkillId = match.skillId || initialSkillId;
  useEffect(() => {
    if (targetSkillId) {
      setSelectedSkillId(targetSkillId);
    }
  }, [targetSkillId, setSelectedSkillId]);

  const handleSelectSkill = (id: string | null) => {
    setSelectedSkillId(id);
    if (id) {
      openSkillMap(id);
    } else {
      openSkillMap();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-teal-400 selection:text-slate-950 pb-24 relative overflow-x-hidden">
      
      {/* Top Banner Navigation */}
      <div className="bg-slate-900/95 border-b border-slate-800 py-4 sticky top-0 z-40 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToHome}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center gap-2 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Главная страница</span>
            </button>
            <div className="h-5 w-px bg-slate-800 hidden sm:block" />
            <div>
              <span className="text-xs text-teal-400 font-extrabold uppercase tracking-wider block">
                Образовательный Портал
              </span>
              <h1 className="text-lg font-black text-white leading-tight">
                Интерактивная Карта Развития Умений
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenTrainers}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 text-xs font-bold transition flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Каталог Тренажеров</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Stats Banner */}
        <SkillStatsHeader stats={stats} />

        {/* Filters Toolbar */}
        <SkillFiltersToolbar
          filterState={filterState}
          viewMode={viewMode}
          onSearchChange={setSearchQuery}
          onGradeChange={setGradeFilter}
          onBranchChange={setBranchFilter}
          onBloomChange={setBloomFilter}
          onResetFilters={resetFilters}
          onViewModeChange={setViewMode}
        />

        {/* Active View Content */}
        <div>
          {viewMode === 'tree' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-end text-xs text-slate-400 px-1">
                <span className="font-bold text-slate-300">
                  Показано навыков: <strong className="text-teal-300">{filteredSkills.length}</strong> из {allSkills.length}
                </span>
              </div>

              <SkillMapCanvas
                skills={filteredSkills}
                allSkills={allSkills}
                zoomLevel={zoomLevel}
                panPosition={panPosition}
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onZoomReset={handleZoomReset}
                onPanChange={setPanPosition}
                onZoomChange={setZoomLevel}
                onSelectSkill={(id) => handleSelectSkill(id)}
                onUpdateNodePosition={updateNodePosition}
              />
            </div>

          ) : viewMode === 'grid' ? (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 px-1">
                Показано карточек: <strong className="text-teal-300">{filteredSkills.length}</strong>
              </div>

              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map(node => (
                    <SkillNodeCard
                      key={node.id}
                      node={node}
                      onSelect={(id) => handleSelectSkill(id)}
                      onOpenTrainer={handleOpenSpecificTrainer}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-slate-900 border border-slate-800 p-12 rounded-3xl text-center space-y-3">
                  <BookOpen className="w-10 h-10 text-slate-600 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Навыков по заданным критериям не найдено</h3>
                  <p className="text-xs text-slate-400">Попробуйте изменить поисковый запрос или сбросить фильтры.</p>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold"
                  >
                    Сбросить все фильтры
                  </button>
                </div>
              )}
            </div>

          ) : viewMode === 'timeline' ? (
            <SkillTimelineView
              skills={filteredSkills}
              onSelectSkill={(id) => handleSelectSkill(id)}
              onOpenTrainer={handleOpenSpecificTrainer}
            />

          ) : (
            <SkillMatrixView
              skills={filteredSkills}
              onSelectSkill={(id) => handleSelectSkill(id)}
            />
          )}
        </div>

      </div>

      {/* Selected Skill Detail Side-Over Panel */}
      <SkillDetailModal
        node={selectedSkillNode}
        onClose={() => handleSelectSkill(null)}
        onSelectSkill={(id) => handleSelectSkill(id)}
        onOpenTrainer={handleOpenSpecificTrainer}
      />

    </div>
  );
};
