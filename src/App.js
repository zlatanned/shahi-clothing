import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/hats' element={<HatsPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
