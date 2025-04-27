import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Our Library</h2>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple mission: create a library that we ourselves would love to use. After years of experiencing the limitations and frustrations of existing solutions, we set out to build something better.
            </p>
            <p className="text-gray-600 mb-4">
              We focused on three core principles: simplicity, performance, and developer experience. Every feature, every API, and every line of documentation is crafted with these principles in mind.
            </p>
            <p className="text-gray-600">
              Today, our library is used by thousands of developers worldwide, powering applications across industries from finance to healthcare, education to entertainment.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
