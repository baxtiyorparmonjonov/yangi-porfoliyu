import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      title: 'Ta\'lim va Tajriba',
      description: 'Gulistonda joylashgan "It live" o\'quv markazida frontend yo\'nalishi bo\'yicha chuqur ta\'lim olib, amaliy ko\'nikmalarimni oshirib kelmoqdaman.',
    },
    {
      title: 'Toza Kod va Arxitektura',
      description: 'Kod yozishda tartibga, tushunarli va modulli arxitekturaga hamda clean code tamoyillariga qat\'iy amal qilaman.',
    },
    {
      title: 'UI / UX Estetikasi',
      description: 'Glassmorphism, qorong\'u rejim (dark mode), neon yorug\'lik effektlari va yuqori kontrastli dizaynlarni xush ko\'raman.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Tanishuv</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Men haqimda qisqacha
          </h3>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.03, rotateY: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-slate-900/60 shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              <div className="w-full h-full bg-slate-900/90 rounded-[22px] border border-slate-800 p-8 flex flex-col justify-center text-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 mx-auto flex items-center justify-center text-cyan-400 text-3xl font-bold mb-6 shadow-inner">
                  B
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Baxtiyor</h4>
                <p className="text-cyan-400 font-medium text-sm mb-6">Frontend Developer</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Har bir yaratayotgan loyihamda foydalanuvchi qulayligi va kod sifatini birinchi o'ringa qo'yaman.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Assalomu alaykum! Men veb dasturlash olamiga qiziqib, uni professional darajada o'rganib kelayotgan frontend dasturchiman. Asosiy e'tiborim <span className="text-cyan-400 font-semibold">JavaScript</span> va <span className="text-cyan-400 font-semibold">React.js</span> texnologiyalari yordamida zamonaviy va interaktiv veb-ilovalar yaratishga qaratilgan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-cyan-500/50 transition-colors"
                >
                  <h5 className="text-white font-semibold mb-2">{item.title}</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;