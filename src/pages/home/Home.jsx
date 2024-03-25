import React from "react";
import HeroBanner from "./components/heroBanner/HeroBanner";
import TrendingMovies from "./components/trendingMovies/TrendingMovies";

function Home() {
  return (
    <div className="">
      <div className="w-full">
        <HeroBanner />
      </div>
      <div className="mt-24">
        <TrendingMovies />
      </div>
    </div>
  );
}

export default Home;
