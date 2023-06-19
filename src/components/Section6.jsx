import React from "react";
import Marquee from "react-fast-marquee";

const Section6 = () => {
  return (
    <div className="w-full sm:h-[68.0625rem] h-[36.5rem] sm:pt-[11.9375rem] pt-[10.0625rem]  relative overflow-hidden">
      <div className="flex flex-col sm:px-0 px-6 items-center ">
        <h1 className="font-Eskell_Display font-light sm:text-5xl sm:leading-[4.2rem] text-[1.5rem] leading-[1.8rem] tracking-[0.0625rem] text-center text-white sm:mb-0 mb-[1.375rem]">
          Cuz life’s more than just meetings and projects
        </h1>
        <p className="sm:w-[45.875rem] text-center font-GT_America_Trial font-normal sm:text-[1.25rem] sm:leading-[1.75rem] text-[1rem] leading-[1.2rem] tracking-[1%] text-[#86939F] sm:mt-[1.875rem]">
          There’s no doubt I’m photogenic so i take the sweet pleasure of
          capturing every moment with my people and of dreams.
        </p>
      </div>

      {/* Gallary */}

      {/* left blur */}
      <div className="absolute bottom-[0.75rem] sm:w-[77.4375rem] w-full left-[50%] translate-x-[-50%]">
        <Marquee speed={35}>
          <div className="flex sm:gap-4 gap-[0.3675rem] sm:mr-4 mr-[0.3675rem]">
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary1.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary2.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary3.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary4.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary5.svg" />
            </div>
          </div>
        </Marquee>

        <Marquee direction="right" speed={35}>
          <div className="flex sm:gap-4 gap-[0.3675rem] sm:mt-4 mt-[0.7806rem] sm:mr-4 mr-[0.3675rem]">
          <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary6.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary7.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary8.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary9.svg" />
            </div>
            <div className="sm:w-auto sm:h-auto h-[6.9313rem] w-[5.3481rem]">
              <img src="icons/gallary10.svg" />
            </div>
          </div>
        </Marquee>
      </div>
      <div
        className="sm:h-[45.5625rem] h-[17.125rem] sm:w-[19.5625rem] w-[4.8125rem] absolute sm:-left-1 -left-7 bottom-[0.75rem] z-10 scale-x-[-1] "
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 3, 10, 0) 0%, #00030A 55.58%)",
        }}
      ></div>
      {/* Right blur */}
      <div
        className="sm:h-[45.5625rem] h-[17.125rem] sm:w-[19.5625rem] w-[4.8125rem] absolute sm:right-0 -right-7 bottom-[0.75rem] z-10 "
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 3, 10, 0) 0%, #00030A 55.58%)",
        }}
      ></div>
    </div>
  );
};

export default Section6;
