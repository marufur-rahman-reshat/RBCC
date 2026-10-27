import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Users, Calendar, Phone, Trophy, Image, AlertCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showJoinMessage, setShowJoinMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleJoinClick = () => {
    setShowJoinMessage(true);
    setIsOpen(false); // Close mobile menu if open
    setTimeout(() => setShowJoinMessage(false), 4000);
  };

  // Removed "Home" from navItems array, Logo is the Home button
  const navItems = [
    { name: 'Team', path: '/team', icon: <Users size={18} /> },
    { name: 'Matches', path: '/matches', icon: <Calendar size={18} /> },
    { name: 'Tournaments', path: '/tournaments', icon: <Trophy size={18} /> },
    { name: 'Gallery', path: '/gallery', icon: <Image size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            
            {/* Logo / Home Button */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white/20 shadow-lg group-hover:scale-105 transition-transform">
                  RB
                </div>
                <div className="flex flex-col">
                  <span className="font-oswald font-bold text-xl tracking-wide text-white leading-none">RBCC</span>
                  <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">Cricket Club</span>
                </div>
              </NavLink>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'text-red-500'
                        : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
              {/* League Button */}
              <button 
                onClick={handleJoinClick}
                className="ml-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest rounded skew-x-[-12deg] transition-all transform hover:skew-x-[-12deg] hover:-translate-y-0.5 shadow-lg shadow-red-900/20"
              >
                <span className="block skew-x-[12deg]">League</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-red-500 focus:outline-none transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-md text-base font-bold uppercase tracking-wider flex items-center gap-3 ${
                      isActive
                        ? 'text-white bg-red-600'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
              {/* Mobile League Button */}
              <button 
                onClick={handleJoinClick}
                className="w-full mt-4 px-4 py-3 bg-red-600 text-white text-base font-bold uppercase tracking-widest rounded text-center hover:bg-red-700 transition-colors"
              >
                League
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* League Message Toast */}
      {showJoinMessage && (
        <div className="fixed top-24 right-4 md:right-8 z-[100] bg-slate-900 border-l-4 border-red-600 text-white p-4 shadow-2xl flex items-center gap-4 animate-bounce md:animate-none md:transition-all md:transform md:translate-y-0 max-w-sm rounded-r-md">
          <div className="bg-red-900/30 p-2 rounded-full">
            <AlertCircle className="text-red-500" size={24} />
          </div>
          <div>
            <h4 className="font-oswald font-bold uppercase text-red-500 text-sm tracking-wider">League Update</h4>
            <p className="text-sm text-slate-300 font-medium">Another league coming soon.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;