
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";

export const fetchBgPosterApi = createAsyncThunk("fetchBgPosterApi", async (url) => {
    const data = await fetchDataFromTMBD(url); // Await fetchDataFromTMBD

    return data;
});



const heroBannerPosterSlice = createSlice({
    name: "bgBannerPoster",
    initialState: {
        bgBannerPoster: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBgPosterApi.fulfilled, (state, action) => {

                // if (action.payload.results && action.payload.results.length > 0) {
                //     const value = Math.floor(Math.random() * action.payload.results.length);
                //     state.bgBannerPoster = action.payload.results[value];
                // }
                state.bgBannerPoster = action.payload?.results;
            })

    }
});

export default heroBannerPosterSlice.reducer;