import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import profileImg from '../Charles.jpg';

const Hero = () => {
  const profileImageUrl = profileImg;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-yellow font-display uppercase tracking-[0.3em] font-bold mb-4"
          >
            Software Engineer
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[0.9] mb-6 -tracking-tighter">
            Charles Kofi <br />
            <span className="text-gradient">Adu.</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Crafting elegant solutions to complex problems. Currently helping shape the future of AI as a 
            <span className="text-text-primary font-semibold"> Data Labeler at Datamaker Ghana</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-text-primary text-bg-primary rounded-full font-bold flex items-center gap-2 hover:bg-brand-yellow transition-all"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-border-subtle rounded-full font-bold hover:bg-text-primary/5 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group/img">
            {/* Animated outer ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border-2 border-dashed border-brand-purple/30 rounded-full"
            />
            
            {/* Image Container with spacing and border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-3 border-4 border-brand-purple bg-bg-primary shadow-[0_0_50px_rgba(124,58,237,0.3)] group-hover/img:scale-[1.02] transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-text-primary/5 flex items-center justify-center relative">
                <img 
                  src={profileImageUrl}
                  alt="Charles Kofi Adu" 
                  className="w-full h-full object-cover object-[center_15%]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Accent Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl"
            >
              <div className="text-xs uppercase text-brand-yellow font-bold">Years Exp</div>
              <div className="text-2xl font-bold">2+</div>
            </motion.div>
          </div>
        </motion.div>
      </div>


      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-20 opacity-30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
