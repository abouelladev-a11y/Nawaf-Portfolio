import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Cloud, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function Certifications() {
  const { t } = useLanguage();
  const certs = [
    { icon: Cloud, title: t('cert.az900'), issuer: t('cert.az900.issuer'), code: 'AZ-900' },
    { icon: BadgeCheck, title: t('cert.hdi'), issuer: t('cert.hdi.issuer'), code: 'HDI-CSR' },
  ];
  return (
    <section id="certifications" className="py-10 lg:py-16 relative">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="panel p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-7 h-7 text-gold" />
            <h2 className="text-3xl font-black text-text-main tracking-tight">{t('cert.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {certs.map(({icon:Icon,title,issuer,code})=>(
              <motion.div key={code} whileHover={{scale:1.02,y:-6}} className="rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/10 via-cyan-300/5 to-transparent p-8 min-h-[220px] relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-cyan-300/10 blur-3xl" />
                <div className="w-16 h-16 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 flex items-center justify-center mb-8 blue-glow"><Icon className="w-8 h-8 text-cyan-300" /></div>
                <h3 className="text-2xl font-black text-text-main max-w-md">{title}</h3>
                <div className="mt-4 flex items-center gap-3 text-sm font-bold text-text-muted"><span className="text-gold">{code}</span><span>•</span><span>{issuer}</span></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
