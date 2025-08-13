import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

const MovieDetail = ({ movieId }) => {
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    moviesData();
  }, []);

  const moviesData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDetail(json);
  };

  if (!movieDetail) return null;

  const numberToWords = (num) => {
    if (num >= 1_000_000_000_000) {
      return (num / 1_000_000_000_000).toFixed(2).replace(/\.00$/, "") + " trillion";
    } else if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + " billion";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(2).replace(/\.00$/, "") + " million";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(2).replace(/\.00$/, "") + " thousand";
    } else {
      return num.toString();
    }
  };

  const budget = numberToWords(movieDetail?.budget);

  return (
    <div className="bg-black text-white px-4 py-6 sm:px-10">
      <h1 className="font-bold text-xl sm:text-3xl mb-4">Details:</h1>
      <div>



      </div>
      <img
  className=" sm:mx-16 my-5 w-52 sm:w-4/12 md:w-3/12 rounded-xl"
  src={IMG_CDN_URL + movieDetail?.backdrop_path}
  alt="movie poster"
/>


      <h1 className="font-medium text-2xl sm:text-3xl mb-3 sm:mx-14">
        {movieDetail?.title}
      </h1>

      <div className="sm:mx-14 font-medium mb-2">
        <span className="text-lg sm:text-3xl">Genres:</span>
        {movieDetail?.genres.map((genre, index) => (
          <span className="text-sm sm:text-xl" key={index}>
            {" "}
            {genre.name},
          </span>
        ))}
      </div>

      <div className="sm:mx-14 my-2">
        <span className="font-medium text-lg sm:text-3xl">Budget:</span>
        <span className="text-sm sm:text-xl font-medium"> {budget}</span>
      </div>

      <div className="sm:mx-14 my-2">
        <span className="font-medium text-lg sm:text-3xl">Blog:</span>
        <a
          href={movieDetail?.homepage}
          className="text-blue-400 text-sm sm:text-xl font-medium break-all"
        >
          {" "}
          {movieDetail?.homepage}
        </a>
      </div>

      <div className="sm:mx-14 my-2">
        <span className="font-medium text-lg sm:text-3xl">Release Date:</span>
        <span className="text-sm sm:text-xl font-medium">
          {" "}
          {movieDetail?.release_date}
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;

