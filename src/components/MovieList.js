import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className=" py-5 max-sm:py-1 max-sm:px-0 px-4 text-white">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-2">{title}</h1>
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex flex-nowrap space-x-4 sm:space-x-6 md:space-x-8">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard moviesList={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
