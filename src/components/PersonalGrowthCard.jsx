import React from "react";
import GrowthCard from "./GrowthCard";

const PersonalGrowthCard = () => {
  const card = [
    {
      title: "Paycrunch",
      position: "PRODUCT DESIGN HEAD",
      role: "Product designer",
      period: "Oct 2020 - May 2022",
      location: "Bengaluru, India",
      liveLink: "",
    },
    {
      title: "Firebond",
      position: "PRODUCT DESIGN",
      role: "Product manager",
      period: "Dec 2022 - May 2023",
      location: "Singapore",
      liveLink: "",
    },
    {
      title: "NIC",
      position: "FRONTEND DEVELOPER",
      role: "Frontend developer",
      period: "June 2022 - July 2022",
      location: "Bengaluru, India",
      liveLink: "",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-[1.125rem] mb-[4.063rem]">
        <h1 className="font-Eskell_Display font-light text-white text-5xl w-[35.188rem]">
          Few of the best places I have worked in the past
        </h1>
        <p className="font-normal text-[1.375rem] leading-[1.65rem] text-[#86939F] text-justify w-[44.375rem]">
          Transformative work experiences have enriched my skills, fostered
          personal growth, and allowed me to make a meaningful impact in
          exciting projects.
        </p>
      </div>
      <div className="flex gap-5 mb-[251px]">
        <div className="relative top-[6.653rem]">
          <GrowthCard {...card[0]} />
        </div>
        <div>
          <GrowthCard {...card[1]}/>
        </div>
        <div className="relative bottom-[6.653rem]">
          <GrowthCard {...card[2]}/>
        </div>
      </div>
    </div>
  );
};

export default PersonalGrowthCard;
