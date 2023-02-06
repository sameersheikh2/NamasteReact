import foodzilla_tp from "../assets/foodzilla_tp.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between  shadow-md mb-10">
      <Link to="/">
        <img src={foodzilla_tp} alt="logo" className="w-[240px] h-[70px] " />
      </Link>
      <ul className="flex text-[22px]">
        <Link to="/">
          <li className="font-semibold m-5 text-[#c56e33]">Home</li>
        </Link>
        <Link to="/about">
          <li className="font-semibold m-5 text-[#c56e33]">About</li>
        </Link>
        <Link to="/contact">
          <li className="font-semibold m-5 text-[#c56e33]">Contact Us</li>
        </Link>
        <li className="font-semibold m-5 text-[#c56e33]">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
