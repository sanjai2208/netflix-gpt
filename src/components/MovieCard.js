import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addMovieDetail, toggleMovieInfoView } from "../utils/moviesSlice";
const MovieCard = ({moviesList}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  if(!moviesList?.poster_path) return null;
  const handleEachMovieInfo = () =>{
    dispatch(toggleMovieInfoView())
    dispatch(addMovieDetail(moviesList))

    
    // navigate("/movieInfo")
   
  }
  return (
    <div className="w-52 pr-4">
      <img src={IMG_CDN_URL + moviesList?.poster_path} onClick={handleEachMovieInfo} alt="" />
    </div>
  )
}

export default MovieCard
