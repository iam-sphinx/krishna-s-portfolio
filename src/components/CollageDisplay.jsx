import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import CustomAnimation from "../utils/customAnimation";

const CollageDisplay = () => {
  const skills = [
    "Frontend developer",
    "Product Designer",
    "Storyteller",
    "Problem Solver",
    "Passionate"
  ];
  return (

      <div className="sm:h-[47.063rem] h-auto w-full relative flex justify-center items-center">
        <div className="flex flex-col sm:gap-[1.875rem] gap-[0.8612rem] w-full ">
          <InfiniteScroll array={skills} />
          <InfiniteScroll array={skills} direction="right" />
          <InfiniteScroll array={skills} />
          <InfiniteScroll array={skills} direction="right" />
        </div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 ">
          <div className="hidden sm:block">
            <img src="icons/about hero.png"  />
          </div>
          <div className="w-[21.9288rem] block sm:hidden">
            <img src="icons/about hero2.png"  />
          </div>
        </div>
      </div>

  );
};

export default CollageDisplay;
