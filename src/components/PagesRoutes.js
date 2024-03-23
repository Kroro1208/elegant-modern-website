import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../pages/About';
import Business from '../pages/Business';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const AnimRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/business' element={<Business />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

  );
};

export default AnimRoutes;
