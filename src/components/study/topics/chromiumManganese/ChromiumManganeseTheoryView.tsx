import React, { useState } from 'react';
import { useRouter } from '../../../../routes/router';
import { ChromiumManganeseHeader } from './ChromiumManganeseHeader';
import { ChromiumManganeseSections } from './ChromiumManganeseSections';

export const ChromiumManganeseTheoryView: React.FC = () => {
  const { openStudyBlock } = useRouter();
  const [activeSection, setActiveSection] = useState<string>('section-general');

  const navItems = [
    { id: 'section-general', label: '1. Положение в ПСХО и строение атомов' },
    { id: 'section-simple', label: '2. Простые вещества: Cr и Mn' },
    { id: 'section-cr-compounds', label: '3. Соединения Cr(+2) и Cr(+3)' },
    { id: 'section-chromates', label: '4. Хром(+6): хроматы и дихроматы' },
    { id: 'section-mn-compounds', label: '5. Соединения Mn(+2) и Mn(+4)' },
    { id: 'section-permanganates', label: '6. Манганаты и перманганаты' },
    { id: 'section-genesis', label: '7. Природа и промышленное получение' },
    { id: 'section-molecules-3d', label: '8. 3D-модели веществ' },
  ];

  const scrollToNav = () => {
    const el = document.getElementById('nav-toc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">
      <ChromiumManganeseHeader
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ChromiumManganeseSections
        scrollToNav={scrollToNav}
        handleGoToPractice={() => openStudyBlock('elements-chemistry', 'elem-me-cr-mn', 'practice')}
      />
    </div>
  );
};

export default ChromiumManganeseTheoryView;
