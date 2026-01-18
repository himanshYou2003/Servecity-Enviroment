import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-16 max-w-[1400px] mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6 border border-white/30">
            Leading Carbon Credit Developer & Supplier
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
            Start Your <br />
            <span className="text-eco-sage">Climate Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
            Servecity Environment is a global market leader with deep expertise in climate change, carbon offset solutions, and carbon asset management. We champion sustainability solutions like no other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary bg-eco-sage text-eco-dark hover:bg-white hover:text-eco-forest border-none">
              Our Services
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 hidden md:block"
        >
          {/* <div className="max-w-[1400px] mx-auto px-8 py-6 grid grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "16+", label: "Countries Present" },
              { number: "3500+", label: "Global Clients" },
              { number: "200M+", label: "Offsets Supplied" }
            ].map((stat, i) => (
              <div key={i} className="text-white border-r border-white/10 last:border-0">
                <div className="text-3xl font-bold text-eco-sage">{stat.number}</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div> */}
          <div className='font-bold text-4xl text-eco-sage text-center p-6'>Turning Waste into a Sustainable Future</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
