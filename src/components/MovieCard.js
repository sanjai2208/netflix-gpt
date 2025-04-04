import { IMG_CDN_URL } from "../utils/constants"
const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className="w-52 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  )
}

export default MovieCard
