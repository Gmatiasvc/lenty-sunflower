import { useEffect, useState } from 'react';

export const useScrollTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  // Función para cambiar el tema manualmente (botón)
  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const root = document.documentElement;

    // Configuración del observer
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.4,
    };

    const updateColors = (section: Element) => {
      if (!section) return;
      const computedStyle = window.getComputedStyle(section);

      // Función auxiliar para obtener variables CSS
      const getVar = (name: string) => {
        // Intenta obtener la variable específica del tema, si no, usa la default (dark)
        const val = computedStyle.getPropertyValue(`--${currentTheme}-${name}`).trim();
        return val || computedStyle.getPropertyValue(`--dark-${name}`).trim();
      };

      // Actualizamos las variables globales de React/Tailwind
      root.style.setProperty('--color-bg-1', getVar('bg-1'));
      root.style.setProperty('--color-bg-2', getVar('bg-2'));
      root.style.setProperty('--color-white', getVar('text'));
      root.style.setProperty('--color-text-1', getVar('text-1'));
      root.style.setProperty('--color-text-2', getVar('text-2'));
      root.style.setProperty('--color-text-3', getVar('text-3'));
      root.style.setProperty('--color-text-4', getVar('text-4'));
      root.style.setProperty('--color-text-5', getVar('text-5'));
      root.style.setProperty('--color-text-6', getVar('text-6'));
      root.style.setProperty('--color-hyperlink', getVar('hyperlink'));
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateColors(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section) => observer.observe(section));

    // Ejecutar updateColors inmediatamente para la sección actual visible si cambiamos de tema
    // (Nota: Esto es una simplificación, idealmente rastreamos la sección activa en un estado)
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [currentTheme]); // Se re-ejecuta cuando cambias de tema Light/Dark

  return { currentTheme, toggleTheme };
};