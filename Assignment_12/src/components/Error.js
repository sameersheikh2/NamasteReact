import React from "react";
import error1 from "../assets/error12.png";
import Header from "./Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="m-auto">
        <img
          src={error1}
          alt="error"
          className="m-auto object-fill scale-100 overflow-hidden w-[70%]"
        />
      </div>
    </>
  );
};

export default Error;
