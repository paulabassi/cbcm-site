
import React from 'react';
import { Language, translations } from '../src/translations';

interface LocationProps {
  lang: Language;
}

const Location: React.FC<LocationProps> = ({ lang }) => {
  const t = translations[lang].location;
  const isPt = lang === 'pt';

  return (
    <section id="local" className="py-20 md:py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden scroll-mt-0">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-emerald-500/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10 space-y-12">
        
        {/* ROW 1: Venue Info and Map side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Venue Card */}
          <div className="p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col justify-center">
            
            <h2 className="text-[20px] text-white font-display font-black mb-6 tracking-tighter leading-tight group-hover:text-emerald-400 transition-colors">
              {t.venue}
            </h2>
            
            <p className="text-emerald-100/60 text-base md:text-lg lg:text-base leading-relaxed mb-10 max-w-md">
              R. do Lago, 876 - Butantã, São Paulo - SP, 05508-080
            </p>
            
            <div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=FAUUSP+-+Faculdade+de+Arquitetura+e+Urbanismo+da+USP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-emerald-500 hover:bg-white text-black font-display font-black uppercase tracking-widest text-[10px] lg:text-[12px] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                {t.openMaps}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[400px] lg:min-h-full rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 relative group/map">
            <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none z-10 group-hover/map:opacity-0 transition-opacity duration-700"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2298762392766!2d-46.732481625021016!3d-23.560186061548418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56150d109d3f%3A0x9e68c921f60332b7!2sFaculdade%20de%20Arquitetura%20e%20Urbanismo%20e%20de%20Design%20da%20Universidade%20de%20S%C3%A3o%20Paulo%20-%20FAUUSP!5e0!3m2!1spt-BR!2sbr!4v1773431370353!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa FAUUSP"
              className="relative z-0 absolute inset-0 w-full h-full"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] z-20"></div>
          </div>
          
        </div>

        {/* ROW 2: Accommodations side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch pt-12 border-t border-white/5">
          
          {/* Transamérica Card */}
          <div id="hospedagem" className="p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-widest rounded-full">
                {t.discount.badge}
              </span>
              <span className="text-white font-display font-black text-lg tracking-tight uppercase">15% OFF</span>
            </div>

            <h3 className="text-xl md:text-2xl text-white font-display font-black mb-4 tracking-tighter leading-tight group-hover:text-emerald-400 transition-colors">
              {t.discount.title}
            </h3>
            
            <p className="text-emerald-100/60 text-sm leading-relaxed mb-auto pb-10">
              {t.discount.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
              <div className="p-4 bg-black/40 border border-white/10 rounded-2xl flex flex-col gap-1 min-w-[160px]">
                <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-400/60 font-bold">PROMO CODE</span>
                <span className="text-xl text-white font-mono font-black tracking-widest">XIIICBCM</span>
              </div>
              
              <a 
                href="https://atlantica.letsbook.com.br/reserva/link-publico?r=33cf02ef9d974fe9a7e2b777d7752c25&p=XIIICBCM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 hover:text-white transition-colors flex items-center gap-2 group/link"
              >
                {t.discount.button}
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6">
                {t.discount.howToTitle}
              </p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-3">
                {t.discount.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-mono font-bold text-[10px] mt-0.5">{i + 1}.</span>
                    <span className="text-emerald-100/40 text-[10px] leading-tight uppercase font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ibis Card */}
          <div className="p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-500 group flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-black uppercase tracking-widest rounded-full">
                {t.discount2.badge}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl text-white font-display font-black mb-4 tracking-tighter leading-tight group-hover:text-emerald-400 transition-colors">
              {t.discount2.title}
            </h3>
            
            <p className="text-emerald-400/90 text-xs font-bold uppercase tracking-wider mb-3">
              {isPt ? 'Diárias exclusivas para o evento' : 'Exclusive rates for the event'}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-black/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-2xl md:text-3xl lg:text-4xl text-white font-mono font-black tracking-tight">R$ 390</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-emerald-100/40 font-bold mt-1">
                  single
                </span>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center">
                <span className="text-2xl md:text-3xl lg:text-4xl text-white font-mono font-black tracking-tight">R$ 445</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-emerald-100/40 font-bold mt-1">
                  {isPt ? 'duplo' : 'double'}
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <a 
                href="https://all.accor.com/lien_externe.svlt?goto=rech_resa&destination=A1B6&sourceid=ALUNOS&dayIn=20&monthIn=7&yearIn=2026&nightNb=6&preferredCode=ALUNOS&merchantid=par-accorFR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black/40 hover:bg-emerald-500 border border-white/10 hover:border-emerald-500 text-emerald-400 hover:text-black font-display font-black uppercase tracking-widest text-[10px] rounded-xl transition-all duration-300 group/btn"
              >
                {t.discount2.button}
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Location;
