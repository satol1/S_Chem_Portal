import React, { useState } from 'react';
import { ReactionClassificationHeader } from './ReactionClassificationHeader';
import { ReactionClassificationSections } from './ReactionClassificationSections';
import { useRouter } from '../../../../routes/router';

export const ReactionClassificationTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-general-concepts');

  const navItems = [
    { id: 'section-general-concepts', label: '5.1. Общие сведения и признаки реакций' },
    { id: 'section-by-number', label: '5.2. По числу и составу реагентов и продуктов' },
    { id: 'section-by-phase', label: '5.3. По агрегатному состоянию (фазовый состав)' },
    { id: 'section-by-transfer', label: '5.4. По типу переносимых частиц (электроны, протоны)' },
    { id: 'section-thermal-effects', label: '5.5. По тепловому эффекту (экзо- и эндотермические)' },
    { id: 'section-reversibility', label: '5.6. Обратимые и необратимые реакции' },
    { id: 'section-catalysis', label: '5.7. Каталитические и некаталитические процессы' },
    { id: 'section-mechanisms', label: '5.8. По механизму протекания (радикальные и ионные)' },
    { id: 'section-molecules-3d', label: '5.9. 3D-модели участников химических реакций' },
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
