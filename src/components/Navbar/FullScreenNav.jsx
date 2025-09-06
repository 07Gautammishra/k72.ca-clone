import React, { useContext, useRef } from 'react'
import navProject1 from "../../assets/navProject1.png";
import navProject2 from "../../assets/navProject2.png";
import blogue1 from "../../assets/blogue.png";
import blank from "../../assets/blank.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context/NavContext';
import { Link } from 'react-router-dom';


const FullScreenNav = () => {
    const stairParentRef = useRef(null)
    const fullScreenNav = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stair', {
            // delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.logoAndClose', {
            opacity: 1
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stair', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.logoAndClose', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])

    return (
        <div ref={fullScreenNav} className='fullscreennav h-screen z-50 w-screen text-white absolute overflow-hidden '>
            <div className='h-screen w-screen fixed '>
                <div ref={stairParentRef} className='h-full w-full '>
                    <div className='h-full w-full flex gap-0'>
                        <div className="stair border-none h-full w-1/5 bg-black"></div>
                        <div className="stair border-none h-full w-1/5 bg-black"></div>
                        <div className="stair border-none h-full w-1/5 bg-black"></div>
                        <div className="stair border-none h-full w-1/5 bg-black"></div>
                        <div className="stair border-none h-full w-1/5 bg-black"></div>
                    </div>
                </div>
            </div>

            <div className='relative opacity-0 logoAndClose' >
                {/* logo and close button */}
                <div className='h-30  w-full flex justify-between items-center top-10 object-center'>
                    <div className='w-32 ml-2 cursor-pointer '>
                        <Link to='/' >
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setNavOpen(false)} className='w-full' viewBox="0 0 103 44">
                            <path fill-rule="evenodd" fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                        </Link>
                    </div>
                    <div className='group h-32 w-32 max-[700px]:h-16 max-[700px]:w-16 mr-10 py-1 cursor-pointer relative overflow-hidden' onClick={() => setNavOpen(false)} ref={close}>
                        <div className='h-40 w-1 max-[700px]:h-20 origin-top -rotate-45 absolute bg-white group-hover:bg-[#D3FD50] '></div>
                        <div className='h-40 max-[700px]:h-20 w-1 origin-top rotate-45 right-0 bg-white group-hover:bg-[#D3FD50] absolute '></div>
                    </div>
                </div>
                {/* link div */}
                <div className='uppercase font-[font2] max-[990px]:pt-[20vh] text-center leading-[0.8]' id='allLink'>
                    {/* link for project page */}
                    <div className=' relative border-t-1 border-y-gray-300 pt-3 link origin-top'>
                        <h1 className='text-[8vw] '>projets</h1>
                        <Link to='/projects'>
                        <div onClick={()=>setNavOpen(false)} className='absolute movelink top-0 pt-3 bg-[#D3FD50] text-black flex h-full overflow-hidden'>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full  mb-3  object-cover shrink-0 rounded-full' src={navProject1} />
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3  object-cover shrink-0 rounded-full' src={navProject2} />
                            </div>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3  object-cover shrink-0 rounded-full' src={navProject1} />
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3  object-cover shrink-0 rounded-full' src={navProject2} />
                            </div>
                        </div>
                        </Link>
                    </div>
                    {/* link for agence page */}
                    <div className='relative border-t-1 border-y-gray-300 pt-3 link origin-top'>
                        <h1 className='text-[8vw] '>agence</h1>
                        <Link to='/agence'>
                        <div onClick={()=>setNavOpen(false)} className='absolute movelink top-0 pt-3 bg-[#D3FD50] text-black flex h-full overflow-hidden'>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour tout savoir</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={blank} />
                                <h2 className='whitespace-nowrap'>Pour tout savoir</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg" />
                            </div>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour tout savoir</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={blank} />
                                <h2 className='whitespace-nowrap'>Pour tout savoir</h2>
                                <img className='w-[18vw] h-full shrink-0 rounded-full' src='https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg' />
                            </div>
                        </div>
                        </Link>
                    </div>
                    {/* link for contact page */}
                    <div className='relative border-t-1 border-y-gray-300 pt-3 link origin-top'>
                        <h1 className='text-[8vw] '>contact</h1>
                        <div className='absolute movelink top-0 pt-3 bg-[#D3FD50] text-black flex h-full overflow-hidden'>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={navProject1} />
                                <h2 className='whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={navProject2} />
                            </div>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={navProject1} />
                                <h2 className='whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={navProject2} />
                            </div>
                        </div>
                    </div>
                    {/* link for blogue page */}
                    <div className='relative border-y-1 border-y-gray-300 pt-3 link origin-top overflow-hidden'>
                        <h1 className='text-[8vw] '>blogue</h1>
                        <div className='absolute movelink top-0 pt-3 bg-[#D3FD50] text-black flex h-full'>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={blogue1} />
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={navProject2} />
                            </div>
                            <div className='text-[8vw] moveX flex items-center'>
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={blogue1} />
                                <h2 className='whitespace-nowrap'>Pour tout vori</h2>
                                <img className='w-[18vw] h-full mb-3 shrink-0 rounded-full' src={navProject2} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FullScreenNav
