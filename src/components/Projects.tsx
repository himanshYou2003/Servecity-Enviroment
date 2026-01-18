import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Industrial Scrap Management",
    category: "Metal Waste",
    image: "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?q=80&w=1974&auto=format&fit=crop",
    desc: "Large-scale metal scrap collection and recycling for major automotive industries."
  },
  {
    title: "Corporate E-Waste Drive",
    category: "E-Waste",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop",
    desc: "Secure disposal and recycling of electronic assets for multinational corporations."
  },
  {
    title: "Plastic Circularity",
    category: "Recycling",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
    desc: "Implementing closed-loop plastic recycling systems for consumer goods packaging."
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-eco-forest font-semibold tracking-wider uppercase text-sm">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-eco-dark mt-4">Ongoing Projects</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-eco-forest font-semibold hover:text-eco-sage transition-colors">
            View All Projects <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-3xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-eco-dark uppercase tracking-wide">
                  {project.category}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-eco-dark mb-2 group-hover:text-eco-forest transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{project.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="btn-primary">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
