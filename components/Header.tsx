import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import Button from './ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="py-4 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 no-underline">
              <BookOpen size={24} className="text-primary" />
              <span className="text-xl font-bold text-foreground">City Library</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Catalog</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Events</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Sign Up</Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Catalog</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Events</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">Login</Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Books', href: '/books' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Library Logo" className="h-8 w-auto" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary underline-animation"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="wobbly-button">Sign In</Button>
        </div>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            type="button"
            className="ml-4 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}