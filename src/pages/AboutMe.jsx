import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CollageDisplay from "../components/CollageDisplay";
import AboutMeContent from "../components/AboutMeContent";
import JourneyBanner from "../components/JourneyBanner";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-[#00030a] flex flex-col">
      <Header />
      <div className="flex-[1] px-[7.25rem]">
        <Navbar />
        <div className="mt-[7.563rem]">
          <h1 className="font-Eskell_Display text-white text-[5.75rem] leading-[6.9rem] tracking-[0.063rem] text-center px-[8.75rem]">
            You’ve come this far, don’t hesitate to scroll
          </h1>
        </div>

        {/* Display Section */}
        <div className="mt-8 mb-8">
          <CollageDisplay />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[38.75rem] mb-[9.239rem] ">
            <img src="icons/NavLine.svg" />
          </div>
        </div>

        {/* about me content */}
        <AboutMeContent />
        {/* journey banner */}
      </div>
      <div className="mt-[7.375rem]">
        <JourneyBanner />
      </div>
      <div className="flex-[1] px-[7.25rem]">
        <div className="h-auto w-auto bg-white inline-block rounded-[2rem] overflow-hidden border-10 border-white">
          <img src="icons/Card.svg" />
        </div>
        <div className="mt-[9.438rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
