import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer o'quvchisi",
      company: "It Live O'quv Markazi",
      period: "2026 - Hozirgi vaqt",
      description: "React, Tailwind CSS, JavaScript va zamonaviy veb-texnologiyalar bo'yicha chuqurlashtirilgan bilim olib, real loyihalar yaratmoqdaman.",
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
    },
    {
      id: 2,
      title: "Full-Stack va Veb-Ilovalar yaratish",
      company: "Mustaqil loyihalar",
      period: "2026 - Hozirgi vaqt",
      description: "React komponentlari, tailwind dizaynlar va interaktiv veb-saytlar (Demo Day taqdimotlari, o'yinlar va xizmat platformalari) ustida ishlamoqdaman.",
      icon: <BriefcaseBusiness className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Bosqichlar</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tajriba va Ta'lim
          </h3>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {experiences.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline nuqtasi */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                {item.icon}
              </div>

              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                {item.period}
              </span>
              
              <h4 className="text-xl font-bold text-white mt-3">{item.title}</h4>
              <p className="text-slate-400 font-medium text-sm mb-2">{item.company}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;