import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const images = [
  'https://picsum.photos/800/600?random=1',
  'https://picsum.photos/800/600?random=2',
  'https://picsum.photos/800/600?random=3',
  'https://picsum.photos/800/600?random=4',
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const dynamicImage = getRandomImage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='about'
      className={`about-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="about-image">
        <img src={dynamicImage} alt="Dynamic" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are Info Tech, dedicated to providing exceptional services and
          creative solutions. With innovative technology and a customer-centric
          approach, we strive to exceed expectations.
        </p>
        <div className="about-buttons">
          <Link to="/services" className="button">Our Services</Link>
          <Link to="/contact" className="button">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
