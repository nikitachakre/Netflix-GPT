import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="pb-4 px-4 ">
        <h1 className="font-medium text-white text-2xl py-2 px-3">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies?.length > 0 &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
              
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
