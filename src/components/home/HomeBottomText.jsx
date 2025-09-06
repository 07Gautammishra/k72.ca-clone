import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className=' font-[font2] flex items-center justify-center gap-5'>
      <div className="uppercase border-3 border-white rounded-full px-5 flex items-center leading-[6.3vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link to='/projects/' className='text-[6.5vw] mt-3'>Projets</Link>
      </div>
      <div className="uppercase border-3 border-white rounded-full px-5 flex items-center leading-[6.3vw] hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link to='/agence' className='text-[6.5vw] mt-3'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
