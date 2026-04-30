import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-2xl font-display font-bold">
            CKA<span className="text-brand-yellow">.</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-purple transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-purple transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-purple transition-all">
              <Twitter size={20} />
            </a>
            <a href="mailto:charlesadu3112@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-purple transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>© {currentYear} Charles Kofi Adu. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
