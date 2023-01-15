import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import InstagramLogin from "react-instagram-login";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const responseInstagram = (response) => {
  console.log(response);
};
root.render(
  <BrowserRouter>
    <App />
    {/* trebuie sa fac ig-ul sa apara doar in footer  */}
    {/* <InstagramLogin className="ig"
      clientId="5fd2f11482844c5eba963747a5f34556"
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
    /> */}
  </BrowserRouter>
);
