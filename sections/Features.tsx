import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Shield } from 'lucide-react';
import Card from '../components/ui/Card';

const features = [
  {
    icon: <Code size={24} />,
    title: 'Developer Friendly',
    description: 'Built with developers in mind. Simple API, comprehensive documentation, and intuitive design patterns.'
  },
  {
    icon: <Zap size={24} />,
    title: 'Lightning Fast',
    description: 'Optimized for performance with minimal overhead. Your applications will load and run faster than ever.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Secure by Default',
    description: 'Security built-in from the ground up. Protect your data and your users with our secure-by-default approach.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern, robust applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
