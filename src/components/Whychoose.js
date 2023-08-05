import React from 'react'
import Circle1 from '../assets/circle1.svg' 
import Norug from '../assets/norug.svg' 
import Typography from '@mui/material/Typography';
import Choosefeature from './Whychoose/Choosefeature';

function Whychoose() {
  return (
<>
<div maxWidthd='xl' className='flex flex-col items-center  text-[#979797]  '>
<img src={Circle1} alt="" className='w-14 lg:auto animate-pulse mb-5' />
<img src={Norug} alt="" className='w-auto animate-pulse duration-200' />

            <h1 className='text-4xl  lg:text-5xl font-extrabold text-center mt-4 mb-4 text-[#E8E8E8] '>
            Why Choose FOMOBOT?
            </h1>

            <Typography variant='p' className='pb-14 subtitle lg:w-[590px] text-lg' sx={{ textAlign: 'center'}}>
            Do you want to stay ahead of the crypto game and avoid potential rugpulls and scams? FOMOBOT is here to revolutionize your crypto investment journey!

            </Typography>
<Choosefeature/>
</div>
</>
    )
}

export default Whychoose