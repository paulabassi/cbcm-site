
import React, { useEffect, useRef, useState } from 'react';
import { translations, Language } from '../src/translations';

interface DateItem {
  date: string;
  status: string;
  hasBadge?: boolean;
}

const DATES_BASE: DateItem[] = [
  { 
    date: '01/01/2026 - 30/01/2026', 
    status: 'passed' 
  },
  { 
    date: '01/02/2026 - 30/03/2026', 
    status: 'passed' 
  },
  { 
    date: '13/02/2026 - 30/06/2026', 
    status: 'passed' 
  },
  { 
    date: '20/02/2026', 
    status: 'passed' 
  },
  { 
    date: '19/03/2026', 
    status: 'passed' 
  },
  { 
    date: '10/04/2026', 
    status: 'passed' 
  },
];

interface ImportantDatesProps {
  lang: Language;
}

const ImportantDates: React.FC<ImportantDatesProps> = ({ lang }) => {
  const t = translations[lang].importantDates;

  const sectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setVisibleItems((prev) => prev.includes(idx) ? prev : [...prev, idx]);
            }, idx * 100);
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  // Update the date for "Divulgação do Cronograma do Evento" (index 4)
  const dates = [...DATES_BASE];
  dates[4] = { ...dates[4], date: lang === 'pt' ? 'DISPONÍVEL' : 'AVAILABLE' };

  return (
    <section id="datas" ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-[#0a1a11] relative overflow-hidden border-y border-emerald-500/10 scroll-mt-0">
      {/* Visual differentiation: Ambient Side Glow */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-emerald-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-start">
          <div className="md:w-1/3 md:sticky md:top-32">
            <h2 className="font-display font-bold text-[32px] lg:text-[44px] tracking-tighter text-white leading-none mb-6">
              {t.title} {t.titleHighlight && <><br /><span className="text-emerald-400">{t.titleHighlight}</span></>}
            </h2>
          </div>
          
          <div className="md:w-2/3 w-full relative">
            {/* Vertical Line for Timeline Feel */}
            <div 
              className="absolute left-0 top-0 w-px bg-emerald-500/20 hidden sm:block"
              style={{
                height: isSectionVisible ? '100%' : '0%',
                transition: 'height 1.5s ease-out'
              }}
            ></div>
            
            <div className="space-y-4 sm:pl-10">
              {dates.map((item, idx) => {
                const isPassed = item.status === 'passed';
                const isHighlight = item.status === 'highlight';
                const eventName = t.events[idx];

                return (
                  <div 
                    key={idx} 
                    ref={(el) => { itemRefs.current[idx] = el; }}
                    data-index={idx}
                    className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-6 border transition-all duration-500 ease-out rounded-2xl gap-4 sm:gap-0 shadow-lg
                      ${isPassed ? 'opacity-30 border-white/5 bg-transparent' : 'bg-black/40 backdrop-blur-xl'}
                      ${isHighlight ? 'border-emerald-500/50 bg-emerald-500/[0.03] ring-1 ring-emerald-500/20' : 'border-emerald-900/20 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02]'}
                    `}
                    style={{
                      opacity: visibleItems.includes(idx) ? (isPassed ? 0.3 : 1) : 0,
                      transform: visibleItems.includes(idx) ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[45px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full hidden sm:block transition-all
                      ${isPassed ? 'bg-white/10' : 'bg-emerald-500 shadow-[0_0_10px_#2B783F] group-hover:scale-150'}
                    `}></div>
                    
                    <div className="shrink-0 flex items-center gap-4">
                      <span className={`font-display font-black text-xl md:text-2xl transition-colors
                        ${isPassed ? 'text-white/40' : 'text-white group-hover:text-emerald-400'}
                        ${isHighlight ? 'text-emerald-400' : ''}
                      `}>
                        {item.date}
                      </span>
                      
                      {item.hasBadge && (
                        <span className="px-3 py-1 bg-emerald-500 text-black text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse">
                          {t.badgeOpen}
                        </span>
                      )}
                    </div>
                    
                    <div className={`h-px flex-grow mx-8 hidden lg:block border-t border-dashed transition-colors
                      ${isPassed ? 'border-white/5' : 'border-emerald-900/40'}
                    `}></div>
                    
                    <span className={`font-display font-bold text-sm md:text-base uppercase tracking-widest transition-colors sm:text-right
                      ${isPassed ? 'text-white/20' : 'text-emerald-100/40 group-hover:text-white'}
                      ${isHighlight ? 'text-white/80' : ''}
                    `}>
                      {eventName}
                    </span>

                    {/* Subtle Highlight Glow for current phases */}
                    {isHighlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none rounded-2xl" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
