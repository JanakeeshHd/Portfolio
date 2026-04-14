import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { projects } from '../../data/portfolio';
import { Github, ExternalLink, X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: typeof projects[0];
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[70] glass rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)] border-white/10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all z-20 backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Left Side - Image Showcase */}
            <div className="lg:w-3/5 h-64 lg:h-full relative overflow-hidden group bg-slate-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                <div className="flex gap-3">
                   {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold rounded-full bg-white/10 text-white border border-white/20 uppercase tracking-tighter backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content & Details */}
            <div className="lg:w-2/5 p-8 lg:p-12 overflow-y-auto space-y-10 bg-slate-950/50 relative">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <CheckCircle2 className="text-green-400" size={16} />
                    Key Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
                <Button variant="primary" className="flex-1 h-14 rounded-2xl" onClick={() => window.open(project.demo, '_blank')}>
                  Launch App <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="secondary" className="flex-1 h-14 rounded-2xl bg-white/5 border-white/10 hover:bg-white/10" onClick={() => window.open(project.github, '_blank')}>
                  Repository <Github className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, idx, onOpen }: { project: typeof projects[0], idx: number, onOpen: (p: typeof projects[0]) => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      onMouseMove={onMouseMove}
      onClick={() => onOpen(project)}
      className="group relative flex flex-col h-full rounded-[2rem] bg-slate-900/50 border border-white/5 overflow-hidden cursor-pointer hover:border-purple-500/30 transition-all duration-500"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Floating Badges */}
        <div className="absolute top-6 left-6 flex gap-2">
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
           <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="px-2 py-0.5 text-[9px] font-bold rounded-md bg-white/10 text-white border border-white/20 uppercase tracking-wider backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        <div className="mt-auto pt-6 flex items-center justify-between group/btn">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-purple-400 transition-colors">
            Case Study
          </span>
          <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-300">
            <ArrowRight size={18} className="text-slate-400 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" component-name="Projects" className="section-padding relative overflow-hidden bg-slate-950/30" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">My Projects Showcase</h2>
      {/* Decorative Background Elements */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="Projects" 
          subtitle="Engineering sophisticated solutions with a primary focus on modular architecture, performance optimization, and refined user interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              idx={idx} 
              onOpen={setSelectedProject} 
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20">
            <Button 
              variant="secondary" 
              size="lg" 
              className="rounded-2xl px-10 h-16 bg-slate-950/50 border-white/5 hover:bg-slate-900 transition-all group"
              onClick={() => window.open('https://github.com/JanakeeshHd', '_blank')}
            >
              Discover More on GitHub 
              <Github className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};
