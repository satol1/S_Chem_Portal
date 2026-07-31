import React from 'react';
import { NP_TEST_TASKS, NP_TEST_SUBTOPICS } from '../../data/nitrogenPhosphorusTestTasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { MultipleChoiceMatchingAdapter } from './adapters/MultipleChoiceMatchingAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const NitrogenPhosphorusTestTrainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="np_test_14_1_trainer_progress"
      badgeText="Тест 14.1 • 66 Заданий"
      moduleCategoryText="Тема: Азот и Фосфор"
      title="Тренажер 14.1: Азот и Фосфор (Выбор, Цепочки, Соответствия)"
      tasks={NP_TEST_TASKS}
      subtopics={NP_TEST_SUBTOPICS}
      maxScorePerTask={2}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <MultipleChoiceMatchingAdapter {...props} />}
    />
  );
};

export default NitrogenPhosphorusTestTrainer;
