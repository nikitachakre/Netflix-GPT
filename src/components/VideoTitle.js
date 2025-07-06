import React from 'react'

const VideoTitle = ({ title, overview}) => {
  return (
    <div className='pt-[10%] md:pt-[17%] px-[2%] md:px-[5%] absolute z-10 w-full h-full aspect-video bg-gradient-to-r from-black '>
      <div className='pt-12'>
      <h1 className='text-lg md:text-3xl font-bold p-2 w-1/3 text-white'>{title}</h1>
      <p className='hidden md:inline-block text-sm p-2 w-1/4 text-white'>{overview}</p>
      </div>
      <div className='-mt-3 md:-mt-0'>
        <button className='px-3 md:px-4  py-1 md:py-2 m-2 text-sm font-semibold bg-white text-black rounded-sm hover:opacity-80 '> <i className="fa fa-play p-1" aria-hidden="true"></i>Play</button>
        <button className='hidden md:inline-block px-4 py-2 text-sm font-semibold bg-[#777777] text-white rounded-sm bg-opacity-95'> <i className="fa fa-info-circle p-1" aria-hidden="true"></i>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;