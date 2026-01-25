import { motion } from 'framer-motion';
import { Recycle, Trash2, Cpu, FileText, Factory, Leaf, ShieldCheck, Globe, Award, Coins } from 'lucide-react';

const services = [
  {
    icon: Trash2,
    title: "Wet Waste Management",
    desc: "Efficient collection and processing of organic and food waste, converting it into compost or energy."
  },
  {
    icon: Recycle,
    title: "Dry Waste Recycling",
    desc: "Sorting and recycling of general non-organic waste, ensuring maximum material recovery."
  },
  {
    icon: Cpu,
    title: "E-Waste Disposal",
    desc: "Secure and eco-friendly disposal of discarded electronics, recovering valuable metals and safe handling of hazardous components."
  },
  {
    icon: FileText,
    title: "Paper & Plastic",
    desc: "Comprehensive recycling solutions for paper and plastic waste, promoting circular economy loops."
  },
  {
    icon: Factory,
    title: "Industrial Waste",
    desc: "Specialized handling of industrial by-products, scrap metal, and other manufacturing waste streams."
  },
  {
    icon: Leaf,
    title: "Environmental Consulting",
    desc: "Expert advisory services to help organizations achieve their sustainability and compliance goals."
  }
];

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OurServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-24 min-h-screen bg-eco-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mt-4 mb-8">Our Services</h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-16 leading-relaxed">
            Servecity Environment specializes in <strong>Total Waste Management</strong> and environmental recycling services. 
            We create practical, ground-level solutions that reduce the waste burden on the ecosystem.
          </p>


          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-eco-sage/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-eco-beige/50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-eco-forest shadow-sm shrink-0">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="text-sm md:text-2xl font-bold text-eco-dark mb-2 md:mb-3 leading-tight">{service.title}</h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Modern EPR Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="epr-section"
            className="mt-24 relative overflow-hidden rounded-[3rem] bg-linear-to-br from-eco-forest to-[#2A4435] text-white shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                
                {/* Left Column: What is EPR? */}
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-eco-sage text-sm font-medium">
                    <Globe size={16} />
                    <span>Global Standard Policy</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Extended Producer <br/>
                    <span className="text-eco-sage">Responsibility (EPR)</span>
                  </h2>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    EPR is a policy approach that extends the producer's responsibility for a product to the post-consumer stage of its life cycle. It shifts the burden of waste management from municipalities to the producers.
                  </p>

                  <div className="space-y-6 pt-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-eco-sage" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Legal Accountability</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Producers are legally and financially responsible for the entire lifecycle of their products, ensuring safe disposal.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <Recycle className="text-eco-sage" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">Lifecycle Management</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          From manufacturing to post-consumer waste, companies must ensure efficient recycling and recovery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: EPR Credits Card */}
                <div className="w-full lg:w-[450px]">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white text-eco-dark rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-eco-beige/30 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-eco-forest/10 rounded-2xl flex items-center justify-center mb-6 text-eco-forest">
                        <Award size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        EPR Credits
                        <span className="px-3 py-1 rounded-full bg-eco-beige text-xs font-bold text-eco-forest uppercase tracking-wider">Certified</span>
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Official certificates proving a company has met its waste management obligations. If a business cannot manage its own waste, it can purchase these credits from authorized recyclers.
                      </p>

                      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <div className="flex items-center gap-3 mb-3 text-sm font-semibold text-gray-800">
                          <Coins size={18} className="text-yellow-600" />
                          <span>How it works</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Companies placing plastic, batteries, or electronics in the market must offset their footprint by purchasing equivalent recycling credits from certified partners like us.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

          <div className="mt-20 bg-eco-forest rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Commitment to Sustainability</h2>
              <p className="text-eco-sage text-lg max-w-2xl mx-auto">
                Our operations are aligned with creating a cleaner, greener future. We help our clients not just manage waste, 
                but transform it into a resource.
              </p>
            </div>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServicesPage;
