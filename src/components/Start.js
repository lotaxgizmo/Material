import React from 'react'
import Circle3 from '../assets/circle3.svg'
import Ourmodel from '../assets/ourmodel.svg'
import Ourmodelmobile from '../assets/ourmodelmobile.svg'
import Typography from '@mui/material/Typography';  
import Choosefeature from './Start/Choosefeature';
import Blur2 from '../assets/blur2.svg' 

function Start() {
  return (
    <>
  <div maxWidthd='xl' className='relative flex flex-col items-center  text-[#979797]  '>
        <img src={Circle3} alt="" className='w-14 lg:auto animate-pulse mb-5' />
        <img src={Ourmodel} alt="" className='w-auto animate-pulse duration-200 lg:flex hidden' />
        <img src={Ourmodelmobile} alt="" className='w-auto animate-pulse duration-200 flex lg:hidden mb-10' />

        <h2 className='text-4xl  lg:text-5xl font-extrabold text-center mt-4 mb-4 text-[#E8E8E8] '>
        Start Your FOMO<span className='moving-gradient-text'>BOT Journey Today</span>
        </h2>

        
        <div className='self-start'>
        <Choosefeature />
        </div>
        
        <p variant='p' className='pb-8 pt-40 subtitle text-center text-sm font-medium' sx={{ fontSize: 'h9.fontSize', textAlign: 'center' }}>
            FOMOBOT - YOUR GATEWAY TO SMART CRYPTO INVESTING
        </p>
        <div className="backblur absolute -z-10  transition-fall animate-pulse1 !duratidon-500
    lg:-translate-x-96 lg:-translate-y-36 -translate-x-20q translate-y-64 w-auto
    ">
            <img src={Blur2} alt="" />
        </div> 
        <div className="backblur absolute -z-10  transition-fall animate-pulse1 !duratidon-500
    lg:-translate-x-96 lg:-translate-y-36 -translate-x-20q translate-y-64 w-auto
    ">
            <img src={Blur2} alt="" />
        </div> 
    </div> 


</>
  )
}

export default Start