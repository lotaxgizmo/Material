import React from 'react'
import Typography from "@mui/material/Typography";
import Modalthing from "../../assets/modalthing.svg";
import Proof from '../../assets/secondproof1.png';

const FeaturesFormat = ({ text1, text2 }) => {
    return (
        <div className="all mb-16d flex flex-col lg:flex-row ">


<div className="features flex flex-col text-left lg:text-left justify-start items-start lg:items-start px-2 flex-1 ">
            
            <Typography
                variant="p"
                className="text-white pb-2 lg:pb-0 font-bold lg:max-w-[474px] text-lg lg:text-xl"
                sdx={{ textAlign: "center" }}
            >
                {text1}
            </Typography>
            <Typography
                variant="p"
                className="pb-14 subtitle lg:max-w-[474px] text-lg"
                sdx={{ textAlign: "center" }}
            >
                {text2}
            </Typography>
        </div>
        </div>
    )
}

export default FeaturesFormat