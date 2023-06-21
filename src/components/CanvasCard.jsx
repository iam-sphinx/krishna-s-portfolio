import React from "react";
import Marquee from "react-fast-marquee";
import CustomAnimation from "../utils/customAnimation";

const CanvasCard = () => {
  return (
    <CustomAnimation>
      <div
        className="w-full h-auto border-[0.0338rem] border-white"
        style={{ backgroundImage: "url(icons/BigGrid.svg)" }}
      >
        <div className="w-full h-[9.188rem] border-b-[0.313rem] border-white bg-black flex justify-center items-center">
          <div className="flex sm:gap-6 items-center gap-4">
            <div className="sm:h-auto sm:w-auto h-[1.5769rem] w-[2.5rem]">
              <img src="icons/RaceArrow.svg"  />
            </div>
            <h1 className="font-Eskell_Display font-light sm:text-5xl text-[1.5rem] leading-[1.8rem] tracking-[1px] text-white sm:w-auto w-[10.8125rem]">
              My life basically revolves around
            </h1>
            <div className="rotate-180 sm:h-auto sm:w-auto h-[1.5769rem] w-[2.5rem]">
              <img src="icons/RaceArrow.svg"  />
            </div>
          </div>
        </div>

        {/* stickers */}
        <div className="sm:h-[41rem] h-[44.1875rem] relative border-b-[0.0338rem] border-white ">
          <div className="sm:w-[11.9375rem] sm:h-[5.2894rem] w-[9.9375rem] h-[4.4031rem] absolute sm:top-[108px] sm:left-[113.25px] top-[3.1875rem] left-[1.7669rem]">
            <img src="icons/STICKER-2(1).png"  />
          </div>
          <div className="absolute sm:top-[9.375rem] sm:left-[27.7656rem] sm:w-[24.375rem] sm:h-[24.125rem] h-[12.0625rem] w-[12.1875rem] top-[20.0625rem] left-[1.6419rem] rounded-[2.5rem]">
            <img
              src="icons/StudioPic1.png"
              className="w-full h-full object-cover"
              
            />
          </div>
          <div className="sm:h-[14.1219rem] sm:w-[18.0081rem] w-[10.1638rem] h-[7.9706rem] absolute top-[9.9938rem] sm:top-[16.9375rem] sm:left-[5.2669rem] left-[8.3919rem]">
            <img src="icons/plane2.png"  />
          </div>

          {/* <img
          src="icons/Rectangle1.svg"
          className="absolute top-[249.32px] left-[84.27px]"
        /> */}
          <div className="absolute sm:top-[6.1875rem] sm:left-[371.27px] sm:h-[8.9881rem] sm:w-[8.9881rem] h-[4.3906rem] w-[3.7769rem] top-[18.875rem] left-[10.8919rem]">
            <img src="icons/ReactIcon1.png"  />
          </div>

          <div className="absolute sm:top-[168.64px] sm:right-[85.54px] sm:h-[20.2494rem] sm:w-[20.2494rem] h-[3.7788rem] w-[12.275rem] right-[1.3738rem] top-[33.3125rem]">
            <img src="icons/sticker-one-yellow1.png"  />
          </div>
          <div className="absolute sm:top-[323px] sm:right-[235.17px] sm:h-[12.5625rem] sm:w-[12.5625rem] w-[6.3669rem] h-[6.3669rem] top-[36.8125rem] right-[14.3831rem]">
            <img src="icons/STICKER-3 1(1).png"  />
          </div>
          <div className=" sm:h-[13.375rem] sm:w-[13.375rem] w-[5.3219rem] h-[5.195rem] absolute sm:top-[20.125rem] top-[1.9375rem] sm:right-[1.75rem] right-[1.4281rem]">
            <img src="icons/Sticker 1(1).png"  />
          </div>
        </div>
        <div>
          <Marquee direction="right" speed={35}>
            <div className="flex sm:h-[3.9375rem] h-[3.625rem] items-center bg-[#00030a]  ">
              <div className="flex gap-[21.27px] mr-[20.51px] items-center justify-center">
                <div className="sm:h-auto sm:w-auto h-[0.875rem] w-[12.875rem]">
                  <img
                    src="icons/WARNING_ GRAPHIC_CONTENT.svg"
                    
                  />
                </div>
                <div className="sm:h-auto sm:w-auto h-[1.1094rem] w-[1.1387rem]">
                  <img src="icons/arrowIcon.svg"  />
                </div>
              </div>
              <div className="flex gap-[21.27px] mr-[20.51px] items-center justify-center">
                <div className="sm:h-auto sm:w-auto h-[0.875rem] w-[12.875rem]">
                  <img
                    src="icons/WARNING_ GRAPHIC_CONTENT.svg"
                    
                  />
                </div>
                <div className="sm:h-auto sm:w-auto h-[1.1094rem] w-[1.1387rem]">
                  <img src="icons/arrowIcon.svg"  />
                </div>
              </div>
              <div className="flex gap-[21.27px] mr-[20.51px] items-center justify-center">
                <div className="sm:h-auto sm:w-auto h-[0.875rem] w-[12.875rem]">
                  <img
                    src="icons/WARNING_ GRAPHIC_CONTENT.svg"
                    
                  />
                </div>
                <div className="sm:h-auto sm:w-auto h-[1.1094rem] w-[1.1387rem]">
                  <img src="icons/arrowIcon.svg"  />
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </CustomAnimation>
  );
};

export default CanvasCard;
