import React from 'react'
import { IMG_CDN_URL } from "../utils/constants"
import { addSelectedMovie} from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';

const MovieCard = ({posterPath, movie}) => {
  const dispatch = useDispatch();
  if(!posterPath) return null;
  
  const handlePlayClick = () => {
    dispatch(addSelectedMovie(movie));
  }

  
  return (
    <div className='w-48 pl-3 hover:w-[200px] transition-all duration-700 relative' onClick={handlePlayClick}>
        <img className='rounded-sm cursor-pointer' alt='MovieCard' src={ IMG_CDN_URL + posterPath}>
        </img>
          <i className="fa fa-play px-2 py-1 absolute text-white bg-black opacity-80 rounded-full text-sm top-32 left-24 cursor-pointer" aria-hidden="true" ></i>
    </div>
  )
}

export default MovieCard;