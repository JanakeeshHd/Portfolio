import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../hooks/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  className, 
  align = 'center' 
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 space-y-4 max-w-2xl mx-auto',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1.5 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500',
        align === 'center' ? 'mx-auto' : 'mx-0'
      )} />
    </motion.div>
  );
};
