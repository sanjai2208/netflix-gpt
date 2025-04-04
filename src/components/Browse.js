import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies copy";
import useTvSeries from "../hooks/useTvSeries";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "../hooks/useTopRated";
import GptPage from "./GptPage";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGpt = useSelector(store=>store?.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTvSeries()
  useTopRated();

  return (
    <div className="">
      <Header />
      {showGpt ?  <GptPage/> : <> <MainContainer />
        <SecondaryContainer /> </> }
      
    </div>
  );
};

export default Browse;
