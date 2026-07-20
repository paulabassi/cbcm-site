import React, { useEffect, useRef, useState } from 'react';
import { Language, translations } from '../src/translations';



const Registration: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].registration;
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          ctaObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    return () => {
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="inscricoes" 
      className="py-20 md:py-32 px-6 md:px-12 bg-[#2b783f] relative overflow-hidden scroll-mt-0"
      style={isDesktop ? {
        backgroundImage: 'url(/images/decor/bg-2.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {
        backgroundImage: 'url(/images/decor/bg-1.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(16,185,129,0.02)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      {/* Smooth transition to the next section (Abstract Submission bg #050505) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
      
      <div className="max-w-[1440px] mx-auto relative z-10 flex justify-center">
        {/* Registration CTA - HIGH VISIBILITY UPGRADE */}
        <div 
          ref={ctaRef}
          className="relative group w-full max-w-2xl md:max-w-[1200px]"
          style={{
            opacity: isCtaVisible ? 1 : 0,
            transform: isCtaVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
          }}
        >
          {/* Card with sleek glassmorphism background (like the nav bar on mobile, direct on background on desktop) */}
         {/* Card with sleek glassmorphism background */}
<div className="relative p-0 mx-auto w-full md:w-[1200px] min-h-[350px] bg-transparent backdrop-blur-none border-none rounded-none shadow-none transition-all duration-500 overflow-visible flex flex-col items-center justify-center gap-12 group">

  <div className="relative z-10 flex flex-col items-center text-center w-full md:max-w-[800px] mx-auto">
    <h2 className="font-display font-black text-3xl md:text-[44px] leading-[1.1] text-white tracking-tight mb-6">
      {lang === 'pt' ? 'Vagas Esgotadas' : 'Sold Out'}
    </h2>

    <div className="space-y-3 text-[#f2f8f3] text-sm md:text-base font-sans font-medium">
      <p className="text-[#f2f8f3] text-sm md:text-base">
        {lang === 'pt'
          ? 'As inscrições para o XIII CBCM estão encerradas.'
          : 'Registrations for the XIII CBCM are now closed.'}
      </p>

      <p className="text-[#f2f8f3]/85 text-sm md:text-base">
        {lang === 'pt'
          ? 'Agradecemos o interesse de todos e nos vemos no evento!'
          : 'Thank you for your interest and we look forward to seeing you at the event!'}
      </p>

      <div className="pt-4 mt-6 border-t border-white/20">
        <h3 className="text-white font-bold text-base md:text-lg mb-2">
          {lang === 'pt'
            ? 'Política de cancelamento e reembolso'
            : 'Cancellation and Refund Policy'}
        </h3>

        <p className="text-[#f2f8f3]/85 text-sm md:text-base">
          {lang === 'pt'
            ? 'Informamos que, salvo situações excepcionais devidamente justificadas e analisadas pela Comissão Organizadora, não serão realizados reembolsos em casos de desistência da participação no XIII Congresso Brasileiro de Comportamento Motor (CBCM).'
            : 'Please note that, except in exceptional circumstances duly justified and reviewed by the Organizing Committee, no refunds will be issued in cases of withdrawal from participation in the XIII Brazilian Congress of Motor Behavior (CBCM).'}
        </p>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
