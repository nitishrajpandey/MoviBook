import React from "react";
import { useDispatch, useSelector } from "react-redux";

function BannerPoster() {
  const movieCollection = useSelector(
    (state) => state.bgBannerPoster?.bgBannerPoster
  );
  const value = Math.floor(Math.random() * movieCollection.length);
  const movie = movieCollection[value]?.backdrop_path;

  const BannerUrl = useSelector((state) => state.initial?.url?.backdrop);

  return (
    <div className="relative   overflow-hidden bg-cover bg-center  h-[95vh]  ">
      {movie && (
        <img
          src={`${BannerUrl}${movie}`}
          className="  object-cover object-center h-full w-full   "
          alt=""
        />
      )}

      <div className="absolute bottom-0 w-full h-full bg-gradient1"></div>
    </div>
  );
}

export default BannerPoster;
