import React, { useState } from 'react';
import { SulfurOxygenHeader } from './SulfurOxygenHeader';
import { SulfurOxygenSections } from './SulfurOxygenSections';
import { useRouter } from '../../../../routes/router';

export const SulfurOxygenTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-general');

  const navItems = [
    { id: 'section-general', label: '1. Свойства элементов VI-A' },
    { id: 'section-allotropes', label: '2. Аллотропия S₈ и O₃' },
    { id: 'section-peroxide', label: '3. Пероксид H₂O₂' },
    { id: 'section-sulfides', label: '4. H₂S и сульфиды' },
    { id: 'section-oxides', label: '5. Оксиды SO₂ и SO₃' },
    { id: 'section-h2so4', label: '6. Серная кислота' },
    { id: 'section-salts', label: '7. Сульфаты и олеум' },
    { id: 'section-industry', label: '8. Контактный способ' },
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
      <SulfurOxygenHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <SulfurOxygenSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('elements-chemistry', 'elem-nonme-so', 'practice')}
      />
    </div>
  );
};

export default SulfurOxygenTheoryView;
