import React from "react";
import ReactDOM from "react-dom/client";
import foodzilla_tp from "./foodzilla_tp.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={foodzilla_tp} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
