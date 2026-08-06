import React, { useState } from 'react';
import { GeneralBasicsHeader } from './GeneralBasicsHeader';
import { GeneralBasicsSections } from './GeneralBasicsSections';
import { useRouter } from '../../../../routes/router';

export const GeneralBasicsTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-substances');

  const navItems = [
    { id: 'section-substances', label: '1.1. Вещества и смеси' },
    { id: 'section-phenomena', label: '1.2. Физические и химические явления' },
    { id: 'section-conservation', label: '1.3. Закон сохранения массы' },
    { id: 'section-atoms-elements', label: '1.4. Атомы. Химические элементы' },
    { id: 'section-molecules-theory', label: '1.5. Атомно-молекулярная теория' },
    { id: 'section-composition-laws', label: '1.6. Постоянство состава. Кратные отношения' },
    { id: 'section-avogadro', label: '1.7. Объёмные отношения. Закон Авогадро' },
    { id: 'section-simple-complex', label: '1.8. Простые и сложные вещества' },
    { id: 'section-mole', label: '1.9. Моль и молярная масса' },
    { id: 'section-gas-laws', label: '1.10. Газовые законы' },
    { id: 'section-equivalents', label: '1.11. Эквивалент. Закон эквивалентов' },
    { id: 'section-molecules-3d', label: '1.12. Молекулы в 3D' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <GeneralBasicsHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <GeneralBasicsSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-basics-laws', 'practice')}
      />
    </div>
  );
};

export default GeneralBasicsTheoryView;
