import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/pages/Body";
import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
