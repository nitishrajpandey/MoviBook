import { createSlice } from "@reduxjs/toolkit";

const loginSignupSlice = createSlice(
    {
        name: "loginSignup",
        initialState: {
            loginSignupStatus: false,
            message: null
        },
        reducers: {
            loginSignupToggle: (state, action) => {
                state.loginSignupStatus = !state.loginSignupStatus
            },
            addMessages: (state, action) => {
                state.message = action.payload
            }
        }
    }
)

export const { loginSignupToggle, addMessages } = loginSignupSlice.actions

export default loginSignupSlice.reducer