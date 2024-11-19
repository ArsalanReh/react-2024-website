import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Logo & Text */}
        <div className="footer-column">
          <h2 className="logo">Intech</h2>
          <p>Your trusted partner for technology solutions and innovative services.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#web-development">Web Development</a></li>
            <li><a href="#app-development">App Development</a></li>
            <li><a href="#seo-optimization">SEO Optimization</a></li>
            <li><a href="#digital-marketing">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <a href="#facebook" className="icon facebook">F</a>
            <a href="#instagram" className="icon instagram">I</a>
            <a href="#linkedin" className="icon linkedin">L</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
