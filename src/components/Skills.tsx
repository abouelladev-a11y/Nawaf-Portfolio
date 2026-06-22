import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Headphones, Layers3, Wrench, Network, Shield } from 'lucide-react';
import { motion } from 'motion/react';

function handleInteractiveMove(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export function Skills() {
  const { t } = useLanguage();
  const groups = [
    { icon: Headphones, title: t('skills.endUser'), items: ['skills.item.vip','skills.item.troubleshooting','skills.item.comms'] },
    { icon: Layers3, title: t('skills.serviceDesk'), items: ['skills.item.incident','skills.item.sla','skills.item.remote'] },
    { icon: Wrench, title: t('skills.tools'), items: ['skills.item.remedy','skills.item.msra','skills.item.teamviewer'] },
    { icon: Network, title: t('skills.network'), items: ['skills.item.tcpip','skills.item.dns','skills.item.vpn'] },
    { icon: Shield, title: t('skills.sysadmin'), items: ['skills.item.win10','skills.item.hardware','skills.item.security'] },
  ];
  const coreKeys = ['core.problem','core.technical','core.sla','core.communication','core.troubleshooting','core.vip'];
  return (
    <section id="skills" className="py-10 lg:py-16 relative">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="skills-title-pill inline-flex rounded-full border px-6 py-3 text-xs uppercase tracking-[.24em] font-black">{t('skills.title')}</div>
        </div>
        <div className="grid xl:grid-cols-[.85fr_1.15fr] gap-5">
          <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} onMouseMove={handleInteractiveMove} className="panel interactive-panel skills-radar-panel p-6 lg:p-8 min-h-[420px] flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-[420px] aspect-square flex items-center justify-center radar-zone">
              <div className="absolute inset-[20%] rounded-full border border-cyan-300/20" />
              <div className="absolute inset-[6%] rounded-full border border-gold/20" />
              <div className="absolute inset-[33%] rounded-full border border-cyan-300/12" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,.14),transparent_55%)]" />
              <div className="w-24 h-24 rounded-3xl border border-cyan-300/40 bg-cyan-400/10 flex items-center justify-center blue-glow animate-core"><Headphones className="w-10 h-10 text-cyan-300" /></div>
              {coreKeys.map((key,i)=>{
                const ang = (i/6)*Math.PI*2 - Math.PI/2; const x = 42*Math.cos(ang); const y=42*Math.sin(ang);
                return <div key={key} className="radar-label absolute text-[11px] md:text-xs text-text-muted font-black text-center max-w-[120px]" style={{left:`${50+x}%`, top:`${50+y}%`, transform:'translate(-50%,-50%)'}}>{t(key as any)}</div>
              })}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {groups.map(({icon:Icon,title,items}, idx)=>(
              <motion.div key={title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*.05}} whileHover={{y:-8}} onMouseMove={handleInteractiveMove} className="panel interactive-panel p-6 min-h-[260px]">
                <div className="w-12 h-12 rounded-xl border border-cyan-300/20 bg-cyan-300/10 flex items-center justify-center text-cyan-300 mb-6 blue-glow"><Icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-black text-text-main mb-6 leading-tight">{title}</h3>
                <div className="h-px bg-cyan-300/10 mb-6" />
                <ul className="space-y-4">
                  {items.map((key)=><li key={key} className="flex gap-3 text-sm font-bold text-text-muted"><span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-300/40 shrink-0" />{t(key as any)}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
