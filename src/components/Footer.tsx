import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Linkedin, Quote, MessageCircle } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const contacts = [
    [Mail, t('contact.email'), '', 'mailto:nawaf.alsaedi@outlook.com'],
    [Phone, t('contact.phone'), '+966 50 740 0657', 'tel:+966507400657'],
    [MessageCircle, t('contact.whatsapp'), '', 'https://wa.me/966507400657'],
    [MapPin, t('contact.location'), '', '#'],
    [Linkedin, t('contact.linkedin'), '', 'https://www.linkedin.com/in/nawaf-techsupport'],
  ];
  return (
    <footer id="contact" className="relative z-10 pb-8 pt-10">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="panel p-6 lg:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
            {contacts.map(([Icon,label,value,href]: any)=>(
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-card flex items-center gap-4 rounded-2xl border border-cyan-300/10 bg-cyan-300/[.035] p-4 hover:border-gold/40 hover:-translate-y-1 transition-all min-h-[92px] min-w-0">
                <div className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0"><Icon className="w-5 h-5" /></div>
                <div className="min-w-0 flex-1"><div className="text-sm text-text-main font-black whitespace-nowrap">{label}</div>{value && <div className="contact-value text-sm text-text-muted mt-1">{value}</div>}</div>
              </a>
            ))}
          </div>
          <div className="mt-8 pt-7 border-t border-cyan-300/10 flex gap-5 items-start text-text-muted italic leading-relaxed max-w-4xl">
            <Quote className="w-8 h-8 text-gold shrink-0" />
            <p>{t('contact.quote')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
