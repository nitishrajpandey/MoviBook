import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";
import CarouselMoviesCard from "../../../../components/carousel/CarouselMoviesCard";

function SimilarShows() {
  const similarShows = useSelector(
    (state) => state.detailsMovieTv?.similarShowsCollection?.results
  );

  const posterUrl = useSelector((state) => state.initial?.url?.poster);

  const type = useSelector((state) => state.detailsMovieTv?.mediaType);

  if (!similarShows) {
    return <div></div>;
  }

  return (
    <div className="mb-10">
      <ContentWrapper>
        <div>
          <h1 className="text-white text-3xl py-5 ">
            {type === "movie" ? "Similar Movies" : "similar Tv"}
          </h1>
        </div>

        <div>
          <CarouselMoviesCard
            data={similarShows}
            posterUrl={posterUrl}
            movieType={type}
          />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default SimilarShows;
