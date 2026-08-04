import React, { useState, useEffect, Suspense } from 'react';
import { UserProgressProvider } from './context/UserProgressContext';
import { RouterProvider, useRouter } from './routes/router';

import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Teachers } from './components/sections/Teachers';
import { WhyUsComparison } from './components/sections/WhyUsComparison';
import { Courses } from './components/sections/Courses';
import { LocationContacts } from './components/sections/LocationContacts';
import { FuturePortal } from './components/sections/FuturePortal';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { EnrollmentModal } from './components/sections/EnrollmentModal';

// Dynamic loader functions for background prefetching
const loadInteractiveLab = () => import('./components/sections/InteractiveLab');
const loadPeriodicTablePage = () => import('./components/periodicTable/PeriodicTablePage');
const loadSkillMapPage = () => import('./components/skillMap/SkillMapPage');
const loadTrainersCatalogPage = () => import('./components/trainers/TrainersCatalogPage');
const loadStudyBlocksListPage = () => import('./components/study/StudyBlocksListPage');

// Dynamic lazy imports for heavy route pages and 3D modules
const InteractiveLab = React.lazy(() => loadInteractiveLab().then(m => ({ default: m.InteractiveLab })));
const PeriodicTablePage = React.lazy(() => loadPeriodicTablePage().then(m => ({ default: m.PeriodicTablePage })));
const SkillMapPage = React.lazy(() => loadSkillMapPage().then(m => ({ default: m.SkillMapPage })));
const TrainersCatalogPage = React.lazy(() => loadTrainersCatalogPage().then(m => ({ default: m.TrainersCatalogPage })));
const OvrTrainer = React.lazy(() => import('./components/trainers/OvrTrainer').then(m => ({ default: m.OvrTrainer })));
const Inorganic31Trainer = React.lazy(() => import('./components/trainers/Inorganic31Trainer').then(m => ({ default: m.Inorganic31Trainer })));
const ReactionsTrainer = React.lazy(() => import('./components/trainers/ReactionsTrainer').then(m => ({ default: m.ReactionsTrainer })));
const NitrogenPhosphorusTestTrainer = React.lazy(() => import('./components/trainers/NitrogenPhosphorusTestTrainer').then(m => ({ default: m.NitrogenPhosphorusTestTrainer })));

const StudyBlocksListPage = React.lazy(() => loadStudyBlocksListPage().then(m => ({ default: m.StudyBlocksListPage })));
const StudyBlockDetailPage = React.lazy(() => import('./components/study/StudyBlockDetailPage').then(m => ({ default: m.StudyBlockDetailPage })));
const StudyTopicTheoryPage = React.lazy(() => import('./components/study/StudyTopicTheoryPage').then(m => ({ default: m.StudyTopicTheoryPage })));
const StudyTopicPracticePage = React.lazy(() => import('./components/study/StudyTopicPracticePage').then(m => ({ default: m.StudyTopicPracticePage })));

const ComponentSpinner: React.FC = () => (
  <div className="py-16 flex flex-col items-center justify-center min-h-[40vh] text-center">
    <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-3" />
    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">
      Загрузка модуля...
    </span>
  </div>
);

const AppContent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  const { match, openTrainersCatalog } = useRouter();

  // Background preloading during browser idle time
  useEffect(() => {
    const timer = setTimeout(() => {
      const runPreload = () => {
        loadTrainersCatalogPage();
        loadStudyBlocksListPage();
        loadPeriodicTablePage();
        loadSkillMapPage();
      };

      if ('requestIdleCallback' in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(runPreload);
      } else {
        runPreload();
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
        <Suspense fallback={<ComponentSpinner />}>
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
        </Suspense>
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
