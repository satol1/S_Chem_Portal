import React from 'react';
import { REACTION_NP_TASKS, REACTION_NP_SUBTOPICS } from '../../data/reactionsNPTasks';
import { GenericTrainerContainer } from './GenericTrainerContainer';
import { SingleReactionTaskAdapter } from './adapters/SingleReactionTaskAdapter';

interface Props {
  onBackToCatalog?: () => void;
}

export const ReactionsTrainer: React.FC<Props> = ({ onBackToCatalog }) => {
  return (
    <GenericTrainerContainer
      storageKey="reactions_np_trainer_progress"
      badgeText="Тренажер Реакций • 48 Задач"
      moduleCategoryText="Тема: Азот и фосфор"
      title="Решебник Реакций: Азот и фосфор"
      tasks={REACTION_NP_TASKS}
      subtopics={REACTION_NP_SUBTOPICS}
      maxScorePerTask={2}
      onBackToCatalog={onBackToCatalog}
      renderTaskAdapter={(props) => <SingleReactionTaskAdapter {...props} />}
    />
  );
};

export default ReactionsTrainer;
