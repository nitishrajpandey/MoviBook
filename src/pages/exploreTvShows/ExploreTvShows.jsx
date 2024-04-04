import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExplorTveApi } from "../../store/explorePageSlice/explorePageSlice";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import dayjs from "dayjs";
import { noPoster } from "../../assets";
import CircularRating from "../../components/circularProgressbar/CircularRating";
import Img from "../../components/LazyImageLoder/Img";

import {
  addId,
  mediaType,
} from "../../store/detailsMovieTvSlice/detailsMovieTvSlice";
import { useNavigate } from "react-router-dom";
import ExploreHeading from "./ExploreHeading";

function ExploreTvShows() {
  const dispatch = useDispatch();
  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const page = useSelector((state) => state.explore?.tvPageNo);
  const totalPage = useSelector((state) => state.explore?.tvTotalPageNo);
  const loding = useSelector((state) => state.explore?.tvLoding);
  const navigate = useNavigate();

  const sortBy = "popularity.desc";
  const geners = "";

  useEffect(() => {
    dispatch(fetchExplorTveApi("/discover/tv"));
  }, []);

  const maindata = useSelector((state) => state.explore?.exploreTvData);
  console.log(maindata);

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  unlimated loding

  const handleInfiniteScroll = () => {
    if (!loding && page < totalPage) {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop + 1;

      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - pageHeight / 2) {
        dispatch(
          fetchExplorTveApi(
            `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${
              page + 1
            }&sort_by=${sortBy}&with_genres=${geners}`
          )
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page, totalPage]);

  // finsh unlimted loding

  const handelCardClicked = (id) => {
    navigate(`/details/${id}`);
    dispatch(addId(id));
    dispatch(mediaType("tv"));
  };

  console.log(maindata);

  if (!maindata || maindata.length <= 0) {
    return <div className="min-h-screen"></div>;
  }

  return (
    <>
      <div className="min-h-screen pt-24">
        <ContentWrapper>
          <div>
            <ExploreHeading />
          </div>
          <div className="flex flex-wrap flex-row mx-auto justify-evenly gap-5">
            {maindata?.map((item) => (
              <div
                key={item.id}
                className="mb-10 overflow-hidden w-full ss:w-[270px] ssm:w-[300px] h-full"
                onClick={() => handelCardClicked(item.id)}
              >
                <div className="">
                  {item.poster_path ? (
                    <Img
                      src={posterUrl + item.poster_path}
                      className="rounded-xl "
                    />
                  ) : (
                    <img
                      src={noPoster}
                      alt="No Poster"
                      className="rounded-xl"
                    />
                  )}
                </div>
                <div className=" left-2 relative -top-[30px]">
                  {item?.known_for ? (
                    <span className="absolute w-[50px]">
                      <CircularRating
                        rating={item?.known_for[0]?.vote_average?.toFixed(1)}
                      />
                    </span>
                  ) : (
                    <span className="absolute w-[50px]">
                      <CircularRating rating={item?.vote_average?.toFixed(1)} />
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-[100%] mt-5 gap-1">
                  <span className="text-white text-xl text-ellipsis text-nowrap overflow-hidden">
                    {item?.known_for
                      ? item.known_for[0].title || item.known_for[0].name
                      : item.name || item.title}
                  </span>
                  <span className="text-gray-600 text-xl font-medium">
                    {dayjs(item.release_date || item.first_air_date)?.format(
                      "MMM D, YYYY"
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default ExploreTvShows;
