import React from "react";
import { useSelector } from "react-redux";
import CarouselMoviesCard from "../../../../components/carousel/CarouselMoviesCard";
import ContentWrapper from "../../../../components/contentWrapper/ContentWrapper";

function Recommendations() {
  const recommendationsShows = useSelector(
    (state) => state.detailsMovieTv?.recommendationsShowsCollection?.results
  );

  console.log(recommendationsShows);
  const posterUrl = useSelector((state) => state.initial?.url?.poster);

  const type = useSelector((state) => state.detailsMovieTv?.mediaType);

  if (!recommendationsShows || recommendationsShows.length === 0) {
    return <div></div>;
  }
  return (
    <div className="mb-10">
      <ContentWrapper>
        <div>
          <h1 className="text-white text-3xl py-5 ">
            {type === "movie" ? "Recommendations Movies" : "Recommendations Tv"}
          </h1>
        </div>

        <div>
          <CarouselMoviesCard
            data={recommendationsShows}
            posterUrl={posterUrl}
            movieType={type}
          />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Recommendations;
