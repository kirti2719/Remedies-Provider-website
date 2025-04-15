import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simple validation
    if (formData.email && formData.password) {
      // Simulate loading
      setTimeout(() => {
        setIsLoading(false);
        // Store login state and username (email)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', formData.email); // Store email as username
        // Navigate to home page
        navigate('/home');
      }, 1500);
    } else {
      setError('Please fill in all fields');
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-side">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Please login to your account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-container">
                <i className="fas fa-envelope"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            
            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>
          
          <div className="signup-link">
            Don't have an account? 
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>

      <div className="animation-side">
        <div className="animation-content">
          <h1>Welcome to Health & Remedies</h1>
          <p>Your journey to wellness begins here</p>
        </div>
        <div className="floating-elements">
          {[...Array(4)].map((_, index) => (
            <div 
              key={index} 
              className={`floating-element element-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
