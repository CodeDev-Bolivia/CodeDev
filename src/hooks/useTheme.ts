import { useEffect } from 'react';
import { useThemeStore } from '../store';

// Hook personalizado para manejar el tema
export const useTheme = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};