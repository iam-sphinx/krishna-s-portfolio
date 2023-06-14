import React from "react";

const GridCard = ({role, period, liveLink, location}) => {
  return (
    <div className="inline-block">
      <img src="icons/Grid.svg" />
      <div className="h-auto w-full border border-[#2C2C2D]">
        <div className="h-[3.75rem] flex  items-center pl-4 border-b border-black">
          <h1 className="font-Eskell_Display font-light text-2xl text-[#00030A]">
           {role}
          </h1>
        </div>
        <div className="h-[3.313rem] pl-4 flex  items-center border-b border-black">
          <div className="flex gap-[1.125rem] items-center">
            <h1 className="font-GT_America_Trial font-normal text-xs text-[#88939E]">
              Period:
            </h1>
            <h1 className="font-GT_America_Trial font-normal text-sm text-[#00030A]">
              {period}
            </h1>
          </div>
        </div>
        <div className="h-[3.375rem] pl-4 flex items-center border-b border-black">
          <div className="flex gap-[0.438rem] items-center">
            <h1 className="font-GT_America_Trial font-normal text-xs text-[#88939E]">
              Location:
            </h1>
            <h1 className="font-GT_America_Trial font-normal text-sm text-[#00030A]">
              {location}
            </h1>
          </div>
        </div>
        <div className="h-[3.188rem] pl-4 flex items-center">
          <div className="flex gap-[0.75rem] items-center">
            <h1 className="font-GT_America_Trial font-normal text-xs text-[#88939E]">
              Product:
            </h1>

            <div className="flex gap-[0.961rem] items-center cursor-pointer">
              <h1 className="font-GT_America_Trial font-normal text-sm text-[#00030A] hover:underline cursor-pointer">
                See live
              </h1>
              <div>
                <img src="icons/GreenArrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
