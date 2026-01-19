import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

import { ArrowDown } from 'lucide-react';
import Mission from '../components/Mission';
import Stats from '../components/Stats';


const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />

      <Mission />
      <Stats />
      <section className="w-full bg-eco-beige pb-16 px-4">
        <div className="max-w-5xl mx-auto relative">
          <img 
            src="/map.png" 
            alt="Global Presence Map" 
            className="w-full h-auto object-contain rounded-3xl"
          />
          {/* India Marker */}
          <div className="absolute top-[51%] left-[68%] -translate-x-1/2 -translate-y-[100%] flex flex-col items-center">
             <div className="text-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg border border-eco-sage flex flex-col items-center mb-1">
                <span className="text-[24px] font-bold text-zinc-900 uppercase tracking-wider">India</span>
             </div>
             <ArrowDown className="w-6 h-6 text-eco-forest mb-1" strokeWidth={2.5} />
             <div className="relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-forest opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-eco-forest border-2 border-white"></span>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
