import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, TicketCheck, Languages, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Highlights() {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Users,
      title: t('hl.users.title'),
      desc: t('hl.users.desc'),
    },
    {
      icon: TicketCheck,
      title: t('hl.incidents.title'),
      desc: t('hl.incidents.desc'),
    },
    {
      icon: Languages,
      title: t('hl.lang.title'),
      desc: t('hl.lang.desc'),
    },
    {
      icon: Building2,
      title: t('hl.env.title'),
      desc: t('hl.env.desc'),
    }
  ];

  return (
    <section className="py-20 relative z-10 drop-shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, translateY: -10 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1, 
                  type: "spring", stiffness: 200, damping: 15
                }}
                key={idx} 
                className="flex flex-col items-center text-center p-8 bg-surface/80 backdrop-blur-xl border border-border/80 rounded-3xl group overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-gold/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300 relative z-10 shadow-inner group-hover:shadow-[0_0_20px_var(--color-gold)]">
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-5xl font-black text-text-main mb-3 tracking-tighter relative z-10 group-hover:text-gradient transition-colors">
                  {metric.title}
                </div>
                <div className="text-sm font-bold text-text-muted tracking-[0.2em] uppercase relative z-10">{metric.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
