import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun } from 'lucide-react';

const missions = [
  {
    icon: Leaf,
    title: "Comprehensive Services",
    desc: "To deliver comprehensive waste management services that handle all major types of waste — including wet waste, dry waste, e-waste, paper, and plastics."
  },
  {
    icon: Droplets,
    title: "Environmental Sustainability",
    desc: "To support environmental sustainability by managing waste in ways that reduce environmental harm and promote cleaner communities."
  },
  {
    icon: Sun,
    title: "Corporate Solutions",
    desc: "To serve corporates, industries, and institutions with efficient and responsible waste solutions, helping them meet environmental and regulatory goals."
  }
];

const Mission = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-eco-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-eco-forest font-semibold tracking-wider uppercase text-sm"
          >
            Our Mission
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-eco-dark mt-4"
          >
            Restoring the Balance
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-eco-sage/20 rounded-2xl flex items-center justify-center mb-6 text-eco-forest group-hover:bg-eco-forest group-hover:text-white transition-colors duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-eco-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
