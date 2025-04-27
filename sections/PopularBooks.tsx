import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import Button from '../components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BookCard } from '@/components/ui/BookCard';

export default function PopularBooks() {
  const popularBooks = [
    { title: 'The Alchemist', cover: '/covers/alchemist.jpg' },
    { title: 'Pride and Prejudice', cover: '/covers/pride.jpg' },
    { title: 'The Hobbit', cover: '/covers/hobbit.jpg' },
  ];

  return (
    <section className="py-16 bg-muted px-6">
      <SectionHeader title="Popular Books" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {popularBooks.map((book, idx) => (
          <BookCard key={idx} title={book.title} cover={book.cover} />
        ))}
      </div>
    </section>
  );
}
const popularBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    cover: '/books/popular1.jpg',
    readers: '24K+',
    rating: 4.9,
    category: 'Fiction',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits and break bad ones. Learn how tiny changes can lead to remarkable results.',
    cover: '/books/popular2.jpg',
    readers: '52K+',
    rating: 4.8,
    category: 'Self-Help',
  },
  {
    id: 3,
    title: 'Educated',
    author: 'Tara Westover',
    description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    cover: '/books/popular3.jpg',
    readers: '18K+',
    rating: 4.7,
    category: 'Memoir',
  },
];

export default function PopularBooks() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3 text-foreground">Popular Books</h2>
            <p className="text-muted max-w-2xl">
              Most loved books by our community this month. Discover what others are enjoying.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="p-2 rounded-full border border-primary/20 text-foreground hover:bg-primary/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-full border border-primary/20 text-foreground hover:bg-primary/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {popularBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl overflow-hidden shadow-xl"
            >
              <div className="flex flex-col md:flex-row lg:flex-col">
                <div className="w-full md:w-1/3 lg:w-full h-48 md:h-full lg:h-48 relative overflow-hidden">
                  <Tilt 
                    tiltMaxAngleX={5} 
                    tiltMaxAngleY={5} 
                    perspective={800}
                    scale={1.05}
                    transitionSpeed={1500}
                    className="h-full"
                  >
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full object-cover object-center"
                    />
                  </Tilt>
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    {book.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-foreground">{book.title}</h3>
                  <p className="text-muted text-sm mb-4">by {book.author}</p>
                  <p className="text-muted mb-4 text-sm line-clamp-3">{book.description}</p>
                  <div className="mt-auto grid grid-cols-3 gap-2 mb-4">
                    <div className="flex flex-col items-center p-2 bg-secondary/50 rounded-lg">
                      <Star className="text-yellow-500 fill-yellow-500 mb-1" size={16} />
                      <span className="text-xs font-medium">{book.rating}/5</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-secondary/50 rounded-lg">
                      <User className="text-primary mb-1" size={16} />
                      <span className="text-xs font-medium">{book.readers}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-secondary/50 rounded-lg">
                      <BookOpen className="text-primary mb-1" size={16} />
                      <span className="text-xs font-medium">Available</span>
                    </div>
                  </div>
                  <Button className="w-full">Reserve Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
