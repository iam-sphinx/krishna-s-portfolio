import React from "react";
import Marquee from "react-fast-marquee";

const HeroCard = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute bottom-[6.75rem]">
        <Marquee>
          <img src="icons/infiniteScrollMain.svg" className="w-screen" />
        </Marquee>
      </div>

      <img
        src="icons/heroCard.svg"
        className=" relative z-10"
      />
    </div>
  );
};

export default HeroCard;
