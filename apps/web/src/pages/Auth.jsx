import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();

  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup State
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  // ✅ Production Pattern: HTTP POST payload matching your backend login router
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ loginEmail, loginPassword })
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid login credentials');
        return res.json();
      })
      .then((data) => {
        // Save token permanently to client storage layer
        localStorage.setItem('bmp_token', data.token);
        navigate('/'); // Redirect home upon validation success
      })
      .catch((err) => {
        console.error('Authentication Error:', err);
        alert(err.message);
      });
  };

  // ✅ Production Pattern: HTTP POST payload matching your backend signup router
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ signupName, signupEmail, signupPassword })
    })
      .then((res) => {
        if (!res.ok) throw new Error('Registration failed or user already exists');
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('bmp_token', data.token);
        alert('Account successfully created!');
        navigate('/');
      })
      .catch((err) => {
        console.error('Registration Error:', err);
        alert(err.message);
      });
  };

  return (
    <div className="auth-page-container">
      {/* LEFT COLUMN: LOG IN */}
      <div className="auth-column">
        <h2>Log In</h2>
        <p className="auth-subtitle">Sign in to track your boutique orders.</p>
        
        <form onSubmit={handleLoginSubmit} className="auth-form">
          <input 
            type="email" 
            placeholder="Email Address" 
            value={loginEmail} 
            onChange={(e) => setLoginEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={loginPassword} 
            onChange={(e) => setLoginPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
      </div>

      {/* MIDDLE DIVIDER LINE */}
      <div className="auth-divider"></div>

      {/* RIGHT COLUMN: SIGN UP */}
      <div className="auth-column">
        <h2>Sign Up</h2>
        <p className="auth-subtitle">Register to check out faster and save patterns.</p>
        
        <form onSubmit={handleSignupSubmit} className="auth-form">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={signupName} 
            onChange={(e) => setSignupName(e.target.value)}
            required 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={signupEmail} 
            onChange={(e) => setSignupEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            value={signupPassword} 
            onChange={(e) => setSignupPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn-secondary">Create Account</button>
        </form>
      </div>
    </div>
  );
}
export default Auth;
