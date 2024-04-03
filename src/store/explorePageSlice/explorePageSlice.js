import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";


export const fetchExploreApi = createAsyncThunk("fetchExploreApi", async (url) => {
    const data = await fetchDataFromTMBD(url)
    return data
})


export const fetchExplorTveApi = createAsyncThunk("fetchExplorTveApi", async (url) => {
    const data = await fetchDataFromTMBD(url)
    return data
})





const explorePageSlice = createSlice({
    name: "explore",
    initialState: {
        exploreMoviesData: [],
        exploreTvData: [],
        pageNo: 1,
        totalPageNo: null,
        loding: false,
        tvPageNo: 1,
        tvTotalPageNo: null,
        tvLoding: false,

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExploreApi.fulfilled, (state, action) => {
                // state.exploreMoviesData = action.payload
                state.loding = false
                const newData = action.payload.results.filter(newitem => {
                    return !state.exploreMoviesData.some(existingitem => existingitem.id === newitem.id);
                })
                state.exploreMoviesData = [...state.exploreMoviesData, ...newData]
                state.pageNo = action.payload.page;
                state.totalPageNo = action.payload.total_pages;
            })

            .addCase(fetchExploreApi.pending, (state, action) => {
                state.loding = true
            })


            .addCase(fetchExplorTveApi.fulfilled, (state, action) => {
                // state.exploreMoviesData = action.payload
                state.tvLoding = false
                const newData = action.payload.results.filter(newitem => {
                    return !state.exploreTvData.some(existingitem => existingitem.id === newitem.id);
                })
                state.exploreTvData = [...state.exploreTvData, ...newData]
                state.tvPageNo = action.payload.page;
                state.tvTotalPageNo = action.payload.total_pages;
            })

            .addCase(fetchExplorTveApi.pending, (state, action) => {
                state.tvLoding = true
            })
    }
})
export default explorePageSlice.reducer