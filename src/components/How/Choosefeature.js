import React from 'react'
import Proof1 from "../../assets/proof1.png"
import Proof2 from "../../assets/proof2.png"
import Proof3 from "../../assets/proof3.png"
import Proof4 from "../../assets/proof4.png"
import Proof5 from "../../assets/proof5.png"
import Proof6 from "../../assets/proof6.png"
import Proofgroup from "../../assets/proofgroup.png";
import FeaturesCard from './FeaturesCard'

function Choosefeature() {
  return (
    <>
    <div className="divide flex flex-col lg:flex-row w-screens items-centers">
{/* 
        <div className="image mb-32 w-7/12 flex flex-col items-center self-center">
            <img src={Proofgroup} alt="" className='p-4  lg:flex hidden w-10/12'/>

            <img src={Proof1} alt="" className='py-2 w-11/12 sm:w-8/12 lg:hidden'/>
            <img src={Proof2} alt="" className='py-2 w-11/12 sm:w-8/12 lg:hidden'/>
            
            <img src={Proof3} alt="" className='py-2 w-11/12 sm:w-8/12 lg:hidden'/>
            <img src={Proof6} alt="" className='py-2 w-11/12 sm:w-8/12 lg:hidden'/>
            {/* <img src={Proof5} alt="" className='p-4 lg:hidden'/>
            <img src={Proof4} alt="" className='p-4 lg:hidden'/> 
            
        </div>
         */}
        <div className="features ">
            <FeaturesCard/>
        </div>
    </div>
    
    </>
  )
}

export default Choosefeature