import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../pages/home/context";
import Img from "../LazyImageLoder/Img";
import dayjs from "dayjs";
import { noPoster } from "../../assets/index";
import CircularRating from "../circularProgressbar/CircularRating";

function CarouselMoviesCard({ data, posterUrl }) {
  return (
    <Carousel responsive={responsive}>
      {data.map((item) => (
        <div key={item.id} className="xs:pr-5  ">
          <div className="  aspect-[1/1.5]">
            {item.poster_path ? (
              <Img
                src={posterUrl + item.poster_path}
                className="rounded-xl aspect-[1/1.5] "
              />
            ) : (
              <img src={noPoster} alt="No Poster" className="rounded-xl" />
            )}
          </div>
          <div className=" relative -top-10 left-2">
            <CircularRating rating={item.vote_average.toFixed(1)} />
          </div>

          <div className="flex flex-col w-[90%] mt-5 gap-1 ">
            <span className="text-white  text-xl text-ellipsis text-nowrap overflow-hidden ">
              {item.title || item.name}
            </span>
            <span className="text-gray-600 text-xl font-medium">
              {dayjs(item.release_date || item.first_air_date).format(
                "MMM D, YYYY"
              )}
            </span>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselMoviesCard;
