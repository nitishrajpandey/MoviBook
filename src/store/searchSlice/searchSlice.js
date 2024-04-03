import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";

export const fetchSearchDataApi = createAsyncThunk("fetchSearchDataApi", async (url) => {

    const data = await fetchDataFromTMBD(url)
    return data
})

const searchSlice = createSlice({
    name: "search",
    initialState: {
        keyWordName: null,
        pageNo: 1,
        totalPageNo: null,
        searchResults: [],
        loding: false
    },
    reducers: {
        addKeyWord: (state, action) => {
            state.keyWordName = action.payload,
                state.searchResults = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchDataApi.fulfilled, (state, action) => {

                state.loding = false

                const newResults = action.payload.results.filter(newSearch => {
                    return !state.searchResults.some(existingSearch => existingSearch.id === newSearch.id);
                });
                state.searchResults = [...state.searchResults, ...newResults]
                state.pageNo = action.payload.page;
                state.totalPageNo = action.payload.total_pages;
            })
            .addCase(fetchSearchDataApi.pending, (state, action) => {
                state.loding = true
            })
    }

})

export const { addKeyWord } = searchSlice.actions

export default searchSlice.reducer