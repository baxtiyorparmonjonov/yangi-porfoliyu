import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GithubMark = ({ className }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.43 3.42 1.72.1-.73.39-1.23.7-1.52-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.77 10.77 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.62 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
    />
  </svg>
);

// Quyosh (Sun) ikonka komponenti
const SunIcon = ({ className }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// Oy (Moon) ikonka komponenti
const MoonIcon = ({ className }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Navbar = ({ darkMode: controlledDarkMode, setDarkMode: setControlledDarkMode } = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [localDarkMode, setLocalDarkMode] = useState(true);
  const darkMode = controlledDarkMode ?? localDarkMode;
  const updateDarkMode = setControlledDarkMode || setLocalDarkMode;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Bosh sahifa', href: '#hero' },
    { name: 'Tajriba', href: '#experience' },
    { name: 'Ko\'nikmalar', href: '#skills' },
    { name: 'Loyihalar', href: '#projects' },
    { name: 'Aloqa', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode 
            ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className={`text-2xl font-bold tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          <span className="text-cyan-400">&lt;</span>
          Portfolio
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        {/* Desktop Menyu, Tema o'zgartirgich va GitHub Ikonka */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.1, color: '#22d3ee' }}
              className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-medium transition-colors duration-200`}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Theme (Sun/Moon) Toggle Tugmasi */}
          <motion.button
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center shadow-lg ${
              darkMode 
                ? 'bg-slate-900/80 border-slate-800 text-amber-400 hover:border-amber-400/50' 
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-600 hover:border-cyan-500'
            }`}
            title="Rejimni o'zgartirish"
            aria-label="Rejimni o'zgartirish"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </motion.button>
          
          {/* GitHub Ikonka tugmasi */}
          <motion.a
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/baxtiyorparmonjonov"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center shadow-lg ${
              darkMode 
                ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50' 
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-cyan-600 hover:border-cyan-500'
            }`}
            title="GitHub Profil"
            aria-label="GitHub profilini yangi oynada ochish"
          >
            <GithubMark className="w-5 h-5" />
          </motion.a>

          {/* Bog'lanish Tugmasi */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Bog'lanish
          </motion.a>
        </div>

        {/* Mobil uchun Gamburger va Tema tugmasi */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => updateDarkMode(!darkMode)}
            className={`p-2 rounded-lg border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-700'
            }`}
            aria-label="Rejimni o'zgartirish"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
          >
            <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil Menyu */}
      {isOpen && (
        <motion.div 
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className={`md:hidden border-b px-6 pt-4 pb-6 mt-4 flex flex-col gap-4 ${
            darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} hover:text-cyan-400 font-medium transition-colors duration-200 text-lg`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/baxtiyorparmonjonov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profilini yangi oynada ochish"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 font-medium py-2 border-t border-slate-800 mt-2"
          >
            <GithubMark className="w-5 h-5 text-cyan-400" />
            <span>GitHub Profil</span>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;