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
import './App.css';

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
        Removed the restrictive Tailwind utilities here. 
        The layout is now driven correctly by #root and body rules in App.css 
      */}
      <div>
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
