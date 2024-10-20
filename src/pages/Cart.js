import React , {useState} from "react";
import { Link } from "react-router-dom";

import { useSelector , useDispatch } from "react-redux";



import CartItem from "../components/CartItem";
import { useSpring , animated } from "react-spring";


const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);

  const spring = useSpring({
    from: { opacity: 0, y: -10 },
    to: {opacity: 1, y: 0 },
    config: { duration: 1000 },
 })  ; 
    
  const dispatch = useDispatch();  

  const subTotal = 4000;
  const tax = Math.round(subTotal * 0.18);
  const shippingCharges = 760;
  const discount = 250;
  const total = subTotal + tax + shippingCharges - discount;

  const [couponCode, setCouponCode] = useState ("");
  const [isValidCouponCode, setisValidCouponCode] = useState(false);

  return (
    <animated.div className="cart py-20 px-24 text-black" style={{...spring}}>

      <main className="flex flex-col gap-10 w-[80%]">
        {items.length > 0 ? (
          items.map((item) => <CartItem item={item} />)
        ) : (
          <h1 className="text-3xl ">No Items Added</h1>
        )}
      </main>

      <aside className="flex flex-col justify-around gap-8 text-xl mt-10">
        <p>Subtotal: ${subTotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount <em> - ${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="rounded-md w-[80%] text-base p-4 "
        />

        {couponCode !== "" &&
          (isValidCouponCode ? (
            <span className="text-green-500 text-base">
              ${discount} off using the coupon: <code>{couponCode}</code>{" "}
            </span>
          ) : (
            <span className="text-red-500 text-base">
              Invalid coupon code <i className="fa-regular fa-circle-xmark"></i>
            </span>
          ))}

        {items.length > 0 && <Link to="/shipping" className="link w-[80%]">Checkout</Link>}
      </aside>
    </animated.div>
  );
};

export default Cart;
