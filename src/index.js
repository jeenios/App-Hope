import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./component/HelloComponent";
import StateFullComponent from "./container/StatefullComponent";
import YoutubeComponent from "./component/YoutubeComponent/YoutubeComponent";
import Home from "./container/Home/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
