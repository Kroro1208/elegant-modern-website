import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
