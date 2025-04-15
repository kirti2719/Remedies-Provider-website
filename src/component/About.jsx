import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import aboutimg from '../Image/aboutimage.jpeg';
import world from '../Image/World.jpeg';

const About = () => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'fallback-image-path.webp';
  };

  const teamMembers = [
    { id: 1, role: 'BMI', name: '' },
    { id: 2, role: 'MEDITATION', name: '' },
    { id: 3, role: 'HOME REMEDIE', name: '' }
    
  ];

  const missionStatement = "Welcome to our Remedies project! Our mission is to provide you with the best possible care and support. We are committed to delivering the highest quality of service and support to our patients. Our team is composed of experienced and passionate individuals who are dedicated to providing you with the best possible care.";

  return (
    <section className="about-page">
      <div className="about-container">
        <article className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-mission-statement">
            {missionStatement}
          </p>
        </article>

        <figure className="about-image-wrapper">
          <img 
            src={aboutimg}
            alt="Natural healing and wellness"
            loading="lazy"
            width="600"
            height="400"
            onError={handleImageError}
          />
        </figure>
      </div>

      <div className="team-section">
        <h2 className="team-title"></h2>
        
        <div className="team-content">
          <figure className="team-image-wrapper">
            <img 
              src={world}
              alt="Our global team"
              loading="lazy"
              width="600"
              height="400"
              onError={handleImageError}
            />
          </figure>

          <div className="team-members">
            {teamMembers.map(({ id, role, name }) => (
              <div key={id} className="team-member">
                <h3>{role}</h3>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-section">
          <h2 className="vision-title">Our Mission</h2>
          <p >"Our mission is to provide reliable, natural, and effective home remedies for various health concerns. We aim to empower individuals with easy-to-follow, research-backed solutions using ingredients commonly found at home. By offering accessible information and curated video guides, we strive to promote holistic wellness and self-care in a simple, natural way."
          </p>
        </div>
      </div>

      <div className="mission-section">
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-content">
          "Our vision is to create a world where everyone has access to natural and effective remedies for their well-being. We envision a future where home remedies become a universal tool for self-care, promoting a healthier and more vibrant life for all."
        </p>
      </div>
      <div className="mission-section">
        <h2 className="vision-title">Our Goal</h2>
        <p className="vision-content">
          "Our goal is to empower individuals with knowledge and resources to make informed decisions about their health and well-being. We strive to provide a platform where people can learn, share, and support each other in their journey towards better health and wellness."
        </p>
      </div>
      <div className="mission-section">
        <h2 className="vision-title">Our Commitment</h2>
        <p className="vision-content">
          "We are committed to delivering the highest quality of service and support to our patients. Our team is composed of experienced and passionate individuals who are dedicated to providing you with the best possible care."
        </p>
      </div>
    </section>
  );
};

About.propTypes = {
  // Add PropTypes if needed
};

export default About;