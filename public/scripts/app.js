"use strict";

console.log("app.js is running");

//JSX

var template = React.createElement(
  "div",
  null,
  "This is JSX"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
