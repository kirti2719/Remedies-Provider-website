import React, { useState, useEffect } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const words = ["Natural", "Holistic", "Healthy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container1">
      <header className="header">
        <h1 className="title centered">
          Let's start<br />
          something<br />
          <span className="highlight flip-text">{words[index]}</span><br />
          Together!
        </h1>
      </header>

      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/service" className="nav-link">Services</NavLink>
      </nav>
      <footer className="footer">
  <div className="social-media">
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-linkedin-in"></i></a>
  </div>
  <p>© 2025 Keeper. All rights reserved. <a href="#privacy">Privacy Policy</a></p>
</footer>
    </div>
  );
}

export default App;
