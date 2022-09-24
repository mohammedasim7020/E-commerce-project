import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AOS from "aos"
import "aos/dist/aos.css" 
import store from "./store";
import { Provider } from "react-redux";
AOS.init();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
