import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { developer } from '../../data/portfolio';
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID_HERE';

      if (formId === 'YOUR_FORM_ID_HERE') {
        setStatus('error');
        setErrorMessage("Form ID not found. Please set your Formspree ID in the .env file.");
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Message: ${formData.subject}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const result = await response.json();
        setStatus('error');
        setErrorMessage(result.errors?.[0]?.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email Me", 
      value: developer.email, 
      href: `mailto:${developer.email}`,
      color: "text-purple-400"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Bangalore, India", 
      href: "#",
      color: "text-blue-400"
    },
    { 
      icon: Phone, 
      label: "Call Me", 
      value: developer.phone, 
      href: `tel:${developer.phone?.replace(/\s/g, '')}`,
      color: "text-pink-400"
    }
  ];

  return (
    <section id="contact" component-name="Contact" className="section-padding relative overflow-hidden" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="sr-only">Contact Janakeesh Hegde</h2>
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[160px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hello? My inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white leading-tight">
                Let's Build Something <span className="text-gradient">Amazing</span> Together
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Whether you're a recruiter looking for a passionate developer, a startup needing a scalable MVP, or a fellow developer wanting to collaborate—I'm just a message away.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 glass rounded-2xl border-white/5 group hover:border-white/20 transition-all duration-300"
                >
                  <div className={`p-4 rounded-xl bg-white/5 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">{info.label}</div>
                    <div className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Connect with me</h4>
              <div className="flex gap-4">
                {developer.socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 md:p-12 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                  <textarea 
                    rows={6} 
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={status === 'sending'}
                  variant="primary" 
                  className="w-full py-5 rounded-2xl text-lg font-bold group relative overflow-hidden"
                >
                  <span className={status === 'sending' ? 'opacity-0' : 'flex items-center gap-2'}>
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  {status === 'sending' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </Button>

                {status === 'sent' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <CheckCircle2 size={20} />
                    <span className="font-medium text-sm">
                      Thank you! Your message has been sent. I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <AlertCircle size={20} />
                    <span className="font-medium text-sm">
                      {errorMessage}
                    </span>
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
