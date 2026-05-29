import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// ONE single instance of components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Ingest the fixed global fonts and structural spacing limits
import './index.css';

// Auto-scrolls to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });

  return (
    <Router>
      <ScrollToTop />
      <div>
        {/* Renders exactly once at the absolute top of the page viewport */}
        <Navbar />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route 
              path="/contact" 
              element={<Contact formData={formData} setFormData={setFormData} />} 
            />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
