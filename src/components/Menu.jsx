import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./Menu.css"

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <div className="logo">
          <Link to="/" className="logo-link">Info Tech</Link> {/* Use Link for navigation */}
        </div>
        <div className={`menu-links ${isMenuActive ? 'active' : ''}`}>
          <div className="menu-link-box">
            <Link to="/" className="menu-link">Home</Link> {/* Use Link for navigation */}
          </div>
          <div className="menu-link-box">
            <Link to="/about" className="menu-link">About</Link> {/* Use Link for navigation */}
          </div>
          <div className="menu-link-box">
            <Link to="/service" className="menu-link">Services</Link> {/* Use Link for navigation */}
          </div>
          <div className="menu-link-box">
            <Link to="/contact" className="menu-link">Contact</Link> {/* Use Link for navigation */}
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuActive ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuActive ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuActive ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

