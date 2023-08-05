import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';

function Buttons() {
  return (
    <div className='flex flex-col lg:flex-row'>
        
<button type="button" className='m-2 p-2 py-4 text-xl border rounded-xl bg-white flex justify-center text-black'>
    <TelegramIcon/>
Telegram
</button>
<button type="button" className='m-2 p-2 py-4 text-xl border border-white rounded-xl bg-black'>
Buy Now
</button>
        
    </div>
  )
}

export default Buttons