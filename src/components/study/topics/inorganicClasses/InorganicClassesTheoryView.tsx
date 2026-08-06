import React, { useState } from 'react';
import { InorganicClassesHeader } from './InorganicClassesHeader';
import { InorganicClassesSections } from './InorganicClassesSections';
import { useRouter } from '../../../../routes/router';

export const InorganicClassesTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-oxides');

  const navItems = [
    { id: 'section-oxides', label: '4.1. Оксиды: классификация, свойства и способы получения' },
    { id: 'section-bases', label: '4.2. Основания: классификация, свойства и способы получения' },
    { id: 'section-acids', label: '4.3. Кислоты: классификация, свойства и способы получения' },
    { id: 'section-amphoteric', label: '4.4. Амфотерные гидроксиды: классификация, свойства и способы получения' },
    { id: 'section-salts', label: '4.5. Соли: классификация, свойства и способы получения' },
    { id: 'section-genetic-link', label: '4.6. Генетическая связь между классами' },
    { id: 'section-preparation', label: '4.7. Сводная таблица способов получения' },
    { id: 'section-molecules-3d', label: '4.8. 3D-модели ключевых соединений' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <InorganicClassesHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <InorganicClassesSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('general-chemistry', 'gen-inorg-classes', 'practice')}
      />
    </div>
  );
};

export default InorganicClassesTheoryView;
