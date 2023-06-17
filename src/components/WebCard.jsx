import React from "react";
import Marquee from "react-fast-marquee";
const WebCard = () => {
  return (
    <div className="relative">
      <div className="relative inline-block">
        <img src="icons/heroImage.svg" />
        <img
          src="icons/PaperTape.svg"
          className="absolute top-[9.958rem] -right-[11.5rem]"
        />
        <div className="absolute top-[10.208rem] -left-20">
          <h1 className="font-PlayFair_Display font-bold italic tracking-[1px] text-white text-[92px] leading-[120px]  whitespace-nowrap">
            I am Building things
          </h1>
          <div className="flex gap-[4.249rem] relative bottom-5 left-[4.125rem]">
            <div>
              <img
                src="icons/horizontal.svg"
                className="relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
              <img
                src="icons/vertical.svg"
                className="relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
            <h1 className="font-GT_America_Trial font-black text-[5.75rem] leading-[7.5rem] tracking-[1px] text-white">
              for the web
            </h1>
          </div>
        </div>
      </div>
    
      
    </div>
  );
};

export default WebCard;
