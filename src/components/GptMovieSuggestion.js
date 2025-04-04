import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt)
  if(!movieNames) return null;

  return (
    <div className=" p-4 mt-10  ">
       <div>
        {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} /> )}
        
       </div>
    </div>
  )
}

export default GptMovieSuggestion
