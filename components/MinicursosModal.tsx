import React from 'react';
import { 
  X, 
  Clock, 
  User, 
  BookOpen, 
  Info, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Users
} from 'lucide-react';
import { Language } from '../src/translations';
import { conteudoOriginal } from '../src/conteudo';

interface MinicursosModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const MinicursosModal: React.FC<MinicursosModalProps> = ({ isOpen, onClose, lang }) => {
  const content = conteudoOriginal[lang].minicursos;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-[fadeIn_0.2s_ease-out_forwards]">
      {/* Backdrop with elegant blur */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-950 border border-emerald-500/30 rounded-3xl overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(16,185,129,0.2)] z-10 animate-[zoomIn_0.3s_ease-out_forwards]">
        {/* Subtle decorative glow overlay */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 md:p-8 border-b border-white/10 shrink-0">
          <div className="flex-1 pr-6">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-none">
              {content.title}
            </h3>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 active:scale-95 shrink-0"
            aria-label={content.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable List */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 custom-scrollbar">
          
          {/* Info and Registration Section (Unified grid layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Quick Details: Location & Date (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-3">
              {/* Date Card */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex items-start gap-3">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-0.5">
                    {lang === 'pt' ? 'Data' : 'Date'}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-white leading-snug">
                    {content.date}
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    {lang === 'pt' ? 'No pré-evento' : 'At the pre-event'}
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-2xl flex items-start gap-3">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-0.5">
                    {lang === 'pt' ? 'Local' : 'Location'}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-white leading-snug">
                    {content.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Procedure Card (lg:col-span-7) */}
            <div className="lg:col-span-7 p-5 bg-emerald-950/10 border border-emerald-500/20 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <h4 className="font-display font-black text-base md:text-2xl text-white mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                {content.howItWorks.title}
              </h4>

              <div className="space-y-2 mb-4">
                {content.howItWorks.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-[9px] font-mono font-bold text-emerald-400 shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Limits and CTA Bar */}
              <div className="pt-3 border-t border-emerald-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                {/* Limits */}
                <div className="space-y-0.5">
                  <span className="text-[9px] md:text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <Users className="w-3 h-3 text-emerald-400" />
                    {content.howItWorks.limitsLabel}
                  </span>
                  <ul className="list-none text-[10px] md:text-xs text-white/50 space-y-0.5">
                    {content.howItWorks.limits.map((lim, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                        {lim}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pre-register Button */}
                <a 
                  href={content.howItWorks.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-display font-extrabold text-[10px] tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 shrink-0"
                >
                  <span>{content.howItWorks.linkText}</span>
                  <ExternalLink className="w-3 h-3 text-black stroke-[2.5px]" />
                </a>
              </div>

            </div>
          </div>

          {/* Separation Header */}
          <div className="pt-4 border-t border-white/5">
            <h4 className="font-display font-bold text-lg md:text-2xl text-white/90 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              {lang === 'pt' ? 'Grade de Minicursos' : 'Short Courses Schedule'}
            </h4>

            {/* Courses List Container */}
            <div className="space-y-3">
              {content.courses.map((course) => {
                return (
                  <div 
                    key={course.id}
                    className="p-4 sm:p-5 bg-white/[0.01] border border-white/10 hover:border-emerald-500/20 hover:bg-white/[0.03] rounded-2xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      {/* Time pill */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 rounded-lg">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          {course.time}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-sm sm:text-base md:text-xl text-white leading-snug">
                        {course.title}
                      </h4>

                      <div className="flex items-center gap-2 text-xs md:text-sm text-white/70">
                        <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-black/40 flex items-center justify-end gap-4 shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a 
              href={content.howItWorks.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-2.5 bg-emerald-500 text-black hover:bg-emerald-400 rounded-xl font-display font-extrabold text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-[0_4px_15px_rgba(16,185,129,0.2)] shrink-0"
            >
              {lang === 'pt' ? 'Ir para Pré-Inscrição' : 'Go to Pre-Registration'}
            </a>
            <button
              onClick={onClose}
              className="hidden sm:block w-full sm:w-auto px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 active:scale-95"
            >
              {content.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinicursosModal;
