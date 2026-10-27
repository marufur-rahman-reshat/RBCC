import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-oswald font-bold tracking-wider mb-2">ROYAL BENGAL CRICKET CLUB</h2>
            <p className="text-slate-400 italic">“Where cricket meets friendships.”</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center md:text-left text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Royal Bengal Cricket Club - RBCC. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
