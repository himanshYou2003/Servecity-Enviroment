import { motion } from 'framer-motion';
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
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-eco-sage/20 mt-8">
                <h3 className="text-xl font-bold text-eco-forest mb-4">Company Details</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Incorporation Date</span>
                    <span className="font-medium">June 28, 2021</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Registration</span>
                    <span className="font-medium">Mumbai, Maharashtra (RoC)</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">CIN</span>
                    <span className="font-medium">U37100MH2021PTC362836</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <span className="font-medium text-green-600">Active</span>
                  </li>
                </ul>
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

              <div>
                <h2 className="text-3xl font-bold text-eco-dark mb-6">Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-eco-forest/10 rounded-full flex items-center justify-center text-eco-forest font-bold text-2xl mb-4">
                      AS
                    </div>
                    <h3 className="text-xl font-bold text-eco-dark">Avinashkumar Anilkumar Sah</h3>
                    <p className="text-eco-sage font-medium">Director</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-eco-forest/10 rounded-full flex items-center justify-center text-eco-forest font-bold text-2xl mb-4">
                      ET
                    </div>
                    <h3 className="text-xl font-bold text-eco-dark">Ekanath Dhondu Tambe</h3>
                    <p className="text-eco-sage font-medium">Director</p>
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
