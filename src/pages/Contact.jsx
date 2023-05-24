import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Mail from "../components/Mail";
import Footer from "../components/Footer";
import InfiniteScroll from "../components/InfiniteScroll";
import Breaker from "../components/Breaker";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#00030a]">
      <Header />
      <div className="md:px-[127px]">
        <Navbar />
      </div>
      <div className="w-full h-auto px-6">
        {/* Infinite Scroll Section*/}
        <div className="mt-[47px] md:mb-[146px] mb-[23px]">
          {/* <InfiniteScroll /> */}
          {/* <InfiniteScroll/> */}
        </div>

        {/* content */}
        <div className="flex justify-center items-center md:px-[127px]">
          <h1 className="font-Eskell_Display font-light text-[34px] md:text-[92px] md:leading-[110.4px] text-center leading-[47.6px] tracking-[1px] text-white mb-[18px] md:w-[1047px] ">
            All great things must come to an end. But...
          </h1>
        </div>

        <div className="flex justify-center items-center md:px-[127px]">
          <p className="font-normal w-[311px] font-GT_America_Trial text-base md:text-center md:text-2xl md:mb-[89px] md:mt-[30px] text-[#86939F] md:w-[650px]">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* mail id */}
        <div className="flex justify-center items-center md:px-[127px]">
          <div className="mt-10 mb-[133.71px] h-[55.29px] md:h-[88.13px]">
            <Mail />
          </div>
        </div>
      </div>
      <div className="relative md:mx-[127px] ">
        <Breaker />
      </div>
      {/* Footer */}
      <div className="px-6 pb-[26px] pt-10 md:px-[127px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
