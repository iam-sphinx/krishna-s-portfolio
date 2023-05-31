import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Mail from "../components/Mail";
import Footer from "../components/Footer";
import InfiniteScroll from "../components/InfiniteScroll";
import Breaker from "../components/Breaker";

const Contact = () => {
  const [languages, setLanguages] = useState([
    "ನಮಸ್ಕಾರ",
    "Hello",
    "হ্যালো",
    "नमस्ते",
    "வணக்கம்",
    "Hello"
  ]);
  return (
    <div className="min-h-screen bg-[#00030a]">
      <Header />
      <div className="md:px-[127px] px-[24px]">
        <Navbar />
      </div>
      <div className="w-full h-auto px-6">
        {/* Infinite Scroll Section*/}
        <div className="flex justify-center items-center">
          <div className="mt-[98px] hidden md:block mb-6 w-[572px]">
            <InfiniteScroll array={languages} />
          </div>
        </div>
        {/* content */}
        <div className="flex justify-center    items-center   mt-[87px] md:mt-0">
          <h1 className="font-Eskell_Display text-left md:text-center font-light text-[34px] md:text-[92px] md:leading-[110.4px] leading-[47.6px] tracking-[1px] text-white mb-[12px] md:w-[1047px] ">
            All great things must come to an end. But...
          </h1>
        </div>

        <div className="flex justify-center items-center ">
          <p className="font-light font-GT_America_Trial text-base md:text-center text-left md:text-2xl md:mb-[89px] mb-[40px] md:mt-[18px] mt-6px text-[#86939F] md:w-[650px]">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* mail id */}
        <div className="flex justify-center items-center md:px-[127px] ">
          <div className="mb-[133.71px] md:mb-[162px] h-[55.29px] md:h-[88.13px]">
            <Mail />
          </div>
        </div>
      </div>
      <div className="relative md:mx-[127px] ">
        <Breaker />
      </div>
      {/* Footer */}
      <div className="px-6 pb-[26px] md:pt-14 pt-10 md:px-[127px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
