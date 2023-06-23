import React from "react";

const GridCard = ({ role, type, liveLink, location }) => {
  const handleClick = () => {
    if (liveLink) {
      window.location.href = liveLink;
    }
  };

  
  return (
    <div className="inline-block">
      <img src="icons/Grid.svg" className="hidden sm:block" />
      <img src="icons/smallGrid.svg" className="block sm:hidden" />
      <div className="h-auto w-full border border-[#2C2C2D]">
        <div className="sm:h-[3.75rem] h-[2.6544rem] flex  items-center pl-4 border-b border-black">
          <h1 className="font-Eskell_Display font-light sm:text-2xl text-[1rem] leading-[1rem] text-[#00030A]">
            {role}
          </h1>
        </div>
        <div className="sm:h-[3.313rem] h-[2.3444rem] sm:pl-4 pl-[0.7075rem] flex  items-center border-b border-black">
          <div className="flex sm:gap-[1.125rem] gap-[0.7963rem] items-center">
            <h1 className="font-GT_America_Trial font-normal sm:text-xs text-[0.625rem] leading-[1.4156rem] text-[#88939E]">
              Type:
            </h1>
            <h1 className="font-GT_America_Trial font-normal sm:text-sm text-[0.625rem] leading-[1.4156rem] text-[#00030A]">
              {type}
            </h1>
          </div>
        </div>
        <div className="sm:h-[3.375rem] h-[2.3887rem] sm:pl-4 pl-[0.7075rem] flex items-center border-b border-black">
          <div className="flex sm:gap-[0.438rem] gap-[0.3094rem] items-center">
            <h1 className="font-GT_America_Trial font-normal text-xs text-[#88939E]">
              Location:
            </h1>
            <h1 className="font-GT_America_Trial font-normal sm:text-sm text-[0.625rem] leading-[1.4156rem] text-[#00030A]">
              {location}
            </h1>
          </div>
        </div>
        <div className="sm:h-[3.188rem] h-[2.2563rem] sm:pl-4 pl-[0.7075rem] flex items-center">
          <div className="flex sm:gap-[0.75rem] gap-[0.5306rem] items-center">
            <h1 className="font-GT_America_Trial font-normal text-xs text-[#88939E]">
              Product:
            </h1>

            <div
              className="flex gap-[0.961rem] items-center cursor-pointer"
              onClick={() => handleClick()}
            >
              <h1 className="font-GT_America_Trial font-normal sm:text-sm text-[0.625rem] leading-[1.4156rem] text-[#00030A]">
                See live
              </h1>
              <div className="w-[7.96px] h-[7.96px] sm:h-auto sm:w-auto">
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
