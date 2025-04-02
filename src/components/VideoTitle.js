import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute pt-[20%] w-screen aspect-video  max-h-[700px] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className='pt-6 text-[9px] w-80 sm:text-[12px] md:text-sm lg:text-base'>{overview}</p>
      <div className='mt-4'>
        <button className=" bg-white text-black border-1 p-2 px-5 text-lg font-bold hover:scale-105 duration-200 rounded-lg hover:opacity-70">▶Play</button>
        <button className=" ml-2 bg-gray-900 text-white border-1 p-2 px-4 text-lg font-bold hover:scale-105 duration-200 ease-in rounded-lg bg-opacity-70">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
