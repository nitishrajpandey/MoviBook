import React from "react";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import dayjs from "dayjs";
import CircularRating from "../../../../components/circularProgressbar/CircularRating";

function BannerDetailsContents() {
  const detailsvalue = useSelector(
    (state) => state.detailsMovieTv?.moviesTvDetails
  );

  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const bgPoster = posterUrl + detailsvalue?.poster_path;

  const moviesTvCredits = useSelector(
    (state) => state.detailsMovieTv?.moviesTvCredits
  );

  const director = moviesTvCredits?.crew.filter(
    (item) => item?.job === "Director"
  );

  const writer = moviesTvCredits?.crew.filter(
    (item) =>
      item.job === "Screenplay" ||
      item.job === "Story" ||
      item.job === "Writer" ||
      item.job === "Casting"
  );

  const toHourAndMinutes = (runtime) => {
    const hour = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hour}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <>
      <div className=" -z-50">
        <ContentWrapper>
          <div className="relative py-[80px]   flex break1:flex-row flex-col gap-5">
            <div className=" break1:max-w-[350px] h-full rounded-2xl ">
              <img src={bgPoster} alt="" className="rounded-2xl " />
            </div>

            {/* descrption */}
            <div className="w-[100%]">
              <div className="">
                <h1 className="text-white text-3xl break3:text-4xl md:text-5xl ">
                  {detailsvalue?.title || detailsvalue?.name} (
                  <span className="">
                    {dayjs(
                      detailsvalue?.release_date || detailsvalue?.first_air_date
                    ).format("YYYY")}
                  </span>
                  )
                </h1>
              </div>
              <div className="">
                <h3 className="text-gray-600 font-semibold py-3 text-xl">
                  {detailsvalue?.tagline}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {detailsvalue?.genres.map((item) => (
                  <span
                    key={item.id}
                    className=" text-white bg-[#DA2F68] px-2 py-1 rounded-md"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              <div className="flex gap-10 items-center pt-8">
                <div className=" w-[80px] h-[80px] rounded-full  ">
                  <CircularRating
                    rating={detailsvalue?.vote_average.toFixed(1)}
                  />
                </div>
                <div className="text-white">
                  <h1>watch trailer</h1>
                </div>
              </div>
              <div className="text-white py-3">
                <h2 className="text-3xl py-3">Overview</h2>
                <p>{detailsvalue?.overview}</p>
              </div>
              <div className="py-3 border-b border-gray-800">
                <div className="text-white flex gap-5 justify-evenly">
                  <span className="flex flex-col break2:flex-row break1:flex-col break3:flex-row gap-2">
                    Status :{" "}
                    <span className="text-gray-600 font-semibold">
                      {detailsvalue?.status}
                    </span>
                  </span>

                  {detailsvalue?.release_date && (
                    <span className="flex flex-col break2:flex-row break1:flex-col break3:flex-row gap-2">
                      Release Date :
                      <span className="text-gray-600 font-semibold">
                        {detailsvalue?.release_date}
                      </span>
                    </span>
                  )}

                  {detailsvalue?.runtime && (
                    <span className="flex flex-col break2:flex-row break1:flex-col break3:flex-row gap-2">
                      Runtime :
                      <span className="text-gray-600 font-semibold">
                        {toHourAndMinutes(detailsvalue?.runtime)}
                      </span>
                    </span>
                  )}
                </div>
              </div>

              {moviesTvCredits && (
                <div>
                  <div>
                    {director.length > 0 && (
                      <h1 className="py-3 text-white border-b border-gray-800">
                        Director :{"  "}
                        <span className="text-gray-700 font-semibold">
                          {director[0].original_name || director[0].name}
                        </span>
                      </h1>
                    )}

                    {writer.length > 0 && (
                      <h1 className="flex gap-4 border-b border-gray-800 py-3">
                        <span className="text-white w-fit">Writer</span>
                        <span className="text-gray-700 font-semibold">
                          {writer
                            .filter(
                              (item, index, array) =>
                                array.findIndex((w) => w.id === item.id) ===
                                index
                            )
                            .map((item) => (
                              <span key={item.id}>{item.name},</span>
                            ))}
                        </span>
                      </h1>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default BannerDetailsContents;
