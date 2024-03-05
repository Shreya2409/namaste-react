import React from "react";
import ReactDOM from "react-dom/client";

// react element is an object
// React.createElement  => react element => JS Object => when we render to DOM => becomes html element HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");
console.log(heading);
//jsx -HTML-like or XML-Like Syntax
// jsx->babel transpiles to react element => react.createlement => JS object => htmlement
// transpiled before it reaches the js engine in the browser - parcel - babel pkg
//babel converts jsx to react code which browser can understand
const jsxheading = (
  <h1 id="heading" className="head" tabIndex="1">
    Hello from jsx 🚀
  </h1>
);
console.log(jsxheading);

//React Component
// Class Component - Old
// Functional Component - New

const HeadingComponent = () => {
  return (
    <div>
      <h1 id="heading">Namaste react functional component!!</h1>
      <Title />
    </div>
  );
};

const Title = () => (
  <div>
    <h1>Namaste react from title</h1>
  </div>
);

// other syntax
// const HeadingComponent2 = () => (
//   <div id="container">
//     <h1 id="heading">Namaste react functional component!!</h1>
//   </div>
// );

//if single return then we can write it in single line
// const fn = () => true;

const root = ReactDOM.createRoot(document.getElementById("root"));

//render functional component
root.render(<HeadingComponent />);
// root.render(heading); render reactelement
