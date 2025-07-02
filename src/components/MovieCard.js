import React from 'react'
import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pl-3 hover:w-52 transition-all duration-700 '>
        <img className='rounded-sm cursor-pointer' alt='MovieCard' src={ IMG_CDN_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard;