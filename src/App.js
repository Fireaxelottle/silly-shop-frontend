import React , {lazy, Suspense} from 'react';
import './App.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';


import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Shipping = lazy(() => import('./pages/Shipping'));
const Search = lazy(() => import('./pages/Search'));



function App() {
  return (

    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      </Suspense>
    </Router>
     
    
  );
}

export default App;
