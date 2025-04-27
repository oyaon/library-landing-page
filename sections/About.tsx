import React from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/about-library.svg"
                alt="About Our Library" 
                className="rounded-lg shadow-lg"
              />
              <div className="glassmorphism absolute -bottom-8 -right-8 p-6 rounded-lg max-w-xs">
                <p className="text-white font-medium">
                  "Our library has transformed how our team accesses and utilizes code resources."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Sarah Johnson</p>
                    <p className="text-white/70 text-sm">Lead Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">About Our Library</h2>
            <p className="text-muted mb-6">
              Founded in 2023, our library platform was built by developers, for developers. 
              We understand the challenges of modern software development and have created a 
              comprehensive solution to address them.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                  <BookOpen size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Extensive Collection</h3>
                  <p className="text-muted">
                    Access over 10,000 code samples, patterns, and solutions that can be easily 
                    integrated into your projects.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Community Driven</h3>
                  <p className="text-muted">
                    Join thousands of developers contributing and improving our shared knowledge base 
                    every day.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                  <Calendar size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-foreground">Regular Updates</h3>
                  <p className="text-muted">
                    Stay up to date with weekly new content and updates that reflect the latest 
                    industry practices and standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
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
