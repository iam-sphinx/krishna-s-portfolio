import React from "react";
import Marquee from "react-fast-marquee";
import CustomAnimation from "../utils/customAnimation";

const HeroCard = () => {
  return (
    <CustomAnimation>
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute bottom-[6.75rem] w-full hidden sm:block">
          <Marquee direction="right">
            <img
              src="icons/scroll1.png"
              className="w-[94.75rem] h-[11.8125rem]"
            />
          </Marquee>
        </div>

        <div className="sm:hidden block absolute bottom-[5.75rem] w-full">
          <Marquee direction="right">
            <img
              src="icons/infiniteScrollMAIN.png"
              className="w-[24.3625rem] h-[5.875rem]"
            />
          </Marquee>
        </div>
        <div className=" relative z-10 sm:w-[24.375rem] sm:h-[42.375rem] w-[15.7825rem] h-[27.4375rem]">
          <img src="icons/heroCard1.png" />
        </div>
      </div>
    </CustomAnimation>
  );
};

export default HeroCard;
