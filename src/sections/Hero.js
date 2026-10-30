    import React from 'react';
    import { motion } from 'framer-motion';

    const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Orqa fondagi yorug'lik blur effektlari */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
            
            {/* Matn qismi uchun oddiy kirish animatsiyasi */}
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start gap-6"
            >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-sm font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Frontend Dasturchi
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Salom, men <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Baxtiyor
                </span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Zamonaviy, tez va foydalanuvchilar uchun qulay bo'lgan interaktiv veb-interfeyslarni yarataman.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                >
                Loyihalarimni ko'rish
                </a>
            </div>
            </motion.div>

            {/* 3D effekt berilgan qism (Card) */}
            <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center perspective-1000"
            >
            <motion.div
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-cyan-500/20 via-slate-800/40 to-slate-900/60 shadow-2xl backdrop-blur-xl cursor-pointer"
            >
                <div className="w-full h-full bg-slate-900/90 rounded-[22px] border border-slate-800 p-6 flex flex-col justify-between overflow-hidden relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">developer.js</span>
                </div>

                <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-3 my-auto">
                    <p className="text-purple-400">
                    <span className="text-red-400">const</span> developer <span className="text-red-400">=</span> &#123;
                    </p>
                    <p className="pl-4">
                    name: <span className="text-emerald-400">'Baxtiyor'</span>,
                    </p>
                    <p className="pl-4">
                    role: <span className="text-emerald-400">'Frontend Developer'</span>,
                    </p>
                    <p className="pl-4">
                    skills: [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'JS'</span>, <span className="text-emerald-400">'Tailwind'</span>],
                    </p>
                    <p className="text-purple-400">&#125;;</p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                        <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Freelance buyurtmalar uchun ochiqman</span>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 3D Active
                    </span>
                    <span>UTF-8</span>
                </div>
                </div>
            </motion.div>
            </motion.div>

        </div>
        </section>
    );
    };

    export default Hero;