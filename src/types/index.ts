// Tipos globales del proyecto

export interface NavItem {
  label: string;
  path: string;
}

export interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface PageProps {
  title?: string;
}