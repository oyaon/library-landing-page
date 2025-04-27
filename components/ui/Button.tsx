import React from 'react';
'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  className, 
  variant = 'default', 
  size = 'md',
  children,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 font-semibold rounded-lg transition-all',
        variant === 'outline'
          ? 'border border-primary text-primary hover:bg-primary hover:text-white'
          : 'bg-primary text-white hover:bg-primary/90',
        size === 'sm' && 'text-xs px-3 py-1.5',
        size === 'lg' && 'text-base px-6 py-3',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantStyles = {
    default: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
    primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
    outline: 'border border-input bg-background hover:bg-secondary hover:text-foreground',
    secondary: 'bg-secondary text-foreground hover:bg-secondary-dark',
    ghost: 'hover:bg-secondary hover:text-foreground',
  };
  
  const sizeStyles = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3 text-base',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
