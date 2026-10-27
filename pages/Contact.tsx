import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase">Contact Us</h1>
          <p className="text-slate-500 mt-2">Get in touch with the club administration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-slate-900 p-8 border-l-4 border-red-600 shadow-xl">
              <h2 className="text-xl font-bold font-oswald text-white mb-8 tracking-widest uppercase">Club Headquarters</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 text-red-600 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase font-oswald">Phone</h3>
                    <p className="text-slate-400">01701969492</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 text-red-600 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase font-oswald">Email</h3>
                    <p className="text-slate-400 break-all">royalbengalcricketclub.rbcc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 text-red-600 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase font-oswald">Location</h3>
                    <p className="text-slate-400">Atwari, Panchagarh</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-4">Connect Socially</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-8 shadow-xl border border-slate-800"
          >
            <h2 className="text-xl font-bold font-oswald text-white mb-6 uppercase tracking-widest">Enquiry Form</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white focus:border-red-600 focus:ring-0 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white focus:border-red-600 focus:ring-0 outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 text-white focus:border-red-600 focus:ring-0 outline-none transition-all"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-red-600 text-white font-bold py-4 px-4 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
