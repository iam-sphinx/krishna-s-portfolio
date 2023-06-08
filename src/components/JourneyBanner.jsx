import React from "react";
import WorkCard from "./WorkCard";

const JourneyBanner = () => {
  const journey = [
    {
      company: "Firebond",
      date: "DEC 2022 - MAY 2023",
      listItems: [
        "Streamlined user flow for the platform",
        "Designed complete design system for the web app incorporating user research and usability test findings",
      ],
      current: true,
      last: false,
    },
    {
      company: "Paycrunch product designer",
      date: "SEPT 2021 - JULY 2022",
      listItems: [
        "Researched user trends in the fintech sector to implement Go-to-market strategies and the design of the app by following a lean startup approach.",
        "Designed and developed the front-end of PayCrunch’s offical website.",
      ],
      current: false,
      last: false,
    },
    {
      company: "Ministry of IT: Govt of India",
      date: "JUNE 2022 - JULY 2023",
      listItems: [
        "Improved the end-to-end experience of E-prosecution app by conducting usability reviews, identifying UX issues, and proposing design recommendations.",
        "Collaborated with senior management on multiple functions including login process, facial recognition, and attendance system and ensured consistency through documentation of use cases and UI elements.",
      ],
      current: false,
      last: true,
    },
  ];
  return (
    <div className="w-full h-auto bg-[#0D0F14] pb-[3.5rem] pr-[7.125rem] pl-[7.5rem] pt-[8.188rem]">
      <div className="flex justify-between gap-[7.063rem]">
        <div className="flex flex-col gap-[0.875rem]">
          <h1 className="font-normal font-GT_America_Trial text-[#F4B747] tracking-[2%] text-justify text-base">
            The places i worked
          </h1>
          <p className="font-light font-Eskell_Display text-5xl tracking-[1px] text-white">
            Building things for the web focused on development, design and
            everything in between.
          </p>
        </div>
        <div>
          {journey.map((item, index) => {
            return (
              <WorkCard
                key={index}
                company={item.company}
                date={item.date}
                listItems={item.listItems}
                current={item.current}
                last={item.last}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyBanner;
