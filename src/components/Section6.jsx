import React from "react";
import Marquee from "react-fast-marquee";

const Section6 = () => {
  return (
    <div className="w-full h-[68.0625rem] pt-[11.9375rem]  relative">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-Eskell_Display font-light text-5xl leading-[4.2rem] tracking-[0.0625rem] text-center text-white">
          Cuz life’s more than just meetings and projects
        </h1>
        <p className="w-[45.875rem] text-center font-GT_America_Trial font-normal text-[1.25rem] leading-[1.75rem] tracking-[1%] text-[#86939F] mt-[1.875rem]">
          There’s no doubt I’m photogenic so i take the sweet pleasure of
          capturing every moment with my people and of dreams.
        </p>
      </div>

      {/* Gallary */}

      {/* left blur */}
      <div className="absolute bottom-[0.75rem] w-[77.4375rem] left-[50%] translate-x-[-50%]">
        <Marquee speed={35}>
          <div className="flex gap-4 mr-4">
            <img src="icons/gallary1.svg" />
            <img src="icons/gallary2.svg" />
            <img src="icons/gallary3.svg" />
            <img src="icons/gallary4.svg" />
            <img src="icons/gallary5.svg" />
          </div>
        </Marquee>

        <Marquee direction="right" speed={35}>
        <div className="flex gap-4 mt-4 mr-4">

          <img src="icons/gallary6.svg" />
          <img src="icons/gallary7.svg" />
          <img src="icons/gallary8.svg" />
          <img src="icons/gallary9.svg" />
          <img src="icons/gallary10.svg" />
        </div>
        </Marquee>
      </div>
      <div
        className="h-[45.5625rem] w-[19.5625rem] absolute -left-1 bottom-[0.75rem] z-10 scale-x-[-1] "
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 3, 10, 0) 0%, #00030A 55.58%)",
        }}
      ></div>
      {/* Right blur */}
      <div
        className="h-[45.5625rem] w-[19.5625rem] absolute right-0 bottom-[0.75rem] z-10 "
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 3, 10, 0) 0%, #00030A 55.58%)",
        }}
      ></div>
    </div>
  );
};

export default Section6;
