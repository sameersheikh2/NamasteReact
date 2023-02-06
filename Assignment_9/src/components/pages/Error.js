import React from "react";
import error from "../../assets/error.gif";
import Header from "../Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="err">
        <img src={error} alt="error" />
      </div>
    </>
  );
};

export default Error;
