import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularApi,
  switchTab,
} from "../../../../store/homeSlices/popularSlice";

import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import CarouselMoviesCard from "../../../../components/carousel/CarouselMoviesCard";
import Loding from "../../../../components/LodingLoder/Loding";

function PopularSection() {
  const dispatch = useDispatch();
  const loding = useSelector((state) => state.popular?.loding);
  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const popularData = useSelector((state) => state.popular?.popularCollection);

  const activeTab = useSelector((state) => state.popular?.currentTab);
  useEffect(() => {
    dispatch(
      fetchPopularApi(activeTab === "movie" ? "/movie/popular" : "/tv/popular")
    );
  }, [dispatch, activeTab]);

  const handleTabChange = (tab) => {
    dispatch(switchTab(tab));
  };

  return (
    <div>
      <ContentWrapper>
        <div className="flex justify-between py-5">
          <div>
            <h1 className="text-white text-2xl font-semibold">
              What's Popular
            </h1>
          </div>

          <div className="bg-white px-1 py-1 rounded-3xl flex gap-2 items-center ">
            <button
              className={`px-4 xs:px-8 py-1 rounded-2xl  ${
                activeTab === "movie"
                  ? "bg-gradient-to-br from-orange-400 to-pink-600 text-white"
                  : ""
              }`}
              onClick={() => handleTabChange("movie")}
            >
              Movies
            </button>
            <button
              className={`px-4 xs:px-8 py-1 rounded-3xl ${
                activeTab === "tv"
                  ? "bg-gradient-to-br from-orange-400 to-pink-600 text-white"
                  : ""
              }`}
              onClick={() => handleTabChange("tv")}
            >
              Tv shows
            </button>
          </div>
        </div>
        {loding ? (
          <Loding />
        ) : (
          <CarouselMoviesCard data={popularData} posterUrl={posterUrl} />
        )}
      </ContentWrapper>
    </div>
  );
}

export default PopularSection;
