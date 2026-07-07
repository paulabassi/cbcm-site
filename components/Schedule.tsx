
import React, { useState } from 'react';
import { Language, translations } from '../src/translations';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScheduleProps {
  lang: Language;
}

const Schedule: React.FC<ScheduleProps> = ({ lang }) => {
  const t = translations[lang].schedule;
  const [activeDay, setActiveDay] = useState<'day0' | 'day1' | 'day2' | 'day3'>('day1');

  const days = [
    { id: 'day0', label: t.day0, date: t.date0, location: (t as any).location0 },
    { id: 'day1', label: t.day1, date: t.date1, location: (t as any).location1 },
    { id: 'day2', label: t.day2, date: t.date2, location: (t as any).location2 },
    { id: 'day3', label: t.day3, date: t.date3, location: (t as any).location3 },
  ] as const;

  const activeItems = (t.items as any)[activeDay] || [];
  const activeDayData = days.find(d => d.id === activeDay);

  return (
    <section id="programacao" className="relative py-20 md:py-32 px-6 md:px-12 bg-[#050505] overflow-hidden scroll-mt-0 border-t border-white/5">
      {/* Decorative Background: Technical Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.30] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="font-display font-bold text-[32px] lg:text-[44px] tracking-tighter text-white mb-6">
            {t.title} <span className="text-emerald-500">{t.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1.5 bg-emerald-600 rounded-full mx-auto mb-8"></div>
          
          {/* Active Day Location Callout - Upgraded with Mono font */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center gap-3 text-emerald-400/80"
            >
              <MapPin size={16} />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono-distinct font-bold">
                {activeDayData?.location}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-20">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`relative px-6 py-3 md:px-8 md:py-4 rounded-2xl transition-all duration-500 group overflow-hidden ${
                activeDay === day.id 
                  ? 'text-black' 
                  : 'text-white/60 hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {activeDay === day.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-emerald-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-display font-black text-sm md:text-base uppercase tracking-tighter leading-none mb-1">
                  {day.label}
                </span>
                <span className={`text-[10px] uppercase tracking-widest font-bold ${activeDay === day.id ? 'text-black/60' : 'text-emerald-500/60'}`}>
                  {day.date}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-[10.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              {activeItems.map((item: any, idx: number) => (
                <div 
                  key={idx}
                  className="group relative flex flex-col md:flex-row gap-4 md:gap-12 p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:bg-white/[0.06] hover:border-emerald-500/40 transition-all duration-500 shadow-xl hover:shadow-emerald-500/5 overflow-hidden"
                >
                  {/* Glass Sheen Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                  {/* Time Column */}
                  <div className="md:w-32 flex-shrink-0 relative">
                    <div className="flex items-center gap-3 text-emerald-400 mb-1">
                      <Clock size={14} className="opacity-60" />
                      <span className="font-mono-distinct text-xs md:text-sm font-black tracking-tighter uppercase">
                        {item.time}
                      </span>
                    </div>
                    {/* Timeline Dot on the line */}
                    <div className="absolute -left-[4.15rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 hidden md:block group-hover:bg-emerald-500 group-hover:scale-125 transition-all duration-500" />
                  </div>

                  {/* Activity Content */}
                  <div className="flex-grow">
                    <h3 className="font-display font-semibold text-xl md:text-2xl text-white group-hover:text-emerald-400 transition-colors tracking-tight leading-tight mb-4">
                      {item.activity}
                    </h3>
                    {item.details && (
                      <div className="text-emerald-50/60 text-sm md:text-base leading-relaxed whitespace-pre-line font-medium border-l-2 border-emerald-500/30 pl-5 py-1 group-hover:border-emerald-500 transition-colors">
                        {item.details}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
