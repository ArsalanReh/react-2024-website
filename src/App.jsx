import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import Menu from './components/Menu';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/ServiceSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter> {/* Wrap your app with BrowserRouter */}
    <div>
      <Menu />
      <HeroSection />
      <AboutSection />
      <Services />
      <Contact />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
