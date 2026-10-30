import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#hero" className="text-xl font-bold tracking-wider text-white">
          <span className="text-cyan-400">&lt;</span>
          Portfolio
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        <p className="text-slate-500 text-sm font-mono">
          &copy; {new Date().getFullYear()} Baxtiyor. Barcha huquqlar himoyalangan.
        </p>

        <a
          href="#hero"
          className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;