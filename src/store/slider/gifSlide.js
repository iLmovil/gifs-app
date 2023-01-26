import { createSlice } from '@reduxjs/toolkit';

export const gifsSlice = createSlice({

    name: 'gifs',
    initialState: {
        isLoading: true,
        isActive: false,
        data: [],
        gif: '',
        error: ''
    },
    reducers: {
        setLoading : ( state ) => {
            state.isLoading = true
        },
        setGif : ( state, { payload } ) => {
            state.gif = payload
        },
        setGifs: ( state, { payload } ) => {
            state.isActive = true
            state.data = payload
            state.isLoading = false
            state.error = null
        },
        setTrendingGifs : ( state, { payload } ) => {
            state.data = payload
            state.isLoading = false
            state.error = null
        },
        setError : ( state, { payload } ) => {
            state.error = payload
            state.isActive = false
            state.isLoading = false
            state.data = []
        },
    },
});

export const { setLoading, setGif, setGifs, setTrendingGifs, setError } = gifsSlice.actions