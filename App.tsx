import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnnouncementBanner from './components/AnnouncementBanner';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import MinicursosModal from './components/MinicursosModal';
import { conteudoOriginal } from './src/conteudo';

// Lazy load non-critical sections
const Schedule = lazy(() => import('./components/Schedule'));
const ImportantDates = lazy(() => import('./components/ImportantDates'));
const AbstractSubmission = lazy(() => import('./components/AbstractSubmission'));
const PosterGuidelines = lazy(() => import('./components/PosterGuidelines'));
const Speakers = lazy(() => import('./components/Speakers'));
const Registration = lazy(() => import('./components/Registration'));
const Location = lazy(() => import('./components/Location'));

import { Mail, Instagram } from 'lucide-react';
import { ASSETS } from './src/constants';
import { Language, translations } from './src/translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [isMinicursosOpen, setIsMinicursosOpen] = useState(false);

  const handleOpenMinicursos = () => setIsMinicursosOpen(true);
  const handleCloseMinicursos = () => setIsMinicursosOpen(false);

  useEffect(() => {
    let intervalId: any;

    const scrollToHash = (hash: string) => {
      if (!hash) return;
      const cleanHash = hash.replace('#', '');
      if (!cleanHash) return;

      let attempts = 0;
      const maxAttempts = 50; // 5 seconds maximum

      if (intervalId) clearInterval(intervalId);

      intervalId = setInterval(() => {
        const element = document.getElementById(cleanHash);
        if (element) {
          clearInterval(intervalId);
          
          const topBanner = (translations[lang] as any).topBanner || { show: true };
          const headerOffset = topBanner.show ? 110 : 70; // offset for the warning banner + compact menu
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          attempts++;
          if (attempts >= maxAttempts) {
            clearInterval(intervalId);
          }
        }
      }, 100);
    };

    // Scroll on load if hash exists
    if (window.location.hash) {
      setTimeout(() => {
        scrollToHash(window.location.hash);
      }, 150);
    }

    // Listen to hash change
    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    // Intercept anchor link clicks for smooth scroll with custom offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          const hash = href;
          window.history.pushState(null, '', hash);
          scrollToHash(hash);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-emerald-50 selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* Background Gradient Layer - Fixed across the whole page */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Emerald Glow Top Right */}
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-bl from-emerald-900/40 via-emerald-950/10 to-transparent blur-[140px] opacity-70 animate-pulse" style={{ animationDuration: '15s' }} />
        
        {/* Subtle Dark Forest Glow Bottom Left */}
        <div className="absolute bottom-[-15%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tr from-emerald-900/20 via-transparent to-transparent blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header lang={lang} setLang={setLang} onOpenMinicursos={handleOpenMinicursos} />
        <main className="flex-grow">
          <Hero lang={lang} onOpenMinicursos={handleOpenMinicursos} />
          <AnnouncementBanner lang={lang} />
          <QuoteSection lang={lang} />
          <About lang={lang} />
          
          <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            <ImportantDates lang={lang} />
            <Registration lang={lang} />
            <AbstractSubmission lang={lang} />
            <PosterGuidelines lang={lang} />
            <Speakers lang={lang} />
            <Schedule lang={lang} />
            <Location lang={lang} />
          </Suspense>
          
          {/* Removed Partners & Realization Section as requested */}
        </main>
        
        <footer className="relative mt-28 w-full px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-transparent md:bg-white/[0.02] md:backdrop-blur-xl border-t-0 md:border-t md:border-white/10 md:shadow-[0_-8px_32px_0_rgba(0,0,0,0.2)] md:backdrop-saturate-150 overflow-hidden">
          {/* Liquid Sheen Overlay - Desktop only */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.03] via-transparent to-white/[0.03] pointer-events-none animate-pulse" style={{ animationDuration: '20s' }} />
          
          {/* Bottom Glow - Desktop only */}
          <div className="hidden md:block absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-12 lg:mb-5">
              {/* Left Side: Brand */}
              <div className="flex items-center gap-4">
                <img 
                  src={ASSETS.LOGOS.CBCM} 
                  alt="CBCM Logo" 
                  className="w-[70px] h-[70px] object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[14px] font-sans font-bold text-[#a6a6a6] uppercase tracking-[0.2em]">
                  CBCM <span className="text-white/20">2026</span>
                </span>
              </div>

              {/* Right Side: Links */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full lg:w-auto">
                {/* Navigation */}
                <div className="space-y-6 w-full md:w-[200px]">
                  <h4 className="text-[10px] font-sans font-black text-emerald-500 uppercase tracking-[0.3em]">Navegação</h4>
                  <ul className="space-y-[5px]">
                    {[
                      { label: translations[lang].header.about, href: '#sobre' },
                      { label: translations[lang].header.dates, href: '#datas' },
                      { label: translations[lang].header.fees, href: '#inscricoes' },
                      { label: translations[lang].header.location, href: '#local' },
                    ].map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="text-[12px] font-sans font-medium text-[#a6a6a6] hover:text-white transition-colors duration-300">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-6 w-full md:w-[200px]">
                  <h4 className="text-[10px] font-sans font-black text-emerald-500 uppercase tracking-[0.3em]">Contato</h4>
                  <ul className="space-y-[5px]">
                    <li>
                      <a 
                        href="https://www.instagram.com/cbcm2026/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 text-[12px] font-sans font-medium text-[#a6a6a6] hover:text-white transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:usp.cbcm@gmail.com" 
                        className="flex items-center gap-3 text-[12px] font-sans font-medium text-[#a6a6a6] hover:text-white transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        Email
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Address */}
                <div className="space-y-6 text-left md:text-right col-span-2 md:col-span-1">
                  <div className="text-[12px] font-sans font-medium text-[#a6a6a6] leading-relaxed space-y-1 md:mt-[60px]">
                    <p className="text-white/60">Escola de Educação Física e Esporte - USP</p>
                    <p>Av. Prof. Mello Moraes, 65 - Cidade Universitária</p>
                    <p>CEP: 05508-030 - São Paulo - SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Liquified Style */}
            <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center items-center gap-12 text-[11px] font-sans text-[#a6a6a6]">
                <span className="">© 2026 CBCM – XIII Congresso Brasileiro de Comportamento Motor. Todos os direitos reservados.</span>
              </div>
            </div>
          </div>
        </footer>
        {conteudoOriginal[lang].minicursos?.show !== false && (
          <MinicursosModal isOpen={isMinicursosOpen} onClose={handleCloseMinicursos} lang={lang} />
        )}
      </div>
    </div>
  );
};

export default App;
