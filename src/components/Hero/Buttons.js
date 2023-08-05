import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';

function Buttons() {
  return (
    <div className='flex flex-col lg:flex-row'>
        
<button type="button" className='m-2 p-2 lg:px-10 lg:py-3 lg:font-medium text-xld border rounded-xl bg-[#E8E8E8] flex justify-center text-black'>
    <TelegramIcon/>
Telegram
</button>
<button type="button" className='m-2 p-2 lg:px-10 lg:py-3 lg:font-medium text-xld border border-white rounded-xl bg-black'>
Buy Now
</button>
        
    </div>
  )
}

export default Buttons