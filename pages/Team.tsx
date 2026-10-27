import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLAYERS, LEADERSHIP } from '../constants';
import { Player } from '../types';
import { X, Calendar, User, Activity, Award, Target, Zap } from 'lucide-react';

const Team: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      
      {/* SQUAD SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-4">
          <div>
             <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Athletes</span>
             <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mt-1">THE SQUAD</h2>
          </div>
          <div className="text-slate-400 text-sm mt-4 md:mt-0 font-light">
             Representing the Royal Bengal Cricket Club
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLAYERS.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedPlayer(player)}
              className="group relative bg-slate-900 rounded-none border-b-4 border-slate-800 hover:border-red-600 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-72 w-full bg-slate-800 relative overflow-hidden">
                {/* Custom Gradient Background for Silhouette */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900"></div>
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-full h-full object-cover object-top mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                />
                
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                   <h3 className="text-2xl font-oswald font-bold text-white uppercase italic relative z-10 group-hover:translate-x-2 transition-transform">{player.name}</h3>
                   <span className="text-red-500 text-xs font-bold uppercase tracking-widest relative z-10">{player.role}</span>
                </div>
              </div>

              {/* Stats Overlay on Hover - Short Overview */}
              <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                 <h4 className="text-xl font-oswald font-bold text-white mb-6 uppercase tracking-wider">{player.name}</h4>
                 <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-slate-800 p-2">
                       <div className="text-2xl font-bold text-white">{player.matches}</div>
                       <div className="text-[10px] text-slate-400 uppercase">Matches</div>
                    </div>
                    <div className="bg-slate-800 p-2">
                       <div className="text-2xl font-bold text-red-500">{player.runs}</div>
                       <div className="text-[10px] text-slate-400 uppercase">Runs</div>
                    </div>
                    <div className="bg-slate-800 p-2">
                       <div className="text-2xl font-bold text-white">{player.wickets}</div>
                       <div className="text-[10px] text-slate-400 uppercase">Wickets</div>
                    </div>
                    <div className="bg-slate-800 p-2">
                       <div className="text-2xl font-bold text-white">{player.strikeRate}</div>
                       <div className="text-[10px] text-slate-400 uppercase">S.R.</div>
                    </div>
                 </div>
                 <div className="mt-6 text-xs text-slate-500 uppercase tracking-widest font-bold">Click for Full Profile</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LEADERSHIP SECTION */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold text-white uppercase">Club Management</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4 mb-4"></div>
            <p className="text-slate-400">The visionaries behind the success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
            {LEADERSHIP.map((leader, index) => (
               <motion.div
                 key={leader.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="flex flex-col items-center group"
               >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 group-hover:border-red-600 transition-colors mb-4 relative bg-slate-800">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-oswald font-bold text-white">{leader.name}</h3>
                  <p className="text-sm text-red-500 font-bold uppercase tracking-wider">{leader.role}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PLAYER PROFILE MODAL */}
      <AnimatePresence>
        {selectedPlayer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedPlayer(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-950 border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative rounded-none shadow-2xl flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
               <button 
                onClick={() => setSelectedPlayer(null)} 
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
               >
                 <X size={20} />
               </button>

               {/* Left Side: Photo */}
               <div className="w-full md:w-5/12 relative min-h-[400px]">
                 <img src={selectedPlayer.image} alt={selectedPlayer.name} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden"></div>
                 {/* Name on mobile */}
                 <div className="absolute bottom-4 left-4 md:hidden">
                    <h2 className="text-4xl font-oswald font-bold text-white uppercase italic">{selectedPlayer.name}</h2>
                    <p className="text-red-500 font-bold uppercase tracking-widest">{selectedPlayer.role}</p>
                 </div>
               </div>

               {/* Right Side: Details */}
               <div className="w-full md:w-7/12 p-8 md:p-12 bg-slate-950 text-white">
                 <div className="hidden md:block mb-8 border-b border-slate-800 pb-6">
                    <h2 className="text-5xl font-oswald font-bold text-white uppercase italic mb-2">{selectedPlayer.name}</h2>
                    <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block skew-x-[-12deg]">
                      <span className="block skew-x-[12deg]">{selectedPlayer.role}</span>
                    </span>
                 </div>

                 <div className="space-y-6">
                    {/* Info Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-center border-b border-slate-800 pb-3">
                           <div className="w-8 text-slate-500"><User size={20} /></div>
                           <div className="w-32 text-slate-400 text-sm font-bold uppercase tracking-wider">Full Name</div>
                           <div className="flex-1 font-oswald text-xl text-white">{selectedPlayer.fullName || selectedPlayer.name}</div>
                        </div>

                        <div className="flex items-center border-b border-slate-800 pb-3">
                           <div className="w-8 text-slate-500"><Calendar size={20} /></div>
                           <div className="w-32 text-slate-400 text-sm font-bold uppercase tracking-wider">Born</div>
                           <div className="flex-1 text-white">{selectedPlayer.born || 'N/A'} <span className="text-slate-500 text-sm ml-2">(Age {selectedPlayer.age || 'N/A'})</span></div>
                        </div>

                        <div className="flex items-center border-b border-slate-800 pb-3">
                           <div className="w-8 text-slate-500"><Target size={20} /></div>
                           <div className="w-32 text-slate-400 text-sm font-bold uppercase tracking-wider">Nicknames</div>
                           <div className="flex-1 text-white italic text-slate-300">"{selectedPlayer.nicknames || 'N/A'}"</div>
                        </div>

                        <div className="flex items-center border-b border-slate-800 pb-3">
                           <div className="w-8 text-slate-500"><Zap size={20} /></div>
                           <div className="w-32 text-slate-400 text-sm font-bold uppercase tracking-wider">Batting Style</div>
                           <div className="flex-1 text-white">{selectedPlayer.battingStyle || 'Right-hand bat'}</div>
                        </div>

                        <div className="flex items-center border-b border-slate-800 pb-3">
                           <div className="w-8 text-slate-500"><Activity size={20} /></div>
                           <div className="w-32 text-slate-400 text-sm font-bold uppercase tracking-wider">Bowling Style</div>
                           <div className="flex-1 text-white">{selectedPlayer.bowlingStyle || 'N/A'}</div>
                        </div>

                        <div className="flex items-center border-b border-slate-800 pb-3">
                           <div className="w-8 text-slate-500"><Award size={20} /></div>
                           <div className="w-32 text-slate-400 text-sm font-bold uppercase tracking-wider">Playing Role</div>
                           <div className="flex-1 text-white text-red-500 font-bold uppercase">{selectedPlayer.role}</div>
                        </div>
                    </div>
                 </div>

                 {/* Mini Stats Summary */}
                 <div className="mt-10 grid grid-cols-4 gap-2 text-center bg-slate-900 p-4 rounded-lg">
                    <div>
                      <div className="text-2xl font-bold font-oswald">{selectedPlayer.matches}</div>
                      <div className="text-[10px] uppercase text-slate-500">Mat</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-oswald text-red-500">{selectedPlayer.runs}</div>
                      <div className="text-[10px] uppercase text-slate-500">Runs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-oswald">{selectedPlayer.wickets}</div>
                      <div className="text-[10px] uppercase text-slate-500">Wkts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-oswald">{selectedPlayer.strikeRate}</div>
                      <div className="text-[10px] uppercase text-slate-500">S.R</div>
                    </div>
                 </div>

               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Team;
