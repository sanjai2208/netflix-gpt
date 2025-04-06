import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";


const MovieDetail = ({ movieId }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    moviesData();
  }, []);
  const moviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    setMovieDetail(json);
    
  };
 
  
  
  if(!movieDetail) return null
  function numberToWords(num) {
    if (num >= 1_000_000_000_000) {
        return (num / 1_000_000_000_000).toFixed(2).replace(/\.00$/, '') + " trillion";
    } else if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(2).replace(/\.00$/, '') + " billion";
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(2).replace(/\.00$/, '') + " million";
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(2).replace(/\.00$/, '') + " thousand";
    } else {
        return num.toString();
    }
}
const budget= numberToWords(movieDetail?.budget)

  
  return (
    <div className="bg-black  text-white ">
      <h1 className="font-bold text-5xl px-4 py-4">Details</h1>
      <img className="mx-16 my-7 w-3/12 rounded-xl"  src={IMG_CDN_URL + movieDetail?.backdrop_path} alt="" />
      <h1 className="font-medium mx-14 mt-7 mb-3 text-3xl">
        {"    " + movieDetail?.title}
      </h1>
      <div className="mx-14 font-medium my-2 ">
      <span className="text-3xl ">Genres:</span>
      {movieDetail?.genres.map((genre, index) => <span className="text-xl " key={index}> {genre.name},</span>)}
      </div>
      <div>
      <span className="ml-14 font-medium  text-3xl">Budget:</span><span className="font-medium text-xl"> {budget}</span>

      </div>
      <div className="my-2">
      <span className="ml-14 font-medium  text-3xl ">Blog:</span>
      <a href={movieDetail?.homepage} className="text-blue-400 font-medium text-xl"> {movieDetail?.homepage}</a>
      </div>
      <div className="my-2">
      <span className="ml-14 font-medium  text-3xl">Release Date:</span><span className="font-medium text-xl"> {movieDetail?.release_date
      }</span>
      </div>
      
      
    </div>
    
  );
};

export default MovieDetail;
