import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service'; 
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Remedies from './component/Remedies';
import Login from './component/Login';
import Account from './component/Account';
import Signup from './component/Signup';
import Bmi from './component/Bmi';
import Meditation from './component/Meditation';
import HomeRemedies from './component/HomeRemedies';
import Doctor from './component/Doctor';
import Footer from './component/Footer';
import ThreeDReveal from './component/ThreeDReveal';

function App() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');

    if (!hasSeenAnimation) {
      setShowAnimation(true);
    } else {
      setShowContent(true); // Show Home directly if animation was already seen
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem('hasSeenAnimation', 'true'); 
    setShowAnimation(false);
    setShowContent(true);
  };

  return (
    <BrowserRouter>
      {/* Show Animation Overlay when needed */}
      {showAnimation && <ThreeDReveal onComplete={handleAnimationComplete} />}

      {/* Show Navbar and Home Page only after animation completes */}
      {showContent && (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/remedies' element={<Remedies />} />
            <Route path='/login' element={<Login />} />
            <Route path='/account' element={<Account />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/bmi' element={<Bmi />} />
            <Route path='/meditation' element={<Meditation />} />
            <Route path='/homeremedies' element={<HomeRemedies />} />
            <Route path='/service' element={<Service />} />
            <Route path='/doctor' element={<Doctor />} />
          </Routes>
         <Footer/>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
