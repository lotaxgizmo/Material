import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Buttons from './Hero/Buttons';
import Amobile from '../assets/alertmobile.svg'
import Adesktop from '../assets/alertdesktop.svg'
import Blur1 from '../assets/blur1.svg'

function Hero() {
  return (
    <>
    {/* sx={{ width: '100%', maxWidth: 500 }} */}
         
          <div maxWidthd='xl' className='relative backgroundhalo flex flex-col justify-center align-middle text-[#E8E8E8] lg:items-center mb-28'>
            <h1 className='text-6xl  xtext-9xl sm:text-8xl lg:text-9xl font-extrabold text-center mt-32 mb-10'>
              FOMOBOT
            </h1>
            <Typography variant='p' className='pb-14 subtitle' sx={{fontSize: 'h6.fontSize', textAlign: 'center'}}>
            Introducing the latest cutting edge technology to detect early buy patterns & FOMO.
            <br/>
Be one of the first to snipe promising projects
            </Typography>
           <Buttons/>

         <a href="#" className='transition-all duration-500 translate-x-0 hover:-translate-y-2 self-center'>
         <img src={Amobile} alt="" className='my-7 flex lg:hidden'/>
         <img src={Adesktop} alt="" className='my-7 lg:flex hidden'/>
         </a>
         <p variant='p' className='pb-8 pt-20 subtitle text-center text-sm font-medium' sx={{fontSize: 'h9.fontSize', textAlign: 'center'}}>
         SINCE OUR INCEPTION, WE'VE SUCCESSFULLY CALLED X200, X300, AND EVEN X500 PLAYS, CONTINUOUSLY IMPROVING EACH DAY.
            </p>


            <div className="backblur absolute -z-10  transition-fall animate-pulse1 !duratidon-500
            lg:-translate-x-56 lg:-translate-y-56 -translate-x-20 -translate-y-52
            ">
<img src={Blur1} alt="" />
            </div>
          </div> 


</>
  )
}

export default Hero