import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
    </>
  );
}

export default App;
