import React, { useState } from 'react';
import { AtomStructureHeader } from './AtomStructureHeader';
import { AtomStructureSections } from './AtomStructureSections';
import { useRouter } from '../../../../routes/router';

export const AtomStructureTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-atom-models');

  const navItems = [
    { id: 'section-atom-models', label: '2.1. Модели строения атома' },
    { id: 'section-quantum-numbers', label: '2.2. Квантовые числа' },
    { id: 'section-electron-configs', label: '2.3. Электронные конфигурации' },
    { id: 'section-nucleus-radioactivity', label: '2.4. Ядро и радиоактивность' },
    { id: 'section-periodic-law', label: '2.5. Периодический закон' },
    { id: 'section-periodic-trends', label: '2.6. Закономерности периодической системы' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <AtomStructureHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <AtomStructureSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-atom-structure', 'practice')}
      />
    </div>
  );
};

export default AtomStructureTheoryView;
