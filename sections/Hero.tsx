import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.svg" alt="Logo" className="h-16 mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Modern Library for Modern Developers
            </h1>
            <p className="text-xl mb-8 text-muted">
              A powerful, flexible, and intuitive library designed to solve complex problems with elegant solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Documentation</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
