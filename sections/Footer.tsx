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
