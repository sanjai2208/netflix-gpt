import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div className="bg-black">
      <div className="pl-10 -mt-20 sm:-mt-36 md:-mt-40 lg:-mt-64  xl:-mt-[250px] 2xl:-mt-[350px]  relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRated}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      </div>
      

      
      
    </div>
  )
}

export default SecondaryContainer
