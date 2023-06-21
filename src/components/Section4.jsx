import React from "react";
import FontCard from "./FontCard";
import ProjectCardHome from "./ProjectCardHome";
import CustomAnimation from "../utils/customAnimation";

const Section4 = () => {
  const cards = [
    {
      title: "KryptVault",
      desc: "Blockchain crypto-trading",
      link: "https://github.com/krishnakhanikar11/krypt",
    },
    {
      title: "Beatshop",
      desc: "E-Commerce website",
      link: "https://github.com/krishnakhanikar11/beatShop-Ecommerce",
    },
    {
      title: "Vellbe",
      desc: "Wellness center",
      link: "https://github.com/krishnakhanikar11/vellbeFinal",
    },
    {
      title: "Virgo",
      desc: "QR solution for restaurants",
    },
    {
      title: "TrackME",
      desc: "Workout tracker using NLP",
    },
    {
      title: "Paratop",
      desc: "Stock market news alerting system",
    },
  ];
  return (
    <CustomAnimation>
      <div className="bg-[#111111] sm:h-[89.875rem] h-[77.5625rem] relative overflow-hidden">
        <div className=" hidden sm:block">
          <div className="absolute inline-block top-[7.25rem]">
            <img src="icons/editBackground1.png"  />
          </div>
        </div>

        <div className="absolute sm:top-[22.5rem] top-[5.5rem] left-[50%] translate-x-[-50%]">
          <div className="sm:w-[55.5rem] sm:h-[13.6875rem] w-[21.3125rem] h-[6.9375rem] bg-no-repeat sm:mt-[4.875rem] relative sm:p-[0.375rem] p-[0.1875rem] border-[0.0319rem] border-[#3673F2] border-dashed">
            <div className="sm:w-[0.625rem] w-[0.3125rem] sm:h-[0.625rem] h-[0.3125rem] sm:rounded-[0.125rem] rounded-[0.0631rem]  sm:border border-[0.0319rem] border-[#306FF6] bg-white absolute sm:-top-[0.3125rem] -top-[0.125rem] sm:-left-[0.1875rem] -left-[0.125rem]"></div>
            <div className="sm:w-[0.625rem] w-[0.3125rem] sm:h-[0.625rem] h-[0.3125rem] sm:rounded-[0.125rem] rounded-[0.0631rem]  sm:border border-[0.0319rem] border-[#306FF6] bg-white absolute sm:-bottom-[0.3125rem] -bottom-[0.125rem] sm:-left-[0.1875rem] -left-[0.125rem]"></div>
            <div className="sm:w-[0.625rem] w-[0.3125rem] sm:h-[0.625rem] h-[0.3125rem] sm:rounded-[0.125rem] rounded-[0.0631rem]  sm:border border-[0.0319rem] border-[#306FF6] bg-white absolute sm:-bottom-[0.3125rem] -bottom-[0.125rem] sm:-right-[0.1875rem] -right-[0.125rem]"></div>
            <div className="sm:w-[0.625rem] w-[0.3125rem] sm:h-[0.625rem] h-[0.3125rem] sm:rounded-[0.125rem] rounded-[0.0631rem]  sm:border border-[0.0319rem] border-[#306FF6] bg-white absolute sm:-top-[0.3125rem] -top-[0.125rem] sm:-right-[0.1875rem] -right-[0.125rem]"></div>

            <div className="sm:w-[2.75rem] sm:h-[1.25rem] w-[1.375rem] h-[0.6338rem] bg-[#306FF6] absolute left-0 sm:-top-[2.375rem] -top-[1.1875rem] sm:rounded-[0.625rem] rounded-[0.3169rem] flex justify-center items-center">
              <h1 className="text-white font-Helvetica font-bold sm:text-xs sm:leading-[0.75rem] text-[0.38rem] leading-[0.38rem]">{`<h1>`}</h1>
            </div>

            <div className="sm:h-[1.125rem] sm:w-[1.1875rem] h-[0.5625rem] w-[0.4375rem] sm:border border-[0.0319rem] border-[#306FF6] bg-white flex justify-center items-center absolute top-0 sm:-right-[2.125rem] -right-[0.875rem] rounded-[0.125rem] rounded-r-[0.625rem]">
              <img
                src="icons/bgimg.svg"
                className="hidden sm:block"
                
              />
            </div>

            <div className="sm:w-[13.875rem] sm:h-[2.8125rem] w-[12.0938rem] h-[2.8125rem] sm:rounded-lg rounded-[0.625rem] border-[0.05rem] border-[#373737] bg-[#211E21] absolute sm:-bottom-[5.6875rem] -bottom-[5.375rem] left-[50%] translate-x-[-50%] flex justify-center items-center">
              <div className="flex justify-center items-center sm:gap-[0.8712rem] gap-[0.8069rem]">
                <h1 className="font-GT_America_Trial font-normal sm:text-sm sm:leading-[1.3125rem] text-[0.75rem] leading-[1.3125rem] tracking-[1%] text-center text-[#999999]">
                  Check out more projects
                </h1>
                <div className="sm:h-auto sm:w-auto h-[0.545rem] w-[0.6056rem]">
                  <img src="icons/right.svg"  />
                </div>
              </div>
            </div>

            <div className="h-full w-full relative">
              <div className="h-[0.0625rem] sm:w-[0.625rem] w-[0.25rem] bg-[#61D270] absolute top-0 left-[50%] translate-x-[-50%]" />
              <div className="h-[0.0625rem] sm:w-[0.625rem] w-[0.25rem] bg-[#61D270] absolute bottom-0 left-[50%] translate-x-[-50%]" />
              <div className="h-[0.0625rem] sm:w-[0.625rem] w-[0.25rem] bg-[#61D270] absolute rotate-90 left-0 top-[50%] translate-y-[-50%]" />
              <div className="h-[0.0625rem] sm:w-[0.625rem] w-[0.25rem] bg-[#61D270] absolute rotate-90 right-0 top-[50%] translate-y-[-50%]" />

              <h1 className="font-Eskell_Display font-light sm:text-5xl sm:leading-[3.6rem] text-[1.5rem] leading-[1.8rem] text-center tracking-[0.0625rem] text-white sm:pt-[2.4063rem] pt-[0.5rem]">
                Somewhere between staring at the screen and tilting my head the
                magic is done.
              </h1>
            </div>
          </div>
        </div>

        <div className="absolute sm:top-[49.9rem] sm:w-[61.6231rem]  left-[50%] translate-x-[-50%]  top-[21.0625rem] ">
          <div className="sm:h-auto h-[49.25rem] overflow-hidden">
            <div className=" items-center justify-center  flex sm:flex-wrap flex-nowrap flex-col sm:flex-row sm:gap-4 gap-5">
            <CustomAnimation>

              {cards.map((item, index) => {
                return (
                  <div key={index}>
                    <ProjectCardHome {...item} />
                  </div>
                );
              })}
            </CustomAnimation>
            </div>
          </div>
        </div>
      </div>
    </CustomAnimation>
  );
};

export default Section4;
