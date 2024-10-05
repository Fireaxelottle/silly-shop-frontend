import React , {useState} from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = [
    {
      productId: "1",
      name: "Puma Shoes",
      price: 4000,
      quantity: 2,
      image: "https://m.media-amazon.com/images/I/71D8bDU-IVL._AC_SY695_.jpg",
    },
    {
      productId: "2",
      name: "Puma Shoes",
      price: 4000,
      quantity: 2,
      image: "https://m.media-amazon.com/images/I/71D8bDU-IVL._AC_SY695_.jpg",
    },
    {
      productId: "3",
      name: "Puma Shoes",
      price: 4000,
      quantity: 2,
      image: "https://m.media-amazon.com/images/I/71D8bDU-IVL._AC_SY695_.jpg",
    },
  ];

  const subTotal = 4000;
  const tax = Math.round(subTotal * 0.18);
  const shippingCharges = 760;
  const discount = 250;
  const total = subTotal + tax + shippingCharges - discount;

  const [couponCode, setCouponCode] = useState ("");
  const [isValidCouponCode, setisValidCouponCode] = useState(false);

  return (
    <div className="cart py-20 px-24 text-black">

      <main className="flex flex-col gap-10 w-[80%]">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} />)
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
              Invalid coupon code <i class="fa-regular fa-circle-xmark"></i>
            </span>
          ))}

        {cart.length > 0 && <Link to="/shipping" className="link w-[80%]">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
