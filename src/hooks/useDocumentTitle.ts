import { useEffect } from 'react';

// Hook para cambiar dinámicamente el título de la página
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `CodeDev Bolivia | ${title}`;
    
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};