import React, { useState } from 'react';
import { ChemicalBondHeader } from './ChemicalBondHeader';
import { ChemicalBondSections } from './ChemicalBondSections';
import { useRouter } from '../../../../routes/router';

export const ChemicalBondTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-valence-oxidation');

  const navItems = [
    { id: 'section-valence-oxidation', label: '3.1. Валентность и степень окисления' },
    { id: 'section-covalent', label: '3.2. Ковалентная связь. Пространственное строение молекул' },
    { id: 'section-ionic-metallic', label: '3.3. Ионная и металлическая связь' },
    { id: 'section-intermolecular', label: '3.4. Межмолекулярное взаимодействие' },
    { id: 'section-crystal-lattices', label: '3.5. Типы кристаллических решёток' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <ChemicalBondHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ChemicalBondSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-chem-bond', 'practice')}
      />
    </div>
  );
};

export default ChemicalBondTheoryView;
