import React from 'react';
import './App.css';

import Navbar from './components/Navbar';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import Search from './pages/Search';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
     
    
  );
}

export default App;
