import React from 'react'
import Typography from "@mui/material/Typography";

const Bannerformat = ({ text1, text2 }) => {
    return (

        <div className='flex flex-col  items-center mt-10'>
            <h2 className='text-7xl  lg:text-6xl font-extrabold text-center mt-4 mb-4 text-[#E8E8E8] '>
                {text1}
            </h2>
            <Typography
                variant="p"
                className="text-white pb-10 lg:pb-0 font-light lg:max-w-[474px] text-2xl lg:text-xl"
                sdx={{ textAlign: "center" }}
            >
                {text2}
            </Typography>

            <div className="horizontal-line w-52 h-1 pb-10 lg:hidden"></div>
        </div>
        
    )
}

export default Bannerformat