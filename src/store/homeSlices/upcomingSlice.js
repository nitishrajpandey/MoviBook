import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";
export const fetchUpcomingApi = createAsyncThunk("fetchUpcomingApi", async (url) => {
    console.log("top rated url : ", url);
    const data = await fetchDataFromTMBD(url)
    return data
})

const upcomingSlice = createSlice({
    name: "upcoming",
    initialState: {
        upcomingCollection: [],
        currentTab: "movie"
    },
    reducers: {
        switchTab: (state, action) => {
            state.currentTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingApi.fulfilled, (state, action) => {
                state.upcomingCollection = action.payload?.results
            })
    }
})

export const { switchTab } = upcomingSlice.actions
export default upcomingSlice.reducer