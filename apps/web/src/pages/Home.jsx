import { Link } from "react-router-dom";

export default function Home() {
  return (
    // Replaced hardcoded constraints with #center alignment structure from App.css
    <div id="center" className="w-full px-4 py-12 md:py-20 flex flex-col justify-center">
      
      {/* Intro Hero Area */}
      <div className="w-full max-w-4xl text-center md:text-left mb-16">
        {/* Fixed massive overflow by switching to layout-driven fluid clamp sizing */}
        <h1 
          className="tracking-tight font-medium mb-6 leading-none block break-words"
          style={{ 
            fontSize: 'clamp(2rem, 5.5vw, 4.25rem)', 
            color: 'var(--text-h)',
            lineHeight: '1.1'
          }}
        >
          ARTIST <span className="opacity-30">•</span>{' '}
          PRODUCER <span className="opacity-30">•</span>{' '}
          ENGINEER <span className="opacity-30">•</span>{' '}
          MODEL <span className="opacity-30">•</span>{' '}
          ACTOR
        </h1>
        
        <p 
          className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 opacity-80"
          style={{ color: 'var(--text)' }}
        >
          Operating seamlessly across audio engineering, record production, dramatic performance, and high-fashion modeling.
        </p>
      </div>

      {/* Dynamic Navigation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        
        {/* Card 1 */}
        <Link 
          to="/portfolio" 
          style={{ backgroundColor: 'var(--social-bg)', borderColor: 'var(--border)' }}
          className="group block relative overflow-hidden rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
        >
          <div 
            style={{ color: 'var(--text-h)' }}
            className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-bold select-none"
          >
            01
          </div>
          <h3 style={{ color: 'var(--text-h)' }} className="text-xl font-semibold mb-2">
            Visual & Stage
          </h3>
          <p style={{ color: 'var(--text)' }} className="text-sm mb-8 leading-relaxed">
            Modeling editorial layouts, lookbooks, theatrical casting reels, and commercial headshots.
          </p>
          <span style={{ color: 'var(--accent)' }} className="text-xs tracking-widest uppercase font-semibold group-hover:underline">
            Explore Portfolio →
          </span>
        </Link>

        {/* Card 2 */}
        <Link 
          to="/music" 
          style={{ backgroundColor: 'var(--social-bg)', borderColor: 'var(--border)' }}
          className="group block relative overflow-hidden rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
        >
          <div 
            style={{ color: 'var(--text-h)' }}
            className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-bold select-none"
          >
            02
          </div>
          <h3 style={{ color: 'var(--text-h)' }} className="text-xl font-semibold mb-2">
            Music & Releases
          </h3>
          <p style={{ color: 'var(--text)' }} className="text-sm mb-8 leading-relaxed">
            Original artistry, songwriting, commercial beat catalogs, and streaming platform discography.
          </p>
          <span style={{ color: 'var(--accent)' }} className="text-xs tracking-widest uppercase font-semibold group-hover:underline">
            Listen Tracks →
          </span>
        </Link>

        {/* Card 3 */}
        <Link 
          to="/about" 
          style={{ backgroundColor: 'var(--social-bg)', borderColor: 'var(--border)' }}
          className="group block relative overflow-hidden rounded-xl border p-8 hover:shadow-lg transition-all duration-300"
        >
          <div 
            style={{ color: 'var(--text-h)' }}
            className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-8xl font-bold select-none"
          >
            03
          </div>
          <h3 style={{ color: 'var(--text-h)' }} className="text-xl font-semibold mb-2">
            Audio Engineering
          </h3>
          <p style={{ color: 'var(--text)' }} className="text-sm mb-8 leading-relaxed">
            Recording layouts, precision vocal chains, multi-track mixing, and master delivery specs.
          </p>
          <span style={{ color: 'var(--accent)' }} className="text-xs tracking-widest uppercase font-semibold group-hover:underline">
            Studio Specs →
          </span>
        </Link>

      </div>
    </div>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth.jsx";

export default function App() {
  const disciplines = [
    { title: 'Artist', desc: 'Recording artist specializing in vocal performance, songwriting, and musical creation. Delivering original records, dynamic vocal execution, and full song development.' },
    { title: 'Producer', desc: 'Sonic architecture, record production, and music composition.' },
    { title: 'Engineer', desc: 'Industry-standard vocal tracking, mixing, and audio mastering.' },
    { title: 'Model', desc: 'High-fashion runway layouts, commercial print, and editorial lookbooks.' },
    { title: 'Actor', desc: 'Theatrical cinema performances, screen productions, and commercial works.' },
  ];

  const contactSection = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="fine-lynen-portfolio" style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0 }}>
              
              {/* 1. Header Navigation Layout */}
              <header role="banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', background: '#000000', borderBottom: '1px solid #111111' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '900', letterSpacing: '1px' }}>
                  FINE LYNEN
                </div>
                <nav>
                  <a href="#contact" onClick={contactSection} style={{ background: '#c5a880', color: '#000000', padding: '10px 20px', borderRadius: '4px', fontWeight: '600', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Inquire / Booking
                  </a>
                </nav>
              </header>

              {/* 2. Professional Profile Hero Section */}
              <section style={{ padding: '120px 20px', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
                <span style={{ fontSize: '11px', color: '#c5a880', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '15px' }}>
                  Artist • Producer • Engineer • Model • Actor
                </span>
                <h1 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '0 0 25px 0', letterSpacing: '-2px', textTransform: 'uppercase' }}>
                  Fine Lynen
                </h1>
                <p style={{ color: '#888888', fontSize: '1.3rem', fontWeight: '300', marginBottom: '40px', lineHeight: '1.7', letterSpacing: '0.5px' }}>
                  Creative force across music, fashion, and film. Offering premier creative collaboration, audio production assets, editorial modeling talent, and screen performance execution.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="#contact" onClick={contactSection} style={{ border: '1px solid #c5a880', color: '#c5a880', padding: '14px 35px', textDecoration: 'none', fontWeight: '500', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px', borderRadius: '4px' }}>
                    View representation details
                  </a>
                </div>
              </section>

              {/* 3. Core Ecosystem Columns */}
              <section style={{ background: '#000000', padding: '80px 20px', borderTop: '1px solid #111111', borderBottom: '1px solid #111111' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                  <h2 style={{ fontSize: '0.85rem', color: '#555555', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '40px', textAlign: 'center' }}>Professional Ecosystem</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {disciplines.map((item, idx) => (
                      <div key={idx} style={{ border: '1px solid #111111', padding: '30px', background: '#050505', borderRadius: '6px' }}>
                        <h3 style={{ color: '#c5a880', margin: '0 0 12px 0', fontSize: '1.25rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {item.title}
                        </h3>
                        <p style={{ color: '#777777', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 4. Action Contact / Profile Footer */}
              <footer id="contact" style={{ background: '#050505', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <h4 style={{ color: '#c5a880', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                    Direct Business Booking
                  </h4>
                  <p style={{ margin: '0 0 40px 0' }}>
                    <a href="mailto:finelynen@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.4rem', fontWeight: '500', borderBottom: '1px solid #333333', paddingBottom: '4px' }}>
                      finelynen@gmail.com
                    </a>
                  </p>
                  <div style={{ borderTop: '1px solid #111111', paddingTop: '30px', fontSize: '0.8rem', color: '#444444', letterSpacing: '1px' }}>
                    &copy; {new Date().getFullYear()} FINE LYNEN. All rights reserved.
                  </div>
                </div>
              </footer>

            </div>
          }
        />

        {/* AUTH PAGE */}
        <Route path="/auth" element={<Auth />} />

      </Routes>
    </BrowserRouter>
  );
}
