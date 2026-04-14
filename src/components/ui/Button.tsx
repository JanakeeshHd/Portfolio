import React from 'react';
import { cn } from '../../hooks/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25',
    secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700',
    outline: 'bg-transparent border border-purple-500/50 text-purple-400 hover:bg-purple-500/10',
    ghost: 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base font-medium',
    lg: 'px-8 py-4 text-lg font-semibold'
  };

  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
