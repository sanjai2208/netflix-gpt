import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store => store.movies.trailerVideo)
    const getmoviesTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
    
        const json = await data.json();
    
        const filterData = json?.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json?.results[0];
        dispatch(addtrailerVideo(trailer))
      };
      useEffect(() => {
        if(!trailerVideo){
        getmoviesTrailer();
        }
      }, []);
}

export default useMovieTrailer
