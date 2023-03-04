import React from "react";

const LogIn = () => {
  return (
    <form className="m-auto bg-white/70 w-[40%] my-24 shadow-xl p-2">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="bg-gray-200 w-[70%]"
          type="text"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="bg-gray-200 w-[70%]"
          type="text"
          name="password"
          required
        />
        <button className="p-1 m-2 bg-slate-500 w-24 text-white">Submit</button>
      </div>
    </form>
  );
};

export default LogIn;
