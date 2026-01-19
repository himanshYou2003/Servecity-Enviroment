import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-eco-dark text-white/80 pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-6">Servecity Environment</h2>
          <p className="max-w-sm mb-6 text-white/60 text-sm leading-relaxed">
            Servecity Environment Private Limited is a premier environmental services company dedicated to sustainable waste management and circular economy solutions.
          </p>
          <div className="text-xs text-white/40 space-y-1 mb-6">
            <p>CIN: U37100MH2021PTC362836</p>
            <p>Est. June 28, 2021</p>
            <p>RoC: Mumbai, Maharashtra</p>
          </div>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-eco-forest transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {['Home', 'About Us', 'Our Services', 'Engage', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-eco-sage transition-colors text-white/70">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <h3 className="text-white font-bold mb-6">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="font-semibold text-white min-w-[60px]">Address:</span>
                <span>
                  Flat No 206, A Wing, Nav Kiran SRA Society,<br />
                  Near Apna Ghar Society, Harinagar,<br />
                  Mumbai, Maharashtra, India – 400060
                </span>
              </li>
            </ul>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="font-semibold text-white min-w-[60px]">Email:</span>
                <span>servecityenvt.in@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white min-w-[60px]">Phone:</span>
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white min-w-[60px]">Hours:</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center text-sm">
        <p className="flex items-center justify-center gap-2">
          © 2026 Servecity Environment. Made with <Heart size={14} className="text-red-500 fill-red-500" /> for the planet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
