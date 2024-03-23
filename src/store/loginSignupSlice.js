import { createSlice } from "@reduxjs/toolkit";

const loginSignupSlice = createSlice(
    {
        name: "loginSignup",
        initialState: {
            userData: null,
            loginSignupStatus: false,
            message: null
        },
        reducers: {
            addUser: (state, action) => {
                state.userData = action.payload
            },
            removeUser: (state) => {
                state.userData = null
            },
            loginSignupToggle: (state, action) => {
                state.loginSignupStatus = !state.loginSignupStatus
            },
            addMessages: (state, action) => {
                state.message = action.payload
            }
        }
    }
)

export const { loginSignupToggle, addMessages, addUser, removeUser } = loginSignupSlice.actions

export default loginSignupSlice.reducer