import { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
export function ThemeProvider({ children }) {
  // Estado inicial: modo claro, fuente mediana, animaciones activadas
  const [theme, setTheme] = useState(() => {
    // Obtener el tema guardado en localStorage, o usar 'light' por defecto
    return localStorage.getItem('theme') || 'light';
  });
  const [fontSize, setFontSize] = useState(() => {
    // Obtener el tamaño de fuente guardado, o usar 'medium' por defecto
    return localStorage.getItem('fontSize') || 'medium';
  });
  const [animationsEnabled, setAnimationsEnabled] = useState(() => {
    // Obtener el estado de las animaciones, o usar true por defecto
    return localStorage.getItem('animationsEnabled') !== 'false'; // Convertir a booleano
  });

  // Guardar las preferencias en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
    document.documentElement.classList.add(`font-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('animationsEnabled', animationsEnabled);
    document.documentElement.classList.toggle('no-animations', !animationsEnabled);
  }, [animationsEnabled]);

  // Funciones para alternar las configuraciones
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const setFontSizeOption = (size) => {
    setFontSize(size);
  };

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        fontSize,
        setFontSizeOption,
        animationsEnabled,
        toggleAnimations,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;