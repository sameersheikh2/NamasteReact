import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render({ container2 });
