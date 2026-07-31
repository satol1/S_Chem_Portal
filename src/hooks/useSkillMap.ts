import { useState, useMemo, useCallback } from 'react';
import type { SkillFilterState, GradeLevel, SkillBranch, BloomLevel, SkillMapViewMode } from '../types/skillMap';
import { SKILL_NODES } from '../data/skillsData';
import { SkillMapService } from '../services/skillMapService';

export type { SkillMapViewMode };

// Derive initial positions dynamically from SKILL_NODES data to ensure Single Source of Truth (DRY)
const getInitialPositions = (): Record<string, { x: number; y: number }> => {
  const map: Record<string, { x: number; y: number }> = {};
  SKILL_NODES.forEach(skill => {
    map[skill.id] = { ...skill.position };
  });
  return map;
};

export const useSkillMap = () => {
  // Dynamic node positions for canvas dragging
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>(
    getInitialPositions
  );

  const [filterState, setFilterState] = useState<SkillFilterState>({
    searchQuery: '',
    gradeLevel: 'all',
    branch: 'all',
    bloomLevel: 'all',
  });

  const [viewMode, setViewMode] = useState<SkillMapViewMode>('tree');
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  // Viewport Zoom & Pan state
  const [zoomLevel, setZoomLevel] = useState<number>(0.85);
  const [panPosition, setPanPosition] = useState<{ x: number; y: number }>({ x: 40, y: 30 });

  // Filtered skills list with live position binding
  const filteredSkills = useMemo(() => {
    const rawFiltered = SkillMapService.filterSkills(SKILL_NODES, filterState);
    return rawFiltered.map(skill => ({
      ...skill,
      position: nodePositions[skill.id] || skill.position
    }));
  }, [filterState, nodePositions]);

  // All skills with live positions for edge calculation
  const allSkillsWithPositions = useMemo(() => {
    return SKILL_NODES.map(skill => ({
      ...skill,
      position: nodePositions[skill.id] || skill.position
    }));
  }, [nodePositions]);

  // Selected skill node
  const selectedSkillNode = useMemo(() => {
    if (!selectedSkillId) return null;
    return allSkillsWithPositions.find(n => n.id === selectedSkillId) || null;
  }, [selectedSkillId, allSkillsWithPositions]);

  // Statistics
  const stats = useMemo(() => {
    return SkillMapService.calculateStats();
  }, []);

  // Node position drag update
  const updateNodePosition = useCallback((skillId: string, deltaX: number, deltaY: number) => {
    setNodePositions(prev => {
      const current = prev[skillId] || { x: 100, y: 100 };
      return {
        ...prev,
        [skillId]: {
          x: Math.max(20, Math.min(2600, current.x + deltaX)),
          y: Math.max(20, Math.min(1400, current.y + deltaY))
        }
      };
    });
  }, []);

  const resetAllPositions = useCallback(() => {
    setNodePositions(getInitialPositions());
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setFilterState(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const setGradeFilter = useCallback((gradeLevel: GradeLevel | 'all') => {
    setFilterState(prev => ({ ...prev, gradeLevel }));
  }, []);

  const setBranchFilter = useCallback((branch: SkillBranch | 'all') => {
    setFilterState(prev => ({ ...prev, branch }));
  }, []);

  const setBloomFilter = useCallback((bloomLevel: BloomLevel | 'all') => {
    setFilterState(prev => ({ ...prev, bloomLevel }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilterState({
      searchQuery: '',
      gradeLevel: 'all',
      branch: 'all',
      bloomLevel: 'all',
    });
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.15, 1.8));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.15, 0.45));
  }, []);

  const handleZoomReset = useCallback(() => {
    setZoomLevel(0.85);
    setPanPosition({ x: 40, y: 30 });
  }, []);

  return {
    // Data & state
    allSkills: allSkillsWithPositions,
    filteredSkills,
    stats,
    filterState,
    viewMode,
    selectedSkillNode,
    zoomLevel,
    panPosition,
    nodePositions,

    // Controls
    setViewMode,
    setSelectedSkillId,
    updateNodePosition,
    resetAllPositions,
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
  };
};
