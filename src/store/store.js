import { configureStore } from "@reduxjs/toolkit";
import loginSignupReducer from "./loginSignupSlice";
import heroBannerPosterReducer from "./heroBannerPosterSlice";
import initialReducer from "./initialSlice";
import headerReducer from "./headerSlice";

const store = configureStore({
    reducer: {
        loginSignup: loginSignupReducer,
        header: headerReducer,
        initial: initialReducer,
        bgBannerPoster: heroBannerPosterReducer
    }
})

export default store