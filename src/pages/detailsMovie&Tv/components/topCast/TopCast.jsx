import React from "react";
import { useSelector } from "react-redux";
import Img from "../../../../components/LazyImageLoder/Img";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../home/context";
import { avatar } from "../../../../assets";
import { responsiveAvtar } from "./context";

function TopCast() {
  const moviesTvCredits = useSelector(
    (state) => state.detailsMovieTv?.moviesTvCredits
  );

  const profile = useSelector((state) => state.initial?.url?.profile);

  const data = moviesTvCredits
    ? [...moviesTvCredits?.cast, ...moviesTvCredits?.crew]
    : [];

  if (!moviesTvCredits) {
    return <div> </div>;
  }

  return (
    <div>
      <div className=" pb-10">
        <h1 className="text-white font-semibold text-3xl">Top Cast</h1>
      </div>

      <Carousel responsive={responsiveAvtar}>
        {data
          .filter(
            (item, index, array) =>
              array.findIndex((w) => w.id === item.id) === index
          )
          .map((item) => (
            <div key={item.id}>
              {" "}
              {item?.profile_path ? (
                <div className="flex flex-col gap-2 items-center">
                  <Img
                    src={profile + item?.profile_path}
                    className="w-[150px] h-[150px]  object-cover object-center rounded-full"
                  />
                  <span className="text-white">
                    {item?.name || item?.original_name}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2 items-center">
                  <Img
                    src={avatar}
                    className="w-[150px] h-[150px]  object-cover object-center rounded-full"
                  />
                  <span className="text-white">
                    {item?.name || item?.original_name}
                  </span>
                </div>
              )}
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default TopCast;
