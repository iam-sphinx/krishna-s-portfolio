import React from "react";
import GridCard from "./GridCard";

const GrowthCard = ({ title, position, role, period, location, liveLink }) => {
  return (
    <div
      className="rounded-md sm:w-[25.813rem] sm:h-[28.875rem] h-[20.4375rem] w-[18.27rem] overflow-hidden bg-[#eee7dc] sm:pt-[2.844rem] sm:pl-[0.875rem] sm:pr-[1.75rem] sm:pb-[2rem] pt-[2.0025rem] pl-[0.6194rem] pr-[1.2388rem]"
      style={{ backgroundImage: "url(icons/cardBG.svg)" }}
    >
      <div className="w-full h-full flex justify-between ">
        <div className="flex items-start">
          <h1
            className="font-light font-Eskell_Display sm:text-7xl text-[3rem] leading-[3.6rem] tracking-[1px] rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            {title}
          </h1>
          <div className=" flex flex-col gap-4 sm:mr-[1.594rem] sm:ml-[0.281rem] ml-[0.3181rem]">
            <div className="flex justify-center items-center">
              <img src="icons/dashLine.svg" className="" />
            </div>
            <h1
              className="font-GT_America_Trial font-medium sm:text-xl text-[0.875rem] leading-[1.05rem] text-[#C0AD6F] text-transparent bg-clip-text bg-gradient-to-b from-[#C0AD6F] to-[#B99E46] rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              {position}
            </h1>
            <div className="flex justify-center items-center">
              <img src="icons/dashLine.svg" className="" />
            </div>
          </div>
        </div>
        <div>
          <GridCard
            role={role}
            period={period}
            liveLink={liveLink}
            location={location}
          />
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
