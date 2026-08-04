import React, { useState } from 'react';
import { HalogensHeader } from './HalogensHeader';
import { HalogensSections } from './HalogensSections';
import { useRouter } from '../../../../routes/router';

export const HalogensTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-general');

  const navItems = [
    { id: 'section-general', label: '1. Строение атомов и тенденции' },
    { id: 'section-simple', label: '2. Простые вещества X₂' },
    { id: 'section-hx', label: '3. Галогеноводороды HX' },
    { id: 'section-halides', label: '4. Галогениды и кач. реакции' },
    { id: 'section-redox', label: '5. ОВР и вытеснение галогенов' },
    { id: 'section-oxyacids', label: '6. Кислородные кислоты хлора' },
    { id: 'section-fluorine', label: '7. Особенности F, Br и I' },
    { id: 'section-industry', label: '8. Промышленный химизм' },
    { id: 'section-molecules-3d', label: '9. 3D-модели веществ' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <HalogensHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HalogensSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('elements-chemistry', 'elem-nonme-halogens', 'practice')}
      />
    </div>
  );
};

export default HalogensTheoryView;
