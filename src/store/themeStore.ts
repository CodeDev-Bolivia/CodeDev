import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeState } from '../types';

// Store para manejar el tema (dark/light mode)
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage', // persistencia en localStorage
    }
  )
);