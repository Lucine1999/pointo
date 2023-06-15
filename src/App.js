import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import { HOME_ROUTE } from './constants/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
