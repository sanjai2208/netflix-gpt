import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;

  return (
    <div className="py-5 px-4 text-white">
      <h1 className="text-3xl font-bold py-2 ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex">
          {movies.map((list) => (
            <MovieCard key={list.id} posterPath={list?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
