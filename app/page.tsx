import React from 'react';
import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import NewArrivals from '@/sections/NewArrivals';
import PopularBooks from '@/sections/PopularBooks';
import UpcomingEvents from '@/sections/UpcomingEvents';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Stats from '@/sections/Stats';
import CTA from '@/sections/CTA';
import Footer from '@/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <NewArrivals />
        <PopularBooks />
        <UpcomingEvents />
        <Features />
        <About />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
