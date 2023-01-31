import foodzilla_tp from "../assets/foodzilla_tp.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={foodzilla_tp} alt="logo" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
