import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowRight, Calendar, Activity, MapPin, X, Users } from 'lucide-react';
import { NEWS, MATCHES } from '../constants';
import { NewsItem } from '../types';

const Home: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  
  // Find the next upcoming match
  const nextMatch = MATCHES.find(m => m.status === 'Upcoming') || MATCHES[0];

  return (
    <div className="bg-slate-950 min-h-screen relative">
      
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Stadium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-12 bg-red-600"></span>
              <span className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">Est. 2015</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white leading-[0.9]">
              ROYAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">BENGAL</span> <br/>
              CRICKET CLUB
            </h1>
            <p className="mt-6 text-lg text-slate-300 font-light max-w-lg border-l-4 border-white/20 pl-4">
              The pride of Panchagarh. A community forged in passion, discipline, and the pursuit of cricketing excellence.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
               <Link to="/team" className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors skew-x-[-12deg]">
                 <span className="block skew-x-[12deg]">Meet the Squad</span>
               </Link>
               <Link to="/matches" className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors skew-x-[-12deg]">
                 <span className="block skew-x-[12deg]">Fixtures</span>
               </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Next Match Card (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 right-0 hidden lg:block w-1/3 bg-red-700 p-8 text-white clip-slant-rev shadow-2xl z-20"
        >
          <div className="mb-2 text-white/70 font-bold tracking-widest uppercase text-xs">Next Match Countdown</div>
          <h3 className="text-3xl font-oswald font-bold mb-4 uppercase">{nextMatch.opponent}</h3>
          <div className="flex gap-6 mb-6">
             <div>
               <div className="text-3xl font-bold font-oswald">04</div>
               <div className="text-[10px] uppercase tracking-wider opacity-70">Days</div>
             </div>
             <div>
               <div className="text-3xl font-bold font-oswald">12</div>
               <div className="text-[10px] uppercase tracking-wider opacity-70">Hours</div>
             </div>
             <div>
               <div className="text-3xl font-bold font-oswald">30</div>
               <div className="text-[10px] uppercase tracking-wider opacity-70">Mins</div>
             </div>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90">
             <MapPin size={16} /> {nextMatch.venue}
          </div>
        </motion.div>
      </section>

      {/* CLUB OVERVIEW SECTION */}
      <section className="py-20 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none transform rotate-12">
           <Users size={400} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Who We Are</span>
             <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white mb-8 uppercase leading-tight">
               A Brotherhood Forged <br/> on the Pitch
             </h2>
             <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light mb-8">
               Established in <span className="text-white font-semibold">2015</span> under the visionary stewardship of <span className="text-white font-semibold">AMPHS Batch '19</span>, the Royal Bengal Cricket Club began as a collective dream shared among friends. 
             </p>
             <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
               What started on local grounds has evolved into a symbol of unity, discipline, and competitive spirit. We are more than just a club; we are a family driven by an unwavering passion for the game, dedicated to nurturing talent and keeping the legacy of cricket alive.
             </p>
             
             <div className="mt-12 flex justify-center gap-2">
               <div className="h-1.5 w-24 bg-red-600 skew-x-[-20deg]"></div>
               <div className="h-1.5 w-4 bg-slate-600 skew-x-[-20deg]"></div>
               <div className="h-1.5 w-4 bg-slate-700 skew-x-[-20deg]"></div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-red-500 font-bold uppercase tracking-widest text-sm">Updates</span>
              <h2 className="text-4xl font-oswald font-bold text-white mt-1">LATEST NEWS</h2>
            </div>
            <Link to="#" className="hidden md:flex items-center text-slate-400 hover:text-red-500 transition-colors font-bold uppercase text-xs tracking-widest group">
              View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-900 overflow-hidden border-b-4 border-transparent hover:border-red-600 transition-colors"
              >
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10">
                     {item.date}
                   </div>
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 relative -mt-12 bg-slate-900 mx-4 shadow-lg">
                   <h3 className="text-xl font-oswald font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{item.title}</h3>
                   <p className="text-slate-400 text-sm line-clamp-2">{item.description}</p>
                   <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
                      <button 
                        onClick={() => setSelectedNews(item)}
                        className="text-xs font-bold text-slate-500 uppercase hover:text-white transition-colors flex items-center gap-1"
                      >
                        Read Article
                      </button>
                      <ArrowRight className="w-4 h-4 text-red-500" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS & INFO STRIP */}
      <section className="py-16 bg-red-700 text-white relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-red-800/50">
           <div>
             <div className="text-4xl md:text-5xl font-oswald font-bold">25+</div>
             <div className="text-red-200 uppercase tracking-widest text-xs mt-2">Active Players</div>
           </div>
           <div>
             <div className="text-4xl md:text-5xl font-oswald font-bold">12</div>
             <div className="text-red-200 uppercase tracking-widest text-xs mt-2">Tournaments Won</div>
           </div>
           <div>
             <div className="text-4xl md:text-5xl font-oswald font-bold">10</div>
             <div className="text-red-200 uppercase tracking-widest text-xs mt-2">Years History</div>
           </div>
           <div>
             <div className="text-4xl md:text-5xl font-oswald font-bold">100%</div>
             <div className="text-red-200 uppercase tracking-widest text-xs mt-2">Passion</div>
           </div>
        </div>
      </section>

      {/* LEAGUE STANDINGS PREVIEW */}
      <section className="py-20 bg-slate-900">
         <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-oswald font-bold text-white">POINTS TABLE</h2>
               <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
            </div>
            
            <div className="bg-slate-800 rounded-sm overflow-hidden shadow-2xl border border-slate-700">
               <table className="w-full text-left text-sm text-slate-300">
                 <thead className="bg-slate-950 text-white font-oswald uppercase tracking-wider text-xs">
                   <tr>
                     <th className="px-6 py-4">Pos</th>
                     <th className="px-6 py-4 w-1/2">Team</th>
                     <th className="px-6 py-4 text-center">P</th>
                     <th className="px-6 py-4 text-center">W</th>
                     <th className="px-6 py-4 text-center">Pts</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-700">
                    <tr className="bg-slate-700/50 border-l-4 border-yellow-500">
                      <td className="px-6 py-4 font-bold text-yellow-500">1</td>
                      <td className="px-6 py-4 font-bold text-white flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[8px] border border-white/20">RB</div> RBCC
                      </td>
                      <td className="px-6 py-4 text-center">8</td>
                      <td className="px-6 py-4 text-center">7</td>
                      <td className="px-6 py-4 text-center font-bold text-white">14</td>
                    </tr>
                    <tr className="bg-slate-800 hover:bg-slate-700 transition-colors">
                      <td className="px-6 py-4 font-bold">2</td>
                      <td className="px-6 py-4 text-slate-300 flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full"></div> Boda Blasters
                      </td>
                      <td className="px-6 py-4 text-center">8</td>
                      <td className="px-6 py-4 text-center">6</td>
                      <td className="px-6 py-4 text-center font-bold text-white">12</td>
                    </tr>
                    <tr className="hover:bg-slate-700 transition-colors">
                      <td className="px-6 py-4 font-bold">3</td>
                      <td className="px-6 py-4 text-slate-300 flex items-center gap-3">
                         <div className="w-6 h-6 bg-green-600 rounded-full"></div> Ruhia Rivals
                      </td>
                      <td className="px-6 py-4 text-center">8</td>
                      <td className="px-6 py-4 text-center">4</td>
                      <td className="px-6 py-4 text-center font-bold text-white">8</td>
                    </tr>
                 </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedNews(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
               <button 
                onClick={() => setSelectedNews(null)} 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
               >
                 <X size={20} />
               </button>
               
               <div className="h-64 md:h-80 w-full relative">
                 <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                      {selectedNews.date}
                    </span>
                    <h2 className="text-3xl font-oswald font-bold text-white mt-3 leading-tight shadow-black drop-shadow-lg">{selectedNews.title}</h2>
                 </div>
               </div>
               
               <div className="p-8">
                 <div className="prose prose-invert prose-lg max-w-none">
                   <p className="text-xl text-slate-300 leading-relaxed font-light mb-6">
                     {selectedNews.description}
                   </p>
                   <hr className="border-slate-800 my-6" />
                   <h3 className="text-white font-oswald font-bold text-xl mb-4">Full Story</h3>
                   <div className="text-slate-400 text-base leading-relaxed mb-4 whitespace-pre-line">
                     {selectedNews.content || "Full article content is not available at this time."}
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

export default Home;