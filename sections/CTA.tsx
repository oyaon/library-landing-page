import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who've already improved their projects with our library.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
              variant="primary"
              size="lg"
            >
              Get Started for Free
            </Button>
            <Button 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 text-lg"
              variant="outline"
              size="lg"
            >
              Read Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
