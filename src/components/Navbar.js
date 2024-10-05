import React from "react";
import { Link } from "react-router-dom";
import  ProPic  from "../assects/body-part.png";


const Navbar = () => {
  return (
    <div
      className="navbar  w-full bg-slate-200 p-5 sticky top-0">
      <h1 className="text-3xl hover:cursor-pointer">Silly Shop</h1>
      <ul className="flex text-xl items-center  gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart"><i class="fa-solid fa-cart-flatbed text-lg"></i></Link>
        </li>
        <li>
          <Link to="/search"><i class="fa-solid fa-magnifying-glass text-lg"></i></Link>
        </li>
        <li className="border border-black p-1 rounded-full profile ">
          <Link to="/"><img src={ProPic} alt="" className="w-6 h-6 rounded-full " /></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
