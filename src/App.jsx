import React, { useEffect } from "react";
import LoginSignup from "./pages/login_Signup/LoginSignup";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import {
  fetchImageUrls,
  fetchMoviesGenreApi,
  fetchTvGenreApi,
} from "./store/intialRequiredSlice/initialSlice";
import Footer from "./components/footer/Footer";
import DetailsMoviesTv from "./pages/detailsMovie&Tv/DetailsMoviesTv";
import Search from "./pages/searchPage/Search";
import ExploreMovies from "./pages/exploreMovies/ExploreMovies";
import ExploreTvShows from "./pages/exploreTvShows/ExploreTvShows";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageUrls("/configuration"));
    dispatch(fetchMoviesGenreApi("/genre/movie/list"));
    dispatch(fetchTvGenreApi("/genre/tv/list"));
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<DetailsMoviesTv />} />
        <Route path="/search/:keyWord" element={<Search />} />
        <Route path="/exploreMovies" element={<ExploreMovies />} />
        <Route path="/exploreTv" element={<ExploreTvShows />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
