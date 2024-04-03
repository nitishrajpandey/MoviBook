import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchDataApi } from "../../store/searchSlice/searchSlice";
import dayjs from "dayjs";
import CircularRating from "../../components/circularProgressbar/CircularRating";
import { noPoster } from "../../assets";
import Img from "../../components/LazyImageLoder/Img";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import {
  addId,
  mediaType,
} from "../../store/detailsMovieTvSlice/detailsMovieTvSlice";
import Loding from "./components/Loding";

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SearchKeyWord = useSelector((state) => state.search?.keyWordName);
  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const datavalue = useSelector((state) => state.search?.searchResults);
  const loding = useSelector((state) => state.search?.loding);
  const page = useSelector((state) => state.search?.pageNo);
  const totalPage = useSelector((state) => state.search?.totalPageNo);

  useEffect(() => {
    if (SearchKeyWord) {
      dispatch(
        fetchSearchDataApi(`/search/multi?query=${SearchKeyWord}&page=1`)
      );
    }
  }, []);

  const handelCardClicked = (id, movieType) => {
    navigate(`/details/${id}`);
    dispatch(addId(id));
    dispatch(mediaType(movieType));
  };

  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  unlimated loding

  const handleInfiniteScroll = () => {
    if (!loding && page < totalPage) {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop + 1;

      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - pageHeight / 2) {
        dispatch(
          fetchSearchDataApi(
            `/search/multi?query=${SearchKeyWord}&page=${page + 1}`
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

  if (!datavalue || datavalue.length == 0) {
    return <Loding />;
  }

  return (
    <div className="py-10 pt-28">
      <ContentWrapper>
        <div>
          <h1 className="text-white font-semibold text-3xl pb-8">
            Search results of '{SearchKeyWord}'
          </h1>
        </div>
        <div className="flex flex-wrap flex-row mx-auto justify-evenly gap-5">
          {datavalue.map((item) => (
            <div
              key={item.id}
              className="mb-10 overflow-hidden w-full ss:w-[270px] ssm:w-[300px]"
              onClick={() => handelCardClicked(item.id, item.media_type)}
            >
              <div className="">
                {item.poster_path ? (
                  <Img
                    src={posterUrl + item.poster_path}
                    className="rounded-xl "
                  />
                ) : (
                  <img src={noPoster} alt="No Poster" className="rounded-xl" />
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
                  {/* {item?.known_for?.title || item.name} */}
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
  );
}

export default Search;
