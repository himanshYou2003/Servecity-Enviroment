import { motion } from 'framer-motion';
import { Award, Infinity, Recycle, TrendingUp, FileCheck, BarChart3, HeartHandshake, Quote } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutUsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-eco-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mt-4 mb-8">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We are committed to inspiring communities and organizations to
minimize their carbon footprint through our services, community-
based projects and environment friendly solutions.
              </p>
              <p>
                We help Government, Industries and Corporates reduce, offset their
carbon emission and save Lakhs and Crores of rupees every year
they spend towards achieving their corporate sustainable goals by
providing them holistic service which combines Waste
management activities+ EPR Services+ ESG Reporting+ Carbon
credit trading.
              </p>
              
              {/* Integrated Ecosystem Highlights */}
              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-bold text-eco-dark flex items-center gap-3">
                    <span className="w-8 h-1 bg-eco-forest rounded-full"></span>
                    Our Integrated Ecosystem
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Featured Item */}
                    <div className="md:col-span-2 bg-eco-forest text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform" />
                        <div className="relative z-10 flex gap-4 items-start">
                            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                                <Award className="text-yellow-300" size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">One-Stop Solution</h4>
                                <p className="text-eco-sage text-sm leading-relaxed">
                                    Complete corporate environmental compliance and sustainability from a single partner.
                                </p>
                            </div>
                        </div>
                    </div>

                    {[
                        {
                            icon: Infinity,
                            text: "Lifetime unlimited Carbon & Plastic Credits Ecosystem",
                            color: "text-blue-600",
                            bg: "bg-blue-50"
                        },
                        {
                            icon: Recycle,
                            text: "Integrated Waste + EPR + ESG + Carbon Credit Ecosystem",
                            color: "text-green-600",
                            bg: "bg-green-50"
                        },
                        {
                            icon: TrendingUp,
                            text: "Cost savings via optimization & carbon monetization",
                            color: "text-purple-600",
                            bg: "bg-purple-50"
                        },
                        {
                            icon: FileCheck,
                            text: "Simplified EPR and CPCB/SPCB compliance",
                            color: "text-orange-600",
                            bg: "bg-orange-50"
                        },
                        {
                            icon: BarChart3,
                            text: "Boosted corporate image with ESG reporting",
                            color: "text-indigo-600",
                            bg: "bg-indigo-50"
                        },
                        {
                            icon: HeartHandshake,
                            text: "Handling CSR funds for sustainable projects",
                            color: "text-rose-600",
                            bg: "bg-rose-50"
                        }
                    ].map((item, i) => (
                        <motion.div 
                            whileHover={{ y: -5 }}
                            key={i} 
                            className="bg-white p-5 rounded-2xl shadow-sm border border-eco-sage/10 hover:shadow-md transition-all flex gap-4 items-start"
                        >
                             <div className={`${item.bg} ${item.color} p-3 rounded-xl shrink-0`}>
                                <item.icon size={20} />
                             </div>
                             <span className="text-gray-700 font-medium text-sm leading-relaxed pt-1">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
              </div>

            </div>

            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-80">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" 
                  alt="Nature and Sustainability" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="md:sticky md:top-24">
                <h2 className="text-3xl font-bold text-eco-dark mb-6 flex items-center gap-3">
                   <span className="w-8 h-1 bg-eco-forest rounded-full"></span>
                   Leadership
                </h2>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-eco-forest to-eco-sage rounded-2xl blur-md opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-white/20">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                       <Quote size={80} className="text-eco-forest" />
                    </div>
                    
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-24 h-24 mb-6 relative">
                            <div className="absolute inset-0 bg-eco-forest/10 rounded-full animate-pulse"></div>
                            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center border-2 border-eco-forest/20 shadow-inner">
                                <span className="text-3xl font-bold text-eco-forest">AS</span>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-eco-dark mb-2">Avinashkumar Sah</h3>
                        <div className="inline-block px-4 py-1 bg-eco-sage/10 rounded-full mb-6">
                            <p className="text-eco-forest font-semibold text-sm tracking-wide uppercase">Director</p>
                        </div>
                        
                        <p className="text-gray-600 italic leading-relaxed">
                            "Driving sustainability through innovation and integrity. Our mission is to create value from waste while preserving our planet for future generations."
                        </p>
                        
                        <div className="mt-6 pt-6 border-t border-gray-100 w-full flex justify-center gap-4">
                           {/* Social/Contact placeholders could go here */}
                           <div className="h-1 w-12 bg-eco-forest/20 rounded-full"></div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <WhyChooseUs className="bg-eco-beige" />
    </div>
  );
};

export default AboutUsPage;
