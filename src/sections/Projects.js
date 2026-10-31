import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = [
    'All',
    ...new Set(projectsData.flatMap((project) => project.tags)),
  ];
  const filteredProjects = projectsData.filter(
    (project) => filter === 'All' || project.tags.includes(filter)
  );

  return (
    <section id="projects" className="py-24 relative bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
           
        <motion.div
          layout
          whileHover={{ 
            scale: 1.03, 
            rotateX: 5, 
            rotateY: -5,
            boxShadow: "0px 20px 40px rgba(6, 182, 212, 0.25)" 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          // qolgan classlar...
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mening loyihalarim
          </h3>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                  : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 5, 
                rotateY: -5,
                boxShadow: "0px 20px 40px rgba(6, 182, 212, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold"
                  >
                    {project.id}
                  </motion.div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-cyan-400 text-xs font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target={project.target || '_blank'}
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-medium text-sm flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-slate-950 transition-colors duration-300"
                >
                  Saytga o'tish
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;