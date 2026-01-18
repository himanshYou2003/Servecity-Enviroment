import { motion } from 'framer-motion';
import { Recycle, PackageCheck, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Recycle,
    title: "Waste Management",
    desc: "Handling metal waste, scrap, wet & dry waste, e-waste, and paper/plastic waste for industries and institutions."
  },
  {
    icon: PackageCheck,
    title: "EPR Services",
    desc: "Extended Producer Responsibility compliance and management to ensure product lifecycle sustainability."
  },
  {
    icon: ShieldCheck,
    title: "ESG Consulting",
    desc: "Strategic Environmental, Social, and Governance advisory to enhance corporate sustainability performance."
  },
  {
    icon: TrendingUp,
    title: "Carbon Credits Trading",
    desc: "Expert guidance and trading services for voluntary and compliance carbon markets globally."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-eco-beige/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-eco-forest font-semibold tracking-wider uppercase text-sm"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-eco-dark mt-4"
          >
            Our Offerings
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-eco-sage/30 flex flex-col"
            >
              <div className="w-14 h-14 bg-eco-sky/30 rounded-2xl flex items-center justify-center mb-6 text-eco-forest group-hover:bg-eco-forest group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-eco-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.desc}</p>
              
              <a href="#" className="inline-flex items-center text-eco-forest font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
