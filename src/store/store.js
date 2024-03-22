import { configureStore } from "@reduxjs/toolkit";
import loginSignupReducer from "./loginSignupSlice";

const store = configureStore({
    reducer: {
        loginSignup: loginSignupReducer
    }
})

export default store