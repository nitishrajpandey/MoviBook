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

      <div
        className="absolute bottom-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 100%)",
        }}
      ></div>
    </div>
  );
}

export default BannerPoster;

// important code

/* <iframe
        className="pointer-events-none w-full aspect-video absolute translate-y-[-13%] overflow-hidden"
        src={`https://www.youtube.com/embed/${value}?autoplay=1&mute=1&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div
        className="absolute bottom-0 w-full h-200px"
        style={{
          background:
            "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #04152d 100%)",
        }}
      ></div> */
