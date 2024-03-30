import React from "react";
import Carousel from "react-multi-carousel";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

import { responsivevideo } from "./context";

function Video() {
  const moviesTvVideos = useSelector(
    (state) => state.detailsMovieTv?.moviesTvVideos
  );

  if (!moviesTvVideos) {
    return <div></div>;
  }
  return (
    <div className=" py-20">
      <div className="pb-10">
        <h1 className="text-white text-3xl">Official Videos</h1>
      </div>

      <Carousel responsive={responsivevideo} className="">
        {moviesTvVideos?.results.map((item) => (
          <div className="w-full ss:w-[300px]">
            <ReactPlayer
              key={item?.key}
              url={`https://www.youtube.com/watch?v=${item?.key}`}
              muted={true}
              light={true}
              width="100%"
              height="200px"
            />
            <h1 className="text-white py-2 ">{item?.name}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Video;
