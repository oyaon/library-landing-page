'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

export default function Card({ children, title, className = '', ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-secondary rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow",
        className
      )}
      {...props}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      )}
      <div className={title ? "p-6" : ""}>{children}</div>
    </div>
  );
}
