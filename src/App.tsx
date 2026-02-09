import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import OurServicesPage from './pages/OurServices';

import EngagePage from './pages/Engage';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-eco-beige overflow-x-hidden flex flex-col">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/our-services" element={<OurServicesPage />} />

            <Route path="/engage" element={<EngagePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
