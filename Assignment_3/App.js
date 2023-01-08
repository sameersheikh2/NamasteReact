import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const container = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "this is heading 1"),
  React.createElement("h2", {}, "this is heading 2"),
  React.createElement("h3", {}, "this is heading 3"),
]);

const container2 = (
  <div className="title2">
    <h1>This is heading 1 </h1>
    <h2> This is heading 2</h2>
    <h3>This is heading 3</h3>
  </div>
);

const Title = () => {
  return <h1>This is a title inside another component</h1>;
};

const Container2 = () => {
  return (
    <div className="title2">
      <Title />
      <h1>This is heading 1 </h1>
      <h2> This is heading 2</h2>
      <h3>This is heading 3</h3>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>LOGO</h1>
      <div>
        <input type="text" name="search" id="" />
        <button>Search</button>
      </div>
      <img
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
        alt="user-icon"
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
