import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";
export const fetchPopularApi = createAsyncThunk("fetchPopularApi", async (url) => {

    const data = await fetchDataFromTMBD(url)
    return data
})

const popularSlice = createSlice({
    name: "popular",
    initialState: {
        popularCollection: [],
        currentTab: "movie"
    },
    reducers: {
        switchTab: (state, action) => {
            state.currentTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularApi.fulfilled, (state, action) => {
                state.popularCollection = action.payload?.results
            })
    }
})

export const { switchTab } = popularSlice.actions
export default popularSlice.reducer