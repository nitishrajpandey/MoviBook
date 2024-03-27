import React from "react";
import HeroBanner from "./components/heroBanner/HeroBanner";
import TrendingMovies from "./components/trendingMovies/TrendingMovies";
import PopularSection from "./components/popular/PopularSection";
import TopRated from "./components/topRated/TopRated";
import Upcoming from "./components/upcoming/Upcoming";

function Home() {
  return (
    <div className="">
      <div className="w-full">
        <HeroBanner />
      </div>
      <div className="mt-20">
        <TrendingMovies />
      </div>
      <div className="mt-20">
        <PopularSection />
      </div>
      <div className="mt-20">
        <TopRated />
      </div>
      <div className="mt-20">
        <Upcoming />
      </div>
    </div>
  );
}

export default Home;
