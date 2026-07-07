
import React, { useRef, useEffect, useState } from 'react';
import { ASSETS } from '../src/constants';
import { Trophy, FileText, UserPlus, Calendar, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../src/translations';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const bgRef = useRef<HTMLImageElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const labels = lang === 'pt' ? {
    days: 'Dias',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos'
  } : {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  };

  useEffect(() => {
    // Event starts on July 22, 2026, at 09:00:00
    const targetDate = new Date('2026-07-22T09:00:00');

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Disable parallax on mobile
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative position from center (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frameId: number;
    const animate = () => {
      // Smooth interpolation (lerp)
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.05;

      if (bgRef.current) {
        // Move in opposite direction, max 15px
        const moveX = -currentPos.current.x * 15;
        const moveY = -currentPos.current.y * 15;
        bgRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="inicio" className="relative w-full min-h-screen md:min-h-[105vh] flex flex-col justify-start px-6 md:px-12 pt-24 md:pt-32 pb-24 md:pb-32 bg-black scroll-mt-0">
      <div className="max-w-[1440px] mx-auto w-full relative flex flex-col z-20">
        
        {/* Main Content Section - Centralized assembly */}
        <div className="relative z-30 flex-grow flex flex-col justify-center items-center py-8 translate-y-4 md:translate-y-6">
          
          <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_0.2s_forwards] flex flex-col md:flex-row items-center gap-8 md:gap-14">
            
            {/* Logo */}
            <img 
              src={ASSETS.LOGOS.CBCM} 
              alt="CBCM Logo" 
              fetchPriority="high"
              decoding="async"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] -mt-[20px] md:mt-0 object-contain flex-shrink-0 drop-shadow-[0_0_20px_rgba(94,170,117,0.3)]"
            />
            
            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:min-w-max">
              <h1 className="mb-4">
                {/* Desktop Title */}
                <div className="hidden md:block">
                  <span className="font-display font-extrabold text-[20px] lg:text-[40px] leading-[1.1] tracking-tighter text-white block mb-2 whitespace-nowrap">
                    {t.title}
                  </span>
                  <span className="font-display font-extrabold text-[20px] lg:text-[40px] leading-[1.1] tracking-tighter block text-emerald-400 whitespace-nowrap">
                    {t.titleMain}
                  </span>
                </div>
                
                {/* Mobile Title */}
                <div className="md:hidden mt-2">
                  {lang === 'pt' ? (
                    <>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-white block">
                        XIII CONGRESSO
                      </span>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-white block mb-1">
                        BRASILEIRO DE 
                      </span>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-emerald-400 block">
                        COMPORTAMENTO
                      </span>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-emerald-400 block">
                        MOTOR
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-white block">
                        XIII BRAZILIAN
                      </span>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-white block mb-1">
                        CONGRESS ON
                      </span>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-emerald-400 block">
                        MOTOR
                      </span>
                      <span className="font-display font-extrabold text-[26px] sm:text-[32px] leading-[1.1] tracking-tighter text-emerald-400 block">
                        BEHAVIOR
                      </span>
                    </>
                  )}
                </div>
              </h1>
              
              <h2 className="font-serif-distinct text-[12px] lg:text-[20px] text-[#FEFEFE] block mb-8 max-w-2xl">
                {t.subtitle}
              </h2>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="font-display font-bold text-[12px] lg:text-[14px] tracking-[0.25em] text-white/50 block uppercase">
                  {t.date}
                </div>
              </div>

            </div>
          </div>

          <div className="mt-16 opacity-0 animate-[fadeIn_1.5s_ease-out_0.4s_forwards] flex items-center justify-center gap-1.5 sm:gap-5 w-full">
            {/* DAYS */}
            <div className="flex flex-col items-center justify-center w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.06] group flex-shrink-0">
              <span className="font-mono-distinct text-lg sm:text-3xl font-bold text-white tracking-tight leading-none group-hover:scale-110 transition-transform duration-300">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-display text-[7px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-1.5">
                {labels.days}
              </span>
            </div>
            
            {/* Separator */}
            <span className="text-white/20 font-mono-distinct text-base sm:text-2xl font-bold animate-pulse flex-shrink-0">:</span>

            {/* HOURS */}
            <div className="flex flex-col items-center justify-center w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.06] group flex-shrink-0">
              <span className="font-mono-distinct text-lg sm:text-3xl font-bold text-white tracking-tight leading-none group-hover:scale-110 transition-transform duration-300">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-display text-[7px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-1.5">
                {labels.hours}
              </span>
            </div>

            {/* Separator */}
            <span className="text-white/20 font-mono-distinct text-base sm:text-2xl font-bold animate-pulse flex-shrink-0">:</span>

            {/* MINUTES */}
            <div className="flex flex-col items-center justify-center w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.06] group flex-shrink-0">
              <span className="font-mono-distinct text-lg sm:text-3xl font-bold text-white tracking-tight leading-none group-hover:scale-110 transition-transform duration-300">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-display text-[7px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-1.5">
                {labels.minutes}
              </span>
            </div>

            {/* Separator */}
            <span className="text-white/20 font-mono-distinct text-base sm:text-2xl font-bold animate-pulse flex-shrink-0">:</span>

            {/* SECONDS */}
            <div className="flex flex-col items-center justify-center w-[64px] h-[64px] sm:w-[90px] sm:h-[90px] bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.06] group border-emerald-500/20 flex-shrink-0">
              <span className="font-mono-distinct text-lg sm:text-3xl font-bold text-emerald-400 tracking-tight leading-none group-hover:scale-110 transition-transform duration-300">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-display text-[7px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-1.5">
                {labels.seconds}
              </span>
            </div>
          </div>

        {/* Bottom Section: CTA Buttons & Partners */}
        <div className="relative z-30 flex flex-col items-center gap-10 mt-8 md:mt-12 opacity-0 animate-[fadeIn_1.5s_ease-out_0.6s_forwards]">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full px-6 justify-center">
            <a 
              href="#programacao"
              className="group flex items-center justify-center gap-2 sm:gap-3 w-[300px] sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] max-w-full"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-12 transition-transform shrink-0" />
              <span className="text-white font-display font-bold text-[10px] sm:text-sm tracking-widest uppercase text-center">
                {t.updatedScheduleLink}
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <a 
              href="#posters"
              className="group flex items-center justify-center gap-2 sm:gap-3 w-[300px] sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 rounded-2xl transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:rotate-12 transition-transform shrink-0" />
              <span className="text-white font-display font-bold text-[10px] sm:text-sm tracking-widest uppercase text-center">
                {t.posterGuidelinesLink}
              </span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>




          {/* Partners Ribbon - Realização, Organização, Apoio - SMALLER LOGOS */}
          <div className="w-full pt-10 lg:pt-[30px] border-t border-white/10 mt-6 md:mt-10 lg:mt-[30px]">
            <div className="flex md:grid md:grid-cols-3 gap-16 md:gap-24 lg:gap-32 max-w-6xl mx-auto px-6 mobile-marquee-container">
              
              {/* Realização */}
              <div className="flex flex-col items-center gap-5 md:gap-[5px] flex-shrink-0">
                <span className="text-[9px] font-black text-emerald-400/50 uppercase tracking-[0.4em] text-center md:mb-[20px]">
                  {t.hostedBy}
                </span>
                <div className="flex items-center justify-center gap-8 md:gap-10 h-7 md:h-9 opacity-80 hover:opacity-100 transition-opacity duration-500 w-full">
                  <img src={ASSETS.LOGOS.USP_WHITE} alt="USP" loading="lazy" decoding="async" className="h-full w-auto md:w-[150px] md:h-[50px] object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.EEFE} alt="EEFE" loading="lazy" decoding="async" className="h-[105%] w-auto md:w-[150px] md:h-[50px] object-contain brightness-200" />
                </div>
              </div>

              {/* Organização */}
              <div className="flex flex-col items-center gap-5 md:gap-[5px] flex-shrink-0">
                <span className="text-[9px] font-black text-emerald-400/50 uppercase tracking-[0.4em] text-center md:mb-[20px]">
                  {t.organizedBy}
                </span>
                <div className="flex items-center justify-center gap-8 md:gap-10 h-7 md:h-9 opacity-80 hover:opacity-100 transition-opacity duration-500 w-full">
                  <img src={ASSETS.LOGOS.LACOM} alt="LACOM" loading="lazy" decoding="async" className="h-[110%] w-auto md:w-[150px] md:h-[50px] object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.SOCIBRACOM} alt="SOCIBRACOM" loading="lazy" decoding="async" className="h-[90%] w-auto md:w-[150px] md:h-[50px] object-contain brightness-200" />
                </div>
              </div>

              {/* Apoio */}
              <div className="flex flex-col items-center gap-5 md:gap-[5px] flex-shrink-0">
                <span className="text-[9px] font-black text-emerald-400/50 uppercase tracking-[0.4em] text-center md:mb-[20px]">
                  {t.supportedBy}
                </span>
                <div className="flex items-center justify-center gap-6 md:gap-8 h-7 md:h-9 opacity-80 hover:opacity-100 transition-opacity duration-500 w-full">
                  <img src={ASSETS.LOGOS.FAPESP} alt="FAPESP" loading="lazy" decoding="async" className="h-full w-auto md:h-[40px] object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.CAPES} alt="CAPES" loading="lazy" decoding="async" className="h-[200%] w-auto md:h-[45px] object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.CNPQ} alt="CNPq" loading="lazy" decoding="async" className="h-full w-auto md:h-[35px] object-contain brightness-200" />
                </div>
              </div>

              {/* Duplicate for mobile marquee */}
              <div className="flex md:hidden flex-col items-center gap-5 flex-shrink-0">
                <span className="text-[9px] font-black text-emerald-400/50 uppercase tracking-[0.4em] text-center">
                  {t.hostedBy}
                </span>
                <div className="flex items-center justify-center gap-8 h-7 opacity-80 w-full">
                  <img src={ASSETS.LOGOS.USP_WHITE} alt="USP" className="h-full w-auto object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.EEFE} alt="EEFE" className="h-[105%] w-auto object-contain brightness-200" />
                </div>
              </div>
              <div className="flex md:hidden flex-col items-center gap-5 flex-shrink-0">
                <span className="text-[9px] font-black text-emerald-400/50 uppercase tracking-[0.4em] text-center">
                  {t.organizedBy}
                </span>
                <div className="flex items-center justify-center gap-8 h-7 opacity-80 w-full">
                  <img src={ASSETS.LOGOS.LACOM} alt="LACOM" className="h-[110%] w-auto object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.SOCIBRACOM} alt="SOCIBRACOM" className="h-[90%] w-auto object-contain brightness-200" />
                </div>
              </div>
              <div className="flex md:hidden flex-col items-center gap-5 flex-shrink-0">
                <span className="text-[9px] font-black text-emerald-400/50 uppercase tracking-[0.4em] text-center">
                  {t.supportedBy}
                </span>
                <div className="flex items-center justify-center gap-6 h-7 opacity-80 w-full">
                  <img src={ASSETS.LOGOS.FAPESP} alt="FAPESP" className="h-full w-auto object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.CAPES} alt="CAPES" className="h-[200%] w-auto object-contain brightness-200" />
                  <img src={ASSETS.LOGOS.CNPQ} alt="CNPq" className="h-full w-auto object-contain brightness-200" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Full-Screen Immersive Background Visuals */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        
        {/* Single High-Quality Full-Screen Background */}
        <div className="absolute inset-0 w-full h-full scale-110">
          <img 
            ref={bgRef}
            src={ASSETS.BACKGROUNDS.HERO} 
            alt="Congresso Brasileiro de Comportamento Motor Background" 
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-60 contrast-[1.2] brightness-[0.8] blur-none md:blur-[3px]"
          />
          {/* Multi-layer Gradient Overlays for Depth and Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-radial-gradient-emerald blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
