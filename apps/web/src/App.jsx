import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Structural Elements
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Views
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// ONLY import index.css here to prevent rule pollution
import './index.css';

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
      
      {/* 
        The global base viewport container. 
        Spans 100% width and height of the display monitor window natively.
      */}
      <div 
        className="min-h-screen flex flex-col justify-between w-full"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        {/* Sits at the absolute viewport top without squishing */}
        <Navbar />
        
        {/* 
          This structural inner grid wrapper perfectly aligns content 
          to your 1126px mockup grid boundaries and isolates side borders.
        */}
        <div 
          className="flex-grow w-full mx-auto border-x flex flex-col justify-center items-center px-4 md:px-8 pt-28 pb-12"
          style={{ 
            maxWidth: '1126px', 
            borderColor: 'var(--border)',
            boxSizing: 'border-box'
          }}
        >
          <main className="w-full flex flex-col items-center justify-center flex-grow">
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
        </div>
        
        {/* Bottom wrapper layout matches the main page grid width constraints */}
        <div className="w-full mx-auto border-x" style={{ maxWidth: '1126px', borderColor: 'var(--border)' }}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
