
import React, { useState, useEffect } from 'react';
import { ASSETS } from '../src/constants';
import { Language, translations } from '../src/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang].header;

  const menuItems = [
    { label: t.about, href: '#sobre' },
    { label: t.dates, href: '#datas' },
    { label: t.awards, href: '#premiacao' },
    { label: t.fees, href: '#inscricoes' },
    { label: t.posters, href: '#posters' },
    { label: t.speakers, href: '#palestrantes' },
    { label: t.schedule, href: '#programacao' },
    { label: t.location, href: '#local' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Warning Banner */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-red-950/80 backdrop-blur-md py-1.5 md:py-2 flex items-center justify-center border-b border-red-500/20">
        <div className="flex items-center gap-3 px-4">
          <span className="font-display font-black text-[10px] md:text-xs text-red-400 uppercase tracking-[0.2em]">
            {translations[lang].hero.soldOut}
          </span>
        </div>
      </div>

      <header className={`fixed top-10 md:top-12 left-0 w-full z-50 flex justify-center px-4 md:px-0 transition-all duration-500 ${scrolled ? 'translate-y-[-5px]' : ''}`}>
        {/* Compact centralized pill menu */}
        <div className={`w-fit max-w-[95%] bg-white/[0.03] backdrop-blur-xl border border-white/20 rounded-full px-4 md:px-8 py-2 md:py-2.5 flex justify-between items-center gap-6 md:gap-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-saturate-150 relative overflow-hidden transition-all duration-500 mt-[20px] md:mt-0 lg:mt-[20px] ${scrolled ? 'border-emerald-500/40 bg-emerald-500/[0.05] shadow-emerald-500/10' : ''}`}>
          
          {/* Liquid Sheen Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-white/5 pointer-events-none" />
          
          {/* Logo Section */}
          <div className="flex items-center relative z-10 shrink-0">
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src={ASSETS.LOGOS.CBCM} 
                alt="CBCM Logo" 
                className="h-6 md:h-7 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <span className="font-display font-black text-base md:text-lg tracking-tighter text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">XIII CBCM</span>
            </a>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 relative z-10">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[10px] uppercase tracking-[0.12em] font-bold text-white/60 hover:text-emerald-400 transition-all duration-300 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 relative z-10 shrink-0">
            {/* Instagram Icon Button - Desktop Only */}
            <a 
              href="https://www.instagram.com/cbcm2026/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center w-[26px] h-[26px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 active:scale-95 rounded-full transition-all duration-300 group shadow-[0_4px_12px_rgba(238,42,123,0.3)] relative overflow-hidden"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="relative z-10"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Language Switcher - Visible on Mobile and Desktop */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
              <button 
                onClick={() => setLang('pt')}
                className={`px-2 py-1 text-[8px] font-black uppercase tracking-tighter rounded-full transition-all ${lang === 'pt' ? 'bg-emerald-500 text-white' : 'text-white/40 hover:text-white'}`}
              >
                PT
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-[8px] font-black uppercase tracking-tighter rounded-full transition-all ${lang === 'en' ? 'bg-emerald-500 text-white' : 'text-white/40 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <div 
                className="h-[26px] flex items-center px-5 bg-zinc-700 text-zinc-400 font-display font-black uppercase tracking-widest text-[8px] rounded-full whitespace-nowrap border border-zinc-600 shadow-lg cursor-default"
              >
                {translations[lang].hero.soldOut}
              </div>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white/70 hover:text-emerald-400 p-2 transition-colors relative z-[60]"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

          {/* Subtle Bottom Glow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <nav className={`absolute right-0 top-0 h-full w-[80%] max-w-[300px] bg-white/[0.03] backdrop-blur-2xl border-l border-white/10 flex flex-col pt-16 px-10 gap-4 transition-transform duration-500 overflow-y-auto custom-scrollbar ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-1">
            <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-500 font-black">Navegação</p>
          </div>
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-display font-black text-white hover:text-emerald-400 transition-colors uppercase tracking-tighter"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 pb-8 flex flex-col gap-3">
            <div 
              className="w-full py-3 bg-zinc-700 text-zinc-400 text-center font-display font-black uppercase tracking-widest text-xs rounded-xl border border-zinc-600 cursor-default"
            >
              {translations[lang].hero.soldOut}
            </div>

            {/* Mobile Instagram Button */}
            <a 
              href="https://www.instagram.com/cbcm2026/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center gap-3 font-display font-black uppercase tracking-widest text-xs rounded-xl shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
