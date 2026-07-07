import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Language, translations } from '../src/translations';
import { GraduationCap, BookOpen, Award as AwardIcon, Trophy, X, Info } from 'lucide-react';
import { motion, AnimatePresence, useInView, animate, useMotionValue, useTransform } from 'motion/react';
import Markdown from 'react-markdown';

const AbstractSubmission: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].abstractSubmission;
  const tAwards = translations[lang].awards;
  const [isRegulationOpen, setIsRegulationOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation for the counter
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 280, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayCount(Math.round(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4; // Slow movement
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 120);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.8 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    BookOpen: <BookOpen className="w-5 h-5" />,
    Award: <AwardIcon className="w-5 h-5" />,
  };

  return (
    <section id="submissao" className="py-16 md:py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden border-b border-emerald-500/10 scroll-mt-0">
      {/* Visual differentiation: Ambient Glow */}
      <div className="absolute inset-0 bg-emerald-500/[0.03] pointer-events-none z-0"></div>
      
      {/* Particle Animation Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80"
      />
      
      <div className="max-w-[1440px] mx-auto relative z-10 space-y-16 md:space-y-24">
        {/* Seção: Envio de Pesquisas - ELEGANT ACADEMIC CTA */}
        <div className="relative">
          {/* Background Accent - Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[140px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 text-center lg:text-left lg:pl-[15px] lg:ml-[50px]">
              <h2 className="font-display font-extrabold text-[32px] tracking-tighter text-white text-center lg:text-left lg:ml-[50px] leading-[0.95] md:leading-none uppercase">
                {t.title}
                <span className="text-emerald-500">
                  {t.titleHighlight}
                </span>
              </h2>
              
              <p className="text-emerald-50/60 text-sm md:text-base lg:text-lg lg:leading-[15px] lg:ml-[50px] lg:w-[600px] leading-relaxed font-light max-w-2xl lg:mx-0 mx-auto whitespace-pre-line">
                {t.description}
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end w-full">
              <div ref={counterRef} className="flex items-center gap-4 text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="text-white font-display font-black text-[60px] tracking-tighter leading-none flex items-center">
                  <span className="text-emerald-500 flex items-center h-full ml-0 lg:mr-[5px] pl-0 mb-0 mt-0 lg:pb-[15px] lg:text-[80px] lg:font-bold">{t.submissionCount.split(' ')[0].charAt(0)}</span>
                  <span className="flex items-center h-full lg:text-[65px] lg:font-bold">{displayCount}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-emerald-500 font-display font-black text-[16px] lg:text-[18px] lg:mr-[250px] uppercase tracking-tighter leading-tight">
                    {t.submissionCount.split(' ')[1]}
                  </div>
                  <div className="text-[#2b783f] font-display font-black text-[16px] lg:text-[18px] uppercase tracking-tighter leading-tight">
                    {t.submissionCount.split(' ')[2]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção: Prêmios - SECONDARY CARD STYLE */}
        <div id="premiacao" className="relative lg:mt-[-40px]">
          <div className="p-6 md:p-16 bg-white/[0.02] border border-white/10 hover:border-emerald-500/20 rounded-2xl md:rounded-[2.5rem] backdrop-blur-md backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.05] blur-[120px] rounded-full pointer-events-none"></div>
            
            {/* Liquid sheen overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-white/5 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-12">
              {/* Title at the top */}
              <div className="space-y-6 text-center">
                <h3 className="font-display font-bold text-[28px] md:text-[27px] mt-[10px] md:mt-0 pl-[1px] md:pl-0 w-[264px] md:w-auto tracking-tighter text-white text-left leading-[28.8px] md:leading-none">
                  {tAwards.titlePrefix}<span className="text-emerald-500">{tAwards.titleHighlight}</span>{tAwards.titleSuffix}
                </h3>
              </div>

              {/* 3 Columns Layout - Balanced, Compact and Uniform */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-[-20px] md:mt-0">
                {/* Col 1: Description */}
                <div className="flex flex-col p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <p className="text-emerald-400 font-black text-[12px] md:text-[10px] uppercase tracking-[0.2em] opacity-100">
                    {tAwards.aboutTitle}
                  </p>
                  <div className="text-emerald-50/70 text-[14px] md:text-xs lg:text-sm font-light leading-relaxed flex-grow space-y-3">
                    <p dangerouslySetInnerHTML={{ __html: tAwards.subtitle.split('\n\n')[0] }} />
                    <p dangerouslySetInnerHTML={{ __html: tAwards.subtitle.split('\n\n')[1] }} />
                  </div>
                </div>

                {/* Col 2: Categories */}
                <div className="flex flex-col p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <p className="text-emerald-400 font-black text-[12px] md:text-[10px] uppercase tracking-[0.2em] opacity-100">
                    {tAwards.categoriesTitle}
                  </p>
                  <div className="space-y-2 flex-grow">
                    {tAwards.categories.map((cat, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                          {iconMap[cat.icon]}
                        </div>
                        <h4 className="text-white font-display font-black text-[16px] md:text-sm uppercase tracking-tight">{cat.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Col 3: How to Participate */}
                <div className="flex flex-col p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <p className="text-emerald-400 font-black text-[12px] md:text-[10px] uppercase tracking-[0.2em] opacity-100">
                    {tAwards.howToParticipate.title}
                  </p>
                  <div className="flex-grow">
                    <p className="text-white/50 text-[14px] md:text-xs lg:text-sm font-light leading-relaxed whitespace-pre-line">
                      {tAwards.howToParticipate.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setIsRegulationOpen(true)}
                    className="w-full py-3.5 bg-white/5 text-white border border-white/10 rounded-xl font-display font-black uppercase tracking-widest text-[10px] md:text-[9px] hover:bg-white hover:text-black transition-all shadow-xl"
                  >
                    {tAwards.howToParticipate.button}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Regulation Modal */}
      <AnimatePresence>
        {isRegulationOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRegulationOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 md:p-12 space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tight">
                    {tAwards.regulation.title}
                  </h3>
                  <button 
                    onClick={() => setIsRegulationOpen(false)}
                    className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                  <div className="markdown-body">
                    <Markdown
                      components={{
                        h3: ({ ...props }) => <h3 className="text-white font-display font-black text-lg md:text-xl uppercase tracking-tight mt-8 mb-4 first:mt-0" {...props} />,
                        p: ({ ...props }) => <p className="text-emerald-50/70 text-sm md:text-base font-light leading-relaxed mb-4" {...props} />,
                        ul: ({ ...props }) => <ul className="space-y-2 mb-6 ml-2" {...props} />,
                        li: ({ ...props }) => (
                          <li className="flex gap-3 items-start text-emerald-50/70 text-sm md:text-base font-light leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                            <span>{props.children}</span>
                          </li>
                        ),
                        strong: ({ ...props }) => <strong className="text-emerald-400 font-black" {...props} />,
                        em: ({ ...props }) => <em className="text-emerald-200/80 italic" {...props} />,
                      }}
                    >
                      {tAwards.regulation.content}
                    </Markdown>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setIsRegulationOpen(false)}
                    className="w-full py-4 bg-emerald-500 text-black font-display font-black uppercase tracking-widest text-xs rounded-xl transition-all hover:bg-white"
                  >
                    {tAwards.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AbstractSubmission;
