import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "this is heading 1"),
  React.createElement("h2", {}, "this is heading 2"),
  React.createElement("h3", {}, "this is heading 3"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
