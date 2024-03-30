// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchDataFromTMBD } from "../../api/api";


// export const fetchdetailsMovieTvApi = createAsyncThunk("fetchdetailsMovieTvApi", async (url) => {
//     const data = await fetchDataFromTMBD(url)
//     return data
// })


// export const fetchMovieTvVideoApi = createAsyncThunk("fetchMovieTvVideoApi", async (url) => {
//     const data = await fetchDataFromTMBD(url)
//     return data
// })

// export const fetchMovieTvCreditsApi = createAsyncThunk("fetchMovieTvCreditsApi", async (url) => {
//     const data = await fetchDataFromTMBD(url)
//     return data
// })




// const detailsMovieTvSlice = createSlice({
//     name: "detailsMovieTv",
//     initialState: {
//         id: null,
//         mediaType: "movie",
//         moviesTvDetails: null,
//         moviesTvVideos: null,
//         moviesTvCredits: null

//     },
//     reducers: {
//         addId: (state, action) => {
//             state.id = action.payload
//         },
//         mediaType: (state, action) => {
//             state.mediaType = action.payload
//         },
//         resetDetails: (state) => {
//             state.moviesTvCredits = null,
//                 state.moviesTvDetails = null,
//                 state.moviesTvVideos = null
//         }
//     }, extraReducers: (builder) => {
//         builder
//             .addCase(fetchdetailsMovieTvApi.fulfilled, (state, action) => {
//                 state.moviesTvDetails = action.payload
//             })
//             .addCase(fetchMovieTvVideoApi.fulfilled, (state, action) => {
//                 state.moviesTvVideos = action.payload
//             })
//             .addCase(fetchMovieTvCreditsApi.fulfilled, (state, action) => {
//                 state.moviesTvCredits = action.payload
//             })
//     }
// })

// export const { addId, mediaType, resetDetails } = detailsMovieTvSlice.actions

// export default detailsMovieTvSlice.reducer










import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";

export const fetchdetailsMovieTvApi = createAsyncThunk("fetchdetailsMovieTvApi", async (url) => {
    const data = await fetchDataFromTMBD(url);
    return data;
});

export const fetchMovieTvVideoApi = createAsyncThunk("fetchMovieTvVideoApi", async (url) => {
    const data = await fetchDataFromTMBD(url);
    return data;
});

export const fetchMovieTvCreditsApi = createAsyncThunk("fetchMovieTvCreditsApi", async (url) => {
    const data = await fetchDataFromTMBD(url);
    return data;
});

const detailsMovieTvSlice = createSlice({
    name: "detailsMovieTv",
    initialState: {
        id: null,
        mediaType: "tv",
        moviesTvDetails: null,
        moviesTvVideos: null,
        moviesTvCredits: null
    },
    reducers: {
        addId: (state, action) => {
            state.id = action.payload;
        },
        mediaType: (state, action) => {
            state.mediaType = action.payload;
        },
        resetDetails: (state) => {
            state.moviesTvDetails = null;
            state.moviesTvVideos = null;
            state.moviesTvCredits = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchdetailsMovieTvApi.fulfilled, (state, action) => {
                state.moviesTvDetails = action.payload;
            })

            .addCase(fetchMovieTvVideoApi.fulfilled, (state, action) => {
                state.moviesTvVideos = action.payload;
            })
            .addCase(fetchMovieTvCreditsApi.fulfilled, (state, action) => {
                state.moviesTvCredits = action.payload;
            });
    }
});

export const { addId, mediaType, resetDetails } = detailsMovieTvSlice.actions;

export default detailsMovieTvSlice.reducer;
