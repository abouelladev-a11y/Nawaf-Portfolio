import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Download, Headphones, Users, Activity, Globe2, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

function Stat({ icon: Icon, label, value, className = '' }: any) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.035 }} className={`hero-stat px-5 py-4 min-w-[190px] ${className}`}>
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl border border-cyan-300/25 bg-cyan-400/10 flex items-center justify-center text-cyan-300 blue-glow shrink-0"><Icon className="w-5 h-5" /></div>
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold leading-snug">{label}</div>
          <div className="text-xl xl:text-2xl font-black text-white mt-1 leading-tight">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero-full relative min-h-[calc(100vh-66px)] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,.18),transparent_32%),radial-gradient(circle_at_78%_46%,rgba(246,183,60,.12),transparent_32%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(56,189,248,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="hud-line absolute top-[34%] left-0 right-0 opacity-65" />
      </div>

      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="grid lg:grid-cols-[.82fr_1.18fr] gap-10 xl:gap-16 items-center">
          <div className="relative z-20 max-w-[640px]">
            <div className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2 text-gold text-[11px] font-black uppercase tracking-[0.22em] mb-8">
              <Activity className="w-3.5 h-3.5" /> {t('hero.title')}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.055em] leading-[.95] text-text-main text-glow uppercase">
              {t('hero.name')}
            </h1>
            <p className="mt-7 text-xl lg:text-2xl text-text-main font-semibold max-w-[560px]">{t('hero.statement')}</p>
            <p className="mt-4 text-text-muted max-w-[520px] leading-relaxed">{t('hero.sub')}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-gold to-amber-400 text-[#07111F] font-black uppercase tracking-[0.14em] text-xs gold-glow hover:scale-105 transition-transform"><Mail className="w-5 h-5" />{t('hero.contactBtn')}</a>
              <a href="/Nawaf_Alsaedi_Professional_CV.docx" download className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-gold/50 bg-black/5 text-text-main font-black uppercase tracking-[0.14em] text-xs hover:bg-gold/10 transition-all"><Download className="w-5 h-5 text-gold" />{t('hero.cvBtn')}</a>
            </div>
          </div>

          <div className="relative min-h-[620px] flex items-center justify-center hero-visual overflow-visible">
            <svg className="absolute inset-0 w-full h-full opacity-90" viewBox="0 0 800 560" fill="none" preserveAspectRatio="xMidYMid meet">
              <path className="network-line" d="M55 92 C220 52 342 166 405 250 C500 376 610 280 758 426" stroke="rgba(56,189,248,.68)" strokeWidth="1.5" />
              <path className="network-line" d="M65 446 C245 374 278 318 408 258 C515 208 618 124 760 86" stroke="rgba(246,183,60,.70)" strokeWidth="1.5" />
              <path className="network-line" d="M408 50 L408 505" stroke="rgba(56,189,248,.34)" strokeWidth="1" />
              <path d="M86 340 C230 210 410 174 690 220" stroke="rgba(56,189,248,.18)" strokeWidth="1" />
              <path d="M255 40 C515 -10 705 115 688 370 C670 548 392 575 328 398 C270 236 384 142 520 84" stroke="rgba(246,183,60,.12)" strokeWidth="1" />
              {[92,184,408,535,704].map((x,i)=><circle key={i} cx={x} cy={i%2?125:420} r="4.5" fill={i%2?'#F6B73C':'#38BDF8'} />)}
            </svg>
            <div className="absolute inset-6 rounded-full border border-cyan-300/10 animate-orbit" />
            <div className="absolute inset-24 rounded-full border border-gold/10 animate-orbit" style={{animationDuration:'26s'}} />

            <div className="support-core relative w-56 h-56 rounded-[40px] border border-cyan-300/35 bg-[#06101F]/94 flex flex-col items-center justify-center text-center blue-glow animate-core text-white z-20">
              <Headphones className="w-12 h-12 text-cyan-300 mb-4" />
              <div className="text-sm uppercase tracking-[0.22em] font-black leading-relaxed whitespace-pre-line">{t('hero.ops')}</div>
              <div className="mt-2 text-emerald-400 text-xs font-black tracking-[0.22em]">{t('hero.online')}</div>
            </div>

            <Stat icon={Users} label={t('hero.stat.users.label')} value="50+" className="stat-users" />
            <Stat icon={Activity} label={t('hero.stat.incidents.label')} value="7,000+" className="stat-incidents" />
            <Stat icon={Globe2} label={t('hero.stat.lang.label')} value={t('hero.stat.lang.value')} className="stat-lang" />
            <Stat icon={Building2} label={t('hero.stat.env.label')} value={t('hero.stat.env.value')} className="stat-env" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
