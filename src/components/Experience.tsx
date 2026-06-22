import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BriefcaseBusiness, MapPin, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="py-10 lg:py-16 relative">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="panel p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-gold font-black mb-3">{t('exp.title')}</div>
              <h2 className="text-3xl lg:text-4xl font-black text-text-main tracking-tight">{t('exp.role')}</h2>
              <p className="mt-2 text-text-muted">{t('exp.company')}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm font-bold text-text-muted">
              <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-gold" />{t('exp.date')}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" />{t('exp.loc')}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((n) => (
              <motion.div key={n} whileHover={{y:-5}} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/[.035] p-5 min-h-[150px]">
                <BriefcaseBusiness className="w-5 h-5 text-gold mb-5" />
                <p className="text-sm leading-relaxed text-text-muted font-medium">{t(`exp.bullet.${n}` as any)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
