import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Database, Layout } from 'lucide-react';

const projects = [
  {
    title: "AI Training Platform",
    desc: "A scalable platform for managing data labeling workflows and quality assurance.",
    tech: ["React", "TypeScript", "Node.js", "Firebase"],
    icon: <Database size={24} />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-Commerce Suite",
    desc: "Modern storefront with real-time inventory management and secure checkout.",
    tech: ["Next.js", "Tailwind", "Firebase", "Stripe"],
    icon: <Layout size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Dev Dashboard",
    desc: "Customizable analytics dashboard for developers to track performance metrics.",
    tech: ["D3.js", "Vue", "Express", "Node.js"],
    icon: <Code2 size={24} />,
    color: "from-brand-yellow to-orange-500"
  }
];

const allTechs = ["All", ...new Set(projects.flatMap(p => p.tech))].sort();

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    filter === "All" || project.tech.includes(filter)
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-purple font-display uppercase tracking-widest font-bold mb-2"
            >
              Portfolio
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold font-display">Featured Projects</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-brand-yellow font-bold group">
            View All Projects <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === tech 
                ? "bg-brand-purple border-brand-purple text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]" 
                : "bg-white/5 border-white/10 text-text-secondary hover:border-brand-purple/50 hover:text-text-primary"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative glass p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
                
                <div className="w-14 h-14 rounded-2xl bg-text-primary/5 flex items-center justify-center mb-6 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-bg-primary transition-all">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-text-secondary mb-6 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      filter === t 
                      ? "bg-brand-purple/20 border-brand-purple text-brand-purple" 
                      : "bg-text-primary/5 border-border-subtle text-text-secondary"
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <Github size={20} className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
                    <ExternalLink size={20} className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Details</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">No projects found with this technology.</p>
            <button 
              onClick={() => setFilter("All")}
              className="mt-4 text-brand-purple font-bold hover:underline"
            >
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
