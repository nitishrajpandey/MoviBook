import { configureStore } from "@reduxjs/toolkit";
import loginSignupReducer from "./loginSetup/loginSignupSlice";
import heroBannerPosterReducer from "./homeSlices/heroBannerPosterSlice";
import headerReducer from "./navbar/headerSlice";
import initialReducer from "./intialRequiredSlice/initialSlice";
import trandingReducer from "./homeSlices/trandingSlice";
import popularReducer from "./homeSlices/popularSlice";
import topRatedReducer from "./homeSlices/topRatedSlice";
import upcomingReducer from "./homeSlices/upcomingSlice";
import detailsMovieTvReducer from "./detailsMovieTvSlice/detailsMovieTvSlice";



const store = configureStore({
    reducer: {
        loginSignup: loginSignupReducer,
        header: headerReducer,
        initial: initialReducer,
        bgBannerPoster: heroBannerPosterReducer,
        tranding: trandingReducer,
        popular: popularReducer,
        topRated: topRatedReducer,
        upcoming: upcomingReducer,
        detailsMovieTv: detailsMovieTvReducer

    }
})

export default store