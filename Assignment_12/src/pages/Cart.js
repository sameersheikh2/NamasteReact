import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="flex justify-center m-auto gap-4 mt-14 mb-96">
      <div className="flex flex-col items-center">
        <span>{cart.length === 0 ? "Your cart is empty..!!" : ""}</span>
        <span className="bg-[#c56e33]/90  p-1 m-1 text-white rounded">
          <Link to="/">{cart.length === 0 && "Add some food +"}</Link>
        </span>
      </div>
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between w-72 mb-2">
              <div className="flex flex-col">
                <span>{item.name}</span>
                <span>{item.price / 100}Rs.</span>
              </div>
              <div>{item.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
