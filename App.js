import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from react"
// );

// console.log(heading); // gives object

/*
 *
 *<div id="parent">
 *<div id="child1">
 *   <h1></h1>
 *   <h1></h1>
 *</div>
 *<div id="child2">
 *   <h1></h1>
 *   <h1></h1>
 *</div>
 *</div>
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "This is namaste react 🚀 "),
    React.createElement("h2", { id: "heading2" }, "hellow "), // if want to give child elements at same level then
    //give like an array of children
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "hellow1 "),
    React.createElement("h2", { id: "heading2" }, "hellow 2"), // if want to give child elements at same level then
    //give like an array of children
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent); // parent is an object which is the react element
