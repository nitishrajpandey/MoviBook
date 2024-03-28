import React, { useEffect } from "react";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import CarouselMoviesCard from "../../../../components/carousel/CarouselMoviesCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUpcomingApi,
  switchTab,
} from "../../../../store/homeSlices/upcomingSlice";
import Loding from "../../../../components/LodingLoder/Loding";

function Upcoming() {
  const dispatch = useDispatch();
  const loding = useSelector((state) => state.upcoming?.loding);
  const activeTab = useSelector((state) => state.upcoming?.currentTab);
  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const upcomingData = useSelector(
    (state) => state.upcoming?.upcomingCollection
  );

  useEffect(() => {
    dispatch(
      fetchUpcomingApi(
        activeTab === "movie" ? "/movie/upcoming" : "/tv/on_the_air"
      )
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
            <h1 className="text-white text-2xl font-semibold">Upcoming</h1>
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
          <CarouselMoviesCard data={upcomingData} posterUrl={posterUrl} />
        )}
      </ContentWrapper>
    </div>
  );
}

export default Upcoming;
