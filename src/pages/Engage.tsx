import { motion } from 'framer-motion';
import { Linkedin, Facebook, Globe, Mail, ArrowRight } from 'lucide-react';

const EngagePage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-eco-forest font-semibold tracking-wider uppercase text-sm">Connect With Us</span>
          <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mt-4 mb-8">Engage</h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-16 leading-relaxed">
            We actively connect with stakeholders, clients, and the community through various digital channels. 
            Follow us to stay updated on our sustainability efforts and waste management solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" className="group bg-blue-50 p-8 rounded-3xl hover:bg-blue-100 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-blue-600 text-white rounded-2xl">
                  <Linkedin size={32} />
                </div>
                <ArrowRight className="text-blue-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600">Follow our company profile for industry insights, updates, and professional engagement.</p>
            </a>

            <a href="#" className="group bg-indigo-50 p-8 rounded-3xl hover:bg-indigo-100 transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-indigo-600 text-white rounded-2xl">
                  <Facebook size={32} />
                </div>
                <ArrowRight className="text-indigo-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600">Join our community to see our local impact, sustainability tips, and company news.</p>
            </a>

            <div className="group bg-eco-beige p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-eco-forest text-white rounded-2xl">
                  <Globe size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-eco-dark mb-2">Official Website</h3>
              <p className="text-gray-600 mb-4">You are currently visiting our official digital presence.</p>
              <p className="font-medium text-eco-forest">http://servecityenvt.in/</p>
            </div>

            <div className="group bg-gray-50 p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 bg-gray-800 text-white rounded-2xl">
                  <Mail size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Direct Contact</h3>
              <p className="text-gray-600 mb-4">Reach out to us directly for business inquiries and collaborations.</p>
              <p className="font-medium text-gray-900">servecityenvt.in@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EngagePage;
