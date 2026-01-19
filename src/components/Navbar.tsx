import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { title: "Home", href: "/" },
  { title: "Our Services", href: "/our-services" },
  { title: "About Us", href: "/about-us" },

  { title: "Engage", href: "/engage" }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-2`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img src="/logo.jpg" alt="Servecity Environment" className="h-12 w-auto object-contain rounded-full" />
          <div className="text-xl font-bold tracking-tight text-eco-forest">
            Servecity<span className="font-light">Environment</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item, index) => {
            if (item.title === "Our Services") {
              return (
                <div key={index} className="relative group">
                  <Link 
                    to={item.href}
                    className="text-sm font-medium hover:text-eco-sage transition-colors text-eco-dark flex items-center gap-1"
                  >
                    {item.title}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[200px] overflow-hidden">
                      {[
                        "Waste Management",
                        "EPR",
                        "ESG",
                        "EKI/AVS"
                      ].map((subItem, i) => (
                        <Link
                          key={i}
                          to="/our-services"
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-eco-forest hover:bg-eco-sage/10 rounded-lg transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link 
                key={index} 
                to={item.href}
                className="text-sm font-medium hover:text-eco-sage transition-colors text-eco-dark"
              >
                {item.title}
              </Link>
            );
          })}
          <Link to="/contact" className="px-5 py-2 rounded-full text-sm font-semibold transition-all bg-eco-forest text-white hover:bg-eco-dark">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden z-50 text-eco-forest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className="text-eco-dark" />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-8 overflow-y-auto"
            >
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.href}
                    className="text-xl font-semibold text-eco-dark border-b border-gray-100 pb-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link 
                  to="/contact"
                  className="w-full py-4 mt-4 rounded-xl bg-eco-forest text-white font-bold text-lg text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
