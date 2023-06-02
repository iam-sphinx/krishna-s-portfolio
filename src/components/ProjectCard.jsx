import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="w-full h-[20.875rem] bg-[#0D0F13] relative mb-[3rem] flex justify-between border border-[#29333C] px-[0.313rem]">
      {/* sideheading */}
      <div
        className="absolute top-[0.531rem] w-[4.75rem] h-[19.813rem] bg-[#000209] flex rotate-180 justify-center items-center text-[#86939F] font-normal text-lg tracking-[3%]"
        style={{ writingMode: "vertical-rl" }}
      >
        FEATURED PROJECT
      </div>

      {/* Left div */}
      <div className="w-full h-full pt-[2.125rem] pl-[6.438rem] pr-[4rem]">
        <div className="w-full h-full">
          <h1 className="font-Eskell_Display font-light text-[2rem] leading-[2.75rem] text-white mb-[1.375rem]">
            {props.title}
          </h1>
          <p className="font-Source_Sans_Pro text-[#88939E] font-normal text-[1.25rem] leading-[2rem] ">
            {props.description}
          </p>

          <div className=" font-normal font-Source_Sans_Pro flex gap-[3.625rem] absolute bottom-[2.125rem]">
            <div>
              <h1 className=" text-base text-[#88939E]">Company</h1>
              <h1 className=" text-[1.25rem] leading-[2rem] text-white">
                {props.company}
              </h1>
            </div>
            <div>
              <h1 className=" text-base text-[#88939E]">Period</h1>
              <h1 className=" text-[1.25rem] leading-[2rem] text-white">
                {props.period}
              </h1>
            </div>
            <div>
              <h1 className=" text-base text-[#88939E]">Live</h1>
              <div className="flex gap-[0.649rem] cursor-pointer">
                <h1 className=" text-[1.25rem] leading-[2rem] text-white underline cursor-pointer">
                  {props.project}
                </h1>
                <img
                  src="icons/GreenArrow.svg"
                  className="relative top-[0.094rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right div */}
      <div className="w-full border-l border-[#29333C] py-[0.688rem] pl-[0.563rem]">
        <div className="w-full h-full">
        <img src={props.imgSrc} className="w-full h-full object-cover"/>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
