import React, { useState } from 'react';
import { RedoxReactionsHeader } from './RedoxReactionsHeader';
import { RedoxReactionsSections } from './RedoxReactionsSections';
import { useRouter } from '../../../../routes/router';

export const RedoxReactionsTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-redox-concepts');

  const navItems = [
    { id: 'section-redox-concepts', label: '6.1. Общие понятия' },
    { id: 'section-oxidizers-reducers', label: '6.2. Окислители и восстановители' },
    { id: 'section-redox-equations', label: '6.3. Составление уравнений ОВР' },
    { id: 'section-electrolysis', label: '6.4. Электролиз' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <RedoxReactionsHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <RedoxReactionsSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-ovr-basics', 'practice')}
      />
    </div>
  );
};

export default RedoxReactionsTheoryView;
