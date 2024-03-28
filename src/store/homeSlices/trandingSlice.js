import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";

export const fetchTrandingApi = createAsyncThunk("fetchTrandingApi", async (url) => {
    const data = await fetchDataFromTMBD(url)
    return data
})

const trandingSlice = createSlice({
    name: "tranding",
    initialState: {
        trandingCollection: [],
        currentTab: "day",
        loding: false
    },
    reducers: {
        switchTab: (state, action) => {
            state.currentTab = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrandingApi.fulfilled, (state, action) => {
                state.trandingCollection = action.payload.results,
                    state.loding = false
            })
            .addCase(fetchTrandingApi.pending, (state, action) => {
                state.loding = true
            })
    }
})


export const { switchTab } = trandingSlice.actions


export default trandingSlice.reducer