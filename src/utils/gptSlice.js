import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieInfo: null,
        clearMoviesResults: null,
    }, 
    reducers : {
       toggleGptSearchView : (state) => {
        state.showGptSearch = !state.showGptSearch ;
       },
       addGptMoviesResults: (state, action) => {
        const { movieNames, movieInfo } = action.payload; 
        state.movieNames = movieNames;
        state.movieInfo = movieInfo;
       },
       clearMoviesResults: (state) => {
        state.movieNames = null;
        state.movieInfo = null;
       }
    }
});

export const{ toggleGptSearchView, addGptMoviesResults, clearMoviesResults } = gptSlice.actions;
export default gptSlice.reducer;