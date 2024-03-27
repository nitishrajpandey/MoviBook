import React, { useEffect } from "react";
import LoginSignup from "./pages/login_Signup/LoginSignup";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { fetchImageUrls } from "./store/intialRequiredSlice/initialSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageUrls("/configuration"));
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
