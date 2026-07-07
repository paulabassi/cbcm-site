import React, { useState } from 'react';
import { Language, translations } from '../src/translations';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, CheckSquare, Presentation, HelpCircle, Sparkles, ZoomIn, X, Mail, Instagram } from 'lucide-react';

interface PosterGuidelinesProps {
  lang: Language;
}

const PosterGuidelines: React.FC<PosterGuidelinesProps> = ({ lang }) => {
  const t = translations[lang].posterGuidelines;
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="posters" className="relative w-full py-24 bg-black overflow-hidden border-t border-emerald-950/40">
      {/* Decorative ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-4xl">
          <h2 className="text-[22px] md:text-5xl font-sans font-bold text-white tracking-tight leading-snug mb-4">
            {lang === 'pt' ? (
              <>
                Orientações para <span className="text-emerald-500">confecção</span> e <span className="text-emerald-500">apresentação</span> de pôsteres
              </>
            ) : (
              <>
                Guidelines for <span className="text-emerald-500">poster preparation</span> and <span className="text-emerald-500">presentation</span>
              </>
            )}
          </h2>
          {t.subtitle && (
            <p className="text-base md:text-lg font-sans text-zinc-400 tracking-wide font-medium">
              {t.subtitle}
            </p>
          )}
        </div>

        {/* 3 Column Layout/Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Column 1: Specifications */}
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-3xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-emerald-700/80 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-500 shadow-[0_4px_12px_rgba(16,185,129,0.15)]">
                  <Layout className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight leading-snug">
                  {t.specsTitle}
                </h3>
              </div>

              <p className="text-[14px] font-sans text-zinc-400 mb-4 font-bold">
                {lang === 'pt' ? (
                  <>O pôster <span className="italic font-bold text-emerald-400">deve</span> conter:</>
                ) : (
                  <>The poster <span className="italic font-bold text-emerald-400">must</span> contain:</>
                )}
              </p>

              <ul className="space-y-[14px]">
                {t.formatDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                    <span className="text-[14px] font-sans text-zinc-300 leading-relaxed font-medium">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Compact Poster image button requested by the user */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-[13px] font-sans font-bold text-zinc-400 mb-3">
                  {lang === 'pt' ? 'Exemplo:' : 'Example:'}
                </p>
                
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full group/btn relative rounded-2xl bg-zinc-950/40 hover:bg-zinc-950/70 border border-white/5 hover:border-emerald-500/30 p-4 flex items-center gap-4 transition-all duration-300 text-left cursor-zoom-in"
                  title={lang === 'pt' ? 'Clique para ampliar o pôster' : 'Click to zoom poster'}
                >
                  {/* Miniature SVG representation */}
                  <div className="w-[52px] h-[72px] bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 group-hover/btn:border-emerald-500/20 transition-all duration-300 relative shadow-inner">
                    <svg viewBox="0 0 300 450" className="w-[36px] h-auto select-none opacity-80 group-hover/btn:opacity-100 transition-opacity duration-300" aria-hidden="true">
                      {/* Top Support Line hook */}
                      <circle cx="150" cy="25" r="8" fill="#52525b" />

                      {/* Support string lines */}
                      <line x1="150" y1="25" x2="30" y2="85" stroke="#71717a" strokeWidth="2.5" />
                      <line x1="150" y1="25" x2="270" y2="85" stroke="#71717a" strokeWidth="2.5" />

                      {/* Poster Body */}
                      <rect x="40" y="95" width="220" height="293" rx="4" fill="#fafafa" />
                      
                      {/* Side margins / borders of the paper banner */}
                      <line x1="40" y1="95" x2="40" y2="388" stroke="#d4d4d8" strokeWidth="2" />
                      <line x1="260" y1="95" x2="260" y2="388" stroke="#d4d4d8" strokeWidth="2" />

                      {/* Dimensions labels simplified */}
                      <text x="150" y="240" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontSize="32" fontWeight="900" fill="#71717a">90x120</text>

                      {/* Top Rail */}
                      <rect x="25" y="85" width="250" height="12" rx="3" fill="#27272a" />
                      
                      {/* Bottom Rail */}
                      <rect x="25" y="388" width="250" height="12" rx="3" fill="#27272a" />
                    </svg>
                    
                    {/* Tiny magnifying glass badge */}
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/btn:opacity-100 flex items-center justify-center transition-all duration-300">
                      <ZoomIn className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-1.5 text-[13px] font-sans font-bold text-emerald-400 group-hover/btn:text-emerald-300 transition-colors duration-200">
                      <span>{lang === 'pt' ? 'Clique para ampliar' : 'Click to zoom'}</span>
                      <ZoomIn className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                    <p className="text-[11px] text-zinc-500 font-mono uppercase mt-1">
                      {lang === 'pt' ? '90 x 120 CM • Pôster' : '90 x 120 CM • Poster'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Obligatory Structure */}
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-3xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-emerald-700/80 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-500 shadow-[0_4px_12px_rgba(16,185,129,0.15)]">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight leading-snug">
                  {t.structureTitle}
                </h3>
              </div>

              <p className="text-[14px] font-sans text-zinc-400 mb-4 font-bold">
                {lang === 'pt' ? (
                  <>O pôster <span className="italic font-bold text-emerald-400">deverá</span> conter obrigatoriamente:</>
                ) : (
                  <>The poster <span className="italic font-bold text-emerald-400">must</span> contain:</>
                )}
              </p>

              <ul className="space-y-[14px] mb-6">
                {t.structureItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                    <span className="text-[14px] font-sans text-zinc-300 leading-relaxed font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Sections Pills */}
              <div className="flex flex-col gap-2.5 pl-4 max-w-xs mt-4">
                {(lang === 'pt' ? [
                  'Introdução',
                  'Objetivos',
                  'Metodologia',
                  'Resultados e Discussão',
                  'Conclusões',
                  'Referências bibliográficas'
                ] : [
                  'Introduction',
                  'Objectives',
                  'Methodology',
                  'Results and Discussion',
                  'Conclusions',
                  'References'
                ]).map((sec, idx) => (
                  <div 
                    key={idx} 
                    className="px-5 py-2.5 rounded-full bg-emerald-500 text-zinc-950 font-sans font-medium text-xs uppercase tracking-wider text-center shadow-md border border-emerald-400/20 transform hover:scale-[1.03] transition-all duration-300"
                  >
                    {sec}
                  </div>
                ))}
              </div>

              <p className="text-xs text-zinc-400 font-sans italic mt-5 pl-4">
                {lang === 'pt' ? '*Objetivos e Referências bibliográficas são opcionais' : '*Objectives and References are optional'}
              </p>
            </div>
          </motion.div>

          {/* Column 3: Presentation and evaluation */}
          <motion.div 
            variants={itemVariants}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-tr-3xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-emerald-700/80 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-500 shadow-[0_4px_12px_rgba(16,185,129,0.15)]">
                  <Presentation className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight leading-snug">
                  {t.presentationTitle}
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/10 text-zinc-300 relative overflow-hidden leading-relaxed shadow-inner">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                <p className="text-[14px] font-sans leading-relaxed font-bold mb-4 text-zinc-200">
                  {t.presentationIntro}
                </p>
                <ul className="space-y-4 pl-1">
                  {t.presentationItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2" />
                      <span className="text-[14px] font-sans text-zinc-300 leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </motion.div>
        
        {/* Support banner/Callout */}
        <div className="mt-16 p-6 md:p-8 rounded-3xl bg-zinc-900/20 border border-white/5 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-sans font-bold text-white uppercase tracking-wider">
                {lang === 'pt' ? 'Tem dúvidas adicionais sobre a apresentação?' : 'Have additional questions about presentation?'}
              </h4>
              <p className="text-xs md:text-sm font-sans text-zinc-400 mt-0.5">
                {lang === 'pt' ? 'Entre em contato através de nosso email: usp.cbcm@gmail.com ou Instagram.' : 'Get in touch via our email: usp.cbcm@gmail.com or Instagram.'}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a 
              href="mailto:usp.cbcm@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-sans font-black text-xs uppercase tracking-wider transition-all duration-300 w-full sm:w-auto shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Enviar e-mail' : 'Send e-mail'}</span>
            </a>
            <a 
              href="https://www.instagram.com/cbcm2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-105 active:scale-95 text-white font-sans font-black text-xs uppercase tracking-wider transition-all duration-300 w-full sm:w-auto shadow-[0_4px_12px_rgba(238,42,123,0.3)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Instagram className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Instagram</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-[390px] rounded-3xl bg-zinc-900 border border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col items-center"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all border border-white/5 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-lg font-sans font-bold text-white mb-1 tracking-tight">
                {lang === 'pt' ? 'Modelo de Pôster' : 'Poster Model'}
              </h3>
              <p className="text-[13px] text-emerald-400 font-bold mb-6 font-mono uppercase tracking-wider">
                90 x 120 CM
              </p>

              {/* Poster SVG in modal */}
              <div className="w-full bg-zinc-950/50 rounded-2xl p-6 border border-white/5 flex items-center justify-center">
                <svg viewBox="0 0 300 450" className="w-full max-w-[260px] h-auto select-none" aria-hidden="true">
                  <defs>
                    <filter id="modal-poster-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
                    </filter>
                  </defs>

                  {/* Top Support Line hook */}
                  <circle cx="150" cy="25" r="5" fill="#52525b" />

                  {/* Support string lines */}
                  <line x1="150" y1="25" x2="30" y2="85" stroke="#71717a" strokeWidth="1.5" />
                  <line x1="150" y1="25" x2="270" y2="85" stroke="#71717a" strokeWidth="1.5" />

                  {/* Poster Body */}
                  <rect x="40" y="95" width="220" height="293" rx="2" fill="#fafafa" filter="url(#modal-poster-shadow)" />
                  
                  {/* Side margins / borders of the paper banner */}
                  <line x1="40" y1="95" x2="40" y2="388" stroke="#e4e4e7" strokeWidth="1" />
                  <line x1="260" y1="95" x2="260" y2="388" stroke="#e4e4e7" strokeWidth="1" />

                  {/* Inside dimension/guide lines (gray) */}
                  {/* Top Left Vertical Guide */}
                  <line x1="58" y1="125" x2="72" y2="125" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="65" y1="125" x2="65" y2="215" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />

                  {/* Height Label "120" in the gap */}
                  <text x="65" y="238" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#52525b">120</text>

                  {/* Bottom Left Vertical Guide */}
                  <line x1="65" y1="255" x2="65" y2="345" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="58" y1="345" x2="72" y2="345" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />

                  {/* Bottom Left Horizontal Guide */}
                  <line x1="80" y1="358" x2="80" y2="372" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="80" y1="365" x2="125" y2="365" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />

                  {/* Width Label "90" in the gap */}
                  <text x="150" y="365" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#52525b">90</text>

                  {/* Bottom Right Horizontal Guide */}
                  <line x1="175" y1="365" x2="220" y2="365" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="220" y1="358" x2="220" y2="372" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />

                  {/* Top Rail */}
                  <rect x="25" y="85" width="250" height="10" rx="2" fill="#27272a" />
                  
                  {/* Bottom Rail */}
                  <rect x="25" y="388" width="250" height="10" rx="2" fill="#27272a" />
                </svg>
              </div>

              <p className="text-xs text-zinc-400 mt-4 text-center leading-relaxed font-sans px-4">
                {lang === 'pt' 
                  ? 'O pôster deve possuir dimensões máximas de 90 cm de largura por 120 cm de altura.' 
                  : 'The poster must have maximum dimensions of 90 cm wide by 120 cm high.'}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PosterGuidelines;
