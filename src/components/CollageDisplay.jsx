import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const CollageDisplay = () => {
  const skills = [
    "Frontend developer",
    "Next.js",
    "Figma",
    "React.js",
    "TailwindCSS",
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
        <div className="h-auto w-auto relative inline-block ">
          <img src="icons/photoFrame.svg" />
          <div className="absolute sm:left-[-91.78px] sm:top-[272.07px] sm:w-auto w-[14.4775rem]">
            <img src="icons/photo1.svg" className="hidden sm:block" />
          </div>
          <div className="absolute sm:right-[-135.49px] sm:top-[105.99px] sm:w-auto w-[14.4775rem]">
            <img src="icons/photo2.svg" className="hidden sm:block" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CollageDisplay;
