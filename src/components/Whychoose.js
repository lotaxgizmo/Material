import React from 'react'
import Circle1 from '../assets/circle1.svg' 
import Norug from '../assets/norug.svg' 

function Whychoose() {
  return (
<>
<div maxWidthd='xl' className='flex flex-col items-center  text-[#E8E8E8]  '>
<img src={Circle1} alt="" className='w-14 lg:auto animate-pulse mb-5' />
<img src={Norug} alt="" className='w-auto animate-pulse duration-200' />

<h1 className='text-6xl  xtext-9xl sm:text-8xl lg:text-9xl font-extrabold text-center mt-32 mb-10'>
WHY CHOOSE  FOMOBOT?
            </h1>

</div>
</>
    )
}

export default Whychoose