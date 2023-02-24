import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="flex justify-center m-auto gap-4 mt-14 mb-28">
      <div>cart</div>
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
