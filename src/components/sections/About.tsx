import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Terminal } from '../ui/Terminal';
import { developer } from '../../data/portfolio';
import profileImg from '../../assets/janakeesh.jpg';
import { GraduationCap, Code, Rocket, BrainCircuit, School, BookOpen, Award } from 'lucide-react';

export const About = () => {
  const features = [
    { 
      icon: Code, 
      title: "Full Stack Expert", 
      desc: "Specialized in MERN stack for robust applications.",
      color: "text-purple-400"
    },
    { 
      icon: BrainCircuit, 
      title: "Problem Solver", 
      desc: "Analytical approach to complex software challenges.",
      color: "text-blue-400"
    },
    { 
      icon: GraduationCap, 
      title: "ISE Student", 
      desc: "Strong foundation in CS principles & engineering.",
      color: "text-pink-400"
    },
    { 
      icon: Rocket, 
      title: "Fast Learner", 
      desc: "Always exploring new tech and methodologies.",
      color: "text-red-400"
    }
  ];

  return (
    <section id="about" component-name="About" className="section-padding bg-slate-950/50" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">About Janakeesh Hegde</h2>
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Architecting the future of the web by blending robust engineering principles with cutting-edge MERN stack expertise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Card Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <GlassCard className="p-2 border-white/5 rounded-3xl overflow-hidden aspect-square">
                <img 
                  src={profileImg} 
                  alt="Janakeesh Hegde - Full Stack MERN Developer" 
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                  <h4 className="text-xl font-bold text-white">{developer.name}</h4>
                  <p className="text-sm text-purple-400 font-medium">{developer.student}</p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Professional <span className="text-gradient">Summary</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                As an <span className="text-white font-medium">Information Science and Engineering</span> student, I bring a unique perspective to web development, blending core computing principles with the agility of the <span className="text-white font-medium">MERN stack</span>.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My journey is fueled by a passion for solving real-world problems. Whether it's architecting a scalable backend or crafting an intuitive frontend experience, I focus on performance, security, and user-centric design.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <GlassCard key={i} className="p-5" delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-white/5 ${feature.color}`}>
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Educational <span className="text-gradient">Journey</span>
            </h3>
            <p className="text-slate-400">My academic path from schooling to engineering.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {developer.education?.map((edu, i) => {
              const Icon = edu.type === 'engineering' ? GraduationCap : 
                           edu.type === 'diploma' ? Award :
                           edu.type === 'puc' ? BookOpen : School;
              const color = edu.type === 'engineering' ? 'text-purple-400' :
                            edu.type === 'diploma' ? 'text-blue-400' :
                            edu.type === 'puc' ? 'text-pink-400' : 'text-emerald-400';
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="flex-1 w-full">
                    <GlassCard className="p-8 border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
                      <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
                        <Icon size={80} />
                      </div>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-white/5 ${color}`}>
                          <Icon size={24} />
                        </div>
                        <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">{edu.duration}</span>
                      </div>

                      <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                      <div className="text-lg font-medium text-slate-300 mb-4 h-8">
                        <Typewriter
                          words={[edu.institution]}
                          loop={1}
                          cursor
                          cursorStyle='|'
                          typeSpeed={50}
                        />
                      </div>
                      <p className="text-slate-400 leading-relaxed italic">
                        {edu.details}
                      </p>
                    </GlassCard>
                  </div>
                  
                  {/* Center Dot for Desktop */}
                  <div className="hidden md:flex items-center justify-center relative">
                    <div className={`w-4 h-4 rounded-full bg-white/10 border-2 border-white/20 relative z-10`} />
                    {i !== developer.education!.length - 1 && (
                      <div className="absolute top-4 w-0.5 h-32 bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Want to know more?</h3>
            <p className="text-slate-400 italic">Try my interactive terminal below</p>
          </div>
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
};
