import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieTvCreditsApi,
  fetchMovieTvVideoApi,
  fetchRecommendationsShowsDataApi,
  fetchSimilarShowsDataApi,
  fetchdetailsMovieTvApi,
  resetDetails,
} from "../../store/detailsMovieTvSlice/detailsMovieTvSlice";
import DetailsBanner from "./components/detailsBanner/DetailsBanner";
import TopCast from "./components/topCast/TopCast";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Video from "./components/videoDetails/Video";
import { logo } from "../../assets";
import SimilarShows from "./components/similarShows/SimilarShows";
import Recommendations from "./components/recommendations/Recommendations";
import Loding from "./components/Loding";

function DetailsMoviesTv() {
  const id = useSelector((state) => state.detailsMovieTv?.id);
  const movieType = useSelector((state) => state.detailsMovieTv?.mediaType);
  const dispatch = useDispatch();

  const detailsvalue = useSelector(
    (state) => state.detailsMovieTv?.moviesTvDetails
  );

  useEffect(() => {
    dispatch(resetDetails());

    if (id != null) {
      dispatch(fetchdetailsMovieTvApi(`/${movieType}/${id}`));
      dispatch(fetchMovieTvVideoApi(`/${movieType}/${id}/videos`));
      dispatch(fetchMovieTvCreditsApi(`/${movieType}/${id}/credits`));
      dispatch(fetchSimilarShowsDataApi(`/${movieType}/${id}/similar`));
      dispatch(
        fetchRecommendationsShowsDataApi(`/${movieType}/${id}/recommendations`)
      );
    }
  }, [id, movieType, dispatch]);

  if (!detailsvalue) {
    return <Loding />;
  }
  return (
    <>
      <DetailsBanner />
      <ContentWrapper>
        <TopCast />
        <Video />
        <SimilarShows />
        <Recommendations />
      </ContentWrapper>
    </>
  );
}

export default DetailsMoviesTv;
