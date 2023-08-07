import React from 'react'
import Circle2 from '../assets/circle2.svg'
import Buywith from '../assets/buywith.svg'
import Typography from '@mui/material/Typography';
import Choosefeature from './How/Choosefeature';
import Blur2 from '../assets/blur2.svg'

function How() {
    return (
        <>


            <div maxWidthd='xl' className='relative flex flex-col items-center  text-[#979797]  '>
                <img src={Circle2} alt="" className='w-14 lg:auto animate-pulse mb-5' />
                <img src={Buywith} alt="" className='w-auto animate-pulse duration-200' />

                <h2 className='text-4xl  lg:text-5xl font-extrabold text-center mt-4 mb-4 text-[#E8E8E8] '>
                    How FOMO<span className='moving-gradient-text'>BOT Works</span>
                </h2>

                <Typography variant='p' className='pb-14 subtitle lg:w-[590px] text-lg' sx={{ textAlign: 'center' }}>
                    Don't let <span className='text-[#00D9DA]'>FOMO</span> (<span className='text-[#00D9DA]'>Fear of Missing Out</span>) drive your investment decisions. With <span className='text-[#00D9DA]'>FOMOBOT</span>, you can invest with confidence, knowing that you have a reliable tool to guide you towards safe and profitable opportunities.
                </Typography>
                <Choosefeature />
                <p variant='p' className='pb-8 pt-20 subtitle text-center text-sm font-medium' sx={{ fontSize: 'h9.fontSize', textAlign: 'center' }}>
                    WE USE STATISTICAL METHODS TO CAPTURE ANY DEVIATION
                </p>
                {/* <div className="backblur absolute -z-10  transition-fall animate-pulse1 !duratidon-500
            lg:-translate-x-56s lg:-translate-y-36 -translate-x-20q translate-y-64 w-auto
            ">
                    <img src={Blur2} alt="" />
                </div> */}
            </div>


        </>
    )
}

export default How