import React from 'react'
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import MovieDetail from './MovieDetail';

const MovieInfoPage = () => {
    const movieInfo = useSelector(store => store.movies.movieDetail)
    // console.log(movieInfo)
  return (
    <div className="bg-black h-screen">
        <VideoTitle title={movieInfo?.original_title} overview={movieInfo?.overview}/>
        <VideoBackground movieId={movieInfo?.id}/>
        <MovieDetail movieId={movieInfo?.id}/>
    </div>
  )
}

export default MovieInfoPage;
