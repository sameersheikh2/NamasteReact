import foodzilla_tp from "../assets/foodzilla_tp.svg";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem = useSelector((state) => state.cart);

  return (
    <div className="flex md:justify-between justify-center p-4 items-center shadow-md mb-2">
      <Link to="/">
        <img src={foodzilla_tp} alt="logo" className="w-[240px] h-[70px] " />
      </Link>
      <ul className="md:flex hidden text-[22px]">
        <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 bg-[#c56e33] text-white">
          <Link to="/login">Login</Link>
        </li>
        <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 text-[#c56e33]">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 text-[#c56e33]">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:bg-[#c56e33] duration-200 ease rounded px-2 hover:text-white font-semibold m-3 text-[#c56e33]">
          <Link to="/cart">
            Cart
            <Badge
              badgeContent={cartItem
                .map((q) => q.quantity)
                .reduce((a, b) => a + b, 0)}
              color="warning"
            >
              <ShoppingBagIcon
                style={{ fontSize: "27px", margin: "0 4px 8px 6px" }}
              />
            </Badge>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
