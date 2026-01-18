import { motion } from 'framer-motion';

const stats = [
  { number: "3500+", label: "Global Clients" },
  { number: "200M+", label: "Offsets Supplied" },
  { number: "16+", label: "Countries Present" },
  { number: "100K+", label: "Tons Recycled" }
];

const Stats = () => {
  return (
    <section className="py-20 bg-eco-forest text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4"
            >
              <h3 className="text-4xl md:text-6xl font-bold mb-2 text-eco-sage">{stat.number}</h3>
              <p className="text-eco-beige/80 text-lg font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
