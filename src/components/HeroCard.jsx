import React from "react";
import Marquee from "react-fast-marquee";

const HeroCard = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute bottom-[6.75rem] w-full hidden sm:block">
        <Marquee>
          <img src="icons/scroll.svg" className="w-[100vw]" />
        </Marquee>
      </div>

      <div className="sm:hidden block absolute bottom-[5.75rem]">
      <Marquee>
          <img src="icons/infiniteScrollMAIN.svg" className="w-[100vw]" />
        </Marquee>
      </div>
      <div  className=" relative z-10 sm:w-auto sm:h-auto w-[15.7825rem] h-[27.4375rem]">
      <img src="icons/heroCard.svg" />

      </div>
    </div>
  );
};

export default HeroCard;
