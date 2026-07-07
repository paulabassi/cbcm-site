
import React, { useState, useMemo } from 'react';
import { ASSETS } from '../src/constants';
import { Language, translations } from '../src/translations';

interface Speaker {
  name: string;
  role: string;
  univ: string;
  image?: string;
}

interface SpeakersProps {
  lang: Language;
}

const INTERNATIONAL_SPEAKERS: Speaker[] = [
  { 
    name: 'Prof. Dr. Fabian Romero Clavijo', 
    role: 'CANADÁ', 
    univ: "Bishop's University",
    image: ASSETS.SPEAKERS.INTERNATIONAL.FABIAN_ROMERO
  },
  { 
    name: 'Prof. Dr. Gregor Schöner', 
    role: 'ALEMANHA', 
    univ: 'Ruhr-Universität Bochum',
    image: ASSETS.SPEAKERS.INTERNATIONAL.GREGOR_SCHONER
  },
  { 
    name: 'Prof. Dr. James Rudd', 
    role: 'NORUEGA', 
    univ: 'Norwegian School of Sport Sciences',
    image: ASSETS.SPEAKERS.INTERNATIONAL.JAMES_RUDD
  },
  { 
    name: 'Prof. Dr. Jean-Jacques Orban de Xivry', 
    role: 'BÉLGICA', 
    univ: 'KU Leuven Institute',
    image: ASSETS.SPEAKERS.INTERNATIONAL.ORBAN_DE_XIVRY
  },
  { 
    name: 'Prof. Dr. José António Maia', 
    role: 'PORTUGAL', 
    univ: 'Faculdade de Desporto da Universidade do Porto',
    image: ASSETS.SPEAKERS.INTERNATIONAL.JOSE_MAIA
  },
  { 
    name: 'Profa. Dra. Katharina Stibrant Sunnerhagen', 
    role: 'SUÉCIA', 
    univ: 'University of Gothenburg',
    image: ASSETS.SPEAKERS.INTERNATIONAL.KATHARINA_SUNNERHAGEN
  },
  { 
    name: 'Prof. Dr. Mark L. Latash', 
    role: 'EUA', 
    univ: 'Pennsylvania State University',
    image: ASSETS.SPEAKERS.INTERNATIONAL.MARK_LATASH
  },
  { 
    name: 'Prof. Dr. Matthias Weigelt', 
    role: 'ALEMANHA', 
    univ: 'University of Paderborn',
    image: ASSETS.SPEAKERS.INTERNATIONAL.MATTHIAS_WEIGELT
  },
  { 
    name: 'Profa. Dra. Sara Pereira', 
    role: 'PORTUGAL', 
    univ: 'Faculdade de Desporto da Universidade do Porto',
    image: ASSETS.SPEAKERS.INTERNATIONAL.SARA_PEREIRA
  },
  { 
    name: 'Prof. Dr. Stuart Baker', 
    role: 'REINO UNIDO', 
    univ: 'Newcastle University',
    image: ASSETS.SPEAKERS.INTERNATIONAL.STUART_BAKER
  },
];

