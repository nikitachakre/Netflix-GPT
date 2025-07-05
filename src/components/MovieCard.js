import React from 'react'
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  
  return (
    <div className='w-48 pl-3 hover:w-[200px] transition-all duration-700 '>
        <img className='rounded-sm cursor-pointer' alt='MovieCard' src={ IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard;