import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your actual pages
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Music from "./pages/Music.jsx";
import Portfolio from "./pages/Portfolio.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* AUTH PAGE */}
        <Route path="/auth" element={<Auth />} />

        {/* DASHBOARD PAGE */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />

        {/* MUSIC / BEATS PAGE */}
        <Route path="/music" element={<Music />} />

        {/* PORTFOLIO PAGE */}
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
  );
}
