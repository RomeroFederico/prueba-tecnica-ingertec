import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import ImagePopup from './components/ImagePopup/ImagePopup';

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path = '/' element = { <Home /> } />
      <Route exact path = '/popup' element = { <ImagePopup /> } />
      <Route path = "*" element = { <Navigate to = "/" /> } />
    </Routes>
  );
}

export default App;
