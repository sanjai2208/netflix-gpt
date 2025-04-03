import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    upcomingMovies:null,
    tvSeries:null,
    topRated:null,
    trailerVideo:null
  },
  reducers: {
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
    }
  },
});
export const {addNowPlayingMovies,addPopularMovies,addUpcomingMovies,addTvSeries,addTopRated,addtrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;
