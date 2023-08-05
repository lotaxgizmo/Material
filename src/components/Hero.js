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
          </div> 

         <a href="#" className='transition-all translate-x-10 hover:translate-x-5'>
         <img src={Amobile} alt="" className='my-7'/>
         </a>


</>
  )
}

export default Hero