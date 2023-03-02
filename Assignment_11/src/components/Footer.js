import React, { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="py-8 flex justify-center items-center tracking-widest text-white font-bold bg-[#c56e33]">
      <h2>Made with 🧡</h2>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Footer;
