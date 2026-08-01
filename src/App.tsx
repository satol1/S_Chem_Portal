import React, { useState } from 'react';
import { UserProgressProvider } from './context/UserProgressContext';
import { RouterProvider, useRouter } from './routes/router';

import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Teachers } from './components/sections/Teachers';
import { WhyUsComparison } from './components/sections/WhyUsComparison';
import { InteractiveLab } from './components/sections/InteractiveLab';
import { TrainersCatalogPage } from './components/trainers/TrainersCatalogPage';
import { OvrTrainer } from './components/trainers/OvrTrainer';
import { Inorganic31Trainer } from './components/trainers/Inorganic31Trainer';
import { ReactionsTrainer } from './components/trainers/ReactionsTrainer';
import { NitrogenPhosphorusTestTrainer } from './components/trainers/NitrogenPhosphorusTestTrainer';
import { SkillMapPage } from './components/skillMap/SkillMapPage';
import { PeriodicTablePage } from './components/periodicTable/PeriodicTablePage';
import { Courses } from './components/sections/Courses';
import { LocationContacts } from './components/sections/LocationContacts';
import { FuturePortal } from './components/sections/FuturePortal';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { EnrollmentModal } from './components/sections/EnrollmentModal';

import { StudyBlocksListPage } from './components/study/StudyBlocksListPage';
import { StudyBlockDetailPage } from './components/study/StudyBlockDetailPage';
import { StudyTopicTheoryPage } from './components/study/StudyTopicTheoryPage';
import { StudyTopicPracticePage } from './components/study/StudyTopicPracticePage';

const AppContent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const { match, openTrainersCatalog } = useRouter();

  const handleOpenModal = (courseTitle?: string) => {
    setSelectedCourse(courseTitle);
    setModalOpen(true);
  };

  const renderStudyRoute = () => {
    const { blockId, topicId, studyMode } = match;

    if (studyMode === 'practice' && blockId && topicId) {
      return <StudyTopicPracticePage blockId={blockId} topicId={topicId} />;
    }

    if (studyMode === 'theory' && blockId && topicId) {
      return <StudyTopicTheoryPage blockId={blockId} topicId={topicId} />;
    }

    if (studyMode === 'block' && blockId) {
      return <StudyBlockDetailPage blockId={blockId} />;
    }

    return <StudyBlocksListPage />;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-body selection:bg-amber-400 selection:text-slate-950">
      <Header onOpenModal={() => handleOpenModal()} />

      <main className="flex-grow">
        {match.route === 'periodic-table' ? (
          <PeriodicTablePage />
        ) : match.route === 'skill-map' ? (
          <SkillMapPage initialSkillId={match.skillId} />
        ) : match.route === 'trainers-catalog' ? (
          <TrainersCatalogPage />
        ) : match.route === 'ovr-trainer' ? (
          <div className="bg-slate-50 min-h-screen py-6">
            <OvrTrainer onBackToCatalog={openTrainersCatalog} />
          </div>
        ) : match.route === 'inorg-31-trainer' ? (
          <div className="bg-slate-50 min-h-screen py-6">
            <Inorganic31Trainer onBackToCatalog={openTrainersCatalog} />
          </div>
        ) : match.route === 'reactions-np-trainer' ? (
          <div className="bg-slate-50 min-h-screen py-6">
            <ReactionsTrainer onBackToCatalog={openTrainersCatalog} />
          </div>
        ) : match.route === 'np-test-14-1-trainer' ? (
          <div className="bg-slate-50 min-h-screen py-6">
            <NitrogenPhosphorusTestTrainer onBackToCatalog={openTrainersCatalog} />
          </div>
        ) : match.route === 'study-blocks' ? (
          renderStudyRoute()
        ) : (
          <>
            <Hero onOpenModal={() => handleOpenModal()} />
            <Teachers />
            <WhyUsComparison />
            <InteractiveLab />
            <Courses onOpenModal={(c) => handleOpenModal(c)} />
            <LocationContacts />
            <FuturePortal />
            <Testimonials />
            <FAQ />
          </>
        )}
      </main>

      <Footer />
      <EnrollmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse={selectedCourse}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <UserProgressProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </UserProgressProvider>
  );
};

export default App;
