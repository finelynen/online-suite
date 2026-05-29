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

  // 1. ADDED EXPLICIT INLINE BOX AND TRACKING PROPERTIES HERE
  const activeColor = ({ isActive }) => ({
    color: isActive ? 'var(--accent)' : 'var(--text-h)',
    display: 'inline-block', // Guarantees character bounds scale layout correctly
    whiteSpace: 'nowrap',    // Stops individual words from breaking text paths
    letterSpacing: '0.15em'  // Spreads individual letters cleanly apart
  });

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300"
      style={{ 
        background: 'var(--bg)',
        borderColor: 'var(--border)',
        height: '80px' // Hardcoded height keeps structural layout tracking stable
      }}
    >
      <div 
        className="w-full h-full mx-auto px-6 flex items-center justify-between !text-left" 
        style={{ maxWidth: '1126px' }}
      >
        <Link 
          to="/" 
          style={{ color: 'var(--text-h)', letterSpacing: '0.2em' }}
          className="text-lg font-bold uppercase transition-colors shrink-0"
        >
          Fine Lynen
        </Link>

        {/* 
          2. INCREASED INTER-LINK GAP DISTANCE
          Swapped gap-8 for gap-12 to push standalone word links widely apart
        */}
        <div className="hidden md:flex flex-row items-center gap-12 text-xs font-medium uppercase ml-auto">
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
          className="md:hidden border-b px-6 py-6 flex flex-col gap-4 text-xs font-medium uppercase text-left transition-all"
        >
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              style={{ color: 'var(--text-h)', letterSpacing: '0.15em' }}
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
