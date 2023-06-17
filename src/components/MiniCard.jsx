import React from "react";

const MiniCard = ({ index, title, description }) => {
  return (
    <div className="bg-white rounded-[2rem] p-[0.5rem]">
      <div
        className="w-full h-full bg-cover rounded-[2rem] overflow-hidden relative "
        style={{ backgroundImage: "url(icons/Card.svg)" }}
      >
        <div className="w-full h-full p-[1.125rem] pt-[2.125rem] pb-[2.125rem]">
          <div className="w-full h-full flex flex-col ">
            <div>
              <h1 className="font-GT_America_Mono_Trial font-normal sm:text-base text-sm leading-[16.8px] text-[#00030A] tracking-[2%] text-justify sm:mb-[1.125rem] mb-[0.8844rem] ">
                QUICK NOTE {index}
              </h1>
              <h1 className="font-light sm:text-[2rem] sm:leading-[2.4rem] sm:mb-3 mb-[0.35rem] text-[1.625rem] leading-[1.95rem] font-Eskell_Display text-[#00030A]">
                {title}
              </h1>
            </div>
            <div>
              <p className="font-GT_America_Trial font-normal text-justify sm:text-[1.1rem] sm:leading-[1.575rem] text-[1rem] leading-[1.4rem] text-[#636F7A]  tracking-[1%]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