const NATIONAL_SPEAKERS: Speaker[] = [
  { 
    name: 'Profa. Dra. Cinthya Walter', 
    role: 'MA', 
    univ: 'Universidade Federal do Maranhão',
    image: ASSETS.SPEAKERS.NATIONAL.CINTHYA_WALTER
  },
  { 
    name: 'Prof. Dr. Danilo Silva', 
    role: 'SE', 
    univ: 'Universidade Federal de Sergipe',
    image: ASSETS.SPEAKERS.NATIONAL.DANILO_SILVA
  },
  { 
    name: 'Prof. Dr. Fabio Augusto Barbieri', 
    role: 'SP', 
    univ: 'Universidade Estadual Paulista',
    image: ASSETS.SPEAKERS.NATIONAL.FABIO_BARBIERI
  },
  { 
    name: 'Prof. Dr. Giordano Bonuzzi', 
    role: 'DF', 
    univ: 'Universidade de Brasília',
    image: ASSETS.SPEAKERS.NATIONAL.GIORDANO_BONUZZI
  },
  { 
    name: 'Prof. Dr. Go Tani', 
    role: 'SP', 
    univ: 'Escola de Educação Física e Esporte da USP',
    image: ASSETS.SPEAKERS.NATIONAL.GO_TANI
  },
  { 
    name: 'Prof. Dr. Herbert Ugrinowitsch', 
    role: 'MG', 
    univ: 'Universidade Federal de Minas Gerais',
    image: ASSETS.SPEAKERS.NATIONAL.HERBERT_UGRINOWITSCH
  },
  { 
    name: 'Profa. Dra. Isabel de Camargo Neves Sacco', 
    role: 'SP', 
    univ: 'Faculdade de Medicina da USP',
    image: ASSETS.SPEAKERS.NATIONAL.ISABEL_SACCO
  },
  { 
    name: 'Prof. Dr. José Barela', 
    role: 'SP', 
    univ: 'Universidade Estadual Paulista',
    image: ASSETS.SPEAKERS.NATIONAL.JOSE_BARELA
  },
  { 
    name: 'Prof. Dr. José Roberto de Godoi', 
    role: 'RO', 
    univ: 'Universidade Federal de Rondônia',
    image: ASSETS.SPEAKERS.NATIONAL.JOSE_GODOI
  },
  { 
    name: 'Profa. Dra. Juliana Barbosa Goulardins', 
    role: 'BA', 
    univ: 'Escola Bahiana de Medicina e Saúde Pública',
    image: ASSETS.SPEAKERS.NATIONAL.JULIANA_GOULARDINS
  },
  { 
    name: 'Prof. Dr. Lucio Ferreira', 
    role: 'AM', 
    univ: 'Universidade Federal do Amazonas',
    image: ASSETS.SPEAKERS.NATIONAL.LUCIO_FERREIRA
  },
  { 
    name: 'Profa. Dra. Natalia Duarte Pereira', 
    role: 'SP', 
    univ: 'Universidade Federal de São Carlos', 
    image: ASSETS.SPEAKERS.NATIONAL.NATALIA_PEREIRA
  },
  { 
    name: 'Profa. Dra. Paula Fávaro Polastri Zago', 
    role: 'SP', 
    univ: 'Universidade Estadual Paulista', 
    image: ASSETS.SPEAKERS.NATIONAL.PAULA_ZAGO
  },
  { 
    name: 'Dr. Paulo Cezar Rocha dos Santos', 
    role: 'RJ', 
    univ: "Instituto D'Or",
    image: ASSETS.SPEAKERS.NATIONAL.PAULO_CEZAR
  },
  { 
    name: 'Prof. Dr. Paulo Felipe Bandeira', 
    role: 'CE', 
    univ: 'Universidade Regional do Cariri',
    image: ASSETS.SPEAKERS.NATIONAL.PAULO_FELIPE
  },
  { 
    name: 'Prof. Dr. Rafael dos Santos Henrique', 
    role: 'PE', 
    univ: 'Universidade Federal de Pernambuco',
    image: ASSETS.SPEAKERS.NATIONAL.RAFAEL_HENRIQUE
  },
  { 
    name: 'Prof. Dr. Renato Moraes', 
    role: 'SP', 
    univ: 'EEFERP-USP',
    image: ASSETS.SPEAKERS.NATIONAL.RENATO_MORAES
  },
  { 
    name: 'Prof. Dr. Ricardo Drews', 
    role: 'RS', 
    univ: 'Universidade Federal de Santa Maria',
    image: ASSETS.SPEAKERS.NATIONAL.RICARDO_DREWS
  },
  { 
    name: 'Prof. Dr. Rodolfo Benda', 
    role: 'RS', 
    univ: 'Universidade Federal de Pelotas', 
    image: ASSETS.SPEAKERS.NATIONAL.RODOLFO_BENDA
  },
  { 
    name: 'Prof. Dr. Sérgio Tosi Rodrigues', 
    role: 'SP', 
    univ: 'Universidade Estadual Paulista', 
    image: ASSETS.SPEAKERS.NATIONAL.SERGIO_RODRIGUES
  },
  { 
    name: 'Prof. Dr. Vitor Profeta', 
    role: 'MG', 
    univ: 'Universidade Federal de Minas Gerais',
    image: ASSETS.SPEAKERS.NATIONAL.VITOR_PROFETA
  }
];


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
  }, [t.all]);

  const states = useMemo(() => {
    const uniqueStates = Array.from(new Set(NATIONAL_SPEAKERS.map(s => s.role))).sort();
    return [t.all, ...uniqueStates];
  }, [t.all]);

  const filteredInternational = useMemo(() => {
    if (selectedCountry === t.all) return INTERNATIONAL_SPEAKERS;
    return INTERNATIONAL_SPEAKERS.filter(s => s.role === selectedCountry);
  }, [selectedCountry, t.all]);

  const filteredNational = useMemo(() => {
    if (selectedState === t.all) return NATIONAL_SPEAKERS;
    return NATIONAL_SPEAKERS.filter(s => s.role === selectedState);
  }, [selectedState, t.all]);

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
