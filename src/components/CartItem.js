import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { productId, name, price, quantity, image } = item;
  return (
    <div className="cart-item  text-xl w-[80%]">
      <div className="item-info flex gap-8 items-center">
        <img src={image} alt={name} className="w-[180px]" />
        <article>
          <Link to={`/product/${productId}`} className="link">{name}</Link>
          <p>${price}</p>
        </article>
      </div>

      <div className="item-handlers flex gap-4">
        <button className="hover:bg-black hover:text-white w-8 h-8 rounded-md text-xl">-</button>
        <p>{quantity}</p>
        <button className="hover:bg-black hover:text-white w-8 h-8 rounded-md text-xl">+</button>
      </div>
      <button className=" hover:text-red-500  text-xl"><i class="fa-solid fa-trash"></i></button>
    </div>
  );
};

export default CartItem;
