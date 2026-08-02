import React from 'react';
import { OVR_TASKS, OVR_SUBTOPICS } from '../../data/ovrTasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { OvrTaskAdapter } from './adapters/OvrTaskAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const OvrTrainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="ovr_trainer_progress"
      badgeText="Тренажер №29 • ЕГЭ"
      moduleCategoryText="Тема: Азот и фосфор"
      title="Решебник ОВР (Задание 29)"
      tasks={OVR_TASKS}
      subtopics={OVR_SUBTOPICS}
      maxScorePerTask={2}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <OvrTaskAdapter {...props} />}
    />
  );
};

export default OvrTrainer;
