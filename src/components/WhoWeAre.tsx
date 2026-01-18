import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-eco-forest font-semibold tracking-wider uppercase text-sm">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mt-4 mb-8 leading-tight">
            Total Waste Management <br />
            <span className="text-eco-sage">Solutions</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Servecity Environment Private Limited is a premier environmental services company incorporated in 2021. 
              Based in Mumbai, we specialize in comprehensive waste management solutions for corporates, industries, and institutions.
            </p>
            <p>
              We handle a wide spectrum of waste categories including metal, scrap, wet & dry waste, e-waste, and plastics. 
              Our mission is to drive sustainability for the environment and society through efficient recycling and waste management practices.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-500 font-medium">CIN: U37100MH2021PTC362836</p>
            </div>
          </div>
          <Link to="/who-we-are" className="mt-10 inline-block px-8 py-3 rounded-full bg-eco-forest text-white font-semibold hover:bg-eco-dark transition-all duration-300 shadow-lg hover:shadow-xl">
            Read Our Story
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-4xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
              alt="Waste Management Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-4xl font-bold mb-1">Est. 2021</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Mumbai, India</div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-eco-sage/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-eco-sky/30 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
