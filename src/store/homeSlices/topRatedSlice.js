import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";
export const fetchTopRatedApi = createAsyncThunk("fetchTopRatedApi", async (url) => {
    console.log("top rated url : ", url);
    const data = await fetchDataFromTMBD(url)
    return data
})

const topRatedSlice = createSlice({
    name: "topRated",
    initialState: {
        topRatedCollection: [],
        currentTab: "movie"
    },
    reducers: {
        switchTab: (state, action) => {
            state.currentTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRatedApi.fulfilled, (state, action) => {
                state.topRatedCollection = action.payload?.results
            })
    }
})

export const { switchTab } = topRatedSlice.actions
export default topRatedSlice.reducer