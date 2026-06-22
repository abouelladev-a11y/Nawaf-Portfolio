import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MessageCircle, Zap, Headphones, FileText, Search, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

function handleInteractiveMove(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export function About() {
  const { t } = useLanguage();
  const items = [
    [ShieldCheck, t('about.trust')],
    [Zap, t('about.sla')],
    [MessageCircle, t('about.communication')],
    [Headphones, t('about.remote')],
  ];
  const steps = [
    [Headphones, t('workflow.user')],
    [FileText, t('workflow.incident')],
    [Search, t('workflow.diagnosis')],
    [CheckCircle2, t('workflow.resolution')],
    [ShieldCheck, t('workflow.trust')],
  ];
  return (
    <section id="about" className="py-10 lg:py-16 relative">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-5">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="panel p-8 lg:p-10 min-h-[360px]">
            <div className="text-xs uppercase tracking-[0.24em] text-gold font-black mb-5">{t('about.title')}</div>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-text-main mb-6">{t('about.heading')}</h2>
            <p className="text-text-muted leading-relaxed text-lg">{t('about.p1')}</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map(([Icon, label]: any) => (
                <motion.div whileHover={{y:-4, scale:1.02}} key={label} className="flex items-center gap-3 rounded-xl border border-cyan-300/10 bg-cyan-400/5 px-4 py-3">
                  <Icon className="w-5 h-5 text-gold" />
                  <span className="text-sm font-bold text-text-main">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1}} onMouseMove={handleInteractiveMove} className="panel interactive-panel p-8 lg:p-10 min-h-[360px]">
            <div className="text-xs uppercase tracking-[0.24em] text-text-main font-black mb-7">{t('about.ops')}</div>
            <div className="relative h-[280px] rounded-2xl border border-cyan-300/10 bg-[#020617]/55 overflow-hidden flex items-center justify-center workflow-zone">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.18),transparent_45%)]" />
              <div className="absolute w-[460px] h-[460px] rounded-full border border-cyan-300/10 animate-orbit" />
              <div className="absolute w-[330px] h-[330px] rounded-full border border-gold/10 animate-orbit" style={{animationDuration:'24s'}} />
              <div className="relative z-10 w-28 h-28 rounded-full border border-cyan-300/30 bg-cyan-300/10 flex items-center justify-center blue-glow">
                <Headphones className="w-12 h-12 text-cyan-300" />
              </div>
              <div className="absolute inset-x-6 bottom-8 grid grid-cols-5 gap-2 z-20">
                {steps.map(([Icon, label]: any, i) => (
                  <motion.div key={label} whileHover={{y:-8, scale:1.05}} className="workflow-step text-center">
                    <div className="workflow-icon mx-auto mb-2 w-10 h-10 rounded-xl border border-cyan-300/20 bg-cyan-300/10 flex items-center justify-center text-cyan-300"><Icon className="w-5 h-5" /></div>
                    <div className="text-[10px] md:text-[11px] uppercase tracking-[.08em] font-bold text-white/80">{label}</div>
                    {i < steps.length - 1 && <span className="hidden md:block absolute top-5 left-[calc(100%-6px)] w-5 h-px bg-gradient-to-r from-cyan-300/60 to-gold/60" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
