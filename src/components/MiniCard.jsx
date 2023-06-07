import React from "react";

const MiniCard = ({ index, title, description }) => {
  return (
    <div className="w-[25.688rem] h-[23.5rem] bg-white rounded-[2rem] p-[0.5rem]">
      <div
        className="w-full h-full bg-cover rounded-[2rem] overflow-hidden relative "
        style={{ backgroundImage: "url(icons/Card.svg)" }}
      >
        <div className="w-full h-full pl-[1.125rem] pt-[2.125rem] pb-[2.375rem]">
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <h1 className="font-GT_America_Mono_Trial font-normal text-base text-[#00030A] tracking-[2%] text-justify mb-[1.125rem] ">
                QUICK NOTE {index}
              </h1>
              <h1 className="font-light text-[2rem] leading-[2.4rem] font-Eskell_Display text-[#00030A]">
                {title}
              </h1>
            </div>
            <div>
              <p className="font-GT_America_Trial font-normal text-[1.125rem] leading-[1.575rem] text-[#636F7A] w-[22.313rem] tracking-[1%]">
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
