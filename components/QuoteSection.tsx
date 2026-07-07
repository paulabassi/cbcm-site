
import React from 'react';
import { motion } from 'motion/react';
import { Language, translations } from '../src/translations';

interface QuoteSectionProps {
  lang: Language;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({ lang }) => {
  const t = translations[lang].about;
  
  return (
    <section className="relative py-20 h-[250px] lg:h-[270px] flex items-center bg-[#050505] overflow-hidden border-b border-emerald-500/10 -mt-[80px] mb-0 md:mt-0 md:mb-0">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Decorative Quote Icon / Mark */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-[2px] bg-emerald-500/40"></div>
            <div className="mx-4 text-emerald-500 transform scale-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H10.017V21H14.017ZM3.01704 21L3.01704 18C3.01704 16.8954 3.91241 16 5.01704 16H8.01704C8.56933 16 9.01704 15.5523 9.01704 15V9C9.01704 8.44772 8.56933 8 8.01704 8H4.01704C3.46476 8 3.01704 8.44772 3.01704 9V12C3.01704 12.5523 2.56933 13 2.01704 13H0.017041L0.017041 21H3.01704Z" />
              </svg>
            </div>
            <div className="w-12 h-[2px] bg-emerald-500/40"></div>
          </div>
          
          <h3 className="font-sans font-medium text-[16px] lg:text-[32px] text-white leading-tight lg:leading-[40.5px] tracking-tight lg:w-[950px] lg:mr-0 pl-[9px] mx-auto pr-4">
            {t.p1_start}<span className="text-white font-normal">{t.p1_bold}</span>{t.p1_end}
          </h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-emerald-500 mx-auto mt-12 rounded-full"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
