import React, { useState } from 'react';
import { CarbonSiliconHeader } from './carbonSilicon/CarbonSiliconHeader';
import { CarbonSiliconSections } from './carbonSilicon/CarbonSiliconSections';
import { useRouter } from '../../../routes/router';

export const CarbonSiliconTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('general');

  const navItems = [
    { id: 'general', label: '1. Свойства элементов IV-A' },
    { id: 'allotropes', label: '2. Аллотропия C и Si' },
    { id: 'carbon-chem', label: '3. Химия углерода (C)' },
    { id: 'silicon-chem', label: '4. Химия кремния (Si)' },
    { id: 'oxides', label: '5. Оксиды CO и CO₂' },
    { id: 'carbonates', label: '6. Угольная кислота и соли' },
    { id: 'silica', label: '7. Оксид SiO₂ и силикаты' },
    { id: 'industry', label: '8. Силикатная промышленность' },
    { id: 'molecules-3d', label: '9. 3D-модели веществ' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGoToPractice = () => {
    openStudyBlock('elements-chemistry', 'elem-nonme-csi', 'practice');
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <CarbonSiliconHeader 
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <CarbonSiliconSections 
        scrollToNav={scrollToNav}
        handleGoToPractice={handleGoToPractice}
      />
    </div>
  );
};

export default CarbonSiliconTheoryView;
