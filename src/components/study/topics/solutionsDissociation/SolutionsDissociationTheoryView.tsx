import React, { useState } from 'react';
import { SolutionsDissociationHeader } from './SolutionsDissociationHeader';
import { SolutionsDissociationSections } from './SolutionsDissociationSections';
import { useRouter } from '../../../../routes/router';

export const SolutionsDissociationTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-solutions-basics');

  const navItems = [
    { id: 'section-solutions-basics', label: '8.1. Растворы и растворимость' },
    { id: 'section-concentrations', label: '8.2. Состав растворов' },
    { id: 'section-dissociation', label: '8.3. Электролитическая диссоциация' },
    { id: 'section-dissociation-hydroxides-salts', label: '8.4. Диссоциация гидроксидов и солей' },
    { id: 'section-water-ph', label: '8.5. Вода и pH' },
    { id: 'section-rio', label: '8.6. Реакции ионного обмена' },
    { id: 'section-hydrolysis', label: '8.7. Гидролиз солей' },
    { id: 'section-disperse-systems', label: '8.8. Дисперсные системы' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <SolutionsDissociationHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SolutionsDissociationSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-solutions-rio', 'practice')}
      />
    </div>
  );
};

export default SolutionsDissociationTheoryView;
