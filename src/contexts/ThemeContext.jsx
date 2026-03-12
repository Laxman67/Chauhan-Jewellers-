import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  amber: {
    name: 'Amber Classic',
    colors: {
      primary: '#eab308',
      secondary: '#f59e0b',
      accent: '#d97706',
      background: '#fffdf0',
      surface: '#fefce8',
      text: '#78350f',
      textSecondary: '#92400e',
      border: '#fde047',
      gradient: 'from-amber-50 via-white to-orange-50',
      buttonGradient: 'from-amber-500 to-orange-500',
      cardGradient: 'from-amber-50 to-orange-50'
    }
  },
  black: {
    name: 'Midnight Black',
    colors: {
      primary: '#000000',
      secondary: '#1a1a1a',
      accent: '#333333',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#d1d5db',
      border: '#374151',
      gradient: 'from-gray-900 via-black to-gray-900',
      buttonGradient: 'from-gray-800 to-black',
      cardGradient: 'from-gray-800 to-gray-900'
    }
  },
  goldish: {
    name: 'Royal Gold',
    colors: {
      primary: '#d4af37',
      secondary: '#f4e4bc',
      accent: '#b8941f',
      background: '#1a1a1a',
      surface: '#2a2a2a',
      text: '#f4e4bc',
      textSecondary: '#d4af37',
      border: '#d4af37',
      gradient: 'from-gray-900 via-yellow-900 to-gray-900',
      buttonGradient: 'from-yellow-600 to-yellow-500',
      cardGradient: 'from-gray-800 to-yellow-900'
    }
  },
  diamondish: {
    name: 'Diamond Blue',
    colors: {
      primary: '#0ea5e9',
      secondary: '#7dd3fc',
      accent: '#0284c7',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#e0f2fe',
      textSecondary: '#7dd3fc',
      border: '#0ea5e9',
      gradient: 'from-slate-900 via-blue-900 to-slate-900',
      buttonGradient: 'from-blue-500 to-cyan-500',
      cardGradient: 'from-slate-800 to-blue-900'
    }
  },
  silverish: {
    name: 'Silver Elegance',
    colors: {
      primary: '#c0c0c0',
      secondary: '#e5e5e5',
      accent: '#a8a8a8',
      background: '#1a1a1a',
      surface: '#2d2d2d',
      text: '#e5e5e5',
      textSecondary: '#c0c0c0',
      border: '#808080',
      gradient: 'from-gray-900 via-gray-800 to-gray-900',
      buttonGradient: 'from-gray-400 to-gray-500',
      cardGradient: 'from-gray-800 to-gray-700'
    }
  }
};

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('amber');

  const theme = themes[currentTheme];

  const setTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('selectedTheme', themeName);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
