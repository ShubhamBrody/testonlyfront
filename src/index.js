import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/signintoken";

var bg = document.getElementById("parallaxBG");
var bgcont = document.getElementById("parallaxContainer");

window.addEventListener("scroll", () => {
  var val = window.scrollY;
  if (bg) bg.style.top = val * -0.5 + "px";
  if (bgcont) bgcont.style.top = val + "px";
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
