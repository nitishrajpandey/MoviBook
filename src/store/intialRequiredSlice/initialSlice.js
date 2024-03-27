import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromTMBD } from "../../api/api";

export const fetchImageUrls = createAsyncThunk("fetchImageUrls", async (url) => {

    const data = await fetchDataFromTMBD(url)


    return data
})

const initialSlice = createSlice({
    name: "initial",
    initialState: {
        url: {}
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
    }
})


export default initialSlice.reducer