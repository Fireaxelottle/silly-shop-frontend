import React, { lazy, Suspense } from "react";
import "./App.css";


import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Search = lazy(() => import("./pages/Search"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Order = lazy(() => import("./pages/Order"));
const DashBoard = lazy(() => import("./pages/admin/DashBoard"));



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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<Order />} />
            <Route path="/admin/dashboard" element={<DashBoard />} />
          </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
