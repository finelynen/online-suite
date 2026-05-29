import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css'; 
import Auth from './pages/Auth'; 
import Shop from './pages/Shop';
import { CartProvider, useCart } from './context/CartContext';

// Clean sub-component for the main store contents
function Storefront() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Production Pattern: Fetch live uploaded products on load
  useEffect(() => {
    fetch('<http://localhost:5000/api/products/>')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching inventory:', err);
        setLoading(false);
      });
  }, []);

  // Group products by their uploaded categories dynamically
  const categories = products.reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <main>
      {/* Hero Banner Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Handcrafted Elegance</h1>
          <p>Unique, artisanal crafts delivered from our home to yours.</p>
        </div>
      </section>
      
      {/* Clickable React Router link styled as a boutique button */}
      <div className="shop-all-container" style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
        <Link to="/shop" className="btn-primary" style={{ textDecoration: 'none' }}>
          Shop All Products
        </Link>
      </div>

      {/* Dynamic Storefront Categories Container */}
      <section id="shop" className="container shop-container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Shop by Category</h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}><h3>Loading Boutique Catalog...</h3></div>
        ) : Object.keys(categories).length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#777' }}><p>No products uploaded yet.</p></div>
        ) : (
          Object.keys(categories).map((categoryName) => (
            <div key={categoryName} className="category-group" style={{ marginBottom: '3rem' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}>
                {categoryName}
              </h3>
              
              <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {categories[categoryName].map((item) => (
                  <div 
                    key={item.id || item._id} 
                    className="product-card" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      position: 'relative',
                      opacity: item.isAvailable ? 1 : 0.6 
                    }}
                  >
                    {!item.isAvailable && (
                      <span style={{
                        position: 'absolute', top: '15px', right: '15px',
                        background: '#d9534f', color: '#fff', fontSize: '11px',
                        fontWeight: 'bold', padding: '4px 10px', textTransform: 'uppercase',
                        borderRadius: '2px', zIndex: 5
                      }}>
                        Sold Out
                      </span>
                    )}

                    <div 
                      className="card-img" 
                      style={{ 
                        backgroundImage: `url('${item.image}')`,
                        height: '300px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#eaeaea' 
                      }}
                    ></div>
                    <div className="card-info" style={{ padding: '1rem 0', textAlign: 'center' }}>
                      <h4 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h4>
                      <p style={{ fontWeight: '500', marginBottom: '10px', fontSize: '0.9rem' }}>${Number(item.price).toFixed(2)}</p>
                      
                      <button className="btn-secondary" onClick={() => navigate('/shop')}>
                        {item.isAvailable ? `View ${item.title}` : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

// Custom Navigation Link Component to handle cross-page anchor scrolling safely
function NavAnchorLink({ toElementId, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: toElementId } });
    } else {
      document.getElementById(toElementId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <a href={`#${toElementId}`} onClick={handleScroll}>{children}</a>;
}

// Core Navigation Wrapper to listen for incoming redirect scroll events
function ScrollToViewManager({ children }) {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToId) {
      const elementId = location.state.scrollToId;
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return children;
}

// Sub-navigation layout block: Now dynamically updates based on client login state
function NavigationHeader() {
  const { cartItemCount } = useCart(); 
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Read user token to check auth status live
  const isAuthenticated = !!localStorage.getItem('bmp_token');

  const handleLogout = () => {
    localStorage.removeItem('bmp_token'); // Clear token
    alert('Logged out successfully.');
    navigate('/'); // Route home safely
  };

  return (
    <header role="banner" className="main-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #eee' }}>
      <div className="logo-container">
        <Link to="/">
          <img src="/images/bmp_logo.png" alt="Black Magic Puffs" className="site-logo" style={{ maxHeight: '60px' }} />
        </Link>
      </div>
      
      <nav className="navbar">
        <ul className="nav-links" style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
          <li><Link to="/">Home</Link></li>
          <li><NavAnchorLink toElementId="shop">Shop</NavAnchorLink></li>
          <li><NavAnchorLink toElementId="about">About</NavAnchorLink></li>
          <li>
            <Link to="/shop" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              Cart
              {cartItemCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-10px', right: '-15px',
                  background: '#c5a880', color: '#fff', fontSize: '10px',
                  fontWeight: 'bold', borderRadius: '50%', padding: '2px 6px',
                  display: 'inline-block', minWidth: '18px', textAlign: 'center'
                }}>
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
          
          {/* ✅ Dynamic Login/Logout toggle check */}
          {isAuthenticated ? (
            <li>
              <button 
                onClick={handleLogout} 
                className="auth-cta" 
                style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li><Link to="/login" className="auth-cta">Signup / Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToViewManager>
          
          <NavigationHeader />

          {/* Page Routing Controller */}
          <Routes>
            <Route path="/" element={<Storefront />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>

          <footer className="site-info" id="about" style={{ background: '#111', color: '#fbfaf8', padding: '3rem 2rem', marginTop: '4rem' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <div className="info-block" style={{ textAlign: 'center' }}>
                <h4 style={{ color: '#c5a880', marginBottom: '0.5rem' }}>Contact Us</h4>
                <p><a href="mailto:Blackmagicpuffs@gmail.com" style={{ color: '#fff' }}>Blackmagicpuffs@gmail.com</a></p>
              </div>
              <div className="legal-footer" style={{ borderTop: '1px solid #333', width: '100%', textAlign: 'center', paddingTop: '1.5rem', fontSize: '0.85rem', color: '#666' }}>
                <p>&copy; {new Date().getFullYear()} Black Magic Puffs. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ScrollToViewManager>
      </Router>
    </CartProvider>
  );
}

export default App;