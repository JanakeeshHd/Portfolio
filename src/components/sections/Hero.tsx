import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download, Github, Linkedin, MousePointer2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Scene } from '../ui/Scene';
import { developer } from '../../data/portfolio';

export const Hero = () => {
  return (
    <section id="hero" component-name="Hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" aria-label="Hero Section">
      {/* 3D Background Scene */}
      <Scene />

      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-purple-400 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span>Available for New Projects</span>
          </motion.div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight whitespace-nowrap">
            Hi, I'm <span className="text-gradient">{developer.name}</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-300 h-20">
            <span className="mr-3">{developer.title}</span>
            <span className="text-purple-400">
              <Typewriter
                words={[
                  'Building scalable websites',
                  'AI-powered platforms',
                  'Cloud-native solutions',
                  'Interactive User Experiences'
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {developer.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="primary" size="lg" className="w-full sm:w-auto group">
              View My Works
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
              My Resume
              <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-12">
            {developer.socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                title={social.name}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
