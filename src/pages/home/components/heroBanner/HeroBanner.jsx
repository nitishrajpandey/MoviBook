import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBgPosterApi } from "../../../../store/heroBannerPosterSlice";
import BannerPoster from "./BannerPoster";
import BannerText from "./BannerText";

function HeroBanner() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBgPosterApi("/movie/popular"));
  }, []);

  return (
    <div className="relative ">
      <div className="">
        <BannerPoster />
        <div className="absolute top-0  h-full flex justify-center items-center w-full ">
          <BannerText />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
