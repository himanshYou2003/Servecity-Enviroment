import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-eco-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-eco-forest font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-eco-dark mt-4 mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl font-bold text-eco-dark mb-6">Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eco-beige rounded-xl text-eco-forest">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Registered Office</p>
                      <p className="text-gray-600 leading-relaxed">
                        Flat No 206, A Wing, Nav Kiran SRA Society,<br />
                        Near Apna Ghar Society, Harinagar,<br />
                        Mumbai, Maharashtra, India – 400060
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eco-beige rounded-xl text-eco-forest">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                      <p className="text-gray-600">servecityenvt.in@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eco-beige rounded-xl text-eco-forest">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                      <p className="text-gray-600">+91 123 456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-eco-beige rounded-xl text-eco-forest">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Business Hours</p>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-eco-dark mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-sage/50" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-sage/50" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-sage/50" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-sage/50">
                    <option>Waste Management Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eco-sage/50" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-eco-forest text-white font-bold text-lg hover:bg-eco-dark transition-colors shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
