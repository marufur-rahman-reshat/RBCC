import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MATCHES } from '../constants';
import { MapPin, Clock, Activity } from 'lucide-react';

const Matches: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Results'>('Upcoming');

  const upcomingMatches = MATCHES.filter(m => m.status === 'Upcoming' || m.status === 'Ongoing');
  const pastMatches = MATCHES.filter(m => m.status === 'Completed');

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Score Area */}
        <div className="mb-12">
          <h2 className="text-xl font-oswald font-bold text-white mb-4 flex items-center tracking-wider">
            <Activity className="text-red-600 mr-2 animate-pulse" /> LIVE CENTER
          </h2>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-none border-l-4 border-red-600 p-8 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 via-transparent to-transparent"></div>
             <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-red-600/20 text-red-500 border border-red-600/50 text-xs font-bold rounded mb-4 animate-pulse">
                  OFF AIR
                </span>
                <h3 className="text-3xl md:text-4xl font-oswald text-white mb-2 uppercase">Matchday Live</h3>
                <p className="text-slate-400 text-sm">Waiting for match data integration...</p>
             </div>
          </div>
        </div>

        {/* Calendar / Schedule Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-oswald font-bold text-white mb-4 md:mb-0 uppercase">Fixtures & Results</h1>
          
          <div className="flex bg-slate-900 p-1 rounded-sm">
            <button 
              onClick={() => setActiveTab('Upcoming')}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'Upcoming' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >
              Fixtures
            </button>
            <button 
              onClick={() => setActiveTab('Results')}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'Results' ? 'bg-red-600 text-white' : 'text-slate-500 hover:text-white'}`}
            >
              Results
            </button>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-6">
          {activeTab === 'Upcoming' && upcomingMatches.map((match) => (
            <motion.div 
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 border-l-4 border-slate-700 hover:border-red-600 transition-colors p-6 relative group"
            >
              {match.status === 'Ongoing' && (
                 <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                   Live Now
                 </div>
              )}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Date Box */}
                <div className="flex items-center gap-6 w-full md:w-1/3">
                  <div className="bg-slate-800 p-4 text-center min-w-[80px] border border-slate-700 group-hover:border-red-600/50 transition-colors">
                    <span className="block text-3xl font-oswald font-bold text-white">{new Date(match.date).getDate()}</span>
                    <span className="block text-xs font-bold uppercase text-slate-500">{new Date(match.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  </div>
                  <div>
                    <div className="text-xs text-red-500 font-bold uppercase tracking-widest mb-1">{match.tournament}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">vs {match.opponent}</h3>
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-400 w-full md:w-auto">
                   <div className="flex items-center gap-2">
                     <MapPin size={16} className="text-red-600" />
                     {match.venue}
                   </div>
                   <div className="flex items-center gap-2">
                     <Clock size={16} className="text-red-600" />
                     10:00 AM
                   </div>
                </div>

                <div className="w-full md:w-auto">
                  <button className="w-full md:w-auto px-6 py-2 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {activeTab === 'Results' && pastMatches.map((match) => (
             <motion.div 
             key={match.id}
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-slate-900 border-l-4 border-slate-800 p-6 opacity-80 hover:opacity-100 transition-all"
           >
             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="w-full md:w-1/3">
                 <h3 className="text-lg font-bold text-slate-300">vs {match.opponent}</h3>
                 <span className="text-xs text-slate-500 font-mono">{match.date} • {match.venue}</span>
               </div>
               
               <div className="text-center w-full md:w-1/3 bg-slate-950 py-3 border border-slate-800">
                  <div className="text-sm font-bold text-white font-mono">{match.scores}</div>
                  <div className={`text-xs font-bold uppercase mt-1 tracking-widest ${match.result?.includes('Won') ? 'text-green-500' : 'text-red-500'}`}>
                    {match.result}
                  </div>
               </div>

               <div className="w-full md:w-1/3 text-right">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-widest">Full Time</span>
               </div>
             </div>
           </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches;
