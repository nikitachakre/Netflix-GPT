import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMoviesSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieInfo} = gpt;
  if(!movieNames) return null;
  
  return (
    <div className='p-4 mt-6 mx-2 text-white bg-black bg-opacity-90'>
      {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieInfo[index]}/>)}
     
    </div>
  )
}

export default GPTMoviesSuggestions;