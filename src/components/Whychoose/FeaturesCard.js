import React from "react";
import Modalthing from "../../assets/modalthing.svg";
import Typography from "@mui/material/Typography";

function FeaturesCard() {
  return (
    <div className="">
      <div className="features flex flex-col text-right lg:text-left justify-start items-end lg:items-start px-2 flex-1">
        <img src={Modalthing} alt="" className="mb-5 lg:mb-3 w-20 lg:w-auto" />

        <Typography
          variant="p"
          className="text-white pb-2 lg:pb-0 font-bold lg:max-w-[474px] text-lg lg:text-xl"
          sdx={{ textAlign: "center" }}
        >
          Seize Opportunities with Early Detection
        </Typography>
        <Typography
          variant="p"
          className="pb-14 subtitle lg:max-w-[474px] text-lg"
          sdx={{ textAlign: "center" }}
        >
          FOMOBOT leverages cutting-edge technology to detect early buy pressure
          and unusual buying activity in token contracts. Stay ahead of the
          crowd and discover promising projects before others do.
        </Typography>
      </div>

      <div className="features flex flex-col text-left justify-start items-start px-2">
        <img src={Modalthing} alt="" className="mb-5 lg:mb-3 w-20 lg:w-auto" />

        <Typography
          variant="p"
          className="text-white pb-2 lg:pb-0 font-bold lg:max-w-[474px] text-lg lg:text-xl"
          sdx={{ textAlign: "center" }}
        >
          Data-Driven Insights
        </Typography>
        <Typography
          variant="p"
          className="pb-14 subtitle lg:max-w-[474px] text-lg"
          sdx={{ textAlign: "center" }}
        >
          Our hit rate is impressively high, exceeding 75%, which surpasses
          other bots that merely replicate live pairs and call all launches.
        </Typography>
      </div>
      
      <div className="features flex flex-col text-right lg:text-left justify-start items-end lg:items-start px-2">
        <img src={Modalthing} alt="" className="mb-5 lg:mb-3 w-20 lg:w-auto" />

        <Typography
          variant="p"
          className="text-white pb-2 lg:pb-0 font-bold lg:max-w-[474px] text-lg lg:text-xl"
          sdx={{ textAlign: "center" }}
        >
          Constantly Evolving Algorithm
        </Typography>
        <Typography
          variant="p"
          className="pb-14 subtitle lg:max-w-[474px] text-lg"
          sdx={{ textAlign: "center" }}
        >
          Our algorithm is exceptionally selective, filtering out a remarkable
          95% of tokens.
        </Typography>
      </div>
    </div>
  );
}

export default FeaturesCard;
