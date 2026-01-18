import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-eco-beige">
      <div className="max-w-5xl mx-auto bg-eco-forest rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-eco-sage/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner for a Sustainable Future
          </h2>
          <p className="text-eco-sage text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join leading organizations in achieving zero-waste goals. Contact us for tailored waste management solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 flex-grow"
            />
            <button className="px-8 py-4 rounded-full bg-white text-eco-forest font-bold hover:bg-eco-sky transition-colors shadow-lg">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
