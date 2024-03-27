import { configureStore } from "@reduxjs/toolkit";
import loginSignupReducer from "./loginSetup/loginSignupSlice";
import heroBannerPosterReducer from "./homeSlices/heroBannerPosterSlice";
import headerReducer from "./navbar/headerSlice";
import initialReducer from "./intialRequiredSlice/initialSlice";
import trandingReducer from "./homeSlices/trandingSlice";
import popularReducer from "./homeSlices/popularSlice";

const store = configureStore({
    reducer: {
        loginSignup: loginSignupReducer,
        header: headerReducer,
        initial: initialReducer,
        bgBannerPoster: heroBannerPosterReducer,
        tranding: trandingReducer,
        popular: popularReducer
    }
})

export default store