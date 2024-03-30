// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   fetchMovieTvCreditsApi,
// //   fetchMovieTvVideoApi,
// //   fetchdetailsMovieTvApi,
// //   resetDetails,
// // } from "../../store/detailsMovieTvSlice/detailsMovieTvSlice";
// // import DetailsBanner from "./components/DetailsBanner";

// // function DetailsMoviesTv() {
// //   const id = useSelector((state) => state.detailsMovieTv?.id);
// //   const movieType = useSelector((state) => state.detailsMovieTv?.mediaType);
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     if (id != null) {
// //       dispatch(resetDetails());
// //       dispatch(fetchdetailsMovieTvApi(`/${movieType}/${id}`));
// //       dispatch(fetchMovieTvVideoApi(`/${movieType}/${id}/videos`));
// //       dispatch(fetchMovieTvCreditsApi(`/${movieType}/${id}/credits`));
// //     }
// //   }, [dispatch, id, movieType]);
// //   return (
// //     <div>
// //       <DetailsBanner />
// //     </div>
// //   );
// // }

// // export default DetailsMoviesTv;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchMovieTvCreditsApi,
//   fetchMovieTvVideoApi,
//   fetchdetailsMovieTvApi,
//   resetDetails, // Import the reset action
// } from "../../store/detailsMovieTvSlice/detailsMovieTvSlice";
// import DetailsBanner from "./components/DetailsBanner";

// function DetailsMoviesTv() {
//   const id = useSelector((state) => state.detailsMovieTv?.id);
//   const movieType = useSelector((state) => state.detailsMovieTv?.mediaType);
//   const dispatch = useDispatch();

//   const videoValue = useSelector(
//     (state) => state.detailsMovieTv?.moviesTvVideos
//   );

//   const creditsValue = useSelector(
//     (state) => state.detailsMovieTv?.moviesTvCredits
//   );

//   useEffect(() => {
//     dispatch(resetDetails());
//     if (id != null) {
//       dispatch(fetchdetailsMovieTvApi(`/${movieType}/${id}`));
//       dispatch(fetchMovieTvVideoApi(`/${movieType}/${id}/videos`));
//       dispatch(fetchMovieTvCreditsApi(`/${movieType}/${id}/credits`));
//     }
//   }, []);

//   return (
//     <div>
//       <DetailsBanner />
//     </div>
//   );
// }

// export default DetailsMoviesTv;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieTvCreditsApi,
  fetchMovieTvVideoApi,
  fetchdetailsMovieTvApi,
  resetDetails,
} from "../../store/detailsMovieTvSlice/detailsMovieTvSlice";
import DetailsBanner from "./components/detailsBanner/DetailsBanner";

function DetailsMoviesTv() {
  const id = useSelector((state) => state.detailsMovieTv?.id);
  const movieType = useSelector((state) => state.detailsMovieTv?.mediaType);
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset details whenever id or movieType changes
    dispatch(resetDetails());

    if (id != null) {
      dispatch(fetchdetailsMovieTvApi(`/${movieType}/${id}`));
      dispatch(fetchMovieTvVideoApi(`/${movieType}/${id}/videos`));
      dispatch(fetchMovieTvCreditsApi(`/${movieType}/${id}/credits`));
    }
  }, [id, movieType, dispatch]);

  return (
    <div className="">
      <DetailsBanner />
    </div>
  );
}

export default DetailsMoviesTv;
