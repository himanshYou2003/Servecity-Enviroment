import { motion } from 'framer-motion';
import { Layers, TrendingUp, FileCheck, Award } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: "One-stop Solution",
    desc: "Comprehensive environmental compliance and sustainability solutions for corporates."
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    desc: "Integrated services for waste management and monetization via carbon credits."
  },
  {
    icon: FileCheck,
    title: "Simplified Compliance",
    desc: "Streamlined EPR and CPCB/SPCB compliance processes for your peace of mind."
  },
  {
    icon: Award,
    title: "Corporate Image",
    desc: "Boost your brand value with ESG reporting and recognized certifications."
  }
];

import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WhyChooseUs = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-24 relative overflow-hidden bg-eco-sage/10", className)}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-eco-sage/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-eco-sky/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-eco-forest font-semibold tracking-wider uppercase text-sm block mb-3"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-dark leading-tight"
            >
              Excellence in <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-eco-forest to-eco-sage">Sustainability</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-md text-lg leading-relaxed"
          >
            We combine expertise, technology, and commitment to deliver impactful environmental solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-eco-sage/10 shadow-sm hover:shadow-xl hover:border-eco-sage/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-eco-sage/10 rounded-2xl flex items-center justify-center mb-6 text-eco-forest group-hover:bg-eco-forest group-hover:text-white transition-all duration-300">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-eco-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
