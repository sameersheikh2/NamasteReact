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

const RestaurantList = (props) => {
  return (
    <div className="restaurant_list">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/osw1nuhqh5w7st158hq2"
        width="200px"
        alt="img"
      />
      <h2>Subway</h2>
      <h3>Salads, Snacks</h3>
      <h4>26 mins</h4>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="card">
      <RestaurantList />
      <RestaurantList />
      <RestaurantList />
      <RestaurantList />
      <RestaurantList />
    </div>
  );
};
const Body = () => {
  return <RestaurantCard />;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
