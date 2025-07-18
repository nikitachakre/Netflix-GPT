import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const selectedMovie = useSelector((store) => store.movies.selectedMovie);
  if (!movies) return; // aka early return; (movies == null) same thing

  const mainMovie = selectedMovie ? selectedMovie : movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%]  md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground  movieId={id}/>
    </div>
  );
}

export default MainContainer;
