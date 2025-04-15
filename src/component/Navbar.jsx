// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import image from '../Image/image.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get username from localStorage when component mounts
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    // Navigate to login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <NavLink to="/home" className="brand">
            <img src={image} alt="Logo" />
          </NavLink>
        </div>

        <div className="nav-right">
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              {username ? (
                <>
                  <li className="user-profile">
                    <div className="user-circle">
                      {username.charAt(0).toUpperCase()}
                    </div>
                    <div className="user-dropdown">
                      <NavLink to="/Account">Profile</NavLink>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
