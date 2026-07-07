
import React, { useState, useMemo } from 'react';
import { Language, translations } from '../src/translations';
import { conteudoOriginal } from '../src/conteudo';

interface Speaker {
  name: string;
  role: string;
  univ: string;
  image?: string;
  hide?: boolean;
}

interface SpeakersProps {
  lang: Language;
}


const SpeakerCard: React.FC<{ s: Speaker; lang: Language }> = ({ s, lang }) => {
  const finalImageUrl = s.image;
  
  const t = translations[lang].speakers;
  const translatedRole = t.countries[s.role as keyof typeof t.countries] || s.role;

  return (
    <div className="group flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#111] border border-white/5 group-hover:border-emerald-500/50 transition-all duration-500">
        <img 
          src={finalImageUrl} 
          alt={s.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
        />
        
        <div className="absolute top-3 right-3 z-20">
          <div className="flex items-center justify-center px-3 py-1 bg-emerald-500 border border-white/20 text-black group-hover:bg-white transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] rounded-full">
            <span className="font-display font-black text-[8px] md:text-[10px] uppercase tracking-widest whitespace-nowrap text-center">
              {translatedRole}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
      </div>
      
      <div className="px-1">
        <h3 className="font-display font-semibold text-sm md:text-lg text-white mb-1.5 leading-tight group-hover:text-emerald-400 transition-colors">
          {s.name}
        </h3>
        <p className="text-emerald-400 text-xs md:text-sm font-bold uppercase tracking-tight leading-tight transition-all group-hover:brightness-125">
          {s.univ}
        </p>
      </div>
    </div>
  );
};

const Speakers: React.FC<SpeakersProps> = ({ lang }) => {
  const INTERNATIONAL_SPEAKERS = useMemo(() => {
    return (conteudoOriginal[lang].speakersList.international as Speaker[]).filter(s => !s.hide);
  }, [lang]);

  const NATIONAL_SPEAKERS = useMemo(() => {
    return (conteudoOriginal[lang].speakersList.national as Speaker[]).filter(s => !s.hide);
  }, [lang]);

  const t = translations[lang].speakers;
  const [selectedCountry, setSelectedCountry] = useState(t.all);
  const [selectedState, setSelectedState] = useState(t.all);

  // Reset filters when language changes to avoid empty lists
  React.useEffect(() => {
    setSelectedCountry(t.all);
    setSelectedState(t.all);
  }, [lang, t.all]);

  const countries = useMemo(() => {
    const uniqueCountries = Array.from(new Set(INTERNATIONAL_SPEAKERS.map(s => s.role))).sort();
    return [t.all, ...uniqueCountries];
  }, [t.all, INTERNATIONAL_SPEAKERS]);

  const states = useMemo(() => {
    const uniqueStates = Array.from(new Set(NATIONAL_SPEAKERS.map(s => s.role))).sort();
    return [t.all, ...uniqueStates];
  }, [t.all, NATIONAL_SPEAKERS]);

  const filteredInternational = useMemo(() => {
    if (selectedCountry === t.all) return INTERNATIONAL_SPEAKERS;
    return INTERNATIONAL_SPEAKERS.filter(s => s.role === selectedCountry);
  }, [selectedCountry, t.all, INTERNATIONAL_SPEAKERS]);

  const filteredNational = useMemo(() => {
    if (selectedState === t.all) return NATIONAL_SPEAKERS;
    return NATIONAL_SPEAKERS.filter(s => s.role === selectedState);
  }, [selectedState, t.all, NATIONAL_SPEAKERS]);

  return (
    <section id="palestrantes" className="py-20 md:py-32 px-6 md:px-12 bg-[#080808] border-b border-emerald-500/5 scroll-mt-0">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="font-display font-bold text-[32px] lg:text-[44px] tracking-tighter text-white text-left leading-[0.9]">
            {t.title} {t.titleAccent && <><br /> <span className="text-emerald-400">{t.titleAccent}</span></>}
          </h2>
        </div>

        {/* International Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <h3 className="font-display font-bold text-2xl lg:text-[24px] text-white tracking-tighter whitespace-nowrap">
              {t.international}
              {t.internationalNote && (
                <span className="ml-3 text-xs font-normal normal-case text-emerald-400/60 tracking-normal">
                  {t.internationalNote}
                </span>
              )}
            </h3>
            <div className="h-[2px] hidden md:block flex-grow bg-gradient-to-r from-emerald-500/40 to-transparent"></div>
            
            {/* Country Selector */}
            <div className="flex flex-wrap gap-2">
              {countries.map(country => {
                const displayCountry = t.countries[country as keyof typeof t.countries] || country;
                return (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`flex items-center justify-center text-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                      selectedCountry === country 
                      ? 'bg-emerald-500 border-emerald-500 text-black' 
                      : 'bg-transparent border-white/10 text-white/50 hover:border-emerald-500/50 hover:text-emerald-400'
                    }`}
                  >
                    {displayCountry}
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16 min-h-[400px]">
            {filteredInternational.map((s, idx) => (
              <SpeakerCard 
                key={`int-${s.name}-${idx}`} 
                s={s} 
                lang={lang}
              />
            ))}
          </div>
        </div>

        {/* National Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <h3 className="font-display font-bold text-2xl text-white tracking-tighter">
              {t.national}
              {t.nationalNote && (
                <span className="ml-3 text-xs font-normal normal-case text-emerald-400/60 tracking-normal">
                  {t.nationalNote}
                </span>
              )}
            </h3>
            <div className="h-[2px] hidden md:block flex-grow bg-gradient-to-r from-emerald-500/40 to-transparent"></div>
            
            {/* State Selector */}
            <div className="flex flex-wrap gap-2">
              {states.map(state => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`flex items-center justify-center text-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    selectedState === state 
                    ? 'bg-emerald-500 border-emerald-500 text-black' 
                    : 'bg-transparent border-white/10 text-white/50 hover:border-emerald-500/50 hover:text-emerald-400'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16 min-h-[400px]">
            {filteredNational.map((s, idx) => (
              <SpeakerCard 
                key={`nac-${s.name}-${idx}`} 
                s={s} 
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
