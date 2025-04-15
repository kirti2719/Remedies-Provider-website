import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import DocBanner from '../Image/DocBanner.png';
import running from '../Image/running.jpg'
import './Service.css';

const ServicePage = () => {
  return (
    <div className="servicepage">
      <div className="servicecontain">
        <div className="docimg">
          <motion.h1 
            className="Sevicehead" 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: -50 }} 
            transition={{ duration: 1.2 }}
          >
            CURENET
          </motion.h1>
          <img src={DocBanner} alt="Doctor Banner" className="exact-image" />
        </div>
        <div className="pagecontain">
          <p>"Explore natural remedies, BMI calculator, home remedy tips, meditation music—all in one place!"</p>
        </div>
        <div className="servicebutton">
          <NavLink to='/Home'><button>Book Consultation →</button></NavLink>
        </div>
      </div>
      <div className="servicegrid">
        {[
          { title: 'Search Video Remedies', color: 'yellow', icon: '📱' },
          { title: 'Doctor Consultation', color: 'green', icon: '👩‍⚕️' },
          { title: 'Home Remedies', color: 'pink', icon: '💊' },
          { title: ' BMI Calculate', color: 'blue', icon: '🧪' }
        ].map((service, index) => (
          <motion.div 
            key={index} 
            className={`service-card ${service.color}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
            <div className="service-icon">{service.icon}</div>
        
          </motion.div>
        ))}
      </div>
      <div className="run">
  <div className="runing">
    <div className="runim">
      <img src={running} alt="Health Solutions Background" />
    </div>
    <div className="runpara">
      <p>Health Solution</p>
      <h3>Your Health Our Priority</h3>
    </div>
  </div>
</div>

    </div>
  );
};

export default ServicePage;