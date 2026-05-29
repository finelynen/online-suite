import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout & Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// Global styles containing your 1126px grid & themes
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
  // Initialize the form state across page transitions
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
        FIX 1: Force the primary wrapper div to span at least 100% 
        of the viewport screen height using a flex column layout.
      */}
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        
        {/* 
          FIX 2: Adding 'flex-grow' instructs this main block to act like 
          a rubber band, filling all vertical blank spaces seamlessly.
        */}
        <main className="pt-20 flex-grow flex flex-col justify-center w-full">
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
