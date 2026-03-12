import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles, Gem, Crown, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const themeIcons = {
  amber: Sparkles,
  black: Moon,
  goldish: Crown,
  diamondish: Gem,
  silverish: Star
};

const themeGradients = {
  amber: 'from-amber-400 to-orange-400',
  black: 'from-gray-800 to-black',
  goldish: 'from-yellow-500 to-yellow-600',
  diamondish: 'from-blue-400 to-cyan-400',
  silverish: 'from-gray-400 to-gray-500'
};

export const ThemeSwitcher = () => {
  try {
    const { currentTheme, setTheme, themes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const currentIcon = themeIcons[currentTheme];

    return (
      <div className="fixed top-24 right-6 z-[60]">
        {/* Main Theme Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r ${themeGradients[currentTheme]} text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <currentIcon size={24} />
        </motion.button>

      {/* Theme Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          className="absolute top-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 min-w-[200px] border border-gray-200 dark:border-gray-700"
        >
          <div className="space-y-2">
            {Object.entries(themes).map(([themeKey, theme]) => {
              const Icon = themeIcons[themeKey];
              return (
                <motion.button
                  key={themeKey}
                  onClick={() => {
                    setTheme(themeKey);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentTheme === themeKey
                      ? `bg-gradient-to-r ${themeGradients[themeKey]} text-white`
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${themeGradients[themeKey]} flex items-center justify-center text-white`}>
                    <Icon size={16} />
                  </div>
                  <span className="font-medium">{theme.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Backdrop */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('ThemeSwitcher error:', error);
    return null;
  }
};
