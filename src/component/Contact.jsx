import React, { useState, useEffect } from 'react';
import './Contact.css';
import image from '../Image/image.jpeg';

function Contact() {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const switchTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError('Your name should be at least 3 characters long.');
      return;
    }
    if (!emailIsValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (message.length < 15) {
      setError('Please write a longer message.');
      return;
    }

    setError('');
    setSuccessMsg('Thank you! I will get back to you as soon as possible.');

    setTimeout(() => {
      setSuccessMsg('');
      setName('');
      setEmail('');
      setMessage('');
    }, 6000);
  };

  return (
    <div className={`contact-container ${theme}`}>
      <div className="left-col">
        <img className="logo" src={image} alt="Logo" />
        <div className="contact-info">
          <h1>Get in touch</h1>
          <p>We're here to support your journey to better health and wellness. Whether you have questions about our products, need advice on natural remedies, or want to share your feedback, we're just a message away.</p>
          <h2>Address:</h2>
          <p>Ratlam, PR 457001</p>
          <h2>Phone:</h2>
          <p>(+91) 626160-8048</p>
          <h2>Business Hours:</h2>
          <p>Monday to Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 8:00 AM - 5:00 PM</p>
          <p>Sunday: 10:00 AM - 6:00 PM</p>
        </div>
  
        <div className="visme-container">
          <div className="visme-form">
            <div
              className="visme_d"
              data-title="Simple Blank Feedback Form"
              data-url="kk34pq0x-simple-blank-feedback-form"
              data-domain="forms"
              data-full-page="false"
              data-min-height="500px"
              data-form-id="115792"
            />
          </div>
        </div>
      </div>

      <div className="right-col">
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={switchTheme} />
            <div className="slider round"></div>
          </label>
          <div className="description">Dark Mode</div>
        </div>

        <h1>Contact us</h1>
<p>We are dedicated to helping you on your journey to better health and wellness. Whether you have a question about our natural remedies, need personalized advice, or wish to share your experiences, we’re here to support you.</p>
        <form id="contact-form" onSubmit={validate}>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Your Message" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          <button type="submit" id="submit" name="submit">Send</button>
        </form>

        {error && <div className="error-msg">{error}</div>}
        {successMsg && <div className="success-msg">{successMsg}</div>}

        

        <div className="info-map-container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1739859092311!5m2!1sen!2sin"
              width="1000"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
