import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import Video2221 from '../Video/2221.mp4';
import Doctor from '../Video/Doctor.mp4';
import meditation from '../Video/meditation.mp4';
import HomeVideo from '../Video/Homevideo.mp4';
import alovera from '../Image/alova.jpg';
import Natural from '../Image/Natural.jpg';
import honey from '../Image/honey.jpg';
import herbal from '../Image/Herbal-remedies-.jpg';
import Neem from '../Image/Neem.jpeg';
import BMI from '../SVGFiles/BMI.svg'
import Doc from '../SVGFiles/Docadvice.svg'
import Music from '../SVGFiles/Musicmed.svg'
import VideoRem from '../SVGFiles/VideoRem.svg'
import Homereme from '../SVGFiles/Homereme.svg' 

const images = [
  { src: alovera, alt: "Aloe Vera" },
  { src: Natural, alt: "Natural Ingredients" },
  { src: honey, alt: "Honey" },
  { src: herbal, alt: "Herbal Mix" },
  { src: Neem, alt: "Neem Leaves" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="remedies-page">
        <video autoPlay loop muted>
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="remedies-container">
          <h1 className="head">Remedies</h1>
          <p className="para">
            Explore a range of remedies to enhance your well-being and overall health.
          </p>
          <NavLink to="/Remedies">Explore Remedies</NavLink>
        </div>
      </div>
      <div className="short">

        <div className="short1">
          <h4>Calculate Body Mass Index</h4>
          
          <img src={BMI} alt="BMI" />
      
        </div>
        <div className="short2">
          <h4>Consult with a Doctor</h4>
          <img src={Doc} alt="Doc" />
        
        </div>
        <div className="short3">
          <h4>Listen to Music</h4>
          <img src={Music} alt="Music" />
  
        </div>
        <div className="short4">
          <h4>Watch Video Remedies</h4>
          <img src={VideoRem} alt="VideoRem" />
        
        </div>
        <div className="short5">
          <h4>Home Remedies</h4>
          <img src={Homereme} alt="Homereme" />
        
        </div>
      </div>



      <div className="bmipage">
        <div className="heading1">
          <header>
            <h1 className='Head1'>Body Mass Index (BMI) Calculator</h1>
            <p className='para1'>Calculate your BMI and understand its implications on your health.</p>
            <NavLink to='/Bmi'>Calculate BMI</NavLink>
          </header>
        </div>
        <div className="vedio">
          <video autoPlay loop muted>
            <source src={Video2221} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="specialist">
        <div className="spec-video">
          <video autoPlay loop muted>
            <source src={Doctor} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="doctor-info">
          <h1 className="Head2">Specialists in Remedies</h1>
          <p className="para2">
            Our team of experienced doctors and nutritionists are here to provide personalized and effective remedies tailored to your unique health needs.
          </p>
          <NavLink to="/Doctor">Meet Our Doctors</NavLink>
        </div>
      </div>

      <div className="meditation">
        <div className="meditation-info">
          <h1 className="Head3">Meditation</h1>
          <p className="para3">
            Relaxation and mindfulness techniques to enhance your well-being and overall health.
          </p>
          <NavLink to="/Meditation">Explore Meditation</NavLink>
        </div>
        <div className="meditation-video">
          <video autoPlay loop muted>
            <source src={meditation} type="video/mp4" />
          </video>
        </div>
      </div>

 
      <div className="home-incredient">
        <div className="slider-container">
          <button className="prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <div className="slide">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <p>{images[currentIndex].alt}</p>
          </div>
          <button className="next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
        <div className="home-incredient-info">
          <h1 className="Head4">Home Remedies</h1>
          <p className="para4">
            Discover a range of home remedies to enhance your well-being.
          </p>
          <NavLink to="/HomeRemedies">Explore Home Remedies</NavLink>
        </div>
      </div>
    </div>
    
  );
}