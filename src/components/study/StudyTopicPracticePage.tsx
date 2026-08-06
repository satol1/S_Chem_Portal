import React, { useState } from 'react';
import { 
  BookOpen, CheckCircle2, Zap, FlaskConical, 
  Atom, BookCheck, Sparkles, ArrowRight 
} from 'lucide-react';
import { STUDY_BLOCKS } from '../../data/studyBlocksData';
import { TRAINERS_REGISTRY } from '../../data/trainersRegistry';
import type { TrainerMeta } from '../../data/trainersRegistry';
import { useRouter } from '../../routes/router';
import { StudyBreadcrumbs } from './StudyBreadcrumbs';

import { OvrTrainer } from '../trainers/OvrTrainer';
import { Inorganic31Trainer } from '../trainers/Inorganic31Trainer';
import { ReactionsTrainer } from '../trainers/ReactionsTrainer';
import { NitrogenPhosphorusTestTrainer } from '../trainers/NitrogenPhosphorusTestTrainer';
import { GeneralBasicsTestTrainer } from '../trainers/GeneralBasicsTestTrainer';
import { ReactionClassificationTestTrainer } from '../trainers/ReactionClassificationTestTrainer';

interface Props {
  blockId: string;
  topicId: string;
}

export const StudyTopicPracticePage: React.FC<Props> = ({ blockId, topicId }) => {
  const { openStudyBlock } = useRouter();

  const block = STUDY_BLOCKS.find(b => b.id === blockId);
  const topic = block?.topics.find(t => t.id === topicId);

  // Get array of trainer IDs (fallback to topic.trainerId if set)
  const trainerIds = topic?.trainerIds || (topic?.trainerId ? [topic.trainerId] : []);
  const availableTrainers: TrainerMeta[] = trainerIds
    .map(id => TRAINERS_REGISTRY[id])
    .filter(Boolean);

  const [selectedTrainerId, setSelectedTrainerId] = useState<string>(
    availableTrainers[0]?.id || ''
  );

  if (!block || !topic) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Тема не найдена</h2>
        <button
          onClick={() => openStudyBlock(blockId)}
          className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
        >
          Вернуться к разделу
        </button>
      </div>
    );
  }

  const renderTrainerComponent = (trainerId: string) => {
    switch (trainerId) {
      case 'ovr-29':
        return <OvrTrainer onBackToCatalog={() => openStudyBlock(block.id, topic.id, 'theory')} />;
      case 'inorg-31-np':
        return <Inorganic31Trainer onBackToCatalog={() => openStudyBlock(block.id, topic.id, 'theory')} />;
      case 'reactions-np':
        return <ReactionsTrainer onBackToCatalog={() => openStudyBlock(block.id, topic.id, 'theory')} />;
      case 'np-test-14-1':
        return <NitrogenPhosphorusTestTrainer onBackToCatalog={() => openStudyBlock(block.id, topic.id, 'theory')} />;
      case 'gb-test-01':
        return <GeneralBasicsTestTrainer onBackToCatalog={() => openStudyBlock(block.id, topic.id, 'theory')} />;
      case 'rc-test-01':
        return <ReactionClassificationTestTrainer onBackToCatalog={() => openStudyBlock(block.id, topic.id, 'theory')} />;
      default:
        return (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">Практикум {topic.code}: {topic.title}</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Интерактивный практикум по этой теме готовится к запуску.
            </p>
            <button
              onClick={() => openStudyBlock(block.id, topic.id, 'theory')}
              className="px-5 py-2.5 bg-slate-900 text-white text-xs font-extrabold rounded-xl shadow flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Читать теорию этой темы</span>
            </button>
          </div>
        );
    }
  };

  const renderIcon = (iconName: string, className: string = "w-4 h-4") => {
    switch (iconName) {
      case 'Zap': return <Zap className={className} />;
      case 'FlaskConical': return <FlaskConical className={className} />;
      case 'Atom': return <Atom className={className} />;
      case 'BookCheck': return <BookCheck className={className} />;
      default: return <Zap className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 font-body text-slate-900">
      {/* Full width container matching main site pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumbs Navigation */}
        <StudyBreadcrumbs
          items={[
            { label: block.title, onClick: () => openStudyBlock(block.id) },
            { label: topic.title, onClick: () => openStudyBlock(block.id, topic.id, 'theory') },
            { label: 'Практика и тренажеры', active: true }
          ]}
        />

        {/* Academic Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-900 text-amber-400">
                {topic.code}
              </span>
              <span className="text-xs font-bold text-slate-500">{block.title}</span>
              <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Доступно тренажеров: {availableTrainers.length}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Практический модуль: {topic.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Выберите нужный интерактивный тренажер для отработки темы на практике.
            </p>
          </div>

          <button
            onClick={() => openStudyBlock(block.id, topic.id, 'theory')}
            className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition flex items-center gap-2 shrink-0 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Читать теорию этой темы</span>
          </button>
        </div>

        {/* Multiple Trainer Selector Tabs (If 2 or more trainers linked) */}
        {availableTrainers.length > 0 && (
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Выберите тренажер по теме ({availableTrainers.length}):</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {availableTrainers.map((t) => {
                const isSelected = t.id === selectedTrainerId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTrainerId(t.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-slate-900 text-white border-amber-500 ring-2 ring-amber-500/20 shadow-lg scale-[1.01]'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`p-2 rounded-xl shrink-0 ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 text-slate-700'}`}>
                          {renderIcon(t.iconName, "w-4 h-4")}
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-slate-800 text-amber-300' : 'bg-slate-200 text-slate-600'}`}>
                          {t.badge}
                        </span>
                      </div>

                      <h4 className={`text-sm font-extrabold leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {t.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                        {t.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-bold">
                      <span className={isSelected ? 'text-amber-400' : 'text-amber-700'}>
                        {isSelected ? '● Активен' : 'Запустить'}
                      </span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Trainer Component Render (Full Width max-w-7xl) */}
        <div className="w-full">
          {renderTrainerComponent(selectedTrainerId)}
        </div>

      </div>
    </div>
  );
};

export default StudyTopicPracticePage;
