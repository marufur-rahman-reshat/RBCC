import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const categories: GalleryCategory[] = [
  'Stadium Moments',
  'Team Moments',
  'Match Highlights',
  'Cricket Equipment',
  'Practice Sessions'
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-oswald font-bold text-white mb-2 uppercase">The Archive</h1>
           <p className="text-slate-500">Moments frozen in time.</p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === 'All' ? 'bg-red-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
          >
            All
          </button>
          {categories.map(cat => (
             <button 
             key={cat}
             onClick={() => setActiveCategory(cat)}
             className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-red-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}`}
           >
             {cat.replace(' Moments', '').replace(' Highlights', '').replace(' Sessions', '')}
           </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden bg-slate-900 cursor-pointer border border-slate-800"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <p className="text-white font-oswald text-lg font-bold uppercase">{item.category}</p>
                   <p className="text-red-500 text-xs tracking-widest uppercase">RBCC Archive</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-600">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
