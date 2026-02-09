import { motion } from 'framer-motion';
import { Recycle, Trash2, Cpu, FileText, Factory, Leaf, ShieldCheck, Globe, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

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


          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-eco-sage/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full group cursor-pointer"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-eco-beige/50 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 text-eco-forest shadow-sm shrink-0 group-hover:bg-eco-forest group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="text-sm md:text-2xl font-bold text-eco-dark mb-2 md:mb-3 leading-tight group-hover:text-eco-forest transition-colors">{service.title}</h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Feature: Carbon Credits */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-eco-forest text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden mb-20"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">What sets us apart?</h2>
                <p className="text-eco-sage text-lg mb-8 leading-relaxed">
                  We go beyond just managing waste. We turn your environmental responsibility into tangible value.
                </p>
                <div className="flex items-start gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 bg-eco-sage text-eco-forest rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Carbon Credits Generation</h3>
                    <p className="text-gray-200">
                      Unlike other players in the market, we will generate Carbon credits against your waste for you, 
                      adding financial value to your sustainability efforts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-eco-sage/20 blur-3xl rounded-full" />
                    <Award size={180} className="text-eco-sage relative z-10" />
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-eco-sage/20">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-eco-dark mb-4">Extensive Network</h3>
              <p className="text-gray-600 leading-relaxed">
                With our extensive network and connection with end life recyclers pan India
                we are capable of handling all types and quantities of wastes effectively and efficiently.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-eco-sage/20">
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Factory size={32} />
              </div>
              <h3 className="text-2xl font-bold text-eco-dark mb-4">Comprehensive Handling</h3>
              <p className="text-gray-600 leading-relaxed">
                We are capable of both customized On-site and Off-site waste handling
                even if it is industry specific handling like Organic, plastic, hazardous,
                biomedical etc.
              </p>
            </div>
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
                    <span>Global Standard</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Extended Producer <br/>
                    <span className="text-eco-sage">Responsibility (EPR)</span>
                  </h2>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Servecity Environment provide comprehensive one-stop solution by connecting waste producers, Corporates with recyclers which generate EPR credits, by providing start to end assist.
                  </p>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-6">
                    <h4 className="text-xl font-semibold mb-3 text-eco-sage">We turn compliance into competitive advantage</h4>
                    <ul className="text-gray-300 space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-eco-sage rounded-full"></span>
                            EPR Compliance
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-eco-sage rounded-full"></span>
                            Cost optimization
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-eco-sage rounded-full"></span>
                            Circularity
                        </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column: EPR Services */}
                <div className="w-full lg:w-[500px]">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white text-eco-dark rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-eco-beige/30 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-eco-forest/10 rounded-2xl flex items-center justify-center mb-6 text-eco-forest">
                        <ShieldCheck size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        EPR Services
                      </h3>
                      
                      <ul className="space-y-4">
                        {[
                          "Producer responsibility compliance (Plastic, E-waste, Battery, etc.)",
                          "Registration & documentation support",
                          "Annual returns & audit handling",
                          "Credit sourcing & traceability",
                          "Liaison with authorities / CPCB / SPCBs"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <div className="mt-1 min-w-[20px]">
                              <Award size={18} className="text-eco-forest" />
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ESG Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="esg-section"
            className="mt-24 relative overflow-hidden rounded-[3rem] bg-linear-to-bl from-zinc-800 to-zinc-900 text-white shadow-2xl"
          >
             {/* Background Pattern */}
             <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-eco-sage/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-eco-forest/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-16">
              <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start">
                
                {/* Right Column (Info): ESG Context */}
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-eco-sage text-sm font-medium">
                    <TrendingUp size={16} />
                    <span>Future-Proofing Business</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    ESG Services / <br/>
                    <span className="text-eco-sage">Compliances</span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We provide end-to-end sustainability and ESG solutions, guiding businesses step by step to future-proof their climate action roadmap.
                  </p>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mt-6">
                    <h4 className="text-xl font-semibold mb-3 text-eco-sage">We turn compliance into competitive advantage</h4>
                    <ul className="text-gray-300 space-y-2">
                        {[
                            "ESG Risk reduction",
                            "Investor confidence",
                            "Brand trust",
                            "Access to capital"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-eco-sage rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Left Column (Services List): ESG Services */}
                <div className="w-full lg:w-[480px]">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-zinc-800/80 text-white rounded-3xl p-8 shadow-xl border border-white/10 relative overflow-hidden group backdrop-blur-md"
                  >
                     <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-eco-sage/20 rounded-2xl flex items-center justify-center mb-6 text-eco-sage">
                        <Leaf size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        ESG Services
                      </h3>
                      
                      <ul className="space-y-4">
                        {[
                          "ESG strategy & roadmap",
                          "Materiality assessment",
                          "ESG data collection & management",
                          "ESG reporting (BRSR, GRI, IFRS, etc.)",
                          "Ratings & investor readiness",
                          "Decarbonization & impact measurement"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3 text-zinc-300 group-hover:text-white transition-colors">
                            <div className="mt-1 min-w-[20px]">
                              <CheckCircle2 size={18} className="text-eco-sage" />
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Carbon Credit / Offset Ecosystem Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="carbon-credits"
            className="mt-24 relative overflow-hidden rounded-[3rem] bg-linear-to-tr from-[#1a3c34] to-[#2d5a4e] text-white shadow-2xl"
          >
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 p-8 md:p-16">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                {/* Left Column: Intro & Strategy */}
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-eco-sage text-sm font-medium">
                    <Globe size={16} />
                    <span>Global Impact</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Carbon Credit / <br/>
                    <span className="text-yellow-400">Offset Ecosystem</span>
                  </h2>
                  
                  <p className="text-lg text-gray-200 leading-relaxed font-medium">
                    Carbon credits are no longer a checkbox — they’re a strategic asset.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed">
                    We don't just take your waste away; we transform them into a certified environmental asset.
                    We keep you a step ahead in market where corporates are “buying credits” — we assist you with “owning verified quality credits”.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <div className="flex-1 bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                        <TrendingUp className="text-yellow-400 mb-3" size={24} />
                        <h4 className="font-bold text-lg mb-1">Strategic Asset</h4>
                        <p className="text-xs text-gray-300">Transforming liabilities into certified environmental wealth.</p>
                     </div>
                     <div className="flex-1 bg-white/10 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
                        <ShieldCheck className="text-eco-sage mb-3" size={24} />
                        <h4 className="font-bold text-lg mb-1">Verify Ownership</h4>
                        <p className="text-xs text-gray-300">Don't just buy credits, own the quality and the outcome.</p>
                     </div>
                  </div>
                </div>

                {/* Right Column: The Differentiator */}
                <div className="w-full lg:w-[500px]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white text-eco-dark rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
                  >
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                            <Award size={24} />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-yellow-600 uppercase tracking-wider">The Differentiator</span>
                            <h3 className="text-xl font-bold">What Sets Us Apart?</h3>
                          </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-sm">
                        Wherein most providers are only brokers or traders, we are:
                      </p>

                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 bg-eco-beige/30 p-3 rounded-xl">
                            <CheckCircle2 size={20} className="text-eco-forest shrink-0" />
                            <span className="font-bold text-eco-dark">Credit generators + traders</span>
                        </li>
                        <li className="flex items-center gap-3 bg-eco-beige/30 p-3 rounded-xl">
                            <CheckCircle2 size={20} className="text-eco-forest shrink-0" />
                            <span className="font-medium text-gray-800">Direct control over project integrity</span>
                        </li>
                        <li className="flex items-center gap-3 bg-eco-beige/30 p-3 rounded-xl">
                            <CheckCircle2 size={20} className="text-eco-forest shrink-0" />
                            <span className="font-medium text-gray-800">Transparent, auditable carbon outcomes</span>
                        </li>
                      </ul>

                      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-lg font-bold text-eco-forest italic">
                          "We don’t just trade carbon credits — we create it."
                        </p>
                      </div>

                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Commitment to Sustainability */}
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
