import React from 'react'
import Proof1 from "../../assets/proof1.png"
import Proof2 from "../../assets/proof2.png"
import Proof3 from "../../assets/proof3.png"
import Proof4 from "../../assets/proof4.png"
import Proof5 from "../../assets/proof5.png"
import Proof6 from "../../assets/proof6.png"

function Choosefeature() {
  return (
    <>
    <div className="divide flex flex-row">

        <div className="image mb-10">
            <img src={Proof1} alt="" className='p-4'/>
            <img src={Proof2} alt="" className='p-4'/>
            
            <img src={Proof3} alt="" className='p-4 lg:hidden'/>
            <img src={Proof6} alt="" className='p-4 lg:hidden'/>
            {/* <img src={Proof5} alt="" className='p-4 lg:hidden'/>
            <img src={Proof4} alt="" className='p-4 lg:hidden'/> */}
            
        </div>
        <div className="features"></div>
    </div>
    
    </>
  )
}

export default Choosefeature