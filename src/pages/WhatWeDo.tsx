import { motion } from 'framer-motion';
import { Recycle, Trash2, Cpu, FileText, Factory, Leaf } from 'lucide-react';

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

const WhatWeDoPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-eco-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-eco-forest font-semibold tracking-wider uppercase text-sm">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mt-4 mb-8">What We Do</h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-16 leading-relaxed">
            Servecity Environment specializes in <strong>Total Waste Management</strong> and environmental recycling services. 
            We create practical, ground-level solutions that reduce the waste burden on the ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-eco-sage/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-eco-beige/50 rounded-2xl flex items-center justify-center mb-6 text-eco-forest shadow-sm">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-eco-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

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

export default WhatWeDoPage;
