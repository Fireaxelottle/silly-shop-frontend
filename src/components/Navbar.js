import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animated , useSpring } from "react-spring";



const Navbar = () => {

  let user = {
    id: "dada",
    role: "admin",
  };

  const spring = useSpring({
    from: { y: -10 },
    to: { y: 1 },
    config: { duration: 200 },
  });

  

  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = () => {
    user._id = "";
    user.role = "";
    setIsOpen(false);
  };

  


  return (
    <animated.div
      className="navbar  w-full  p-2"
      
    >
      <h2 >Silly Shop</h2>
      <ul className="flex  items-center  gap-5">
     
        <li>
          <Link to="/"><i className="fa-solid fa-house"></i></Link>
        </li>   
        <li>
          <Link to="/cart"><i className="fa-solid fa-basket-shopping"></i></Link>
        </li>        
        <li>
          <Link to="/search"><i className="fa-solid fa-magnifying-glass text-lg"></i></Link>
        </li>
        <li className="profile ">
        {user.id ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-regular fa-circle-user"></i>
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link className="link" to="/admin/dashboard" onClick={() => setIsOpen(false)}>
                  Admin
                </Link>
              )}

              <Link className="link" to="/orders" onClick={() => setIsOpen(false)}>
                Orders
              </Link>
              <button onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to="/login" onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
      )}
        </li>  
        
        
      </ul>
    </animated.div>
  );
};

export default Navbar;
