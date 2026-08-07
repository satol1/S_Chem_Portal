import React from 'react';
import { REDOX_TEST_TASKS, REDOX_TEST_SUBTOPICS } from '../../data/redoxTestTasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { MultipleChoiceMatchingAdapter } from './adapters/MultipleChoiceMatchingAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const RedoxReactionsTestTrainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="oxr_test_01_trainer_progress"
      badgeText="Тест ОХ-06 • 12 Заданий"
      moduleCategoryText="Тема: Окислительно-восстановительные реакции"
      title="Тренажер ОХ-06: ОВР и электролиз (Выбор двух, Соответствия)"
      tasks={REDOX_TEST_TASKS}
      subtopics={REDOX_TEST_SUBTOPICS}
      maxScorePerTask={2}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <MultipleChoiceMatchingAdapter {...props} />}
    />
  );
};

export default RedoxReactionsTestTrainer;
