import { configureStore } from "@reduxjs/toolkit";
import loginSignupReducer from "./loginSignupSlice";
import heroBannerPosterReducer from "./heroBannerPosterSlice";
import initialReducer from "./initialSlice";

const store = configureStore({
    reducer: {
        loginSignup: loginSignupReducer,
        initial: initialReducer,
        bgBannerPoster: heroBannerPosterReducer
    }
})

export default store