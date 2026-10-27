import React from 'react';
import { motion } from 'framer-motion';
import { TOURNAMENTS } from '../constants';
import { Trophy } from 'lucide-react';

const Tournaments: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4 uppercase">Honor Board</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURNAMENTS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-900 overflow-hidden shadow-lg border-b-4 border-red-600 group"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/20 transition-all z-10"></div>
                <img src={t.image} alt={t.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-black font-bold px-3 py-1 text-xs uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Trophy size={14} /> {t.result}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-oswald font-bold text-white mb-1">{t.year}</h3>
                <p className="text-slate-400 text-sm font-medium">{t.name}</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Status</span>
                  <span className="text-xs font-bold text-white bg-slate-800 px-2 py-1 uppercase">Completed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
