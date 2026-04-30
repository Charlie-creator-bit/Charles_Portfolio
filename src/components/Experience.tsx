import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* About Text */}
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-yellow font-display uppercase tracking-widest font-bold mb-2"
            >
              Background
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">My Journey</h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I am a dedicated Software Engineer with a passion for building robust and scalable applications. 
                My approach combines technical proficiency with a keen eye for user experience.
              </p>
              <p>
                Currently, I work with <span className="text-text-primary font-bold">Datamaker Ghana</span> as a Data Labeler, 
                where I contribute to high-quality dataset preparation for cutting-edge AI models. This role has 
                deepened my understanding of the data-centric nature of modern machine learning.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-text-primary mb-1">10+</div>
                  <div className="text-sm uppercase tracking-wider">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-text-primary mb-1">5+</div>
                  <div className="text-sm uppercase tracking-wider">Tech Stack Mastery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-brand-purple" /> Work Experience
            </h3>
            
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-purple/20">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-purple border-4 border-bg-primary" />
                <div className="text-brand-yellow text-sm font-bold flex items-center gap-2 mb-2">
                  <Calendar size={14} /> 2023 - Present
                </div>
                <h4 className="text-xl font-bold">Data Labeler</h4>
                <p className="text-brand-purple font-medium mb-2">Datamaker Ghana</p>
                <p className="text-text-secondary text-sm">
                  Annotating and labeling complex datasets to train machine learning models. 
                  Collaborating with cross-functional teams to ensure data accuracy and quality.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-brand-purple/50 border-4 border-bg-primary px-2" />
                <div className="text-brand-blue text-sm font-bold flex items-center gap-2 mb-2 opacity-50">
                   Previous Roles
                </div>
                <h4 className="text-xl font-bold">Freelance Developer</h4>
                <p className="text-brand-purple font-medium mb-2">Self-Employed</p>
                <p className="text-text-secondary text-sm">
                  Developing custom web solutions for small businesses and individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
