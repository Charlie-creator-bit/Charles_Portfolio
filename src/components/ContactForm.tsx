import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-brand-yellow">Touch</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you. 
            Feel free to reach out via the form or my social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 glass p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Email Me</h4>
                <p className="text-text-secondary">charlesadu3112@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 glass p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Location</h4>
                <p className="text-text-secondary">Accra, Ghana</p>
              </div>
            </div>

            <div className="flex items-start gap-6 glass p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Call Me</h4>
                <p className="text-text-secondary">0556824948</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 glass p-8 md:p-10 rounded-[2rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Message</label>
              <textarea 
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-brand-purple hover:bg-brand-purple/80 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group">
              Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
