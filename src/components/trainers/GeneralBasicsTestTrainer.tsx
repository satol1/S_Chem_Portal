import React from 'react';
import { GB_TEST_TASKS, GB_TEST_SUBTOPICS } from '../../data/generalBasicsTestTasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { MultipleChoiceMatchingAdapter } from './adapters/MultipleChoiceMatchingAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const GeneralBasicsTestTrainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="gb_test_01_trainer_progress"
      badgeText="Тест ОХ-01 • 14 Заданий"
      moduleCategoryText="Тема: Основные понятия и законы химии"
      title="Тренажер ОХ-01: Основные понятия и законы химии (Выбор двух, Соответствия)"
      tasks={GB_TEST_TASKS}
      subtopics={GB_TEST_SUBTOPICS}
      maxScorePerTask={2}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <MultipleChoiceMatchingAdapter {...props} />}
    />
  );
};

export default GeneralBasicsTestTrainer;
