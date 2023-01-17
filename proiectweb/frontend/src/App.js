import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProdus from "./components/AddProdus";
import ProduseRezervate from "./components/ProduseRezervate";
import Profil from "./components/Profil";
import SignInSide from "./components/Signin";
import SignUp from "./components/Signup";
import ToateProdusele from "./components/ToateProdusele";

export default function App() {
  React.useEffect(() => {
    if (
      window.location.pathname !== "/signin" &&
      window.location.pathname !== "/signup" &&
      !localStorage.getItem("token")
    )
      window.location.replace("/signin");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/signin" element={<SignInSide />}></Route>
        <Route exact path="/profil" element={<Profil />}></Route>
        <Route exact path="/produs/add" element={<AddProdus />}></Route>
        <Route exact path="/" element={<ToateProdusele />}></Route>
        <Route
          exact
          path="/produs/rezervate"
          element={<ProduseRezervate />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
