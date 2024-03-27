import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTrandingApi,
  switchTab,
} from "../../../../store/homeSlices/trandingSlice";
import CarouselMoviesCard from "../../../../components/carousel/CarouselMoviesCard";

function TrendingMovies() {
  const dispatch = useDispatch();
  const trandingDayValue = useSelector(
    (state) => state.tranding?.trandingCollection
  );
  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const activeTab = useSelector((state) => state.tranding.currentTab);

  useEffect(() => {
    dispatch(
      fetchTrandingApi(
        activeTab === "day" ? "/trending/movie/day" : "/trending/movie/week"
      )
    );
  }, [activeTab, dispatch]);

  const handleTabChange = (tab) => {
    dispatch(switchTab(tab));
  };

  return (
    <div>
      <ContentWrapper>
        <div className="flex justify-between py-5">
          <div>
            <h1 className="text-white text-2xl font-semibold">Tranding</h1>
          </div>

          <div className="bg-white px-1 py-1 rounded-3xl flex gap-2 items-center ">
            <button
              className={`px-4 xs:px-8 py-1 rounded-2xl  ${
                activeTab === "day"
                  ? "bg-gradient-to-br from-orange-400 to-pink-600 text-white"
                  : ""
              }`}
              onClick={() => handleTabChange("day")}
            >
              Day
            </button>
            <button
              className={`px-4 xs:px-8 py-1 rounded-3xl ${
                activeTab === "week"
                  ? "bg-gradient-to-br from-orange-400 to-pink-600 text-white"
                  : ""
              }`}
              onClick={() => handleTabChange("week")}
            >
              Week
            </button>
          </div>
        </div>
        <CarouselMoviesCard data={trandingDayValue} posterUrl={posterUrl} />
      </ContentWrapper>
    </div>
  );
}

export default TrendingMovies;
