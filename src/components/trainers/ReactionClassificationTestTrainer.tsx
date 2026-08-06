import React from 'react';
import { RC_TEST_TASKS, RC_TEST_SUBTOPICS } from '../../data/reactionClassificationTestTasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { MultipleChoiceMatchingAdapter } from './adapters/MultipleChoiceMatchingAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const ReactionClassificationTestTrainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="rc_test_01_trainer_progress"
      badgeText="Тест ОХ-05 • 12 Заданий"
      moduleCategoryText="Тема: Классификация химических реакций"
      title="Тренажер ОХ-05: Классификация химических реакций (Выбор двух, Соответствия)"
      tasks={RC_TEST_TASKS}
      subtopics={RC_TEST_SUBTOPICS}
      maxScorePerTask={2}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <MultipleChoiceMatchingAdapter {...props} />}
    />
  );
};

export default ReactionClassificationTestTrainer;
