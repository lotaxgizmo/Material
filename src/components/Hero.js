import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Buttons from './Hero/Buttons';
import Amobile from '../assets/alertmobile.svg'

function Hero() {
  return (
    <>
    {/* sx={{ width: '100%', maxWidth: 500 }} */}
         
          <div maxWidthd='xl' className='bg-green-300s flex flex-col justify-center align-middle text-white'>
            <h1 className='text-5xl sm:text-7xl lg:text-9xl font-extrabold text-center mt-24 mb-8'>
              FOMOBOT
            </h1>
            <Typography variant='p' className='pb-8 subtitle' sx={{fontSize: 'h6.fontSize', textAlign: 'center'}}>
            Introducing the latest cutting edge technology to detect early buy patterns & FOMO.
            <br/>
Be one of the first to snipe promising projects
            </Typography>
           <Buttons/>

         <a href="#" className='transition-all translate-x-0 hover:-translate-y-5'>
         <img src={Amobile} alt="" className='my-7'/>
         </a>
         <p variant='p' className='pb-8 pt-20 subtitle text-center text-sm font-medium' sx={{fontSize: 'h9.fontSize', textAlign: 'center'}}>
         SINCE OUR INCEPTION, WE'VE SUCCESSFULLY CALLED X200, X300, AND EVEN X500 PLAYS, CONTINUOUSLY IMPROVING EACH DAY.
            </p>
          </div> 


</>
  )
}

export default Hero