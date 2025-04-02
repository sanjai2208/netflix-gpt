
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
  //fetch trailer video
  useMovieTrailer(movieId)

  return (
    <div className="">
      <iframe
      className="w-screen aspect-video max-h-[700px]"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1&playlist="+trailerVideo?.key+"&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
