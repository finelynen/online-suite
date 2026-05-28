import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Music", path: "/music" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeStyle = ({ isActive }) =>
    isActive ? "text-white font-semibold" : "text-neutral-400 hover:text-white transition-colors duration-200";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-[0.2em] uppercase hover:text-neutral-400 transition-colors">
          YOUR NAME
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={activeStyle}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-neutral-400 hover:text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-900 px-6 py-4 flex flex-col gap-4 text-xs font-medium tracking-widest uppercase">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white py-2">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
