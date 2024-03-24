import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PagesRoutes from './components/PagesRoutes';
import Header from './components/Header';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PagesRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
