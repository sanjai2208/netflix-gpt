import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movies = useSelector((store)=>{
        return store.movies?.nowPlayingMovies
    })
    if ( movies === null) return;
    const mainMovie = movies[4];
    const {original_title, overview, id} = mainMovie
    
  return (
    <div className="">
        <VideoTitle title={original_title} overview={overview}/>

        <VideoBackground movieId={id}/>

      
    </div>
  )
}

export default MainContainer
