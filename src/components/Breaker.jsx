import React from "react";

const Breaker = () => {
  return (
    <div className="absolute w-full px-6">

    <div className="w-full  h-0 border border-[#343a41] ">
      <div className="w-[24.1px] h-[1.6px]  absolute left-0 bottom-0 bg-gradient-to-r from-transparent to-[#343a41] z-10"></div>
      <div className="w-[24.1px] h-[1.6px]  absolute right-0 bottom-0 bg-gradient-to-r to-transparent from-[#343a41] z-10"></div>
    </div>
    </div>
  );
};

export default Breaker;
