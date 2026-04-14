import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../hooks/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'glass-card p-6 relative group overflow-hidden',
        className
      )}
    >
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
