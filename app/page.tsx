import React from 'react';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Stats from '@/sections/Stats';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
