import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Users } from 'lucide-react';

const InvestorsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-eco-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-eco-forest font-semibold tracking-wider uppercase text-sm">Corporate Info</span>
          <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mt-4 mb-12">Investors</h1>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-eco-sage/10">
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 bg-eco-sky/20 rounded-2xl text-eco-forest shrink-0">
                <TrendingUp size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-eco-dark mb-2">Funding Status</h2>
                <p className="text-gray-600 leading-relaxed">
                  Servecity Environment Private Limited is a privately held company. As of now, there are no publicly disclosed 
                  external investors, venture capital funding, or institutional backing recorded in public business directories.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 bg-eco-sage/20 rounded-2xl text-eco-forest shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-eco-dark mb-2">Private Ownership</h2>
                <p className="text-gray-600 leading-relaxed">
                  Like many small private limited companies in India, we operate primarily through founder capital and internal funding. 
                  Our focus remains on building sustainable value through our core operations in waste management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 bg-eco-forest/10 rounded-2xl text-eco-forest shrink-0">
                <Users size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-eco-dark mb-2">Stakeholder Value</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to delivering value to our clients, employees, and the environment. Any future updates regarding 
                  investment rounds or partnerships will be officially announced through our website and press releases.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorsPage;
