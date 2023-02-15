import React from "react";

const Shimmer = ({ num }) => {
  return (
    <div className="rounded flex justify-center flex-wrap animate-pulse">
      {Array(num)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="rounded m-[20px] w-[250px] h-[275px] bg-slate-500"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
