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
    isActive 
      ? "font-semibold transition-all duration-200" 
      : "opacity-60 hover:opacity-100 transition-all duration-200";

  const activeColor = ({ isActive }) => ({
    color: isActive ? 'var(--accent)' : 'var(--text-h)'
  });

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{ 
        background: 'var(--bg)',
        borderColor: 'var(--border)' 
      }}
    >
      {/* 
        CRITICAL FIX: Added !text-left and explicit flex behaviors here.
        This forces the container to break out of the #root text-align inheritance.
      */}
      <div 
        className="w-full mx-auto px-6 h-20 flex items-center justify-between !text-left" 
        style={{ maxWidth: '1126px' }}
      >
        <Link 
          to="/" 
          style={{ color: 'var(--text-h)' }}
          className="text-lg font-bold tracking-[0.2em] uppercase transition-colors shrink-0"
        >
          Fine Lynen
        </Link>

        {/* 
          Desktop Links Container
          The gap-8 with explicit flex-row ensures items spread horizontally out.
        */}
        <div className="hidden md:flex flex-row items-center gap-8 text-xs font-medium tracking-widest uppercase ml-auto">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={activeStyle}
              style={activeColor}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ color: 'var(--text-h)' }}
          className="md:hidden opacity-70 hover:opacity-100 focus:outline-none cursor-pointer ml-auto"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div 
          style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
          className="md:hidden border-b px-6 py-6 flex flex-col gap-4 text-xs font-medium tracking-widest uppercase text-left transition-all"
        >
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              style={{ color: 'var(--text-h)' }}
              className="opacity-70 hover:opacity-100 py-2 border-b border-transparent transition-opacity"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
