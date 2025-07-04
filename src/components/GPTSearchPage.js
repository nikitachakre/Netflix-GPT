import { BACKGROUNDIMAGE_URL} from "../utils/constants";
import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMoviesSuggestions from './GPTMoviesSuggestions';

const GPTSearchPage = () => {
  return (
    <div>
      <div className="relative">
        <img
          className=" hidden md:block absolute -z-20"
          src={BACKGROUNDIMAGE_URL}
          alt="Background-Image"
        ></img>
      </div>
      <GPTSearchBar/>
      <GPTMoviesSuggestions/>
    </div>
    
  )
}

export default GPTSearchPage;