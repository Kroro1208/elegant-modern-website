import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Business from '../pages/Business';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import { AnimatePresence } from 'framer-motion'

const PagesRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/business' element={<Business />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>

  );
};

export default PagesRoutes;
