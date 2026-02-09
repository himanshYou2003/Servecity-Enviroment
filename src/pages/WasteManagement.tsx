import { motion } from 'framer-motion';
import { Leaf, Award, Recycle, Factory, CheckCircle2, Globe, TrendingUp } from 'lucide-react';

const WasteManagementPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-eco-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-sage/10 text-eco-forest text-sm font-medium mb-6">
              <Leaf size={16} />
              <span>Sustainable Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mb-6">
              Waste Management
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Servecity Environment provides legally compliant, reliable and eco-friendly
              waste management solutions for residential and corporate clients across
              India which balances cost-effectiveness with a commitment to responsible
              recycling and disposal.
            </p>
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

          {/* Circular Economy Principles */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-eco-sage/20 shadow-lg">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-eco-forest text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Recycle size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-eco-dark mb-4">Circular Economy Principles</h2>
              <p className="text-gray-600">Our comprehensive approach covers every aspect of the waste lifecycle.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Waste Audits",
                "Reduction",
                "Segregation",
                "Collection",
                "Infrastructure Setup",
                "Processing",
                "Data Analysis",
                "Certification"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-eco-beige/30 rounded-xl border border-eco-sage/10">
                  <CheckCircle2 size={20} className="text-eco-forest shrink-0" />
                  <span className="font-medium text-eco-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default WasteManagementPage;
