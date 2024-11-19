import React, { useState, useEffect, useRef } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);  // Tracks visibility
  const [isScrollingDown, setIsScrollingDown] = useState(true); // Tracks scroll direction
  const sectionRef = useRef(null);  // Ref to the section element

  const lastScrollY = useRef(0);  // To keep track of previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Current scroll position

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }

      // When section comes into view (in viewport)
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='contact'
      className={`contact-section ${isVisible ? 'visible' : ''} ${isScrollingDown ? 'scroll-down' : 'scroll-up'}`}
      ref={sectionRef}
    >
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Reach out for more information.</p>
      <div className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </div>
      <div className="map-container">
        <iframe
          title="Al Khobar Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3459603626487!2d50.19800811543997!3d25.354826633402444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef7afafadbfd%3A0xf2c8b6b378d7e449!2s15%20St%2C%20Al%20Khobar!5e0!3m2!1sen!2ssa!4v1600000000000!5m2!1sen!2ssa"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
