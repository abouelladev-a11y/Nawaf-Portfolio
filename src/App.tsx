import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundAnimation } from './components/BackgroundAnimation';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen control-bg grid-overlay selection:bg-gold/30 selection:text-white relative overflow-x-hidden">
          <BackgroundAnimation />
          <CustomCursor />
          <Header />
          <main className="relative z-10 pt-24">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Certifications />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
