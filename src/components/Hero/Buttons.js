import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import ButtonBlur from '../../assets/ButtonBlur.svg'

function Buttons() {
  return (
    <div className='flex flex-col lg:flex-row relative'>
        
<button type="button" className='m-2 p-2 lg:px-10 lg:py-3 lg:font-medium text-xld border rounded-xl bg-[#E8E8E8] flex justify-center text-black'>
    <TelegramIcon/>
Telegram
</button>

<div className="button  flex w-screden justify-center align-middle items-center">
<img src={ButtonBlur} alt="" className='animate-pulse1 absolute -z-10 w-[500px] h-[300px] lg:w-[262px] lg:h-[126px]'/>
<button type="button" className='w-full m-2 p-2 lg:px-10 lg:py-3 lg:font-medium text-xld border border-white rounded-xl bg-black'>
Buy Now
</button>
</div>
        
    </div>
  )
}

export default Buttons