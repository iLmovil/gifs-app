import { configureStore } from '@reduxjs/toolkit'
import { gifsSlice } from './slider/gifSlide'

	export const store = configureStore({
  	reducer: {
        gifs: gifsSlice.reducer,
    },
})