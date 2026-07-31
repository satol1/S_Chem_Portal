import type { SkillNode, SkillFilterState, GradeLevel, SkillBranch } from '../types/skillMap';
import { SKILL_NODES } from '../data/skillsData';

export class SkillMapService {
  /**
   * Filter skills list according to search and category choices
   */
  public static filterSkills(
    skills: SkillNode[],
    filterState: SkillFilterState
  ): SkillNode[] {
    return skills.filter(skill => {
      // Search Query
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase();
        const matchesTitle = skill.title.toLowerCase().includes(q);
        const matchesSubtitle = skill.subtitle.toLowerCase().includes(q);
        const matchesCode = skill.code.toLowerCase().includes(q);
        const matchesDesc = skill.description.toLowerCase().includes(q);
        const matchesStandard = skill.fgosStandard.toLowerCase().includes(q) || (skill.fipiExamTarget && skill.fipiExamTarget.toLowerCase().includes(q));
        const matchesComp = skill.competencies.some(c => c.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSubtitle && !matchesCode && !matchesDesc && !matchesStandard && !matchesComp) {
          return false;
        }
      }

      // Grade Level
      if (filterState.gradeLevel !== 'all' && skill.gradeLevel !== filterState.gradeLevel) {
        return false;
      }

      // Branch
      if (filterState.branch !== 'all' && skill.branch !== filterState.branch) {
        return false;
      }

      // Bloom Level
      if (filterState.bloomLevel !== 'all' && skill.bloomLevel !== filterState.bloomLevel) {
        return false;
      }

      return true;
    });
  }

  /**
   * Compute trajectory statistics per grade and branch
   */
  public static calculateStats() {
    const total = SKILL_NODES.length;

    const gradeStats: Record<GradeLevel, number> = {
      '8-class': 0,
      '9-class': 0,
      '10-class': 0,
      '11-class': 0,
      'university': 0,
    };

    const branchStats: Record<SkillBranch, number> = {
      inorganic: 0,
      organic: 0,
      general: 0,
      physical: 0,
      analytical: 0,
      olympiad: 0,
      stem_project: 0,
    };

    SKILL_NODES.forEach(skill => {
      if (gradeStats[skill.gradeLevel] !== undefined) {
        gradeStats[skill.gradeLevel]++;
      }
      if (branchStats[skill.branch] !== undefined) {
        branchStats[skill.branch]++;
      }
    });

    return {
      total,
      gradeStats,
      branchStats
    };
  }

  /**
   * Helper to resolve prerequisites object list for modal/drawer view
   */
  public static getPrerequisiteNodes(node: SkillNode): SkillNode[] {
    return node.prerequisites
      .map(id => SKILL_NODES.find(n => n.id === id))
      .filter((n): n is SkillNode => n !== undefined);
  }

  /**
   * Helper to resolve next skills object list
   */
  public static getNextSkillsNodes(node: SkillNode): SkillNode[] {
    return node.nextSkills
      .map(id => SKILL_NODES.find(n => n.id === id))
      .filter((n): n is SkillNode => n !== undefined);
  }
}
