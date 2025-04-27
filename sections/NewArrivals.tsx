import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BookCard } from '@/components/ui/BookCard';

export default function NewArrivals() {
  const books = [
    { title: 'The Great Gatsby', cover: '/covers/gatsby.jpg' },
    { title: '1984', cover: '/covers/1984.jpg' },
    { title: 'To Kill a Mockingbird', cover: '/covers/mockingbird.jpg' },
    { title: 'The Catcher in the Rye', cover: '/covers/catcher.jpg' },
  ];

  return (
    <section className="py-16 px-6">
      <SectionHeader title="New Arrivals" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {books.map((book, idx) => (
          <BookCard key={idx} title={book.title} cover={book.cover} />
        ))}
      </div>
    </section>
  );
}
const newBooks = [
  {
    id: 1,
    title: 'The Silent Echo',
    author: 'Emily Richards',
    cover: '/books/book1.jpg',
    rating: 4.7,
    genre: 'Mystery',
  },
  {
    id: 2,
    title: 'Beyond the Horizon',
    author: 'Marcus Chen',
    cover: '/books/book2.jpg',
    rating: 4.5,
    genre: 'Science Fiction',
  },
  {
    id: 3,
    title: 'Whispers in the Wind',
    author: 'Sophia Johnson',
    cover: '/books/book3.jpg',
    rating: 4.8,
    genre: 'Fantasy',
  },
  {
    id: 4,
    title: 'The Art of Simplicity',
    author: 'David Miller',
    cover: '/books/book4.jpg',
    rating: 4.6,
    genre: 'Self-Help',
  },
];

export default function NewArrivals() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3 text-foreground">New Arrivals</h2>
            <p className="text-muted max-w-2xl">
              Explore our latest additions to the library. Fresh reads for curious minds.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 flex items-center gap-2">
            View All <ChevronRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[2/3] bg-secondary">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <Button size="sm" className="w-full">Quick View</Button>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  NEW
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                {book.title}
              </h3>
              <p className="text-muted text-sm mb-2">by {book.author}</p>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < Math.floor(book.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted ml-1">{book.rating}</span>
                <span className="text-xs px-2 py-0.5 bg-secondary rounded-full ml-auto">
                  {book.genre}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
