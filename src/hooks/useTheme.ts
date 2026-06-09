import { useEffect, useState } from 'react';
import type { Theme } from '../types';

const storageKey = 'portfolio-theme';

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return getSystemTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', syncTheme);

    return () => mediaQuery.removeEventListener('change', syncTheme);
  }, []);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
