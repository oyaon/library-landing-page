import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Search, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-secondary/50 to-background">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('/hero-library.jpg')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Library of Tomorrow
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Discover a World of Knowledge and Imagination
            </h1>
            <p className="text-lg mb-8 text-muted">
              Explore our vast collection of books, audiobooks, and digital resources. Join our community of readers and expand your horizons.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="flex items-center justify-center gap-2">
                <BookOpen size={18} />
                Browse Collection
              </Button>
              <Button variant="outline" size="lg" className="flex items-center justify-center gap-2">
                Become a Member
              </Button>
            </div>

            <div className="relative max-w-md">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search for books, authors, or genres..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img 
                src="/hero-books.png" 
                alt="Library Books Collection" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Over 10,000+</p>
                    <p className="text-xs text-muted">Books available</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Search, ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    // You would typically redirect to search results page
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" 
          style={{ backgroundImage: "url('/hero-library.jpg')" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 pt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-white/10 backdrop-blur-sm p-2 rounded-lg mb-6"
            >
              <BookOpen className="text-white mr-2 inline-block" size={18} />
              <span className="text-sm font-medium">City Public Library</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glowing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Discover a World of Knowledge
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Explore our vast collection of books, digital resources, and community events. 
              Your journey to learning and discovery starts here.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-secondary hover:text-primary wobbly-button"
              >
                Join Our Library
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                Explore Collections
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Search Our Catalog</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find books, audiobooks, and more..."
                  className="w-full p-4 pl-12 pr-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white/70" size={20} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <input 
                    id="books" 
                    type="checkbox" 
                    className="w-4 h-4 rounded text-primary bg-white/20 border-white/30 focus:ring-primary"
                    defaultChecked
                  />
                  <label htmlFor="books" className="ml-2 text-white">Books</label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="ebooks" 
                    type="checkbox" 
                    className="w-4 h-4 rounded text-primary bg-white/20 border-white/30 focus:ring-primary"
                    defaultChecked
                  />
                  <label htmlFor="ebooks" className="ml-2 text-white">eBooks</label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="audiobooks" 
                    type="checkbox" 
                    className="w-4 h-4 rounded text-primary bg-white/20 border-white/30 focus:ring-primary"
                    defaultChecked
                  />
                  <label htmlFor="audiobooks" className="ml-2 text-white">Audiobooks</label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="magazines" 
                    type="checkbox" 
                    className="w-4 h-4 rounded text-primary bg-white/20 border-white/30 focus:ring-primary"
                  />
                  <label htmlFor="magazines" className="ml-2 text-white">Magazines</label>
                </div>
              </div>
              
              <Button type="submit" className="w-full pulse-glow">
                <Search className="mr-2 h-4 w-4" />
                Search Catalog
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white text-sm mb-4">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Fiction', 'Biography', 'Self-Help', 'Children', 'History'].map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm text-white cursor-pointer transition-colors"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}