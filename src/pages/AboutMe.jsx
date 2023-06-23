import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import CollageDisplay from "../components/CollageDisplay";
import AboutMeContent from "../components/AboutMeContent";
import JourneyBanner from "../components/JourneyBanner";
import Footer from "../components/Footer";
import DoYouKnowCard from "../components/DoYouKnowCard";

const AboutMe = () => {
  const [section, setSection] = useState("");
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data) {
      const element = document.getElementById(data.section);
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: element ? element.offsetTop : 0,
        });
      }
    }
  }, [data]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#00030a] flex justify-center">
      <div className="sm:w-[94.5rem] w-[24.375rem] flex flex-col relative">
        {/* <Header /> */}
        <div className="flex-[1] sm:px-[7.25rem] px-6">
          <Navbar />

          <div className="sm:mt-[7.563rem] mt-16">
            <h1 className="font-Eskell_Display text-white sm:text-[5.75rem] text-[2.125rem] leading-[2.55rem] sm:leading-[6.9rem] tracking-[0.063rem] text-center sm:px-[8.75rem] px-0">
              You’ve come this far, don’t hesitate to scroll
            </h1>
          </div>
        </div>

        <div className="flex-[1] sm:px-[7.25rem]">
          {/* Display Section */}

          <div className="sm:mt-8 mt-[7rem] sm:mb-8 mb-[10.2788rem]">
            <CollageDisplay />
          </div>

          <div className="flex justify-center items-center">
            <div className="w-[38.75rem] sm:mb-[9.239rem] mb-[4.5131rem] ">
              <img src="icons/NavLine.svg" />
            </div>
          </div>
        </div>

        <div className="flex-[1] sm:px-[7.25rem] px-6">
          {/* about me content */}
          <AboutMeContent />
          {/* journey banner */}
        </div>
        <div className="mt-[7.375rem]">
          <JourneyBanner />
        </div>

        <div
          className="flex-[1] sm:px-[7.25rem] px-6 mb-[13.5rem]"
          id="do-you-know"
        >
          <DoYouKnowCard />
        </div>

        <div className="flex-[1] sm:px-[7.25rem] px-6 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
