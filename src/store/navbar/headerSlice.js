import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {

        searchbarToggleState: false,
        toggleHamburgerState: false
    },
    reducers: {

        closeToggle: (state) => {
            state.searchbarToggleState = !state.searchbarToggleState
        },
        hamburgerToggle: (state) => {
            state.toggleHamburgerState = !state.toggleHamburgerState
        }
    }
})

export const { closeToggle, hamburgerToggle } = headerSlice.actions


export default headerSlice.reducer