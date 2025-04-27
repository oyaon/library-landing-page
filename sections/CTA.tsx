'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BookOpen } from 'lucide-react';

export default function CTA(): JSX.Element {
  return (
    <section className="py-20 bg-primary text-white" role="region">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BookOpen size={48} className="mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl font-bold mb-6">Join Our Library Community Today</h2>
            <p className="text-lg mb-8 text-accent-foreground max-w-2xl mx-auto">
              Get access to our entire collection of books, exclusive events, reading groups, and special discounts
              with your library membership.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-secondary hover:text-primary"
              >
                Become a Member
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-dark/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                <p className="text-accent-foreground">Try our services free for 30 days with no commitment</p>
              </div>
              <div className="bg-primary-dark/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Digital Access</h3>
                <p className="text-accent-foreground">eBooks, audiobooks, and online resources available 24/7</p>
              </div>
              <div className="bg-primary-dark/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Family Plans</h3>
                <p className="text-accent-foreground">Special rates for family memberships with multiple cards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
