import React, { useEffect } from "react";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import CarouselMoviesCard from "../../../../components/carousel/CarouselMoviesCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopRatedApi,
  switchTab,
} from "../../../../store/homeSlices/topRatedSlice";
import Loding from "../../../../components/LodingLoder/Loding";

function TopRated() {
  const dispatch = useDispatch();
  const loding = useSelector((state) => state.topRated?.loding);
  const activeTab = useSelector((state) => state.topRated?.currentTab);
  const posterUrl = useSelector((state) => state.initial?.url?.poster);
  const topRatedData = useSelector(
    (state) => state.topRated?.topRatedCollection
  );

  useEffect(() => {
    dispatch(
      fetchTopRatedApi(
        activeTab === "movie" ? "/movie/top_rated" : "/tv/top_rated"
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
            <h1 className="text-white text-2xl font-semibold">Top Rated</h1>
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
          <CarouselMoviesCard
            data={topRatedData}
            posterUrl={posterUrl}
            movieType={activeTab}
          />
        )}
      </ContentWrapper>
    </div>
  );
}

export default TopRated;
