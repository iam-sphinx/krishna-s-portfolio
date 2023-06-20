import React from "react";
import CustomAnimation from "../utils/customAnimation";

const WebCard = () => {
  return (
    <CustomAnimation>
      <div className="relative">
        <div className="relative inline-block">
          <img src="icons/heroImage.svg" loading="lazy"/>
          <div className="absolute sm:top-[9.958rem] sm:-right-[11.5rem] top-[5.9138rem] -right-3 h-[1.0556rem] w-[4.0412rem] sm:h-auto sm:w-auto">
            <img src="icons/PaperTape.svg" loading="lazy"/>
          </div>
          <div className="absolute sm:top-[10.208rem] top-[4.2263rem] sm:-left-20">
            <h1 className="font-PlayFair_Display font-bold italic tracking-[1px] text-white sm:text-[5.75rem] sm:leading-[7.5rem] text-[2.125rem] leading-[7.5rem] whitespace-nowrap">
              I am Building things
            </h1>
            <div className="flex sm:gap-[4.249rem] gap-[1.5625rem] relative sm:bottom-5 bottom-[4.75rem] sm:left-[4.125rem] left-[1.625rem] items-center">
              <div className="sm:w-[2.8131rem] w-[1.4375rem] sm:h-[2.8131rem] h-[1.4375rem] relative">
                <div className="h-full w-0 sm:border-[0.1875rem] border-[0.0956rem] border-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                <div className="w-full h-0 sm:border-[0.1875rem] border-[0.0956rem] border-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              </div>
              <h1 className="font-GT_America_Trial font-black sm:text-[5.75rem] sm:leading-[7.5rem] text-[2.125rem] leading-[7.5rem]  text-white">
                for the web
              </h1>
            </div>
          </div>
        </div>
      </div>
    </CustomAnimation>
  );
};

export default WebCard;
