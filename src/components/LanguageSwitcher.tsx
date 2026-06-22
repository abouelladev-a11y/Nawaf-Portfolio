import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe2, ChevronDown } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="h-10 px-4 rounded-full border border-gold/30 bg-surface/70 text-text-main hover:border-gold hover:bg-gold/10 transition-all flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase" aria-label="Toggle language">
      <Globe2 className="w-4 h-4 text-gold" />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
      <ChevronDown className="w-3 h-3 text-text-muted" />
    </button>
  );
}
