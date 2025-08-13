import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addMovieDetail, toggleMovieInfoView } from "../utils/moviesSlice";

const MovieCard = ({ moviesList }) => {
  const dispatch = useDispatch();

  if (!moviesList?.poster_path) return null;

  const handleEachMovieInfo = () => {
    dispatch(toggleMovieInfoView());
    dispatch(addMovieDetail(moviesList));
    // navigate("/movieInfo");
  };

  return (
    <div className="w-24  sm:w-32 md:w-40 lg:w-52 pr-2 sm:pr-4 cursor-pointer transition-transform hover:scale-105 duration-300">
      <img
        className="rounded-lg w-full h-auto"
        src={IMG_CDN_URL + moviesList?.poster_path}
        onClick={handleEachMovieInfo}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
