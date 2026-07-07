
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../src/constants';
import { Language, translations } from '../src/translations';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;
  const lineRef = useRef<HTMLDivElement>(null);
  const [isLineVisible, setIsLineVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isGridVisible, setIsGridVisible] = useState(false);

  const translatedPillars = [
    { 
      title: t.pillars.control, 
      imageUrl: ASSETS.PILLARS.CONTROLE_MOTOR, 
      code: 'MC-01',
      description: lang === 'pt' ? 'Mecanismos neurais e fisiológicos do movimento.' : 'Neural and physiological mechanisms of movement.',
      shape: 'TL'
    },
    { 
      title: t.pillars.learning, 
      imageUrl: ASSETS.PILLARS.APRENDIZAGEM_MOTORA, 
      code: 'ML-02',
      description: lang === 'pt' ? 'Aquisição e refinamento de habilidades motoras.' : 'Acquisition and refinement of motor skills.',
      shape: 'TL'
    },
    { 
      title: t.pillars.development, 
      imageUrl: ASSETS.PILLARS.DESENVOLVIMENTO_MOTOR, 
      code: 'MD-03',
      description: lang === 'pt' ? 'Mudanças motoras ao longo da vida.' : 'Motor changes throughout the lifespan.',
      shape: 'TL'
    },
    { 
      title: t.pillars.intervention, 
      imageUrl: ASSETS.PILLARS.INTERVENCAO_MOTORA, 
      code: 'MI-04',
      description: lang === 'pt' ? 'Aplicações práticas e reabilitação.' : 'Practical applications and rehabilitation.',
      shape: 'TL'
    },
  ];

  const pillarsCount = translatedPillars.length;
  // Create a looped array for infinite scroll effect: [Last, 1, 2, 3, 4, First]
  const loopedPillars = [
    translatedPillars[pillarsCount - 1],
    ...translatedPillars,
    translatedPillars[0]
  ];

  const [rawActiveIndex, setRawActiveIndex] = useState(1);
  const activeIndex = (rawActiveIndex - 1 + pillarsCount) % pillarsCount;

  const scroll = (direction: 'left' | 'right') => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.clientWidth * 0.82 + 8;
      gridRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (gridRef.current && window.innerWidth < 768) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.clientWidth * 0.82 + 8;
      const newRawIndex = Math.round(scrollLeft / cardWidth);
      
      if (newRawIndex !== rawActiveIndex) {
        setRawActiveIndex(newRawIndex);
      }

      // Silent Jump logic
      if (scrollLeft <= 5) {
        gridRef.current.scrollLeft = cardWidth * pillarsCount;
      } else if (scrollLeft >= cardWidth * (pillarsCount + 0.5)) {
        gridRef.current.scrollLeft = cardWidth;
      }
    }
  };

  // Initial scroll to the real first card (index 1)
  useEffect(() => {
    if (gridRef.current && window.innerWidth < 768) {
      const cardWidth = gridRef.current.clientWidth * 0.82 + 8;
      gridRef.current.scrollLeft = cardWidth;
      setRawActiveIndex(1);
    }
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('scroll', handleScroll, { passive: true });
      return () => grid.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGridVisible(true);
          gridObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }
    
    if (gridRef.current) {
      gridObserver.observe(gridRef.current);
    }

    return () => {
      observer.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  return (
    <section id="sobre" className="relative pt-20 pb-10 md:pt-40 md:pb-40 lg:pb-10 px-6 md:px-12 bg-[#050505] border-t border-emerald-500/10 scroll-mt-0">
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24 max-w-5xl relative">
          <h2 className="font-display font-bold text-[32px] lg:text-[44px] tracking-tighter text-white text-left leading-[1.1] mb-4">
            {t.title} <br />
            <span className="text-emerald-600 font-display font-bold normal-case pr-1 h-auto md:h-auto">
              {t.university}
            </span>
          </h2>
          <div 
            ref={lineRef}
            className={`h-1.5 bg-emerald-600 rounded-full transition-all duration-1000 ease-out ${isLineVisible ? 'w-24' : 'w-0'}`}
          ></div>
        </div>

        {/* Top Content: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          
          {/* Left Column: Image Area */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={ASSETS.BACKGROUNDS.USP_CAMPUS} 
                alt={t.university} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="space-y-8 w-[312px] md:w-auto text-white/90 text-lg md:text-xl leading-relaxed">
            <p className="text-white/60 text-[16px] md:text-lg w-[312px] md:w-auto">
              {t.p2_start}<span className="text-emerald-500 font-bold">{t.p2_bold}</span>{t.p2_end}
            </p>
 
            <p className="text-white/60 text-base md:text-lg w-[312px] md:w-auto">
              {t.p3_start}<span className="text-emerald-500 italic">{t.p3_italic}</span>{t.p3_end}
            </p>
 
            <p className="text-white/60 text-base md:text-lg w-[312px] md:w-auto">
              {t.p4_start}<span className="italic font-serif-distinct text-white">{t.p4_italic}</span>{t.p4_end}
            </p>
          </div>
        </div>
 
        {/* Bottom Section: Areas Grid - UNIFORM GRID IMPLEMENTATION */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0 -mt-[70px] md:mt-0">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-6 md:px-0 pt-10 md:pt-0">
            <div className="space-y-4">
              <h3 className="font-display font-black lg:font-semibold text-[24px] text-white tracking-tighter -ml-[25px] md:ml-0 mt-[-30px] md:mt-0">
                {t.areasTitle}
              </h3>
            </div>
            <div className="h-px flex-grow bg-gradient-to-r from-emerald-500/30 to-transparent hidden md:block mb-4 mx-8"></div>
          </div>

          <div 
            ref={gridRef} 
            className="relative z-10 flex overflow-x-auto pt-4 pb-8 md:pt-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 md:mx-0 md:px-0 touch-pan-x px-[9vw] scroll-px-[9vw] mt-[-40px] md:mt-0"
          >
            {(window.innerWidth < 768 ? loopedPillars : translatedPillars).map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative h-[400px] w-[82vw] md:w-auto flex-shrink-0 snap-center flex flex-col transition-opacity duration-300 ${
                  (window.innerWidth >= 768) ? 'opacity-100' :
                  (rawActiveIndex === idx) ? 'opacity-100' : 'opacity-40'
                }`}
              >
                  {/* Photo Card Container */}
                  <div 
                    className="relative w-full h-full rounded-[18px] overflow-hidden flex flex-col border border-white/10 transition-all duration-500 md:hover:scale-[1.03] shadow-2xl group/card"
                    style={{ 
                      clipPath: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : (pillar.shape === 'TL' 
                        ? 'polygon(0 35px, 115px 35px, 122px 34px, 128px 29px, 152px 3px, 157px 0, 100% 0, 100% 100%, 0 100%)' 
                        : 'polygon(0 0, calc(100% - 157px) 0, calc(100% - 152px) 3px, calc(100% - 128px) 29px, calc(100% - 122px) 34px, calc(100% - 110px) 35px, 100% 35px, 100% 100%, 0 100%)') 
                    }}
                  >


                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={pillar.imageUrl} 
                        alt=""
                        className="w-full h-full object-cover opacity-80 md:opacity-60 md:group-hover/card:opacity-80 transition-opacity duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    </div>

                    {/* Title at the bottom left */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="block text-emerald-400 font-display font-bold text-lg md:text-xl md:text-white tracking-tight leading-tight md:group-hover/card:text-emerald-400 transition-colors uppercase">
                        {pillar.title.replace('<br/>', ' ')}
                      </span>
                    </div>
                  </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls Below Grid (Mobile Only) */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-0 md:mt-8">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-emerald-400 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {translatedPillars.map((_, i) => (
                <div 
                  key={i}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === i 
                      ? 'w-6 h-1.5 bg-emerald-500' 
                      : 'w-1.5 h-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-emerald-400 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
