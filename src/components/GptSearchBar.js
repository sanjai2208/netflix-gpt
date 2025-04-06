import React,{useRef} from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick =async () => {
    //api to use openAi
    const gptQuery = "Act as a movie recommendation system and suggest movies for the query" + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead.example result:Gadar, Don, Sholay, Golmaal, koi mil gaya"
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });
  
    
    
    const gptMovies = completion.choices[0].message.content.split(",");
    
    //gptMovies contain array of movies
    //now i have to fetch data from TMDB for those movies
    const promiseArray = gptMovies.map(movieName => searchMovieTMDB(movieName) )

   const tmdbResults = await Promise.all(promiseArray);

   dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

  }

  return (
    <div className="pt-[13%] pl-[30%]   px-4">
      <form className=" w-full max-w-3xl flex items-center bg-gray-900/70 backdrop-blur-3xl border border-red-500/70 ring-1 ring-red-700/60 rounded-full shadow-[0_0_40px_rgba(255,0,0,0.8)] hover:shadow-red-500/90 transition-all duration-700 ease-in-out transform hover:scale-105 hover:-translate-y-1 overflow-hidden" onSubmit={e => e.preventDefault()}>
        <input
        ref={searchText}
          className="flex-1 p-5 pl-6 text-lg md:text-xl text-white bg-transparent outline-none placeholder-gray-400  hover:brightness-110 focus:outline-none"
          type="text"
          placeholder="🔍 What'd you like to watch today..."
        />
        <button className="px-10 md:px-12 py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-800 text-white text-lg md:text-xl font-bold md:font-extrabold rounded-full hover:from-red-500 hover:to-yellow-500 transition-all duration-700 ease-in-out shadow-lg hover:shadow-yellow-500/80 transform hover:scale-105 hover:-translate-y-1" onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;


