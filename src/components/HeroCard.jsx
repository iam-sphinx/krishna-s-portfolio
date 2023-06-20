import React from "react";
import Marquee from "react-fast-marquee";

const HeroCard = () => {
  return (
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute bottom-[6.75rem] w-full hidden sm:block">
          <Marquee>
            <img src="icons/scroll.png" className="w-[100vw]" />
          </Marquee>
        </div>

        <div className="sm:hidden block absolute bottom-[5.75rem]">
          <Marquee>
            <img src="icons/infiniteScrollMAIN.svg" className="w-[100vw]" />
          </Marquee>
        </div>
        <div className=" relative z-10 sm:w-[24.375rem] sm:h-[42.375rem] w-[15.7825rem] h-[27.4375rem]">
          <img src="icons/heroCard.png" />
        </div>
      </div>
  );
};

export default HeroCard;
