import React, { useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log(trailerVideo);

  useMovieTrailer(movieId);
  // if (!trailerVideo) return null;

  return (
    <div className="relative w-full h-[100vh] aspect-video ">
      <iframe
        className=" absolute w-full h-full top-0 left-0 "
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&showinfo=0"} //controls=0-Play/pause bar hatata hai
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  );
};

export default VideoBackground;
