import React, { useEffect, useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['#about', t('nav.about')],
    ['#experience', t('nav.experience')],
    ['#skills', t('nav.skills')],
    ['#certifications', t('nav.certifications')],
    ['#contact', t('nav.contact')],
  ];

  return (
    <motion.header
      animate={{ height: scrolled ? 66 : 86 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`header-shell fixed top-0 z-[100] w-full border-b border-cyan-300/10 backdrop-blur-2xl transition-all duration-500 ${scrolled ? 'is-scrolled shadow-[0_18px_60px_rgba(0,0,0,.42)]' : ''}`}
    >
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <motion.div
            animate={{ width: scrolled ? 42 : 54, height: scrolled ? 42 : 54 }}
            className="nav-logo-mark rounded-2xl border border-gold/45 bg-[#06101F] flex items-center justify-center gold-glow relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-cyan-400/10 opacity-80" />
            <img src="/nawaf-logo.png" alt="Nawaf Alsaedi logo" className="relative z-10 w-[86%] h-[86%] object-contain rounded-xl" />
          </motion.div>
          <div className="leading-none">
            <div className="text-xl sm:text-2xl font-black tracking-[0.18em] text-text-main">NSA</div>
            <div className="hidden sm:block text-[9px] uppercase tracking-[0.28em] text-gold/80 mt-1">Support Ops</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 text-[12px] font-bold text-text-muted uppercase tracking-[0.22em]">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="relative px-5 py-3 rounded-full group hover:text-text-main transition-colors">
              <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
