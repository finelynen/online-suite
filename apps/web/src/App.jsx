import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Auto-scrolls to top on page navigation
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust these paths if needed
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  // 1. Initialize the global form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-neutral-950 text-neutral-100 min-h-screen selection:bg-white selection:text-black font-sans antialiased">
        <Navbar />
        <main className="pt-20 min-h-[calc(100vh-160px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/portfolio" element={<Portfolio />} />
            
            {/* 2. Pass state and setter functions as props here */}
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

