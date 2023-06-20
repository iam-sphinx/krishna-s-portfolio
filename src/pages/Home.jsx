import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WebCard from "../components/WebCard";
import HeroCard from "../components/HeroCard";
import GreetCard from "../components/GreetCard";
import PersonalGrowthCard from "../components/PersonalGrowthCard";
import CanvasCard from "../components/CanvasCard";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#00030a] flex flex-col">
      {/* <Header /> */}
      <div className=" flex-1 sm:px-[7.25rem] px-6">
        <Navbar />
        <div className="flex justify-center items-center sm:mt-[8.355rem] mt-[6.2175rem]">
          <WebCard />
        </div>
      </div>
      <div className="relative sm:bottom-32 bottom-12 sm:mb-[5.063rem] mb-[2.3344rem]">
        <HeroCard />
      </div>
      <div className="flex-1 sm:px-[7.25rem] px-6 mb-[9.019rem]">
        <GreetCard />
      </div>
      
      <div className="flex-1 sm:px-[7.25rem] px-6">
        <PersonalGrowthCard />
      </div>

      <div className="flex-1 sm:px-[7.25rem] px-6 mb-[5.313rem]">
        <CanvasCard />
      </div>
      <div className="flex-1 ">
        <Section4 />
      </div>
      <div className="flex-1">
        <Section5 />
      </div>
      <div className="flex-1 sm:mb-[10.1875rem] mb-[5.75rem]">
        <Section6 />
      </div>
      <div className="flex-1 sm:px-[7.25rem] px-6">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
