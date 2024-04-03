import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";

export const fetchImageUrls = createAsyncThunk("fetchImageUrls", async (url) => {
    const data = await fetchDataFromTMBD(url)
    return data
})

export const fetchMoviesGenreApi = createAsyncThunk("fetchMoviesGenreApi", async (url) => {
    const data = await fetchDataFromTMBD(url)
    return data
})

export const fetchTvGenreApi = createAsyncThunk("fetchTvGenreApi", async (url) => {
    const data = await fetchDataFromTMBD(url)
    return data
})

const initialSlice = createSlice({
    name: "initial",
    initialState: {
        url: {},
        genresCollection: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImageUrls.fulfilled, (state, action) => {
                const dataValue = action.payload?.images?.secure_base_url
                const url = {
                    backdrop: dataValue + "original",
                    poster: dataValue + "original",
                    profile: dataValue + "original",
                };

                state.url = url
            })

            .addCase(fetchMoviesGenreApi.fulfilled, (state, action) => {

                const newGenres = action.payload.genres.filter(newGenre => {
                    return !state.genresCollection.some(existingGenre => existingGenre.id === newGenre.id);
                });
                state.genresCollection = [...state.genresCollection, ...newGenres];
            })
            .addCase(fetchTvGenreApi.fulfilled, (state, action) => {

                const newGenres = action.payload.genres.filter(newGenre => {
                    return !state.genresCollection.some(existingGenre => existingGenre.id === newGenre.id);
                });
                state.genresCollection = [...state.genresCollection, ...newGenres];
            })
    }
})

export default initialSlice.reducer
