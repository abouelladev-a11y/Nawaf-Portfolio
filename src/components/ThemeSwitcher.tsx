import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="w-10 h-10 rounded-full border border-cyan-300/15 bg-surface/70 text-text-muted hover:text-gold hover:border-gold/50 transition-all flex items-center justify-center blue-glow" aria-label="Toggle theme">
      {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
