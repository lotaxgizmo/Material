import React from 'react'
import Bannerformat from './Start/Bannerformat';

function Banner() {
    return (
        <div className='h-[1000px] lg:h-60 mt-0 lg:mt-10'>

<div className='text-white stretch-element border-0 lg:border-y-[0.1px] border-[#7a7a7a] flex flex-col lg:flex-row items-center justify-evenly align-middle  '>
            <Bannerformat text1={"1748+"} text2={"Every 48 Hours"} />

            <div className="hidden lg:flex items-center nohorizontal-line h-52 w-1c pdb-10  "></div>
            <Bannerformat text1={"10-500x"} text2={"Plays"} />

            <div className="hidden lg:flex items-center nohorizontal-line h-52 w-1c pdb-10  "></div>
            <Bannerformat text1={"75%+"} text2={"Accuracy"} />

            <div className="hidden lg:flex items-center nohorizontal-line h-52 w-1c pdb-10  "></div>
            <Bannerformat text1={"100k+"} text2={"Tokens Scanned"} />
        </div>

        </div>
    )
}

export default Banner