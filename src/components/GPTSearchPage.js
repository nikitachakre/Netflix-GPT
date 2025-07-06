import { BACKGROUNDIMAGE_URL} from "../utils/constants";
import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMoviesSuggestions from './GPTMoviesSuggestions';

const GPTSearchPage = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="fixed -z-20 h-screen md:h-auto object-cover"
          src={BACKGROUNDIMAGE_URL}
          alt="Background-Image"
        ></img>
          <GPTSearchBar/>
          <GPTMoviesSuggestions/>
      </div>
      
    </div>
    
  )
}

export default GPTSearchPage;