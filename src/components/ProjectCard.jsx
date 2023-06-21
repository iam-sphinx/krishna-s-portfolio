import React from "react";
import CustomAnimation from "../utils/customAnimation";

const ProjectCard = (props) => {
  return (
    <CustomAnimation>
      <div className="w-full sm:h-[20.875rem] h-[31.5969rem] bg-[#0D0F13] relative mb-[3rem] flex flex-col sm:flex-row justify-between border border-[#29333C] px-[0.313rem]">
        {/* sideheading */}
        <div className="hidden sm:block">
          <div
            className="absolute top-[0.531rem] w-[4.75rem] h-[19.813rem] bg-[#000209] flex rotate-180 justify-center items-center text-[#86939F] font-normal text-lg tracking-[3%]"
            style={{ writingMode: "vertical-rl" }}
          >
            FEATURED PROJECT
          </div>
        </div>

        {/* Left div */}
        <div className="w-full h-full sm:pt-[2.125rem] sm:pl-[6.438rem] sm:pr-[4rem] pt-[1.5625rem] pl-[1.5625rem] pr-[1.1875rem]  sm:border-none border-b border-[#29333C]">
          <div className="w-full h-full pb-[2.125rem]  flex flex-col">
            <h1 className="font-Eskell_Display font-light sm:text-[2rem] sm:leading-[2.75rem] text-2xl leading-[44px] text-white sm:mb-[1.375rem] mb-[0.4375rem]">
              {props.title}
            </h1>
            <p className="font-Source_Sans_Pro text-[#88939E] font-normal sm:text-[1.25rem] sm:leading-[2rem] text-base leading-[22.4px] mb-[2.8125rem] sm:mb-0">
              {props.description}
            </p>

            <div className="flex-grow flex justify-start items-end ">
              <div className=" font-normal font-Source_Sans_Pro flex sm:gap-[3.625rem] gap-[1.6875rem]">
                <div>
                  <h1 className=" sm:text-base text-[0.875rem] leading-[0.875rem] text-[#88939E]">
                    Company
                  </h1>
                  <h1 className=" sm:text-[1.25rem] sm:leading-[2rem] text-[1rem] leading-[1rem] text-white sm:mt-0 mt-[0.625rem] whitespace-nowrap">
                    {props.company}
                  </h1>
                </div>
                <div>
                  <h1 className="sm:text-base text-[0.875rem] leading-[0.875rem] text-[#88939E]">
                    Period
                  </h1>
                  <h1 className=" sm:text-[1.25rem] sm:leading-[2rem] text-[1rem] leading-[1rem] text-white sm:mt-0 mt-[0.625rem] whitespace-nowrap">
                    {props.period}
                  </h1>
                </div>
                <div>
                  <h1 className="sm:text-base text-[0.875rem] leading-[0.875rem] text-[#88939E]">
                    Live
                  </h1>
                  <div className="flex gap-[0.649rem] cursor-pointer items-center justify-center">
                    <h1 className=" sm:text-[1.25rem] sm:leading-[2rem] text-[1rem] leading-[1rem] text-white sm:mt-0 mt-[0.625rem] whitespace-nowrap underline cursor-pointer">
                      {props.Project}
                    </h1>
                    <img
                      src="icons/GreenArrow.svg"
                      className=""
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right div */}
        <div className="w-full py-[0.688rem] pl-[0.563rem]">
          <div className="w-full h-full">
            <img
              src={props.imgSrc}
              className="w-full h-full object-cover"
              
            />
          </div>
        </div>
      </div>
    </CustomAnimation>
  );
};

export default ProjectCard;
