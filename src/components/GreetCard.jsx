import React from "react";

const GreetCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-[0.875rem] sm:mb-[3.5rem] mb-[1.375rem]">
        <h1 className="font-GT_America_Trial font-normal sm:text-base text-xs leading-[0.9rem] tracking-[2%] text-justify text-[#F4B747]">
          NICE TO MEET YOU
        </h1>
        <p className="font-Eskell_Display font-light text-white sm:text-5xl text-2xl  sm:w-[56.25rem] w-auto">
          Greetings, I'm Krishna, and I specialise in creating diverse creations
          tailored for the digital landscape.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col-reverse sm:gap-[5.313rem] gap-[4.1875rem] items-center ">
        <img src="icons/Avatar.svg" />
        <div className="font-GT_America_Trial font-normal sm:text-2xl text-base leading-[1.2rem] text-justify text-[#86939F]">
          <p className="mb-5">
            Welcome to my world of Development, Product UI Systems, Design, and
            User Experience! Here, I passionately focus on these areas, spending
            time contemplating, writing, and discussing their impacts on
            organisations, teams, and end-users.{" "}
          </p>
          <p>
            Discover a selection of my latest works and collaborations, read
            more about my story, inquire about freelance opportunities, or
            simply invite me for a coffee, virtually or in person. Let's engage
            in meaningful conversations and explore new possibilities together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreetCard;
