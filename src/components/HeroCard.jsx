import React from "react";
import Marquee from "react-fast-marquee";

const HeroCard = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute bottom-[6.75rem] w-full">
        <Marquee>
          <img src="icons/scroll.svg" className="w-[100vw]" />
        </Marquee>
      </div>

      <img src="icons/heroCard.svg" className=" relative z-10" />
    </div>
  );
};

export default HeroCard;
