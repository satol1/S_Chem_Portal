import React, { useState } from 'react';
import { ReactionRegularitiesHeader } from './ReactionRegularitiesHeader';
import { ReactionRegularitiesSections } from './ReactionRegularitiesSections';
import { useRouter } from '../../../../routes/router';

export const ReactionRegularitiesTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-energetics');

  const navItems = [
    { id: 'section-energetics', label: '7.1. Энергетика реакций' },
    { id: 'section-kinetics-catalysis', label: '7.2. Кинетика и катализ' },
    { id: 'section-equilibrium', label: '7.3. Химическое равновесие' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <ReactionRegularitiesHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ReactionRegularitiesSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-kinetics-equilibrium', 'practice')}
      />
    </div>
  );
};

export default ReactionRegularitiesTheoryView;
