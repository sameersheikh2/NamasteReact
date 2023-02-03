import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-list">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
