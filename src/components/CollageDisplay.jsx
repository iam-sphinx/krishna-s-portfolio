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
    <div className="h-[47.063rem] w-full relative flex justify-center items-center">
      <div className="flex flex-col gap-[1.875rem] w-full ">
        <InfiniteScroll array={skills} />
        <InfiniteScroll array={skills} />
        <InfiniteScroll array={skills} />
        <InfiniteScroll array={skills} />
      </div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20  ">
        <div className="h-auto w-auto relative inline-block ">
          <img src="icons/photoFrame.svg" />
          <img
            src="icons/photo1.svg"
            className=" absolute left-[-91.78px] top-[272.07px]"
          />
          <img
            src="icons/photo2.svg"
            className="absolute right-[-135.49px] top-[105.99px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CollageDisplay;
