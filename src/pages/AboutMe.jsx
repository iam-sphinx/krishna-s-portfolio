import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CollageDisplay from "../components/CollageDisplay";
import AboutMeContent from "../components/AboutMeContent";
import JourneyBanner from "../components/JourneyBanner";
import Footer from "../components/Footer";
import DoYouKnowCard from "../components/DoYouKnowCard";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-[#00030a] flex flex-col">
      <Header />
      <div className="flex-[1] sm:px-[7.25rem] px-6">
        <Navbar />
        <div className="sm:mt-[7.563rem] mt-16">
          <h1 className="font-Eskell_Display text-white sm:text-[5.75rem] text-[2.125rem] leading-[2.55rem] sm:leading-[6.9rem] tracking-[0.063rem] text-center sm:px-[8.75rem] px-0">
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

      <div className="flex-[1] sm:px-[7.25rem] px-6 sm:mb-0 mb-[13.5rem]">
        <DoYouKnowCard />
      </div>
      <div className="flex-[1] sm:px-[7.25rem] px-6 ">
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
