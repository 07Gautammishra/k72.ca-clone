import React from 'react'
import heroVideo from "../../assets/hero.mp4"
const HomeVideo = () => {
  return (
    <div className='h-full w-full'>
      <video src={heroVideo} autoPlay muted loop className='h-full w-full object-cover'></video>
    </div>
  )
}

export default HomeVideo
