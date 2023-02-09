import foodzilla_tp from "../assets/foodzilla_tp.svg";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  // const cartItem = useSelector((state) => state.cart.items);

  return (
    <div className="flex lg:justify-between justify-center p-5 items-center shadow-md mb-10">
      <Link to="/">
        <img src={foodzilla_tp} alt="logo" className="w-[240px] h-[70px] " />
      </Link>
      <ul className="flex text-[22px]">
        <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 bg-[#c56e33] text-white">
          Login
        </li>
        <Link to="/about">
          <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 text-[#c56e33]">
            About
          </li>
        </Link>
        <Link to="/contact">
          <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 text-[#c56e33]">
            Contact Us
          </li>
        </Link>
        <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 text-[#c56e33]">
          Cart
          <ShoppingBagIcon
            style={{ fontSize: "27px", margin: "0 4px 8px 6px" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Header;
