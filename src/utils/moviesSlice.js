import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    showMoviePage:false,
    nowPlayingMovies: null,
    popularMovies:null,
    upcomingMovies:null,
    tvSeries:null,
    topRated:null,
    trailerVideo:null,
    movieDetail:null
  },
  reducers: {
    toggleMovieInfoView : (state) =>{
      state.showMoviePage= !state.showMoviePage
 },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies=action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies=action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies=action.payload;
    },
    addTvSeries: (state, action) => {
      state.tvSeries=action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated=action.payload;
    },
    addtrailerVideo:(state, action)=>{
      state.trailerVideo=action.payload
    },
    addMovieDetail:(state, action)=>{
      state.movieDetail = action.payload;
    }
  },
});
export const {toggleMovieInfoView,addNowPlayingMovies,addPopularMovies,addUpcomingMovies,addTvSeries,addTopRated,addtrailerVideo, addMovieDetail} = moviesSlice.actions;
export default moviesSlice.reducer;
