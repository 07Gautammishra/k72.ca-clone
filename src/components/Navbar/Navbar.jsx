import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/NavContext';

const Navbar = ({logoColor= "white"}) => {
  const navGreenRef = useRef(null);
  const muneref1 = useRef(null);
  const muneref2 = useRef(null);
  const handleMOveEnter=()=>{
    navGreenRef.current.style.height="100%"
    muneref1.current.style.background="black"
    muneref2.current.style.background="black"
    
  }
  const handleMOveLeave=()=>{
    navGreenRef.current.style.height="0%"
    muneref1.current.style.background="rgb(242, 242, 242)"
    muneref2.current.style.background="rgb(242, 242, 242)"
  }

  const [navOpen, setNavOpen]= useContext(NavbarContext)
  
  
  return (
    <div className='fixed top-0 bg-transparent flex w-full  justify-between z-4 items-start'>
      <div className='p-3 w-32 '>
        <Link to='/' >
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 103 44">
                      <path  fill={logoColor} d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
        </Link>
      </div>
      <div className="relative bg-black h-14 w-[16vw] min-w-[60px]"onClick={()=>setNavOpen(true)} onMouseOver={handleMOveEnter} onMouseLeave={handleMOveLeave}>
        <div ref={navGreenRef} className="bg-[#D3FD50] absolute h-0 top-0 w-full transition-all"></div>
        <div className="h-full relative w-full flex items-end justify-center flex-col gap-3">
          <div className='z-10'>
          <div ref={muneref1} className='h-[2px] w-[50px] max-[500px]:w-[30px] bg-gray-300 z-10'></div>
          <div ref={muneref2} className='h-[2px] w-[30px] max-[500px]:w-[15px]  max-[500px]:ml-[15px] mt-[5px] ml-[20px] bg-gray-300 z-10'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
