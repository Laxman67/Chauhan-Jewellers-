import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Crown, Gem, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SimpleThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();

  const themes = [
    { key: 'amber', name: 'Amber', icon: Sparkles, gradient: 'from-amber-400 to-orange-400' },
    { key: 'black', name: 'Black', icon: Moon, gradient: 'from-gray-800 to-black' },
    { key: 'goldish', name: 'Gold', icon: Crown, gradient: 'from-yellow-500 to-yellow-600' },
    { key: 'diamondish', name: 'Diamond', icon: Gem, gradient: 'from-blue-400 to-cyan-400' },
    { key: 'silverish', name: 'Silver', icon: Star, gradient: 'from-gray-400 to-gray-500' }
  ];

  const currentThemeData = themes.find(t => t.key === currentTheme) || themes[0];
  const CurrentIcon = currentThemeData.icon;

  return (
    <div className="fixed top-24 right-6 z-[60]">
      {/* Main Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r ${currentThemeData.gradient} text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <CurrentIcon size={24} />
      </motion.button>

      {/* Theme Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-20 right-0 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px] border border-gray-200"
        >
          <div className="space-y-2">
            {themes.map((theme) => {
              const Icon = theme.icon;
              const isActive = currentTheme === theme.key;
              return (
                <motion.button
                  key={theme.key}
                  onClick={() => {
                    setTheme(theme.key);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? `bg-gradient-to-r ${theme.gradient} text-white` 
                      : 'hover:bg-gray-100 text-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.gradient} flex items-center justify-center text-white`}>
                    <Icon size={16} />
                  </div>
                  <span className="font-medium">{theme.name} Theme</span>
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
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SimpleThemeSwitcher;
