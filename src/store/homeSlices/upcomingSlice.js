import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";
export const fetchUpcomingApi = createAsyncThunk("fetchUpcomingApi", async (url) => {

    const data = await fetchDataFromTMBD(url)
    return data
})

const upcomingSlice = createSlice({
    name: "upcoming",
    initialState: {
        upcomingCollection: [],
        currentTab: "movie",
        loding: false
    },
    reducers: {
        switchTab: (state, action) => {
            state.currentTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingApi.fulfilled, (state, action) => {
                state.upcomingCollection = action.payload?.results,
                    state.loding = false
            })
            .addCase(fetchUpcomingApi.pending, (state, action) => {
                state.loding = true
            })
    }
})

export const { switchTab } = upcomingSlice.actions
export default upcomingSlice.reducer