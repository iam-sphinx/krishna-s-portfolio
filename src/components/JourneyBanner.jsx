import React from "react";
import WorkCard from "./WorkCard";
import { Slide } from "react-awesome-reveal";
import CustomAnimation from "../utils/customAnimation";

const JourneyBanner = () => {
  const journey = [
    {
      company: "Firebond",
      type: "Fulltime",
      listItems: [
        "Streamlined user flow for the platform",
        "Designed complete design system for the web app incorporating user research and usability test findings",
      ],
      current: true,
      last: false,
    },
    {
      company: "Paycrunch product designer",
      type: "Fulltime",
      listItems: [
        "Researched user trends in the fintech sector to implement Go-to-market strategies and the design of the app by following a lean startup approach.",
        "Designed and developed the front-end of PayCrunch’s offical website.",
      ],
      current: false,
      last: false,
    },
    {
      company: "Ministry of IT: Govt of India",
      type: "Internship",
      listItems: [
        "Improved the end-to-end experience of E-prosecution app by conducting usability reviews, identifying UX issues, and proposing design recommendations.",
        "Collaborated with senior management on multiple functions including login process, facial recognition, and attendance system and ensured consistency through documentation of use cases and UI elements.",
      ],
      current: false,
      last: true,
    },
  ];
  return (
    <div className="w-full h-auto bg-[#0D0F14] sm:pb-[3.5rem] sm:pr-[7.125rem] sm:pl-[7.5rem] sm:pt-[8.188rem] pt-[3.5625rem] px-6 pb-[79px] relative">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-[7.063rem]">
        <div className="flex-grow">
          <div className=" inline-block  sm:sticky sm:top-[7.5rem] gap-[0.875rem] sm:mb-0 mb-[3.625rem] ">
            <CustomAnimation>
              <h1 className="font-normal font-GT_America_Trial text-[#F4B747] tracking-[1px] text-justify sm:text-base text-sm leading-[0.9rem] mb-2 ">
                The places i worked
              </h1>
              <p className="font-light font-Eskell_Display sm:text-5xl tracking-[1px] text-white text-[2.125rem] leading-[2.55rem]">
                Building things for the web focused on development, design and
                everything in between.
              </p>
            </CustomAnimation>
          </div>
        </div>
        <div>
          {journey.map((item, index) => {
            return (
              <WorkCard
                key={index}
               {...item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyBanner;
