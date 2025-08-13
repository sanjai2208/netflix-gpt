import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video max-h-[1300px]"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playlist=${trailerVideo.key}&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
