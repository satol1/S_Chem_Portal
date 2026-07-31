import type { MultipleChoiceMatchingTask, SubtopicFilterOption } from '../../types/trainer';
import { SELECT_TWO_TASKS } from './selectTwoTasks';
import { TRANSFORMATION_CHAIN_TASKS } from './transformationChainTasks';
import { MATCHING_TASKS } from './matchingTasks';

export const NP_TEST_SUBTOPICS: SubtopicFilterOption[] = [
  { id: 'all', title: 'Все задания (66)' },
  { id: 'select-two', title: 'Выбор двух веществ (14)' },
  { id: 'chains', title: 'Цепочки превращений (28)' },
  { id: 'matching', title: 'Установление соответствия (24)' },
];

export const NP_TEST_TASKS: MultipleChoiceMatchingTask[] = [
  ...SELECT_TWO_TASKS,
  ...TRANSFORMATION_CHAIN_TASKS,
  ...MATCHING_TASKS,
].sort((a, b) => a.id - b.id);

export { SELECT_TWO_TASKS, TRANSFORMATION_CHAIN_TASKS, MATCHING_TASKS };
