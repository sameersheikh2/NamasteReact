import React from "react";
import { Link } from "react-router-dom";
import error1 from "../assets/error12.png";
import Header from "./Header";

const Error = () => {
  return (
      <div className="m-auto relative">
        <img
          src={error1}
          alt="error"
          className="m-auto object-fill scale-100 overflow-hidden w-[70%]"
        />
        <Link to="/">
        <span className="absolute bottom-[65px] font-semibold text-white bg-[#c56e33] right-[46%] rounded p-1 ">Back to Home</span>
        </Link>
      </div>
  );
};

export default Error;
