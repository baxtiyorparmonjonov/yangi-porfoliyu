import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Texnologiyalar</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mening ko'nikmalarim
          </h3>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl hover:border-cyan-500/40 transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                {group.category}
              </h4>

              <div className="space-y-6">
                {group.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
                      <span className="text-slate-400 font-mono text-xs">{skill.level}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;