import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error('Contact Error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-secondary">Message</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full px-6 py-4 rounded-2xl bg-text-primary/5 border border-border-subtle focus:border-brand-purple outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium"
              >
                Thank you! Your message has been sent to my phone via SMS.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium"
              >
                {errorMessage}
              </motion.div>
            )}

            <button 
              disabled={status === 'loading'}
              className="w-full py-5 bg-brand-purple hover:bg-brand-purple/80 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>Sending... <Loader2 size={20} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
