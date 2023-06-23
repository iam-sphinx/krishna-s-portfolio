import React from "react";
import GrowthCard from "./GrowthCard";
import CustomAnimation from "../utils/customAnimation";

const PersonalGrowthCard = () => {
  const card = [
    {
      title: "Paycrunch",
      position: "PRODUCT DESIGN HEAD",
      role: "Product Designer",
      type: "Fulltime",
      location: "Bengaluru, India",
      liveLink: "https://www.paycrunch.in/",
    },
    {
      title: "Firebond",
      position: "PRODUCT DEVELOPMENT",
      role: "Product Devlopment",
      type: "Fulltime",
      location: "Singapore",
      liveLink: "https://www.firebond.xyz/",
    },
    {
      title: "NIC",
      position: "FRONTEND DEVELOPER",
      role: "Frontend Developer",
      type: "Internship",
      location: "Bengaluru, India",
      liveLink: "https://www.nic.in/",
    },
  ];
  return (
    <CustomAnimation>
      <div className="flex flex-col sm:gap-[1.125rem] gap-[1.375rem] mb-[4.063rem]">
        <h1 className="font-Eskell_Display font-light text-white sm:text-5xl text-[1.5rem] leading-[1.8rem] sm:w-[35.188rem] w-[22.1875rem] sm:pr-0 pr-[0.4375rem]">
          Few of the best places I have worked in the past
        </h1>
        <p className="font-normal sm:text-[1.375rem] sm:leading-[1.65rem] text-[1rem] leading-[1.2rem] text-[#86939F] text-justify sm:w-[44.375rem]">
          Transformative work experiences have enriched my skills, fostered
          personal growth, and allowed me to make a meaningful impact in
          exciting projects.
        </p>
      </div>
      <div className="flex mb-[251px] justify-between">
        <div className="relative top-[6.653rem] hidden sm:block">
          <GrowthCard {...card[0]} />
        </div>
        <div className="hidden sm:block">
          <GrowthCard {...card[1]} />
        </div>
        <div className="relative bottom-[6.653rem] hidden sm:block">
          <GrowthCard {...card[2]} />
        </div>

        {/* For Mobile Screens */}
        <div className="block sm:hidden w-full">

        <div className="flex gap-[1.1675rem] overflow-scroll">
          <div>
            <GrowthCard {...card[0]} />
          </div>
          <div>
            <GrowthCard {...card[1]} />
          </div>
          <div>
            <GrowthCard {...card[2]} />
          </div>
        </div>
        </div>
      </div>
    </CustomAnimation>
  );
};

export default PersonalGrowthCard;
