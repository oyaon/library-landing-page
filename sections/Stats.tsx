import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Users, Download, Star, Code } from 'lucide-react';

const stats = [
  {
    icon: <Download className="w-8 h-8 text-blue-500" />,
    value: 50000,
    label: 'Downloads',
    suffix: '+'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    value: 2000,
    label: 'Active Users',
    suffix: '+'
  },
  {
    icon: <Star className="w-8 h-8 text-blue-500" />,
    value: 4.9,
    label: 'Average Rating',
    decimals: 1
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500" />,
    value: 99,
    label: 'Test Coverage',
    suffix: '%'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">By The Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our library continues to grow and improve, thanks to our amazing community
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-blue-600">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ''}
                />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
