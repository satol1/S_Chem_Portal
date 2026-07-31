import React from 'react';
import { INORGANIC_31_TASKS, INORGANIC_31_SUBTOPICS } from '../../data/inorganic31Tasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { Inorganic31TaskAdapter } from './adapters/Inorganic31TaskAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const Inorganic31Trainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="inorg31_trainer_progress"
      badgeText="Тренажер №31 • ЕГЭ"
      moduleCategoryText="Тема: Азот и Фосфор"
      title="Решебник №31: 4 уравнения реакций"
      tasks={INORGANIC_31_TASKS}
      subtopics={INORGANIC_31_SUBTOPICS}
      maxScorePerTask={4}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <Inorganic31TaskAdapter {...props} />}
    />
  );
};

export default Inorganic31Trainer;
