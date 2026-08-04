import React, { useState } from 'react';
import { ReactionClassificationHeader } from './ReactionClassificationHeader';
import { ReactionClassificationSections } from './ReactionClassificationSections';
import { useRouter } from '../../../../routes/router';

export const ReactionClassificationTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-general-concepts');

  const navItems = [
    { id: 'section-general-concepts', label: '5.1. Общие сведения' },
    { id: 'section-by-number', label: '5.2. Классификация по числу реагентов и продуктов и их состава' },
    { id: 'section-by-phase', label: '5.3. Классификация по агрегатному состоянию' },
    { id: 'section-by-transfer', label: '5.4. Классификация по типу переносимых частиц' },
    { id: 'section-reversibility', label: '5.5. Обратимые и необратимые реакции' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <ReactionClassificationHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ReactionClassificationSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-reaction-classification', 'practice')}
      />
    </div>
  );
};

export default ReactionClassificationTheoryView;
