import React from "react";

const Header = () => {
  return (
    <div className="h-[44px] w-full bg-[#3E48A4] flex justify-center items-center ">
      <button className="font-GT_America_Trial font-medium text-sm text-white flex  items-center gap-[13.2px] ">
        <span className="hidden md:inline">
          Introducing Pilcrow, a newsletter dedicated to designers and makers
        </span>
        <span className="md:hidden">Introducing Pilcrow</span>
        <img src="icons/arrow.svg" alt=""/>
      </button>
    </div>
  );
};

export default Header;
