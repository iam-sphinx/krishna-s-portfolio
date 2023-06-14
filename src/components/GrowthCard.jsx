import React from "react";
import GridCard from "./GridCard";

const GrowthCard = ({title, position, role, period, location,liveLink}) => {
  return (
    <div
      className="rounded-md w-[25.813rem] h-[28.875rem] overflow-hidden bg-[#eee7dc] pt-[2.844rem] pl-[0.875rem] pr-[1.75rem] pb-[2rem]"
      style={{ backgroundImage: "url(icons/cardBG.svg)" }}
    >
      <div className="w-full h-full flex">
        <div>
          <h1
            className="font-light font-Eskell_Display text-7xl tracking-[1px] rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            {title}
          </h1>
        </div>
        <div className=" flex flex-col gap-4 mr-[1.594rem] ml-[0.281rem]">
          <div className="flex justify-center items-center">
            <img src="icons/dashLine.svg" className="" />
          </div>
          <h1
            className="font-GT_America_Trial font-medium text-xl text-[#C0AD6F] text-transparent bg-clip-text bg-gradient-to-b from-[#C0AD6F] to-[#B99E46] rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            {position}
          </h1>
          <div className="flex justify-center items-center">
            <img src="icons/dashLine.svg" className="" />
          </div>
        </div>
        <div>
          <GridCard role={role} period={period} liveLink={liveLink} location={location}/>
        </div>
      </div>
    </div>
  );
};

export default GrowthCard;
