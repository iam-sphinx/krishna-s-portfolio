import React from "react";
import Breaker from "./Breaker";

const Navbar = () => {
  return (
    <div>
      <div className="w-full px-6 h-[90px] flex items-center justify-between">
        <div className="flex gap-[14px]">
          {/* Profile Info */}
          <div className="w-[37px] h-[37px] md:w-[47px] md:h-[47px]">

          <img src="icons/profile.svg" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-white font-normal font-GT_America_Trial text-base">
              Krishna <span className="font-Mangal">खानिकर</span>
            </h1>
            <h1 className="font-GT_America_Trial font-normal text-xs text-[#88939E]">
              My digital space on the cloud
            </h1>
          </div>
        </div>

        {/* Hamburger Menu */}

        <div className="cursor-pointer">
          <img src="icons/hamburger.svg" />
        </div>
      </div>
      <div className="relative">
        <Breaker />
      </div>
    </div>
  );
};

export default Navbar;
