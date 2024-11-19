import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out hero section after scrolling down
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='home' className={`hero-section ${isVisible ? 'visible' : ''}`}>
      <div className="hero-content">
        <h1>Welcome to Info Tech</h1>
        <p>Your partner in cutting-edge technology solutions. Let's build something great together.</p>
        <a href="/contact" className="hero-btn">Contact Us</a>
      </div>
    </section>
  );
};

export default HeroSection;
