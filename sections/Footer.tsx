import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary/95 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="Logo" className="h-8 mb-4" />
            <p className="text-accent-foreground mb-4">
              A powerful, flexible, and intuitive library designed for modern developers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-foreground hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-accent-foreground hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent-foreground hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Releases</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-accent-foreground hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-dark/30 mt-12 pt-8 text-center text-accent-foreground">
          <p>&copy; {new Date().getFullYear()} Your Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-secondary-dark text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">City Library</h3>
            <p className="text-muted-foreground mb-4">
              Empowering our community through access to knowledge, resources, and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary underline-animation">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary underline-animation">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary underline-animation">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-primary underline-animation">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary underline-animation">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Hours & Location</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Reading Avenue, Booktown, BT1 2LP</span>
              </p>
              <p>Monday - Friday: 9AM - 8PM</p>
              <p>Saturday: 10AM - 6PM</p>
              <p>Sunday: 12PM - 5PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:text-primary">(555) 123-4567</a>
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@citylibrary.com" className="hover:text-primary">info@citylibrary.com</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} City Library. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary underline-animation">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary underline-animation">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary underline-animation">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}