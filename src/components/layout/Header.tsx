import React, { useState } from 'react';
import { Menu, X, Phone, Send } from 'lucide-react';
import { CONTACTS } from '../../data/contacts';
import { useRouter } from '../../routes/router';
import { getAssetUrl } from '../../utils/assets';

interface Props {
  onOpenModal: () => void;
  onOpenTrainers?: () => void;
  onOpenSkillMap?: () => void;
  onGoHome?: () => void;
}

export const Header: React.FC<Props> = ({ onOpenModal }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { match, goHome, navigate } = useRouter();

  const handleSectionClick = (sectionHash: string) => {
    setMobileOpen(false);
    if (match.route !== 'home') {
      navigate(`/${sectionHash}`);
    } else {
      const el = document.getElementById(sectionHash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button onClick={goHome} className="flex items-center gap-3 shrink-0 text-left">
          <img
            src={getAssetUrl('images/logo.png')}
            alt={CONTACTS.schoolName}
            className="w-10 h-10 rounded-full border border-slate-200 object-cover shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm font-extrabold text-slate-900 tracking-tight leading-tight whitespace-nowrap">
              {CONTACTS.schoolName}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">
              {CONTACTS.shortAddress}
            </span>
          </div>
        </button>

        {/* Central Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-bold text-slate-700 whitespace-nowrap">
          <button onClick={() => handleSectionClick('#teachers')} className="hover:text-amber-600 transition">Преподаватели</button>
          <button onClick={() => handleSectionClick('#why-us')} className="hover:text-amber-600 transition">Почему мы</button>
          <button onClick={() => handleSectionClick('#3d-lab')} className="hover:text-amber-600 transition">3D-Молекулы</button>
          <button onClick={() => handleSectionClick('#courses')} className="hover:text-amber-600 transition">Курсы и цены</button>
          <button onClick={() => handleSectionClick('#location')} className="hover:text-amber-600 transition">Контакты</button>
        </nav>

        {/* Right Action Block */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition text-xs font-bold whitespace-nowrap"
            title={`Telegram: ${CONTACTS.telegram}`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>{CONTACTS.telegram}</span>
          </a>

          <a
            href={`tel:${CONTACTS.phoneRaw}`}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{CONTACTS.phone}</span>
          </a>

          <button
            onClick={onOpenModal}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition whitespace-nowrap"
          >
            Записаться
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition shrink-0"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-fade-in">
          <button onClick={() => handleSectionClick('#teachers')} className="block text-xs font-bold text-slate-800 py-1 w-full text-left">Преподаватели</button>
          <button onClick={() => handleSectionClick('#why-us')} className="block text-xs font-bold text-slate-800 py-1 w-full text-left">Почему мы</button>
          <button onClick={() => handleSectionClick('#3d-lab')} className="block text-xs font-bold text-slate-800 py-1 w-full text-left">3D-Молекулы</button>
          <button onClick={() => handleSectionClick('#courses')} className="block text-xs font-bold text-slate-800 py-1 w-full text-left">Курсы и цены</button>
          <button onClick={() => handleSectionClick('#location')} className="block text-xs font-bold text-slate-800 py-1 w-full text-left">Контакты и проезд</button>
          
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a href={`tel:${CONTACTS.phoneRaw}`} className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>{CONTACTS.phone}</span>
            </a>
            <a href={CONTACTS.telegramUrl} target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-600 flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Telegram: {CONTACTS.telegram}</span>
            </a>
          </div>

          <button
            onClick={() => { setMobileOpen(false); onOpenModal(); }}
            className="w-full py-3 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-sm mt-2"
          >
            Записаться на занятие
          </button>
        </div>
      )}
    </header>
  );
};

