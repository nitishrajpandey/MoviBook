import React, { useEffect } from "react";
import LoginSignup from "./pages/login_Signup/LoginSignup";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { fetchImageUrls } from "./store/intialRequiredSlice/initialSlice";
import Footer from "./components/footer/Footer";
import DetailsMoviesTv from "./pages/detailsMovie&Tv/DetailsMoviesTv";
import Search from "./pages/searchPage/Search";

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
        <Route path="/details/:id" element={<DetailsMoviesTv />} />
        <Route path="/search/:keyWord" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
