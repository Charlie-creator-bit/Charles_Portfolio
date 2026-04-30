/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-brand-yellow selection:text-brand-black overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-yellow blur-[200px] rounded-full opacity-30" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

