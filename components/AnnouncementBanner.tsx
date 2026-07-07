import React from 'react';
import { MessageCircle, QrCode } from 'lucide-react';
import { translations, Language } from '../src/translations';

interface AnnouncementBannerProps {
  lang: Language;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ lang }) => {
  const t = translations[lang].announcement;

  return (
    <section className="relative w-full py-20 md:py-32 min-h-[550px] md:min-h-[500px] flex items-center bg-emerald-950/60 border-y border-emerald-500/30 backdrop-blur-md group">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-4 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Side: Information */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left max-w-3xl">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/60 transition-colors duration-500">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-display font-black text-emerald-500 uppercase tracking-[0.3em] text-xs md:text-sm">
                WhatsApp SOCIBRACOM
              </span>
              <p className="text-xl md:text-2xl font-sans font-bold text-white leading-tight md:leading-snug tracking-tight">
                {t.whatsapp}
              </p>
            </div>
          </div>

          {/* Right Side: QR Code Slot */}
          <div className="flex flex-col items-center gap-8 group/qr w-full md:w-auto mt-6 md:mt-0 pb-4 md:pb-0">
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-emerald-500/40 to-transparent shadow-[0_0_40px_rgba(16,185,129,0.2)] group-hover/qr:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-700">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-[#051109] rounded-[22px] flex flex-col items-center justify-center p-4 border border-white/5 relative overflow-hidden">
                {/* Scanner Grid Mockup */}
                <div className="absolute inset-4 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                <img 
                  src="/images/decor/qr code whatsapp.webp" 
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain relative z-10 p-1 group-hover/qr:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Scanning Line Animation */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.8)] -translate-y-full group-hover/qr:animate-[largeScan_3s_ease-in-out_infinite]" />
              </div>
            </div>
            <div className="text-center w-full px-4 md:px-0">
              <span className="block text-base md:text-lg font-sans font-extrabold text-emerald-400 uppercase tracking-widest group-hover/qr:text-emerald-300 transition-colors duration-300 leading-relaxed">
                {t.joinGroup}
              </span>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes largeScan {
          0% { transform: translateY(-10px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(160px); opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default AnnouncementBanner;
