import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { skills } from '../../data/portfolio';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" component-name="Skills" className="section-padding relative overflow-hidden" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="sr-only">Technical Skills & Expertise</h2>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[128px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[128px]" />

      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="Technical Stack" 
          subtitle="A specialized toolkit engineered for building high-performance, resilient, and enterprise-grade web architectures."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard className="h-full p-8 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <skillGroup.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.techs.map((tech, techIdx) => (
                    <div key={techIdx} className="flex items-center gap-3 group/item">
                      <div className="h-2 w-2 rounded-full bg-purple-500/50 group-hover/item:bg-purple-400 group-hover/item:scale-125 transition-all duration-300" />
                      <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Progress Bars */}
                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                  <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest mb-1">
                    <span>Proficiency</span>
                    <span>{85 + idx * 5}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + idx * 5}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Icons Background */}
        <div className="mt-24 p-12 glass rounded-3xl border-white/5 text-center">
          <h4 className="text-xl font-bold text-white mb-6">Expertise in MERN Stack & Beyond</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind', 'Docker', 'AWS'].map((tech) => (
              <span key={tech} className="text-2xl font-bold text-slate-400 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
