import { useState } from "react";
import Marquee from "react-fast-marquee";

const InfiniteScroll = ({array, direction, speed}) => {
    return (
    <>
      {/* Infinite Scroll Section*/}
      <div className="w-full h-auto relative">
        <Marquee
          autoFill={true}
          className="cursor-pointer"
          speed={35}
          direction={direction}
        >
          {array.map((item, index) => {
            return (
              <div
                key={index}
                className="ml-3 font-GT_America_Trial text-normal text-xl text-[#47474D] flex gap-3"
              >
                {item} <img src="icons/dimond.svg" />{" "}
              </div>
            );
          })}
        </Marquee>

        {/* left blur */}
        <div className="w-[157px] h-full bg-gradient-to-r from-[#00030A] z-10 to-transparent absolute -left-1 top-0"></div>

        {/* Right blur */}
        <div className="w-[157px] h-full bg-gradient-to-r from-transparent z-10 to-[#00030A] absolute -right-1 top-0"></div>

      </div>
    </>
  );
};

export default InfiniteScroll;
