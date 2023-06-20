import React from "react";
import InfiniteScroll from "../components/InfiniteScroll";
import { useState } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const [languages, setLanguages] = useState([
    "Coming Soon", //English
    "जल्द ही आ रहा है", // Hindi
    "விரைவில் வருகிறது", // Tamil
    "Coming Soon", //English
    "ಶೀಘ್ರದಲ್ಲಿ ಬರುತ್ತದೆ", // Kannada
    "শীঘ্ৰই আহিছে", // Assamese
    "ഉടൻ വരും", // Malayalam
    "ಶೀಘ್ರದಲ್ಲಿ ಬರುತ್ತದೆ", // Kannada
    "ટક", // Gujarati
  ]);
  return (
    <div className="h-screen w-full fixed bg-[#00030A] flex justify-center items-center">
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <div className="flex justify-center items-center">
            <div className="md:w-[783px] w-[395px]">
              <InfiniteScroll array={languages} />
            </div>
          </div>
          <Link to="/home">
            <div className="flex justify-center items-center md:mt-[30px] md:mb-[83px] mt-[32.12px] mb-[67px]">
              <h1 className="md:font-normal font-Eskell_Display bg-gradient-to-b from-white  to-[#A2A3A4] md:text-[82px] md:leading-[98.4px] md:tracking-[2px] text-center  text-transparent bg-clip-text text-[36.43px] leading-[43.72px] tracking-[0.89px] font-extralight ">
                Krishna <span className="font-mangal">खानिकर</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
          <img src="icons/BoldLine.svg" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
