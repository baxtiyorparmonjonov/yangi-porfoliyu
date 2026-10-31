import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';

const Hero = ({ darkMode }) => {
  return (
    <section 
      id="hero" 
      className={`min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Orqa fondagi harakatlanuvchi zamonaviy neon nurlar */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Chap tomon: Matnlar va tugmalar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              Freelance buyurtmalar uchun ochiqman
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Salom, men <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">A'zamjon</span> <br />
            Frontend Dasturchiman
          </h1>

          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Zamonaviy, yuqori unumdorlikka ega, 3D animatsiyali va har qanday qurilmada mukammal ishlaydigan veb-ilovalar yarataman.
          </p>

          {/* Tugmalar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.6)] animate-pulse hover:bg-cyan-400 transition-all"
                >
                <span>Loyihalarni ko'rish</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-8 py-4 rounded-xl font-bold border transition-all ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-800 text-white hover:border-cyan-500/50 hover:bg-slate-900' 
                  : 'bg-white border-slate-300 text-slate-800 hover:border-cyan-500 shadow-sm'
              }`}
            >
              Bog'lanish
            </motion.a>
          </div>
        </motion.div>

        {/* O'ng tomon: 3D Interaktiv Kod Bloki / Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: 3, rotateX: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`rounded-2xl border p-6 shadow-2xl relative backdrop-blur-xl ${
              darkMode 
                ? 'bg-slate-900/80 border-slate-800/80 shadow-[0_0_50px_rgba(6,182,212,0.1)]' 
                : 'bg-white/90 border-slate-200 shadow-xl'
            }`}
          >
            {/* Terminal Sarlavhasi */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>portfolio.js</span>
              </div>
            </div>

            {/* Kod Mazmuni */}
            <div className="font-mono text-xs sm:text-sm space-y-2 overflow-x-auto">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> = &#123;</p>
              <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-emerald-400">'A\'zamjon'</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-emerald-400">'Frontend Engineer'</span>,</p>
              <p className="pl-4"><span className="text-cyan-400">skills</span>: [</p>
              <p className="pl-8 text-emerald-400">'React.js', 'Tailwind CSS', 'JavaScript', 'Node.js'</p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-cyan-400">status</span>: <span className="text-emerald-400">'Ready to work'</span></p>
              <p>&#125;;</p>
              <br />
              <p className="text-slate-500">// Saytimizga xush kelibsiz! 🚀</p>
            </div>

            {/* Dekorativ element */}
            <div className="absolute -bottom-3 -right-3 p-3 rounded-2xl bg-cyan-500 text-slate-950 shadow-lg">
              <Sparkles className="w-6 h-6 animate-spin" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;