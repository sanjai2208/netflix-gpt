import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
const appStore = configureStore ({
    reducer:{
        user: userReducer,
        movies: movieReducer,
        gpt:gptReducer,
    }
})
export default appStore